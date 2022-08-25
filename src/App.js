import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./components/Navbar"
import About from './components/About';
import React from 'react';
import Portfolio from './components/Portfolio';
import Footer from "./components/Footer"
import Contact from "./components/Contact"

const AppRouter = () => {

  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/portfolio_website_new" element={<About />} />
          <Route path="/portfolio_website_new/portfolio" element={<Portfolio />} />
          <Route path="/portfolio_website_new/contact" element={<Contact />} />
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
