import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
      <div className="section-container">
        <div className="flex justify-between items-center h-20">
          {/* Logo Placeholder */}
          <div className="flex-shrink-0 flex items-center">
            <div className="text-navy-900 font-serif font-bold text-2xl flex items-center gap-2">
              <span className="text-gold-500 text-3xl">OS</span>
              <div className="flex flex-col">
                <span className="leading-none text-xl">Olufowose Samuel</span>
                <span className="text-small font-sans font-normal text-gray-600 tracking-wider uppercase mt-1">Tax Consultant</span>
              </div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-900 hover:text-gold-500 font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <a href="#contact" className="bg-navy-900 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-navy-800 transition-colors flex items-center gap-2">
              Book a Consultation
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-navy-900 hover:text-gold-500 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3 flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-3 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-gold-500"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="px-3 pt-4">
              <a href="#contact" className="w-full flex justify-center bg-navy-900 text-white px-6 py-3 rounded-lg font-semibold">
                Book a Consultation
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
