import { BrowserRouter } from "react-router-dom";

import {Hero, Navbar,About, Experience } from "./components";
import Tech from "./components/Tech";



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
        
        
      </div>
    </BrowserRouter>
  );
}

export default App;
