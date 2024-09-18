import styled from 'styled-components';
import { COLORS } from '../../../models/colors';

export const Container = styled.div`
  min-height: 100vh;
  overflow-y: hidden;
  background-color: ${({ light }) => (light ? COLORS.LIGHT : COLORS.BLACK)};
  &.cache {
    height: 0;
    width: 0;
  }
`;
