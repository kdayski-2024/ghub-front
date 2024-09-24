import React from 'react';

import * as Styled from '../styled';
import * as UI from '../../../components/index';
import { COLORS } from '../../../models/colors';
import { TYPOGRAPHY_SIZE } from '../../../models/types';

const Location = () => {
  return (
    <Styled.DataItem>
      <UI.Paragraph color={COLORS.BLACK} size={TYPOGRAPHY_SIZE.LARGE}>
        Способ получения
      </UI.Paragraph>
      <UI.Paragraph color={COLORS.BLACK} size={TYPOGRAPHY_SIZE.MEDIUM}>
        Выберите адрес доставки, пункт выдачи или магазин самовывоза
      </UI.Paragraph>
      <Styled.LocationButton>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="#464C5C" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.49539 12.2808C6.48584 13.7657 7.97477 15.3977 10 17.1831C12.0252 15.3977 13.5142 13.7657 14.5046 12.2808C15.5644 10.692 16 9.35326 16 8.22297C16 4.79931 13.3168 2.33301 10 2.33301C6.68324 2.33301 4 4.79931 4 8.22297C4 9.35326 4.43564 10.692 5.49539 12.2808ZM10.5481 18.6948C10.233 18.9659 9.76701 18.9659 9.45189 18.6948C4.84276 14.7292 2.5 11.2666 2.5 8.22297C2.5 3.9127 5.91421 0.833008 10 0.833008C14.0858 0.833008 17.5 3.9127 17.5 8.22297C17.5 11.2666 15.1572 14.7292 10.5481 18.6948ZM11.6667 8.33301C11.6667 9.25348 10.9205 9.99967 10 9.99967C9.07953 9.99967 8.33333 9.25348 8.33333 8.33301C8.33333 7.41253 9.07953 6.66634 10 6.66634C10.9205 6.66634 11.6667 7.41253 11.6667 8.33301Z"
          ></path>
        </svg>
        <span>Выбрать на карте</span>
      </Styled.LocationButton>
    </Styled.DataItem>
  );
};

export default Location;
