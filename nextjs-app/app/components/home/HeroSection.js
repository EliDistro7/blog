'use client';

import { useLanguage } from '@/context/LanguageContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
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
    cta2: "Gundua Huduma"
  }
};

export default function HeroSection() {
  const { language } = useLanguage();

  return (
    <section className="relative bg-gradient-to-br from-brand-dark to-brand-deep text-white py-20 px-4">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        loop={true}
        className="container mx-auto"
      >
        <SwiperSlide>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {heroContent[language].titlePart1} <span className="text-brand-accent">{heroContent[language].titlePart2}</span>
            </h1>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              {heroContent[language].description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-brand-accent hover:bg-brand-accent/90 rounded-full font-bold transition-colors shadow-depth">
                {heroContent[language].cta1}
              </button>
              <button className="px-6 py-3 border-2 border-white hover:bg-white/10 rounded-full font-bold transition-colors">
                {heroContent[language].cta2}
              </button>
            </div>
          </div>
        </SwiperSlide>
        
        {/* Add more slides as needed */}
        <SwiperSlide>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {language === 'en' ? "Innovative Solutions for" : "Solutions za Ubunifu kwa"} <span className="text-brand-accent">{language === 'en' ? "Your Business" : "Biashara Yako"}</span>
            </h1>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              {language === 'en' 
                ? "Cutting-edge technology tailored to your specific needs" 
                : "Teknolojia ya kisasa iliyobinafsishwa kwa mahitaji yako maalum"}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-brand-accent hover:bg-brand-accent/90 rounded-full font-bold transition-colors shadow-depth">
                {language === 'en' ? "Learn More" : "Jifunze Zaidi"}
              </button>
              <button className="px-6 py-3 border-2 border-white hover:bg-white/10 rounded-full font-bold transition-colors">
                {language === 'en' ? "Our Portfolio" : "Portfolio Yetu"}
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-brand-foam clip-path-wave"></div>
    </section>
  );
}