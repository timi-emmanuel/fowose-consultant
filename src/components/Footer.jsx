import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy-900 text-white pt-20 pb-8">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="col-span-1 lg:col-span-2">
            <div className="text-white font-serif font-bold text-2xl flex items-center gap-2 mb-6">
              <span className="text-gold-500 text-4xl">OS</span>
              <div className="flex flex-col">
                <span className="leading-none text-2xl">Olufowose Samuel</span>
                <span className="text-small font-sans font-normal text-gray-300 tracking-wider uppercase mt-1">Tax Consultant</span>
              </div>
            </div>
            <p className="text-gray-300 max-w-sm mb-8 leading-relaxed">
              Providing strategic tax advisory, compliance, and planning services that help you save, stay compliant, and grow with confidence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center hover:bg-gold-500 hover:text-navy-900 transition-colors">
              
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center hover:bg-gold-500 hover:text-navy-900 transition-colors">
                
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center hover:bg-gold-500 hover:text-navy-900 transition-colors">
              
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-xl font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4 text-gray-300">
              <li><a href="#" className="hover:text-gold-500 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-gold-500 transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-gold-500 transition-colors">Services</a></li>
              <li><a href="#resources" className="hover:text-gold-500 transition-colors">Resources</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-xl font-bold mb-6 text-white">Contact Info</h4>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin className="text-gold-500 shrink-0 mt-1" size={20} />
                <span>Lagos, Nigeria</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-gold-500 shrink-0" size={20} />
                <span>+234 907 867 2265</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-gold-500 shrink-0" size={20} />
                <span>hello@olufowosesamuel.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-small">
          <p>&copy; {new Date().getFullYear()} Olufowose Samuel. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
