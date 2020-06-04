import React from 'react';
import NavigationBar from './NavigationBar.js';
import Login from './loginComponents/Login';
import Mentor from '../mentor/Mentor';
import Profile from '../mentor/Profile'
import Session from '../mentor/Session';
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App" >
      <Router>
        <div>
          <Switch>
          <Route exact path="/" component={Login} />


           <Route  path="/Mentor" component={Session} />
           <Route path="/Profile" component={Profile}/>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
