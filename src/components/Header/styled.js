import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { COLORS } from '../../models/colors';

export const LogoLink = styled(NavLink)`
  cursor: pointer;
  line-height: 0;
`;

export const Fixed = styled.div`
  position: fixed;
  display: flex;
  width: fit-content;
  justify-content: flex-end;
  gap: 10px;
  right: 0;
  top: 0;
  padding: 20px 30px;
  z-index: 10;

  @media (max-width: 1439px) {
    display: none;
  }
`;
// position: absolute;

export const Header = styled.header`
  z-index: 2;
  padding: 20px 0;
  /* position: absolute; */
  width: 100%;
  display: flex;
  gap: 30px;
  align-items: center;
  @media (max-width: 1439px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 15px 30px;
  }

  @media (max-width: 767px) {
    padding: 15px;
  }
`;

export const Flex = styled.div`
  display: flex;
  height: 40px;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;

  @media (max-width: 1439px) {
    align-items: flex-start;
  }
`;

export const MobileActions = styled(Flex)`
  display: none;

  @media (max-width: 1439px) {
    display: flex;
  }
`;

export const Burger = styled.div`
  padding: 18px 25px;
  border-radius: 5px;
  background: ${COLORS.LIGHT_YELLOW};
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  cursor: pointer;

  @media (max-width: 767px) {
    right: 15px;
  }
`;

export const BurgerLine = styled.div`
  width: 20px;
  height: 2px;
  background: ${COLORS.BLACK};
`;

export const Menu = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: ${({ active }) => (active ? '0' : '-100%')};
  z-index: 10;
  visibility: ${({ active }) => (active ? 'visible' : 'hidden')};
  opacity: ${({ active }) => (active ? '1' : '0')};
  transition: all 0.3s;
  width: ${({ active }) => active && '100%'};
`;

export const Content = styled.div`
  width: 20%;
  position: relative;
  background-color: ${COLORS.WHITE};
  height: 100%;
  padding: 85px 30px 0 30px;
  transition: all 0.6s;
  z-index: 10;

  button {
    margin-top: 45px;
    width: 100%;
  }

  @media (max-width: 1439px) {
    width: 100%;
  }
  @media (max-width: 767px) {
    padding: 75px 15px 0 15px;
  }
`;

export const Routes = styled.ul`
  list-style-type: none;
  max-width: 462px;
  padding: 0;
  margin-left: auto;
`;

export const Route = styled.li`
  position: relative;
  margin-bottom: 15px;
  font-size: 28px;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: 0.28px;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  h2 {
    color: ${COLORS.LIGHT};
  }

  &:hover {
    h2 {
      color: ${COLORS.PINK};
    }
  }
`;

export const HR = styled.div`
  margin-top: 15px;
  height: 1px;
  background: ${COLORS.GRAY};
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #21282b;
  opacity: 0.4;
  z-index: 5;
`;

export const CloseIcon = styled.div`
  position: absolute;
  top: 15px;
  right: 30px;
  padding: 10px 13px;
  border-radius: 5px;
  background: ${COLORS.BLACK};
  height: 41px;
  cursor: pointer;

  @media (max-width: 767px) {
    right: 15px;
  }
`;

export const Logo = styled.div`
  position: absolute;
  left: 30px;
  top: 15px;

  @media (max-width: 767px) {
    left: 15px;
  }
`;

export const Search = styled.input`
  margin: 0;
  border: none;
  background: #e3e1d8;
  border-radius: 4px;
  font-size: 16px;
  outline: none;
  padding: 15px 40px;
  width: 100%;
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-basis: 857px;
`;

export const BalanceWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  height: 50px;
  flex-shrink: 0;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const IconCircle = styled.div`
  width: 48px;
  height: 48px;
  background: rgb(227, 225, 216);
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
