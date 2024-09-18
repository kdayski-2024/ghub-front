import React from 'react';
import * as Styled from './styled';

function InfoIcon() {
  return (
    <Styled.SVG
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      fill="none"
      viewBox="0 0 15 15"
    >
      <rect width="15" height="15" fill="#A180FF" rx="7.5"></rect>
      <circle cx="7.5" cy="7.5" r="4.5" fill="#1C102F"></circle>
      <circle cx="7.5" cy="7.5" r="4.5" fill="#1C102F"></circle>
      <path fill="#A180FF" d="M6.825 6.825H8.175V10.2H6.825z"></path>
      <path fill="#A180FF" d="M6.825 4.8H8.175V6.15H6.825z"></path>
    </Styled.SVG>
  );
}

export default InfoIcon;
