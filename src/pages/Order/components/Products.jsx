import React from //  { useEffect, useState }
'react';

import * as Styled from '../styled';
import * as UI from '../../../components/index';
import { COLORS } from '../../../models/colors';
import { TYPOGRAPHY_SIZE } from '../../../models/types';
import { useBasket } from '../../../hooks';

const API_LINK = process.env.REACT_APP_API_URL;

const Products = () => {
  const { basket, total } = useBasket();

  return (
    <Styled.DataItem>
      <Styled.Images>
        {basket.map((item) => (
          <Styled.Image>
            <Styled.Amount>{item.amount}</Styled.Amount>
            <img src={`${API_LINK}/assets/${item.product.image[0]}`} alt="product" width={56} />
          </Styled.Image>
        ))}
      </Styled.Images>
      <UI.Paragraph color={COLORS.BLACK} size={TYPOGRAPHY_SIZE.MEDIUM}>
        Итого {total} ₽
      </UI.Paragraph>
      <UI.Paragraph color={COLORS.BLACK} size={TYPOGRAPHY_SIZE.SMALL}>
        {basket.length} позиции на сумму {total} ₽
      </UI.Paragraph>
    </Styled.DataItem>
  );
};

export default Products;
