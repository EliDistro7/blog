'use client';

import React, { useState, useEffect } from 'react';
import { DoorOpen, Smartphone, Globe, Users, ChevronRight, ArrowRight, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useRouter } from 'next/navigation';

// ── Inline African geometric SVG pattern ─────────────────────────────────────
const AfricanPattern = () => (
  <svg
    width="100%" height="100%"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute inset-0 pointer-events-none"
    style={{ opacity: 0.055 }}
  >
    <defs>
      <pattern id="svcPattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
        <polygon points="30,4 56,30 30,56 4,30" fill="none" stroke="#F59E0B" strokeWidth="1.5" />
        <polygon points="30,16 44,30 30,44 16,30" fill="none" stroke="#D4AF37" strokeWidth="1" />
        <line x1="30" y1="0" x2="30" y2="60" stroke="#F59E0B" strokeWidth="0.5" />
        <line x1="0"  y1="30" x2="60" y2="30" stroke="#F59E0B" strokeWidth="0.5" />
        <circle cx="30" cy="30" r="2.5" fill="#F59E0B" />
        <circle cx="0"  cy="0"  r="1.5" fill="#D4AF37" />
        <circle cx="60" cy="0"  r="1.5" fill="#D4AF37" />
        <circle cx="0"  cy="60" r="1.5" fill="#D4AF37" />
        <circle cx="60" cy="60" r="1.5" fill="#D4AF37" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#svcPattern)" />
  </svg>
)

// ── Dot-grid texture (services panel bg) ─────────────────────────────────────
const DotGrid = () => (
  <div
    className="absolute inset-0 pointer-events-none"
    style={{
      opacity: 0.04,
      backgroundImage: 'radial-gradient(circle at 1px 1px, #F59E0B 1px, transparent 0)',
      backgroundSize: '40px 40px',
    }}
  />
)

// ── Design tokens ─────────────────────────────────────────────────────────────
const AMBER    = '#F59E0B'  // warning
const GOLD     = '#D4AF37'  // brand.gold
const SURFACE  = '#1A1208'  // surface.DEFAULT (warmBlack)
const DARK     = '#0D0903'  // surface.deep (darkBrown)
const CREAM    = '#F5F0E8'  // cream text
const MUTED    = 'rgba(245,240,232,0.55)'
const FAINT    = 'rgba(245,240,232,0.3)'
const BORDER   = 'rgba(245,158,11,0.2)'
const BORDER_S = 'rgba(245,158,11,0.35)'

