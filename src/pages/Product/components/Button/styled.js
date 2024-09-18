import styled from 'styled-components';
import { COLORS } from '../../../../models/colors';

export const Button = styled.button`
  padding: 10px 22px;
  border: none;
  background-color: ${({ count }) => (count > 0 ? COLORS.WHITE : '#21282b')};
  border-radius: 4px;
  box-shadow: inset 0 0 0 1px #ccc6b8;
  width: 100%;
  :hover {
    cursor: pointer;
    background-color: ${({ count }) => (count > 0 ? COLORS.WHITE : '#000000')};
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
