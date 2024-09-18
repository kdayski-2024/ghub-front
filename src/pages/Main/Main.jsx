import React, { useEffect } from 'react';

import * as Styled from './styled';
import * as UI from '../../components/index';
import { COLORS } from '../../models/colors';

import CatalogService from '../../services/catalog.service';

import { useCatalog } from '../../hooks';

import CardList from './components/CardList/CardList';

const Main = () => {
  const { catalog, loading } = useCatalog();
  useEffect(() => {
    CatalogService.getData(0);
  }, []);
  console.log(loading);
  return (
    <Styled.Main>
      <Styled.Title>
        <UI.H2 color={COLORS.BLACK}>Каталог</UI.H2>
      </Styled.Title>
      {!loading && <CardList catalog={catalog} />}
    </Styled.Main>
  );
};

export default Main;
