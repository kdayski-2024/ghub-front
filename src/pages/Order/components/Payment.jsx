import React from 'react';

import * as Styled from '../styled';
import * as UI from '../../../components/index';
import { COLORS } from '../../../models/colors';
import { TYPOGRAPHY_SIZE } from '../../../models/types';
import MetaMaskIcon from '../icons/MetaMask.svg';
import Tonkeeper from '../icons/Tonkeeper.svg';
import Walletconnect from '../icons/Walletconnect.svg';

const Payment = () => {
  return (
    <Styled.DataItem>
      <UI.Paragraph color={COLORS.BLACK} size={TYPOGRAPHY_SIZE.LARGE}>
        Способ оплаты
      </UI.Paragraph>
      <Styled.PaymentWrapper>
        <UI.Paragraph color={COLORS.BLACK} size={TYPOGRAPHY_SIZE.MEDIUM}>
          WEB3
        </UI.Paragraph>
        <Styled.IconWrapper>
          <img src={MetaMaskIcon} alt="metamask" />
          <img src={Tonkeeper} alt="tonkeeper" />
          <img src={Walletconnect} alt="walletconnect" />
        </Styled.IconWrapper>
      </Styled.PaymentWrapper>
    </Styled.DataItem>
  );
};

export default Payment;
