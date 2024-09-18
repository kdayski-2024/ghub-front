import React from 'react';
import * as Styled from './styled';
import PortalImage from '../img/portal.svg';
import LogoIcon from '../img/logo-icon.svg';

const Portal = () => {
  return (
    <Styled.Portal>
      <Styled.PortalInnerPosition>
        <Styled.PortalLayout src={PortalImage} alt="Portal" />
        <Styled.LogoIcon src={LogoIcon} alt="Logo icon" />
      </Styled.PortalInnerPosition>
    </Styled.Portal>
  );
};

export default Portal;
