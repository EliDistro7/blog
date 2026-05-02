import React, { useState, useEffect, useCallback } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Globe, Users, Heart, Building } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

// ── Design tokens (matches tailwind.config surface/amber/cream palette) ──────
const AMBER   = '#F59E0B';
const GOLD    = '#D4AF37';
const SURFACE = '#1A1208';
const DARK    = '#0D0903';
const CREAM   = '#F5F0E8';
const MUTED   = 'rgba(245,240,232,0.55)';
const BORDER  = 'rgba(245,158,11,0.2)';
const BORDER_S = 'rgba(245,158,11,0.35)';

// ── African geometric SVG pattern (reused from ServicesShowcase) ─────────────
const AfricanPattern = () => (
  <svg
    width="100%" height="100%"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute inset-0 pointer-events-none"
    style={{ opacity: 0.055 }}
  >
    <defs>
      <pattern id="tcPattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
        <polygon points="30,4 56,30 30,56 4,30" fill="none" stroke="#F59E0B" strokeWidth="1.5" />
        <polygon points="30,16 44,30 30,44 16,30" fill="none" stroke="#D4AF37" strokeWidth="1" />
        <line x1="30" y1="0" x2="30" y2="60" stroke="#F59E0B" strokeWidth="0.5" />
        <line x1="0" y1="30" x2="60" y2="30" stroke="#F59E0B" strokeWidth="0.5" />
        <circle cx="30" cy="30" r="2.5" fill="#F59E0B" />
        <circle cx="0" cy="0" r="1.5" fill="#D4AF37" />
        <circle cx="60" cy="0" r="1.5" fill="#D4AF37" />
        <circle cx="0" cy="60" r="1.5" fill="#D4AF37" />
        <circle cx="60" cy="60" r="1.5" fill="#D4AF37" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#tcPattern)" />
  </svg>
);

