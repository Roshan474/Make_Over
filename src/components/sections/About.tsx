import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#4A3B3B] mb-6">
              About Suma
            </h2>
            
            <div className="space-y-4 text-[#4A3B3B]/80">
              <p>
                With over 6 years of experience in the beauty industry, Suma has established herself as a premier makeup artist known for creating timeless, elegant looks that enhance natural beauty.
              </p>
              
              <p>
                After training with industry leaders and working with hundreds of clients, Suma founded her own studio with a mission to provide exceptional makeup services and empower aspiring artists through professional training.
              </p>
              
              <p>
                Her approach combines technical expertise with artistic vision, ensuring each client receives a personalized experience that makes them look and feel their absolute best.
              </p>
              
              <blockquote className="border-l-4 border-[#E0BFB8] pl-4 italic my-6">
                "My philosophy is simple: enhance, don't mask. True beauty comes from bringing out each person's unique features and making them feel confident in their own skin."
              </blockquote>
              
              <p>
                When not creating stunning looks for clients, Suma is passionate about sharing her knowledge through her monthly makeup artist training program, helping the next generation of beauty professionals develop their skills.
              </p>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="w-60 h-60 md:w-80 md:h-80 bg-[#E0BFB8]/20 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            <img 
              src="suma.jpg" 
              alt="Suma - Makeup Artist" 
              className="rounded-full w-56 h-56 md:w-72 md:h-72 object-cover border-8 border-white shadow-xl relative z-10 mx-auto"
            />
          </div>
        </div>
        
        {/* Testimonials */}
        <div className="mt-20">
          <h3 className="text-2xl font-serif font-bold text-center text-[#4A3B3B] mb-10">
            What Our Clients Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Anusha Mandakalli",
                role: "Bride",
                quote: "Thank you so much mam for beautiful mekup 💄 in short minutes. 😍 one's again thank u very much for caring mam 🥰🥰",
                image: "feedback.jpg"
              },
              {
                name: "Deekshitha",
                role: "Marriage Client",
                quote: "Gombe thara thorthide akka nan thank you so much akka.. Nan gombe thara thoruke nine karana akka 😘😘😘😘",
                image: "./feedback.jpg"
              },
              {
                name: "Ashwini Rakesh",
                role: "Reception Client",
                quote: "Almost elru make up yar madiddu chanagide antha kelthidru ❤️❤️",
                image: "feedback.jpg"
              },
              {
                name: "Rakshitha Kadakola",
                role: "Reception Client",
                quote: "Mam thank you so much for your wonderful makeup. I am so happy for this long lasting makeover.Sumathi mam, you're the best one ❤️Once again, thank you so much for this beautiful artist.",
                image: "feedback.jpg"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-[#F8F5F2] p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-[#4A3B3B]">{testimonial.name}</h4>
                    <p className="text-[#4A3B3B]/70 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-[#4A3B3B]/80 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;