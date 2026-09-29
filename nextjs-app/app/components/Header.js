'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import {
  Menu, X, Share2, Globe, ChevronDown, DoorOpen, Phone,
  FileText, ShoppingCart, Palette, ArrowRight,
} from 'lucide-react';
import { LanguageSwitcher } from '@/app/components/LanguageSwitcher';
import { useLanguage } from '@/context/LanguageContext';

// ── Design tokens (same set as ServicesShowcase / Footer) ────────────────────
const AMBER = '#F59E0B';
const DARK  = '#0D0903';
const CREAM = '#F5F0E8';
const MUTED = 'rgba(245,240,232,0.72)';
const RULE  = 'rgba(245,240,232,0.16)';

const focusRing =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber';

// ── Subtle African pattern (mobile menu only, decorative) ────────────────────
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
    home: 'Future Holders home',
    tagline: 'Marketing & digital agency',
    services: 'Services',
    servicesKicker: 'Our services',
    viewAll: 'View all services',
    company: 'Company',
    about: 'About us',
    contact: 'Contact us',
    contactMobile: 'Contact us today',
    primaryNav: 'Main',
    mobileNav: 'Mobile',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },
  sw: {
    home: 'Ukurasa wa nyumbani wa Future Holders',
    tagline: 'Wakala wa masoko na kidijitali',
    services: 'Huduma',
    servicesKicker: 'Huduma zetu',
    viewAll: 'Tazama huduma zote',
    company: 'Kampuni',
    about: 'Kuhusu sisi',
    contact: 'Wasiliana nasi',
    contactMobile: 'Wasiliana nasi leo',
    primaryNav: 'Kuu',
    mobileNav: 'Simu',
    openMenu: 'Fungua menyu',
    closeMenu: 'Funga menyu',
  },
};

// ── Data (same order as the services page) ───────────────────────────────────
const services = [
  {
    id: 'web-development',
    Icon: Globe,
    title: { en: 'Web development', sw: 'Ujenzi wa tovuti' },
    description: {
      en: 'Professional websites and online stores',
      sw: 'Tovuti za kitaalamu na maduka ya mtandaoni',
    },
  },
  {
    id: 'branding',
    Icon: Palette,
    title: { en: 'Branding', sw: 'Utambulisho wa brand' },
    description: {
      en: 'Complete brand identity and design',
      sw: 'Utambulisho kamili wa brand na muundo',
    },
  },
  {
    id: 'social-media',
    Icon: Share2,
    title: { en: 'Social media', sw: 'Mitandao ya kijamii' },
    description: {
      en: 'Full management of your online presence',
      sw: 'Usimamizi kamili wa uwepo wako mtandaoni',
    },
  },
  {
    id: 'door-to-door',
    Icon: DoorOpen,
    title: { en: 'Door-to-door', sw: 'Nyumba kwa nyumba' },
    description: {
      en: 'Personal engagement and direct sales',
      sw: 'Ukaribu wa binafsi na mauzo ya moja kwa moja',
    },
  },
  {
    id: 'tender-applications',
    Icon: FileText,
    title: { en: 'Tender applications', sw: 'Maombi ya zabuni' },
    description: {
      en: 'Tender and proposal writing',
      sw: 'Uandishi wa zabuni na mapendekezo',
    },
  },
  {
    id: 'equipment-sales',
    Icon: ShoppingCart,
    title: { en: 'Equipment sales', sw: 'Mauzo ya vifaa' },
    description: {
      en: 'Quality equipment and supply solutions',
      sw: 'Vifaa vya ubora na suluhisho za usambazaji',
    },
  },
];