export default function TestimonialCarousel() {
  const { language } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const translations = {
    en: {
      sectionBadge: 'Client Success Stories',
      mainTitle: { prefix: 'What Our', accent: 'Clients', suffix: 'Say' },
      subtitle: "Discover how we've transformed businesses across Tanzania with our digital solutions",
      previous: 'Prev',
      next: 'Next',
      stats: {
        websites: 'Websites Delivered',
        clients: 'Happy Clients',
        projects: 'Projects Completed',
        experience: 'Years Experience',
      },
    },
    sw: {
      sectionBadge: 'Hadithi za Mafanikio ya Wateja',
      mainTitle: { prefix: 'Wateja Wetu', accent: 'Wanasema', suffix: 'Nini' },
      subtitle: 'Gundua jinsi tulivyobadilisha biashara kote Tanzania kwa suluhisho zetu za kidijitali',
      previous: 'Iliyopita',
      next: 'Ifuatayo',
      stats: {
        websites: 'Tovuti Zilizotolewa',
        clients: 'Wateja Wenye Furaha',
        projects: 'Miradi Iliyokamilika',
        experience: 'Miaka ya Uzoefu',
      },
    },
  };

  const testimonials = [
    {
      quote: {
        en: "Future Holders built our website in just 10 days—absolutely flawless execution and stunning design. Their team's attention to detail made our brand shine online.",
        sw: 'Future Holders walijenga tovuti yetu kwa siku 10 pekee—utekelezaji bila hitilafu yoyote na muundo wa kuvutia. Umakini wa timu yao kwa maelezo ulifanya chapa yetu ing\'ae mtandaoni.',
      },
      author: 'Salila Mohammed',
      title: 'Executive Director & Founder',
      company: 'Amka Kijana Organisation',
      website: 'www.amkakijana.org',
      rating: 5,
      category: { en: 'NGO – Health Education', sw: 'Shirika – Elimu ya Afya' },
      icon: <Heart className="w-3.5 h-3.5" />,
      accent: AMBER,
    },
    {
      quote: {
        en: 'Their photography platform revolutionized how we showcase and sell our work. The seamless integration and user-friendly interface exceeded all our expectations.',
        sw: 'Jukwaa lao la upigaji picha lilibadilisha jinsi tunavyoonyesha na kuuza kazi yetu. Muunganiko usio na matatizo na kiolesura rahisi kutumia vilivukia matarajio yetu yote.',
      },
      author: 'James Mwalimu',
      title: 'Professional Photographer',
      company: 'Pichazangu Photography',
      website: 'www.pichazangu.store.com',
      rating: 5,
      category: { en: 'Photography Platform', sw: 'Jukwaa la Picha' },
      icon: <Globe className="w-3.5 h-3.5" />,
      accent: GOLD,
    },
    {
      quote: {
        en: 'Our agriculture business needed a professional online presence, and Future Holders delivered beyond expectations. The site perfectly represents our brand values.',
        sw: 'Biashara yetu ya kilimo ilihitaji uwepo wa kitaalamu mtandaoni, na Future Holders walitoa zaidi ya matarajio. Tovuti inawakilisha vizuri maadili ya chapa yetu.',
      },
      author: 'Sarah Kamau',
      title: 'Managing Director',
      company: 'Four Freyn Agriculture',
      website: 'www.fourfreyn.com',
      rating: 5,
      category: { en: 'Agriculture Business', sw: 'Biashara ya Kilimo' },
      icon: <Building className="w-3.5 h-3.5" />,
      accent: AMBER,
    },
    {
      quote: {
        en: 'The church management system transformed how we connect with our congregation. Modern technology meeting spiritual community needs perfectly.',
        sw: 'Mfumo wa usimamizi wa kanisa uliibadilisha jinsi tunavyounganishwa na waumini wetu. Teknolojia ya kisasa inakutana na mahitaji ya kijamii ya kiroho vizuri.',
      },
      author: 'Pastor Martin Kileo',
      title: 'Senior Pastor',
      company: 'KKKTYOMBO Lutheran Church',
      website: 'www.kkktyombo.org',
      rating: 5,
      category: { en: 'Church Management', sw: 'Usimamizi wa Kanisa' },
      icon: <Users className="w-3.5 h-3.5" />,
      accent: GOLD,
    },
    {
      quote: {
        en: 'Their catering team made our wedding absolutely unforgettable. The presentation was magazine-worthy, and every guest raved about the cuisine. Pure elegance from start to finish.',
        sw: 'Timu yao ya upishi ilifanya harusi yetu kuwa isiyo sahaulika kabisa. Uwasilishaji ulikuwa wa kiwango cha jarida, na kila mgeni alisifu mapishi. Uzuri wa hali ya juu kutoka mwanzo hadi mwisho.',
      },
      author: 'David Lumumba',
      title: 'Entrepreneur',
      company: 'Lumumba Ventures',
      website: '',
      rating: 5,
      category: { en: 'Catering Services', sw: 'Huduma za Chakula' },
      icon: <Heart className="w-3.5 h-3.5" />,
      accent: AMBER,
    },
    {
      quote: {
        en: "Our social media engagement doubled in just one month after partnering with Future Holders! Their strategic approach and creative content transformed our brand's digital presence.",
        sw: 'Mwingiliano wetu wa mitandao ya kijamii uliongezeka mara mbili kwa mwezi mmoja tu baada ya kushirikiana na Future Holders! Mbinu yao ya kimkakati na maudhui ya ubunifu ziliimarisha uwepo wa chapa yetu kwenye mitandao.',
      },
      author: 'Jackson Maganga',
      title: 'CEO',
      company: 'EcoSolutions Tanzania',
      website: '',
      rating: 5,
      category: { en: 'Social Media Management', sw: 'Usimamizi wa Mitandao' },
      icon: <Globe className="w-3.5 h-3.5" />,
      accent: GOLD,
    },
  ];

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const t = translations[language];
  const active = testimonials[activeIndex];
  const initials = active.author.split(' ').map((n) => n[0]).join('');

  return (
    <div
      className="relative w-full py-20 overflow-hidden"
      style={{ background: SURFACE, fontFamily: "'Bricolage Grotesque', 'Inter', sans-serif" }}
    >
      {/* ── Backgrounds ─────────────────────────────────────────────────── */}
      <div
        className="absolute top-0 right-0 w-2/3 h-2/3 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top right, rgba(245,158,11,0.09), transparent 70%)' }}
      />
      <div
        className="absolute bottom-0 left-0 w-1/2 h-1/2 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at bottom left, rgba(212,175,55,0.07), transparent 70%)' }}
      />
      <AfricanPattern />

      {/* ── Content ─────────────────────────────────────────────────────── */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-5">
            <div style={{ width: '3rem', height: '3px', background: AMBER, borderRadius: 2, flexShrink: 0 }} />
            <span
              className="font-display font-bold uppercase"
              style={{ color: AMBER, fontSize: '0.75rem', letterSpacing: '0.2em' }}
            >
              {t.sectionBadge}
            </span>
          </div>
          <h2
            className="font-display font-extrabold uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: CREAM, letterSpacing: '-0.02em' }}
          >
            {t.mainTitle.prefix}{' '}
            <span style={{ color: AMBER }}>{t.mainTitle.accent}</span>{' '}
            {t.mainTitle.suffix}
          </h2>
          <p className="mt-4 leading-relaxed" style={{ color: MUTED, fontSize: '0.95rem', maxWidth: '480px' }}>
            {t.subtitle}
          </p>
        </div>

        {/* Testimonial card */}
        <div
          className="relative overflow-hidden rounded"
          style={{
            background: DARK,
            border: `1px solid ${BORDER_S}`,
            boxShadow: '0 24px 60px rgba(0,0,0,0.5)',
          }}
        >
          {/* Top accent stripe — alternates amber / gold */}
          <div style={{ height: 3, background: active.accent }} />

          <div className="grid lg:grid-cols-5">
            {/* Profile column */}
            <div
              className="lg:col-span-2 flex flex-col items-center lg:items-start justify-center gap-4 p-8 lg:p-10"
              style={{ borderRight: `1px solid ${BORDER}` }}
            >
              {/* Avatar */}
              <div className="relative">
                <div
                  className="w-16 h-16 rounded flex items-center justify-center font-display font-extrabold text-2xl"
                  style={{ background: 'rgba(245,158,11,0.12)', border: `2px solid ${active.accent}`, color: active.accent, letterSpacing: '-0.02em' }}
                >
                  {initials}
                </div>
                <div
                  className="absolute -bottom-1.5 -right-1.5 w-6 h-6 rounded flex items-center justify-center"
                  style={{ background: active.accent, color: DARK }}
                >
                  {active.icon}
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={13}
                    className={i < active.rating ? 'fill-current' : 'opacity-20'}
                    style={{ color: active.accent }}
                  />
                ))}
              </div>

              {/* Author info */}
              <div className="text-center lg:text-left">
                <p
                  className="font-display font-extrabold uppercase leading-tight"
                  style={{ color: CREAM, fontSize: '1rem', letterSpacing: '-0.01em' }}
                >
                  {active.author}
                </p>
                <p
                  className="font-display font-bold uppercase mt-1"
                  style={{ color: active.accent, fontSize: '0.65rem', letterSpacing: '0.12em' }}
                >
                  {active.title}
                </p>
                <p style={{ color: MUTED, fontSize: '0.8rem', marginTop: '0.2rem' }}>
                  {active.company}
                </p>
              </div>

              {/* Category chip */}
              <div
                className="font-display font-semibold uppercase"
                style={{
                  background: 'rgba(245,158,11,0.08)',
                  border: `1px solid ${BORDER}`,
                  color: active.accent,
                  fontSize: '0.62rem',
                  padding: '0.25rem 0.65rem',
                  borderRadius: '2px',
                  letterSpacing: '0.08em',
                }}
              >
                {active.category[language]}
              </div>

              {/* Website */}
              {active.website && (
                <p
                  className="font-mono"
                  style={{ color: GOLD, fontSize: '0.7rem', opacity: 0.7 }}
                >
                  {active.website}
                </p>
              )}
            </div>

            {/* Quote column */}
            <div className="lg:col-span-3 flex flex-col justify-center p-8 lg:p-12 relative">
              {/* Dot grid texture */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  opacity: 0.04,
                  backgroundImage: 'radial-gradient(circle at 1px 1px, #F59E0B 1px, transparent 0)',
                  backgroundSize: '40px 40px',
                }}
              />
              <div className="relative">
                {/* Watermark number */}
                <span
                  className="absolute -top-4 -left-2 font-display font-black select-none pointer-events-none"
                  style={{ fontSize: '6rem', lineHeight: 1, color: 'rgba(245,158,11,0.07)', letterSpacing: '-0.04em' }}
                >
                  {String(activeIndex + 1).padStart(2, '0')}
                </span>

                <blockquote
                  className="relative font-sans font-normal leading-relaxed"
                  style={{ color: CREAM, fontSize: 'clamp(1rem, 2vw, 1.2rem)', fontStyle: 'italic' }}
                >
                  &ldquo;{active.quote[language]}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3 mt-6">
                  <div style={{ width: '2rem', height: '2px', background: active.accent }} />
                  <div style={{ width: '1rem', height: '2px', background: GOLD, opacity: 0.5 }} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-6">
          <button
            onClick={prevSlide}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            className="flex items-center gap-2 font-display font-bold uppercase transition-colors duration-200"
            style={{
              background: 'transparent',
              border: `1px solid ${BORDER_S}`,
              borderRadius: '2px',
              padding: '0.55rem 1.25rem',
              color: AMBER,
              fontSize: '0.7rem',
              letterSpacing: '0.12em',
              cursor: 'pointer',
            }}
          >
            <ChevronLeft size={14} />
            <span className="hidden sm:inline">{t.previous}</span>
          </button>

          {/* Dot indicators */}
          <div className="flex gap-2 items-center">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                style={{
                  width: index === activeIndex ? '1.5rem' : '0.4rem',
                  height: '0.4rem',
                  borderRadius: '2px',
                  background: index === activeIndex ? AMBER : BORDER_S,
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  padding: 0,
                }}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            className="flex items-center gap-2 font-display font-bold uppercase transition-colors duration-200"
            style={{
              background: 'transparent',
              border: `1px solid ${BORDER_S}`,
              borderRadius: '2px',
              padding: '0.55rem 1.25rem',
              color: AMBER,
              fontSize: '0.7rem',
              letterSpacing: '0.12em',
              cursor: 'pointer',
            }}
          >
            <span className="hidden sm:inline">{t.next}</span>
            <ChevronRight size={14} />
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-12">
          {[
            { label: t.stats.websites, value: '50+', accent: AMBER },
            { label: t.stats.clients,  value: '40+', accent: GOLD  },
            { label: t.stats.projects, value: '60+', accent: AMBER },
            { label: t.stats.experience, value: '5+', accent: GOLD },
          ].map((stat, index) => (
            <div
              key={index}
              className="relative overflow-hidden text-center rounded"
              style={{ background: 'rgba(255,255,255,0.04)', border: `1px solid ${BORDER}`, padding: '1.25rem 1rem' }}
            >
              {/* Top stripe alternates amber / gold */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: stat.accent }} />
              <p
                className="font-display font-extrabold leading-none"
                style={{ color: CREAM, fontSize: '1.75rem', letterSpacing: '-0.02em' }}
              >
                {stat.value}
              </p>
              <p
                className="font-display font-semibold uppercase mt-2"
                style={{ color: MUTED, fontSize: '0.6rem', letterSpacing: '0.12em' }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}