'use client';
import React from 'react';
import { ArrowRight } from 'lucide-react';

const TenderProcessSection = ({ language, process }) => {
  const data = process[language];

  return (
    <section className="py-20 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {data.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {data.subtitle}
          </p>
        </div>

        <div className="relative">
          {/* Process timeline for desktop */}
          <div className="hidden lg:block">
            <div className="flex items-center justify-between relative">
              {/* Timeline line */}
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-primary to-brand-secondary transform -translate-y-1/2"></div>
              
              {data.steps.map((step, index) => (
                <div key={index} className="relative z-10 flex flex-col items-center w-64">
                  {/* Step circle */}
                  <div className="w-16 h-16 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full flex items-center justify-center text-white font-bold text-lg mb-6">
                    {step.step}
                  </div>
                  
                  {/* Step content */}
                  <div className="text-center bg-gray-800 p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Process steps for mobile/tablet */}
          <div className="lg:hidden space-y-8">
            {data.steps.map((step, index) => (
              <div key={index} className="flex items-start gap-6">
                {/* Step circle */}
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full flex items-center justify-center text-white font-bold">
                  {step.step}
                </div>
                
                {/* Step content */}
                <div className="flex-1 bg-gray-800 p-6 rounded-xl">
                  <h3 className="text-lg font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white px-8 py-3 rounded-lg hover:shadow-lg transition-shadow duration-300 font-semibold flex items-center gap-2 mx-auto">
            {language === 'en' ? 'Start Your Tender' : 'Anza Zabuni Yako'}
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TenderProcessSection;