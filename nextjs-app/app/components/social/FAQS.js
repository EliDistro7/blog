// components/social/FAQSection.jsx
import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = ({ language, faqs, expandedFaq, toggleFaq }) => {
  return (
    <section className="py-20 px-4 bg-brand-dark">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            {language === 'en' ? 'Frequently Asked Questions' : 'Maswali Yanayoulizwa Mara kwa Mara'}
          </h2>
          <p className="text-brand-light text-lg max-w-2xl mx-auto">
            {language === 'en' 
              ? 'Get answers to common questions about our services'
              : 'Pata majibu ya maswali ya kawaida kuhusu huduma zetu'
            }
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 bg-brand-medium rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-brand-medium/80 transition-colors"
              >
                <h3 className="text-lg font-semibold text-white pr-4">{faq.question[language]}</h3>
                {expandedFaq === index ? (
                  <ChevronUp className="w-5 h-5 text-brand-gold flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-brand-gold flex-shrink-0" />
                )}
              </button>
              {expandedFaq === index && (
                <div className="px-8 pb-6">
                  <p className="text-brand-light leading-relaxed">{faq.answer[language]}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;