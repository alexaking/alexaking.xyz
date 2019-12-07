import React from 'react';
import './App.css';
import Intro from './components/Intro'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import Navigation from './components/navigation'

function App() {
  return (
    <div id="App">
      <Navigation/>
      <header id="App-intro">
        <Intro/>
      </header>
      <div id='About'>
          About
      </div>
      <div id='Projects'>
          Projects
      </div>
      <div id='Contact'>
          Contact
      </div>
    </div>
  );
}

export default App;
