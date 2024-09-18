import styled from 'styled-components';
import { COLORS } from '../../models/colors';

export const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  padding: 0;
  margin: 0;
  list-style: none;
  counter-reset: my-awesome-counter;
  li {
    counter-increment: my-awesome-counter;

    &::before {
      content: counter(my-awesome-counter) '. ';
    }
  }
`;

export const ListItem = styled.span`
  color: ${COLORS.TURQUOISE};
  font-weight: ${({ font }) => (font === 'small' ? 'normal' : 'bold')};
  font-size: ${({ font }) => (font === 'small' ? '16px' : '18px')};
  text-align: left;

  @media (max-width: 767px) {
    font-size: ${({ font }) => (font === 'small' ? '16px' : '20px')};
  }
`;

export const ListTitle = styled.div`
  color: ${COLORS.WHITE};
  font-size: 24px;
  text-align: left;
  font-weight: ${({ font }) => (font === 'small' ? 'normal' : 'bold')};

  @media (max-width: 767px) {
    font-size: 20px;
  }
`;
