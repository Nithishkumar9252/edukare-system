import React from 'react';
import NavigationBar from './NavigationBar.js';
import OverallRep from '../Admin/Overallrep'
import StudRep from '../Admin/StuDetails'
import MenRep from '../Admin/MenRep'
import AMentor from '../Admin/Mentor';
import Parent from '../Parent/Parent'
import Mentor_Parent from '../Parent/Mentor';
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
          <Route exact path="/" component={NavigationBar} />
          <Route  path="/Parent" component={Parent} />  
          <Route  path="/PMentor" component={Mentor_Parent} />       
           <Route  path="/Mentor" component={Session} />
           <Route path="/Profile" component={Profile}/>
           <Route path="/OverallRep" component={OverallRep}/>
           <Route path="/StudRep" component={StudRep}/>
           <Route path="/AMentor" component={AMentor}/>
           <Route path="/MenRep" component={MenRep}/>
           
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
