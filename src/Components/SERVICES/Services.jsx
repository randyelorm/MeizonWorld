import React from 'react';
import "./services.css"
import image1 from "../../Images/service1.svg"
import image2 from "../../Images/service2.svg"
import image3 from "../../Images/service3.svg"
import image4 from "../../Images/service4.svg"
import image5 from "../../Images/service5.svg"
import image6 from "../../Images/service6.svg"
import Logo from "../../Images/PNG.png"
import { Link } from 'react-router-dom'; 
import Leader from './LEADERSHIP/Leader';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 






const PageThree = () => {
    return (
    <>
<div class="row thumbnails ">
                        <h2 className = "text-center specialty_text" id = "specialty">OUR SPECIALTY</h2>
<span className = "first_three">
  <div class="col-sm-4">
    <div class="thumbnail thumb1">
    <div >
        <h3 className = "text-center specialty_caption">LEADERSHIP TRAINING & GROOMING 
        <img src={Logo} className = "meizon_logo" alt="" /></h3>
        <div className = "btn-box1"> <button className = "readmore-btn">
              
                   <Link to = "/leadership">Read More</Link> 
          
           
           </button> </div>
        
        
      </div>
      <img src={image1} alt="..." className ="img-responsive thumb_imgs"/>
      
   
    </div>
  </div>



  <div class="col-sm-4">
    <div class="thumbnail thumb2">
    <div >
        <h3 className = "text-center specialty_caption">PERFORMANCE COACHING
        <img src={Logo} className = "meizon_logo" alt="" />  </h3>
        <div className = "btn-box"> <button className = "readmore-btn">
          
         <Link to = "/performance">Read More</Link> 
        
        </button> </div>
        
      </div>
      <img src={image2} alt="..." className ="img-responsive thumb_imgs"/>

      
    </div>
  </div>

  <div class="col-sm-4">
    <div class="thumbnail thumb3">
    <div>
        <h3 className = "text-center specialty_caption">PERSONALITY REFINING
        <img src={Logo} className = "meizon_logo" alt="" /> 
 
        </h3>

        <div className = "btn-box"> <button className = "readmore-btn">
          
        <Link to = "/personality">Read More</Link>  
          
          
          </button> </div>
      </div>
      <img src={image3} alt="..." className ="img-responsive thumb_imgs"/>
      
    </div>
  </div>

  </span>


  <span className = "last_three">

  <div class="col-sm-4">
    <div class="thumbnail">
    <div >
        <h3 className = "text-center specialty_caption" >COMMUNICATION
        <img src={Logo} className = "meizon_logo" alt="" /> </h3>
        <div className = "btn-box"> <button className = "readmore-btn">
          
        <Link to = "/communication">Read More</Link>  
          
          </button> </div>
      </div>
      <img src={image4} alt="..." className ="img-responsive thumb_imgs"/>
     
    </div>
  </div>

  <div class="col-sm-4">
    <div class="thumbnail">
    <div>
        <h3 className = "text-center specialty_caption">PUBLIC SPEAKING
        <img src={Logo} className = "meizon_logo" alt="" /> </h3>
        <div className = "btn-box"> <button className = "readmore-btn">
          
        <Link to = "/publicspeaking">Read More</Link>  
          
          </button> </div>
      </div>
      <img src={image5} alt="..." className ="img-responsive thumb_imgs" />
     
     
    </div>
  </div>

  <div class="col-sm-4">
    <div class="thumbnail thumb6">
    <div>
        <h3 className = "text-center specialty_caption">CONFERENCE SPEAKING
        <img src={Logo} className = "meizon_logo" alt="" /> </h3>  
        <div className = "btn-box"> <button className = "readmore-btn">
          
        <Link to = "/conferencespeaking">Read More</Link>  
          
          </button> </div>  
      </div>
      <img src={image6} alt="..." className ="img-responsive thumb_imgs"/>
 
      
    </div>
  </div>


  </span>


</div>
  





   </> 


    );
}

export default PageThree;
