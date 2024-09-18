import React from 'react';

import * as Styled from './styled';

const Card = ({ children, ...props }) => {
  return <Styled.Card {...props}>{children}</Styled.Card>;
};

export default Card;
