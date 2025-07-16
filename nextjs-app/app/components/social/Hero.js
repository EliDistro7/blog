// components/social/HeroSection.jsx
import React from 'react';
import { Crown } from 'lucide-react';

const HeroSection = ({ language, heroStats }) => {
  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-brand-dark via-brand-deep to-brand-medium overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-gold/5 to-brand-coral/5"></div>
      <div className="container mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-brand-gold/10 border border-brand-gold/20 rounded-full px-6 py-2 mb-6">
          <Crown className="w-5 h-5 text-brand-gold" />
          <span className="text-brand-gold font-medium">
            {language === 'en' ? 'Premium Social Media Services' : 'Huduma za Mitandao ya Kijamii za Hali ya Juu'}
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-brand-goldLight to-brand-gold bg-clip-text text-transparent">
          {language === 'en' ? 'Transform Your' : 'Badilisha'} <br />
          {language === 'en' ? 'Social Presence' : 'Uongozi Wako wa Kijamii'}
        </h1>
        
        <p className="text-xl md:text-2xl text-brand-light mb-8 max-w-3xl mx-auto">
          {language === 'en' 
            ? 'Elevate your brand with professional social media management, stunning content creation, and data-driven strategies that deliver results.'
            : 'Inua brand yako na uongozi wa kitaalamu wa mitandao ya kijamii, uundaji wa maudhui ya kupendeza, na mikakati ya data inayotoa matokeo.'
          }
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="bg-brand-gold hover:bg-brand-goldDark text-brand-dark px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-gold">
            {language === 'en' ? 'Get Started Today' : 'Anza Leo'}
          </button>
          <button className="border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-dark px-8 py-4 rounded-lg font-semibold transition-all">
            {language === 'en' ? 'View Our Work' : 'Ona Kazi Yetu'}
          </button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {heroStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-brand-gold mb-2">{stat.number}</div>
              <div className="text-brand-light text-sm">{stat.label[language]}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;