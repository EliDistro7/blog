'use client';
import React from 'react';
import { Check, Star } from 'lucide-react';

const TenderPricingSection = ({ language, pricingPlans }) => {
  const data = pricingPlans[language];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {data.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {data.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 ${
                plan.popular
                  ? 'bg-gradient-to-b from-brand-primary/20 to-brand-secondary/20 border-2 border-brand-primary'
                  : 'bg-gray-800 border-2 border-gray-700'
              } hover:shadow-xl transition-shadow duration-300`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1">
                    <Star className="w-4 h-4 fill-current" />
                    {language === 'en' ? 'Most Popular' : 'Maarufu Zaidi'}
                  </div>
                </div>
              )}

              {/* Plan header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-300 mb-6">
                  {plan.description}
                </p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">
                    {plan.price}
                  </span>
                  <span className="text-gray-400 ml-2">
                    {plan.period}
                  </span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-300 text-sm">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-brand-primary to-brand-secondary text-white hover:shadow-lg'
                    : 'bg-gray-700 text-white hover:bg-gray-600'
                }`}
              >
                {language === 'en' ? 'Choose Plan' : 'Chagua Mpango'}
              </button>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">
            {language === 'en' 
              ? 'All plans include our success guarantee and post-submission support'
              : 'Mipango yote inajumuisha dhamana yetu ya mafanikio na msaada wa baada ya uwasilishaji'
            }
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-300">
            <span>✓ {language === 'en' ? 'No hidden fees' : 'Hakuna ada zilizofichwa'}</span>
            <span>✓ {language === 'en' ? 'Money-back guarantee' : 'Dhamana ya kurudishia pesa'}</span>
            <span>✓ {language === 'en' ? 'Expert consultation' : 'Ushauri wa kitaalamu'}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TenderPricingSection;