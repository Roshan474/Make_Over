import React from "react";
import { Phone, Mail, MapPin, Clock, Instagram } from "lucide-react";

const ContactInfo: React.FC<{
  icon: React.ReactNode;
  title: string;
  details: string | React.ReactNode;
  link?: string;
}> = ({ icon, title, details, link }) => {
  const content = (
    <div className="flex items-start">
      <div className="text-[#E0BFB8] mr-4">{icon}</div>
      <div>
        <h4 className="font-semibold text-[#4A3B3B] mb-1">{title}</h4>
        <div className="text-[#4A3B3B]/70">{details}</div>
      </div>
    </div>
  );

  if (link) {
    return (
      <a
        href={link}
        className="block hover:bg-[#F5E1E4]/30 p-3 rounded-lg transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  }

  return <div className="p-3">{content}</div>;
};

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-[#F8F5F2]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-[#4A3B3B] mb-2">
          Get In Touch
        </h2>
        <p className="text-center text-[#4A3B3B] opacity-80 mb-12 max-w-2xl mx-auto">
          We'd love to hear from you! Visit us, call, or connect online.
        </p>

        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-6 md:p-8">
          <h3 className="text-2xl font-serif font-bold text-[#4A3B3B] mb-6">
            Contact Information
          </h3>

          <div className="space-y-2 mb-8">
            <ContactInfo
              icon={<Phone size={20} />}
              title="Phone"
              details={
                <span>
                  +91 <b>8073174922</b>
                </span>
              }
              link="tel:+918073174922"
            />
            <ContactInfo
              icon={<Mail size={20} />}
              title="Email"
              details="sumathi.s.kunder@gmail.com"
              link="mailto:sumathi.s.kunder@gmail.com"
            />
            <ContactInfo
              icon={<MapPin size={20} />}
              title="Location"
              details="1063/30, 2nd Main 6th Cross Rd, Vidyaranyapura, Mysuru, Karnataka 570008"
              link="https://maps.app.goo.gl/GQ5B7vME3tqaarMu8?g_st=aw"
            />
            <ContactInfo
              icon={<Instagram size={20} />}
              title="Instagram"
              details="@sumas.makeup"
              link="https://www.instagram.com/sumas.makeup"
            />
            <ContactInfo
              icon={<Clock size={20} />}
              title="Working Hours"
              details={
                <>
                  <div>
                    Monday - Saturday: <b>10:30 AM - 7 PM</b>
                  </div>
                  <div>Sunday: Closed</div>
                </>
              }
            />
          </div>

          <div className="rounded-xl overflow-hidden h-64 shadow-md">
            <div className="w-full h-full bg-[#E0BFB8]/10">
              <MapPin size={32} className="text-[#E0BFB8] mx-auto mt-2 mb-1" />
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3705.5710161068814!2d76.65051199999999!3d12.284525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf6f005cb9b06d%3A0xb5deee9a191bf527!2sReborn%20beauty%20lounge%20(suma&#39;s%20makeover)!5e1!3m2!1sen!2sin!4v1745400351989!5m2!1sen!2sin"
                className="w-full h-[85%] rounded-b-xl"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="text-center mt-4">
            <p className="text-[#4A3B3B] opacity-70">
              Visit us for a consultation or to book an appointment!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
