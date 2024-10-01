import React, { useEffect } from 'react';

import * as Styled from './styled';
import * as UI from '../index';
import { COLORS } from '../../models/colors';
import brick from '../../img/brick_logo.png';

import BurgerMenu from './components/BurgerMenu';
import { useWallet } from '../../hooks';
import WalletServiceInstance from '../../services/wallet.service';

const Header = () => {
  const wallet = useWallet();

  useEffect(() => {
    if (wallet.connected && wallet.chainId === 421614) {
      const CHAIN_LIST = [421614];
      const TOKENS_INFO = {
        421614: {
          base: [
            {
              symbol: 'WETH',
              address: '0x5fB5A074a7504C37159E903Ecf412EEbeec231A9',
            },
          ],
          usd: [
            {
              symbol: 'USDT',
              address: '0xc588e6a573E691650Ab01f6Cf01950a606eDB6b5',
            },
          ],
        },
      };
      WalletServiceInstance.setBalance({ CHAIN_LIST, TOKENS_INFO }, wallet, 'USDT');
    }
    // eslint-disable-next-line
  }, [wallet.connected, wallet.chainId]);

  return (
    <Styled.Header>
      <Styled.LogoLink to={'/'}>
        <img height={'50px'} width={'50px'} src={brick} alt="brick" />
      </Styled.LogoLink>

      <Styled.Wrapper>
        <BurgerMenu />
        <Styled.SearchWrapper>
          <Styled.Search placeholder="Поиск" />
          <svg
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-icons-pack="svg"
            width={'24px'}
            style={{ position: 'absolute', left: '10px' }}
          >
            <path
              stroke="#21282b"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="#21282b"
              d="M16.44 16.45 21 21m-2.25-10.12c0 4.35-3.53 7.87-7.87 7.87-4.35 0-7.88-3.52-7.88-7.87S6.53 3 10.88 3c4.34 0 7.87 3.53 7.87 7.88z"
            ></path>
          </svg>
        </Styled.SearchWrapper>
      </Styled.Wrapper>

      <Styled.BalanceWrapper>
        <UI.Paragraph color={COLORS.BLACK} size={'medium'}>
          Баланс: {wallet.balance} {wallet.balanceToken}
        </UI.Paragraph>
      </Styled.BalanceWrapper>

      <Styled.IconWrapper>
        <Styled.IconCircle>
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
            />
          </svg>
        </Styled.IconCircle>
        <Styled.IconCircle>
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              d="M15 9h3m-3 3h3m-3 3h3m-6 1c-.306-.613-.933-1-1.618-1H7.618c-.685 0-1.312.387-1.618 1M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm7 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
            />
          </svg>
        </Styled.IconCircle>
      </Styled.IconWrapper>
    </Styled.Header>
  );
};

export default Header;
