import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 overflow-hidden bg-gray-50">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-gray-50/90 to-transparent z-10" />
        <img 
          src="/lagos_hero_bg_1782202795575.png" 
          alt="Lagos Skyline" 
          className="w-full h-full object-cover object-right opacity-60"
        />
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-3xl">
          <p className="text-gold-500 font-bold tracking-widest uppercase mb-4 text-small md:text-base">
            Tax Advisory. Compliance. Business Growth.
          </p>
          <h1 className="text-h4 md:text-h3 font-bold text-navy-900 leading-tight mb-6">
            Smart Tax Solutions
            <span className='text-gold-500 block text-h3'>for Individual & Businesses</span>
          </h1>
          <p className="text-body-large text-gray-600 mb-10 max-w-xl leading-relaxed">
            I help individuals, startups, and established businesses in Lagos and across Nigeria achieve financial clarity through expert tax advisory, compliance, and planning services that help you save, stay compliant, and grow with confidence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a href="#contact" className="btn-primary flex justify-center items-center gap-2">
              <Calendar size={20} />
              Book a Consultation
            </a>
            <a href="#services" className="btn-secondary flex justify-center items-center gap-2">
              Explore Services
              <ArrowRight size={20} />
            </a>
          </div>

        </div>
      </div>

      {/* Full-width Trusted By Section */}
      <div className="relative z-10 mt-16 lg:mt-24 w-full">
        <div className="section-container mb-4">
          <p className="text-[14px] text-gray-500 tracking-wider uppercase font-semibold">
            Trusted by Clients Across Lagos
          </p>
        </div>
        
        <div className=" backdrop-blur-md py-6 w-full">
          <div className="overflow-hidden whitespace-nowrap relative w-full">
            {/* Fade masks for smooth entry/exit */}
            <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-gray-50/80 to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-gray-50/80 to-transparent z-10"></div>
            
            <div className="flex w-max animate-scroll items-center gap-16 md:gap-32 opacity-80 grayscale-0 hover:grayscale transition-all duration-500">
              {/* First set of logos */}
              <img src="/moonluck-logo.png" alt="Moonluck" className="h-12 md:h-14 object-contain" />
              <img src="/taidob-logo.jpg" alt="Taidob" className="h-12 md:h-14 object-contain mix-blend-multiply" />
              <img src="/nrs-logo.png" alt="NRS" className="h-12 md:h-14 object-contain" />
              <img src="/firs-logo.png" alt="FIRS" className="h-12 md:h-14 object-contain" />
              <img src="/Lirs-logo.gif" alt="LIRS" className="h-12 md:h-14 object-contain mix-blend-multiply" />
              
              {/* Duplicated set for seamless scrolling */}
              <img src="/moonluck-logo.png" alt="Moonluck" className="h-12 md:h-14 object-contain" />
              <img src="/taidob-logo.jpg" alt="Taidob" className="h-12 md:h-14 object-contain mix-blend-multiply" />
              <img src="/nrs-logo.png" alt="NRS" className="h-12 md:h-14 object-contain" />
              <img src="/firs-logo.png" alt="FIRS" className="h-12 md:h-14 object-contain" />
              <img src="/Lirs-logo.gif" alt="LIRS" className="h-12 md:h-14 object-contain mix-blend-multiply" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
