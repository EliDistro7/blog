'use client'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { LanguageSwitcher } from "@/app/components/LanguageSwitcher"
import {
  Menu, X, Share2, Globe, Users, ChevronDown,
  DoorOpen, Phone, FileText, ShoppingCart, Palette
} from 'lucide-react'

// ── Inline African SVG pattern (decorative, mobile menu bg) ──────────────────
const AfricanPatternBg = () => (
  <svg
    width="100%" height="100%"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute inset-0 opacity-[0.04] pointer-events-none"
  >
    <defs>
      <pattern id="hdrPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
        <polygon points="20,3 37,20 20,37 3,20" fill="none" stroke="#F59E0B" strokeWidth="1" />
        <circle cx="20" cy="20" r="2" fill="#F59E0B" />
        <circle cx="0"  cy="0"  r="1" fill="#D4AF37" />
        <circle cx="40" cy="0"  r="1" fill="#D4AF37" />
        <circle cx="0"  cy="40" r="1" fill="#D4AF37" />
        <circle cx="40" cy="40" r="1" fill="#D4AF37" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#hdrPattern)" />
  </svg>
)

// ── Data ─────────────────────────────────────────────────────────────────────
const services = [
  {
    name: "Door-to-Door Marketing",
    shortName: "Door-to-Door",
    icon: <DoorOpen className="w-4 h-4" />,
    path: "/services/door-to-door",
    description: "Personal engagement & direct sales",
  },
  {
    name: "Social Media Management",
    shortName: "Social Media",
    icon: <Share2 className="w-4 h-4" />,
    path: "/services/social-media",
    description: "Complete digital presence management",
  },
  {
    name: "Web Development",
    shortName: "Web Building",
    icon: <Globe className="w-4 h-4" />,
    path: "/services/web-development",
    description: "Professional websites & e-commerce",
  },
  {
    name: "Tender Applications",
    shortName: "Tender Apps",
    icon: <FileText className="w-4 h-4" />,
    path: "/services/tender-applications",
    description: "Professional tender & proposal writing",
  },
  {
    name: "Equipment Sales",
    shortName: "Equipment",
    icon: <ShoppingCart className="w-4 h-4" />,
    path: "/services/equipment-sales",
    description: "Quality equipment & supply solutions",
  },
  {
    name: "Branding",
    shortName: "Branding",
    icon: <Palette className="w-4 h-4" />,
    path: "/services/branding",
    description: "Complete brand identity & design",
  },
]

const navItems = [
  { name: "About Us", path: "/team", icon: <Users className="w-4 h-4" /> },
]

