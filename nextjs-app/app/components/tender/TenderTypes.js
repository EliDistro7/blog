'use client';
import React from 'react';
import { Check } from 'lucide-react';

const TenderTypesSection = ({ language, tenderTypes, selectedTenderType, setSelectedTenderType }) => {
  const data = tenderTypes[language];

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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Tender type buttons */}
          <div className="lg:col-span-1">
            <div className="space-y-4">
              {data.types.map((type, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedTenderType(index)}
                  className={`w-full text-left p-6 rounded-xl transition-all duration-300 ${
                    selectedTenderType === index
                      ? 'bg-gradient-to-r from-brand-primary to-brand-secondary text-white shadow-lg'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  <h3 className="text-lg font-bold mb-2">{type.name}</h3>
                  <p className="text-sm opacity-90">{type.description}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Selected tender type details */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-white mb-6">
                {data.types[selectedTenderType].name}
              </h3>
              <p className="text-gray-300 mb-8 text-lg">
                {data.types[selectedTenderType].description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.types[selectedTenderType].features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-gray-700">
                <button className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white px-6 py-3 rounded-lg hover:shadow-lg transition-shadow duration-300 font-semibold">
                  {language === 'en' ? 'Get Quote for This Type' : 'Pata Bei kwa Aina Hii'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TenderTypesSection;