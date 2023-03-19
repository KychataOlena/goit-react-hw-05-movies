import { useEffect, useState } from 'react';

import { useLocation } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { API_KEY, BASE_IMG_URL } from 'services';
import {
  MovieList,
  MainTitle,
  FilmName,
  MovieLink,
  MovieLi,
  MovieImg,
} from 'pages/Home/Home.styled';

const Home = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`)
      .then(response => response.json())
      .then(movies => {
        // console.log(movies.results);

        const movieArray = movies.results.map(
          ({ id, poster_path, title, name }) => {
            let movieTitle = title || name;
            return { id, poster_path, movieTitle };
          }
        );
        setMovies(movieArray);
      })
      .finally(() => {
        setLoading(false);
      });
    // console.log(movies);
  }, []);

  return (
    <main>
      <MainTitle>Trending today</MainTitle>

      <MovieList>
        {movies.map(({ id, poster_path, movieTitle }) => (
          <MovieLi key={id}>
            <MovieLink to={`movies/${id}`} state={{ from: location }}>
              <MovieImg
                src={`${BASE_IMG_URL}${poster_path}`}
                alt="Movie"
                width={370}
              ></MovieImg>
              <FilmName>{movieTitle}</FilmName>
            </MovieLink>
          </MovieLi>
        ))}
      </MovieList>
      {loading && <Loader />}
    </main>
  );
};
export default Home;
