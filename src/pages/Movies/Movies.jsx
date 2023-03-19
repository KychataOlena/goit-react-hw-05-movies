import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
// import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { API_KEY, BASE_IMG_URL } from 'services';

const Movies = () => {
  const [movie, setMovie] = useState([]);
  const [searchMovie, setSearchMovie] = useState('');
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  // console.log(query);

  const handleChange = e => {
    setSearchMovie(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (searchMovie.trim() === '') {
      toast.error('Something went wrong!');
      return;
    }
    // const form = event.currentTarget;
    setSearchParams({ query: searchMovie });

    setSearchMovie('');
  };

  useEffect(() => {
    if (query === null) {
      return;
    }
    setLoading(true);
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
      })
      .finally(() => {
        setLoading(false);
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
                  <img
                    src={`${BASE_IMG_URL}${poster_path}`}
                    width="150"
                    alt=""
                  ></img>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
      <ToastContainer autoClose={3000} theme="colored" />
      {loading && <Loader />}
    </>
  );
};
export default Movies;
