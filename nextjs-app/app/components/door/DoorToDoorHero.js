'use client';

import React, { useState, useEffect } from 'react';
import { 
  DoorOpen, 
  Calendar,
  Phone
} from 'lucide-react';

import { heroStats } from '@/app/components/door/data';
import { useLanguage } from '@/context/LanguageContext';

const DoorToDoorHero = () => {
  const { language } = useLanguage();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getLocalizedText = (textObj) => {
    if (!textObj) return '';
    return textObj[language] || textObj.en;
  };

  return (
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
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/60 via-gray-900/60 to-gray-600/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-gold/10 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8 animate-float">
            <div className="p-6 bg-gradient-to-r from-brand-gold to-brand-goldLight rounded-2xl shadow-gold">
              <DoorOpen className="w-16 h-16 text-white" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-brand-goldLight mb-6 drop-shadow-2xl">
            {getLocalizedText({
              en: "Door-to-Door Marketing",
              sw: "Uuzaji Door to Door"
            })}
          </h1>

          <p className="text-xl md:text-2xl text-brand-gold mb-8 drop-shadow-lg">
            {getLocalizedText({
              en: "Personal Connection, Real Results",
              sw: "Miunganiko ya Binafsi, Matokeo ya Kweli"
            })}
          </p>

          <p className="text-lg text-brand-goldLight/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            {getLocalizedText({
              en: "Transform your business with our professional door-to-door marketing services. We create meaningful connections that drive real results and lasting customer relationships.",
              sw: "Badilisha biashara yako kwa huduma zetu za kitaalamu za uuzaji wa mlango hadi mlango. Tunaunda miunganiko yenye maana inayosukuma matokeo halisi na mahusiano ya kudumu ya wateja."
            })}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="px-8 py-4 bg-gradient-to-r from-brand-gold to-brand-goldLight text-gray-900 font-bold rounded-xl shadow-gold hover:shadow-2xl transition-all transform hover:scale-105">
              {getLocalizedText({
                en: "Start Your Campaign",
                sw: "Anza Kampeni Yako"
              })}
            </button>
            <button className="px-8 py-4 bg-brand-gold/10 backdrop-blur-md text-brand-goldLight font-bold rounded-xl border border-brand-gold/40 hover:bg-brand-gold/20 transition-all shadow-gold">
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
                <div className="text-3xl md:text-4xl font-bold text-brand-goldLight mb-2">
                  {stat.number}
                </div>
                <div className="text-brand-gold text-sm md:text-base">
                  {getLocalizedText(stat.label)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoorToDoorHero;