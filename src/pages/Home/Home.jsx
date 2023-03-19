import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { API_KEY, BASE_IMG_URL } from 'services';

 const Home = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [movies, setTrendingMovies] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`)
      .then(response => response.json())
      .then(movies => {
        // console.log(movies.results);
        const ApiArray = movies.results;
        setTrendingMovies(ApiArray);
      })
      .finally(() => {
        setLoading(false);
      });
    // console.log(movies);
  }, []);

  return (
    <main>
      <h1>Trending today</h1>

      <ul>
        {movies.map(({ id, poster_path, title }) => (
          <li key={id}>
            <Link to={`movies/${id}`} state={{ from: location }}>
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
      {loading && <Loader />}
    </main>
  );
};
export default Home;
