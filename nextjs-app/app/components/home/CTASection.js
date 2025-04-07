'use client';

import Link from "next/link";
import { useLanguage } from '@/context/LanguageContext';

export default function CTASection() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Ready to Transform Your Vision?",
      description: "Whether it's a website, event, or social media strategy—we've got you covered.",
      button: "Contact Us Today"
    },
    sw: {
      title: "Tayari Kubadilisha Maono Yako?",
      description: "Iwe ni tovuti, hafla, au mkakati wa mitandao ya kijamii—tunakusudia.",
      button: "Wasiliana Nasi Leo"
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-dark/95 to-brand-deep/95">
      {/* Dynamic Gradient Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-blue/10 via-brand-dark/0 to-brand-dark/0"></div>
      <div className="absolute -left-20 -top-20 w-72 h-72 rounded-full bg-gradient-to-br from-brand-blue/15 to-brand-accent/20 blur-3xl animate-float"></div>
      <div className="absolute -right-20 -bottom-20 w-72 h-72 rounded-full bg-gradient-to-br from-brand-gold/15 to-brand-coral/20 blur-3xl animate-float animation-delay-2000"></div>

      <div className="container mx-auto py-20 md:py-28 px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Gradient Text Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-brand-foam via-brand-foam to-brand-blue/90 bg-clip-text text-transparent text-shadow-lg">
            {content[language].title}
          </h2>
          
          <p className="max-w-2xl mx-auto mb-10 text-brand-foam/80 text-lg md:text-xl">
            {content[language].description}
          </p>
          
          {/* Modern CTA Button */}
          <Link 
            href="/contact" 
            className="relative inline-flex items-center justify-center px-10 py-4 md:px-14 md:py-5 overflow-hidden font-bold rounded-full group transition-all duration-300 shadow-depth hover:shadow-glow"
          >
            {/* Animated Gradient Background */}
            <span className="absolute inset-0 bg-gradient-to-r from-brand-blue via-brand-accent to-brand-blue/90 opacity-90 group-hover:bg-gradient-to-br group-hover:from-brand-accent group-hover:via-brand-blue group-hover:to-brand-teal transition-all duration-500 animate-gradient-x"></span>
            
            {/* Shine Effect */}
            <span className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            
            {/* Button Content */}
            <span className="relative z-10 flex items-center text-lg md:text-xl tracking-wide text-white">
              {content[language].button}
              <span className="ml-3 inline-block transition-transform group-hover:translate-x-1 group-hover:scale-110">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14m-4 4l4-4m-4-4l4 4"/>
                </svg>
              </span>
            </span>
            
            {/* Border Pulse */}
            <span className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-white/30 transition-all duration-500"></span>
          </Link>
        </div>
      </div>
    </section>
  );
}