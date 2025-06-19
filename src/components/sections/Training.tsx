import React from 'react';
import { GraduationCap, Clock, Calendar, Award } from 'lucide-react';
import Button from '../ui/Button';

const Training: React.FC = () => {
  const features = [
    {
      icon: <Clock size={24} className="text-[#E0BFB8]" />,
      title: "1 Month Basic to Advance Makeup Course",
      description: "Comprehensive training covering all aspects of makeup artistry"
    },
    {
      icon: <Calendar size={24} className="text-[#E0BFB8]" />,
      title: "Monthly Batches",
      description: "New batch starts every month with limited seats"
    },
    {
      icon: <Award size={24} className="text-[#E0BFB8]" />,
      title: "Certification",
      description: "Receive an industry-recognized makeup artist certificate"
    },
    {
      icon: <GraduationCap size={24} className="text-[#E0BFB8]" />,
      title: "Career Support",
      description: "Portfolio Building, Freelancing Support and business guidance"
    }
  ];

  const modules = [
    "Muhurtham Look",
    "Glossy Makeup",
    "WaterProof Makeup",
    "Reception Look",
    "Skin theory & Color theory",
    "Hair styling(20 Types)",
    "Saree Pre Pleating , Box folding,& Ironing",
    "Saree Draping",
    "Floral & Jewelry Arrangement",
  ];

  return (
    <section id="training" className="py-20 bg-[#F5E1E4]/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#4A3B3B] mb-2">
              Become a Certified Makeup Artist
            </h2>
            <p className="text-[#4A3B3B] opacity-80 mb-8">
              Join our professional makeup training program and master the art of creating flawless looks
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="mr-4 mt-1">{feature.icon}</div>
                  <div>
                    <h3 className="font-semibold text-[#4A3B3B] mb-1">{feature.title}</h3>
                    <p className="text-[#4A3B3B]/70 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <h3 className="text-xl font-serif font-semibold text-[#4A3B3B] mb-3">What You'll Learn</h3>
            <ul className="mb-8">
              {modules.map((module, index) => (
                <li key={index} className="mb-2 flex items-center">
                  <span className="w-2 h-2 bg-[#E0BFB8] rounded-full mr-3"></span>
                  <span className="text-[#4A3B3B]">{module}</span>
                </li>
              ))}
            </ul>
            
            <div className="space-y-4 sm:space-y-0 sm:flex sm:space-x-4">
              {/* <Button variant="primary">
                Enroll Now
              </Button> */}
              <Button 
            variant="primary"
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Enroll now
          </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-xl h-96 md:h-[500px]">
              <img 
                src="service2.jpg" 
                alt="Makeup Training Session" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-6 max-w-xs hidden lg:block">
              <p className="text-[#4A3B3B] font-medium mb-2">Next Batch Starting</p>
              {/* <p className="text-[#E0BFB8] text-xl font-bold">
                {new Date(Date.now() + 14*24*60*60*1000).toLocaleDateString('en-US', {month: 'long', day: 'numeric'})}
              </p> */}
               <p className="text-[#4A3B3B] font-medium mb-2">Every Month</p>
              <p className="text-[#4A3B3B]/70 text-sm mt-2">Limited seats available. Register now to secure your spot!</p>
            </div>
          </div>
        </div>  
      </div>
    </section>
  );
};

export default Training;