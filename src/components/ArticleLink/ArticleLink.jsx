import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import * as Styled from './styled.js';
import * as TymioUI from '../index';

const ArticleLink = ({ children, active, path }) => {
  const navigate = useNavigate();
  return (
    <Styled.ArticleLink as={Link} to={path} active={active}>
      <TymioUI.Paragraph
        onClick={(e) => {
          e.preventDefault();
          navigate(path);
        }}
        size={'large'}
      >
        {children}
      </TymioUI.Paragraph>
    </Styled.ArticleLink>
  );
};

export default ArticleLink;
