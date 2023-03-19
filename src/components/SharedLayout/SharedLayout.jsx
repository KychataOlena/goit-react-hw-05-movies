import { Container } from 'components/App/App.styled';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Suspense } from 'react';
export const SharedLayout = () => {
  return (
    <Container>
      <header>
        <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </div>
      </header>
      <Suspense>
        <Outlet />
      </Suspense>
    </Container>
  );
};
