import styled from 'styled-components';
import { COLORS } from '../../models/colors';
import ComplicatedGradientPink from '../Icons/ComplicatedGradientPink/ComplicatedGradientPink.svg';

export const AccordionCases = styled.div``;

export const Body = styled.div`
  background-image: url(${ComplicatedGradientPink});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10px;
  padding: 60px;
  p {
    line-height: 140%;
    color: ${COLORS.LIGHT};
  }

  @media (max-width: 1439px) {
    width: auto;
    padding: 30px;
  }

  @media (max-width: 767px) {
    padding: 20px;
  }
`;
export const AccordionItem = styled.div`
  border-top: 0.5px ${COLORS.GRAY} solid;
  padding: 20px 0 40px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1439px) {
    padding: 20px 0 30px;
    gap: 30px;
  }

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const Collapse = styled.div`
  height: ${({ isOpen, itemRef }) =>
    isOpen ? `${itemRef.current.scrollHeight}px` : '0px'};
  overflow: hidden;
  transition: all 0.3s ease-in-out;
`;
export const Quation = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 20px;
  color: ${({ expanded }) => (expanded ? COLORS.PINK : COLORS.LEMON)};
  cursor: pointer;
  margin-bottom: 40px;
  &:hover {
    color: ${({ expanded }) => (expanded ? COLORS.PINK : COLORS.LIME_LEMON)};
    svg {
      transition: all 0.3s ease-in-out;
      path {
        stroke: ${({ expanded }) =>
          expanded ? COLORS.PINK : COLORS.LIME_LEMON};
      }
    }
  }
  @media (max-width: 1439px) {
    margin-bottom: 30px;
  }
`;

export const Question = styled.div`
  font-size: 18px;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 0.18px;
`;

export const Title = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 30px;
  flex-basis: 50%;

  @media (max-width: 1439px) {
    height: fit-content;
    flex-basis: 33%;
    overflow-wrap: anywhere;

    div {
      margin-top: 1px;
    }
  }
`;

export const Content = styled.div`
  flex-basis: 50%;
  flex-shrink: 0;
  padding-right: 115px;

  @media (max-width: 1439px) {
    flex-basis: 67%;
    padding-right: 0;
  }
`;

export const Description = styled.div`
  margin-bottom: 30px;
  p {
    line-height: 140%;
  }
`;
