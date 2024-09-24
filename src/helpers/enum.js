export const COMMON_ERRORS = [
	{ error: 'Failed to fetch', label: 'Server connection lost. Try to reload the page' },
	{ error: 'Internal JSON-RPC error.', label: 'Blockchain connection lost (wallet)' },
	{
		error: 'WebSocket connection failed for host: wss://relay.walletconnect.com',
		label: 'WalletConnect connection lost',
	},
	{ error: 'Not Found', label: 'Entrypoint not Found. Contact support' },
];