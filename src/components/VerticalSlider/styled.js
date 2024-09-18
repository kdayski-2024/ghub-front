import styled, { keyframes } from 'styled-components';

const slideInFromTop = keyframes`
  0% {
    transform: translateY(-150%);
  }
  100% {
    transform: translateY(0);
  }
`;

const slideInFromBottom = keyframes`
  0% {
    transform: translateY(150%);
  }
  100% {
    transform: translateY(0);
  }
`;

export const Pagination = styled.div`
  width: 16px;
  align-items: center;
  position: absolute;
  right: 100px;
  top: 50%;
  transform: translate(0, -50%);
  display: flex;
  gap: 30px;
  flex-direction: column;
`;
export const PaginationItem = styled.div`
  border-radius: 45px;
  width: 8px;
  height: 8px;
  background: rgba(255, 255, 255, 0.6);

  &.active {
    width: 16px;
    height: 16px;
    background: #ffffff;
    box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.6);
  }
`;

export const Slide = styled.div`
  display: none;

  &.active {
    display: block;
    animation-name: ${({ appearDirection }) =>
      appearDirection === 'top' ? slideInFromTop : slideInFromBottom};
    animation-duration: 0.7s;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
  }
`;
