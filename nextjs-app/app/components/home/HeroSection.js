'use client';

import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import {
  ChevronLeft, ChevronRight,
  Globe, DoorOpen, Play, Pause,
  Smartphone, ArrowRight,
} from 'lucide-react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

// ── Inline African geometric SVG pattern ────────────────────────────────────
const AfricanPattern = () => (
  <svg
    width="100%" height="100%"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute inset-0 pointer-events-none"
    style={{ opacity: 0.055 }}
  >
    <defs>
      <pattern id="heroPattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
        <polygon points="30,4 56,30 30,56 4,30" fill="none" stroke="#F59E0B" strokeWidth="1.5" />
        <polygon points="30,16 44,30 30,44 16,30" fill="none" stroke="#D4AF37" strokeWidth="1" />
        <line x1="30" y1="0" x2="30" y2="60" stroke="#F59E0B" strokeWidth="0.5" />
        <line x1="0" y1="30" x2="60" y2="30" stroke="#F59E0B" strokeWidth="0.5" />
        <circle cx="30" cy="30" r="2.5" fill="#F59E0B" />
        <circle cx="0"  cy="0"  r="1.5" fill="#D4AF37" />
        <circle cx="60" cy="0"  r="1.5" fill="#D4AF37" />
        <circle cx="0"  cy="60" r="1.5" fill="#D4AF37" />
        <circle cx="60" cy="60" r="1.5" fill="#D4AF37" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#heroPattern)" />
  </svg>
)

// ── Content ──────────────────────────────────────────────────────────────────
const heroContent = {
  en: {
    companyName: "Future Holders",
    tagline: "Tanzania's #1 Marketing Agency",
    slides: [
      {
        title: "Door-to-Door\nMarketing",
        subtitle: "Personal Connection, Real Results",
        description:
          "Direct engagement with your target audience through personalized face-to-face interactions that build trust and drive conversions.",
        icon: DoorOpen,
        features: ["Personal Engagement", "Local Targeting", "Direct Feedback"],
        accentColor: "#F59E0B", // warning
      },
      {
        title: "Social Media\nManagement",
        subtitle: "Amplify Your Digital Presence",
        description:
          "Strategic content creation and community management across all major platforms to grow your brand's online influence.",
        icon: Smartphone,
        features: ["Content Strategy", "Community Building", "Analytics & Insights"],
        accentColor: "#D4AF37", // brand.gold
      },
      {
        title: "App\nDevelopment",
        subtitle: "Mobile Solutions That Work",
        description:
          "Custom mobile applications designed to enhance customer experience and streamline your business operations.",
        icon: Smartphone,
        features: ["Custom Development", "User Experience", "Performance Optimization"],
        accentColor: "#F59E0B",
      },
      {
        title: "Web\nDevelopment",
        subtitle: "Digital Excellence Delivered",
        description:
          "Responsive, fast-loading websites that convert visitors into customers and establish your professional online presence.",
        icon: Globe,
        features: ["Responsive Design", "SEO Optimized", "E-commerce Ready"],
        accentColor: "#D4AF37",
      },
    ],
    cta: "Start Growing",
  },
  sw: {
    companyName: "Future Holders",
    tagline: "Wakala Nambari 1 wa Uuzaji Tanzania",
    slides: [
      {
        title: "Uuzaji\nMlango kwa Mlango",
        subtitle: "Miunganiko ya Binafsi, Matokeo ya Kweli",
        description:
          "Ushirikiano wa moja kwa moja na walengwa wako kupitia mazungumzo ya ana kwa ana yanayojenga imani.",
        icon: DoorOpen,
        features: ["Ushirikiano wa Binafsi", "Lengo la Mtandaoni", "Maoni ya Moja kwa Moja"],
        accentColor: "#F59E0B",
      },
      {
        title: "Usimamizi wa\nMitandao ya Kijamii",
        subtitle: "Kuongeza Uwepo Wako wa Kidijitali",
        description:
          "Uundaji wa maudhui ya kimkakati na usimamizi wa jumuiya katika majukwaa yote makuu.",
        icon: Smartphone,
        features: ["Mkakati wa Maudhui", "Ujenzi wa Jumuiya", "Uchanganuzi na Maarifa"],
        accentColor: "#D4AF37",
      },
      {
        title: "Uundaji wa\nProgramu",
        subtitle: "Suluhisho za Rununu Zinazofanya Kazi",
        description:
          "Programu za rununu za kipekee zilizoundwa kuimarisha uzoefu wa mteja.",
        icon: Smartphone,
        features: ["Uundaji wa Kipekee", "Uzoefu wa Mtumiaji", "Uboreshaji wa Utendaji"],
        accentColor: "#F59E0B",
      },
      {
        title: "Uundaji wa\nTovuti",
        subtitle: "Ubora wa Kidijitali Unaotolewa",
        description:
          "Tovuti zinazoweza kujibu, za kasi za kupakia ambazo zinabadilisha wageni kuwa wateja.",
        icon: Globe,
        features: ["Muundo wa Mwitikio", "Imeboreshwa kwa SEO", "Tayari kwa Biashara"],
        accentColor: "#D4AF37",
      },
    ],
    cta: "Anza Leo",
  },
}

