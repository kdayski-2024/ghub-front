import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import useRoutes from '../../../hooks/useRoutes';
import * as Styled from '../styled';
import * as UI from '../../index';
import Close from '../../../assets/img/icons/cross-purple.svg';
import { LogoIcon } from '../../';

import { COLORS } from '../../../models/colors';

const BurgerMenu = () => {
  const { burger } = useRoutes();

  const [active, setActive] = useState(false);
  const BURGER = burger;
  const toggleMenu = () => {
    setActive((prevState) => !prevState);
  };
  const navigate = useNavigate();
  const onNavigate = (path) => {
    setActive((prevState) => !prevState);
    navigate(path);
  };

  useEffect(() => {
    const html = document.getElementsByTagName('html')[0];
    html.style.overflowY = active ? 'hidden' : 'auto';
  }, [active]);

  return (
    <>
      <Styled.Burger onClick={toggleMenu}>
        <Styled.BurgerLine />
        <Styled.BurgerLine long />
        <Styled.BurgerLine />
      </Styled.Burger>
      <Styled.Menu active={active ? 'true' : undefined}>
        <Styled.Content>
          <Styled.Logo onClick={toggleMenu}>
            <NavLink to={'/'}>
              <UI.Paragraph color={COLORS.BLACK}>Market</UI.Paragraph>
            </NavLink>
          </Styled.Logo>
          <Styled.CloseIcon onClick={toggleMenu}>
            <img src={Close} alt={''} />
          </Styled.CloseIcon>
          <Styled.Routes></Styled.Routes>
        </Styled.Content>
        <Styled.Overlay onClick={toggleMenu} />
      </Styled.Menu>
    </>
  );
};

export default BurgerMenu;
