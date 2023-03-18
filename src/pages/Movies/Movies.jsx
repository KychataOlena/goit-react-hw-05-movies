import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
// import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
const API_KEY = '37c19565ff9fd1caddc6961e74d76e1e';
const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500/';

export const Movies = () => {
  // const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [searchMovie, setSearchMovie] = useState('');
  const location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  // console.log(query);

  const handleChange = e => {
    setSearchMovie(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (searchMovie.trim() === '') {
      toast.error('Заповніть форму');
      return;
    }
    const form = event.currentTarget;
    setSearchParams({ query: searchMovie });

    setSearchMovie('');
  };

  useEffect(() => {
    if (query === null) {
      return;
    }
    setMovie([]);

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`
    )
      .then(movie => movie.json())
      .then(movie => {
        // console.log(movie.results);
        movie.results.map(({ id, poster_path, title }) => {
          const movie = { id, poster_path, title };
          setMovie(prevState => [...prevState, movie]);
        });
      });
  }, [query]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          class="input"
          name="searchName"
          type="text"
          autocomplete="off"
          autofocus
          // placeholder="Search images and photos"
          value={searchMovie}
          onChange={handleChange}
        ></input>
        <button type="submit">Search</button>
      </form>
      <div>
        {movie && (
          <ul>
            {movie.map(({ id, poster_path, title }) => (
              <li key={id}>
                <Link to={`${id}`} state={{ from: location }}>
                  <p>{title}</p>
                  <img src={`${BASE_IMG_URL}${poster_path}`} alt=""></img>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};
