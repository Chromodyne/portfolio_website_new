//import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar"
import Main from './components/Main';
import React from 'react';
import Term from './components/Terminal';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Portfolio />
    </React.Fragment>
  )
}

export default App;
