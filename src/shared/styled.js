import styled, { keyframes } from 'styled-components';

export const Portal = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  bottom: -20px;
  z-index: 0;

  @media (max-width: 1366px) {
    bottom: -40px;
  }

  @media (max-width: 1439px) {
    bottom: -650px;
  }

  @media (max-width: 767px) {
    bottom: 20px;
  }
`;

export const PortalInnerPosition = styled.div`
  position: relative;
`;

const PortalAnimation = keyframes`
  0% { transform: translate(-50%, 0); }
  100% { transform: translate(-50%, 60px); }
`;

const PortalMobileAnimation = keyframes`
  0% { transform: translate(-50%, 20px); }
  100% { transform: translate(-50%, 60px); }
`;

export const PortalLayout = styled.img`
  @media (max-width: 767px) {
    width: 226px;
  }
`;

export const LogoIcon = styled.img`
  position: absolute;
  bottom: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ${PortalAnimation} 1.5s infinite alternate-reverse;

  @media (max-width: 767px) {
    width: 90px;
    animation: ${PortalMobileAnimation} 1.5s infinite alternate-reverse;
  }
`;
