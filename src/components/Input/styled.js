import styled from 'styled-components';
import { COLORS } from '../../models/colors';
import CheckboxCheck from '../Icons/CheckboxCheck/checkbox-check.svg';

export const Input = styled.input`
  width: 100%;
  border-radius: 5px;
  border: 0.5px solid ${COLORS.GRAY};
  background: ${COLORS.RICH_BLACK};
  padding: 10px 50px 10px 15px;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0.18px;
  line-height: 100%;
  color: ${COLORS.LIGHT};
  outline: none;
  ::placeholder {
    color: ${COLORS.PURPLE_GRAY};
  }
  :focus {
    border: 1px solid ${COLORS.LIGHT_BRIGHT};
    background: ${COLORS.DARK};
    ::placeholder {
      color: ${COLORS.GRAY};
    }
  }
  @media (max-width: 1439px) {
    font-size: 13px;
  }
`;

export const Text = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  color: ${({ status }) => (status ? COLORS.LIGHT : COLORS.GRAY)};
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  letter-spacing: 0.39px;
  font-size: 13px;
  margin-right: 15px;
  cursor: pointer;
`;
export const Container = styled.div`
  position: relative;
  width: 100%;
`;

export const CustomCheckbox = styled.span`
  position: relative;
  display: inline-block;
  width: 15px;
  height: 15px;
  background: transparent;
  border-radius: 2px;
  border: 1px solid ${COLORS.PURPLE_GRAY};
  flex-shrink: 0;
  :before {
    content: '';
    display: inline-block;
    width: 10px;
    height: 10px;

    background-image: url(${CheckboxCheck});
    background-size: contain;
    background-repeat: no-repeat;

    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) scale(0);
  }
`;

export const Checkbox = styled.input`
  position: absolute;
  opacity: 0;
  z-index: -1;
  &:checked + ${CustomCheckbox} {
    background: #eeeaf7;
    border: 1px solid ${COLORS.LIGHT};
    :before {
      transform: translate(-50%, -50%) scale(1);
    }
  }
`;

export const Label = styled.label`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 15px;
  cursor: pointer;
  p {
    color: ${COLORS.PURPLE_GRAY};
    span {
      color: ${COLORS.PURPLE_BRIGHT};
      cursor: pointer;
    }
  }
`;

export const FormErrorText = styled.div`
  background-color: ${COLORS.WARNINGS};
  border-radius: 5px;
  margin: 0 20px;
  padding: 5px;
  position: absolute;
  bottom: -11px;
  left: -3px;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 10px;
  letter-spacing: 0.39px;
  color: ${COLORS.BLACK};
`;
