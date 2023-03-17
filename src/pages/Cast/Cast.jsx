import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';

const API_KEY = '37c19565ff9fd1caddc6961e74d76e1e';
const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500/';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  //   console.log(cast);

  //   useEffect(() => {

  //     );
  //   }, []);

  return (
    <div>
      {/* <img src={`${BASE_IMG_URL}${poster_path}`} width="100" alt="" /> */}
      {/* <h1>{title}</h1> */}
    </div>
  );
};
export default Cast;
