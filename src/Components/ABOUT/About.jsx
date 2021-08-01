import React from 'react';
import "./about.css"
import Carou1 from "../../Images/carou1.jpeg"
import Carou2 from "../../Images/carou2.jpeg"
import Carou3 from "../../Images/carou3.jpeg"
import Carou4 from "../../Images/carou4.jpeg"
import Carou5 from "../../Images/5.png"
import Carou6 from "../../Images/6.png"
import Carou7 from "../../Images/7.png"
import Carou8 from "../../Images/8.png"
import Carou9 from "../../Images/9.png"
import Carou10 from "../../Images/10.png"
import Carou11 from "../../Images/11.png"
import Carou12 from "../../Images/12.png"
import Carou13 from "../../Images/13.png"
import Carou14 from "../../Images/14.png"
import Carou15 from "../../Images/15.png"
import Carou16 from "../../Images/16.png"
import Carou17 from "../../Images/17.png"
import Carou18 from "../../Images/18.png"
import Carou19 from "../../Images/19.png"
import Carou20 from "../../Images/20.jpg"
import Carou21 from "../../Images/21.jpg"
import Carou22 from "../../Images/22.png"
import Carou23 from "../../Images/23.jpg"
import Carou24 from "../../Images/24.jpg"


const About = () => {
    return (
        <div className ="container-fluid about-box col-sm-12">
           
                
              <h2 className = "about_text text-center about_title">   ABOUT  <span className = "meizon "> MEIZONs WORLD </span>  </h2> <br />

              <p className ="col-sm-6 about_info">
                The word <span className = "meizon">MEIZON</span> is a Greek word that translates as that which is greater in quantity and in quality.
                 The modus operandi of <span className = "meizon"> MEIZON WORLD </span> will be geared towards specialized grooming, training, refining and coaching to bring our learners to a desired and masterful state.
                The acronym <span className = "meizon"> MEIZON </span>  enterprisingly means
                 <span className = "acronym"> <span className ="acronym_letter">M</span>ostly </span> <span className = "acronym"> <span className ="acronym_letter">E</span>verything </span> <span className = "acronym"> <span className ="acronym_letter">I</span>ntellectual</span> <span className = "acronym"> 
                 <span className ="acronym_letter">Z</span>oned</span> on 
                 <span className = "acronym"> <span className ="acronym_letter">N</span>iches.</span> 
            </p>

    <div className = "col-sm-6">
            <div id="carousel-example-generic" class="carousel  slide " data-ride="carousel">

                            <ol class="carousel-indicators">
                                <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                                <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                                <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                            </ol>


                            <div class="carousel-inner" role="listbox">
                                <div class="item active">
                                <img src={Carou2} alt="..."/>
                                
                                </div>
                                
                                <div class="item">
                                <img src={Carou1} alt="..."/>
                        
                                </div>

                                <div class="item">
                                <img src={Carou3} alt="..."/>
                                
                                </div>

                                <div class="item">
                                <img src={Carou4} alt="..."/>
                               
                                </div>


                                <div class="item">
                                <img src={Carou5} alt="..."/>
                               
                                </div>

                                <div class="item">
                                <img src={Carou6} alt="..."/>
                               
                                </div>

                                <div class="item">
                                <img src={Carou7} alt="..."/>
                               
                                </div>

                                <div class="item">
                                <img src={Carou8} alt="..."/>
                               
                                </div>

                                <div class="item">
                                <img src={Carou9} alt="..."/>
                               
                                </div>

                                <div class="item">
                                <img src={Carou10} alt="..."/>
                               
                                </div>

                                <div class="item">
                                <img src={Carou11} alt="..."/>
                               
                                </div>

                                <div class="item">
                                <img src={Carou12} alt="..."/>
                               
                                </div>

                                <div class="item">
                                <img src={Carou13} alt="..."/>
                               
                                </div>

                                <div class="item">
                                <img src={Carou14} alt="..."/>
                               
                                </div>

                                <div class="item">
                                <img src={Carou15} alt="..."/>
                               
                                </div>

                                <div class="item">
                                <img src={Carou16} alt="..."/>
                               
                                </div>

                                <div class="item">
                                <img src={Carou17} alt="..."/>
                               
                                </div>

                                <div class="item">
                                <img src={Carou18} alt="..."/>
                               
                                </div>

                                <div class="item">
                                <img src={Carou19} alt="..."/>
                               
                                </div>

                                <div class="item">
                                <img src={Carou20} alt="..."/>
                               
                                </div>

                                <div class="item">
                                <img src={Carou21} alt="..."/>
                               
                                </div>

                                <div class="item">
                                <img src={Carou22} alt="..."/>
                               
                                </div>


                                <div class="item">
                                <img src={Carou23} alt="..."/>
                               
                                </div>

                                <div class="item">
                                <img src={Carou24} alt="..."/>
                               
                                </div>

                                

                                
                            </div>

                            <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                                <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                                <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                            </div>
                </div>

        </div>
    );
}

export default About;
