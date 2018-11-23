import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar.js'
import Footer from './components/layout/Footer.js'
import Landing from './components/layout/Landing.js'
import Register from './components/auth/Register.js'
import Login from './components/auth/Login.js'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

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