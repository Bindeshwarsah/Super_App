import React from 'react'
import styles from "./BrowseEntertainmentPage.module.css";
import Browse from '../components/Browse/Browse';


const BrowseEntertainmentPage = () => {
  return (
    <div>
        <div className={styles.container}>
        <Browse/>
        </div>
       
    </div>
  )
}

export default BrowseEntertainmentPage;