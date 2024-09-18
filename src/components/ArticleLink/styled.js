import styled from 'styled-components';
import { COLORS } from '../../models/colors';
import { Link } from 'react-router-dom';

export const ArticleLink = styled(Link)`
  width: fit-content;
  text-decoration: none;

  p {
    color: ${COLORS.PURPLE_DARK};
    :hover {
      color: ${COLORS.PINK};
      cursor: pointer;
    }
  }
`;
