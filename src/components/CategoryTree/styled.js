import styled from 'styled-components';
import { COLORS } from '../../models/colors';
import { Link } from 'react-router-dom';

export const CategoryTree = styled.div`
  ${({ isArticle }) =>
    !isArticle &&
    `margin-top: 100px;
  margin-bottom: 60px;
  &:first-child {
    margin-top: 0;
  }}`}
`;

export const SubCategory = styled.div`
  border-top: 1px solid ${COLORS.GRAY};
  padding-top: 20px;
  padding-bottom: 30px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0 10px;
  p {
    cursor: pointer;
    text-transform: uppercase;
  }
`;

export const Category = styled.div`
  margin-bottom: 30px;
  h2 {
    width: fit-content;
    line-height: 30px;
    cursor: pointer;
  }
`;

export const Articles = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 30px;

  p {
    width: fit-content;
    cursor: pointer;
  }

  @media (max-width: 1439px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Selector = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  cursor: pointer;
  user-select: none;
  svg {
    height: 100%;
    transition: transform 0.3s ease;
    transform: ${({ active }) => (active ? 'rotate(180deg)' : 'rotate(0)')};
    path {
      stroke: ${COLORS.BLACK};
    }
  }
`;

export const LinkWrapper = styled(Link)`
  text-decoration: none;
`;
