import styled from 'styled-components';
import { COLORS } from '../../models/colors';

export const ChatIcon = styled.div`
  background-color: ${COLORS.PURPLE_GRAY};
  border-radius: 10px;
  width: fit-content;
  position: relative;
  height: 40px;
  width: 40px;
  cursor: pointer;
  svg {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
  }
`;
