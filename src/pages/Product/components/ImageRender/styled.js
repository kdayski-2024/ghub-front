import styled from 'styled-components';

export const ImageRender = styled.div`
  overflow: hidden;
  width: 500px;
  height: 600px;
  position: relative;
  cursor: crosshair;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  transition: transform 0.5s ease, top 0.5s ease, left 0.5s ease;
  position: absolute;
  top: 0;
  left: 0;
`;
