import styled from 'styled-components';
import { COLORS } from '../../models/colors';

export const Catalogue = styled.div`
  padding-top: 80px;
`;

export const Title = styled.div`
  margin-bottom: 30px;
`;

export const Image = styled.img`
  margin-bottom: 16px;
`;

export const RenderWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0 0 0.5px ${COLORS.LIGHT_YELLOW};
  padding: 16px;
  border-radius: 6px;
`;
