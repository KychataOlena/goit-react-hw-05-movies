import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const MovieList = styled.ul`
  display: grid;
  max-width: calc(100vw - 54px);
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  margin: 0px auto;
  padding: 0px;
  list-style: none;
`;

export const MovieLi = styled.li`
  max-width: 370px;
  border: 1px solid #eeeeee;
  background: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 2px 1px -1px;

  margin-right: 30px;
  margin-bottom: 30px;
`;

export const MainTitle = styled.h1`
  margin: 0 auto 50px;
  text-align: center;
  max-width: 34.75rem;
  font-size: 36px;
  color: black;
`;
export const FilmName = styled.p`
  font-size: 1.25rem;
  line-height: 1.35;
  text-align: center;
`;
export const MovieLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
export const MovieImg = styled.img`
  display: block;
  max-width: 100%;
`;
