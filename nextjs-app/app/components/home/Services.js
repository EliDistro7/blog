'use client';

import React, { useState, useCallback, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Palette, Users, ShoppingCart, Share2, FileText, Globe,
  ArrowRight, MessageCircle, ChevronLeft, ChevronRight, Pause, Play,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

// ── Design tokens ─────────────────────────────────────────────────────────────
const AMBER    = '#F59E0B';
const GOLD     = '#D4AF37';
const SURFACE  = '#1A1208';
const DARK     = '#0D0903';
const CREAM    = '#F5F0E8';
const MUTED    = 'rgba(245,240,232,0.72)';
const RULE     = 'rgba(245,240,232,0.16)';
const BORDER_S = 'rgba(245,158,11,0.35)';

const WHATSAPP_NUMBER = '255745787370';
const SLIDE_MS = 6500;

// ── Subtle African pattern ────────────────────────────────────────────────────
const AfricanPattern = ({ id }) => (
  <svg
    width="100%" height="100%"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute inset-0 pointer-events-none"
    style={{ opacity: 0.04 }}
    aria-hidden="true"
  >
    <defs>
      <pattern id={id} x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
        <polygon points="30,4 56,30 30,56 4,30" fill="none" stroke="#F59E0B" strokeWidth="1.5" />
        <polygon points="30,16 44,30 30,44 16,30" fill="none" stroke="#D4AF37" strokeWidth="1" />
        <circle cx="30" cy="30" r="2.5" fill="#F59E0B" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill={`url(#${id})`} />
  </svg>
);

// ── Carousel slides: swap images / service ids freely ────────────────────────
// `focus` is the object-position so each photo is cropped around its subject.
const slides = [
  {
    service: 'door-to-door',
    image: '/services/door.jpeg',
    focus: '60% 30%',
    alt:   { en: 'Future Holders team talking with a customer at their door', sw: 'Timu ya Future Holders ikizungumza na mteja mlangoni kwake' },
    kicker:{ en: 'Door-to-door marketing', sw: 'Uuzaji nyumba kwa nyumba' },
    line:  { en: 'Real conversations at your customers’ doors.', sw: 'Mazungumzo halisi mlangoni kwa wateja wako.' },
  },
  {
    service: 'equipment-sales',
    image: '/equipment/hero.jpeg',
    focus: '50% 55%',
    alt:   { en: 'Excavators lined up at dusk', sw: 'Wachimbaji wakiwa wamepangwa jioni' },
    kicker:{ en: 'Equipment sales', sw: 'Mauzo ya vifaa' },
    line:  { en: 'Machines that work as hard as you do.', sw: 'Vifaa vinavyofanya kazi kwa bidii kama wewe.' },
  },
  {
    service: 'tender-applications',
    image: '/equipment/process.jpeg',
    focus: '50% 50%',
    alt:   { en: 'Excavator loaded on a flat rack at the port', sw: 'Mchimbaji amepakiwa bandarini' },
    kicker:{ en: 'Tender applications', sw: 'Maombi ya zabuni' },
    line:  { en: 'Bids that are complete and on time.', sw: 'Zabuni kamili na kwa wakati.' },
  },
  {
    service: 'web-development',
    image: '/equipment/cta.jpeg',
    focus: '50% 45%',
    alt:   { en: 'Crane truck on site', sw: 'Lori la kreni eneo la kazi' },
    kicker:{ en: 'Web development', sw: 'Ujenzi wa tovuti' },
    line:  { en: 'A website live in as little as 10 days.', sw: 'Tovuti hewani kwa siku 10 tu.' },
  },
  {
    service: 'branding',
    image: '/equipment/services.jpeg',
    focus: '50% 40%',
    alt:   { en: 'Sales representative standing with machines', sw: 'Mwakilishi wa mauzo akiwa na vifaa' },
    kicker:{ en: 'Branding & identity', sw: 'Utambulisho wa brand' },
    line:  { en: 'A brand people remember.', sw: 'Brand ambayo watu wanaikumbuka.' },
  },
];

// ── Copy ──────────────────────────────────────────────────────────────────────
const copy = {
  en: {
    hero: {
      badge: "Tanzania's marketing & digital agency",
      title: 'Marketing that puts your business in front of Tanzania',
      subtitle:
        'Branding, websites, social media and door-to-door sales from one local team. Trusted by 40+ businesses across the country.',
      primary: 'Chat on WhatsApp',
      secondary: 'See our services',
      stats: [
        { value: '50+', label: 'Websites delivered' },
        { value: '40+', label: 'Happy clients' },
        { value: '5+',  label: 'Years of experience' },
      ],
      whatsapp: "Hi! I'd like to start a project with Future Holders. Can you help?",
      prev: 'Previous slide', next: 'Next slide', pause: 'Pause slideshow', play: 'Play slideshow',
      goTo: 'Go to slide',
    },
    services: {
      label: 'What we offer',
      title: 'Our services',
      subtitle: 'Everything you need to build a brand, reach customers and win business, in one place.',
      explore: 'Explore',
      featured: 'Most requested',
    },
  },
  sw: {
    hero: {
      badge: 'Wakala wa masoko na kidijitali Tanzania',
      title: 'Masoko yanayoifikisha biashara yako kwa Watanzania',
      subtitle:
        'Utambulisho wa brand, tovuti, mitandao ya kijamii na mauzo ya nyumba kwa nyumba kutoka timu moja ya hapa nchini. Tumeaminiwa na biashara 40+ kote nchini.',
      primary: 'Ongea nasi WhatsApp',
      secondary: 'Tazama huduma zetu',
      stats: [
        { value: '50+', label: 'Tovuti zilizotolewa' },
        { value: '40+', label: 'Wateja wenye furaha' },
        { value: '5+',  label: 'Miaka ya uzoefu' },
      ],
      whatsapp: 'Hujambo! Ningependa kuanza mradi na Future Holders. Je, mnaweza kunisaidia?',
      prev: 'Slaidi iliyopita', next: 'Slaidi inayofuata', pause: 'Simamisha slaidi', play: 'Endesha slaidi',
      goTo: 'Nenda kwenye slaidi',
    },
    services: {
      label: 'Tunachotoa',
      title: 'Huduma zetu',
      subtitle: 'Kila kitu unachohitaji kujenga brand, kufikia wateja na kushinda biashara, mahali pamoja.',
      explore: 'Chunguza',
      featured: 'Inayoombwa zaidi',
    },
  },
};

// ── Services data ─────────────────────────────────────────────────────────────
const services = [
  {
    id: 'web-development',
    title:    { en: 'Web Development', sw: 'Ujenzi wa Tovuti' },
    subtitle: { en: 'Websites that work for you', sw: 'Tovuti zinazokufanyia kazi' },
    description: {
      en: 'Fast, professional websites and online stores, built and launched in as little as 10 days.',
      sw: 'Tovuti na maduka ya mtandaoni ya kitaalamu na ya haraka, yanayojengwa na kuzinduliwa kwa siku 10 tu.',
    },
    icon: Globe,
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=75',
    accent: AMBER,
    features: [
      { en: 'Business Websites', sw: 'Tovuti za Biashara' },
      { en: 'Online Stores',     sw: 'Maduka ya Mtandaoni' },
      { en: 'Fast Delivery',     sw: 'Utoaji wa Haraka' },
    ],
  },
  {
    id: 'branding',
    title:    { en: 'Branding & Identity', sw: 'Utambulisho wa Brand' },
    subtitle: { en: 'Build your unique brand', sw: 'Jenga utambulisho wako' },
    description: {
      en: 'Logo design, brand guidelines and visual identity that make your business easy to remember.',
      sw: 'Muundo wa logo, miongozo ya brand na utambulisho wa kuona unaofanya biashara yako ikumbukwe.',
    },
    icon: Palette,
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=2000&q=75',
    accent: GOLD,
  },
  {
    id: 'social-media',
    title:    { en: 'Social Media Management', sw: 'Usimamizi wa Mitandao' },
    subtitle: { en: 'Grow your online presence', sw: 'Kuza uwepo wako mtandaoni' },
    description: {
      en: 'Content, community and paid ads across every platform, with reports that show what is working.',
      sw: 'Maudhui, jumuiya na matangazo katika majukwaa yote, pamoja na ripoti zinazoonyesha kinachofanya kazi.',
    },
    icon: Share2,
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=900&q=75',
    accent: AMBER,
  },
  {
    id: 'door-to-door',
    title:    { en: 'Door-to-Door Marketing', sw: 'Uuzaji Nyumba kwa Nyumba' },
    subtitle: { en: 'Personal connection, real results', sw: 'Ukaribu wa binafsi, matokeo halisi' },
    description: {
      en: 'Face-to-face campaigns that build trust with your customers and turn conversations into sales.',
      sw: 'Kampeni za ana kwa ana zinazojenga imani kwa wateja wako na kugeuza mazungumzo kuwa mauzo.',
    },
    icon: Users,
    image: '/services/door.jpeg',
    accent: GOLD,
  },
  {
    id: 'tender-applications',
    title:    { en: 'Tender Applications', sw: 'Maombi ya Zabuni' },
    subtitle: { en: 'Win more contracts', sw: 'Shinda mikataba zaidi' },
    description: {
      en: 'Document preparation, compliance checks and proposal writing so your bids are complete and on time.',
      sw: 'Utayarishaji wa nyaraka, ukaguzi wa kufuata masharti na uandishi wa mapendekezo ili zabuni zako ziwe kamili na kwa wakati.',
    },
    icon: FileText,
    image: '/partners/nest.jpeg',
    accent: AMBER,
  },
  {
    id: 'equipment-sales',
    title:    { en: 'Equipment Sales', sw: 'Mauzo ya Vifaa' },
    subtitle: { en: 'Quality equipment solutions', sw: 'Suluhisho za vifaa vya ubora' },
    description: {
      en: 'Agricultural and business equipment with expert advice and technical support after you buy.',
      sw: 'Vifaa vya kilimo na biashara pamoja na ushauri wa kitaalamu na msaada wa kiufundi baada ya kununua.',
    },
    icon: ShoppingCart,
    image: '/images/equip.jpeg',
    accent: GOLD,
  },
];

const focusRing =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber';

// ── Hero carousel styles (one tiny block, scoped by class prefix) ────────────
const carouselCss = `
@keyframes fh-fill   { from { transform: scaleX(0); } to { transform: scaleX(1); } }
@keyframes fh-drift  { from { transform: scale(1.0); } to { transform: scale(1.07); } }
@keyframes fh-rise   { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: none; } }

.fh-slide        { opacity: 0; transition: opacity 1100ms ease; }
.fh-slide.is-on  { opacity: 1; }
.fh-slide.is-on .fh-photo { animation: fh-drift ${SLIDE_MS + 1500}ms ease-out forwards; }
.fh-caption      { animation: fh-rise 700ms cubic-bezier(.2,.7,.2,1) both; }
.fh-fill         { transform-origin: left; transform: scaleX(0); }
.fh-fill.is-done { transform: scaleX(1); }
.fh-fill.is-live { animation: fh-fill ${SLIDE_MS}ms linear forwards; }
.fh-paused .fh-fill.is-live,
.fh-paused .fh-photo { animation-play-state: paused; }

@media (prefers-reduced-motion: reduce) {
  .fh-slide { transition: none; }
  .fh-slide.is-on .fh-photo, .fh-caption { animation: none; }
  .fh-fill.is-live { animation: none; transform: scaleX(1); }
}
`;

// ── Component ─────────────────────────────────────────────────────────────────
const ServicesShowcase = () => {
  const { language } = useLanguage();
  const lang = language === 'sw' ? 'sw' : 'en';
  const c = copy[lang];
  const tr = (obj) => obj[lang] || obj.en;

  const [index, setIndex] = useState(0);
  const [userPaused, setUserPaused] = useState(false);
  const [hoverPaused, setHoverPaused] = useState(false);
  const touchX = useRef(null);

  const paused = userPaused || hoverPaused;
  const go   = useCallback((i) => setIndex((i + slides.length) % slides.length), []);
  const next = useCallback(() => setIndex((i) => (i + 1) % slides.length), []);
  const prev = useCallback(() => setIndex((i) => (i - 1 + slides.length) % slides.length), []);

  const onTouchStart = (e) => { touchX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    touchX.current = null;
    if (Math.abs(dx) > 48) (dx < 0 ? next : prev)();
  };
  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') next();
    if (e.key === 'ArrowLeft') prev();
  };

  const openWhatsApp = (message) =>
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer'
    );

  const [featured, ...rest] = services;
  const FeaturedIcon = featured.icon;
  const active = slides[index];

  const ctrlBtn =
    `inline-flex items-center justify-center rounded-full transition-colors hover:bg-white/10 ${focusRing}`;
  const ctrlStyle = { width: 44, height: 44, border: `1px solid ${RULE}`, color: CREAM, background: 'rgba(13,9,3,0.35)' };

  return (
    <div style={{ background: SURFACE }}>
      <style>{carouselCss}</style>

      {/* ═════════════════ COVER: living photo carousel ═════════════════ */}
      <section aria-labelledby="hero-title">
        <div
          className={`relative w-full overflow-hidden h-[clamp(36rem,92vh,56rem)] lg:h-auto lg:aspect-[16/9] lg:min-h-[38rem] lg:max-h-[60rem] ${paused ? 'fh-paused' : ''}`}
          style={{ background: DARK }}
          role="group"
          aria-roledescription="carousel"
          aria-label={tr({ en: 'Featured services', sw: 'Huduma zilizoangaziwa' })}
          tabIndex={0}
          onKeyDown={onKeyDown}
          onMouseEnter={() => setHoverPaused(true)}
          onMouseLeave={() => setHoverPaused(false)}
          onFocus={() => setHoverPaused(true)}
          onBlur={() => setHoverPaused(false)}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {/* Stacked slides crossfade */}
          {slides.map((s, i) => (
            <div
              key={s.service + i}
              className={`fh-slide absolute inset-0 ${i === index ? 'is-on' : ''}`}
              aria-hidden={i !== index}
            >
              <Image
                src={s.image}
                alt={i === index ? tr(s.alt) : ''}
                fill
                priority={i === 0}
                sizes="100vw"
                className="fh-photo object-cover"
                style={{ objectPosition: s.focus }}
              />
            </div>
          ))}

          {/* Scrims: top for the fixed header, bottom for the headline */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'linear-gradient(to bottom, rgba(13,9,3,0.55) 0%, rgba(13,9,3,0) 22%), linear-gradient(to top, rgba(26,18,8,1) 0%, rgba(26,18,8,0.82) 30%, rgba(26,18,8,0) 70%)',
            }}
          />

          <div className="absolute inset-x-0 bottom-0">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-8 lg:pb-8">
              <div className="flex items-center gap-3 mb-5">
                <div style={{ width: '3rem', height: 3, background: AMBER, borderRadius: 2, flexShrink: 0 }} />
                <span className="font-display font-bold text-sm" style={{ color: AMBER, letterSpacing: '0.04em' }}>
                  {c.hero.badge}
                </span>
              </div>

              <h1
                id="hero-title"
                className="font-display font-extrabold max-w-5xl"
                style={{
                  fontSize: 'clamp(2.5rem, 7.2vw, 6rem)',
                  lineHeight: 0.98,
                  letterSpacing: '-0.035em',
                  color: CREAM,
                }}
              >
                {c.hero.title}
              </h1>

              {/* Slide caption + controls */}
              <div
                className="mt-8 pt-5 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
                style={{ borderTop: `1px solid ${RULE}` }}
              >
                <div key={index} className="fh-caption max-w-xl" aria-live={paused ? 'polite' : 'off'}>
                  <p className="font-display font-bold text-sm" style={{ color: AMBER }}>
                    {tr(active.kicker)}
                  </p>
                  <p className="mt-1 leading-snug" style={{ color: CREAM, fontSize: 'clamp(1.1rem, 2vw, 1.5rem)' }}>
                    {tr(active.line)}
                  </p>
                  <Link
                    href={`/services/${active.service}`}
                    className={`group inline-flex items-center gap-2 mt-3 font-display font-bold text-sm ${focusRing}`}
                    style={{ color: AMBER }}
                  >
                    {c.services.explore}
                    <ArrowRight size={16} className="motion-safe:transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>

                <div className="flex items-center gap-4">
                  {/* Segmented progress = navigation */}
                  <div className="flex items-center gap-2" role="tablist" aria-label={c.hero.goTo}>
                    {slides.map((s, i) => {
                      const state = i < index ? 'is-done' : i === index ? 'is-live' : '';
                      return (
                        <button
                          key={s.service + i}
                          type="button"
                          role="tab"
                          aria-selected={i === index}
                          aria-label={`${c.hero.goTo} ${i + 1}: ${tr(s.kicker)}`}
                          onClick={() => go(i)}
                          className={`relative flex items-center ${focusRing}`}
                          style={{ width: 'clamp(1.75rem, 5vw, 3rem)', height: 24 }}
                        >
                          <span className="block w-full overflow-hidden rounded-full" style={{ height: 3, background: RULE }}>
                            <span
                              key={i === index ? `live-${index}` : `s-${i}`}
                              className={`fh-fill block h-full ${state}`}
                              style={{ background: AMBER }}
                              onAnimationEnd={i === index ? next : undefined}
                            />
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  <div className="flex items-center gap-2">
                    <button type="button" onClick={prev} aria-label={c.hero.prev} className={ctrlBtn} style={ctrlStyle}>
                      <ChevronLeft size={18} />
                    </button>
                    <button type="button" onClick={next} aria-label={c.hero.next} className={ctrlBtn} style={ctrlStyle}>
                      <ChevronRight size={18} />
                    </button>
                    <button
                      type="button"
                      onClick={() => setUserPaused((p) => !p)}
                      aria-label={userPaused ? c.hero.play : c.hero.pause}
                      className={ctrlBtn}
                      style={ctrlStyle}
                    >
                      {userPaused ? <Play size={16} /> : <Pause size={16} />}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Standfirst + proof */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 lg:pb-24">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-8">
            <div className="lg:col-span-6">
              <p className="leading-snug mb-8" style={{ color: CREAM, fontSize: 'clamp(1.15rem, 2vw, 1.5rem)' }}>
                {c.hero.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={() => openWhatsApp(c.hero.whatsapp)}
                  className={`inline-flex items-center justify-center gap-2 rounded font-display font-extrabold text-sm transition-opacity hover:opacity-90 ${focusRing}`}
                  style={{ background: AMBER, color: DARK, padding: '1rem 1.75rem' }}
                >
                  <MessageCircle size={18} />
                  {c.hero.primary}
                </button>
                <a
                  href="#services"
                  className={`inline-flex items-center justify-center gap-2 rounded font-display font-bold text-sm transition-colors hover:bg-amber/10 ${focusRing}`}
                  style={{ border: `2px solid ${BORDER_S}`, color: AMBER, padding: '1rem 1.75rem' }}
                >
                  {c.hero.secondary}
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>

            <dl className="lg:col-span-5 lg:col-start-8 grid grid-cols-3">
              {c.hero.stats.map((s, i) => (
                <div
                  key={s.label}
                  className="px-4 first:pl-0 sm:px-6"
                  style={{ borderLeft: i === 0 ? 'none' : `1px solid ${RULE}` }}
                >
                  <dd
                    className="font-display font-extrabold leading-none"
                    style={{ color: CREAM, fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.03em' }}
                  >
                    {s.value}
                  </dd>
                  <dt className="mt-2 text-sm leading-snug" style={{ color: MUTED }}>{s.label}</dt>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ═════════════════ SERVICES: editorial spread ═════════════════ */}
      <section
        id="services"
        aria-labelledby="services-title"
        className="relative overflow-hidden pb-24 scroll-mt-24"
      >
        <AfricanPattern id="svcPattern" />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 pt-8 mb-12"
            style={{ borderTop: `1px solid ${RULE}` }}
          >
            <div>
              <span className="font-display font-bold text-sm" style={{ color: AMBER, letterSpacing: '0.04em' }}>
                {c.services.label}
              </span>
              <h2
                id="services-title"
                className="font-display font-extrabold mt-3"
                style={{ fontSize: 'clamp(2.25rem, 5.5vw, 4rem)', lineHeight: 1, color: CREAM, letterSpacing: '-0.03em' }}
              >
                {c.services.title}
              </h2>
            </div>
            <p className="leading-relaxed lg:max-w-sm" style={{ color: MUTED, fontSize: '1rem' }}>
              {c.services.subtitle}
            </p>
          </div>

          {/* Feature story */}
          <Link
            href={`/services/${featured.id}`}
            className={`group grid lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 lg:mb-20 ${focusRing}`}
          >
            <div className="relative lg:col-span-7 overflow-hidden rounded" style={{ aspectRatio: '16 / 10', background: DARK }}>
              <Image
                src={featured.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover motion-safe:transition-transform motion-safe:duration-700 motion-safe:group-hover:scale-[1.03]"
              />
            </div>

            <div className="lg:col-span-5">
              <div className="flex items-center gap-2 mb-4" style={{ color: featured.accent }}>
                <FeaturedIcon size={18} />
                <span className="font-display font-bold text-sm">{c.services.featured}</span>
              </div>
              <h3
                className="font-display font-extrabold"
                style={{ fontSize: 'clamp(1.9rem, 3.6vw, 3rem)', lineHeight: 1.02, color: CREAM, letterSpacing: '-0.025em' }}
              >
                {tr(featured.title)}
              </h3>
              <p className="font-display font-semibold mt-3" style={{ color: featured.accent, fontSize: '1rem' }}>
                {tr(featured.subtitle)}
              </p>
              <p className="mt-4 leading-relaxed" style={{ color: MUTED, fontSize: '1.05rem' }}>
                {tr(featured.description)}
              </p>

              <ul className="mt-6" style={{ borderTop: `1px solid ${RULE}` }}>
                {featured.features.map((f, i) => (
                  <li
                    key={i}
                    className="py-3 text-sm font-semibold"
                    style={{ borderBottom: `1px solid ${RULE}`, color: CREAM }}
                  >
                    {tr(f)}
                  </li>
                ))}
              </ul>

              <span
                className="inline-flex items-center gap-2 mt-6 font-display font-bold text-sm"
                style={{ color: featured.accent }}
              >
                {c.services.explore}
                <ArrowRight size={16} className="motion-safe:transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>

          {/* Remaining stories */}
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
            {rest.map((svc) => {
              const Icon = svc.icon;
              return (
                <li key={svc.id}>
                  <Link href={`/services/${svc.id}`} className={`group block ${focusRing}`}>
                    <div className="relative overflow-hidden rounded mb-5" style={{ aspectRatio: '4 / 3', background: DARK }}>
                      <Image
                        src={svc.image}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 60vw, 100vw"
                        className="object-cover motion-safe:transition-transform motion-safe:duration-700 motion-safe:group-hover:scale-[1.03]"
                      />
                    </div>

                    <div className="pt-4" style={{ borderTop: `2px solid ${svc.accent}` }}>
                      <div className="flex items-center gap-2 mb-2" style={{ color: svc.accent }}>
                        <Icon size={16} />
                        <span className="font-display font-semibold text-sm">{tr(svc.subtitle)}</span>
                      </div>
                      <h3
                        className="font-display font-extrabold"
                        style={{ fontSize: '1.6rem', lineHeight: 1.08, color: CREAM, letterSpacing: '-0.02em' }}
                      >
                        {tr(svc.title)}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed" style={{ color: MUTED }}>
                        {tr(svc.description)}
                      </p>
                      <span
                        className="inline-flex items-center gap-2 mt-4 font-display font-bold text-sm"
                        style={{ color: svc.accent }}
                      >
                        {c.services.explore}
                        <ArrowRight size={16} className="motion-safe:transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ServicesShowcase;