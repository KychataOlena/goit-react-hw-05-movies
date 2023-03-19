import { Outlet, useParams, Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Loader } from 'components/Loader/Loader';
import { API_KEY, BASE_IMG_URL } from 'services';
import { Suspense } from 'react';

const MovieDetails = () => {
  const location = useLocation();
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState({});
  const backButton = location.state?.from ?? '/';

  useEffect(() => {
    setLoading(true);
    fetch(`
https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`)
      .then(res => res.json())
      .then(movie => {
        const { title, vote_average, poster_path, genres, overview } = movie;
        setMovie({ title, vote_average, poster_path, genres, overview });
      })
      .finally(() => {
        setLoading(false);
      });
  }, [movieId]);

  const { title, vote_average, poster_path, genres, overview } = movie;
  return (
    <main>
      <Link to={backButton}>Go back</Link>

      <div>
        <img src={`${BASE_IMG_URL}${poster_path}`} width="150" alt="" />
        <h1>{title}</h1>
        <p>User scor: {vote_average}</p>
        <h2>Overview </h2>
        <p>{overview}</p>
        <h3>Genres </h3>
        <ul>
          {genres &&
            genres.map(({ id, name }) => (
              <li key={id}>
                <p>{name}</p>
              </li>
            ))}
        </ul>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast" state={{ from: backButton }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: backButton }}>
              Reviews
            </Link>
          </li>
        </ul>
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
      {loading && <Loader />}
    </main>
  );
};

export default MovieDetails;
