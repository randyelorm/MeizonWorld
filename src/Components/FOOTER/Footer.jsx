import React from 'react';
import "./footerstyles.css"
import footerimg from "../../Images/message.svg"

const Footer = () => {
    return (
        <section className ="col-sm-12 footer " id = "footer">
           
            <div className =" col-sm-6 social-media ">
              
             
             
            <br />
             

              <div  className = "footer_links_box text-center">
                    <div className = "div_for_link_a">
                    <h2>Get in Touch</h2> <br />
                        <a href="tel:+233556019670" className="footer_links"><i className ="fas fa-phone-alt"></i>+233556019670 </a> <br /> 
                        <a href="https://gmail.com" className="footer_links"><i className ="fas fa-envelope"></i> meizonworld@gmail.com </a> <br />
                        <a href="https://twitter.com/MeizonWorld" className="footer_links"> <i className="fab fa-twitter"> </i> @MeizonWorld </a> <br /> 
                        <a href="https://www.linkedin.com/company/meizon-world/" className="footer_links"><i className="fab fa-linkedin"> </i> Meizon World </a>  
                    </div>
    
              </div>
    
            </div>


        

            <div className="col-sm-6">
                
              <img src={footerimg} className ="img-responsive footer-img" alt=""/>
                

            </div>

        

          </section>
    );
}

export default Footer;
