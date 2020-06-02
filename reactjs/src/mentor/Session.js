import React from 'react';
import Insights from './Insights';
import Perfo from './Performance';
import Card from './Prof_card1';
import VNav from './V_Nav';
import HNav from './H_Nav';
import Details from './Session_det'
import Note from './NotetoPar'

import { Switch, Route, BrowserRouter as Router } from "react-router-dom";


function Session() {
  return (
    <div id="wrapper">
    <VNav/>
    <div class="d-flex flex-column" id="content-wrapper">
        <div id="content">
            <HNav/>
    <div class="container-fluid">
        <h3 class="text-dark mb-4">Take Session</h3>
        <div class="row mb-3">
        <div class="col-lg-4">
            <Card/>
            <Insights/>
                <Perfo/>
                 
            </div>
            <div class="col-lg-8">
                
                <Details/>
            </div>
        </div>
        <Note/>
    </div>
</div>
</div>
</div>

   
  );
}

export default Session;