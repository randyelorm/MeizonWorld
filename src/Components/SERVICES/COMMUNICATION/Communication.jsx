import React from 'react';
import {useHistory} from "react-router-dom";
import "./communication.css"
import Logo from "../../../Images/PNG.png"
import image2 from "../../../Images/service4.svg"
import Footer from "../../FOOTER/Footer"



const Communication = () => {
const history = useHistory();

    return (
<div>
         

        <div  className ="row">

                            <nav class="navbar navbar-default" >
                            <div class="nav_container container-fluid">
                            
                                <div class=" nav_head">
                                
                                <a class="navbar-brand" href="#"> <img src={Logo} className ="img-responsive smalllogo" alt="" /> </a>
                                <h4 className = "module_head">COMMUNICATION</h4> 
                                </div>

                            
                                
                            

                                    

                            </div>
                            </nav>
                        
                </div>
        
  <div className = "performance_body row col-sm-12">
         <div className = "col-sm-6"> <img src={image2} alt="..." className ="img-responsive thumb_imgs"/> </div>
         <div className = "col-sm-6"> 
          <h1 className = "quote_heading"> 
             
            " Effective communication is the nexus between the said and the done.
             High and low productivity in business is hinged on the effectiveness of communication, 
             in leadership effective communication is primarily the determinant of success."
        
         </h1>
         
         </div>

         <br /> 
    <p className = "col-sm-12 body_text">
                <div className = "body1_box"> 
                <span className = "body1"> 
                Communication is one profound characteristic of nature, 
                in diverse ways and forms nature communicates perpetually. 
               <span className = "to_bold"> Sunrise and sunset, the crowing rooster, the marauding hawk 
                and the industrious ants convey a special message.
                The active, dormant and extinct volcanoes, the eclipses, 
                the equinoxes and solstices depict a unique phenomenon. </span>
                Contrary to widely held views that communication is typically verbal, 
                studies have shown that communication is mainly non-verbal. Both the verbal and 
                the non-verbal communications complement each other to aptly convey the essence of any communication.
                    </span>
                </div>

                <br />

                <div className = "body2_box"> 
                    <span className = "body2">

                    <span className = "to_bold">Communication, both oral and written is an indispensable tool in leadership, 
                    industry, business, academia, government, sports, religion and chieftaincy. </span>
                    The communication culture is a key indicator of the success of an individual or organization. 
                    Effective communication thus enhances the reputation and productivity of an individual or organization.
                    </span>
                </div>

                <br />

                <div className = "body3_box">
                    <span className = "body3">
                  <span className = "to_bold"> Relevant soft skills of intelligent communication enhances reputation, boosts 
                    self-confidence, opens up opportunities and assures a glittering career. </span> 
                    Predominant amongst the skills that recruiters and 
                    employers constantly seek in prospective employees is
                     ability in both oral and written communication.  
                   
                    </span>
            </div>

            <br />

            <div className = "body4_box">
                    <span className = "body4">

                    Communication is a purposeful effort to establish commonness between a source and a receiver; 
                    it is the process of exchanging or sharing information, ideas and feelings between a sender and a receiver.
                     Communication can be simply defined as the reciprocal process of meaning making; it is
                    the systemic process whereby individuals interact with and through symbols to create and interpret meanings.
                     According to the Harvard business review, “the number one criteria for the promotion 
                     and the advancement of professionals is the ability to communicate effectively”. <br />
                    <span className = "to_bold">GET IN TOUCH FOR A CONDENSED MODULE ON EFFECTIVE COMMUNICATION.</span> 
                    </span>
            </div>
            <div className = "col-sm-12 go_back_btn_div"><button className = "go_back_btn" onClick={() => history.goBack()}> Go Back</button> </div> 
    </p> <br />
        

  
 </div>



       <Footer/>

       
           
</div>

      
    );
}

export default Communication;
