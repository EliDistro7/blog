'use client';

import React from 'react';
import { services, process } from '@/app/components/door/data';
import { useLanguage } from '@/context/LanguageContext';

const ServicesAndProcess = () => {
  const { language } = useLanguage();

  const getLocalizedText = (textObj) => {
    if (!textObj) return '';
    return textObj[language] || textObj.en;
  };

  return (
    <>
      {/* Services Section */}
      <div className="py-20 bg-gray-900/80 backdrop-blur-md">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-goldLight mb-6">
              {getLocalizedText({
                en: "Our Services",
                sw: "Huduma Zetu"
              })}
            </h2>
            <p className="text-xl text-brand-gold max-w-2xl mx-auto">
              {getLocalizedText({
                en: "Comprehensive door-to-door marketing solutions tailored to your business needs",
                sw: "Suluhisho kamili za uuzaji wa mlango hadi mlango zilizokabidhiwa mahitaji ya biashara yako"
              })}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 border border-brand-gold/30 hover:border-brand-gold/60 transition-all transform hover:scale-[1.02] shadow-layer">
                  <div className="mb-6">
                    <div className="p-4 bg-gradient-to-r from-brand-gold to-brand-goldLight rounded-xl inline-block shadow-gold">
                      <IconComponent className="w-8 h-8 text-gray-900" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-brand-goldLight mb-4">
                    {getLocalizedText(service.title)}
                  </h3>
                  <p className="text-brand-gold/80 leading-relaxed">
                    {getLocalizedText(service.description)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-20 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-goldLight mb-6">
              {getLocalizedText({
                en: "Our Process",
                sw: "Mchakato Wetu"
              })}
            </h2>
            <p className="text-xl text-brand-gold max-w-2xl mx-auto">
              {getLocalizedText({
                en: "A proven 4-step process that delivers consistent results",
                sw: "Mchakato wa hatua 4 uliothitishtwa unaotoa matokeo thabiti"
              })}
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Process Steps */}
              <div className="space-y-8">
                {process.map((step, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-brand-gold to-brand-goldLight rounded-full flex items-center justify-center text-gray-900 font-bold text-xl shadow-gold">
                      {step.step}
                    </div>
                    <div className="ml-6 flex-1">
                      <h3 className="text-xl font-bold text-brand-goldLight mb-3">
                        {getLocalizedText(step.title)}
                      </h3>
                      <p className="text-brand-gold/80 leading-relaxed">
                        {getLocalizedText(step.description)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Image */}
              <div className="lg:order-last">
                <div className="relative">
                  <img 
                    src="/images/door.jpeg" 
                    alt="Door-to-door marketing process"
                    className="w-full h-auto rounded-2xl shadow-2xl border border-brand-gold/30"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent rounded-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesAndProcess;