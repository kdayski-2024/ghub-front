import React from 'react';
import * as Styled from './styled';

const ETHIconSecond = (props) => {
  return (
    <Styled.SVG
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="none"
      viewBox="0 0 30 30"
      {...props}
    >
      <path
        fill="#627EEA"
        d="M15 30c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15C6.716 0 0 6.716 0 15c0 8.284 6.716 15 15 15z"
      ></path>
      <path
        fill="#fff"
        fillOpacity="0.602"
        d="M15.469 3.748v8.316l7.028 3.141L15.47 3.748z"
      ></path>
      <path fill="#fff" d="M15.468 3.748L8.439 15.205l7.029-3.14V3.747z"></path>
      <path
        fill="#fff"
        fillOpacity="0.602"
        d="M15.469 20.593v5.65l7.032-9.73-7.032 4.08z"
      ></path>
      <path fill="#fff" d="M15.468 26.243v-5.65l-7.029-4.08 7.029 9.73z"></path>
      <path
        fill="#fff"
        fillOpacity="0.2"
        d="M15.469 19.286l7.028-4.08-7.028-3.141v7.22z"
      ></path>
      <path
        fill="#fff"
        fillOpacity="0.602"
        d="M8.44 15.206l7.028 4.08v-7.222l-7.029 3.142z"
      ></path>
    </Styled.SVG>
  );
};

export default ETHIconSecond;
