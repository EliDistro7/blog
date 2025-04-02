'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { motion } from 'framer-motion';

export default function TestimonialCarousel() {
  const testimonials = [
    { quote: "Future Holders built our website in 2 weeks—absolutely flawless!", author: "Jane K." },
    { quote: "Their catering team made our wedding unforgettable.", author: "David L." },
    { quote: "Our social media engagement doubled in a month!", author: "Priya M." },
  ];

  return (
    <div className="relative w-full">
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
              className="px-8 py-12 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
             <blockquote className="text-xl italic mb-6">
  &ldquo;{testimonial.quote}&rdquo;
</blockquote>
              <p className="font-bold">— {testimonial.author}</p>
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
          margin-top: 2rem;
        }
      `}</style>
    </div>
  );
}