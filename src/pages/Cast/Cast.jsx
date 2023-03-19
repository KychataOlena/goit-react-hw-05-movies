import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_KEY, BASE_IMG_URL } from 'services';

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

        const castArray = cast.cast.map(
          ({ id, name, profile_path, character }) => {
            return { id, name, profile_path, character };
          }
        );
        setCast(castArray);
      });
  }, [movieId]);

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
