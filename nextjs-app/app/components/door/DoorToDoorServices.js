'use client';

import React, { useState, useEffect } from 'react';
import { Calendar, Phone } from 'lucide-react';

import { useLanguage } from '@/context/LanguageContext';
import DoorToDoorHero from './DoorToDoorHero';
import DoorToDoorContent from './DoorToDoorContent';

const DoorToDoorServices = () => {
  const { language } = useLanguage();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const getLocalizedText = (textObj) => {
    if (!textObj) return '';
    return textObj[language] || textObj.en;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-gray-900">
      {/* Hero Section */}
      <DoorToDoorHero />

      {/* Main Content */}
      <DoorToDoorContent />

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-t from-gray-900 via-gray-900 to-gray-950">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-goldLight mb-6">
              {getLocalizedText({
                en: "Ready to Get Started?",
                sw: "Tayari Kuanza?"
              })}
            </h2>
            <p className="text-xl text-brand-gold mb-8">
              {getLocalizedText({
                en: "Transform your business with our proven door-to-door marketing strategies",
                sw: "Badilisha biashara yako kwa mikakati yetu ya uuzaji wa mlango hadi mlango iliyothibitishwa"
              })}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-brand-gold to-brand-goldLight text-gray-900 font-bold rounded-xl shadow-gold hover:shadow-2xl transition-all transform hover:scale-105 flex items-center justify-center gap-3">
                {getLocalizedText({
                  en: "Get Free Consultation",
                  sw: "Pata Ushauri wa Bure"
                })}
                <Calendar className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 bg-brand-gold/10 backdrop-blur-md text-brand-goldLight font-bold rounded-xl border border-brand-gold/40 hover:bg-brand-gold/20 transition-all flex items-center justify-center gap-3 shadow-gold">
                {getLocalizedText({
                  en: "Call Us Now",
                  sw: "Tupigie Simu Sasa"
                })}
                <Phone className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoorToDoorServices;