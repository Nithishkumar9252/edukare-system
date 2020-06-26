import React from 'react';
import Aptitude from './Aptitude' 
import Perfo from './Personalperfo';
import Academic from './AcademicPerfo';
import Test from './TestOverview';
import VNav from './V_Nav';
import HNav from './H_Nav';
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";


function Parent() {
  return (
      <div>
    <div id="wrapper">
   <VNav/>
    <div class="d-flex flex-column" id="content-wrapper">
        <div id="content">
            <HNav/>

<div class="container-fluid">
    <div class="d-sm-flex justify-content-between align-items-center mb-4">
        <h3 class="text-dark mb-0">Dashboard</h3><button class="btn btn-primary btn-sm d-none d-sm-inline-block" onclick="downloadPdf()" href="#"><i class="fas fa-download fa-sm text-white-50"></i>&nbsp;Generate Report</button>
    </div>
    <Academic/>    
    <br></br>
   <Aptitude/>
    <br></br>
    <Perfo/>
    <br></br>
    <br></br>
    <Test/>
    <br></br><br></br>
</div>

</div></div></div>









<div><a class="border rounded d-inline scroll-to-top" href="#page-top"><i class="fas fa-angle-up"></i></a></div></div>
  );
}

export default Parent;