'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { Libre_Baskerville, Source_Sans_3 as Source_Sans_Pro } from 'next/font/google';
import { Star, Quote } from 'lucide-react';

// Define your custom fonts
const baskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-baskerville'
});

const sourceSans = Source_Sans_Pro({
  subsets: ['latin'],
  weight: ['600', '700', '900'],
  variable: '--font-source-sans'
});

export default function TestimonialCarousel() {
  const { language } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    { 
      quote: {
        en: "Future Holders built our website in just 10 days—absolutely flawless execution and stunning design. Their team's attention to detail made our brand shine online.",
        sw: "Future Holders walijenga tovuti yetu kwa siku 10 pekee—utekelezaji bila hitilafu yoyote na muundo wa kuvutia. Umakini wa timu yao kwa maelezo ulifanya chapa yetu ing'ae mtandaoni."
      },
      author: {
        en: "Salila Mohammed",
        sw: "Salila Mohammed"
      },
      title: {
        en: "Executive Director & Founder",
        sw: "Mkurugenzi Mkuu na Mwanzilishi"
      },
      company: {
        en: "Amka Kijana Organisation",
        sw: "Shirika la Amka Kijana"
      },
      image: "/images/amka.jpeg",
      rating: 5
    },
    { 
      quote: {
        en: "Their catering team made our wedding absolutely unforgettable. The presentation was magazine-worthy, and every guest raved about the cuisine. Pure elegance from start to finish.",
        sw: "Timu yao ya upishi ilifanya harusi yetu kuwa isiyo sahaulika kabisa. Uwasilishaji ulikuwa wa kiwango cha jarida, na kila mgeni alisifu mapishi. Uzuri wa hali ya juu kutoka mwanzo hadi mwisho."
      },
      author: {
        en: "David Lumumba",
        sw: "David Lumumba"
      },
      title: {
        en: "Entrepreneur",
        sw: "Mjasiriamali"
      },
      company: {
        en: "Lumumba Ventures",
        sw: "Lumumba Ventures"
      },
      image: "/api/placeholder/100/100",
      rating: 5
    },
    { 
      quote: {
        en: "Our social media engagement doubled in just one month after partnering with Future Holders! Their strategic approach and creative content transformed our brand's digital presence.",
        sw: "Mwingiliano wetu wa mitandao ya kijamii uliongezeka mara mbili kwa mwezi mmoja tu baada ya kushirikiana na Future Holders! Mbinu yao ya kimkakati na maudhui ya ubunifu ziliimarisha uwepo wa chapa yetu kwenye mitandao."
      },
      author: {
        en: "Jackson Maganga",
        sw: "Jackson Maganga"
      },
      title: {
        en: "CEO",
        sw: "Afisa Mtendaji Mkuu"
      },
      company: {
        en: "EcoSolutions Tanzania",
        sw: "EcoSolutions Tanzania"
      },
      image: "/api/placeholder/100/100",
      rating: 5
    },
    { 
      quote: {
        en: "The MC services provided by Future Holders elevated our corporate event beyond expectations. Professional, charismatic, and perfectly attuned to our company culture.",
        sw: "Huduma za MC zilizotolewa na Future Holders ziliinua hafla yetu ya kampuni zaidi ya matarajio. Weledi, mvuto, na kuelewana vizuri na utamaduni wa kampuni yetu."
      },
      author: {
        en: "Omar Hassan",
        sw: "Omar Hassan"
      },
      title: {
        en: "Events Manager",
        sw: "Events Manager"
      },
      company: {
        en: "Dar es Salaam Business Hub",
        sw: "Dar es Salaam Business Hub"
      },
      image: "/api/placeholder/100/100",
      rating: 4
    },
  ];

  return (
    <div className={`relative w-full ${sourceSans.variable} ${baskerville.variable} py-4 md:py-4`}>
      <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-brand-accent/30 to-transparent rounded-full -z-10 blur-xl"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-tl from-brand-blue/20 to-transparent rounded-full -z-10 blur-xl"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.h2 
          className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {language === 'en' ? 'What Our Clients Say' : 'Wanachosema Wateja Wetu'}
        </motion.h2>
        
        <Swiper
          modules={[Pagination, Autoplay, EffectFade]}
          pagination={{ 
            clickable: true,
            bulletClass: 'swiper-pagination-bullet !bg-brand-light/50',
            bulletActiveClass: 'swiper-pagination-bullet-active !bg-brand-accent'
          }}
          autoplay={{
            delay: 7000,
            disableOnInteraction: false,
          }}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          loop={true}
          spaceBetween={50}
          slidesPerView={1}
          className="testimonial-swiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="grid md:grid-cols-3 gap-6 items-center">
                {/* Profile Column */}
                <motion.div 
                  className="flex flex-col items-center md:items-end"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="relative mb-4">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-accent to-brand-blue transform rotate-12 scale-105 blur-sm"></div>
                    <div className="rounded-full border-4 border-white shadow-lg relative overflow-hidden w-32 h-32">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.author[language]} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        className={i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                      />
                    ))}
                  </div>
                  
                  <h3 className="font-bold text-xl text-gray-900 text-center md:text-right">
                    {testimonial.author[language]}
                  </h3>
                  <p className="text-brand-accent font-medium text-center md:text-right">
                    {testimonial.title[language]}
                  </p>
                  <p className="text-gray-500 text-sm text-center md:text-right">
                    {testimonial.company[language]}
                  </p>
                </motion.div>
                
                {/* Quote Column */}
                <motion.div 
                  className="md:col-span-2 relative pl-5 md:pl-10 border-l-4 border-brand-blue/30"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Quote size={38} className="absolute top-0 left-4 text-brand-blue/20 -translate-y-1/2" />
                  
                  <blockquote className={`text-xl md:text-2xl italic mb-8 leading-relaxed font-serif font-normal text-gray-300`}>
                  &ldquo;{testimonial.quote[language]} &ldquo;
                  </blockquote>
                </motion.div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        {/* Testimonial Navigation Dots */}
      
      </div>

      {/* Custom pagination styling */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          margin: 0 6px !important;
          transition: all 0.3s ease;
        }
        .swiper-pagination {
          position: relative;
          margin-top: 2rem;
        }
        .testimonial-swiper {
          padding: 2rem 0;
        }
        .swiper-slide-active {
          z-index: 2;
        }
      `}</style>
    </div>
  );
}