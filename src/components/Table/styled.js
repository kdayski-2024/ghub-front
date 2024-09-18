import styled from 'styled-components';
import { COLORS } from '../../models/colors';

export const Table = styled.table`
  padding: 12px;
  border: 1px solid ${COLORS.LIGHT_GRAY};
  border-radius: 30px;
  margin: 0;
  width: 100%;
  color: ${COLORS.WHITE};
  display: flex;
  flex-direction: column;
  gap: 10px;

  &:hover {
    cursor: default;
  }
`;

export const Thead = styled.thead`
  margin: 0;
  font-size: 20px;

  tr {
    padding: 0 0 16px 0;
  }
`;

export const Tbody = styled.tbody`
  margin: 0;
  font-size: 20px;
  font-weight: bold;

  tr {
    border-top: ${({ hr }) => hr && `3px solid ${COLORS.LIGHT_BLUE}`};
  }
`;

export const Tr = styled.tr`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 16px 0;

  &:hover {
    cursor: pointer;
    background-color: ${({ header }) => !header && COLORS.TRANSPARENT_BRIGHT_BLUE};
  }

  &:last-child {
    &:hover {
      border-radius: ${({ header }) => !header && '0 0 30px 30px'};
    }
  }
`;

export const Th = styled.th`
  width: 100%;
  text-align: center;
  text-transform: capitalize;
`;

export const Td = styled.td`
  width: 100%;
  text-align: center;
  vertical-align: top;
`;
