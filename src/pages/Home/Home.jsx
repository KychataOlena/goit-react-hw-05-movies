import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const API_KEY = '37c19565ff9fd1caddc6961e74d76e1e';
const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500/';
export const Home = () => {
  const location = useLocation();

  const [movies, setTrendingMovies] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`)
      .then(response => response.json())
      .then(movies => {
        // console.log(movies.results);
        const ApiArray = movies.results;
        setTrendingMovies(ApiArray);
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
              <img src={`${BASE_IMG_URL}${poster_path}`} alt=""></img>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};
// export default
