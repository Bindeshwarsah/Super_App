import React from 'react'
import styles from "./ProfileInfo.module.css"
import userLogo from "../../assets/logo/user-logo.png"
import UserInfo from './UserInfo';
import CategoryInfo from './CategoryInfo';
const ProfileInfo = () => {
  return (
    <div className={styles.ProfileInfo}>
        <div className={styles.leftCard}>
            <img src={userLogo} alt="logo" className={styles.logo} />
        </div>
        <div className={styles.rightCard}>
            <div className={styles.userInfo}>
              <UserInfo/>
                

            </div>  
            <div className={styles.category}>
              <CategoryInfo/>

            </div> 

        </div>
    </div>
  )
}

export default ProfileInfo