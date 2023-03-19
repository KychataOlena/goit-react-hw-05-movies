import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { ToastContainer } from 'react-toastify';

const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Reviews = lazy(() => import('pages/Reviews/Reviews'));
const Cast = lazy(() => import('pages/Cast/Cast'));

// import { Home } from 'pages/Home/Home';
// import { Movies } from 'pages/Movies/Movies';
// import MovieDetails from 'pages/MovieDetails/MovieDetails';

// import Reviews from 'pages/Reviews/Reviews';
// import Cast from 'pages/Cast/Cast';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
};
