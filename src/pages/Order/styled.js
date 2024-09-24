import styled from 'styled-components';

export const Basket = styled.div`
  margin-top: 40px;
`;

export const Content = styled.div`
  margin-top: 40px;
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

export const UserData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

export const Offer = styled.div`
  border: 1px solid #e3e1d8;
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

export const DataItem = styled.div`
  border: 1px solid #e3e1d8;
  padding: 32px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  background: #f5f4f1;
`

export const LocationButton = styled(Button)`
  background-color: #ffffff;
  width: fit-content;
  display: flex;
  gap: 4px;
  align-items: center;
  :hover {
    background-color: #ccc6b8;
  }
`;

export const Images = styled.div`
  display: flex;
  gap: 12px;
`

export const Image = styled.div`
  position: relative;
`

export const Amount = styled.div`
  position: absolute;
`