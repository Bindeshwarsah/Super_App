import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styles from "./MovieBox.module.css";
import CategoryBox from './CategoryBox';
import DangerImage from "../../assets/images/Danger-image.svg";
const MovieBox = () => {
  const navigate=useNavigate();
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
  
    const handleCategoryClick = (category) => {
      const updatedCategories = selectedCategories.includes(category)
        ? selectedCategories.filter((selectedCategory) => selectedCategory !== category)
        : [...selectedCategories, category];
  
      setSelectedCategories(updatedCategories);
  
      if (updatedCategories.length >= 3) {
        setErrorMessage('');
      }
    };
  
    const handleRemoveCategory = (category) => {
      const updatedCategories = selectedCategories.filter((selectedCategory) => selectedCategory !== category);
      setSelectedCategories(updatedCategories);
    };
  
    const handleContinue = () => {
      if (selectedCategories.length >= 3) {
  
        // Save selected categories to local storage
        try{
        localStorage.setItem('selectedCategories', JSON.stringify(selectedCategories));
        navigate('/home');
  
        }catch (error){
          console.error('Error storing categories in local storage:', error);
        }
        // Navigate to the next page (Replace with the actual next page path)
        // For now, displaying a success message
        setErrorMessage('');
  
       
      } else {
        // Display an error message if less than 3 categories are selected
        setErrorMessage('Minimum 3 category required');
      }
    };
  
    return (
      <div className={styles.card}>
        <div className={styles.leftContainer}>
          <p className={styles.title}>Super app</p>
          <div className={styles.leftHeadingBox}>
            <h1 className={styles.leftHeading}>Choose your entertainment category</h1>
          </div>
          <div className={styles.selectedCategories}>
            {selectedCategories.map((category) => (
              <div key={category} className={styles.selectedCategory}>
                <span>{category}</span>
                <button onClick={() => handleRemoveCategory(category)} className={styles.removeButton}>X</button>
              </div>
            ))}
          </div>
          {errorMessage && (
            <div className={styles.errorMessageContainer}>
              <img src={DangerImage} alt="Danger" className={styles.dangerImage} />
              <p className={styles.errorMessage}>{errorMessage}</p>
            </div>
          )}
        </div>
  
        <div className={styles.rightContainer}>
          {['Action', 'Drama', 'Romance', 'Thriller', 'Western', 'Horror', 'Fantasy', 'Music', 'Fiction'].map((category) => (
            <CategoryBox
              key={category}
              category={category}
              isSelected={selectedCategories.includes(category)}
              onClick={() => handleCategoryClick(category)}
            />
          ))}
  
          <button className={styles.btn} onClick={handleContinue}>Next Page</button>
  
        </div>
      </div>
    );
  };
  export default MovieBox;
  