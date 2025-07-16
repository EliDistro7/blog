// components/social/PlatformsSection.jsx
import React from 'react';
import { CheckCircle } from 'lucide-react';

const PlatformsSection = ({ language, platforms }) => {
  return (
    <section className="py-20 px-4 bg-brand-deep">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            {language === 'en' ? 'Platforms We Master' : 'Mitandao Tunayoshinda'}
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            {language === 'en' 
              ? 'Expert management across all major social media platforms'
              : 'Uongozi wa mtaalamu katika mitandao yote mikuu ya kijamii'
            }
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {platforms.map((platform, index) => {
            const Icon = platform.icon;
            return (
              <div key={index} className="bg-brand-medium hover:bg-brand-medium/80 p-8 rounded-xl transition-all duration-300 hover:transform hover:scale-105 border border-brand-gold/10 hover:border-brand-gold/30">
                <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-6 ${platform.color}`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">{platform.name}</h3>
                <ul className="space-y-2">
                  {platform.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-brand-light">
                      <CheckCircle className="w-4 h-4 text-brand-gold mr-2 flex-shrink-0" />
                      {feature[language]}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PlatformsSection;