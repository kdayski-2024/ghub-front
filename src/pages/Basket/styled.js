import styled from 'styled-components';

export const Basket = styled.div`
  margin-top: 40px;
`;

export const Content = styled.div`
  margin-top: 72px;
  display: grid;
  grid-template-columns: 1fr 372px;
  gap: 32px;
`

export const Button = styled.button`
  padding: 10px 22px;
  border: none;
  background-color: #21282b;
  border-radius: 4px;
  box-shadow: inset 0 0 0 1px #ccc6b8;
  width: 100%;
  :hover {
    cursor: pointer;
    background-color: #000000;
  }
  p {
    font-weight: 500;
  }
  input[type='number']::-webkit-outer-spin-button,
  input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const Delete = styled(Button)`
  display: flex;
  width: fit-content;
  padding: unset;
  background: unset;
  border: unset;
  box-shadow: unset;
  align-items: center;
  gap: 4px;
  :hover {
    background-color: unset;
  }
  p {
    font-weight: 500;
  }
  input[type='number']::-webkit-outer-spin-button,
  input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const Products = styled.div`
  display: flex;
  flex-direction: column;

  :nth-child(1) {
    border-top: 1px solid #e3e1d8;
  }
`

export const Product = styled.div`
  border-bottom: 1px solid #e3e1d8;
  padding: 32px 0 24px 0;
  display: flex;
  gap: 16px;
`

export const ProductDescElem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
`

export const ProductDescElemLast = styled(ProductDescElem)`
  justify-content: flex-end;
  align-items: flex-end;
  margin-left: auto;
`

export const Image = styled.img`

`

export const Offer = styled.div`
  background: #f5f4f1;
  padding: 32px;
  border-radius: 8px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

