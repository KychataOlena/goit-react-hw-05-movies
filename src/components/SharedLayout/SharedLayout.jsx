import { Outlet } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';
import { Suspense } from 'react';
import { Wrapper, Header, Link } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Wrapper>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Suspense>
        <Outlet />
      </Suspense>
    </Wrapper>
  );
};