// ── Component ─────────────────────────────────────────────────────────────────
export default function Hero() {
  const { language }        = useLanguage()
  const [isMounted, setIsMounted]       = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying]       = useState(true)
  const swiperRef = useRef<any>(null)

  const content = heroContent['en' | 'sw']

  useEffect(() => { setIsMounted(true) }, [])

  const toggleAutoplay = () => {
    if (!swiperRef.current) return
    isPlaying
      ? swiperRef.current.autoplay.stop()
      : swiperRef.current.autoplay.start()
    setIsPlaying(!isPlaying)
  }

  const goToSlide = (i) => swiperRef.current?.slideTo(i)

  return (
    <section
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{ background: '#1A1208' }} // surface.DEFAULT (warmBlack)
    >
      {/* ── Background layers ─────────────────────────────────────────────── */}
      {/* Amber radial glow — top-right */}
      <div
        className="absolute top-0 right-0 w-2/3 h-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top right, #F59E0B, transparent 70%)' }}
      />
      {/* African geometric pattern */}
      <AfricanPattern />

      {/* ── Swiper ────────────────────────────────────────────────────────── */}
      <div className="relative z-10 w-full h-full">
        <Swiper
          onSwiper={(s) => { swiperRef.current = s }}
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          spaceBetween={0}
          slidesPerView={1}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          onSlideChange={(s) => setCurrentSlide(s.activeIndex)}
          className="h-full"
        >
          {content.slides.map((slide, index) => {
            const Icon = slide.icon
            const isGold = slide.accentColor === '#D4AF37'

            return (
              <SwiperSlide key={index} className="h-full">
                <div className="relative h-full flex items-center justify-center">

                  {/* ── Slide content ──────────────────────────────────── */}
                  <div className="container mx-auto px-6 z-10">
                    <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      animate={isMounted ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.75, ease: 'easeOut' }}
                      className="max-w-5xl mx-auto text-center"
                    >
                      {/* Badge */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={isMounted ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="badge-amber inline-flex mb-8"
                      >
                        <div
                          className="rounded-full flex-shrink-0"
                          style={{ width: 6, height: 6, background: '#F59E0B', marginTop: 1 }}
                        />
                        {content.tagline}
                      </motion.div>

                      {/* Icon */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={isMounted ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.55, delay: 0.25 }}
                        className="flex justify-center mb-6"
                      >
                        <div
                          className="flex items-center justify-center rounded"
                          style={{
                            width: '4.5rem',
                            height: '4.5rem',
                            background: 'rgba(245,158,11,0.15)',
                            border: `2px solid ${slide.accentColor}`,
                          }}
                        >
                          <Icon size={28} style={{ color: slide.accentColor }} />
                        </div>
                      </motion.div>

                      {/* Headline — multi-line via whitespace-pre */}
                      <motion.h1
                        initial={{ opacity: 0, y: 24 }}
                        animate={isMounted ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.75, delay: 0.35 }}
                        className="font-display font-extrabold uppercase whitespace-pre-line leading-none tracking-tight text-glow-amber"
                        style={{
                          fontSize: 'clamp(2.75rem, 8vw, 5.5rem)',
                          color: slide.accentColor,
                          letterSpacing: '-0.02em',
                          marginBottom: '1rem',
                        }}
                      >
                        {slide.title}
                      </motion.h1>

                      {/* Subtitle */}
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={isMounted ? { opacity: 1 } : {}}
                        transition={{ duration: 0.7, delay: 0.45 }}
                        className="font-display font-bold uppercase tracking-widest"
                        style={{
                          fontSize: 'clamp(0.85rem, 2vw, 1.1rem)',
                          color: 'rgba(245,240,232,0.75)',
                          marginBottom: '1.25rem',
                        }}
                      >
                        {slide.subtitle}
                      </motion.p>

                      {/* Accent rule */}
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={isMounted ? { scaleX: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="flex justify-center mb-6"
                        style={{ transformOrigin: 'center' }}
                      >
                        <div style={{ width: '4rem', height: '3px', background: slide.accentColor, borderRadius: 2 }} />
                      </motion.div>

                      {/* Description */}
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={isMounted ? { opacity: 1 } : {}}
                        transition={{ duration: 0.7, delay: 0.55 }}
                        className="leading-relaxed mx-auto"
                        style={{
                          fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
                          color: 'rgba(245,240,232,0.6)',
                          maxWidth: '620px',
                          marginBottom: '2rem',
                        }}
                      >
                        {slide.description}
                      </motion.p>

                      {/* Feature tags */}
                      <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={isMounted ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.65 }}
                        className="flex flex-wrap justify-center gap-3 mb-10"
                      >
                        {slide.features.map((f, i) => (
                          <span key={i} className="tag-amber rounded">
                            {f}
                          </span>
                        ))}
                      </motion.div>

                      {/* CTA */}
                      <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={isMounted ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.75 }}
                      >
                        <button
                          className="inline-flex items-center gap-2 font-display font-extrabold uppercase tracking-widest transition-opacity duration-200 hover:opacity-90 rounded"
                          style={{
                            background: slide.accentColor,
                            color: '#0D0903',
                            padding: '0.9rem 2.5rem',
                            fontSize: '0.9rem',
                          }}
                        >
                          {content.cta} <ArrowRight size={16} />
                        </button>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>

        {/* ── Prev / Next ─────────────────────────────────────────────────── */}
        {[
          { side: 'left-4',  Icon: ChevronLeft,  cls: 'swiper-button-prev-custom' },
          { side: 'right-4', Icon: ChevronRight, cls: 'swiper-button-next-custom' },
        ].map(({ side, Icon, cls }) => (
          <div key={cls} className={`absolute top-1/2 ${side} z-20 -translate-y-1/2`}>
            <button
              className={`${cls} flex items-center justify-center w-11 h-11 rounded transition-colors duration-200`}
              style={{
                background: 'rgba(245,158,11,0.1)',
                border: '1px solid rgba(245,158,11,0.25)',
                color: '#F5F0E8',
              }}
            >
              <Icon size={20} />
            </button>
          </div>
        ))}

        {/* ── Bottom controls ─────────────────────────────────────────────── */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-6">
          {/* Dot indicators */}
          <div className="flex gap-2">
            {content.slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className="rounded-full transition-all duration-300"
                style={{
                  width: currentSlide === i ? '1.75rem' : '0.6rem',
                  height: '0.6rem',
                  background: currentSlide === i ? '#F59E0B' : 'rgba(245,240,232,0.3)',
                }}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Play / Pause */}
          <button
            onClick={toggleAutoplay}
            className="flex items-center justify-center w-9 h-9 rounded transition-colors duration-200"
            style={{
              background: 'rgba(245,158,11,0.1)',
              border: '1px solid rgba(245,158,11,0.25)',
              color: '#F5F0E8',
            }}
            aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
          >
            {isPlaying ? <Pause size={14} /> : <Play size={14} className="ml-0.5" />}
          </button>

          {/* Counter */}
          <div
            className="font-display font-bold tabular-nums text-sm"
            style={{ color: 'rgba(245,240,232,0.5)' }}
          >
            {String(currentSlide + 1).padStart(2, '0')}
            <span style={{ color: 'rgba(245,158,11,0.5)', margin: '0 0.25rem' }}>/</span>
            {String(content.slides.length).padStart(2, '0')}
          </div>
        </div>
      </div>

      {/* ── Bottom fade ──────────────────────────────────────────────────────── */}
      <div
        className="absolute bottom-0 left-0 w-full h-28 pointer-events-none"
        style={{ background: 'linear-gradient(to top, #1A1208, transparent)' }}
      />
    </section>
  )
}