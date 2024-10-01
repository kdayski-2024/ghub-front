import React, { useEffect, useState } from 'react';

import * as Styled from './styled';
import * as UI from '../../components/index';
import { COLORS } from '../../models/colors';
import { useBasket, useWallet } from '../../hooks';
import { TYPOGRAPHY_SIZE } from '../../models/types';
import BasketService from '../../services/basket.service';
import WalletService from '../../services/wallet.service';

import Location from './components/Location';
import Products from './components/Products';
import Receiver from './components/Receiver';
import Payment from './components/Payment';
import { isMobile } from '../../lib/lib';

const Order = () => {
  const { loading: basketLoading, error: basketError, total } = useBasket();
  const [loading, setLoading] = useState(false);
  const { connected, error, chainId } = useWallet();

  const handleClick = async (e, provider = 'mm') => {
    if (!loading) {
      setLoading(true);
      try {
        if (!connected) {
          const mobile = isMobile();
          if (mobile) provider = 'wc';
          await WalletService.connect(provider);
        } else {
          if (chainId !== 421614) WalletService.changeNetwork(421614);
          else
            WalletService.sendERC20Token(
              '0xc588e6a573E691650Ab01f6Cf01950a606eDB6b5',
              '0x2335E0b50Ed2216A8fB51D7f298042f6aDefE978',
              total
            );
        }
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(basketLoading);
  }, [basketLoading]);

  useEffect(() => {
    BasketService.get();
  }, []);

  useEffect(() => {
    if (error || basketError) alert(error || basketError);
  }, [error, basketError]);

  return (
    <Styled.Basket>
      <UI.H2 color={COLORS.BLACK}>Оформление заказа</UI.H2>
      <Styled.Content>
        <Styled.UserData>
          <Location />
          <Products />
          <Receiver />
          <Payment />
        </Styled.UserData>
        <Styled.Offer>
          <UI.Paragraph color={COLORS.BLACK} size={TYPOGRAPHY_SIZE.LARGE}>
            Ваш заказ
          </UI.Paragraph>
          <Styled.Total>
            <UI.Paragraph color={COLORS.BLACK} size={TYPOGRAPHY_SIZE.MEDIUM}>
              Итого
            </UI.Paragraph>
            <UI.Paragraph color={COLORS.BLACK} size={TYPOGRAPHY_SIZE.LARGE}>
              {total} ₽
            </UI.Paragraph>
          </Styled.Total>
          <Styled.Button disabled={loading} onClick={handleClick}>
            <UI.Paragraph color={COLORS.WHITE} size={TYPOGRAPHY_SIZE.MEDIUM}>
              {!connected && 'Подключить кошелек'}
              {connected && chainId !== 421614 && 'Сменить сеть'}
              {connected && chainId === 421614 && 'Оформить заказ'}
            </UI.Paragraph>
          </Styled.Button>
        </Styled.Offer>
      </Styled.Content>
    </Styled.Basket>
  );
};

export default Order;
