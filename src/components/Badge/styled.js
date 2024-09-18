import styled from 'styled-components';
import { COLORS } from '../../models/colors';

export const Badge = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.LEMON};
  border-radius: 10px;
  min-width: ${({ width }) => (width ? width : '30px')};
  height: ${({ height }) => (height ? height : '30px')};
  padding: ${({ padding }) => (padding ? padding : '0px')};
  p {
    font-weight: 500;
    color: ${COLORS.BLACK};
  }
`;
