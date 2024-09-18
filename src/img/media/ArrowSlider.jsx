import React from 'react';

import { COLORS } from '../../models/colors';

function ArrowSlider({ right, active, onClick }) {
  const handleClick = () => {
    if (active) {
      onClick();
    }
  };

  const color = active ? COLORS.LIGHT : '#827A95';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      fill="none"
      viewBox="0 0 36 36"
      style={{
        transform: right ? 'rotate(180deg)' : 'none',
        cursor: active ? 'pointer' : 'default',
      }}
      onClick={handleClick}
    >
      <rect
        width="35"
        height="35"
        x="35.5"
        y="35.5"
        stroke={color}
        rx="17.5"
        transform="rotate(-180 35.5 35.5)"
      ></rect>
      <path
        fill={color}
        fillRule="evenodd"
        d="M17.666 11.474a.88.88 0 00-.085-1.254.91.91 0 00-1.272.084L10 17.414v1.171l6.309 7.111a.91.91 0 001.272.084.88.88 0 00.085-1.254l-5.001-5.637h12.434A.895.895 0 0026 18a.895.895 0 00-.901-.889H12.664l5.002-5.637z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default ArrowSlider;
