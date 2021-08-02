import Navbars from "./Components/NAVBAR/Navbars"
import Hero from "./Components/HERO/hero"
import Services from "./Components/SERVICES/Services"
import Footer from "./Components/FOOTER/Footer"
import About from "./Components/ABOUT/About"
import Leader from "./Components/SERVICES/LEADERSHIP/Leader"
import Performance from "./Components/SERVICES/PERFORMANCE/Performance"
import { BrowserRouter as Router, Switch, Route, withRouter, Link } from 'react-router-dom';
import Personality from "./Components/SERVICES/PERSONALITY/Personality"
import Communication from "./Components/SERVICES/COMMUNICATION/Communication"
import PublicSpeaking from "./Components/SERVICES/PUBLICSPEAKING/PublicSpeaking"
import Conference from "./Components/SERVICES/CONFERENCE/Conference"
import ScrollToTop from "./ScrollToTop"




function App() {
  return (
    <div>
   
   <Router>
   <ScrollToTop>
     <Switch>
          <Route exact path = "/">
            <Navbars/>
            <Hero/>
            <Services/>
            <About/>
            <Footer/>
         </Route>

         
         <Route component = {Leader}  path = "/leadership" />
         <Route component = {Performance} path = "/performance" />
         <Route component = {Personality} path = "/personality" />
         <Route component = {Communication} path = "/communication" />
         <Route component = {PublicSpeaking} path = "/publicspeaking" />
         <Route component = {Conference} path = "/conferencespeaking" />
         
        
      </Switch>
      </ScrollToTop>
   </Router>

      </div>
  );
}

export default App;
