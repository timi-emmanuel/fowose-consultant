import React from 'react';
import { ShieldCheck, Users, Award, Clock } from 'lucide-react';

const About = () => {
  const reasons = [
    {
      title: 'Deep Tax Expertise',
      description: 'Up-to-date knowledge of Nigerian tax laws and FIRS regulations.',
      icon: <ShieldCheck className="text-gold-500 w-6 h-6 shrink-0" />
    },
    {
      title: 'Client-Focused',
      description: 'Personalized solutions tailored to your unique needs.',
      icon: <Users className="text-gold-500 w-6 h-6 shrink-0" />
    },
    {
      title: 'Integrity & Confidentiality',
      description: 'Your information is handled with the highest level of confidentiality.',
      icon: <Award className="text-gold-500 w-6 h-6 shrink-0" />
    },
    {
      title: 'Timely & Reliable',
      description: 'We deliver on time, every time—so you can focus on growth.',
      icon: <Clock className="text-gold-500 w-6 h-6 shrink-0" />
    }
  ];

  return (
    <section id="about" className="bg-navy-900 text-white section-padding">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Portrait Column */}
          <div className="relative">
            <div className="bg-navy-800 rounded-[32px] p-2 relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" 
                alt="Olufowose Samuel - Tax Consultant" 
                className="w-full h-auto rounded-[24px] object-cover aspect-[4/5]"
              />
              {/* Badges Overlay */}
              <div className="absolute -bottom-6 left-6 flex space-x-4">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center p-1 shadow-2xl overflow-hidden">
                  <img src="/ican_badge_1782202450840.png" alt="ICAN Certified" className="w-full h-full object-cover" />
                </div>
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center p-1 shadow-2xl overflow-hidden">
                  <img src="/citn_badge_1782202461397.png" alt="CITN Certified" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            {/* Decorative background element */}
            <div className="absolute top-10 -right-6 w-full h-full border-2 border-gold-500 rounded-[32px] -z-10"></div>
          </div>

          {/* Content Column */}
          <div>
            <p className="text-gold-500 font-bold tracking-widest uppercase mb-4 text-small">About Me</p>
            <h2 className="text-h3 md:text-h2 font-serif font-bold mb-6 leading-tight">
              Your Trusted Tax Partner in Lagos
            </h2>
            <div className="w-16 h-1 bg-gold-500 mb-8"></div>
            
            <p className="text-gray-300 text-body mb-10 leading-relaxed">
              I am a tax consultant dedicated to helping individuals and businesses in Lagos and across Nigeria achieve financial clarity through expert tax advisory, compliance, and planning. Helping clients make smarter tax decisions while remaining fully compliant.
            </p>
            
            <h3 className="text-h4 font-serif font-bold mb-6 text-white">Why Work With Me?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8">
              {reasons.map((reason, index) => (
                <div key={index} className="flex gap-4">
                  {reason.icon}
                  <div>
                    <h4 className="font-bold text-white mb-2">{reason.title}</h4>
                    <p className="text-small text-gray-400 leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
