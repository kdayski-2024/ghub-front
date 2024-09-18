import React, { useState } from 'react';
import { TooltipText, TooltipWrapper, TitleWrapper } from './styled';
import TooltipIcon from '../Icons/TooltipIcon/TooltipIcon';
import InfoIcon from '../Icons/InfoIcon/InfoIcon';

const Tooltip = ({
  icon,
  secondaryIcon,
  text,
  children,
  swapPosition,
  gap,
  secondary,
  size,
  style,
  ...restProps
}) => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    <TooltipWrapper
      show={show}
      onMouseOver={handleShow}
      onMouseOut={handleClose}
      style={style}
    >
      <TitleWrapper show={show} gap={gap} secondary={secondary}>
        {swapPosition && children}
        {icon && <TooltipIcon show={show} secondary={secondary} size={size} />}
        {secondaryIcon && (
          <InfoIcon show={show} secondary={secondary} size={size} />
        )}
        {!swapPosition && children}
      </TitleWrapper>

      <TooltipText
        secondary={secondary}
        show={show}
        dangerouslySetInnerHTML={{ __html: text }}
        {...restProps}
      />
    </TooltipWrapper>
  );
};

export default Tooltip;
