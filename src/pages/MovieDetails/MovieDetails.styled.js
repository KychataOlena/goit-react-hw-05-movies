import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  display: inline-block;
  padding: 6px 22px;
  margin-right: 8px;
  margin-top: 20px;
  margin-bottom: 20px;
  min-width: 40px;
  min-height: 24px;
  border: 1px solid black;
  border-radius: 32px;
  text-align: center;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  text-decoration: none;
  line-height: 1.62;
  color: black;
  :hover {
    border: 1px solid rgb(226, 43, 43);
    color: rgb(226, 43, 43);
  }
`;

export const MovieTitle = styled.h1`
  font-size: 24px;
  margin-top: 0;
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
export const MainPoster = styled.img`
  width: 200px;
  height: 300px;
`;

export const MovieDetailsList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0px;
`;

export const CastLink = styled(Link)`
  display: inline-block;
  padding: 6px 22px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  border: 1px solid black;
  border-radius: 32px;
  text-align: center;

  :hover {
    color: rgb(226, 43, 43);
  }
`;

export const MovieItem = styled.li`
  margin-right: 10px;
`;
