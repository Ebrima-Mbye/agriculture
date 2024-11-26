import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import Projects from "./components/Projects";
import Team from "./components/Team";
import Products from "./components/Products";
import Partners from "./components/Partners";
import Events from "./components/Events";
import Careers from "./components/Careers";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Services />
      <Testimonial />
      <Projects />
      <Team />
      <Products />
      <Partners />
      <Events />
      <Careers />
      <Footer />
    </div>
  );
}

export default App;
