import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import Navbar from "./components/Navbar"
import About from './components/About';
import React, { useState } from 'react';
import Portfolio from './components/Portfolio';
import Footer from "./components/Footer"

const AppRouter = () => {

  const location = useLocation();

  return (
    <>
      <Navbar />
      <Routes location={location}>
        <Route path="/" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      <Footer />

    </>
  );
}


function App() {

  return (

    <>
      <Router>
        <AppRouter />
      </Router>
    </>

  )
}

export default App;
