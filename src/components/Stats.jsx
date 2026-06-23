import React from 'react';

const Stats = () => {
  const stats = [
    { value: '10+', label: 'Years Experience' },
    { value: '100+', label: 'Clients Served' },
    { value: '₦500M+', label: 'Transactions Advised' },
    { value: '95%', label: 'Client Retention' }
  ];

  return (
    <section className="bg-gold-500 py-16">
      <div className="section-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x-0 md:divide-x divide-navy-900/20">
          {stats.map((stat, index) => (
            <div key={index} className="px-4">
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 mb-2">{stat.value}</h3>
              <p className="text-navy-800 font-semibold uppercase tracking-wider text-small">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
