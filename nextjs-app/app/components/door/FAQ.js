'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { faqs } from '@/app/components/door/data';
import { useLanguage } from '@/context/LanguageContext';

const FAQ = () => {
  const { language } = useLanguage();
  const [expandedFaq, setExpandedFaq] = useState(null);

  const getLocalizedText = (textObj) => {
    if (!textObj) return '';
    return textObj[language] || textObj.en;
  };

  return (
    <div className="py-20 bg-gray-900/80 backdrop-blur-md">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-goldLight mb-6">
            {getLocalizedText({
              en: "Frequently Asked Questions",
              sw: "Maswali Yanayoulizwa Mara kwa Mara"
            })}
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-6">
              <button
                className="w-full bg-gray-800/50 backdrop-blur-md rounded-xl p-6 border border-brand-gold/30 flex items-center justify-between hover:bg-brand-gold/10 transition-all shadow-layer"
                onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
              >
                <span className="text-brand-goldLight font-semibold text-left">
                  {getLocalizedText(faq.question)}
                </span>
                {expandedFaq === index ? (
                  <ChevronUp className="w-5 h-5 text-brand-gold" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-brand-gold" />
                )}
              </button>
              
              {expandedFaq === index && (
                <div className="mt-4 bg-gray-800/30 backdrop-blur-md rounded-xl p-6 border border-brand-gold/20">
                  <p className="text-brand-gold/80 leading-relaxed">
                    {getLocalizedText(faq.answer)}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;