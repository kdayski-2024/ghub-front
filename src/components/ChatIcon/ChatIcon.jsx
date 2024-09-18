import React from 'react';

import * as TymioUI from '../index';
import * as Styled from './styled';
import { COLORS } from '../../models/colors';
import Chat from '../Icons/Chat/Chat';

const ChatIcon = () => {
  return (
    <Styled.ChatIcon>
      <Chat />
    </Styled.ChatIcon>
  );
};

export default ChatIcon;
