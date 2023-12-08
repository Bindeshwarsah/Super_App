import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import MovieCategory from './MovieCategory';
import LoadingError from './LoadingError';
import styles from './Browse.module.css';
import profileLogo from "../../assets/logo/profileLogo.png";

const Browse = () => {
  const [moviesByCategory, setMoviesByCategory] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiKey = 'f971f69e0a0d4401a859abc8973549eb';

  const navigate = useNavigate();

  const handleProfileClick = () => {
    // Navigate to the /home page when the profileLogo is clicked
    navigate('/home');
  };

  useEffect(() => {
    const fetchGenreList = async () => {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/genre/movie/list', {
          params: {
            api_key: apiKey,
          },
        });

        const genreMap = {};
        response.data.genres.forEach((genre) => {
          genreMap[genre.name] = genre.id;
        });

        return genreMap;
      } catch (error) {
        console.error('Error fetching genre list:', error.message);
        throw error;
      }
    };

    const fetchMoviesByCategories = async () => {
      try {
        const storedCategories = localStorage.getItem('selectedCategories');
        if (!storedCategories) {
          setLoading(false);
          setError('No selected categories found in localStorage.');
          return;
        }

        const selectedCategories = JSON.parse(storedCategories);

        const genreMap = await fetchGenreList();

        const moviePromises = selectedCategories.map(async (category) => {
          const response = await axios.get('https://api.themoviedb.org/3/discover/movie', {
            params: {
              api_key: apiKey,
              with_genres: genreMap[category],
            },
          });

          return {
            category,
            movies: response.data.results.slice(6, 10),
          };
        });

        const moviesByCategory = await Promise.all(moviePromises);
        setMoviesByCategory(
          moviesByCategory.reduce((acc, { category, movies }) => {
            acc[category] = movies;
            return acc;
          }, {})
        );

        setLoading(false);
      } catch (error) {
        console.error('Error fetching movies:', error.message);
        setError('Error fetching movies. Please try again later.');
        <p className={styles.error}>{error}</p>
        setLoading(false);
      }
    };

    fetchMoviesByCategories();
  }, [apiKey]);

  return (
    <>
      <div className={styles.browseContainer}>
        <div className={styles.topCard}>
          <p className={styles.appLogo}>Super app</p>
          <img src={profileLogo} alt="profileimage" className={styles.profileLogo}  onClick={handleProfileClick}/>
        </div>
        <div>
        <h3 className={styles.title}>Entertainment according to your choice</h3>
          <LoadingError loading={loading} error={error}>
            <div className={styles.moviesContainer}>
              {Object.entries(moviesByCategory).map(([category, movies]) => (
                <MovieCategory key={category} category={category} movies={movies} />
              ))}
            </div>
          </LoadingError>
        </div>
      </div>
     
      
    </>
  );
};

export default Browse;