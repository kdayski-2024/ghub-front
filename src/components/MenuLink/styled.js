import styled from 'styled-components';
import { COLORS } from '../../models/colors';
import { Link } from 'react-router-dom';

export const MenuLink = styled(Link)`
  width: fit-content;
  text-decoration: none;
  a {
    width: fit-content;
  }
  p {
    color: ${COLORS.BLACK};
    :hover {
      color: ${COLORS.YELLOW};
      cursor: pointer;
    }
  }
`;
