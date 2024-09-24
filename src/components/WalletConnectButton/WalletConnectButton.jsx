import * as UI from '../../components';

import { BUTTON_TYPE, TYPOGRAPHY_SIZE } from '../../models/types';
import { COLORS } from '../../models/colors';
import React, { useEffect, useState } from 'react';
import WalletService from '../../services/wallet.service';
import { useWallet } from '../../hooks';

const WalletConnectButton = ({ width }) => {
  const [loading, setLoading] = useState(false);
  const { connected, error } = useWallet();

  const handleClick = async (e, provider = 'mm') => {
    if (!loading) {
      setLoading(true);
      try {
        if (connected) await WalletService.disconnect(provider);
        else await WalletService.connect(provider);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    }
  };

  useEffect(() => {
    if (error) alert(error);
  }, [error]);

  return (
    <UI.Button width={width} type={BUTTON_TYPE.PRIMARY} onClick={handleClick}>
      <UI.Paragraph size={TYPOGRAPHY_SIZE.MEDIUM} color={COLORS.RICH_BLACK}>
        {connected ? 'Disconnect' : 'Connect wallet'}
      </UI.Paragraph>
    </UI.Button>
  );
};

export default WalletConnectButton;