// ── Service data ──────────────────────────────────────────────────────────────
const services = [
  {
    id: 'branding',
    title:       { en: "Branding & Identity",          sw: "Utambulisho wa Brand" },
    subtitle:    { en: "Build Your Unique Brand",       sw: "Jenga Utambulisho Wako" },
    description: {
      en: "Complete brand identity development including logo design, brand guidelines, visual identity systems, and brand positioning strategies that make your business memorable.",
      sw: "Uundaji kamili wa utambulisho wa brand ikiwa ni pamoja na muundo wa logo, miongozo ya brand, mifumo ya utambulisho wa kuona.",
    },
    icon: DoorOpen,
    image: "https://images.unsplash.com/photo-1600132806608-231446b2e7af?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    accent: AMBER,
    features: [
      { en: "Logo Design",      sw: "Muundo wa Logo" },
      { en: "Brand Guidelines", sw: "Miongozo ya Brand" },
      { en: "Visual Identity",  sw: "Utambulisho wa Kuona" },
    ],
  },
  {
    id: 'door-to-door',
    title:       { en: "Door-to-Door Marketing",       sw: "Uuzaji Door to Door" },
    subtitle:    { en: "Personal Connection, Real Results", sw: "Miunganiko ya Binafsi" },
    description: {
      en: "Direct engagement with your target audience through personalized face-to-face interactions that build trust, create lasting relationships, and drive immediate conversions.",
      sw: "Ushirikiano wa moja kwa moja na walengwa wako kupitia mazungumzo ya ana kwa ana yanayojenga imani.",
    },
    icon: Users,
    image: "/services/door.jpeg",
    accent: GOLD,
    features: [
      { en: "Personal Engagement", sw: "Ushirikiano wa Binafsi" },
      { en: "Local Targeting",     sw: "Lengo la Mtandaoni" },
      { en: "Direct Feedback",     sw: "Maoni ya Moja kwa Moja" },
    ],
  },
  {
    id: 'equipment-sales',
    title:       { en: "Equipment Sales",              sw: "Mauzo ya Vifaa" },
    subtitle:    { en: "Quality Equipment Solutions",  sw: "Suluhisho za Vifaa vya Ubora" },
    description: {
      en: "Premium equipment sales and consultation services, providing businesses with the right tools and technology solutions to enhance productivity.",
      sw: "Mauzo ya vifaa vya hali ya juu na huduma za ushauri, kutoa biashara zifaa sahihi na suluhisho za teknolojia.",
    },
    icon: Smartphone,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    accent: AMBER,
    features: [
      { en: "Equipment Consultation", sw: "Ushauri wa Vifaa" },
      { en: "Quality Products",       sw: "Bidhaa za Ubora" },
      { en: "Technical Support",      sw: "Msaada wa Kiufundi" },
    ],
  },
  {
    id: 'social-media',
    title:       { en: "Social Media Management",      sw: "Usimamizi wa Mitandao" },
    subtitle:    { en: "Amplify Your Digital Presence", sw: "Kuongeza Uwepo Wako" },
    description: {
      en: "Strategic social media management across all platforms including content creation, community building, analytics, and targeted advertising.",
      sw: "Usimamizi wa kimkakati wa mitandao ya kijamii katika majukwaa yote ikiwa ni pamoja na uundaji wa maudhui.",
    },
    icon: Globe,
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    accent: GOLD,
    features: [
      { en: "Content Strategy",    sw: "Mkakati wa Maudhui" },
      { en: "Community Building",  sw: "Ujenzi wa Jumuiya" },
      { en: "Analytics & Insights", sw: "Uchanganuzi na Maarifa" },
    ],
  },
  {
    id: 'tender-applications',
    title:       { en: "Tender Applications",          sw: "Maombi ya Zabuni" },
    subtitle:    { en: "Win More Contracts",            sw: "Shinda Mikataba Zaidi" },
    description: {
      en: "Professional tender application services including documentation preparation, compliance checking, proposal writing, and submission management.",
      sw: "Huduma za kitaalamu za maombi ya zabuni ikiwa ni pamoja na utayarishaji wa nyaraka na uandishi wa mapendekezo.",
    },
    icon: ChevronRight,
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    accent: AMBER,
    features: [
      { en: "Document Preparation", sw: "Utayarishaji wa Nyaraka" },
      { en: "Compliance Check",     sw: "Ukaguzi wa Kufuata" },
      { en: "Proposal Writing",     sw: "Uandishi wa Mapendekezo" },
    ],
  },
]

