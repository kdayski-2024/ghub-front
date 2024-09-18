import styled from 'styled-components';
import { COLORS } from '../../models/colors';

export const Collapse = styled.div`
  height: ${({ height }) => height && `${height}px`};
  overflow: hidden;
  transition: height 0.2s ease-in-out;
  border-radius: 10px;
  p {
    line-height: 140%;
    color: ${COLORS.LIGHT};
    padding-bottom: 30px;
  }
  a {
    text-decoration: none;
    color: ${COLORS.PINK};
  }
  b {
    font-weight: 500;
  }
`;

export const Trigger = styled.button`
  background: none;
  border: none;
  font: inherit;
  outline: inherit;

  text-align: left;
  width: ${({ type }) => type === 'nested' && 'fit-content'};
  display: flex;
  align-items: center;
  justify-content: ${({ type }) =>
    type === 'nested' ? 'flex-start' : 'space-between'};
  gap: ${({ type }) => (type === 'nested' ? '20px' : '30px')};
  margin-bottom: ${({ type }) => type === 'nested' && '30px'};
  color: ${({ expanded }) => (expanded ? COLORS.LEMON : COLORS.LIGHT)};
  cursor: pointer;
  padding: ${({ type }) =>
    type === 'nested' ? '10px 10px 10px 0' : '0 0 30px 0'};
  svg {
    flex-shrink: 0;
    transition: all 0.2s ease-in-out;
    path {
      stroke: ${({ expanded }) => (expanded ? COLORS.LEMON : COLORS.GRAY)};
    }
  }
`;

export const Question = styled.div`
  font-size: 18px;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 0.18px;
  user-select: none;

  @media (max-width: 1439px) {
    font-size: 17px;
  }
`;

export const Accordion = styled.div`
  width: 100%;
  border-bottom: ${({ type }) =>
    type === 'nested' ? 'none' : `0.5px ${COLORS.GRAY} solid`};
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const Content = styled.div`
  font-size: 18px;
  letter-spacing: 0.18px;
  font-weight: 400;
  line-height: 140%;
  color: ${COLORS.LIGHT};
  padding-bottom: 30px;

  @media (max-width: 1439px) {
    font-size: 17px;
    letter-spacing: 0.34px;
  }
`;
