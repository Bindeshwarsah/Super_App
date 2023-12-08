import React from 'react'
import { Route, Routes } from 'react-router-dom';
import RegistrationPage from './pages/RegistrationPage'
import Category from './pages/Category'
import HomePage from './pages/HomePage';
import BrowseEntertainmentPage from './pages/BrowseEntertainmentPage';
// import DefaultPage from './components/DefaultPage/DefaultPage';

const App = () => {
  return (
    <>
      <Routes>
        {/* <Route path='/' element={<DefaultPage/>}/> */}
        <Route path="/" element={<RegistrationPage/>} />
        <Route path="/category" element={<Category/>} />
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/browse" element={<BrowseEntertainmentPage/>}/>
      </Routes>
    </>
  )
}

export default App