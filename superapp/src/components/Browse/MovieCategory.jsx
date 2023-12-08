import React from 'react';
import styles from "./MovieCategory.module.css";
import MovieList from './MovieList';

const MovieCategory = ({ category, movies }) => (
  <div >
    <h2 className={styles.categoryName}>{category}</h2>
    <MovieList movies={movies}   />
  </div>
);

export default MovieCategory;