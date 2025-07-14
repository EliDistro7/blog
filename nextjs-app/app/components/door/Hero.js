'use client';

import React, { useState, useEffect } from 'react';
import { DoorOpen } from 'lucide-react';

const HeroSection = ({ language, setLanguage }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const heroStats = [
    {
      number: "95%",
      label: { en: "Success Rate", sw: "Kiwango cha Mafanikio" }
    },
    {
      number: "10K+",
      label: { en: "Doors Reached", sw: "Milango Yaliyofikiwa" }
    },
    {
      number: "500+",
      label: { en: "Happy Clients", sw: "Wateja Wenye Furaha" }
    },
    {
      number: "24/7",
      label: { en: "Support", sw: "Msaada" }
    }
  ];

  const getLocalizedText = (textObj) => {
    if (!textObj) return '';
    return textObj[language] || textObj.en;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-gray-900">
      {/* Language Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setLanguage(language === 'en' ? 'sw' : 'en')}
          className="px-4 py-2 bg-yellow-500/20 backdrop-blur-md rounded-lg border border-yellow-500/40 text-yellow-300 hover:bg-yellow-500/30 transition-all shadow-lg"
        >
          {language === 'en' ? 'Kiswahili' : 'English'}
        </button>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
              transform: `scale(1.05) translateY(${scrollY * 0.2}px)`,
              filter: 'brightness(0.3) contrast(1.1)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/80 to-gray-900/90" />
          <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/10 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="p-6 bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-2xl shadow-2xl shadow-yellow-500/20">
                <DoorOpen className="w-16 h-16 text-gray-900" />
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-yellow-300 mb-6 drop-shadow-2xl">
              {getLocalizedText({
                en: "Door-to-Door Marketing",
                sw: "Uuzaji Door to Door"
              })}
            </h1>

            <p className="text-xl md:text-2xl text-yellow-500 mb-8 drop-shadow-lg">
              {getLocalizedText({
                en: "Personal Connection, Real Results",
                sw: "Miunganiko ya Binafsi, Matokeo ya Kweli"
              })}
            </p>

            <p className="text-lg text-yellow-300/80 mb-12 max-w-2xl mx-auto leading-relaxed">
              {getLocalizedText({
                en: "Transform your business with our professional door-to-door marketing services. We create meaningful connections that drive real results and lasting customer relationships.",
                sw: "Badilisha biashara yako kwa huduma zetu za kitaalamu za uuzaji wa mlango hadi mlango. Tunaunda miunganiko yenye maana inayosukuma matokeo halisi na mahusiano ya kudumu ya wateja."
              })}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-400 text-gray-900 font-bold rounded-xl shadow-2xl shadow-yellow-500/20 hover:shadow-yellow-500/40 transition-all transform hover:scale-105">
                {getLocalizedText({
                  en: "Start Your Campaign",
                  sw: "Anza Kampeni Yako"
                })}
              </button>
              <button className="px-8 py-4 bg-yellow-500/10 backdrop-blur-md text-yellow-300 font-bold rounded-xl border border-yellow-500/40 hover:bg-yellow-500/20 transition-all shadow-lg">
                {getLocalizedText({
                  en: "Schedule Consultation",
                  sw: "Panga Ushauri"
                })}
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {heroStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-yellow-500 text-sm md:text-base">
                    {getLocalizedText(stat.label)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;