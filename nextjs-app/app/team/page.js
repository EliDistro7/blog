"use client";

import Image from 'next/image';
import { MessageCircle, Target, Eye } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { content, departmentHeads } from '@/app/components/team/data';

// ── Design tokens — identical to ServicesShowcase / Header / Footer ───────────
const AMBER   = '#F59E0B';
const GOLD    = '#D4AF37';
const SURFACE = '#1A1208';
const DARK    = '#0D0903';
const CREAM   = '#F5F0E8';
const MUTED   = 'rgba(245,240,232,0.72)';
const RULE    = 'rgba(245,240,232,0.16)';
const BORDER  = 'rgba(245,158,11,0.35)';

const WHATSAPP = '255745787370';

const focusRing =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber';

// ── African pattern — same SVG throughout the site ───────────────────────────
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
        <polygon points="30,4 56,30 30,56 4,30"   fill="none" stroke="#F59E0B" strokeWidth="1.5" />
        <polygon points="30,16 44,30 30,44 16,30" fill="none" stroke="#D4AF37" strokeWidth="1" />
        <circle cx="30" cy="30" r="2.5" fill="#F59E0B" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill={`url(#${id})`} />
  </svg>
);

// ── Bilingual copy ────────────────────────────────────────────────────────────
const copy = {
  en: {
    heroBadge:    "Tanzania's marketing & digital agency",
    heroTitle:    ['The people', 'behind the work'],
    heroSubtitle: 'A tight-knit team of strategists, creatives and field operators who have built brands, won tenders and driven door-to-door campaigns for 40+ businesses across Tanzania.',

    aboutLabel:   'Who we are',
    aboutTitle:   ['Future Holders', 'Company Ltd'],
    aboutBody:    'We are a full-service marketing agency built for the Tanzanian market. Our work spans direct field sales, digital product, social media and brand — delivered by one team, accountable to one brief.',

    missionLabel: 'What drives us',
    missionTitle: 'Mission',
    missionBody:  'Accelerate business growth through innovative marketing strategies, direct sales excellence and digital solutions that connect brands with their ideal customers.',

    visionLabel:  'Where we are going',
    visionTitle:  'Vision',
    visionBody:   "East Africa's premier marketing agency — recognised for transforming businesses through inventive sales strategy, digital excellence and marketing that drives sustainable growth.",

    teamLabel:    'Our people',
    teamTitle:    ['Meet the', 'leadership team'],
    teamSubtitle: 'Driven by expertise, united in mission.',

    valuesLabel:  'How we work',

    ctaBadge:     'Start a project',
    ctaTitle:     ['Ready to grow', 'your business?'],
    ctaSubtitle:  'Tell us what you need — we will build the strategy, execute the campaign and report the results.',
    ctaButton:    'Chat on WhatsApp',
    ctaWhatsapp:  "Hi! I'd like to start a project with Future Holders. Can you help?",

    skills:       'Key skills',
  },
  sw: {
    heroBadge:    'Wakala wa masoko na kidijitali Tanzania',
    heroTitle:    ['Watu', 'nyuma ya kazi yetu'],
    heroSubtitle: 'Timu ndogo ya wastratejia, wabunifu na waendeshaji wa uwandani ambao wamejenga chapa, kushinda zabuni na kuendesha kampeni za nyumba kwa nyumba kwa biashara 40+ kote Tanzania.',

    aboutLabel:   'Sisi ni nani',
    aboutTitle:   ['Future Holders', 'Company Ltd'],
    aboutBody:    'Sisi ni wakala wa masoko wa huduma kamili uliojengwa kwa soko la Tanzania. Kazi yetu inajumuisha mauzo ya uwandani wa moja kwa moja, bidhaa za kidijitali, mitandao ya kijamii na chapa — inayotolewa na timu moja, inayohusika na muhtasari mmoja.',

    missionLabel: 'Kinachotusukuma',
    missionTitle: 'Dhamira',
    missionBody:  'Kuharakisha ukuaji wa biashara kupitia mikakati ya masoko ya uvumbuzi, ubora wa mauzo ya moja kwa moja na suluhisho za kidijitali zinazounganisha chapa na wateja wao bora.',

    visionLabel:  'Tunakokwenda',
    visionTitle:  'Maono',
    visionBody:   'Wakala mkuu wa masoko wa Afrika Mashariki — unaotambuliwa kwa kubadilisha biashara kupitia mkakati wa uvumbuzi wa mauzo, ubora wa kidijitali na masoko yanayoendesha ukuaji endelevu.',

    teamLabel:    'Watu wetu',
    teamTitle:    ['Timu yetu', 'ya uongozi'],
    teamSubtitle: 'Wanaongozwa na utaalamu, wameunganishwa na dhamira.',

    valuesLabel:  'Jinsi tunavyofanya kazi',

    ctaBadge:     'Anza mradi',
    ctaTitle:     ['Uko tayari kukuza', 'biashara yako?'],
    ctaSubtitle:  'Tuambie unachohitaji — tutaunda mkakati, kutekeleza kampeni na kuripoti matokeo.',
    ctaButton:    'Ongea nasi WhatsApp',
    ctaWhatsapp:  'Hujambo! Ningependa kuanza mradi na Future Holders. Je, mnaweza kunisaidia?',

    skills:       'Ujuzi mkuu',
  },
};

