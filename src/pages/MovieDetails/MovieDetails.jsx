import { Outlet, useParams, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Loader } from 'components/Loader/Loader';
import { API_KEY, BASE_IMG_URL } from 'services';
import { Suspense } from 'react';
import {
  StyledLink,
  MovieTitle,
  FlexContainer,
  MainPoster,
  MovieDetailsList,
  CastLink,
  MovieItem,
} from 'pages/MovieDetails/MovieDetails.styled';

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
      <StyledLink to={backButton}>Go back</StyledLink>
      <div>
        <FlexContainer>
          <div>
            <MovieTitle>{title}</MovieTitle>
            <MainPoster src={`${BASE_IMG_URL}${poster_path}`} alt="Poster" />
          </div>

          <div>
            <p>User scor: {vote_average}</p>
            <h2>Overview </h2>
            <p>{overview}</p>
            <h3>Genres</h3>
            <MovieDetailsList>
              {genres &&
                genres.map(({ id, name }) => (
                  <MovieItem key={id}>
                    <p>{name}</p>
                  </MovieItem>
                ))}
            </MovieDetailsList>
            <h3>Additional information</h3>
            <MovieDetailsList>
              <MovieItem>
                <CastLink to="cast" state={{ from: backButton }}>
                  Cast
                </CastLink>
              </MovieItem>
              <MovieItem>
                <CastLink to="reviews" state={{ from: backButton }}>
                  Reviews
                </CastLink>
              </MovieItem>
            </MovieDetailsList>
          </div>
        </FlexContainer>
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
      {loading && <Loader />}
    </main>
  );
};

export default MovieDetails;
