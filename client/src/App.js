import React, { Component } from 'react';
import './App.css';
import NavBar from './components/layout/Navbar.js'
import Footer from './components/layout/Footer.js'
import Landing from './components/layout/Landing.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Landing />
        <Footer />
      </div>
    );
  }
}

export default App;