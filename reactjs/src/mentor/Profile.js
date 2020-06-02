import React from 'react';
import Nav from './NavigationBar';
import Card from './Prof_card';
import Perfo from './Performance';
import Settings from './Settings';
import VNav from './V_Nav';
import HNav from './H_Nav';
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";


function Profile() {
  return (
//     <div id="wrapper">
//    <Nav/>
//    <Card/>
//    </div>
<div id="wrapper">
<VNav/>
<div class="d-flex flex-column" id="content-wrapper">
    <div id="content">
      <HNav/>
<div class="container-fluid">
    <h3 class="text-dark mb-4">Hello, Yama</h3>
    <div class="row mb-3">
        <Card/>
        <div class="col-lg-8">
          
            <Settings/>
        </div>
    </div>
   
</div>
</div>
</div>
</div>

  );
}

export default Profile;