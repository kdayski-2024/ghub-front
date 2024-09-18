import React, { useState } from 'react';
import { useOuterClick } from '../../hooks';
import {
  DropDownContainer,
  DropDownHeader,
  DropDownList,
  DropDownListContainer,
  FormErrorText,
  ListItem,
  Star,
} from './styled';
import SelectArrow from '../Icons/SelectArrow/SelectArrow';

const Dropdown = ({
  options,
  onSelectAction,
  placeholder,
  valueSelected,
  error,
  ...props
}) => {
  const dropdownMenuRef = useOuterClick((ev) => {
    if (isOpen) {
      setIsOpen(false);
    }
  });
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    setIsOpen(false);

    if (onSelectAction) {
      onSelectAction(value);
    }
  };

  return (
    <DropDownContainer ref={dropdownMenuRef}>
      <DropDownHeader
        valueSelected={valueSelected || placeholder}
        isOpen={isOpen}
        onClick={toggling}
      >
        <span>
          {valueSelected || (
            <>
              {placeholder}
              <Star>*</Star>
            </>
          )}
        </span>

        <SelectArrow isOpen={isOpen} />
      </DropDownHeader>
      {isOpen && (
        <DropDownListContainer>
          <DropDownList>
            {options.map((option, index) => (
              <ListItem onClick={onOptionClicked(option)} key={index}>
                {option}
              </ListItem>
            ))}
          </DropDownList>
        </DropDownListContainer>
      )}

      {error ? <FormErrorText>{error}</FormErrorText> : null}
    </DropDownContainer>
  );
};

export default Dropdown;
