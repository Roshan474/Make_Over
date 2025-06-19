import React, { useEffect } from 'react';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Gallery from './components/sections/Gallery';
import Services from './components/sections/Services';
import Training from './components/sections/Training';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

function App() {
  useEffect(() => {
    document.title = "Suma's Makeup Studio";
  }, []);

  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <Gallery />
      <Services />
      <Training />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;