import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
export const SearchbarHeader = styled.header`
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;
export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;
export const SearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
export const FormButton = styled.button`
   display: inline-block;
  width: 50px;
  height: 50px;
  border: 0;
  background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  }
`;

export const MovieList = styled.ul`
  display: grid;
  max-width: calc(100vw - 54px);
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  margin: 0px auto;
  padding: 0px;
  list-style: none;
`;
export const MovieLiSearch = styled.li`
  max-width: 370px;
  border: 1px solid #eeeeee;
  background: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 2px 1px -1px;

  margin-right: 30px;
  margin-bottom: 30px;
  margin-top: 30px;
`;

export const FilmName = styled.p`
  font-size: 1.25rem;
  line-height: 1.35;
  text-align: center;
`;
export const MovieImg = styled.img`
  display: block;
  max-width: 100%;
`;
export const MovieLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
