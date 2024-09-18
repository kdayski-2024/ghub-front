import React from 'react';

function SelectArrow({ isOpen }) {
  const iconStyle = {
    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="9"
      fill="none"
      viewBox="0 0 17 9"
      style={iconStyle}
    >
      <path
        stroke="#1C102F"
        strokeLinecap="round"
        strokeLinejoin="bevel"
        strokeWidth="1.5"
        d="M1 1l7.5 7L16 1"
      ></path>
    </svg>
  );
}

export default SelectArrow;
