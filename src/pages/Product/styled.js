import styled from 'styled-components';

export const Product = styled.div`
  padding-top: 80px;
  display: flex;
  gap: 60px;
`;

export const ProductInfo = styled.div`
  width: 100%;
`;

export const BasketInfo = styled.div`
  flex-basis: 35%;
  flex-shrink: 0;
`;

export const ProductTitle = styled.div`
  padding-bottom: 12px;
  p {
    font-weight: 500;
  }
`;

export const Price = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding-bottom: 12px;
  p {
    font-weight: 500;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 30px;
`;
