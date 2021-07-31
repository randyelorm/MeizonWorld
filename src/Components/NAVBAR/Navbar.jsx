import React from 'react';
import "./navbar.css"
import Logo from "../../Images/PNG.png"
import { Link} from "react-router-dom"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"



const Navbar = () => {
    return (
        <div>

<div  className ="row">

<nav class="navbar navbar-default">
  <div class="nav_container container-fluid">
 
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#"> <img src={Logo} className ="logo" alt="" /> </a>
    </div>

   
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      
     
      <ul class="nav navbar-nav navbar-right">
        <li> <Link link to = "/about"> About Us  </Link></li>
        <li> <Link link to = "/specialty"> Our Specialty </Link></li>
        <li> <Link link to = "/footer"> Get In Touch </Link></li>
       
        
      </ul>
    </div>
  </div>
</nav>
                 
            </div>


        </div>
    );
}

export default Navbar;
