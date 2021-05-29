import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
// import { Route, Router, Switch } from 'react-router';
import Dashboard from './component/Dashboard';
import Navbar from './component/Navbar';
import LeftNav from './component/LeftNav';

function App() {
  return (
      <div className="App">
        <div className="navs">
          <LeftNav/>
          <div>
          <Navbar/>
          <Dashboard/>
          </div>
        </div>
      </div>
  );
}

export default App;
