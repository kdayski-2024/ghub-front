import styled from 'styled-components';
import { COLORS } from '../../../../models/colors';

export const Tabs = styled.div`
  width: 100%;
`;

export const TabHeaders = styled.div`
  display: flex;
  border-bottom: 1px solid ${COLORS.GRAY};
`;

export const TabHeader = styled.div`
  margin-left: 40px;
  padding: 10px 0;
  cursor: pointer;
  box-shadow: ${({ isActive }) =>
    isActive ? `0 1px 0 0 ${COLORS.LIGHT_YELLOW}` : 'none'};
  p {
    color: ${({ isActive }) => (isActive ? COLORS.BLACK : COLORS.GRAY)};
  }
  &:hover {
    box-shadow: 0 1px 0 0 ${COLORS.LIGHT_YELLOW};
    p {
      color: ${COLORS.BLACK};
    }
  }
  &:first-child {
    margin-left: 0px;
  }
`;

export const TabContent = styled.div`
  padding: 20px;
  background-color: ${COLORS.WHITE};
`;

export const TabItem = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  margin-bottom: 16px;
`;

export const CharacteristicContent = styled.div``;

export const CharacteristicItem = styled.div`
  display: flex;
`;

export const CharacteristicName = styled.div`
  display: flex;
  flex-basis: 335px;
  margin-right: 8px;
  ::after {
    display: block;
    flex: 1 1 0px;
    margin: 5px 8px;
    border-bottom: 1px dashed #e1e2e5;
    /* border-bottom: 1px dashed red; */

    content: '';
  }
`;

export const Characteristic = styled.div``;
