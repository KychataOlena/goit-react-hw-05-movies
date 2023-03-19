import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { API_KEY } from 'services';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(rev => {
        // console.log(rev.results);

        const review = rev.results.map(({ author, content, id }) => {
          return { author, content, id };
        });
        setReviews(review);
      });
  }, [movieId]);

  return (
    <div>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(({ author, content, id }) => (
            <li key={id}>
              <p>Author: {author}</p>
              <p>Coment: {content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don`t have any reviews for this movie</p>
      )}
    </div>
  );
};
export default Reviews;
