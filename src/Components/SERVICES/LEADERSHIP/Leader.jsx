import React from 'react';
import {useHistory} from "react-router-dom";
import "./leader.css"
import Logo from "../../../Images/PNG.png"
import image2 from "../../../Images/service2.svg"
import Footer from "../../FOOTER/Footer"



const Leader = () => {
const history = useHistory();

    return (
<div>
         

        <div  className ="row">

                            <nav class="navbar navbar-default" >
                            <div class="nav_container container-fluid">
                            
                                <div class=" nav_head">
                                
                                <a class="navbar-brand" href="#"> <img src={Logo} className ="img-responsive smalllogo" alt="" /> </a>
                                <h4 className = "leadership_head">LEADERSHIP TRAINING & PERFROMANCE COACHING</h4> 
                                </div>

                            
                                
                            

                                    

                            </div>
                            </nav>
                        
                </div>
        
  <div className = "performance_body row col-sm-12">
         <div className = "col-sm-6"> <img src={image2} alt="..." className ="img-responsive thumb_imgs"/> </div>
         <div className = "col-sm-6"> 
          <h1 className = "quote_heading"> 
             
            " The turbulence and uncertainty of the times is a 
             pristine reflection of how our world has always been.
             Leadership is increasingly becoming mandatory than elective."
        
         </h1>
         
         </div>

         <br /> 
    <p className = "col-sm-12 body_text">
                <div className = "body1_box"> 
                <span className = "body1"> 
                    It is expected that those who are leaders lead well.
                    The institution of leadership has been in existence 
                    since the creation of the world. 
                    Leadership is as old as the world; this explains why its influence is so colossal in the affairs of the world.
                    Nature thrives on leadership, it has been scientifically proven that plants communicate. Communication is an overarching feature of leadership.
                    </span>
                </div>

                <br />

                <div className = "body2_box"> 
                    <span className = "body2">

                    Research about how plants respond in the face of an impending bushfire postulated that the older plants send signals to the younger ones to warn them. 
                    It is a rare sighting to see a colony of animals move without a leader. The minutest of them, the ants portray this vividly. 
                    Man as the wisest of all “beast” has always resorted to leadership in one way or the other, observe nature and you’d see numerous leads of the prevalent leadership.
                    To define leadership organically, nature should not be ignored. 
                    The cohabitation of the diverse players in nature could help us understand the ever metamorphosing world of leadership.
                    We are presented with a paradox when the issue of leadership is raised.
                    </span>
                </div>

                <br />

                <div className = "body3_box">
                    <span className = "body3">
                        
                        It is the global grand problem and also it is the panacea to the global grand problem.
                        A leader thus is a tell-tale offspring of either aspect of the paradox. 
                        The institution and world of leadership are a tricky one, sensitive and yet a very promising one; a world of countless possibilities when navigated artfully.
                        Our world is fast evolving at a rate that is faster than envisioned.            
                    The core of our lives, teams, organizations, societies and the world at large have been affected. As a result, there is a need to rethink the general and widely accepted ways of doing things. 
                    All the spheres of life are included in this grand and global rethinking. Much accelerated than ever, the statement, ‘CHANGE OR DIE'' is becoming more meaningful. Increasingly, there have been calls to rethink the institution and world of leadership.  
                    </span>
            </div>

            <br />

            <div className = "body4_box">
                    <span className = "body4">

                    It is a known fact that leadership is the problem of the world and rather paradoxically leadership is the elixir to the problem of the world. For centuries, leadership was only in lofty titles and positions, the problem here, was that outside the lofty titles and positions many of these leaders lose their significance.
                    Rethink leadership as a set of proven actions that anyone can engage in, again, re-evaluate leadership as a choice, thus you can choose to be a
                    Leader. Redefine leadership as an institution that is not exclusive to a specific bloodline, name, ethnic group, race or generation. Leadership is an institution that is open to all who are willing to engage in actions, cognitive processes and behavioral patterns that result in making a positive difference in the world.
                    GET IN TOUCH FOR A CONDENSED MODULE ON AVANTE GARDE LEADERSHIP
                    </span>
            </div>
            <div className = "col-sm-12 go_back_btn_div"><button className = "go_back_btn" onClick={() => history.goBack()}> Go Back</button> </div> 
    </p> <br />
        

  
 </div>



       <Footer/>

       
           
</div>

      
    );
}

export default Leader;
