import React from 'react'
import {Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import PageNotFound from './pages/PageNotFound';
import AboutUs from './pages/AboutUs';
import LandingPage from './pages/LandingPage';
import Feedback from './pages/Feedback';


function App() {

  return (
      <Routes>
        <Route path = "/" element={<LandingPage/>}/>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path ="*" elememt={<PageNotFound/>}/>
        <Route path ="/feedback" element={<Feedback/>}/>
      </Routes>
  );
}

export default App
