import Web3 from 'web3';

import { EthereumProvider } from '@walletconnect/ethereum-provider';
import { MetaMaskSDK } from '@metamask/sdk';
import BN from 'bn.js';

import { BehaviorSubject } from 'rxjs';
import { isMobile, simplifyErrorMessage } from '../lib/lib';
import MessageDialogService from './message-dialog.service';
import ERC20Abi from '../abi/ERC20.json';
const PROJECT_ID = process.env.REACT_APP_PROJECT_ID;

class WalletService {
	initialState = {
		chainId: 1,
		balance: 0,
		balanceETH: 0,
		balanceToken: 'ETH',
		connected: false,
		connecting: false,
		isNotEnoughBalance: false,
		isNotSupportedNetwork: false,
		address: '',
		networkName: '',
		error: '',
		deviceType: '',
		providerType: '',
	};

	state = this.initialState;
	state$ = new BehaviorSubject(this.initialState);

	constructor() {
		this.providerOptions = null;
		this.provider = null;
		this.web3 = null;
		this.metadata = {
			name: 'Global Hub',
			description: 'Global Hub',
			url: 'http://mars1.fanil.ru:9001/',
			icons: ['https://sell-high.io/static/media/logo.53cae53b.png'],
		};
		this.providerConfig = {
			wc: {
				projectId: PROJECT_ID || '1bf787b291c7fdfbdffa2e03ba13a8a8',
				showQrModal: true,
				qrModalOptions: { themeMode: 'light' },
				chains: [1],
				optionalChains: [42161, 421614],
				methods: ['eth_sendTransaction', 'personal_sign', 'wallet_switchEthereumChain'],
				events: ['chainChanged', 'accountsChanged', 'disconnect'],
				metadata: this.metadata,
			},
			mm: {
				projectId: PROJECT_ID || '1bf787b291c7fdfbdffa2e03ba13a8a8',
				dappMetadata: this.metadata,
			},
		};

		this.activateConnection();
	}

	activateConnection = async () => {
		this.state = {
			...this.state,
			connecting: true,
		};
		this.state$.next(this.state);
		const walletLS = JSON.parse(window.localStorage.getItem('wallet'));

		if (walletLS) {
			await this.#setProviderOptions(walletLS.providerType, true);

			const addressResponse = await this.#getUserAddress(walletLS.deviceType);
			const chainId = Number((await this.web3.eth.getChainId()).toString());
			const networkName = await this.#getNetworkName(chainId);

			this.state = {
				...this.state,
				...walletLS,
				connected: true,
				address: addressResponse[0],
				chainId,
				networkName,
				connecting: false,
			};

			this.#storeConnection();

			this.state$.next(this.state);
		} else {
			this.state = {
				...this.state,
				connecting: false,
			};

			this.state$.next(this.state);
		}
	};

