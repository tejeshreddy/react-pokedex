import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from "./components/layout/NavBar";
import Dasborad from './components/layout/Dasborad';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <Dasborad />
      </div>
    </div>
  );
}

export default App;
