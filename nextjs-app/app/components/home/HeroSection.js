'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';

const heroContent = {
  en: {
    titlePart1: "Transform",
    titlePart2: "Your Vision",
    subtitle: "With Future Holders",
    description: "Blending technology & hospitality for complete business solutions",
    cta: "Get Started"
  },
  sw: {
    titlePart1: "Badilisha",
    titlePart2: "Maono Yako",
    subtitle: "Na Future Holders",
    description: "Kuunganisha teknolojia na ukarimu kwa ajili ya ufumbuzi kamili wa biashara",
    cta: "Anza Sasa"
  }
};

// Floating particle component
const Particle = ({ index }) => {
  const size = Math.random() * 3 + 1; // Smaller particles: 1-4px
  
  return (
    <div 
      className="absolute rounded-full"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        background: index % 5 === 0 ? '#6366F1' : 
                   index % 4 === 0 ? '#F97316' : 
                   index % 3 === 0 ? '#0D9488' : 
                   index % 2 === 0 ? '#E2E8F0' : '#D4AF37',
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        opacity: Math.random() * 0.3 + 0.1,
        filter: 'blur(1px)',
        animation: `float ${Math.random() * 10 + 15}s ease-in-out infinite`,
        animationDelay: `${Math.random() * 5}s`
      }}
    />
  );
};

export default function Hero() {
  const { language } = useLanguage();
  const [isMounted, setIsMounted] = useState(false);
  
  // Handle mounting animation
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="relative  flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-deep to-brand-medium/90">
        {/* Glow effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_var(--tw-gradient-stops))] from-brand-accent/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_var(--tw-gradient-stops))] from-brand-gold/15 via-transparent to-transparent" />
        
        {/* Particles background */}
        <div className="absolute inset-0">
          {[...Array(60)].map((_, i) => (
            <Particle key={i} index={i} />
          ))}
        </div>
      </div>

      {/* Content container */}
      <div className="container mx-auto px-6 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isMounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* Title with gradient background */}
          <div className="inline-block mb-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={isMounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl font-medium mb-2 text-brand-foam/80"
            >
              {heroContent[language].subtitle}
            </motion.h2>
          </div>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isMounted ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="text-brand-foam block">
              {heroContent[language].titlePart1}
            </span>
            <span className="bg-gradient-to-r from-brand-accent via-brand-gold to-brand-coral bg-clip-text text-transparent">
              {heroContent[language].titlePart2}
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={isMounted ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xl md:text-2xl text-brand-foam/80 max-w-2xl mx-auto mb-10"
          >
            {heroContent[language].description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isMounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <button className="px-8 py-4 bg-gradient-to-r from-brand-accent to-brand-coral hover:from-brand-coral hover:to-brand-accent 
              rounded-full font-bold text-white shadow-glow hover:shadow-gold transition-all transform hover:-translate-y-1 duration-300">
              {heroContent[language].cta}
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-brand-dark to-transparent pointer-events-none" />
      
      {/* Animated shape */}
      <div className="absolute -bottom-64 -right-64 w-96 h-96 md:w-[40rem] md:h-[40rem] bg-gradient-to-r from-brand-accent/20 to-brand-teal/10 
        rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDuration: '15s' }} />
      
      <div className="absolute -top-64 -left-64 w-96 h-96 md:w-[30rem] md:h-[30rem] bg-gradient-to-r from-brand-gold/20 to-brand-coral/10 
        rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDuration: '20s', animationDelay: '2s' }} />

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <div className="w-8 h-12 rounded-full border-2 border-brand-foam/30 flex justify-center p-2">
          <div className="w-1 h-3 bg-brand-foam/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}