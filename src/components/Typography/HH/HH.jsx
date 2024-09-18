import React from 'react';
import * as Styled from './styled';

export const HH = ({ color, children, mobile, noMedia }) => {
  return (
    <Styled.HH noMedia={noMedia} mobile={mobile} color={color}>
      {children}
    </Styled.HH>
  );
};

export default HH;
