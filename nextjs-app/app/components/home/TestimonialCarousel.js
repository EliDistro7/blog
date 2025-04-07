'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { Libre_Baskerville, Source_Sans_3 as Source_Sans_Pro } from 'next/font/google';

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

  const testimonials = [
    { 
      quote: {
        en: "Future Holders built our website in 2 weeks—absolutely flawless!",
        sw: "Future Holders walijenga tovuti yetu kwa wiki 2—bila hitilafu yoyote!"
      },
      author: {
        en: "Jane K.",
        sw: "Jane K."
      } 
    },
    { 
      quote: {
        en: "Their catering team made our wedding unforgettable.",
        sw: "Timu yao ya upishi ilifanya harusi yetu isisahaulike."
      },
      author: {
        en: "David L.",
        sw: "David L."
      } 
    },
    { 
      quote: {
        en: "Our social media engagement doubled in a month!",
        sw: "Mwingiliano wetu wa mitandao ya kijamii uliongezeka mara mbili kwa mwezi mmoja!"
      },
      author: {
        en: "Priya M.",
        sw: "Priya M."
      } 
    },
  ];

  return (
    <div className={`relative w-full ${sourceSans.variable} ${baskerville.variable}`}>
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ 
          clickable: true,
          bulletClass: 'swiper-pagination-bullet !bg-brand-light/50',
          bulletActiveClass: 'swiper-pagination-bullet-active !bg-brand-accent'
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        spaceBetween={50}
        slidesPerView={1}
        className="max-w-3xl mx-auto"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <motion.div 
              className="px-8 py-16 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <blockquote className={`text-2xl md:text-3xl italic mb-8 leading-relaxed font-serif font-bold text-brand-foam`}>
                &ldquo;{testimonial.quote[language]}&rdquo;
              </blockquote>
              <p className="text-xl font-bold text-brand-accent font-sans">— {testimonial.author[language]}</p>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom pagination styling */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          margin: 0 8px !important;
        }
        .swiper-pagination {
          position: relative;
          margin-top: 3rem;
        }
      `}</style>
    </div>
  );
}