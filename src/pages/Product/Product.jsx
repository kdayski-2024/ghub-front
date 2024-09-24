import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useBasket, useProduct } from '../../hooks';

import ProductService from '../../services/product.service';
import BasketService from '../../services/basket.service';

import * as Styled from './styled';
import * as UI from '../../components/index';
import { COLORS } from '../../models/colors';

import Card from './components/Card/Card';
import Button from './components/Button/Button';
import ButtonLink from './components/ButtonLink/ButtonLink';
import ImageRender from './components/ImageRender/ImageRender';
import Tabs from './components/Tabs/Tabs';

const Product = () => {
  const [count, setCount] = useState(1);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const { product, loading: productLoading } = useProduct();
  const { loading: basketLoading } = useBasket();

  useEffect(() => {
    setLoading(productLoading || basketLoading);
  }, [productLoading, basketLoading]);

  useEffect(() => {
    ProductService.getData(id);
  }, [id]);

  useEffect(() => {
    if (product) BasketService.update(product.id, count);
  }, [count, product]);

  return (
    <>
      {product && (
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
                <Button count={count} setCount={setCount} disabled={loading} />
                {count > 0 ? <ButtonLink /> : null}
              </Styled.ButtonWrapper>
            </Card>
          </Styled.BasketInfo>
        </Styled.Product>
      )}
    </>
  );
};

export default Product;
