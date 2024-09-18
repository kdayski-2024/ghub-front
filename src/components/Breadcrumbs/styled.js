import styled from 'styled-components';
import { COLORS } from '../../models/colors';
import { Link } from 'react-router-dom';

export const Breadcrumbs = styled.div`
  display: flex;
  height: 25px;
`;
export const BreadcrumbsItem = styled(Link)`
  cursor: pointer;
  width: fit-content;
  padding-right: 20px;
  margin-right: 20px;
  border-right: 1px solid ${COLORS.PINK};
  text-decoration: none;
  &:last-child {
    padding-right: 0;
    margin-right: 0;
    border-right: none;
  }
`;
