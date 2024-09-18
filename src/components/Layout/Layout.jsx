import React from 'react';
import { Outlet } from 'react-router-dom';
import * as TymioUI from '../index';
import * as Styled from './styled';
import ChatIcon from '../ChatIcon/ChatIcon';

const Layout = () => {
  return (
    <Styled.PageWrapper>
      <Styled.Content>
        <TymioUI.Container>
          <Styled.Main>
            <TymioUI.Header />

            <Outlet />
          </Styled.Main>
        </TymioUI.Container>
      </Styled.Content>
      <TymioUI.Footer />
    </Styled.PageWrapper>
  );
};

export default Layout;
