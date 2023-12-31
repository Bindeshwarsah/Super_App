import React, { useEffect, useState } from 'react';
import styles from './NewsCard.module.css';
import Datetime from '../DateTime/Datetime';
import axios from 'axios';

const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + '.......';
  }
  return text;
};

const NewsCard = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [randomArticleIndex, setRandomArticleIndex] = useState(null);

  useEffect(() => {
    const fetchRandomNews = async () => {
      try {
        const apiKey = 'a1362e4a78110946d636806f4ced56eb';
        const apiUrl = `https://gnews.io/api/v4/top-headlines?country=us&token=${apiKey}`;

        const response = await axios.get(apiUrl);

        if (response.data && response.data.articles && response.data.articles.length > 0) {
          setNewsData(response.data.articles);
          setRandomArticleIndex(Math.floor(Math.random() * response.data.articles.length));
        } else {
          throw new Error('Invalid response format');
        }
      } catch (error) {
        console.error('Error fetching news data:', error.message);
        setError('Error fetching news data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchRandomNews();
  }, []);

  if (loading) {
    return <p className={styles.loadingMessage}>Loading news...</p>;
  }

  if (error) {
    return <p className={styles.errorMessage}>{error}</p>;
  }

  if (!newsData || newsData.length === 0) {
    return <p className={styles.errorMessage}>No news data available.</p>;
  }

  // Display a random news article
  const randomArticle = newsData[randomArticleIndex];

  return (
    <div className={styles.newsCard}>
      <div className={styles.upperCard}>
        <div>
          {randomArticle && randomArticle.image && (
            <img src={randomArticle.image} alt="News" className={styles.newsImage} />
          )}
        </div>
        <div className={styles.heading}>
          <h2>{randomArticle && randomArticle.title}</h2>
          <div className={styles.date}>
            <Datetime backgroundColor="transparent" fontSize="16px" textColor="#FFF" width="15rem" />
          </div>
        </div>
      </div>

      <div className={styles.about}>
        {randomArticle && randomArticle.description && (
          <p className={styles.description}>{truncateText(randomArticle.description, 130)}</p>
        )}
        {randomArticle && randomArticle.content && (
          <p className={styles.content}>{truncateText(randomArticle.content, 70)}</p>
        )}
      </div>
    </div>
  );
};

export default NewsCard;