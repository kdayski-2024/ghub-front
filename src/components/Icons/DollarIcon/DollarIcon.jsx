import React from 'react';
import Dollar from '../../../img/dollar.png';
import * as Styled from './styled';

const DollarIcon = ({ size }) => {
  let width;
  switch (size) {
    case 'xs':
      width = 20;
      break;
    case 'sm':
      width = 30;
      break;
    default:
      width = 30;
      break;
  }
  return <Styled.Dollar src={Dollar} alt="" width={width} />;
};

export default DollarIcon;
