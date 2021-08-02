import React from 'react';
import {useHistory} from "react-router-dom";

import Logo from "../../../Images/PNG.png"
import image2 from "../../../Images/service3.svg"
import Footer from "../../FOOTER/Footer"



const Personality = () => {
const history = useHistory();

    return (
<div>
         

        <div  className ="row">

                            <nav class="navbar navbar-default" >
                            <div class="nav_container container-fluid">
                            
                                <div class=" nav_head">
                                
                                <a class="navbar-brand" href="#"> <img src={Logo} className ="img-responsive smalllogo" alt="" /> </a>
                                <h4 className = "module_head">PERSONALITY REFINING</h4> 
                                </div>

                            
                                
                            

                                    

                            </div>
                            </nav>
                        
                </div>
        
  <div className = "performance_body row col-sm-12">
         <div className = "col-sm-6"> <img src={image2} alt="..." className ="img-responsive thumb_imgs"/> </div>
         <div className = "col-sm-6"> 
          <h1 className = "quote_heading"> 
             
            "     The podiums of life are for the prepared and ready, thus consummate 
                 individuals are likely to take advantage of the opportunities life presents."
        
         </h1>
         
         </div>

         <br /> 
    <p className = "col-sm-12 body_text">
                <div className = "body1_box"> 
                <span className = "body1"> 
            The most called upon characteristic of any person is
            their interpersonal attributes; this forms the foundation of many relationships, both formal and informal. 
            Aristotle, the father of rhetoric defined man as a social animal by nature; an individual who is unsocial naturally and not accidentally is either beneath our notice or more than human. Social animals are those animals that interact highly with other animals, usually of their own species, to the point of forming recognizable and distinct societies.
            He averred that man cannot live alone and that society precedes an individual. 

   
                    </span>
                </div>

                <br />

                <div className = "body2_box"> 
                    <span className = "body2">
                    Evidently, the possession of soft skills are those attributes that qualify man as Aristotle’s social animal. The proliferation of soft skills in an individual further endears that individual to species of that individual’s kind.
                    A refined personality is a polished one; a likable and open minded person who is likely to gain significant influence over others.
                    When you pursue refinement, you are positioning yourself for recognition and influence, thus you increase your chances of succeeding socially.
                   <span className = "to_bold"> <br />  GET IN TOUCH FOR A CONDENSED MODULE ON PERSONALITY REFINEMENT.</span> 
                  
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

export default Personality;
