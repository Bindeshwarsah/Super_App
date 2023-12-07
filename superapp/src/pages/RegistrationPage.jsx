import React from 'react'
import Banner from '../components/banner/Banner'
import InputField from '../components/signUp/InputField'
import styles from "./RegistrationPage.module.css";

const RegistrationPage = () => {
  return (
    <>
        <div className={styles.register}>
            <Banner />
            <InputField />
        </div>
        
    </>
  )
}

export default RegistrationPage