	#getUserAddress = async (deviceType) => {
		if (deviceType === 'desktop' && !Object.keys(this.provider).includes('wc')) {
			return await this.provider.request({
				method: 'eth_requestAccounts',
			});
		} else {
			return this.provider.enable();
		}
	};

	#getBalance = async (token, address, provider) => {
		try {
			const web3 = new Web3(provider);
			const contract = new web3.eth.Contract(ERC20Abi, token);
			const balance = await contract.methods.balanceOf(address).call();
			const decimals = await contract.methods.decimals().call();
			if (decimals === '18') {
				return this.#roundDown(web3.utils.fromWei(balance, 'ether'), 6);
			}
			if (decimals !== '18') {
				const delimiter = new BN('10').pow(new BN(String(18 - Number(decimals)))).toString();
				const value = new BN(String(balance)).mul(new BN(delimiter)).toString();
				return this.#roundDown(web3.utils.fromWei(value, 'ether'), 6);
			}
		} catch (e) {
			console.log(e);
			throw e;
		}
	};

	#roundDown = (num, precision) => {
		precision = Math.pow(10, precision);
		return Math.floor(num * precision) / precision;
	};

	#getTargetToken = (TOKENS_INFO, chainId, symbol) => {
		let targetToken = TOKENS_INFO[chainId].base.find((item) => item.symbol.toLowerCase() === symbol.toLowerCase());
		if (!targetToken) {
			targetToken = TOKENS_INFO[chainId].usd.find((item) => item.symbol.toLowerCase() === symbol.toLowerCase());
		}

		if (targetToken) return targetToken;
		else return TOKENS_INFO[chainId].base[0];
	};

	setBalanceToken = async (config, symbol) => {
		const { CHAIN_LIST, TOKENS_INFO } = config;
		const chainId = this.state.chainId || CHAIN_LIST[0];
		const targetToken = this.#getTargetToken(TOKENS_INFO, chainId, symbol);

		this.state = {
			...this.state,
			balanceToken: targetToken.symbol,
		};

		this.state$.next(this.state);
	};

	setBalance = async (config, wallet, symbol) => {
		if (!this.state.connected) {
			return;
		}

		const { chainId } = wallet;
		const { CHAIN_LIST, TOKENS_INFO } = config;
		if (this.provider && CHAIN_LIST.includes(Number(chainId))) {
			const targetToken = this.#getTargetToken(TOKENS_INFO, chainId, symbol);
			const balanceWei = await this.web3.eth.getBalance(this.state.address);
			const balanceETH = this.#roundDown(this.web3.utils.fromWei(balanceWei, 'ether'), 6);
			let balance = balanceETH;
			if (targetToken.symbol !== 'ETH') {
				balance = await this.#getBalance(targetToken.address, this.state.address, this.provider);
			}

			this.state = {
				...this.state,
				balance,
				balanceETH,
				balanceToken: targetToken.symbol,
			};

			this.#storeConnection();

			this.state$.next(this.state);
		}
	};

	isNotEnoughBalance = async (price, amount, direction, tokenSymbol, usdSymbol, config) => {
		if (!this.state.connected || !price || !tokenSymbol || !direction || !config) {
			return;
		}
		if (tokenSymbol === 'ETH') tokenSymbol = 'WETH';
		if (direction === 'buy') tokenSymbol = usdSymbol;
		const balance = await this.balanceOfPayer(tokenSymbol, this.state.chainId, config);
		let result = false;
		if (direction === 'sell' && amount) {
			if (tokenSymbol === 'WETH') {
				result = amount >= parseFloat(this.state.balance) + parseFloat(balance);
			} else {
				result = amount > parseFloat(this.state.balance) + parseFloat(balance);
			}
		}
		if (direction === 'buy' && amount && price) {
			result = amount * price > parseFloat(this.state.balance) + parseFloat(balance);
		}
		this.state = {
			...this.state,
			isNotEnoughBalance: result,
		};

		this.state$.next(this.state);
	};

	setIsNotSupportedNetwork = async (chain_id, config) => {
		if (!this.state.connected) {
			return;
		}

		const result = !config.CHAIN_LIST_ENV.includes(Number(chain_id));
		this.state = {
			...this.state,
			isNotSupportedNetwork: result,
		};

		this.state$.next(this.state);
	};

	connect = async (provider) => {
		if (this.state.connected) {
			return;
		}
		this.state = {
			...this.state,
			connecting: true,
		};
		this.state$.next(this.state);

		const deviceType = isMobile() ? 'mobile' : 'desktop';

		await this.#setProviderOptions(provider);

		if (this.provider) {
			const addressResponse = await this.#getUserAddress(deviceType);
			const chainId = Number((await this.web3.eth.getChainId()).toString());
			const networkName = await this.#getNetworkName(chainId);

			this.state = {
				...this.state,
				connected: true,
				address: addressResponse[0],
				chainId,
				networkName,
				deviceType,
				providerType: provider,
				connecting: false,
			};

			this.#storeConnection();

			this.state$.next(this.state);
		}
	};

	disconnect = async () => {
		if (this.state.providerType === 'wc') this.web3.eth.currentProvider.disconnect();
		window.localStorage.removeItem('wallet');
		window.localStorage.removeItem('selectWallet');

		this.state = {
			...this.initialState,
			chainId: this.state.chainId,
			balanceToken: this.state.balanceToken,
		};
		this.state$.next(this.state);
	};

	changeNetwork = async (network) => {
		try {
			await this.provider.request({
				method: 'wallet_switchEthereumChain',
				params: [{ chainId: Web3.utils.toHex(Number(network)) }],
			});
		} catch (e) {
			throw e;
		}
	};

	#getTrustWalletInjectedProvider = (
		{ timeout } = { timeout: 3000 }
	) => {
		const provider = this.#getTrustWalletFromWindow();

		if (provider) {
			return provider;
		}

		return this.#listenForTrustWalletInitialized({ timeout });
	}

	#listenForTrustWalletInitialized = (
		{ timeout } = { timeout: 3000 }
	) => {
		return new Promise((resolve) => {
			const handleInitialization = () => {
				resolve(this.#getTrustWalletFromWindow());
			};

			window.addEventListener("trustwallet#initialized", handleInitialization, {
				once: true,
			});

			setTimeout(() => {
				window.removeEventListener(
					"trustwallet#initialized",
					handleInitialization,
					{ once: true }
				);
				resolve(null);
			}, timeout);
		});
	}

	#getTrustWalletFromWindow = () => {
		const isTrustWallet = (ethereum) => {
			const trustWallet = !!ethereum.isTrust;
			return trustWallet;
		};

		const injectedProviderExist =
			typeof window !== "undefined" && typeof window.ethereum !== "undefined";
		if (!injectedProviderExist) {
			return null;
		}
		if (isTrustWallet(window.ethereum)) {
			return window.ethereum;
		}
		if (window.ethereum?.providers) {
			return window.ethereum.providers.find(isTrustWallet) ?? null;
		}
		return window["trustwallet"] ?? null;
	}

	#getBCDataByNetworkId = async (networkId) => {
		switch (networkId) {
			case 1:
				return 'Etherium Mainnet';
			case 80001:
				return 'Mumbai Testnet';
			case 42161:
				return 'Arbitrum Mainnet';
			case 421614:
				return 'Arbitrum Sepolia';
			default:
				return 'Unlisted network';
		}
	};

	#getNetworkName = async (networkId) => {
		return await this.#getBCDataByNetworkId(networkId);
	};

	#setProviderOptions = async (provider, shadow = false) => {
		try {
			switch (provider) {
				case 'wc':
					this.provider = await EthereumProvider.init(this.providerConfig.wc);
					if (!shadow) await this.provider.connect();
					break;
				case 'mm':
					const MMSDK = new MetaMaskSDK(this.providerConfig.mm);
					this.provider = MMSDK.getProvider();
					break;
				case 'okx':
					if (typeof window.okxwallet !== 'undefined' && !isMobile()) {
						this.provider = window.okxwallet;
					} else {
						window.open('https://chromewebstore.google.com/detail/wallet-okx/mcohilncbfahbmgdjkbpemcciiolgcge', '_blank');
						return
					}
					break;
				case 'trust':
					this.provider = await this.#getTrustWalletInjectedProvider();
					break;
				default:
					this.provider = await EthereumProvider.init(this.providerConfig.wc);
					if (!shadow) await this.provider.connect();
					break;
			}
			try {
				await this.provider.request({ method: 'eth_requestAccounts' });
			} catch (e) {
				console.log(e);
				if (e.code === 4001) {
					this.provider = null;
					throw new Error(e.message);
				}
				if (e.code === -32002) {
					const errMessage = 'Connection request is already pending. Please confirm.';
					throw new Error(errMessage);
				}
				await this.disconnect();
				await this.provider.connect();
				await this.provider.request({ method: 'eth_requestAccounts' });
			}
			this.web3 = new Web3(this.provider);
		} catch (e) {
			const error = simplifyErrorMessage(e.message);
			MessageDialogService.showError(error);
			await this.disconnect();
			return;
		}

		// Subscribe to accounts change
		this.provider.on('accountsChanged', async (accounts) => {
			await this.#accountChanged(accounts);
		});

		// Subscribe to chainId change
		this.provider.on('chainChanged', async (chainId) => {
			await this.#chainChanged(+chainId);
		});

		// Subscribe to session disconnection
		this.provider.on('disconnect', async (error) => {
			await this.#providerDisconnected(error);
		});

		// Subscribe to error
		this.provider.on('error', async (error) => {
			console.log(error);
		});
	};

	#accountChanged = async (accounts) => {
		if (this.state.connected) {
			this.state = {
				...this.state,
				address: accounts[0],
			};
			this.#storeConnection();
			this.state$.next(this.state);
		}
	};

	#chainChanged = async (chainId) => {
		if (this.state.connected) {
			try {
				const networkName = await this.#getNetworkName(chainId);
				this.state = {
					...this.state,
					connected: true,
					networkName,
					chainId: chainId,
				};
				this.#storeConnection();
				this.state$.next(this.state);
			} catch (e) {
				this.state = {
					...this.state,
					connected: false,
					chainId: chainId,
					error: e.message,
				};
				this.state$.next(this.state);
			}
		}
	};

	#providerDisconnected = async (error) => {
		// TODO:
	};

	#storeConnection() {
		window.localStorage.setItem(
			'wallet',
			JSON.stringify({
				address: this.state.address,
				chainId: this.state.chainId,
				networkName: this.state.networkName,
				deviceType: this.state.deviceType,
				providerType: this.state.providerType,
			}),
		);
	}

	sendERC20Token = async (tokenAddress, recipient, amount) => {
		if (!this.state.connected) {
			throw new Error('Not connected to any wallet');
		}

		try {
			const web3 = new Web3(this.provider);
			const contract = new web3.eth.Contract(ERC20Abi, tokenAddress);
			const decimals = await contract.methods.decimals().call();
			const amountInSmallestUnit = new BN(amount).mul(new BN(10).pow(new BN(decimals)));

			const transaction = {
				from: this.state.address,
				to: tokenAddress,
				data: contract.methods.transfer(recipient, amountInSmallestUnit.toString()).encodeABI(),
			};

			const txHash = await this.provider.request({
				method: 'eth_sendTransaction',
				params: [transaction],
			});

			return txHash;
		} catch (error) {
			console.error('Error sending ERC20 token:', error);
			throw new Error('Transaction failed');
		}
	};
}

const WalletServiceInstance = new WalletService();
export default WalletServiceInstance;
