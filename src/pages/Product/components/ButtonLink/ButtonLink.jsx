import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import * as Styled from './styled';
import * as UI from '../../../../components/index';
import { COLORS } from '../../../../models/colors';

const ButtonLink = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {};
  return (
    <Styled.ButtonLink
      as={Link}
      to={'/basket'}
      onClick={(e) => {
        e.preventDefault();
        navigate('/basket');
      }}
    >
      <UI.Paragraph color={COLORS.WHITE} size={'large'}>
        {'>'}
      </UI.Paragraph>
    </Styled.ButtonLink>
  );
};

export default ButtonLink;
