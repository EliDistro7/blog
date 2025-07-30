'use client';
import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const TenderFAQSection = ({ language, faqs, expandedFaq, toggleFaq }) => {
  const data = faqs[language];

  return (
    <section className="py-20 bg-brand-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {data.title}
          </h2>
        </div>

        <div className="space-y-4">
          {data.faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-700 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {expandedFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-brand-primary" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </button>
              
              {expandedFaq === index && (
                <div className="px-6 pb-6">
                  <div className="pt-4 border-t border-gray-700">
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <div className="bg-gray-800 p-8 rounded-xl">
            <h3 className="text-xl font-bold text-white mb-4">
              {language === 'en' ? 'Still have questions?' : 'Bado una maswali?'}
            </h3>
            <p className="text-gray-300 mb-6">
              {language === 'en' 
                ? 'Our tender experts are here to help you understand the process and answer any specific questions about your tender requirements.'
                : 'Wataalamu wetu wa zabuni wako hapa kukusaidia kuelewa mchakato na kujibu maswali yoyote maalum kuhusu mahitaji yako ya zabuni.'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white px-6 py-3 rounded-lg hover:shadow-lg transition-shadow duration-300 font-semibold">
                {language === 'en' ? 'Schedule Consultation' : 'Ratiba Shauri'}
              </button>
              <button className="bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors duration-300 font-semibold">
                {language === 'en' ? 'Contact Support' : 'Wasiliana na Msaada'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TenderFAQSection;