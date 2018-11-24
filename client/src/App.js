import jwt_decode from "jwt-decode";
import {
  setCurrentUser,
  setAuthToken,
  logoutUser
} from "./actions/authActions";

import Navbar from './components/layout/Navbar.js'
import Footer from './components/layout/Footer.js'
import Landing from './components/layout/Landing.js'
import Register from './components/auth/Register.js'
import Login from './components/auth/Login.js'

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import React, { Component } from 'react';
import './App.css';

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
      // Logout user
      store.dispatch(logoutUser());

      // Redirect to login
      window.location.href = "/login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
                <BrowserRouter>
          <div className="App">
              <Navbar />
              <Switch>
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
                <Route path="/landing" component={Landing} />
                <Route exact path="/" component={Landing} />
              </Switch>
              <Footer />
          </div>
      </BrowserRouter>
      </Provider>
    );
  }
}

export default App;