import { BrowserRouter } from "react-router-dom";

import {Hero, Navbar,About, Experience, Contact } from "./components";
import Tech from "./components/Tech";
import Works from "./components/Works";
import { StarsCanvas } from "./components/canvas";



const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero/>
          </div>
          <About/>
          <Experience/>
          <Tech/>
          <Works/>
          <div className='relative z-0'>
          <Contact/>
          <StarsCanvas/>
        </div>
        
        
      </div>
    </BrowserRouter>
  );
}

export default App;
