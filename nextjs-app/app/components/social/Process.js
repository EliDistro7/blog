// components/social/ProcessSection.jsx
import React from 'react';

const ProcessSection = ({ language, process }) => {
  return (
    <section className="py-20 px-0 bg-brand-dark">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            {language === 'en' ? 'Our Process' : 'Mchakato Wetu'}
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            {language === 'en' 
              ? 'A proven 5-step approach to social media success'
              : 'Njia iliyothibitishwa ya hatua 5 za mafanikio ya mitandao ya kijamii'
            }
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {process.map((step, index) => (
            <div key={index} className="flex items-start mb-12 last:mb-0">
              <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-brand-gold to-brand-goldDark rounded-full flex items-center justify-center text-brand-dark font-bold text-xl mr-8">
                {step.step}
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-4 text-white">{step.title[language]}</h3>
                <p className="text-gray-300 leading-relaxed">{step.description[language]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
