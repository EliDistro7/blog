'use client';

import React from 'react';
import { CheckCircle, Package } from 'lucide-react';
import { pricingPlans, currentPartners } from '@/app/components/door/data';
import { useLanguage } from '@/context/LanguageContext';

const PartnersAndPricing = () => {
  const { language } = useLanguage();

  const getLocalizedText = (textObj) => {
    if (!textObj) return '';
    return textObj[language] || textObj.en;
  };

  const handlePlanClick = (planName) => {
    const message = getLocalizedText({
      en: `Hi! I'm interested in the ${getLocalizedText(planName)} plan for door-to-door marketing services. Can you provide more details?`,
      sw: `Hujambo! Ninapendezwa na mpango wa ${getLocalizedText(planName)} kwa huduma za uuzaji wa mlango hadi mlango. Je, unaweza kutoa maelezo zaidi?`
    });
    
    const whatsappUrl = `https://wa.me/255745787370?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* Current Partners Section */}
      <div className="py-20 bg-gray-900/80 backdrop-blur-md">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-goldLight mb-6">
              {getLocalizedText({
                en: "Our Current Partners",
                sw: "Washirika Wetu wa Sasa"
              })}
            </h2>
            <p className="text-xl text-brand-gold max-w-2xl mx-auto">
              {getLocalizedText({
                en: "Companies we're actively promoting through door-to-door campaigns",
                sw: "Makampuni tunayokutangatanga kwa kutumia kampeni za mlango hadi mlango"
              })}
            </p>
          </div>

          <div className="space-y-12">
            {currentPartners.map((partner, index) => {
              const LogoComponent = partner.logo;
              return (
                <div key={index} className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 border border-brand-gold/30 shadow-layer">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-gradient-to-r from-brand-gold to-brand-goldLight rounded-xl mr-4 shadow-gold">
                      <LogoComponent className="w-8 h-8 text-gray-900" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-brand-goldLight">{partner.company}</h3>
                      <p className="text-brand-gold">{getLocalizedText(partner.industry)}</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {partner.products.map((product, productIndex) => {
                      const ProductIcon = product.icon || Package;
                      return (
                        <div key={productIndex} className="bg-gray-700/30 rounded-xl p-6 border border-brand-gold/20 hover:border-brand-gold/40 transition-all">
                          <div className="flex items-center mb-4">
                            <div className="p-2 bg-brand-gold/20 rounded-lg mr-3">
                              <ProductIcon className="w-5 h-5 text-brand-gold" />
                            </div>
                            <h4 className="text-lg font-semibold text-brand-goldLight">
                              {getLocalizedText(product.name)}
                            </h4>
                          </div>
                          <p className="text-brand-gold/80 text-sm leading-relaxed">
                            {getLocalizedText(product.description)}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-20 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-goldLight mb-6">
              {getLocalizedText({
                en: "Pricing Plans",
                sw: "Mipango ya Bei"
              })}
            </h2>
            <p className="text-xl text-brand-gold max-w-2xl mx-auto">
              {getLocalizedText({
                en: "Choose the perfect plan for your door-to-door marketing needs",
                sw: "Chagua mpango mkamilifu kwa mahitaji yako ya uuzaji wa mlango hadi mlango"
              })}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 border border-brand-gold/30 relative shadow-layer ${plan.popular ? 'ring-2 ring-brand-gold' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-brand-gold to-brand-goldLight text-gray-900 px-6 py-2 rounded-full text-sm font-bold shadow-gold">
                      {getLocalizedText({
                        en: "Most Popular",
                        sw: "Maarufu Zaidi"
                      })}
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-brand-goldLight mb-4">
                    {getLocalizedText(plan.name)}
                  </h3>
                  <div className="text-4xl font-bold text-brand-goldLight mb-2">
                    {typeof plan.price === 'object' ? getLocalizedText(plan.price) : plan.price}
                  </div>
                  <div className="text-brand-gold">
                    {getLocalizedText(plan.period)}
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-brand-gold/80">
                      <CheckCircle className="w-5 h-5 text-brand-gold mr-3" />
                      {getLocalizedText(feature)}
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => handlePlanClick(plan.name)}
                  className={`w-full py-3 rounded-xl font-bold transition-all shadow-gold hover:scale-[1.02] ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-brand-gold to-brand-goldLight text-gray-900 hover:shadow-2xl' 
                      : 'bg-brand-gold/10 text-brand-goldLight border border-brand-gold/40 hover:bg-brand-gold/20'
                  }`}
                >
                  {getLocalizedText({
                    en: "Choose Plan",
                    sw: "Chagua Mpango"
                  })}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnersAndPricing;