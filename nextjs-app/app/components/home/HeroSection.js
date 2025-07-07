'use client';

import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import { ChevronLeft, ChevronRight, Users, Smartphone, Globe, DoorOpen, Play, Pause } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const heroContent = {
  en: {
    companyName: "Future Holders",
    tagline: "Your Complete Marketing Solution",
    slides: [
      {
        title: "Door-to-Door Marketing",
        subtitle: "Personal Connection, Real Results",
        description: "Direct engagement with your target audience through personalized face-to-face interactions that build trust and drive conversions",
        icon: DoorOpen,
        gradient: "from-brand-accent via-brand-coral to-brand-teal",
        bgColor: "bg-gradient-to-br from-brand-accent/20 to-brand-teal/10",
        features: ["Personal Engagement", "Local Targeting", "Direct Feedback"]
      },
      {
        title: "Social Media Management",
        subtitle: "Amplify Your Digital Presence",
        description: "Strategic content creation and community management across all major platforms to grow your brand's online influence",
        icon: Smartphone,
        gradient: "from-brand-coral via-brand-gold to-brand-accent",
        bgColor: "bg-gradient-to-br from-brand-coral/20 to-brand-gold/10",
        features: ["Content Strategy", "Community Building", "Analytics & Insights"]
      },
      {
        title: "App Development",
        subtitle: "Mobile Solutions That Work",
        description: "Custom mobile applications designed to enhance customer experience and streamline your business operations",
        icon: Smartphone,
        gradient: "from-brand-teal via-brand-accent to-brand-coral",
        bgColor: "bg-gradient-to-br from-brand-teal/20 to-brand-accent/10",
        features: ["Custom Development", "User Experience", "Performance Optimization"]
      },
      {
        title: "Web Development",
        subtitle: "Digital Excellence Delivered",
        description: "Responsive, fast-loading websites that convert visitors into customers and establish your professional online presence",
        icon: Globe,
        gradient: "from-brand-gold via-brand-coral to-brand-teal",
        bgColor: "bg-gradient-to-br from-brand-gold/20 to-brand-coral/10",
        features: ["Responsive Design", "SEO Optimized", "E-commerce Ready"]
      }
    ],
    cta: "Get Started Today"
  },
  sw: {
    companyName: "Future Holders",
    tagline: "Suluhisho Lako Kamili la Uuzaji",
    slides: [
      {
        title: "Uuzaji Mlango kwa Mlango",
        subtitle: "Miunganiko ya Binafsi, Matokeo ya Kweli",
        description: "Ushirikiano wa moja kwa moja na walengwa wako kupitia mazungumzo ya ana kwa ana yanayojenga imani",
        icon: DoorOpen,
        gradient: "from-brand-accent via-brand-coral to-brand-teal",
        bgColor: "bg-gradient-to-br from-brand-accent/20 to-brand-teal/10",
        features: ["Ushirikiano wa Binafsi", "Lengo la Mtandaoni", "Maoni ya Moja kwa Moja"]
      },
      {
        title: "Usimamizi wa Mitandao ya Kijamii",
        subtitle: "Kuongeza Uwepo Wako wa Kidijitali",
        description: "Uundaji wa maudhui ya kimkakati na usimamizi wa jumuiya katika majukwaa yote makuu",
        icon: Smartphone,
        gradient: "from-brand-coral via-brand-gold to-brand-accent",
        bgColor: "bg-gradient-to-br from-brand-coral/20 to-brand-gold/10",
        features: ["Mkakati wa Maudhui", "Ujenzi wa Jumuiya", "Uchanganuzi na Maarifa"]
      },
      {
        title: "Uundaji wa Programu",
        subtitle: "Suluhisho za Rununu Zinazofanya Kazi",
        description: "Programu za rununu za kipekee zilizoundwa kuimarisha uzoefu wa mteja na kurahisisha shughuli za biashara",
        icon: Smartphone,
        gradient: "from-brand-teal via-brand-accent to-brand-coral",
        bgColor: "bg-gradient-to-br from-brand-teal/20 to-brand-accent/10",
        features: ["Uundaji wa Kipekee", "Uzoefu wa Mtumiaji", "Uboreshaji wa Utendaji"]
      },
      {
        title: "Uundaji wa Tovuti",
        subtitle: "Ubora wa Kidijitali Unaotolewa",
        description: "Tovuti zinazoweza kujibu, za kasi za kupakia ambazo zinabadilisha wageni kuwa wateja",
        icon: Globe,
        gradient: "from-brand-gold via-brand-coral to-brand-teal",
        bgColor: "bg-gradient-to-br from-brand-gold/20 to-brand-coral/10",
        features: ["Muundo wa Mwitikio", "Imeboreshwa kwa SEO", "Tayari kwa Biashara"]
      }
    ],
    cta: "Anza Leo"
  }
};

