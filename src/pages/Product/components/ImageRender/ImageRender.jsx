import React, { useState } from 'react';

import * as Styled from './styled';
import * as UI from '../../../../components/index';
import { COLORS } from '../../../../models/colors';

const API_LINK = process.env.REACT_APP_API_URL;

const ImageRender = ({ link }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setPosition({ x, y });
  };

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  const zoomStyle = hover
    ? {
        transform: 'scale(2.5)',
        transformOrigin: `${position.x}% ${position.y}%`,
      }
    : {};

  return (
    <Styled.ImageRender
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Styled.Image
        width={'500px'}
        height={'600px'}
        src={`${API_LINK}/${link}`}
        style={zoomStyle}
      />
    </Styled.ImageRender>
  );
};

export default ImageRender;
