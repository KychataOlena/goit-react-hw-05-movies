import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';

const API_KEY = '37c19565ff9fd1caddc6961e74d76e1e';
const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500/';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
    )
      .then(res => res.json())
      .then(cast => {
        // console.log(cast.cast);

        cast.cast.map(({ id, name, profile_path, character }) => {
          const cast = { id, name, profile_path, character };
          setCast(prevState => [...prevState, cast]);
        });
      });
  });

  return (
    <div>
      <ul>
        {cast.map(({ id, name, profile_path, character }) => (
          <li key={id}>
            <img src={`${BASE_IMG_URL}${profile_path}`} width="100" alt="" />
            <p>{name}</p>
            <p>Character:{character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Cast;
