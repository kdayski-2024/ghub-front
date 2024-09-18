import styled from 'styled-components';
import { COLORS } from '../../../../models/colors';

export const Card = styled.div`
  padding: 24px;
  background-color: ${COLORS.WHITE};
  box-shadow: 0 1.17px 2px rgba(0, 0, 0, 0.0196802),
    0 1.4px 5px rgba(0, 0, 0, 0.03), 0 2px 10px rgba(0, 0, 0, 0.03),
    0 2px 18px rgba(0, 0, 0, 0.04), 0 9px 33px rgba(0, 0, 0, 0.03);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`;
