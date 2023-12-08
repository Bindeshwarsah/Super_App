import React from 'react';
import Movie from './Movie';
import styles from "./MovieList.module.css";

const MovieList = ({ movies }) => (
  <div className={styles.movieList}>
    {movies.map((movie) => (
      <Movie key={movie.id} title={movie.title} posterPath={movie.poster_path} />
    ))}
  </div>
);

export default MovieList;