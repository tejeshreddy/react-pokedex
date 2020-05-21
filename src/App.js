import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from "./components/layout/NavBar";
import Dasborad from './components/layout/Dasborad';
import backgroundImage from './pattern.png';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Pokemon from './components/pokemon/Pokemon';

function App() {
  return (
    <Router>
      <div className="App" style={{background: `url(${backgroundImage})` }}>
        <NavBar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Dasborad} />
            <Route exact path="/pokemon/:pokemonIndex" component={Pokemon} />
            <Dasborad />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
