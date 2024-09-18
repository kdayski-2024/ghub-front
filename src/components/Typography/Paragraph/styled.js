import styled from 'styled-components';
import { COLORS } from '../../../models/colors';

const sizeMap = {
  large: {
    fontSize: '20px',
    letterSpacing: '0.18px',
    fontWeight: '500',
    lineHeight: '140%',
  },
  big: {
    fontSize: '17px',
    fontWeight: '400',
    letterSpacing: '0.34px',
    lineHeight: '140%',
  },
  medium: {
    fontSize: '16px',
    letterSpacing: '0.32px',
    lineHeight: '140%',
    fontWeight: '400',
  },
  small: {
    fontSize: '13px',
    letterSpacing: '0.39px',
    lineHeight: '140%',
    fontWeight: '400',
  },
};

export const Paragraph = styled.p`
  margin: 0;
  font-size: ${({ size }) =>
    sizeMap[size]?.fontSize || sizeMap['medium'].fontSize};
  font-style: normal;
  font-weight: ${({ size }) =>
    sizeMap[size]?.fontWeight || sizeMap['medium'].fontWeight};
  line-height: ${({ size, lh }) =>
    lh || sizeMap[size]?.lineHeight || sizeMap['medium'].lineHeight};
  letter-spacing: ${({ size }) =>
    sizeMap[size]?.letterSpacing || sizeMap['medium'].letterSpacing};
  color: ${({ color }) => (color ? color : COLORS.LIGHT)};
  text-transform: ${({ uppercase }) => uppercase && 'uppercase '};
  text-align: ${({ align }) => align && align};

  @media (max-width: 1439px) {
    font-size: ${({ size }) => size === 'large' && '17px'};
    letter-spacing: ${({ size }) => size === 'large' && '0.34px'};
  }
`;
