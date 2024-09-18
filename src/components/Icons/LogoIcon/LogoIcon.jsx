import React from 'react';
import Logo from '../../../img/logo.svg';
import * as Styled from './styled';

const LogoIcon = ({ size }) => {
  let width;
  let height;
  switch (size) {
    case 'small':
      width = 100;
      height = 15;
      break;
    default:
      width = 120;
      height = 18;
      break;
  }
  return <Styled.Logo src={Logo} alt="" width={width} height={height} />;
};

export default LogoIcon;
