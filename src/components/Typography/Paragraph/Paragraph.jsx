import React from 'react';
import * as Styled from './styled';

export const Paragraph = ({ children, size, color, lh, ...restProps }) => {
  return (
    <Styled.Paragraph size={size} color={color} lh={lh} {...restProps}>
      {children}
    </Styled.Paragraph>
  );
};

export default Paragraph;
