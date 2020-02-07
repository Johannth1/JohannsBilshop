import React from 'react';
import './App.css';
import DelerList from './components/DelerList';
import AddDeler from  './components/AddDeler';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';



const webAPIUrl = "https://localhost:5001/deler";

export default function Nav() {
  return (
    <Router> 
        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid">

            <div className="navbar-header">
              <a className="navbar-brand text-white">Johann's Bilshop</a>
            </div>
            <ul className="nav navbar-nav">

              <li className="nav-item">
                <Link to="/components/AddDeler">AddDeler</Link>
              </li>

              <li className="nav-item">
                <Link to="/components/DelerList">DelerList</Link>
              </li>
              
            </ul>
          </div>
        </nav>
  
        <Switch>
          <Route path="/components/AddDeler">
            <AddDeler />
          </Route>
          <Route path="/components/DelerList">
            <DelerList webAPIUrl={webAPIUrl} />
          </Route>
        </Switch>  
    </Router>
  );
}



