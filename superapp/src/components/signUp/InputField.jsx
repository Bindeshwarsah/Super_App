import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./InputField.module.css";

const InputField = () => {
  const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        mobile: '',
      });

      const [termsChecked, setTermsChecked] = useState(false);
      const [errors, setErrors]=useState({})
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };

      const validateForm=()=>{
        const newError={};

         // Check if only letters are allowed in the name field
        const nameRegex = /^[A-Za-z\s]+$/;
        if(!formData.name.trim()){
          newError.name="Field is required"
        }
        else  if (!nameRegex.test(formData.name)) {
          newError.name = "Only letters are allowed in the name";
        }

        if(!formData.username.trim()){
          newError.username="Field is required"
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!formData.email.trim()){
          newError.email="Field is required"
        }
        else if (!emailRegex.test(formData.email)) {
          newError.email = 'Invalid email format';
        }

        const mobileRegex =/^[6789]\d{9}$/;
        if(!formData.mobile.trim()){
          newError.mobile="Field is required"
        }
        else if (!mobileRegex.test(formData.mobile)){
          newError.mobile = 'Invalid mobile format';
        }

        if(!termsChecked){
          newError.terms="Check this box if you want to proceed"
        }
        setErrors(newError);
        return Object.keys(newError).length === 0;
      }
    
      const handleSubmit = (e) => {
        e.preventDefault();
        
        if(validateForm()){
          localStorage.setItem('registrationData',JSON.stringify(formData));
          navigate('/category');
        }
      };
    
      return (
        
        <div className={styles.RegistrationContainer}>
          <div className={styles.signUp}>
            <div className={styles.rightContainer}>
              <h1 className={styles.title}>Super app</h1>
              <p className={styles.para}>Create your new account</p>

            </div>
          
            <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder='Name'
                  value={formData.name}
                  onChange={handleChange} className={`${styles.inputField} ${errors.name ? styles.error : ''}`}
                />
                {errors.name && <span className={styles.error}>{errors.name}</span>}
              <br />
                <input
                  type="text"
                  name="username"
                  placeholder='Username'
                  value={formData.username}
                  onChange={handleChange} className={`${styles.inputField} ${errors.username ? styles.error : ''}`}
                />
                {errors.username && <span className={styles.error}>{errors.username}</span>}
              <br />
                <input
                  type="email"
                  name="email"
                  placeholder='Email'
                  value={formData.email}
                  onChange={handleChange} className={`${styles.inputField} ${errors.email ? styles.error : ''}`}
                />
                {errors.email && <span className={styles.error}>{errors.email}</span>}
              <br />
                <input
                  type="number"
                  name="mobile"
                  placeholder='Mobile'
                  value={formData.mobile}
                  onChange={handleChange} className={`${styles.inputField} ${errors.mobile ? styles.error : ''}`}
                />
                {errors.mobile && <span className={styles.error}>{errors.mobile}</span>}
              <br />
              <div className={styles.checkBoxField}>
                
                  <input
                      type="checkbox"
                      name="terms"
                      checked={termsChecked}
                      onChange={() => setTermsChecked(!termsChecked)}
                      className={styles.checkbox}
                  />
                  <span className={styles.terms}> Share my registration data with Superapp</span>    
              </div>
              {errors.terms && <span className={styles.error}>{errors.terms}</span>}
              <br/>

              <div className={styles.signUpBtn}>
                <button type="submit" className={styles.Btn}>Sign up</button>
              </div>
              <br/>
              <div>
                <p className={styles.conditions}>By clicking on Sign up. you agree to Superapp 
                <span className={styles.conditionColor}> Terms and Conditions of Use</span>
                </p>
              </div>
              <br/>
              <div>
                <p className={styles.conditions}>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp
                <span  className={styles.conditionColor}> Privacy Policy</span>
                </p>
              </div>
            </form>
          </div>
        </div>
      );
    };

export default InputField