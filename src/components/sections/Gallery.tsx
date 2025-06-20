import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery: React.FC = () => {
  const galleries = [
    {
      category: 'Real Bridal',
      images: [
        { src: 'bride111.jpg', alt: 'Bridal Makeup Look 1' },
        { src: 'bride22.jpg', alt: 'Bridal Makeup Look 2' },
        { src: 'bride44.jpg', alt: 'Bridal Makeup Look 3' },
        { src: 'real3.jpg', alt: 'Bridal Makeup Look 4' },
        { src: 'real7.jpg', alt: 'Bridal Makeup Look 5' },
        { src: 'bride63.jpg', alt: 'Bridal Makeup Look 6' },
        
      ]
    },
    {
      category: 'Party',
      images: [
        { src: 'prt4.jpg', alt: 'Party Makeup Look 1' },
        { src: 'prt3.jpg', alt: 'Party Makeup Look 2' },
        { src: 'prt5.jpg', alt: 'Party Makeup Look 3' },
        { src: 'prt8.jpg', alt: 'Party Makeup Look 4' },
        { src: 'prt10.jpg', alt: 'Party Makeup Look 5' },
        { src: 'prt6.jpg', alt: 'Party Makeup Look 6' },
      ]
    },
    {
      category: 'Marriage',
      images: [
        { src: 'mrg2.jpg', alt: 'Marriage Makeup Look 1' },
        { src: 'marriage1.jpg', alt: 'Marriage Makeup Look 2' },
        { src: 'mrg1.jpg', alt: 'Marriage Makeup Look 3' },
        { src: 'mrg5.jpg', alt: 'Marriage Makeup Look 4' },
        { src: 'mrg3.jpg', alt: 'Marriage Makeup Look 5' },
        { src: 'mrg4.jpg', alt: 'Marriage Makeup Look 6' },
      ]
    }
  ];

  const [activeTab, setActiveTab] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev === galleries[activeTab].images.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? galleries[activeTab].images.length - 1 : prev - 1
    );
  };

  return (
    <section id="gallery" className="py-20 bg-[#F8F5F2]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-[#4A3B3B] mb-2">
          Makeup Gallery
        </h2>
        <p className="text-center text-[#4A3B3B] opacity-80 mb-12 max-w-2xl mx-auto">
          Explore our stunning makeup transformations and artistic creations
        </p>
        
        {/* Gallery Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white rounded-lg shadow-sm p-1">
            {galleries.map((gallery, index) => (
              <button
                key={gallery.category}
                className={`px-4 py-2 text-sm rounded-md transition-all ${
                  activeTab === index 
                    ? 'bg-[#E0BFB8] text-white font-medium shadow-sm' 
                    : 'text-[#4A3B3B] hover:bg-[#F5E1E4] hover:text-[#4A3B3B]'
                }`}
                onClick={() => {
                  setActiveTab(index);
                  setCurrentIndex(0);
                }}
              >
                {gallery.category}
              </button>
            ))}
          </div>
        </div>
        
        {/* Mobile Gallery (Carousel) */}
        <div className="md:hidden relative">
          <div className="overflow-hidden h-96 rounded-xl shadow-lg">
            <div 
              className="relative h-full transition-all duration-300 ease-in-out bg-cover bg-center"
              style={{ 
                backgroundImage: `url(${galleries[activeTab].images[currentIndex].src})`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
                <p className="text-white text-lg font-medium">
                  {galleries[activeTab].images[currentIndex].alt}
                </p>
              </div>
            </div>
          </div>
          
          {/* Carousel Controls */}
          <button 
            className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md"
            onClick={prevSlide}
          >
            <ChevronLeft size={20} className="text-[#4A3B3B]" />
          </button>
          <button 
            className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md"
            onClick={nextSlide}
          >
            <ChevronRight size={20} className="text-[#4A3B3B]" />
          </button>
          
          {/* Dots Indicator */}
          <div className="flex justify-center mt-4 space-x-2">
            {galleries[activeTab].images.map((_, index) => (
              <button 
                key={index}
                className={`w-2 h-2 rounded-full ${
                  currentIndex === index ? 'bg-[#E0BFB8]' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
        
        {/* Desktop Gallery (Grid) */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6">
          {galleries[activeTab].images.map((image, index) => (
            <div 
              key={index}
              className="group h-80 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 relative cursor-pointer"
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-6">
                <p className="text-white text-lg font-medium transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;