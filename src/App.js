import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import AppModule from './AppModule'
import About from './components/About'
import NavbarValue from './components/Navbar'
import styles from './App.module.css'
import Notfound from './NotFound'

class App extends Component {

  render() {
    return (
      <Router>
        <div className={styles}>
          <NavbarValue />
          <Switch>
            <Route exact path='/Covid-Tracker' component={AppModule}></Route>
            <Route exact path='/home' component={AppModule}></Route>
            <Route exact path='/about' component={About}></Route>
            <Route component={Notfound}></Route>
          </Switch>
        </div>
      </Router>

    );
  }
}

export default App;