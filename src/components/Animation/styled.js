import styled, { keyframes, css } from 'styled-components';

const slideUpAnimation = (distance) => keyframes`
  from {
    transform: translateY(${distance || '100px'});
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const opacityAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slashAnimation = keyframes`
  0% {
    opacity: 0;
  }
  49% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
`;

export const Animation = styled.div`
  opacity: ${({ type }) => (type === 'text' ? 1 : 0)};
  ${({ type }) =>
    type === 'text' &&
    css`
      animation: none;
    `};
  ${({ active, type }) =>
    active &&
    type === 'opacity' &&
    css`
      animation: ${opacityAnimation} 0.4s ease-out;
    `};
  ${({ active, type, distance }) =>
    active &&
    !type &&
    css`
      animation: ${slideUpAnimation(distance)} 0.4s ease-out;
    `};

  animation-duration: ${({ duration }) => duration || 0.4}s;
  animation-delay: ${({ delay }) => delay || 0}s;
  animation-fill-mode: both;
`;

export const Wrapper = styled.div`
  position: relative;
  display: ${({ type }) => (type === 'text' ? 'inline-block' : 'block')};
`;

export const Slash = styled.div`
  position: absolute;
  right: -100px;
  width: 100px;
  height: 14px;
  background: rgba(215, 203, 250, 0.25);
  animation: ${slashAnimation} 0.6s ease-out infinite;

  @media (max-width: 1439px) {
    right: -64px;
    width: 64px;
    height: 10px;
  }
  @media (max-width: 767px) {
    right: -38px;
    width: 38px;
    height: 6px;
  }
`;
