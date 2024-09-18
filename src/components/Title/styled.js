import styled from 'styled-components';
import bigCardGradient from '../../img/big-card-gradient.svg';

export const Title = styled.div`
  background-image: url(${bigCardGradient});
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  left: 0;
  width: 100%;
  h1 {
    line-height: 72%;
    padding: 160px 0 100px;
    text-align: center;
    text-transform: uppercase;
    color: rgba(28, 16, 47, 0.4);
  }

  @media (max-width: 1439px) {
    h1 {
      padding: 75px 30px 30px 30px;
      text-align: left;
    }
  }
  @media (max-width: 767px) {
    h1 {
      padding: 75px 30px 30px 15px;
    }
  }
`;