// ── Component ─────────────────────────────────────────────────────────────────
export default function Header() {
  const { language } = useLanguage();
  const lang = language === 'sw' ? 'sw' : 'en';
  const t = copy[lang];
  const tr = (obj) => obj[lang] ?? obj.en;

  const pathname = usePathname();
  const isActive = (path) => pathname === path || pathname.startsWith(`${path}/`);

  const [mobileOpen, setMobileOpen]     = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled]         = useState(false);

  const servicesRef    = useRef(null);
  const servicesBtnRef = useRef(null);
  const menuBtnRef     = useRef(null);

  // Scroll state
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close everything when the route changes
  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  // Close the mobile menu if the viewport grows to desktop
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const onChange = () => { if (mq.matches) setMobileOpen(false); };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  // Body scroll lock (restores whatever was there before)
  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, [mobileOpen]);

  // Escape closes menus and returns focus to the control that opened them
  useEffect(() => {
    if (!servicesOpen && !mobileOpen) return;
    const onKey = (e) => {
      if (e.key !== 'Escape') return;
      if (servicesOpen) { setServicesOpen(false); servicesBtnRef.current?.focus(); }
      if (mobileOpen)   { setMobileOpen(false);   menuBtnRef.current?.focus(); }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [servicesOpen, mobileOpen]);

  // Click outside the services dropdown
  useEffect(() => {
    if (!servicesOpen) return;
    const onDown = (e) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target )) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('pointerdown', onDown);
    return () => document.removeEventListener('pointerdown', onDown);
  }, [servicesOpen]);

  const navLink = (active) =>
    `px-3 py-2 font-display font-semibold text-sm border-b-2 motion-safe:transition-colors hover:text-amber ${
      active ? 'text-cream border-amber' : 'text-cream/80 border-transparent'
    } ${focusRing}`;

  const inServices = isActive('/services');

  return (
    <>
      {/* ═════════════════ HEADER ═════════════════ */}
      <header
        className={`fixed top-0 inset-x-0 z-50 w-full motion-safe:transition-[height,background-color] motion-safe:duration-300 ${
          scrolled ? 'h-16' : 'h-20'
        }`}
        style={{
          background: scrolled ? 'rgba(13,9,3,0.94)' : 'rgba(13,9,3,0.55)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: `1px solid ${scrolled ? RULE : 'transparent'}`,
        }}
      >
        <div className="container mx-auto h-full px-4 sm:px-6 lg:px-8">
          <div className="flex h-full items-center justify-between gap-4">
            {/* ── Brand ── */}
            <Link href="/" aria-label={t.home} className={`flex items-center gap-3 ${focusRing}`}>
              <Image
                src="/logo.png"
                alt=""
                width={80}
                height={40}
                priority
                className={`w-auto object-contain motion-safe:transition-[height] motion-safe:duration-300 ${
                  scrolled ? 'h-[34px]' : 'h-10'
                }`}
              />
              <span className="hidden sm:block">
                <span
                  className="block font-display font-extrabold leading-none"
                  style={{ color: CREAM, fontSize: '1.15rem', letterSpacing: '-0.02em' }}
                >
                  Future Holders
                </span>
                <span className="block mt-1 text-xs leading-none" style={{ color: MUTED }}>
                  {t.tagline}
                </span>
              </span>
            </Link>

            {/* ── Desktop nav ── */}
            <nav className="hidden lg:flex items-center gap-2" aria-label={t.primaryNav}>
              <div
                ref={servicesRef}
                className="relative"
                onBlur={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget )) setServicesOpen(false);
                }}
              >
                <button
                  ref={servicesBtnRef}
                  type="button"
                  onClick={() => setServicesOpen((o) => !o)}
                  aria-expanded={servicesOpen}
                  aria-controls="services-panel"
                  className={`inline-flex items-center gap-1.5 ${navLink(inServices || servicesOpen)}`}
                >
                  {t.services}
                  <ChevronDown
                    size={16}
                    aria-hidden="true"
                    className={`motion-safe:transition-transform motion-safe:duration-300 ${
                      servicesOpen ? 'rotate-180' : ''
                    }`}
                    style={{ color: AMBER }}
                  />
                </button>

                {servicesOpen && (
                  <div
                    id="services-panel"
                    className="absolute left-0 top-full mt-3 w-[30rem] rounded p-6"
                    style={{
                      background: 'rgba(13,9,3,0.98)',
                      backdropFilter: 'blur(16px)',
                      border: `1px solid ${RULE}`,
                      boxShadow: '0 20px 50px rgba(0,0,0,0.55)',
                    }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div style={{ width: '2rem', height: 3, background: AMBER, borderRadius: 2, flexShrink: 0 }} />
                      <span className="font-display font-bold text-sm" style={{ color: AMBER, letterSpacing: '0.04em' }}>
                        {t.servicesKicker}
                      </span>
                    </div>

                    <ul className="grid grid-cols-2 gap-x-6" style={{ borderTop: `1px solid ${RULE}` }}>
                      {services.map(({ id, Icon, title, description }) => (
                        <li key={id} style={{ borderBottom: `1px solid ${RULE}` }}>
                          <Link
                            href={`/services/${id}`}
                            className={`group flex items-start gap-3 py-3 ${focusRing}`}
                          >
                            <Icon size={16} aria-hidden="true" className="mt-0.5 flex-shrink-0" style={{ color: AMBER }} />
                            <span className="min-w-0">
                              <span className="block font-display font-bold text-sm text-cream group-hover:text-amber motion-safe:transition-colors">
                                {tr(title)}
                              </span>
                              <span className="block mt-0.5 text-xs leading-snug" style={{ color: MUTED }}>
                                {tr(description)}
                              </span>
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/services"
                      className={`group inline-flex items-center gap-2 mt-5 font-display font-bold text-sm ${focusRing}`}
                      style={{ color: AMBER }}
                    >
                      {t.viewAll}
                      <ArrowRight size={16} aria-hidden="true" className="motion-safe:transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/team"
                aria-current={isActive('/team') ? 'page' : undefined}
                className={navLink(isActive('/team'))}
              >
                {t.about}
              </Link>

              <Link
                href="/contact"
                className={`ml-4 rounded font-display font-extrabold text-sm hover:opacity-90 motion-safe:transition-opacity ${focusRing}`}
                style={{ background: AMBER, color: DARK, padding: '0.7rem 1.4rem' }}
              >
                {t.contact}
              </Link>
            </nav>

            {/* ── Right side ── */}
            <div className="flex items-center gap-2">
              <LanguageSwitcher />
              <button
                ref={menuBtnRef}
                type="button"
                onClick={() => setMobileOpen((o) => !o)}
                aria-label={mobileOpen ? t.closeMenu : t.openMenu}
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
                className={`lg:hidden flex h-11 w-11 items-center justify-center rounded text-cream ${focusRing}`}
              >
                {mobileOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ═════════════════ MOBILE MENU ═════════════════ */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          style={{ background: 'rgba(13,9,3,0.7)' }}
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* `invisible` when closed removes the links from the tab order */}
      <div
        id="mobile-menu"
        className={`fixed inset-x-0 z-40 lg:hidden overflow-hidden motion-safe:transition-[transform,opacity,visibility] motion-safe:duration-300 ${
          mobileOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-full opacity-0 invisible'
        }`}
        style={{
          top: scrolled ? '4rem' : '5rem',
          background: 'rgba(13,9,3,0.98)',
          borderBottom: `1px solid ${RULE}`,
          boxShadow: '0 20px 50px rgba(0,0,0,0.55)',
        }}
      >
        <AfricanPattern id="headerPattern" />

        <nav
          aria-label={t.mobileNav}
          className="relative container mx-auto px-4 sm:px-6 py-8 space-y-10 overflow-y-auto"
          style={{ maxHeight: `calc(100dvh - ${scrolled ? '4rem' : '5rem'})` }}
        >
          {/* Services */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div style={{ width: '2rem', height: 3, background: AMBER, borderRadius: 2, flexShrink: 0 }} />
              <h2 className="font-display font-bold text-sm" style={{ color: AMBER, letterSpacing: '0.04em' }}>
                {t.servicesKicker}
              </h2>
            </div>

            <ul style={{ borderTop: `1px solid ${RULE}` }}>
              {services.map(({ id, Icon, title, description }) => (
                <li key={id} style={{ borderBottom: `1px solid ${RULE}` }}>
                  <Link
                    href={`/services/${id}`}
                    className={`flex items-center gap-4 py-4 ${focusRing}`}
                  >
                    <Icon size={18} aria-hidden="true" className="flex-shrink-0" style={{ color: AMBER }} />
                    <span className="min-w-0">
                      <span className="block font-display font-bold text-base text-cream">{tr(title)}</span>
                      <span className="block mt-0.5 text-sm leading-snug" style={{ color: MUTED }}>
                        {tr(description)}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div style={{ width: '2rem', height: 3, background: '#D4AF37', borderRadius: 2, flexShrink: 0 }} />
              <h2 className="font-display font-bold text-sm" style={{ color: '#D4AF37', letterSpacing: '0.04em' }}>
                {t.company}
              </h2>
            </div>

            <ul style={{ borderTop: `1px solid ${RULE}` }}>
              <li style={{ borderBottom: `1px solid ${RULE}` }}>
                <Link
                  href="/team"
                  aria-current={isActive('/team') ? 'page' : undefined}
                  className={`block py-4 font-display font-bold text-base hover:text-amber motion-safe:transition-colors ${
                    isActive('/team') ? 'text-amber' : 'text-cream'
                  } ${focusRing}`}
                >
                  {t.about}
                </Link>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <Link
            href="/contact"
            className={`flex w-full items-center justify-center gap-3 rounded font-display font-extrabold text-sm hover:opacity-90 motion-safe:transition-opacity ${focusRing}`}
            style={{ background: AMBER, color: DARK, padding: '1rem 1.75rem' }}
          >
            <Phone size={18} aria-hidden="true" />
            {t.contactMobile}
          </Link>
        </nav>
      </div>
    </>
  );
}