// ── Component ─────────────────────────────────────────────────────────────────
const ServicesShowcase = () => {
  const router = useRouter()
  const { language } = useLanguage()
  const [activeId, setActiveId] = useState(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => { setIsClient(true) }, [])

  const t = (obj) =>
    (language === 'sw' ? obj.sw : obj.en) || obj.en

  const activeService = services.find(s => s.id === activeId)

  const handleWhatsApp = () => {
    const msg = language === 'sw'
      ? `Hujambo! Ninapendezwa na huduma zenu za masoko. Je, unaweza kutoa maelezo zaidi?`
      : `Hi! I'm interested in your services. Can you provide more details?`
    window.open(`https://wa.me/255745787370?text=${encodeURIComponent(msg)}`, '_blank')
  }

  const navTo = (id) => router.push(`/services/${id}`)

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{ background: SURFACE, fontFamily: "'Bricolage Grotesque', 'Inter', sans-serif" }}
    >
      {/* ── Backgrounds ──────────────────────────────────────────────────── */}
      {/* Amber radial glow — top right */}
      <div
        className="absolute top-0 right-0 w-2/3 h-2/3 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at top right, rgba(245,158,11,0.09), transparent 70%)` }}
      />
      {/* Amber radial glow — bottom left */}
      <div
        className="absolute bottom-0 left-0 w-1/2 h-1/2 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at bottom left, rgba(212,175,55,0.07), transparent 70%)` }}
      />
      <AfricanPattern />

      {/* ── Content ──────────────────────────────────────────────────────── */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">

          {/* ── Section header ─────────────────────────────────────────── */}
          <div className="mb-16">
            {/* Label */}
            <div className="flex items-center gap-3 mb-5">
              <div style={{ width: '3rem', height: '3px', background: AMBER, borderRadius: 2, flexShrink: 0 }} />
              <span
                className="font-display font-bold uppercase"
                style={{ color: AMBER, fontSize: '0.75rem', letterSpacing: '0.2em' }}
              >
                {language === 'sw' ? 'Huduma Zetu' : 'What We Offer'}
              </span>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <h1
                className="font-display font-extrabold uppercase leading-none tracking-tight"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: CREAM, letterSpacing: '-0.02em' }}
              >
                {language === 'sw' ? (
                  <>OUR<span style={{ color: AMBER }}> SERVICES</span></>
                ) : (
                  <>OUR<span style={{ color: AMBER }}> SERVICES</span></>
                )}
              </h1>
              <p
                className="leading-relaxed lg:max-w-md"
                style={{ color: MUTED, fontSize: '1rem' }}
              >
                {language === 'sw'
                  ? 'Suluhisho kamili za uuzaji zilizoundwa kuinua biashara yako na kukuunganisha na walengwa wako'
                  : 'Comprehensive marketing solutions designed to elevate your business and connect you with your target audience'}
              </p>
            </div>
          </div>

          {/* ── Services grid ──────────────────────────────────────────── */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mb-16">
            {services.map((svc, i) => {
              const Icon    = svc.icon
              const isActive = activeId === svc.id
              const stripe  = i % 2 === 0 ? AMBER : GOLD

              return (
                <div
                  key={svc.id}
                  onClick={() => { setActiveId(svc.id); navTo(svc.id) }}
                  onMouseEnter={() => setActiveId(svc.id)}
                  className="group relative overflow-hidden rounded cursor-pointer transition-all duration-300"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: `1px solid ${isActive ? svc.accent : BORDER}`,
                    boxShadow: isActive
                      ? `0 0 0 1px ${svc.accent}, 0 20px 40px rgba(0,0,0,0.5)`
                      : '0 4px 20px rgba(0,0,0,0.3)',
                  }}
                >
                  {/* Top accent stripe */}
                  <div
                    className="absolute top-0 left-0 right-0 transition-transform duration-500"
                    style={{ height: 3, background: stripe }}
                  />

                  {/* Image */}
                  <div className="relative overflow-hidden" style={{ height: '13rem' }}>
                    <img
                      src={svc.image}
                      alt={t(svc.title)}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Dark overlay */}
                    <div
                      className="absolute inset-0"
                      style={{ background: 'linear-gradient(to top, rgba(13,9,3,0.85) 30%, rgba(13,9,3,0.2) 100%)' }}
                    />
                    {/* Icon badge */}
                    <div
                      className="absolute top-3 right-3 flex items-center justify-center w-9 h-9 rounded transition-colors duration-200"
                      style={{ background: 'rgba(245,158,11,0.15)', border: `1px solid ${svc.accent}` }}
                    >
                      <Icon size={16} style={{ color: svc.accent }} />
                    </div>
                    {/* Index number watermark */}
                    <div
                      className="absolute bottom-3 right-4 font-display font-black select-none"
                      style={{ fontSize: '3.5rem', lineHeight: 1, color: 'rgba(245,158,11,0.12)', letterSpacing: '-0.04em' }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    {/* Title overlay on image */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3
                        className="font-display font-extrabold uppercase leading-tight transition-colors duration-200 group-hover:text-warning"
                        style={{ fontSize: '1rem', color: CREAM, letterSpacing: '-0.01em' }}
                      >
                        {t(svc.title)}
                      </h3>
                      <p
                        className="font-display font-bold uppercase tracking-wider mt-0.5"
                        style={{ fontSize: '0.65rem', color: svc.accent, letterSpacing: '0.12em' }}
                      >
                        {t(svc.subtitle)}
                      </p>
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="p-4 relative">
                    <DotGrid />
                    {/* Features */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {svc.features.slice(0, 2).map((f, idx) => (
                        <span
                          key={idx}
                          className="font-display font-semibold uppercase"
                          style={{
                            background: 'rgba(245,158,11,0.08)',
                            border: `1px solid ${BORDER}`,
                            color: svc.accent,
                            fontSize: '0.65rem',
                            padding: '0.2rem 0.55rem',
                            borderRadius: '2px',
                            letterSpacing: '0.08em',
                          }}
                        >
                          {t(f)}
                        </span>
                      ))}
                    </div>

                    {/* Footer row */}
                    <div
                      className="flex items-center justify-between pt-3"
                      style={{ borderTop: `1px solid ${BORDER}` }}
                    >
                      <span
                        className="font-display font-bold uppercase tracking-widest"
                        style={{ color: svc.accent, fontSize: '0.7rem' }}
                      >
                        {language === 'sw' ? 'Chunguza' : 'Explore'}
                      </span>
                      <ArrowRight
                        size={14}
                        style={{ color: svc.accent }}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* ── Active service detail panel ────────────────────────────── */}
          {activeService && isClient && (
            <div
              className="relative overflow-hidden rounded mb-16"
              style={{
                background: DARK,
                border: `1px solid ${BORDER_S}`,
                boxShadow: '0 24px 60px rgba(0,0,0,0.5)',
              }}
            >
              {/* Top stripe */}
              <div style={{ height: 3, background: activeService.accent }} />

              <div className="grid lg:grid-cols-5 gap-0">
                {/* Image col — 3/5 */}
                <div className="relative lg:col-span-3" style={{ minHeight: '22rem' }}>
                  <img
                    src={activeService.image}
                    alt={t(activeService.title)}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  {/* Dark overlay */}
                  <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(to right, rgba(13,9,3,0.15), rgba(13,9,3,0.7) 80%), linear-gradient(to top, rgba(13,9,3,0.85), transparent 50%)' }}
                  />
                  {/* Icon */}
                  <div
                    className="absolute top-6 left-6 flex items-center justify-center w-14 h-14 rounded"
                    style={{ background: 'rgba(245,158,11,0.15)', border: `2px solid ${activeService.accent}` }}
                  >
                    <activeService.icon size={26} style={{ color: activeService.accent }} />
                  </div>
                  {/* Title overlay */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <h2
                      className="font-display font-extrabold uppercase leading-none tracking-tight"
                      style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', color: CREAM, letterSpacing: '-0.02em', marginBottom: '0.5rem' }}
                    >
                      {t(activeService.title)}
                    </h2>
                    <div className="flex items-center gap-3">
                      <div style={{ width: '2rem', height: '2px', background: activeService.accent }} />
                      <span
                        className="font-display font-bold uppercase tracking-widest"
                        style={{ color: activeService.accent, fontSize: '0.7rem' }}
                      >
                        {t(activeService.subtitle)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content col — 2/5 */}
                <div className="lg:col-span-2 flex flex-col justify-between p-7 lg:p-9 relative">
                  <DotGrid />
                  <div className="relative">
                    {/* Description */}
                    <p className="leading-relaxed mb-7" style={{ color: MUTED, fontSize: '0.9rem' }}>
                      {t(activeService.description)}
                    </p>

                    {/* Features */}
                    <div className="mb-8">
                      <div className="flex items-center gap-3 mb-4">
                        <div style={{ width: '2rem', height: '2px', background: activeService.accent }} />
                        <span
                          className="font-display font-bold uppercase tracking-widest"
                          style={{ color: activeService.accent, fontSize: '0.65rem' }}
                        >
                          {language === 'sw' ? 'Vipengele Muhimu' : 'Key Features'}
                        </span>
                      </div>
                      <div className="space-y-2">
                        {activeService.features.map((f, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-3 p-3 rounded"
                            style={{ background: 'rgba(245,158,11,0.06)', border: `1px solid ${BORDER}` }}
                          >
                            <div
                              className="rounded-full flex-shrink-0"
                              style={{ width: 6, height: 6, background: activeService.accent }}
                            />
                            <span
                              className="font-display font-semibold uppercase tracking-wide"
                              style={{ color: CREAM, fontSize: '0.8rem', letterSpacing: '0.05em' }}
                            >
                              {t(f)}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="relative space-y-3">
                    <button
                      onClick={() => navTo(activeService.id)}
                      className="w-full flex items-center justify-center gap-2 font-display font-extrabold uppercase tracking-widest transition-opacity duration-200 hover:opacity-90 rounded"
                      style={{
                        background: activeService.accent,
                        color: DARK,
                        padding: '0.85rem 1.5rem',
                        fontSize: '0.8rem',
                      }}
                    >
                      {language === 'sw' ? 'Tazama Zaidi' : 'Explore Service'}
                      <ExternalLink size={14} />
                    </button>
                    <button
                      onClick={handleWhatsApp}
                      className="w-full flex items-center justify-center gap-2 font-display font-bold uppercase tracking-widest transition-colors duration-200 rounded"
                      style={{
                        background: 'transparent',
                        border: `2px solid ${BORDER_S}`,
                        color: activeService.accent,
                        padding: '0.85rem 1.5rem',
                        fontSize: '0.8rem',
                      }}
                    >
                      {language === 'sw' ? 'Pata Ushauri' : 'Get Free Quote'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ── CTA banner ─────────────────────────────────────────────── */}
          <div
            className="relative overflow-hidden rounded text-center"
            style={{ background: AMBER, padding: 'clamp(2.5rem, 5vw, 5rem) 2rem' }}
          >
            {/* African pattern overlay on amber bg */}
            <svg
              width="100%" height="100%"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute inset-0 pointer-events-none"
              style={{ opacity: 0.08 }}
            >
              <defs>
                <pattern id="ctaPattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                  <polygon points="30,4 56,30 30,56 4,30" fill="none" stroke="#0D0903" strokeWidth="1.5" />
                  <circle cx="30" cy="30" r="2" fill="#0D0903" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#ctaPattern)" />
            </svg>

            <div className="relative z-10 max-w-3xl mx-auto">
              <h3
                className="font-display font-extrabold uppercase leading-none tracking-tight"
                style={{ fontSize: 'clamp(1.75rem, 4.5vw, 3rem)', color: DARK, letterSpacing: '-0.02em', marginBottom: '1rem' }}
              >
                {language === 'sw' ? 'Tayari Kuinua Biashara Yako?' : 'Ready to Elevate Your Business?'}
              </h3>
              <p
                className="leading-relaxed mb-10"
                style={{ color: 'rgba(13,9,3,0.7)', fontSize: '1rem' }}
              >
                {language === 'sw'
                  ? 'Jiunge na maelfu ya biashara zilizofanikiwa ambazo zimebadilisha uuzaji wao kwa suluhisho zetu za ubunifu.'
                  : 'Join 40+ successful businesses that have transformed their marketing with our innovative solutions and expert team.'}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-sm mx-auto">
                <button
                  onClick={handleWhatsApp}
                  className="flex-1 font-display font-extrabold uppercase tracking-widest transition-opacity duration-200 hover:opacity-90 rounded"
                  style={{
                    background: DARK,
                    color: AMBER,
                    padding: '0.9rem 1.75rem',
                    fontSize: '0.8rem',
                    letterSpacing: '0.1em',
                  }}
                >
                  {language === 'sw' ? 'Pata Ushauri Bure' : 'Free Consultation'}
                </button>
                <button
                  className="flex-1 font-display font-bold uppercase tracking-widest transition-colors duration-200 rounded"
                  style={{
                    background: 'transparent',
                    border: `2px solid rgba(13,9,3,0.3)`,
                    color: DARK,
                    padding: '0.9rem 1.75rem',
                    fontSize: '0.8rem',
                    letterSpacing: '0.1em',
                  }}
                >
                  {language === 'sw' ? 'Ona Mafanikio' : 'View Success Stories'}
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ServicesShowcase;