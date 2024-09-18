import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import * as Styled from './styled';
import * as UI from '../../components/index';
import { COLORS } from '../../models/colors';
import { useCatalog } from '../../hooks';
import CatalogService from '../../services/catalog.service';

const API_LINK = process.env.REACT_APP_API_URL;
const Catalogue = () => {
  const { parentId } = useParams();
  const { catalog, loading } = useCatalog();
  useEffect(() => {
    CatalogService.getData(parentId);
  }, [parentId]);
  console.log(catalog);
  return (
    <Styled.Catalogue>
      {!loading && (
        <>
          <Styled.Title>
            <UI.H2 color={COLORS.BLACK}>{catalog.title}</UI.H2>
          </Styled.Title>
          {catalog.categories &&
            catalog.categories.map((subCategory, index) => (
              <div key={index}>
                {/* <Styled.Image src={'none'} width="80px" height="80px" /> */}
                <UI.MenuLink path={`/${subCategory.id}`} size="medium">
                  {subCategory.title}
                </UI.MenuLink>
              </div>
            ))}
          <Styled.RenderWrapper>
            {catalog.products &&
              catalog.products.map((subCategory, index) => (
                <Styled.Card key={index}>
                  <Styled.Image
                    src={`${API_LINK}/${subCategory.image}`}
                    width="80px"
                    height="80px"
                  />
                  <UI.MenuLink
                    path={`/product/${subCategory.id}`}
                    size="medium"
                  >
                    {subCategory.title}
                  </UI.MenuLink>
                </Styled.Card>
              ))}
          </Styled.RenderWrapper>
        </>
      )}
    </Styled.Catalogue>
  );
};

export default Catalogue;
