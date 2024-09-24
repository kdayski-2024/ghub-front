import React from 'react';

import * as Styled from './styled';
import * as UI from '../../../../components/index';
import { COLORS } from '../../../../models/colors';

const Button = ({ count, setCount, ...props }) => {
  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 0) {
      setCount(value);
    }
  };

  return (
    <Styled.Button count={count} onClick={count > 0 ? null : handleIncrement} {...props}>
      {count === 0 && !props.noText ? (
        <UI.Paragraph color={COLORS.WHITE} size={'big'}>
          В КОРЗИНУ
        </UI.Paragraph>
      ) : (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            justifyContent: 'space-between',
          }}
        >
          <div onClick={handleDecrement} style={{ marginRight: '10px', minWidth: '28px' }}>
            <UI.Paragraph color={COLORS.BLACK} size={'large'}>
              -
            </UI.Paragraph>
          </div>
          <UI.Paragraph color={COLORS.BLACK} size={'big'}>
            <input
              type="number"
              value={count}
              onChange={handleInputChange}
              style={{
                width: '50px',
                textAlign: 'center',
                backgroundColor: 'transparent',
                border: 'none',
                color: COLORS.BLACK,
                fontSize: 'inherit',
                outline: 'none',
              }}
            />
            {!props.noText && 'шт.'}
          </UI.Paragraph>
          <div onClick={handleIncrement} style={{ marginLeft: '10px', minWidth: '28px' }}>
            <UI.Paragraph color={COLORS.BLACK} size={'large'}>
              +
            </UI.Paragraph>
          </div>
        </div>
      )}
    </Styled.Button>
  );
};

export default Button;
