import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1320px;
  margin: 0 auto;

  @media (max-width: 1600px) {
    margin: unset;
  }
  @media (max-width: 1439px) {
    margin: unset;
    max-width: unset;
    position: unset;
  }
`;
