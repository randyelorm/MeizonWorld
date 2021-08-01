import React from 'react';
import "./navbar.css"
import Logo from "../../Images/PNG.png"
import { Link } from 'react-scroll';




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
        <li> <Link to = "about" activeClass="active" spy={true} smooth={true}
 > 
                About Us  
             </Link>
        </li>

        <li> < Link to = "specialty" activeClass="active" spy={true} smooth={true}> Our Specialty </Link> </li>
        <li> <Link link to = "footer"  spy={true} smooth={true}> Get In Touch </Link></li>
       
        
      </ul>
    </div>
  </div>
</nav>
                 
            </div>


        </div>
    );
}

export default Navbar;
