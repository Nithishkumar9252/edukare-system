import React from 'react';
import NavigationBar from './NavigationBar.js';
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App" >
      <Router>
        <div>
          <Switch>
            <NavigationBar />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
