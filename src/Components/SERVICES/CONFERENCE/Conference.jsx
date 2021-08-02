import React from 'react';
import {useHistory} from "react-router-dom";

import Logo from "../../../Images/PNG.png"
import image2 from "../../../Images/service6.svg"
import Footer from "../../FOOTER/Footer"



const Conference = () => {
const history = useHistory();

    return (
<div>
         

        <div  className ="row">

                            <nav class="navbar navbar-default" >
                            <div class="nav_container container-fluid">
                            
                                <div class=" nav_head">
                                
                                <a class="navbar-brand" href="#"> <img src={Logo} className ="img-responsive smalllogo" alt="" /> </a>
                                <h4 className = "module_head">CONFERENCE SPEAKING</h4> 
                                </div>

                            
                                
                            

                                    

                            </div>
                            </nav>
                        
                </div>
        
  <div className = "performance_body row col-sm-12">
         <div className = "col-sm-6"> <img src={image2} alt="..." className ="img-responsive thumb_imgs"/> </div>
         <div className = "col-sm-6"> 
          <h1 className = "quote_heading"> 
             
            " Public speaking, otherwise known as elocution or oratory should be thought of, 
            as the concept of the speaker and the audience; it always involves a 
            speaker who has a reason for speaking, an audience that gives the speaker its attention, 
            and a message that is meant to accomplish a specific purpose"
        
         </h1>
         
         </div>

         <br /> 
    <p className = "col-sm-12 body_text">
                <div className = "body1_box"> 
                <span className = "body1"> 
                The practice of public speaking is one of the ancient customs that has evolved 
                throughout the centuries. 
               <span className = "to_bold"> Ancient civilizations taught and practiced it artfully and passed the tradition
                down to their posterities.</span> Public speaking has always held a relevant place in the 
                evolution of our societies and communities, politics and governments,
                religions and spirituality, education and academia, industries and businesses
                    </span>
                </div>

                <br />

                <div className = "body2_box"> 
                    <span className = "body2">

                  <span className = "to_bold"> One of the earliest manuscripts that documented the art of public speaking
                     was written in Egypt over 4500 years ago. Contemporary methods of public
                      speaking have been extensively influenced by the guidelines written centuries ago. </span> 
                    Public speaking is an interactive communication process that incorporates the 
                    five major elements of all communication namely the source or sender, 
                    the receiver, the message, the channel, and the shared meaning.
                    </span>
                </div>

                <br />

                <div className = "body3_box">
                    <span className = "body3">
                   <span className = "to_bold">According to reliable studies almost 70% of people rank public speaking as a phobia,
                     another research intimated that 40% of people accept that public speaking 
                     is their biggest fear; the fear of public speaking is termed as glossophobia. </span> 
                     That notwithstanding, research has proven that almost every one of us will be 
                     involved in some form of public speaking at some point in time in our lives,
                      be it a call to give a vote of thanks, an invitation to make a speech after 
                      accepting an award, and a call to talk about either yourself or your organization 
                      at a conference; hence we must of necessity be prepared to deliver expertly when that time comes. <br/>
                    <span className = "to_bold"> GET IN TOUCH FOR A CONDENSED MODULE ON CONFERENCE SPEAKING</span>
  
                   
                    </span>
            </div>

            <br />

          
            <div className = "col-sm-12 go_back_btn_div"><button className = "go_back_btn" onClick={() => history.goBack()}> Go Back</button> </div> 
    </p> <br />
        

  
 </div>



       <Footer/>

       
           
</div>

      
    );
}

export default Conference;
