import React from 'react';
import "./services.css"
import image1 from "../../Images/service1.svg"
import image2 from "../../Images/service2.svg"
import image3 from "../../Images/service3.svg"
import image4 from "../../Images/service4.svg"
import image5 from "../../Images/service5.svg"
import image6 from "../../Images/service6.svg"

const PageThree = () => {
    return (
    <>
<div class="row thumbnails ">
                        <h2 className = "text-center specialty_text">OUR SPECIALTY</h2>
<span className = "first_three">
  <div class="col-sm-4">
    <div class="thumbnail">
    <div class="caption">
        <h3 className = "text-center specialty_caption">LEADERSHIP TRAINING & GROOMING</h3>
        
        
      </div>
      <img src={image1} alt="..." className ="img-responsive thumb_imgs"/>
     
    </div>
  </div>



  <div class="col-sm-4">
    <div class="thumbnail">
    <div class="caption">
        <h3 className = "text-center specialty_caption">PERFORMANCE COACHING</h3>
      
        
      </div>
      <img src={image2} alt="..." className ="img-responsive thumb_imgs"/>
    
    </div>
  </div>

  <div class="col-sm-4">
    <div class="thumbnail">
    <div class="caption">
        <h3 className = "text-center specialty_caption">PERSONALITY REFINING</h3>
      </div>
      <img src={image3} alt="..." className ="img-responsive thumb_imgs"/>
     
    </div>
  </div>

  </span>


  <span className = "last_three">

  <div class="col-sm-4">
    <div class="thumbnail">
    <div class="caption">
        <h3 className = "text-center specialty_caption" >COMMUNICATION</h3>
      </div>
      <img src={image4} alt="..." className ="img-responsive thumb_imgs"/>
      
    </div>
  </div>

  <div class="col-sm-4">
    <div class="thumbnail">
    <div class="caption">
        <h3 className = "text-center specialty_caption">PUBLIC SPEAKING</h3>
      </div>
      <img src={image5} alt="..." className ="img-responsive thumb_imgs"/>
     
    </div>
  </div>

  <div class="col-sm-4">
    <div class="thumbnail">
    <div class="caption">
        <h3 className = "text-center specialty_caption">CONFERENCE SPEAKING</h3>    
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