// ── Helper — resolves {en, sw} objects or plain strings ──────────────────────
const tr = (val, lang) => {
  if (val !== null && typeof val === 'object' && 'en' in val) return val[lang] ?? val.en;
  return val;
};

// ── Kicker — 3px bar + small label, used before every section heading ────────
const Kicker = ({ label, color = AMBER }) => (
  <div className="flex items-center gap-3 mb-5">
    <div style={{ width: '3rem', height: 3, background: color, borderRadius: 2, flexShrink: 0 }} />
    <span className="font-display font-bold text-sm" style={{ color, letterSpacing: '0.04em' }}>
      {label}
    </span>
  </div>
);

// ── Component ─────────────────────────────────────────────────────────────────
export default function TeamPage() {
  const { language } = useLanguage();
  const lang = language === 'sw' ? 'sw' : 'en';
  const c = copy[lang];

  const openWhatsApp = () =>
    window.open(
      `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(c.ctaWhatsapp)}`,
      '_blank',
      'noopener,noreferrer'
    );

  const [featured, ...restTeam] = departmentHeads;

  return (
    <div style={{ background: SURFACE }}>

      {/* ═══════════════ HERO ═══════════════════════════════════════════════ */}
      <section aria-labelledby="team-hero-title" className="relative overflow-hidden">
        <AfricanPattern id="teamHeroPattern" />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 lg:pb-28">

          <Kicker label={c.heroBadge} />

          <h1
            id="team-hero-title"
            className="font-display font-extrabold max-w-4xl"
            style={{
              fontSize: 'clamp(2.75rem, 8vw, 6.5rem)',
              lineHeight: 0.96,
              letterSpacing: '-0.035em',
              color: CREAM,
            }}
          >
            {c.heroTitle[0]}{' '}
            <span style={{ color: AMBER }}>{c.heroTitle[1]}</span>
          </h1>

          <p
            className="mt-8 max-w-2xl leading-snug"
            style={{ color: MUTED, fontSize: 'clamp(1.05rem, 1.8vw, 1.35rem)' }}
          >
            {c.heroSubtitle}
          </p>
        </div>
      </section>

      {/* ═══════════════ ABOUT + MISSION / VISION ════════════════════════════ */}
      <section
        aria-label={c.aboutLabel}
        className="relative overflow-hidden"
        style={{ borderTop: `1px solid ${RULE}` }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">

          {/* About intro */}
          <div className="grid lg:grid-cols-12 gap-10 mb-20">
            <div className="lg:col-span-5">
              <Kicker label={c.aboutLabel} />
              <h2
                className="font-display font-extrabold"
                style={{
                  fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
                  lineHeight: 1.0,
                  color: CREAM,
                  letterSpacing: '-0.03em',
                }}
              >
                {c.aboutTitle[0]}<br />
                <span style={{ color: AMBER }}>{c.aboutTitle[1]}</span>
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 flex items-center">
              <p style={{ color: MUTED, fontSize: '1.1rem', lineHeight: 1.65 }}>
                {c.aboutBody}
              </p>
            </div>
          </div>

          {/* Mission / Vision — two panels side by side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px" style={{ background: RULE }}>

            {/* Mission */}
            <div className="relative p-8 lg:p-12" style={{ background: DARK }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: AMBER }} />
              <div className="flex items-center gap-3 mb-6">
                <Target size={18} style={{ color: AMBER }} />
                <span className="font-display font-bold text-sm" style={{ color: AMBER, letterSpacing: '0.04em' }}>
                  {c.missionLabel}
                </span>
              </div>
              <h3
                className="font-display font-extrabold mb-5"
                style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: CREAM, letterSpacing: '-0.025em', lineHeight: 1 }}
              >
                {c.missionTitle}
              </h3>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: '1.05rem' }}>
                {c.missionBody}
              </p>
            </div>

            {/* Vision */}
            <div className="relative p-8 lg:p-12" style={{ background: DARK }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: GOLD }} />
              <div className="flex items-center gap-3 mb-6">
                <Eye size={18} style={{ color: GOLD }} />
                <span className="font-display font-bold text-sm" style={{ color: GOLD, letterSpacing: '0.04em' }}>
                  {c.visionLabel}
                </span>
              </div>
              <h3
                className="font-display font-extrabold mb-5"
                style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: CREAM, letterSpacing: '-0.025em', lineHeight: 1 }}
              >
                {c.visionTitle}
              </h3>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: '1.05rem' }}>
                {c.visionBody}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ TEAM ════════════════════════════════════════════════ */}
      <section
        id="team"
        aria-labelledby="team-title"
        className="relative overflow-hidden pb-24 scroll-mt-24"
        style={{ borderTop: `1px solid ${RULE}` }}
      >
        <AfricanPattern id="teamGridPattern" />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-16">

          {/* Section head */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
            <div>
              <Kicker label={c.teamLabel} />
              <h2
                id="team-title"
                className="font-display font-extrabold"
                style={{
                  fontSize: 'clamp(2.25rem, 5.5vw, 4rem)',
                  lineHeight: 1,
                  color: CREAM,
                  letterSpacing: '-0.03em',
                }}
              >
                {c.teamTitle[0]}{' '}
                <span style={{ color: AMBER }}>{c.teamTitle[1]}</span>
              </h2>
            </div>
            <p className="leading-relaxed lg:max-w-xs" style={{ color: MUTED }}>
              {c.teamSubtitle}
            </p>
          </div>

          {/* ── Feature member — mirrors ServicesShowcase "cover story" ── */}
          <div
            className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16 lg:mb-20"
            style={{ borderTop: `1px solid ${RULE}`, paddingTop: '2.5rem' }}
          >
            {/* Photo */}
            <div
              className="relative lg:col-span-5 overflow-hidden rounded"
              style={{ aspectRatio: '4 / 5', background: DARK, maxHeight: '36rem' }}
            >
              <Image
                src={featured.image}
                alt={tr(featured.name, lang)}
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover object-top"
              />
              {/* Name scrim overlay */}
              <div
                className="absolute inset-x-0 bottom-0"
                style={{
                  background: 'linear-gradient(to top, rgba(13,9,3,0.9) 0%, rgba(13,9,3,0) 55%)',
                  padding: '2rem 1.5rem 1.5rem',
                }}
              >
                <span
                  className="font-display font-extrabold"
                  style={{ color: CREAM, fontSize: '1.35rem', letterSpacing: '-0.02em' }}
                >
                  {tr(featured.name, lang)}
                </span>
              </div>
            </div>

            {/* Info */}
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span
                  className="font-display font-extrabold"
                  style={{ color: AMBER, fontSize: '0.8rem', letterSpacing: '0.04em' }}
                >
                  {tr(featured.role, lang)}
                </span>
                {featured.badge && (
                  <span
                    className="font-display font-bold text-xs px-3 py-1"
                    style={{
                      background: 'rgba(245,158,11,0.12)',
                      border: `1px solid ${BORDER}`,
                      color: AMBER,
                      borderRadius: '0.25rem',
                    }}
                  >
                    {tr(featured.badge, lang)}
                  </span>
                )}
              </div>

              <h3
                className="font-display font-extrabold"
                style={{
                  fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)',
                  lineHeight: 1.02,
                  color: CREAM,
                  letterSpacing: '-0.03em',
                }}
              >
                {tr(featured.name, lang)}
              </h3>

              <p className="mt-1 font-display font-semibold" style={{ color: MUTED, fontSize: '1rem' }}>
                {tr(featured.department, lang)}
              </p>

              <p
                className="mt-5 leading-relaxed"
                style={{ color: MUTED, fontSize: '1.05rem', maxWidth: '52ch' }}
              >
                {tr(featured.bio, lang)}
              </p>

              {featured.tzExperience && (
                <p
                  className="mt-4 leading-relaxed"
                  style={{ color: AMBER, fontSize: '0.95rem', fontStyle: 'italic' }}
                >
                  {tr(featured.tzExperience, lang)}
                </p>
              )}

              {/* Skills */}
              {featured.skills && (
                <div className="mt-8" style={{ borderTop: `1px solid ${RULE}` }}>
                  <span
                    className="block font-display font-bold text-sm mt-5 mb-4"
                    style={{ color: AMBER, letterSpacing: '0.04em' }}
                  >
                    {c.skills}
                  </span>
                  <ul className="flex flex-wrap gap-x-6 gap-y-2">
                    {tr(featured.skills, lang).map((skill, i) => (
                      <li key={i} className="font-display font-semibold text-sm" style={{ color: CREAM }}>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* ── Remaining team grid ── */}
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
            {restTeam.map((member, i) => (
              <li key={i}>
                <MemberCard member={member} lang={lang} c={c} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ═══════════════ VALUES ══════════════════════════════════════════════ */}
      {content[lang]?.values && (
        <section
          aria-label={c.valuesLabel}
          className="relative overflow-hidden pb-24"
          style={{ borderTop: `1px solid ${RULE}` }}
        >
          <AfricanPattern id="valuesPattern" />
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-16">

            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
              <div>
                <Kicker label={c.valuesLabel} />
                <h2
                  className="font-display font-extrabold"
                  style={{
                    fontSize: 'clamp(2.25rem, 5.5vw, 4rem)',
                    lineHeight: 1,
                    color: CREAM,
                    letterSpacing: '-0.03em',
                  }}
                >
                  {content[lang].values.title}{' '}
                  <span style={{ color: AMBER }}>{content[lang].values.highlight}</span>
                </h2>
              </div>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: RULE }}>
              {content[lang].values.items.map((value, i) => (
                <li key={i} className="relative p-8" style={{ background: DARK }}>
                  <div
                    style={{
                      position: 'absolute', top: 0, left: 0, right: 0,
                      height: 3,
                      background: i % 2 === 0 ? AMBER : GOLD,
                    }}
                  />
                  <div className="text-4xl mb-5" aria-hidden="true">{value.icon}</div>
                  <h3
                    className="font-display font-extrabold mb-3"
                    style={{ color: CREAM, fontSize: '1.35rem', letterSpacing: '-0.02em' }}
                  >
                    {value.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: MUTED }}>
                    {value.desc}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ═══════════════ CTA ═════════════════════════════════════════════════ */}
      <section
        aria-label={c.ctaBadge}
        className="relative overflow-hidden"
        style={{ borderTop: `1px solid ${RULE}` }}
      >
        <AfricanPattern id="teamCtaPattern" />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">

          <Kicker label={c.ctaBadge} />

          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7">
              <h2
                className="font-display font-extrabold"
                style={{
                  fontSize: 'clamp(2.5rem, 6.5vw, 5.5rem)',
                  lineHeight: 0.96,
                  color: CREAM,
                  letterSpacing: '-0.035em',
                }}
              >
                {c.ctaTitle[0]}{' '}
                <span style={{ color: AMBER }}>{c.ctaTitle[1]}</span>
              </h2>
            </div>

            <div className="lg:col-span-5">
              <p className="mb-8 leading-relaxed" style={{ color: MUTED, fontSize: '1.1rem' }}>
                {c.ctaSubtitle}
              </p>
              <button
                type="button"
                onClick={openWhatsApp}
                className={`inline-flex items-center gap-2 rounded font-display font-extrabold text-sm transition-opacity hover:opacity-90 ${focusRing}`}
                style={{ background: AMBER, color: DARK, padding: '1rem 1.75rem' }}
              >
                <MessageCircle size={18} />
                {c.ctaButton}
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

// ── Member card (grid items) ───────────────────────────────────────────────────
function MemberCard({ member, lang, c }) {
  return (
    <article className="group">
      {/* Photo */}
      <div
        className="relative overflow-hidden rounded mb-5"
        style={{ aspectRatio: '4 / 5', background: DARK, maxHeight: '22rem' }}
      >
        <Image
          src={member.image}
          alt={tr(member.name, lang)}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover object-top motion-safe:transition-transform motion-safe:duration-700 motion-safe:group-hover:scale-[1.03]"
        />
      </div>

      {/* Meta */}
      <div className="pt-4" style={{ borderTop: `2px solid ${AMBER}` }}>
        <div className="flex items-center gap-2 mb-2">
          <span className="font-display font-semibold text-sm" style={{ color: AMBER }}>
            {tr(member.role, lang)}
          </span>
          {member.badge && (
            <span
              className="font-display font-bold text-xs px-2 py-0.5"
              style={{
                background: 'rgba(245,158,11,0.10)',
                border: `1px solid ${BORDER}`,
                color: AMBER,
                borderRadius: '0.2rem',
              }}
            >
              {tr(member.badge, lang)}
            </span>
          )}
        </div>

        <h3
          className="font-display font-extrabold"
          style={{ fontSize: '1.45rem', lineHeight: 1.08, color: CREAM, letterSpacing: '-0.02em' }}
        >
          {tr(member.name, lang)}
        </h3>

        <p className="mt-1 text-sm" style={{ color: MUTED }}>
          {tr(member.department, lang)}
        </p>

        <p className="mt-3 text-sm leading-relaxed" style={{ color: MUTED }}>
          {tr(member.bio, lang)}
        </p>

        {/* Skills — dot-separated, no bubbles */}
        {member.skills && (
          <p className="mt-4 text-xs leading-snug" style={{ color: 'rgba(245,158,11,0.7)' }}>
            {tr(member.skills, lang).join(' · ')}
          </p>
        )}
      </div>
    </article>
  );
}