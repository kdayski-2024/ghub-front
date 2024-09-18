import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// import LanguageServiceInstance from '../../services/language.service';

import { useLanguage } from '../../hooks';
import { useTranslation } from 'react-i18next';

import { COLORS } from '../../models/colors';
import * as TymioUI from '../../components/index';
import * as Styled from './styled';

import AccordionsCategoriesArrow from '../Icons/AccordionsCategoriesArrow/AccordionsCategoriesArrow';
import { useEffect } from 'react';

const CategoryTree = ({
  category,
  isSubCategory = false,
  isArticle = false,
}) => {
  const navigate = useNavigate();
  const [isAccordionOpen, setIsAccordionOpen] = useState(true);
  const MAX_ITEMS_VISIBLE = 6;
  // const { language } = useLanguage();
  const { i18n, t } = useTranslation();

  // useEffect(() => {
  //   LanguageServiceInstance.getLanguage();
  // }, []);

  const handleCategoryClick = (id, isSub) => {
    if (isSub) {
      navigate(`/${i18n.language}/sections/${id}`);
    } else {
      navigate(`/${i18n.language}/categories/${id}`);
    }
  };

  const handleAccordionToggle = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  const renderCategoryContent = (category) => {
    const itemsToShow = isAccordionOpen
      ? category.articles.slice(0, MAX_ITEMS_VISIBLE)
      : category.articles;

    return (
      <>
        {itemsToShow.map((article) => (
          <TymioUI.ArticleLink
            path={`/${i18n.language}/article/${article.id}`}
            key={article.id}
          >
            {article.title}
          </TymioUI.ArticleLink>
        ))}
      </>
    );
  };

  return (
    <Styled.CategoryTree isArticle={isArticle}>
      <>
        {isSubCategory && (
          <Styled.SubCategory>
            <Styled.Wrapper>
              <Styled.LinkWrapper
                as={Link}
                to={`/${i18n.language}/sections/${category.id}`}
              >
                <TymioUI.Paragraph
                  size={'medium'}
                  color={COLORS.BLACK}
                  onClick={() =>
                    handleCategoryClick(category.id, isSubCategory)
                  }
                >
                  {category.title}
                </TymioUI.Paragraph>
              </Styled.LinkWrapper>
              {category.articles.length > MAX_ITEMS_VISIBLE && (
                <Styled.Selector
                  active={!isAccordionOpen}
                  onClick={handleAccordionToggle}
                >
                  <TymioUI.Paragraph size={'medium'} color={COLORS.BLACK}>
                    {!isAccordionOpen ? t('CLOSE') : t('SEE ALL')}
                  </TymioUI.Paragraph>
                  <AccordionsCategoriesArrow />
                </Styled.Selector>
              )}
            </Styled.Wrapper>
          </Styled.SubCategory>
        )}
        {isArticle && (
          <TymioUI.ArticleLink
            path={`/${i18n.language}/article/${category.id}`}
            key={category.id}
          >
            {category.title}
          </TymioUI.ArticleLink>
        )}
        {!isSubCategory && !isArticle && (
          <Styled.Category>
            <Styled.LinkWrapper
              as={Link}
              to={`/${i18n.language}/categories/${category.id}`}
            >
              <TymioUI.H2
                noMedia
                color={COLORS.BLACK}
                onClick={() => handleCategoryClick(category.id, isSubCategory)}
              >
                {category.title}
              </TymioUI.H2>
            </Styled.LinkWrapper>
          </Styled.Category>
        )}
      </>

      {!isArticle && category.articles.length > 0 && (
        <Styled.Articles>{renderCategoryContent(category)}</Styled.Articles>
      )}

      {!isArticle && category.categories.length > 0 && (
        <div>
          {category.categories.map((subCategory) => (
            <div key={subCategory.id}>
              <CategoryTree category={subCategory} isSubCategory={true} />
            </div>
          ))}
        </div>
      )}
    </Styled.CategoryTree>
  );
};

export default CategoryTree;
