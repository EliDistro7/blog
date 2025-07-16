// components/social/CTASection.jsx
import React from 'react';

const CTASection = ({ language }) => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-brand-gold to-brand-goldDark">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-dark">
            {language === 'en' ? 'Ready to Transform Your Social Media?' : 'Uko Tayari Kubadilisha Mitandao Yako ya Kijamii?'}
          </h2>
          <p className="text-xl text-brand-dark/80 mb-8">
            {language === 'en' 
              ? 'Join hundreds of successful businesses that trust us with their social media presence'
              : 'Jiunge na mamia ya biashara zilizofanikiwa zinazotumini huduma zetu za mitandao ya kijamii'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-brand-dark hover:bg-brand-deep text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105">
              {language === 'en' ? 'Start Your Journey' : 'Anza Safari Yako'}
            </button>
            <button className="border-2 border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white px-8 py-4 rounded-lg font-semibold transition-all">
              {language === 'en' ? 'Schedule Consultation' : 'Panga Ushauri'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;