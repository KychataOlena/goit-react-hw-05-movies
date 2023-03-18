import { Outlet, useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
// import { Loader } from 'components/Loader/Loader';

const API_KEY = '37c19565ff9fd1caddc6961e74d76e1e';
const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500/';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    // setLoading(true);
    fetch(`
https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`)
      .then(res => res.json())
      .then(movie => {
        const { title, vote_average, poster_path, genres, overview } = movie;
        // console.log(genres);
        setMovie({ title, vote_average, poster_path, genres, overview });
      });
  }, [movieId]);

  // if (loading) {
  //   return <Loader />;
  // }

  const { title, vote_average, poster_path, genres, overview } = movie;
  return (
    <main>
      <div>
        <img src={`${BASE_IMG_URL}${poster_path}`} width="250" alt="" />
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
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </main>
  );
};

export default MovieDetails;
