import { BrowserRouter } from "react-router-dom";

import { Hero, Navbar, Works, Tech, StarsCanvas } from "./components";
import Footer from "./components/footer";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='relative z-0'>
          <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            <Navbar />
            <Hero />
          </div>
          <Works />
          <Tech />
          <StarsCanvas />
        </div>
        
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;