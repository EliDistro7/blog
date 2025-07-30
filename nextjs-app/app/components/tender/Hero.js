// @/app/components/tender/Hero.jsx

import React from 'react';
import { ArrowRight, TrendingUp, Users, Award, Clock } from 'lucide-react';

const TenderHeroSection = ({ language, heroStats }) => {
  const content = heroStats[language];

  const iconMap = {
    0: TrendingUp,
    1: Award, 
    2: Users,
    3: Clock
  };

  return (
    <section className="relative bg-gradient-to-br from-brand-dark via-brand-primary to-brand-secondary min-h-screen flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-accent rounded-full mix-blend-overlay filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white to-brand-accent bg-clip-text text-transparent">
                  {content.title.split(' ').slice(0, 2).join(' ')}
                </span>
                <br />
                <span className="text-white">
                  {content.title.split(' ').slice(2).join(' ')}
                </span>
              </h1>
              
              <h2 className="text-xl lg:text-2xl text-brand-accent font-medium">
                {content.subtitle}
              </h2>
              
              <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
                {content.description}
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group relative bg-gradient-to-r from-brand-accent to-brand-secondary hover:from-brand-secondary hover:to-brand-accent text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                <span className="flex items-center justify-center gap-3">
                  {content.cta}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300"></div>
              </button>
              
              <button className="border-2 border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-white/10">
                {language === 'en' ? 'View Portfolio' : 'Ona Kazi Zetu'}
              </button>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="grid grid-cols-2 gap-6">
            {content.stats.map((stat, index) => {
              const IconComponent = iconMap[index];
              return (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-4 bg-gradient-to-br from-brand-accent to-brand-secondary rounded-2xl group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                        {stat.number}
                      </div>
                      <div className="text-gray-300 font-medium">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Animated Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TenderHeroSection;