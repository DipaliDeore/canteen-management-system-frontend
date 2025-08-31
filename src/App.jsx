import React from 'react'
import {Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import PageNotFound from './pages/PageNotFound';
import AboutUs from './pages/AboutUs';
import LandingPage from './pages/LandingPage';
import Feedback from './pages/Feedback';
import Login from './pages/Login';
import Register from './pages/Register';
import Contact from './pages/ContactUs';

function App() {

  return (
      <Routes>
        <Route path = "/" element={<LandingPage/>}/>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>}/>
        <Route path ="*" elememt={<PageNotFound/>}/>
        <Route path ="/contact" element={<Contact/>}/>
        <Route path ="/feedback" element={<Feedback/>}/>
  
      </Routes>
  );
}

export default App
