import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar.js'
import Footer from './components/layout/Footer.js'
import Landing from './components/layout/Landing.js'
import Register from './components/auth/Register.js'
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div className="App">
              <Navbar />
              <Switch>
                <Route path="/register" component={Register} />
                <Route path="/landing" component={Landing} />
                <Route exact path="/" component={Landing} />
              </Switch>
              <Footer />
          </div>
      </BrowserRouter>
    );
  }
}

export default App;