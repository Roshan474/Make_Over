import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Phone } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
        <img src="logo.jpg" alt="Suma's Logo" className="w-10 h-10 object-cover rounded-full mr-2" />

          <h1 className={`font-serif text-2xl md:text-3xl font-bold ${
            scrolled ? 'text-[#4A3B3B]' : 'text-white'
          }`}>
           Reborn Beauty Lounge (Suma's Makeover)
          </h1> 
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {['Home', 'Gallery', 'Services', 'Training', 'About', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className={`font-medium transition-colors ${
                scrolled ? 'text-[#4A3B3B] hover:text-[#E0BFB8]' : 'text-white hover:text-[#F5E1E4]'
              }`}
            >
              {item}
            </button>
          ))}
        </nav>
        
        {/* Social Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <a 
            href="https://www.instagram.com/sumas.makeup" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`transition-colors ${
              scrolled ? 'text-[#4A3B3B] hover:text-[#E0BFB8]' : 'text-white hover:text-[#F5E1E4]'
            }`}
          >
            <Instagram size={20} />
          </a>
          <a 
            href="tel:+91 8073174922 " 
            className={`transition-colors ${
              scrolled ? 'text-[#4A3B3B] hover:text-[#E0BFB8]' : 'text-white hover:text-[#F5E1E4]'
            }`}
          >
            <Phone size={20} />
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? 
            <X size={24} className={scrolled ? 'text-[#4A3B3B]' : 'text-white'} /> : 
            <Menu size={24} className={scrolled ? 'text-[#4A3B3B]' : 'text-white'} />
          }
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-40 pt-20">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-6">
            {['Home', 'Gallery', 'Services', 'Training', 'About', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-[#4A3B3B] text-xl font-medium py-2 border-b border-gray-100"
              >
                {item}
              </button>
            ))}
            <div className="flex items-center space-x-4 pt-4">
              <a 
                href="https://www.instagram.com/sumas.makeup" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#4A3B3B] hover:text-[#E0BFB8]"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="tel:+123456789" 
                className="text-[#4A3B3B] hover:text-[#E0BFB8]"
              >
                <Phone size={24} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;