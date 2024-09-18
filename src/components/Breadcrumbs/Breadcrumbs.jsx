import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import * as Styled from './styled';
import * as TymioUI from '../index';
import { COLORS } from '../../models/colors';

const Breadcrumbs = ({ lang, subCategory, category }) => {
  const navigate = useNavigate();

  return (
    <Styled.Breadcrumbs>
      <Styled.BreadcrumbsItem as={Link} to={`/${lang}`}>
        <TymioUI.Paragraph
          size="large"
          color={COLORS.PINK}
          onClick={() => navigate(`/${lang}`)}
        >
          Documents
        </TymioUI.Paragraph>
      </Styled.BreadcrumbsItem>
      {category && (
        <Styled.BreadcrumbsItem
          as={Link}
          to={`/${lang}/categories/${category.id}`}
        >
          <TymioUI.Paragraph
            size="large"
            color={COLORS.PINK}
            onClick={() => navigate(`/${lang}/categories/${category.id}`)}
          >
            {category.title}
          </TymioUI.Paragraph>
        </Styled.BreadcrumbsItem>
      )}
      {subCategory && (
        <Styled.BreadcrumbsItem
          as={Link}
          to={`/${lang}/sections/${subCategory.id}`}
        >
          <TymioUI.Paragraph
            size="large"
            color={COLORS.PINK}
            onClick={() => navigate(`/${lang}/sections/${subCategory.id}`)}
          >
            {subCategory.title}
          </TymioUI.Paragraph>
        </Styled.BreadcrumbsItem>
      )}
    </Styled.Breadcrumbs>
  );
};

export default Breadcrumbs;
