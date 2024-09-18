import React from 'react';
import Logo from '../../../img/logo-footer.svg';
import WhiteLogoFooter from '../../../img/white-logo-footer.svg';

import * as Styled from './styled.js';

const LogoIconFooter = ({ size, light }) => {
  let width;
  let height;
  switch (size) {
    case 'small':
      width = 124;
      height = 83;
      break;
    default:
      width = 168;
      height = 112;
      break;
  }
  return (
    <Styled.Logo
      src={light ? WhiteLogoFooter : Logo}
      alt="logotype"
      width={width}
      height={height}
    />
  );
};

export default LogoIconFooter;
