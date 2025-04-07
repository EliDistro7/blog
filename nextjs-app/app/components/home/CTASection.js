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
    <section className="relative overflow-hidden">
      {/* Vibrant Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 via-brand-accent/10 to-brand-teal/5 -z-10"></div>
      
      {/* Dynamic Gradient Elements */}
      <div className="absolute -left-20 -top-20 w-64 h-64 rounded-full bg-gradient-to-r from-brand-blue/20 to-brand-accent/30 blur-3xl animate-float"></div>
      <div className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full bg-gradient-to-r from-brand-gold/20 to-brand-coral/30 blur-3xl animate-float animation-delay-2000"></div>

      <div className="container mx-auto py-20 md:py-24 px-4 text-center relative z-10">
        <div className="bg-white/90 backdrop-blur-sm p-8 md:p-10 rounded-2xl shadow-xl">
          {/* Gradient Text Title */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-brand-blue to-brand-accent bg-clip-text text-transparent">
            {content[language].title}
          </h2>
          
          <p className="max-w-2xl mx-auto mb-8 text-brand-dark/80 text-lg md:text-xl">
            {content[language].description}
          </p>
          
          {/* Modern CTA Button */}
          <Link 
            href="/contact" 
            className="relative inline-flex items-center justify-center px-12 py-5 md:px-14 md:py-6 overflow-hidden font-bold text-white rounded-full group"
          >
            {/* Animated Gradient Background */}
            <span className="absolute inset-0 bg-gradient-to-r from-brand-blue via-brand-accent to-brand-teal group-hover:from-brand-accent group-hover:via-brand-blue group-hover:to-brand-teal transition-all duration-500 bg-[length:200%_auto] animate-gradient-x"></span>
            
            {/* Shine Effect */}
            <span className="absolute top-0 left-0 w-full h-full bg-white/10 group-hover:bg-white/0 transition-all duration-300"></span>
            
            {/* Button Content */}
            <span className="relative z-10 flex items-center text-lg md:text-xl tracking-wide">
              {content[language].button}
              <span className="ml-3 inline-block transition-transform group-hover:translate-x-1 group-hover:scale-110">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </span>
            
            {/* Pulse Animation */}
            <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse group-hover:border-2 group-hover:border-white/30 transition-all duration-300"></span>
          </Link>
        </div>
      </div>
    </section>
  );
}