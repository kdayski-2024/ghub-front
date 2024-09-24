import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Styled from './styled';
import * as UI from '../../components/index';
import { COLORS } from '../../models/colors';
import Product from './components/Product';
import { useBasket } from '../../hooks';
import { TYPOGRAPHY_SIZE } from '../../models/types';
import BasketService from '../../services/basket.service';

const Basket = () => {
  const navigate = useNavigate();
  const { basket, loading, total } = useBasket();

  useEffect(() => {
    BasketService.get();
  }, []);

  const handleNavigate = (e) => {
    e.preventDefault();
    navigate('/order');
  };

  return (
    <Styled.Basket>
      <UI.H2 color={COLORS.BLACK}>Корзина</UI.H2>
      <Styled.Content>
        <Styled.Products>
          {basket.map((product) => (
            <Product product={product} />
          ))}
        </Styled.Products>
        <Styled.Offer>
          <Styled.Total>
            <UI.Paragraph color={COLORS.BLACK} size={TYPOGRAPHY_SIZE.MEDIUM}>
              Итого
            </UI.Paragraph>
            <UI.Paragraph color={COLORS.BLACK} size={TYPOGRAPHY_SIZE.LARGE}>
              {total} ₽
            </UI.Paragraph>
          </Styled.Total>
          <Styled.Button disabled={loading} onClick={handleNavigate}>
            <UI.Paragraph color={COLORS.WHITE} size={TYPOGRAPHY_SIZE.MEDIUM}>
              Перейти к оформлению
            </UI.Paragraph>
          </Styled.Button>
        </Styled.Offer>
      </Styled.Content>
    </Styled.Basket>
  );
};

export default Basket;
