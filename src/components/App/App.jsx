import { NavLink, Link, Route, Routes } from 'react-router-dom';

import { Home } from 'pages/Home/Home';
import { Movies } from 'pages/Movies/Movies';
import MovieDetails from 'pages/MovieDetails/MovieDetails';

import Reviews from 'pages/Reviews/Reviews';
import Cast from 'pages/Cast/Cast';
import { ToastContainer } from 'react-toastify';

export const App = () => {
  return (
    <div>
      <header>
        <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </div>
        {/* <NavLink>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </NavLink> */}
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
};
