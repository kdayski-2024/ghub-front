import styled from 'styled-components';
import { COLORS } from '../../../models/colors';

export const HH = styled.h1`
  font-size: ${({ mobile }) => (mobile ? '50px' : '90px')};
  font-weight: 500;
  line-height: 90%;
  color: ${({ color }) => (color ? color : COLORS.LIGHT)};
  margin: 0;

  ${({ noMedia }) =>
    !noMedia &&
    `@media (max-width: 1439px) {
      font-size: 50px;
    }
    `}
`;
