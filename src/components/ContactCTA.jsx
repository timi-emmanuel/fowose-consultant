import React from 'react';

const ContactCTA = () => {
  return (
    <section id="contact" className="bg-white section-padding border-t border-gray-100">
      <div className="section-container">
        <div className="bg-navy-900 rounded-[32px] p-10 md:p-16 relative overflow-hidden">
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500 rounded-full opacity-10 blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold-500 rounded-full opacity-10 blur-3xl translate-y-1/2 -translate-x-1/3"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h2 className="text-h3 md:text-h2 font-serif font-bold text-white mb-6">
                Ready to Speak with a Tax Expert?
              </h2>
              <p className="text-gray-300 text-body mb-8">
                Request a Callback and let's discuss how to optimize your tax strategy and ensure full compliance.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" placeholder="First Name" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors" />
                  <input type="text" placeholder="Last Name" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors" />
                </div>
                <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors" />
                <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors" />
                <button type="button" className="w-full bg-gold-500 text-navy-900 font-bold py-4 rounded-xl hover:bg-gold-400 transition-colors">
                  Request a Callback
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
