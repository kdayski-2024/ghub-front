import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';

import * as Styled from '../styled';
import * as UI from '../../../components/index';
import { COLORS } from '../../../models/colors';
import { TYPOGRAPHY_SIZE } from '../../../models/types';

const Receiver = () => {
  // Состояние для чекбокса
  const [isAgree, setIsAgree] = useState(false);

  // Обработчик изменения состояния чекбокса
  const handleCheckboxChange = (event) => {
    setIsAgree(event.target.checked);
  };

  return (
    <Styled.DataItem>
      <Styled.InputsWrapper>
        <Styled.Title>
          <UI.Paragraph color={COLORS.BLACK} size={TYPOGRAPHY_SIZE.LARGE}>
            Получатель
          </UI.Paragraph>
          <UI.Paragraph color={COLORS.GRAY} size={TYPOGRAPHY_SIZE.MEDIUM}>
            Данные нужны для курьера и сообщений об изменениях статуса вашего
            заказа
          </UI.Paragraph>
        </Styled.Title>
        <Styled.YWrapper>
          <TextField
            label="Фамилия"
            variant="outlined"
            fullWidth
            margin="normal"
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: COLORS.BLACK,
                },
                '&:hover fieldset': {
                  borderColor: COLORS.BLACK,
                },
                '&.Mui-focused fieldset': {
                  borderColor: COLORS.BLACK,
                },
                '& input': {
                  color: COLORS.BLACK,
                },
              },
              '& .MuiInputLabel-root': {
                color: COLORS.BLACK,
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: COLORS.BLACK,
              },
            }}
          />
          <TextField
            label="Имя"
            variant="outlined"
            fullWidth
            margin="normal"
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: COLORS.BLACK,
                },
                '&:hover fieldset': {
                  borderColor: COLORS.BLACK,
                },
                '&.Mui-focused fieldset': {
                  borderColor: COLORS.BLACK,
                },
                '& input': {
                  color: COLORS.BLACK,
                },
              },
              '& .MuiInputLabel-root': {
                color: COLORS.BLACK,
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: COLORS.BLACK,
              },
            }}
          />
        </Styled.YWrapper>
        <Styled.YWrapper>
          <TextField
            label="Телефон"
            variant="outlined"
            fullWidth
            margin="normal"
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: COLORS.BLACK,
                },
                '&:hover fieldset': {
                  borderColor: COLORS.BLACK,
                },
                '&.Mui-focused fieldset': {
                  borderColor: COLORS.BLACK,
                },
                '& input': {
                  color: COLORS.BLACK,
                },
              },
              '& .MuiInputLabel-root': {
                color: COLORS.BLACK,
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: COLORS.BLACK,
              },
            }}
          />
          <div></div>
        </Styled.YWrapper>
        <Styled.YWrapper>
          <TextField
            label="Электронная почта"
            variant="outlined"
            fullWidth
            margin="normal"
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: COLORS.BLACK,
                },
                '&:hover fieldset': {
                  borderColor: COLORS.BLACK,
                },
                '&.Mui-focused fieldset': {
                  borderColor: COLORS.BLACK,
                },
                '& input': {
                  color: COLORS.BLACK,
                },
              },
              '& .MuiInputLabel-root': {
                color: COLORS.BLACK,
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: COLORS.BLACK,
              },
            }}
          />
          <div></div>
        </Styled.YWrapper>

        <Styled.YWrapper>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={isAgree}
                  onChange={handleCheckboxChange}
                  sx={{
                    color: COLORS.BLACK,
                    '&.Mui-checked': {
                      color: COLORS.BLACK,
                    },
                  }}
                />
              }
              label="Я хочу получать рекламные сообщения и новости о товарах и услугах"
            />
          </FormGroup>
        </Styled.YWrapper>
      </Styled.InputsWrapper>
    </Styled.DataItem>
  );
};

export default Receiver;
