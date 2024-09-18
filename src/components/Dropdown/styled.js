import styled from 'styled-components';
import { COLORS } from '../../models/colors';

export const DropDownContainer = styled('div')`
  width: fit-content;
  position: relative;
  z-index: 1;
  width: 100%;
`;

export const DropDownHeader = styled('div')`
  width: 100%;
  border-radius: ${({ isOpen }) => (isOpen ? '5px 5px 0 0' : '5px')};
  border: 1px solid
    ${({ isOpen }) => (isOpen ? COLORS.PURPLE_BRIGHT : COLORS.PURPLE_GRAY)};
  border-bottom: ${({ isOpen }) =>
    isOpen
      ? `0px solid ${COLORS.PURPLE_BRIGHT}`
      : `1px solid ${COLORS.PURPLE_GRAY}`};
  border-top: 1px solid
    ${({ isOpen }) => (isOpen ? COLORS.PURPLE_BRIGHT : COLORS.PURPLE_GRAY)};
  border-left: 1px solid
    ${({ isOpen }) => (isOpen ? COLORS.PURPLE_BRIGHT : COLORS.PURPLE_GRAY)};
  border-right: 1px solid
    ${({ isOpen }) => (isOpen ? COLORS.PURPLE_BRIGHT : COLORS.PURPLE_GRAY)};
  background: transparent;
  padding: 15px 20px;

  color: ${COLORS.BLACK};
  outline: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  user-select: none;
  span {
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0.18px;
    line-height: 100%;
  }
  &:hover {
    cursor: pointer;
  }
  svg {
    transition: all 0.3s ease-in-out;
  }

  @media (max-width: 1439px) {
    font-size: 13px;
  }
`;

export const DropDownListContainer = styled('div')`
  position: absolute;
  width: 100%;
`;

export const DropDownList = styled('ul')`
  margin: 0;
  background: ${COLORS.LIGHT_BRIGHT};

  box-shadow: 0px 4px 6px 0px rgba(43, 28, 77, 0.25);
  border-radius: 0px 0px 5px 5px;
  padding: 10px 0 10px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-height: 213px;
  overflow-y: scroll;

  border-right: 1px solid ${COLORS.PURPLE_BRIGHT};
  border-bottom: 1px solid ${COLORS.PURPLE_BRIGHT};
  border-left: 1px solid ${COLORS.PURPLE_BRIGHT};
  user-select: none;

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-thumb {
    border: 2px solid ${COLORS.PURPLE_GRAY};
    background-color: ${COLORS.PURPLE_GRAY};
    border-radius: 16px;
  }
`;

export const ListItem = styled('li')`
  list-style: none;
  color: ${COLORS.BLACK};
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.18px;
  text-transform: capitalize;
  padding: 15px 20px;

  &:hover {
    background: ${COLORS.LIGHT};
    cursor: pointer;
  }
`;

export const FormErrorText = styled.div`
  background-color: ${COLORS.WARNINGS};
  border-radius: 5px;
  margin: 0 20px;
  padding: 5px;
  position: absolute;
  bottom: -11px;
  left: -3px;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 10px;
  letter-spacing: 0.39px;
  color: ${COLORS.BLACK};
`;

export const Star = styled.span`
  color: ${COLORS.RED};
`;
