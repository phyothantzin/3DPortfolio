import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center ">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <div className="lg:block hidden">
          <Tech />
        </div>
        <Works />
        {/* <Feedbacks /> */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>

        <footer className="footer p-6">
          <p className="text-white font-medium text-center">
            Copyright © 2023 Phyo Thant. All rights reserved.
          </p>
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