// ── Component ─────────────────────────────────────────────────────────────────
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled]             = useState(false)
  const [servicesOpen, setServicesOpen]     = useState(false)
  const dropdownRef   = useRef(null)
  const mobileMenuRef = useRef(null)

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'auto'
    return () => { document.body.style.overflow = 'auto' }
  }, [mobileMenuOpen])

  // Click-outside dropdown
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const navBase = scrolled
    ? 'h-16 border-b-2 border-warning/40 shadow-warm'
    : 'h-20 border-b border-amber-border'

  return (
    <>
      {/* ── HEADER ─────────────────────────────────────────────────────────── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 nav-blur ${navBase}`}
      >
        <div className="container h-full px-4 mx-auto">
          <div className="flex items-center justify-between h-full">

            {/* ── Logo ─────────────────────────────────────────────────────── */}
            <Link href="/" className="flex items-center gap-3" aria-label="Future Holders Home">
              <img
                src="/logo.png"
                alt="Future Holders logo"
                style={{
                  height: scrolled ? '34px' : '40px',
                  width: 'auto',
                  objectFit: 'contain',
                  transition: 'height 0.3s',
                }}
              />
              {/* Desktop: full brand name */}
              <div className="hidden sm:block">
                <div
                  className="font-display font-extrabold tracking-wide leading-none"
                  style={{ fontSize: '1.1rem', color: '#F5F0E8' }}
                >
                  FUTURE<span className="text-warning">HOLDERS</span>
                </div>
                <div
                  className="text-2xs uppercase font-bold mt-0.5"
                  style={{ letterSpacing: '0.2em', color: 'rgba(245,158,11,0.7)' }}
                >
                  Marketing Solutions
                </div>
              </div>
              {/* Mobile: short abbreviation */}
              <span
                className="sm:hidden font-display font-extrabold"
                style={{ fontSize: '1.05rem', color: '#F5F0E8', letterSpacing: '-0.01em' }}
              >
                FH<span style={{ color: '#F59E0B' }}>.</span>
              </span>
            </Link>

            {/* ── Desktop Nav ──────────────────────────────────────────────── */}
            <nav className="hidden lg:flex items-center gap-1">

              {/* Services dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center gap-1.5 px-4 py-2 font-display font-bold uppercase tracking-wider text-sm transition-colors duration-200 rounded"
                  style={{ color: 'rgba(245,240,232,0.75)' }}
                >
                  Services
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`}
                    style={{ color: '#F59E0B' }}
                  />
                </button>

                {/* Dropdown panel */}
                {servicesOpen && (
                  <div
                    className="absolute top-full left-0 mt-2 w-[28rem] rounded p-4 z-[100]"
                    style={{
                      background: 'rgba(13,9,3,0.97)',
                      backdropFilter: 'blur(16px)',
                      border: '1px solid rgba(245,158,11,0.25)',
                      boxShadow: '0 20px 50px rgba(0,0,0,0.6)',
                    }}
                  >
                    {/* Accent stripe */}
                    <div className="stripe-amber animate-stripe-in" />

                    <div className="flex items-center gap-3 mb-4 pt-2">
                      <div className="accent-rule" />
                      <span className="font-display font-bold uppercase tracking-widest text-xs text-warning">
                        Our Services
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      {services.map((svc) => (
                        <Link
                          key={svc.name}
                          href={svc.path}
                          onClick={() => setServicesOpen(false)}
                          className="card-warm flex items-start gap-3 p-3 rounded group transition-all duration-200"
                        >
                          <div
                            className="flex items-center justify-center w-8 h-8 rounded flex-shrink-0"
                            style={{ background: 'rgba(245,158,11,0.12)' }}
                          >
                            <span className="text-warning">{svc.icon}</span>
                          </div>
                          <div className="min-w-0">
                            <div
                              className="font-display font-bold text-sm leading-tight mb-0.5 transition-colors duration-200"
                              style={{ color: '#F5F0E8' }}
                            >
                              {svc.shortName}
                            </div>
                            <div className="text-xs leading-snug" style={{ color: 'rgba(245,240,232,0.45)' }}>
                              {svc.description}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Regular nav links */}
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className="px-4 py-2 font-display font-bold uppercase tracking-wider text-sm transition-colors duration-200"
                  style={{ color: 'rgba(245,240,232,0.75)' }}
                >
                  {item.name}
                </Link>
              ))}

              {/* CTA */}
              <Link
                href="/contact"
                className="ml-4 px-6 py-2.5 font-display font-extrabold uppercase tracking-widest text-sm transition-opacity duration-200 hover:opacity-90 rounded"
                style={{ background: '#F59E0B', color: '#0D0903', letterSpacing: '0.08em' }}
              >
                Contact Us
              </Link>
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-2">
              <LanguageSwitcher />
              <button
                className="lg:hidden flex items-center justify-center h-10 w-10 rounded transition-colors duration-200"
                style={{ color: '#F5F0E8' }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── Mobile overlay ──────────────────────────────────────────────────── */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          style={{ background: 'rgba(13,9,3,0.7)', backdropFilter: 'blur(4px)' }}
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* ── Mobile Menu ─────────────────────────────────────────────────────── */}
      <div
        id="mobile-menu"
        ref={mobileMenuRef}
        className={`fixed left-0 right-0 lg:hidden z-40 transition-all duration-300 ease-in-out ${
          mobileMenuOpen
            ? 'translate-y-0 opacity-100'
            : '-translate-y-full opacity-0 pointer-events-none'
        }`}
        style={{
          top: scrolled ? '4rem' : '5rem',
          background: 'rgba(13,9,3,0.97)',
          backdropFilter: 'blur(16px)',
          borderBottom: '2px solid rgba(245,158,11,0.3)',
          boxShadow: '0 20px 50px rgba(0,0,0,0.6)',
        }}
      >
        {/* Decorative pattern */}
        <AfricanPatternBg />

        <div className="relative container px-4 py-6 mx-auto max-h-[calc(100vh-6rem)] overflow-y-auto">
          <nav className="space-y-8">

            {/* Services */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="accent-rule" />
                <span className="font-display font-bold uppercase tracking-widest text-xs text-warning">
                  Our Services
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {services.map((svc) => (
                  <Link
                    key={svc.name}
                    href={svc.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="card-warm flex items-center gap-3 p-4 rounded group transition-all duration-200"
                  >
                    <div
                      className="flex items-center justify-center w-9 h-9 rounded flex-shrink-0"
                      style={{ background: 'rgba(245,158,11,0.12)' }}
                    >
                      <span className="text-warning">{svc.icon}</span>
                    </div>
                    <div className="min-w-0">
                      <div
                        className="font-display font-bold text-sm transition-colors duration-200"
                        style={{ color: '#F5F0E8' }}
                      >
                        {svc.shortName}
                      </div>
                      <div className="text-xs mt-0.5 line-clamp-1" style={{ color: 'rgba(245,240,232,0.45)' }}>
                        {svc.description}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="accent-rule" />
                <span className="font-display font-bold uppercase tracking-widest text-xs text-warning">
                  Navigation
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="card-warm flex items-center gap-3 p-4 rounded group transition-all duration-200"
                  >
                    <div
                      className="flex items-center justify-center w-9 h-9 rounded flex-shrink-0"
                      style={{ background: 'rgba(245,158,11,0.08)' }}
                    >
                      <span className="text-warning">{item.icon}</span>
                    </div>
                    <span className="font-display font-bold text-sm" style={{ color: '#F5F0E8' }}>
                      {item.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact CTA */}
            <div style={{ borderTop: '1px solid rgba(245,158,11,0.15)', paddingTop: '1.5rem', paddingBottom: '0.5rem' }}>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-3 p-4 w-full font-display font-extrabold uppercase tracking-widest text-sm transition-opacity duration-200 hover:opacity-90 rounded"
                style={{ background: '#F59E0B', color: '#0D0903' }}
              >
                <Phone className="w-4 h-4" />
                Contact Us Today
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}