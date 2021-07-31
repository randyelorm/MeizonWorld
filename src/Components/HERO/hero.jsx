import React from 'react';
import flyer from "../../Images/reduced.png"
import "./hero.css"

const Hero = () => {
    return (
        <div className = "container hero-box">
            <span className ="col-sm-6">
           <h1 className ="hero-text"> 
           <span className = "meizon">MEIZON WORLD </span> is an enterprise that majors in specialized/bespoke training
           grooming, refining and coaching.
            
            
            </h1>
             </span>

             <span className ="col-sm-6 ">
                    <img src={flyer} alt="" className = "img-responsive" />
             </span>
        </div>
    );
}

export default Hero;
