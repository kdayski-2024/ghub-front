import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useProduct } from '../../hooks';

import ProductService from '../../services/product.service';

import * as Styled from './styled';
import * as UI from '../../components/index';
import { COLORS } from '../../models/colors';

import Card from './components/Card/Card';
import Button from './components/Button/Button';
import ButtonLink from './components/ButtonLink/ButtonLink';
import ImageRender from './components/ImageRender/ImageRender';
import Tabs from './components/Tabs/Tabs';

const Product = () => {
  const [count, setCount] = useState(0);
  const { id } = useParams();
  const { product, loading } = useProduct();
  useEffect(() => {
    ProductService.getData(id);
  }, [id]);
  return (
    <Styled.Product>
      <Styled.ProductInfo>
        <Styled.ImageWrapper>
          <ImageRender link={product.image} />
        </Styled.ImageWrapper>
        <Tabs product={product} />
      </Styled.ProductInfo>
      <Styled.BasketInfo>
        <Card>
          <Styled.ProductTitle>
            <UI.Paragraph color={COLORS.BLACK} size={'big'}>
              {product.title}
            </UI.Paragraph>
          </Styled.ProductTitle>
          <Styled.Price>
            <UI.Paragraph color={COLORS.BLACK} size={'large'}>
              {product.price}
            </UI.Paragraph>
            <UI.Paragraph color={COLORS.BLACK} size={'small'}>
              ₽/шт.
            </UI.Paragraph>
          </Styled.Price>
          <Styled.ButtonWrapper>
            <Button count={count} setCount={setCount} />
            {count > 0 ? <ButtonLink /> : null}
          </Styled.ButtonWrapper>
        </Card>
      </Styled.BasketInfo>
    </Styled.Product>
  );
};

export default Product;
