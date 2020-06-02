import React from 'react';
import NavigationBar from './NavigationBar.js';
import Profile from './Profile'
import Session from './Session';
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";


function Mentor() {
  return (
    <div className="App" >
      <Router>
        <div>
          <Switch>
          {/* <Route exact path="/Mentor" component={Session} />
           <Route path="/Mentor/Profile" component={Profile}/> */}
            
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default Mentor;
