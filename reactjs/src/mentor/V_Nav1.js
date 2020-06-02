
import React,{useState} from 'react';

import { Switch, Route, BrowserRouter as Router } from "react-router-dom";


function V_Nav() {
  
  const [isToggled,setToggle]=useState(true)
  return (
    <nav className={isToggled?"navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0 toggled":"navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0"}>
    <div class="container-fluid d-flex flex-column p-0">
        <a class="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0" href="#">
            <div class="sidebar-brand-icon rotate-n-15"><i class="fas fa-laugh-wink"></i></div>
            <div class="sidebar-brand-text mx-3"><span>Brand</span></div>
        </a>
        <hr class="sidebar-divider my-0" />
        <ul class="nav navbar-nav text-light" id="accordionSidebar">
            <li class="nav-item" role="presentation"><a class="nav-link " href="/Profile"><i class="fas fa-eye"></i><span>Profile</span></a></li>
            <li class="nav-item" role="presentation"><a class="nav-link active" href="#"><i class="fas fa-brain"></i><span>Take Session</span></a></li>
        </ul>
        <div class="text-center d-none d-md-inline"><button class="btn rounded-circle border-0" id="sidebarToggle" type="button" onClick={() =>setToggle(!isToggled)}></button></div>
    </div>
</nav>
  );
}

export default V_Nav;
