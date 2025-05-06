'use client';

import { useLanguage } from '@/context/LanguageContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Fade, Slide } from 'react-awesome-reveal';
import 'swiper/css';
import 'swiper/css/pagination';

const heroContent = {
  en: {
    titlePart1: "Elevate Your Brand with",
    titlePart2: "Future Holders",
    description: "From web design to event mastery—we deliver excellence across all platforms.",
    cta1: "Get a Free Quote",
    cta2: "Explore Services"
  },
  sw: {
    titlePart1: "Inua Brand Yako na",
    titlePart2: "Future Holders",
    description: "Kutoka kwa uundaji wa tovuti hadi uhodari wa hafla—tunatoa ubora katika majukwaa yote.",
    cta1: "Pata Bei",
    cta2: "Huduma zetu"
  }
};

const Particle = ({ index }) => {
  const colors = [
    'var(--color-brand-accent)',
    'var(--color-brand-coral)',
    'var(--color-brand-teal)',
    'var(--color-brand-gold)',
    'var(--color-brand-foam)'
  ];
  
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const size = Math.random() * 4 + 2; // Between 2-6px
  const duration = Math.random() * 5 + 5; // Between 5-10s
  const delay = Math.random() * 3;
  const direction = Math.random() > 0.5 ? 1 : -1;

  return (
    <div 
      className="absolute rounded-full animate-float"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        background: randomColor,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        opacity: Math.random() * 0.4 + 0.2,
        filter: 'blur(1px)',
        animation: `float ${duration}s ease-in-out infinite`,
        animationDelay: `${delay}s`,
        transform: `translateX(${direction * (Math.random() * 100)}px) scale(${Math.random() + 0.5})`
      }}
    />
  );
};

export default function HeroSection() {
  const { language } = useLanguage();

  return (
    <section className="relative flex items-center overflow-hidden">
      {/* Organic Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-deep/90 to-brand-teal/30">
        <div className="absolute inset-0 opacity-30 [background:radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-gold/20 via-transparent to-transparent" />
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(48)].map((_, i) => (
            <Particle key={i} index={i} />
          ))}
        </div>
      </div>

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        pagination={{ 
          clickable: true,
          bulletClass: 'swiper-pagination-bullet bg-brand-foam/50 hover:bg-brand-accent',
          bulletActiveClass: '!bg-brand-accent'
        }}
        loop={true}
        className="w-full relative z-10"
      >
        {[1, 2].map((slide) => (
          <SwiperSlide key={slide}>
            <div className="container mx-auto px-4 py-24">
              <div className="max-w-4xl mx-auto text-center">
                <Fade triggerOnce cascade damping={0.1}>
                  <h1 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight">
                    <span className="text-brand-foam block mb-4">
                      {heroContent[language].titlePart1}
                    </span>
                    <Slide triggerOnce direction="up" className="inline-block">
                      <span className="bg-gradient-to-r from-brand-accent to-brand-coral bg-clip-text text-transparent">
                        {heroContent[language].titlePart2}
                      </span>
                    </Slide>
                  </h1>

                  <p className="text-xl md:text-2xl text-brand-foam/90 max-w-2xl mx-auto mb-12 leading-relaxed">
                    <Fade triggerOnce delay={300}>
                      {heroContent[language].description}
                    </Fade>
                  </p>

                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Fade triggerOnce delay={400}>
                      <button className="px-8 py-4 bg-brand-accent hover:bg-brand-accent/90 rounded-full font-bold transition-all 
                        shadow-depth hover:shadow-xl text-brand-foam transform hover:-translate-y-1">
                        {heroContent[language].cta1}
                      </button>
                    </Fade>
                    <Fade triggerOnce delay={450}>
                      <button className="px-8 py-4 border-2 border-brand-foam/50 hover:border-brand-accent 
                        rounded-full font-bold transition-all text-brand-foam hover:text-brand-accent
                        backdrop-blur-sm hover:backdrop-blur-md">
                        {heroContent[language].cta2}
                      </button>
                    </Fade>
                  </div>
                </Fade>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Animated Blobs */}
      <div className="absolute -bottom-1/3 -right-1/4 w-[800px] h-[800px] bg-gradient-to-r from-brand-accent/20 to-brand-teal/20 
        rounded-full opacity-30 blur-3xl animate-blob" />
      <div className="absolute -top-1/4 -left-1/4 w-[600px] h-[600px] bg-gradient-to-r from-brand-coral/20 to-brand-gold/20 
        rounded-full opacity-30 blur-3xl animate-blob delay-2000" />
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="animate-bounce w-8 h-14 rounded-3xl border-2 border-brand-foam/50 flex items-center justify-center">
          <div className="w-2 h-2 bg-brand-foam/80 rounded-full animate-scroll-indicator" />
        </div>
      </div>
    </section>
  );
}