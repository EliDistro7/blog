'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight, MessageCircle, PartyPopper, Truck, Wrench, Factory, Landmark, ChefHat,
  
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

// ── Design tokens (same set as ServicesShowcase / Header / Footer) ───────────
const AMBER    = '#F59E0B';
const GOLD     = '#D4AF37';
const SURFACE  = '#1A1208';
const DARK     = '#0D0903';
const CREAM    = '#F5F0E8';
const MUTED    = 'rgba(245,240,232,0.72)';
const RULE     = 'rgba(245,240,232,0.16)';
const BORDER_S = 'rgba(245,158,11,0.35)';

const WHATSAPP_NUMBER = '255745787370';

const focusRing =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber';

// ── Subtle African pattern ───────────────────────────────────────────────────
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

// ── Copy ──────────────────────────────────────────────────────────────────────


const copy = {
  en: {
    label: 'Our clients',
    title: 'Brands we work with',
    subtitle: 'A few of the businesses that trust us with their name and their growth.',
    featured: 'Featured client',
    logoOf: (name) => `${name} logo`,
    closing: 'Your brand could be next.',
    closingText: 'Tell us about your business and we will show you what we can build together.',
    primary: 'Start a conversation',
    secondary: 'See our services',
    whatsapp: "Hi! I saw your client work and I'd like to talk about my business.",
  },
  sw: {
    label: 'Wateja wetu',
    title: 'Brands tunazofanya nazo kazi',
    subtitle: 'Baadhi ya biashara zinazotuamini na jina lao na ukuaji wao.',
    featured: 'Mteja mashuhuri',
    logoOf: (name) => `Nembo ya ${name}`,
    closing: 'Brand yako inaweza kuwa inayofuata.',
    closingText: 'Tuambie kuhusu biashara yako, nasi tutakuonyesha tunachoweza kujenga pamoja.',
    primary: 'Anza mazungumzo',
    secondary: 'Tazama huduma zetu',
    whatsapp: 'Hujambo! Nimeona kazi zenu na ningependa kuzungumzia biashara yangu.',
  },
};

// ── Clients data ─────────────────────────────────────────────────────────────
// `bg` matches each logo file's own background so the plate has no visible seam.
// `tagline` is the brand's own wording from its logo, so it is never translated.


const clients = [
  {
    id: 'alladin',
    name: 'Alladin Event Supplies',
    image: '/partners/alladin.jpeg',
    bg: '#EEAA3C',
    Icon: PartyPopper,
    sector: { en: 'Event supplies', sw: 'Vifaa vya matukio' },
    tagline: 'We Got You All, You All Got Us',
    accent: AMBER,
  },
  {
    id: 'selair',
    name: 'Selair Logistics',
    image: '/partners/selair.jpeg',
    bg: '#010028',
    Icon: Truck,
    sector: { en: 'Logistics', sw: 'Usafirishaji' },
    accent: GOLD,
  },
  {
    id: 'fasteners',
    name: 'Tanzania Fasteners Ltd',
    image: '/partners/fasteners.jpeg',
    bg: '#000000',
    Icon: Wrench,
    sector: { en: 'Fasteners & hardware', sw: 'Vifungio na vifaa' },
    accent: AMBER,
  },
  {
    id: 'simba',
    name: 'Simba',
    image: '/partners/simba.jpeg',
    bg: '#F4F3F2',
    Icon: Factory,
    sector: { en: 'Industrial supplies', sw: 'Bidhaa za viwandani' },
    tagline: 'Where Quality Meets Industrial Needs',
    accent: GOLD,
  },
  {
    id: 'nest',
    name: 'NeST',
    image: '/partners/nest.jpeg',
    bg: '#FFFFFF',
    Icon: Landmark,
    sector: { en: 'Public procurement', sw: 'Manunuzi ya umma' },
    tagline: 'National e-Procurement System of Tanzania',
    accent: AMBER,
  },
  {
    id: 'mikaela',
    name: 'Mikaela',
    image: '/partners/mikaela.jpeg',
    bg: '#FFFFFF',
    Icon: ChefHat,
    sector: { en: 'Food & catering', sw: 'Chakula na upishi' },
    accent: GOLD,
  },
];

