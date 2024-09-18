import styled from 'styled-components';
import { COLORS } from '../../../../models/colors';

export const ButtonLink = styled.button`
  padding: 10px 22px;
  border: none;
  background-color: #21282b;
  border-radius: 4px;
  box-shadow: inset 0 0 0 1px #ccc6b8;
  text-decoration: none;
  :hover {
    cursor: pointer;
    background-color: #000000;
  }
  p {
    font-weight: 500;
  }
`;
