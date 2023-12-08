import React from 'react';
import styles from "./Movie.module.css";

const Movie = ({ id, title, posterPath }) => {
  const posterBaseUrl = 'https://image.tmdb.org/t/p/w500';

  return (
    <div key={id} className={styles.movieItem}>
      <img src={`${posterBaseUrl}${posterPath}`} alt={title} className={styles.moviePoster} />
    </div>
  );
};

export default Movie;