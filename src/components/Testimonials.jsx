import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  return (
    <section className="bg-gray-50 section-padding">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center relative">
          <Quote className="text-gold-500/20 w-24 h-24 mx-auto mb-8" />
          <p className="text-h4 md:text-h3 font-serif italic text-navy-900 leading-relaxed mb-10">
            "Olufowose Samuel helped us optimize our tax structure and save significantly while ensuring full compliance. Highly recommended!"
          </p>
          <div className="flex flex-col items-center justify-center">
            <div className="w-16 h-1 bg-gold-500 mb-4 rounded-full"></div>
            <p className="font-bold text-navy-900">— Managing Director</p>
            <p className="text-gray-500 text-small uppercase tracking-wider mt-1">Financial Services Firm, Lagos</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
