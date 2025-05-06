'use client'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { LanguageSwitcher } from "@/app/components/LanguageSwitcher"
import { Menu, X, Mic2, Share2, Camera, Utensils, Users, ChevronDown } from 'lucide-react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const dropdownRef = useRef(null)
  const mobileMenuRef = useRef(null)

  // Detect scroll for header styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => { document.body.style.overflow = 'auto' }
  }, [mobileMenuOpen])
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [dropdownRef])

  const services = [
    { 
      name: "Web Design", 
      icon: <Camera className="w-5 h-5" />,
      path: "/services/web-design",
    },
    { 
      name: "Catering", 
      icon: <Utensils className="w-5 h-5" />,
      path: "/services/catering",
    },
    { 
      name: "Social Media", 
      icon: <Share2 className="w-5 h-5" />,
      path: "/services/social-media",
    },
    { 
      name: "MC Services", 
      icon: <Mic2 className="w-5 h-5" />,
      path: "/services/mc-services",
    },
  ]

  const navItems = [
    {
      name: "Portfolio",
      path: "/portfolio",
      icon: <Share2 className="w-5 h-5" />
    },
    {
      name: "Our Team",
      path: "/team",
      icon: <Users className="w-5 h-5" />
    }
  ]

  return (
    <header 
      className={`fixed z-40 w-full transition-all duration-300 ${
        scrolled 
          ? 'h-16 bg-brand-dark/95 backdrop-blur-md shadow-lg' 
          : 'h-20 bg-brand-dark/80 backdrop-blur-sm'
      } border-b border-brand-medium/20`}
    >
      <div className="container h-full px-4 mx-auto">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group" aria-label="Future Holders Home">
            <div className="flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-br from-brand-accent to-brand-accent/80 text-white shadow-glow">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M18.364 5.636L16.95 7.05A7 7 0 1 0 19 12h2a9 9 0 1 1-2.636-6.364z" />
              </svg>
            </div>
            <span className="text-xl font-serif font-bold text-white group-hover:text-brand-accent transition-colors duration-300">
              Future<span className="text-brand-accent">Holders</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center gap-1 px-3 py-2 rounded-lg text-brand-foam hover:text-white hover:bg-brand-medium/20 transition-colors"
              >
                Services <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-1 w-56 p-2 rounded-lg bg-brand-dark/95 backdrop-blur-md border border-brand-medium/30 shadow-xl">
                  <div className="grid grid-cols-1 gap-1">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.path}
                        className="flex items-center gap-3 p-2 rounded-md hover:bg-brand-medium/20 group transition-all"
                        onClick={() => setServicesOpen(false)}
                      >
                        <div className="p-1.5 rounded-md bg-brand-accent/10 text-brand-accent group-hover:bg-brand-accent/20 transition-colors">
                          {service.icon}
                        </div>
                        <span className="text-sm font-medium text-brand-foam group-hover:text-white transition-colors">
                          {service.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* Regular Nav Items */}
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="px-3 py-2 rounded-lg text-brand-foam hover:text-white hover:bg-brand-medium/20 transition-colors"
              >
                {item.name}
              </Link>
            ))}
            
            <Link
              href="/contact"
              className="ml-2 px-4 py-2 rounded-full bg-gradient-to-r from-brand-accent to-brand-accent/80 hover:from-brand-accent/90 hover:to-brand-accent/70 text-white font-medium transition-all shadow-glow hover:shadow-glow-hover"
            >
              Contact Us
            </Link>
          </nav>

          <div className="flex items-center gap-2 md:gap-4">
            <LanguageSwitcher />

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden flex items-center justify-center h-10 w-10 rounded-lg text-brand-foam hover:bg-brand-medium/20 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Overlay for mobile menu background */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
      
      {/* Simple Mobile Menu that slides down */}
      <div
        id="mobile-menu"
        ref={mobileMenuRef}
        className={`fixed inset-x-0 z-50 bg-brand-dark border-b border-brand-medium/30 shadow-xl lg:hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen
            ? 'translate-y-0 opacity-100'
            : '-translate-y-full opacity-0 pointer-events-none'
        }`}
        style={{ top: scrolled ? '4rem' : '5rem' }}
      >
        <div className="container px-4 py-6 mx-auto">
          <nav>
            <div className="grid gap-4 mb-6">
              <h3 className="text-xs uppercase tracking-wider text-brand-foam/60 font-medium px-2">
                Services
              </h3>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-2">
                {services.map((service) => (
                  <Link
                    key={service.name}
                    href={service.path}
                    className="flex items-center gap-3 p-3 rounded-lg bg-brand-medium/10 hover:bg-brand-medium/20 border border-brand-medium/20 transition-all"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="p-1.5 rounded-md bg-brand-accent/10 text-brand-accent">
                      {service.icon}
                    </div>
                    <span className="text-sm font-medium text-white">{service.name}</span>
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="grid gap-4">
              <h3 className="text-xs uppercase tracking-wider text-brand-foam/60 font-medium px-2">
                Navigation
              </h3>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.path}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-brand-medium/20 transition-all"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="p-1.5 rounded-md bg-brand-foam/10 text-brand-foam">
                      {item.icon}
                    </div>
                    <span className="text-sm font-medium text-white">{item.name}</span>
                  </Link>
                ))}
                
                <Link
                  href="/contact"
                  className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-brand-accent to-brand-accent/80 hover:opacity-90 text-white transition-all sm:col-span-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="text-sm font-medium">Contact Us</span>
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}