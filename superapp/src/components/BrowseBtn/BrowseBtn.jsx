import React from 'react'
import { useNavigate } from 'react-router-dom';
import styles from "./BrowseBtn.module.css"

const BrowseBtn = () => {

  const navigate = useNavigate();
  
  const handleProfileClick = () => {
    // Navigate to the /home page when the profileLogo is clicked
    navigate('/browse');
  };
  return (
    <>
        <button className={styles.browseBtn} onClick={handleProfileClick}>Browse</button>
    </>
  )
}

export default BrowseBtn