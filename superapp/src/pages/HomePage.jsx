import React from 'react'
import styles from "./HomePage.module.css"
import ProfileInfo from '../components/Profile/ProfileInfo'
import Datetime from '../components/DateTime/Datetime'
import Weather from '../components/WeatherApi/Weather'
import NewsCard from '../components/NewsApi/NewsCard'
import Notes from '../components/notes/Notes';
import Timer from '../components/Timer/Timer';
// import BrowseBtn from '../components/BrowseBtn/BrowseBtn'

const HomePage = () => {
  return (
    <>
      <div className={styles.home}>
        <div className={styles.leftCard}>
          <div className={styles.leftTopCard}>
            <div className={styles.profileDateTime}>
              <div>
                <ProfileInfo/>
              </div>
              <div>
                <Datetime/>
                <Weather/>
              </div>
            </div>
            <div className={styles.notesCard}>
              <Notes/>
            </div>
          </div>

          <div className={styles.leftBottomCard}>
            <Timer/> 
          </div>
        </div>

        <div className={styles.rightCard}>
          <NewsCard/>
          {/* <BrowseBtn/> */}
        </div> 
            
      </div>
        
    </>
  )
}

export default HomePage