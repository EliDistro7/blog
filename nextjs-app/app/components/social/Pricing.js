// components/social/PricingSection.jsx
import React from 'react';
import { CheckCircle } from 'lucide-react';

const PricingSection = ({ language, pricingPlans }) => {
  return (
    <section className="py-20 px-0 bg-brand-deep">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            {language === 'en' ? 'Choose Your Plan' : 'Chagua Mpango Wako'}
          </h2>
          <p className="text-brand-light text-lg max-w-2xl mx-auto">
            {language === 'en' 
              ? 'Flexible pricing plans designed to grow with your business'
              : 'Mipango ya bei ya kubadilika iliyoundwa kukua na biashara yako'
            }
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl ">
          {pricingPlans.map((plan, index) => (
            <div key={index} className={`bg-brand-medium p-8 rounded-xl border-2 transition-all duration-300 hover:transform hover:scale-105 ${
              plan.popular 
                ? 'border-brand-gold shadow-gold' 
                : 'border-brand-gold/10 hover:border-brand-gold/30'
            }`}>
              {plan.popular && (
                <div className="bg-brand-gold text-brand-dark px-4 py-1 rounded-full text-sm font-semibold inline-block mb-4">
                  {language === 'en' ? 'Most Popular' : 'Maarufu Zaidi'}
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name[language]}</h3>
              <p className="text-gray-300 mb-4">{plan.subtitle[language]}</p>
              <div className="text-3xl font-bold text-brand-gold mb-2">{plan.price}</div>
              <p className="text-gray-300 text-sm mb-6">{plan.period[language]}</p>
              
              <p className="text-sm mb-6 text-gray-300">{plan.target[language]}</p>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start text-gray-300">
                    <CheckCircle className="w-5 h-5 text-brand-gold mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature[language]}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-4 rounded-lg font-semibold transition-all ${
                plan.popular 
                  ? 'bg-brand-gold hover:bg-brand-goldDark text-brand-dark' 
                  : 'border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-dark'
              }`}>
                {language === 'en' ? 'Get Started' : 'Anza'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;