import React from 'react';
import * as Styled from './styled';

export const H2 = ({ children, color, noMedia, ...props }) => {
  return (
    <Styled.H2 noMedia={noMedia} color={color} {...props}>
      {children}
    </Styled.H2>
  );
};

export default H2;