// Floating particle component
const Particle = ({ index }) => {
  const size = Math.random() * 3 + 1;
  
  return (
    <div 
      className="absolute rounded-full pointer-events-none"
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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const swiperRef = useRef(null);
  
  const content = heroContent[language];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleAutoplay = () => {
    if (swiperRef.current) {
      if (isPlaying) {
        swiperRef.current.autoplay.stop();
      } else {
        swiperRef.current.autoplay.start();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const goToSlide = (index) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-deep to-brand-medium/90">
        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(40)].map((_, i) => (
            <Particle key={i} index={i} />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full h-full">
        <Swiper
          ref={swiperRef}
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          spaceBetween={0}
          slidesPerView={1}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            renderBullet: (index, className) => {
              return `<span class="${className} !bg-brand-foam/50 !w-3 !h-3 hover:!bg-brand-accent transition-colors"></span>`;
            },
          }}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
          className="h-full"
        >
          {content.slides.map((slide, index) => {
            const IconComponent = slide.icon;
            return (
              <SwiperSlide key={index} className="h-full">
                <div className="relative h-full flex items-center justify-center">
                  {/* Slide Background */}
                  <div className={`absolute inset-0 ${slide.bgColor}`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/80 via-brand-deep/60 to-brand-medium/40" />
                  </div>

                  {/* Content Container */}
                  <div className="container mx-auto px-6 z-10 text-center">
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      animate={isMounted ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="max-w-6xl mx-auto"
                    >
                      {/* Company Name */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isMounted ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="mb-4"
                      >
                        <h2 className="text-xl md:text-2xl font-bold text-brand-gold mb-2">
                          {content.companyName}
                        </h2>
                        <p className="text-sm md:text-base text-brand-foam/80 font-medium">
                          {content.tagline}
                        </p>
                      </motion.div>

                      {/* Service Icon */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={isMounted ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="mb-6"
                      >
                        <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r ${slide.gradient} shadow-glow`}>
                          <IconComponent className="w-10 h-10 text-white" />
                        </div>
                      </motion.div>

                      {/* Service Title */}
                      <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={isMounted ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight"
                      >
                        <span className={`bg-gradient-to-r ${slide.gradient} bg-clip-text text-transparent`}>
                          {slide.title}
                        </span>
                      </motion.h1>

                      {/* Subtitle */}
                      <motion.h3
                        initial={{ opacity: 0 }}
                        animate={isMounted ? { opacity: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="text-xl md:text-2xl text-brand-foam/90 font-medium mb-6"
                      >
                        {slide.subtitle}
                      </motion.h3>

                      {/* Description */}
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={isMounted ? { opacity: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-lg md:text-xl text-brand-foam/80 max-w-3xl mx-auto mb-8"
                      >
                        {slide.description}
                      </motion.p>

                      {/* Features */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isMounted ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        className="flex flex-wrap justify-center gap-4 mb-10"
                      >
                        {slide.features.map((feature, idx) => (
                          <div key={idx} className="px-4 py-2 bg-brand-foam/10 backdrop-blur-sm rounded-full border border-brand-foam/20">
                            <span className="text-brand-foam/90 font-medium">{feature}</span>
                          </div>
                        ))}
                      </motion.div>

                      {/* CTA Button */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isMounted ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.8 }}
                      >
                        <button className={`px-8 py-4 bg-gradient-to-r ${slide.gradient} hover:shadow-glow rounded-full font-bold text-white shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 duration-300`}>
                          {content.cta}
                        </button>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Custom Navigation */}
        <div className="absolute top-1/2 left-4 z-20 transform -translate-y-1/2">
          <button className="swiper-button-prev-custom w-12 h-12 bg-brand-foam/10 backdrop-blur-sm rounded-full border border-brand-foam/20 flex items-center justify-center hover:bg-brand-foam/20 transition-colors">
            <ChevronLeft className="w-6 h-6 text-brand-foam" />
          </button>
        </div>
        
        <div className="absolute top-1/2 right-4 z-20 transform -translate-y-1/2">
          <button className="swiper-button-next-custom w-12 h-12 bg-brand-foam/10 backdrop-blur-sm rounded-full border border-brand-foam/20 flex items-center justify-center hover:bg-brand-foam/20 transition-colors">
            <ChevronRight className="w-6 h-6 text-brand-foam" />
          </button>
        </div>

        {/* Slide Counter & Controls */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex items-center gap-6">
          {/* Slide indicators */}
          <div className="flex gap-2">
            {content.slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentSlide === index ? 'bg-brand-accent scale-125' : 'bg-brand-foam/30 hover:bg-brand-foam/50'
                }`}
              />
            ))}
          </div>

          {/* Play/Pause */}
          <button
            onClick={toggleAutoplay}
            className="w-10 h-10 bg-brand-foam/10 backdrop-blur-sm rounded-full border border-brand-foam/20 flex items-center justify-center hover:bg-brand-foam/20 transition-colors"
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 text-brand-foam" />
            ) : (
              <Play className="w-5 h-5 text-brand-foam ml-0.5" />
            )}
          </button>

          {/* Slide counter */}
          <div className="text-brand-foam/70 text-sm font-medium">
            {String(currentSlide + 1).padStart(2, '0')} / {String(content.slides.length).padStart(2, '0')}
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-brand-dark to-transparent pointer-events-none" />
      
      <style jsx global>{`
        .swiper-pagination {
          bottom: 60px !important;
        }
        
        .swiper-pagination-bullet {
          margin: 0 6px !important;
        }
        
        .swiper-pagination-bullet-active {
          background: #6366F1 !important;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </section>
  );
}