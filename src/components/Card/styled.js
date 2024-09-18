import styled from 'styled-components';
import { COLORS } from '../../models/colors';

export const Card = styled.div`
  border-radius: 10px;
  background: ${COLORS.RICH_BLACK};
  padding: 30px;

  @media (max-width: 1439px) {
    padding: 30px 20px;
  }
  @media (max-width: 767px) {
    border-radius: ${({ xsRadius }) => xsRadius};
  }
`;
