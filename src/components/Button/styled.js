import styled from 'styled-components';
import { COLORS } from '../../models/colors';
import { BUTTON_TYPE } from '../../models/types';

export const Button = styled.button`
  padding: 14px 20px;
  border-radius: 5px;
  background: ${({ type, active }) => {
    switch (type) {
      case BUTTON_TYPE.PRIMARY:
        return COLORS.GRADIENT_RED_PINK;
      case BUTTON_TYPE.SUBMIT:
        return COLORS.PURPLE_BRIGHT;
      case BUTTON_TYPE.BIG:
        return COLORS.LEMON;
      case BUTTON_TYPE.BLOG:
        if (active) return COLORS.PURPLE_GRAY;
        return 'transparent';
      default:
        return COLORS.GRADIENT_RED_PINK;
    }
  }};
  box-shadow: ${({ type, active }) => {
    switch (type) {
      case BUTTON_TYPE.BLOG:
        return active ? 'none' : `0px 0px 0px 1px ${COLORS.BLACK}`;
      default:
        return 'none';
    }
  }};
  text-transform: ${({ common }) => !common && 'uppercase'};
  border: none;
  font-weight: 500;
  width: fit-content;
  &:hover {
    cursor: pointer;
    background: ${({ type, active }) => {
      switch (type) {
        case BUTTON_TYPE.PRIMARY:
          return COLORS.PINK;
        case BUTTON_TYPE.SUBMIT:
          return COLORS.PURPLE_DARK;
        case BUTTON_TYPE.BIG:
          return COLORS.LIME_LEMON;
        case BUTTON_TYPE.BLOG:
          return active ? COLORS.PURPLE_GRAY : 'transparent';
        default:
          return COLORS.PINK;
      }
    }};
    box-shadow: ${({ type }) => {
      switch (type) {
        case BUTTON_TYPE.BLOG:
          return `0px 0px 2px 1px ${COLORS.BLACK}`;
        default:
          return 'none';
      }
    }};
  }

  &:focus {
    box-shadow: ${`0px 0px 3px 0px ${COLORS.BOX_SHADOW}`};
    padding: 14px 20px;
    background: ${({ type, active }) => {
      switch (type) {
        case BUTTON_TYPE.PRIMARY:
          return COLORS.GRADIENT_RED_PINK;
        case BUTTON_TYPE.SUBMIT:
          return COLORS.PURPLE_BRIGHT;
        case BUTTON_TYPE.BIG:
          return COLORS.LEMON;
        case BUTTON_TYPE.BLOG:
          return active ? COLORS.PURPLE_GRAY : 'transparent';
        default:
          return COLORS.GRADIENT_RED_PINK;
      }
    }};
    box-shadow: ${({ type, active }) => {
      switch (type) {
        case BUTTON_TYPE.BLOG:
          return active ? 'none' : `0px 0px 0px 1px ${COLORS.BLACK}`;
        default:
          return 'none';
      }
    }};
  }

  &:disabled {
    opacity: 0.5;
    background: ${({ type }) => {
      switch (type) {
        case BUTTON_TYPE.PRIMARY:
          return COLORS.GRADIENT_RED_PINK;
        default:
          return COLORS.GRADIENT_RED_PINK;
      }
    }};
  }
`;