// ── Component ─────────────────────────────────────────────────────────────────
const ClientsShowcase = () => {
  const { language } = useLanguage();
  const lang = language === 'sw' ? 'sw' : 'en';
  const c = copy[lang];

  const openWhatsApp = (message) =>
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer'
    );

  const [featured, ...rest] = clients;
  const halves = rest.slice(0, 2);
  const thirds = rest.slice(2);
  const FeaturedIcon = featured.Icon;

  // A logo "plate": the logo file on its own background colour
  const Plate = ({ client, aspect, sizes }) => (
    <div className="relative overflow-hidden rounded" style={{ aspectRatio: aspect, background: client.bg }}>
      <div className="absolute inset-[4%]">
        <Image
          src={client.image}
          alt={c.logoOf(client.name)}
          fill
          sizes={sizes}
          className="object-contain"
        />
      </div>
      {/* Hairline edge so dark plates don't dissolve into the page */}
      <div className="absolute inset-0 pointer-events-none rounded" style={{ border: `1px solid ${RULE}` }} />
    </div>
  );

  const Card = ({
    client, number, aspect, sizes, large,
  }) => {
    const Icon = client.Icon;
    return (
      <article>
        <Plate client={client} aspect={aspect} sizes={sizes} />
        <div className="pt-4 mt-5" style={{ borderTop: `2px solid ${client.accent}` }}>
          <div className="flex items-center gap-2 mb-2" style={{ color: client.accent }}>
            <span aria-hidden="true" className="font-display font-bold text-sm tabular-nums" style={{ color: MUTED }}>
              {String(number).padStart(2, '0')}
            </span>
            <Icon size={16} aria-hidden="true" />
            <span className="font-display font-semibold text-sm">{client.sector[lang]}</span>
          </div>
          <h3
            className="font-display font-extrabold"
            style={{
              fontSize: large ? '2rem' : '1.6rem',
              lineHeight: 1.08,
              color: CREAM,
              letterSpacing: '-0.02em',
            }}
          >
            {client.name}
          </h3>
          {client.tagline && (
            <p lang="en" className="mt-3 text-sm italic leading-relaxed" style={{ color: MUTED }}>
              &ldquo;{client.tagline}&rdquo;
            </p>
          )}
        </div>
      </article>
    );
  };

  return (
    <section
      id="clients"
      aria-labelledby="clients-title"
      className="relative overflow-hidden pb-24 scroll-mt-24"
      style={{ background: SURFACE }}
    >
      <AfricanPattern id="clientsPattern" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section head */}
        <div
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 pt-8 mb-12"
          style={{ borderTop: `1px solid ${RULE}` }}
        >
          <div>
            <span className="font-display font-bold text-sm" style={{ color: AMBER, letterSpacing: '0.04em' }}>
              {c.label}
            </span>
            <h2
              id="clients-title"
              className="font-display font-extrabold mt-3"
              style={{ fontSize: 'clamp(2.25rem, 5.5vw, 4rem)', lineHeight: 1, color: CREAM, letterSpacing: '-0.03em' }}
            >
              {c.title}
            </h2>
          </div>
          <p className="leading-relaxed lg:max-w-sm" style={{ color: MUTED, fontSize: '1rem' }}>
            {c.subtitle}
          </p>
        </div>

        {/* Feature story */}
        <article className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 lg:mb-20">
          <div className="lg:col-span-7">
            <Plate client={featured} aspect="16 / 10" sizes="(min-width: 1024px) 58vw, 100vw" />
          </div>

          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 mb-4" style={{ color: featured.accent }}>
              <FeaturedIcon size={18} aria-hidden="true" />
              <span className="font-display font-bold text-sm">{c.featured}</span>
            </div>
            <h3
              className="font-display font-extrabold"
              style={{ fontSize: 'clamp(1.9rem, 3.6vw, 3rem)', lineHeight: 1.02, color: CREAM, letterSpacing: '-0.025em' }}
            >
              {featured.name}
            </h3>
            <p className="font-display font-semibold mt-3" style={{ color: featured.accent, fontSize: '1rem' }}>
              {featured.sector[lang]}
            </p>
            {featured.tagline && (
              <p
                lang="en"
                className="mt-6 pl-5 italic leading-snug"
                style={{
                  color: CREAM,
                  fontSize: 'clamp(1.15rem, 2vw, 1.5rem)',
                  borderLeft: `3px solid ${featured.accent}`,
                }}
              >
                &ldquo;{featured.tagline}&rdquo;
              </p>
            )}
          </div>
        </article>

        {/* Two half-width stories, then three thirds */}
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-14">
          {halves.map((client, i) => (
            <li key={client.id} className="lg:col-span-6">
              <Card
                client={client}
                number={i + 2}
                aspect="16 / 10"
                sizes="(min-width: 1024px) 50vw, 100vw"
                large
              />
            </li>
          ))}
          {thirds.map((client, i) => (
            <li key={client.id} className="lg:col-span-4">
              <Card
                client={client}
                number={i + 4}
                aspect="4 / 3"
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              />
            </li>
          ))}
        </ul>

        {/* Closing line */}
        <div
          className="grid lg:grid-cols-12 gap-8 pt-8 mt-20 lg:mt-24"
          style={{ borderTop: `1px solid ${RULE}` }}
        >
          <h3
            className="lg:col-span-7 font-display font-extrabold"
            style={{ fontSize: 'clamp(1.9rem, 3.6vw, 3rem)', lineHeight: 1.02, color: CREAM, letterSpacing: '-0.025em' }}
          >
            {c.closing}
          </h3>

          <div className="lg:col-span-4 lg:col-start-9">
            <p className="leading-relaxed mb-6" style={{ color: MUTED, fontSize: '1rem' }}>
              {c.closingText}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => openWhatsApp(c.whatsapp)}
                className={`inline-flex items-center justify-center gap-2 rounded font-display font-extrabold text-sm transition-opacity hover:opacity-90 ${focusRing}`}
                style={{ background: AMBER, color: DARK, padding: '1rem 1.75rem' }}
              >
                <MessageCircle size={18} aria-hidden="true" />
                {c.primary}
              </button>
              <Link
                href="/services"
                className={`inline-flex items-center justify-center gap-2 rounded font-display font-bold text-sm transition-colors hover:bg-amber/10 ${focusRing}`}
                style={{ border: `2px solid ${BORDER_S}`, color: AMBER, padding: '1rem 1.75rem' }}
              >
                {c.secondary}
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsShowcase;