import React, { useEffect, useState } from 'react';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  const images = ['bg1.jpg', 'bg.jpg'];
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen relative flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${images[bgIndex]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 1s ease-in-out',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-white mb-4 drop-shadow-lg">
          Brushed by Art, Defined by Beauty
        </h1>
        <p className="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto drop-shadow-md">
          Where Every Face Tells a Beautiful Story
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button 
            variant="primary" 
            size="lg"
            className="bg-transparent border border-white text-white hover:bg-white hover:text-black transition"
            onClick={() => scrollToSection('contact')}
          >
            Book Now
          </Button>
          {/* <Button 
            variant="outline" 
            size="lg"
            onClick={() => scrollToSection('contact')}
          >
            Join Training
          </Button> */}
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div 
          className="w-8 h-8 border-b-2 border-r-2 border-white rotate-45 cursor-pointer" 
          onClick={() => scrollToSection('gallery')}
        ></div>
      </div>
    </section>
  );
};

export default Hero;
