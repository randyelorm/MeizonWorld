import Navbar from "./Components/NAVBAR/Navbar"
import Hero from "./Components/HERO/hero"
import Services from "./Components/SERVICES/Services"
import Footer from "./Components/FOOTER/Footer"
import About from "./Components/ABOUT/About"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

function App() {
  return (
    <div>
    <Router>
      <Navbar/>
      <Hero/>
      <Services/>
      <About/>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
