import React, { Component } from 'react';
import './App.css';
import Home from './Components/Home.jsx';
import Goals from './Components/Goals.jsx';
import Assists from './Components/Assists.jsx';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <h1>NHL Goals and Assists 2017</h1>
          <Link to="/goals"><button>Goals</button></Link>
          <Link to="/assists"><button>Assists</button></Link>
          <br />
          <Route exact path="/" component={Home} />
          <Route path="/goals" component={Goals} />
          <Route path="/assists" component={Assists} />
        </div>
      </Router>
    );
  }
}

export default App;
