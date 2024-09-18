import styled from 'styled-components';
import { COLORS } from '../../../models/colors';

export const Card = styled.div`
  height: ${({ height }) => height};
  padding: 48px 40px;
  display: ${({ flex }) => (flex ? 'flex' : 'grid')};
  justify-content: ${({ justify }) => justify};
  flex-direction: ${({ direction }) => direction};
  gap: ${({ noGap, gapPx }) => {
    if (noGap) return '0';
    if (gapPx) return '80px';
  }};

  background: rgba(0, 0, 0, 0.3);
  box-shadow: 0px 0px 60px rgba(98, 126, 235, 0.1);
  border-radius: 20px;

  @media (max-width: 1439px) {
    padding: 35px 30px;
  }

  @media (max-width: 767px) {
    max-width: 100%;
    padding: 24px 12px;
  }
`;

export const CardHeader = styled.div`
  width: 100%;
  font-size: 30px;
  font-weight: bold;
  color: ${COLORS.WHITE};
  text-align: ${({ align }) => align};

  @media (max-width: 767px) {
    font-size: 32px;
  }
`;

export const CardBody = styled.div`
  width: 100%;
  display: grid;
  gap: 16px;
  margin-bottom: ${({ bottom }) => (bottom ? '128px' : '0')};
`;

export const CardFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: ${({ center }) => (center ? 'space-between' : 'center')};
  font-size: 18px;
  color: ${COLORS.WHITE};
`;
