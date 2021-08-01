import Navbar from "./Components/NAVBAR/Navbar"
import Hero from "./Components/HERO/hero"
import Services from "./Components/SERVICES/Services"
import Footer from "./Components/FOOTER/Footer"
import About from "./Components/ABOUT/About"
import Leader from "./Components/LEADERSHIP/Leader"
// import {BrowserRouter as Router, Route, Switch} from "react-router-dom"


function App() {
  return (
    <div>
   
      <Navbar/>
      <Hero/>
      <Services/>
             
                       
      <About/>
      <Footer/>

    </div>
  );
}

export default App;
