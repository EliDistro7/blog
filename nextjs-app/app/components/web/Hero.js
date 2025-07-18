import React from 'react';
import { Calendar, Code, Globe } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-brand-dark via-brand-deep to-brand-medium">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-accent/10 to-brand-coral/10"></div>
      <div className="relative container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-brand-accent/20 backdrop-blur-sm px-4 py-2 rounded-full text-brand-accent font-semibold mb-6">
            <Code className="w-5 h-5" />
            Professional Web Development
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Build Your
            <span className="block bg-gradient-to-r from-brand-accent to-brand-coral bg-clip-text text-transparent">
              Digital Presence
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            From stunning websites to powerful web applications, we create digital solutions that drive results and grow your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-brand-accent to-brand-coral text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 flex items-center justify-center gap-3">
              View Our Portfolio
              <Globe className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 transition-all flex items-center justify-center gap-3">
              Get Quote
              <Calendar className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;