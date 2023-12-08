import React, { useEffect }  from 'react';
import RegistrationPage from '../../pages/RegistrationPage';
import { useNavigate } from 'react-router-dom';

const DefaultPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const storedFormData = localStorage.getItem('registrationData');
        const storedCategory = localStorage.getItem('selectedCategories');
    
        if (storedFormData && storedCategory) {
          navigate('/home');
        }
      }, []); 
  return (
    <div><RegistrationPage/></div>
  )
}

export default DefaultPage