import React, { useEffect, useState } from 'react';

import * as Styled from '../styled';
import * as UI from '../../../components/index';
import { COLORS } from '../../../models/colors';
import Delete from './Detele';
import Button from '../../Product/components/Button/Button';
import { useBasket } from '../../../hooks';
import BasketService from '../../../services/basket.service';
import { TYPOGRAPHY_SIZE } from '../../../models/types';
const API_LINK = process.env.REACT_APP_API_URL;

const Product = ({ product, ...props }) => {
  const [count, setCount] = useState(product.amount);
  const { loading } = useBasket();

  useEffect(() => {
    if (count !== product.amount) BasketService.update(product.productId, count);
    // eslint-disable-next-line
  }, [count]);

  useEffect(() => {
    setCount(product.amount);
  }, [product]);

  return (
    <Styled.Product {...props}>
      <Styled.ProductDescElem>
        <Styled.Image src={`${API_LINK}/assets/${product.product.image[0]}`} width="128px" height="128px" />
      </Styled.ProductDescElem>

      <Styled.ProductDescElem>
        <UI.Paragraph color={COLORS.BLACK} size={TYPOGRAPHY_SIZE.SMALL}>
          Арт. {product.productId}
        </UI.Paragraph>
        <UI.Paragraph color={COLORS.BLACK} size={TYPOGRAPHY_SIZE.MEDIUM}>
          {product.product.title}
        </UI.Paragraph>
        <Delete setCount={setCount} />
      </Styled.ProductDescElem>

      <Styled.ProductDescElemLast>
        <UI.Paragraph color={COLORS.BLACK} size={TYPOGRAPHY_SIZE.MEDIUM}>
          {product.product.price} ₽
        </UI.Paragraph>
        <Button count={count} setCount={setCount} noText disabled={loading} />
      </Styled.ProductDescElemLast>
    </Styled.Product>
  );
};

export default Product;
