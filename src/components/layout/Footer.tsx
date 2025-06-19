import React from 'react';
import { Instagram, Facebook, Twitter, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#4A3B3B] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: About */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Suma's Makeup Studio</h3>
            <p className="text-white/70 mb-4">
              Professional makeup services and training for all occasions. Enhancing your natural beauty with expertise and passion.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/sumas.makeup" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-[#E0BFB8] transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="text-white hover:text-[#E0BFB8] transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="text-white hover:text-[#E0BFB8] transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Gallery', 'Services', 'Training', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-white/70 hover:text-[#E0BFB8] transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3: Services */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                'Bridal Makeup',
                'Party Makeup',
                'Photoshoot Makeup',
                'Makeup Training',
                'Group Packages',
                'Custom Services'
              ].map((service) => (
                <li key={service}>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="text-white/70 hover:text-[#E0BFB8] transition-colors"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 4: Contact */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone size={20} className="text-[#E0BFB8] mr-3 mt-1" />
                <span className="text-white/70">+91 8073174922</span>
              </li>
              <li className="flex items-start">
                <Mail size={20} className="text-[#E0BFB8] mr-3 mt-1" />
                <span className="text-white/70">hello@sumasmakeup.com</span>
              </li>
              <li className="text-white/70">
                <p>123 Beauty Street</p>
                <p>1063/30, 2nd Main 6th Cross Rd, Vidyaranyapura, Mysuru, Karnataka 570008</p>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm">
            &copy; {new Date().getFullYear()} Suma's Makeup Studio. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-white/70 hover:text-white text-sm mx-3">Privacy Policy</a>
            <a href="#" className="text-white/70 hover:text-white text-sm mx-3">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;