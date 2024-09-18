import React, { useState } from 'react';

import * as Styled from './styled';
import * as UI from '../index';

const Input = ({ placeholder, checkbox, paste, onChange, label, number, error, ...props }) => {
  const [value, setValue] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (e) => {
    let inputValue = e.target.value;
    if (number) {
      inputValue = e.target.value.replace(/[^0-9]/g, '');
    }
    setValue(inputValue);
    if (onChange) {
      onChange(inputValue);
    }
  };

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
  };

  const handlePasteClick = () => {
    navigator.clipboard
      .readText()
      .then((clipboardText) => {
        setValue(clipboardText);
        if (onChange) {
          onChange(clipboardText);
        }
      })
      .catch((err) => {
        console.error('Ошибка при чтении буфера обмена: ', err);
      });
  };
  const handleCleanClick = () => {
    setValue('');
    if (onChange) {
      onChange('');
    }
  };

  const handleCheckboxChange = () => {
    setIsChecked((prevState) => {
      if (onChange) {
        onChange(!prevState);
      }
      return !prevState;
    });
  };

  return (
    <Styled.Container>
      {checkbox ? (
        <Styled.Label htmlFor="check">
          <Styled.Checkbox
            type="checkbox"
            id="check"
            name="check"
            checked={isChecked || props.value}
            onChange={handleCheckboxChange}
          />
          <Styled.CustomCheckbox></Styled.CustomCheckbox>
          <UI.Paragraph size="small">{label}</UI.Paragraph>
        </Styled.Label>
      ) : (
        <Styled.Input
          placeholder={placeholder}
          value={value}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          {...props}
        />
      )}

      {paste &&
        (value.length > 0 ? (
          <Styled.Text status={isFocused} onClick={handleCleanClick}>
            Clean
          </Styled.Text>
        ) : (
          <Styled.Text status={isFocused} onClick={handlePasteClick}>
            Paste
          </Styled.Text>
        ))}

      {error ? <Styled.FormErrorText>{error}</Styled.FormErrorText> : null}
    </Styled.Container>
  );
};

export default Input;
