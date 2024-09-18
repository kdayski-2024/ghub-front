import React from 'react';
import { useNavigate } from 'react-router-dom';

import * as Styled from './styled';
import * as UI from '../../../../components/index';
import { COLORS } from '../../../../models/colors';

const CardList = ({ catalog }) => {
  // console.log(catalog);
  return (
    <Styled.CardList>
      <Styled.Image width={'80px'} height={'80px'} src={'none'} alt={'image'} />
      <UI.MenuLink
        path={`/${catalog.id}`}
        // pathState={{
        //   state: {
        //     name: category.catalog.name,
        //     list_items: category.catalog_items,
        //   },
        // }}
        size="large"
      >
        {catalog.title}
      </UI.MenuLink>
      {catalog.categories &&
        catalog.categories.map((subCategory, index) => (
          <UI.MenuLink
            path={`/${subCategory.id}`}
            // pathState={{
            //   state: {
            //     name: subCategory.name,
            //     list_items: subCategory.list_items,
            //   },
            // }}
            key={index}
            size="medium"
          >
            {subCategory.title}
          </UI.MenuLink>
        ))}
    </Styled.CardList>
  );
};

export default CardList;
