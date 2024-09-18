import styled from 'styled-components';
import { COLORS } from '../../models/colors';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${COLORS.WHITE};
`;

export const Content = styled.div`
  flex: 1;
`;

export const Main = styled.main`
  padding: 0 60px;
  min-height: 100vh;
  @media (max-width: 1439px) {
    padding: 0 30px;
  }
  @media (max-width: 767px) {
    padding: 0 15px;
  }
`;

export const IconWrapper = styled.main`
  position: fixed;
  bottom: 30px;
  right: 30px;
  @media (max-width: 1439px) {
    bottom: 15px;
    right: 15px;
  }
`;
