import React from 'react';
import { Sparkles, Star, Camera, Users } from 'lucide-react';
import Button from '../ui/Button';

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, price, icon }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 flex flex-col h-full group">
      <div className="mb-4 text-[#E0BFB8] group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-serif font-bold text-[#4A3B3B] mb-2">{title}</h3>
      <p className="text-[#4A3B3B]/70 mb-4 flex-grow">{description}</p>
      <div className="mt-auto">
        <p className="text-[#E0BFB8] font-semibold text-lg mb-4">{price}</p>
        <Button 
          variant="outline" 
          size="sm" 
          className="w-full"
          onClick={() => {
            const element = document.getElementById('contact');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          Contact us
        </Button>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      title: "Bridal Makeup",
      description: "Complete bridal look with traditional or contemporary styles, including trials, touchups, and premium products.",
      price: "Starting at ₹6,000",
      icon: <Sparkles size={32} />
    },
    {
      title: "Party Makeup",
      description: "Glamorous evening looks for special occasions, parties, and events with long-lasting formulas.",
      price: "Starting at ₹3,500",
      icon: <Star size={32} />
    },
    {
      title: "Photoshoot Makeup",
      description: "Camera-ready makeup tailored for photography, ensuring flawless results in all lighting conditions.",
      price: "  Starting at ₹6,000",
      icon: <Camera size={32} />
    },
    {
      title: "Group Packages",
      description: "Special rates for bridal parties, friends, or family groups with coordinated looks for your event.",
      price: "Custom Pricing",
      icon: <Users size={32} />
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-[#4A3B3B] mb-2">
          Our Services
        </h2>
        <p className="text-center text-[#4A3B3B] opacity-80 mb-12 max-w-2xl mx-auto">
          Professional makeup services tailored to enhance your natural beauty
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              price={service.price}
              icon={service.icon}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-[#4A3B3B] mb-4">
            Looking for a customized service or have special requirements?
          </p>
          <Button 
            variant="primary"
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Contact for Custom Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;