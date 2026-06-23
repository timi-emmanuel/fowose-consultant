import React from 'react';
import { FileCheck, LineChart, Landmark, User, FileSearch, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Tax Compliance',
      description: 'Timely and accurate tax filing to keep you fully compliant and penalty-free.',
      icon: <FileCheck className="text-gold-500 w-8 h-8 mb-6" />
    },
    {
      title: 'Tax Planning & Advisory',
      description: 'Strategic tax planning to minimize liabilities and maximize savings legally.',
      icon: <LineChart className="text-gold-500 w-8 h-8 mb-6" />
    },
    {
      title: 'Corporate Tax Services',
      description: 'End-to-end tax support for companies, startups, and growing businesses.',
      icon: <Landmark className="text-gold-500 w-8 h-8 mb-6" />
    },
    {
      title: 'Personal Tax Services',
      description: 'Income tax registration, filing, and advisory for individuals and professionals.',
      icon: <User className="text-gold-500 w-8 h-8 mb-6" />
    },
    {
      title: 'Tax Audit & Representation',
      description: 'Expert support during tax audits and dispute resolution with tax authorities.',
      icon: <FileSearch className="text-gold-500 w-8 h-8 mb-6" />
    }
  ];

  return (
    <section id="services" className="bg-gray-50 section-padding">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-h3 md:text-h2 text-navy-900 font-bold mb-4">How I Can Help</h2>
          <div className="w-16 h-1 bg-gold-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card group hover:-translate-y-1 transition-transform duration-300">
              {service.icon}
              <h3 className="text-h4 font-serif font-bold text-navy-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed min-h-[80px]">{service.description}</p>
              <a href="#" className="inline-flex items-center text-gold-500 font-semibold group-hover:text-navy-900 transition-colors">
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
