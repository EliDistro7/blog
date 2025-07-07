'use client'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { LanguageSwitcher } from "@/app/components/LanguageSwitcher"
import { Menu, X, Share2, Smartphone, Globe, Users, ChevronDown, DoorOpen, MessageCircle, Phone, FileText, ShoppingCart, Palette } from 'lucide-react'

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
      name: "Door-to-Door Marketing", 
      shortName: "Door-to-Door",
      icon: <DoorOpen className="w-5 h-5" />,
      path: "/services/door-to-door",
      description: "Personal engagement & direct sales",
      gradient: "from-brand-accent to-brand-teal"
    },
    { 
      name: "Social Media Management", 
      shortName: "Social Media",
      icon: <Share2 className="w-5 h-5" />,
      path: "/services/social-media",
      description: "Complete digital presence management",
      gradient: "from-brand-coral to-brand-gold"
    },
    { 
      name: "App Development", 
      shortName: "App Building",
      icon: <Smartphone className="w-5 h-5" />,
      path: "/services/app-development",
      description: "Custom mobile applications",
      gradient: "from-brand-teal to-brand-accent"
    },
    { 
      name: "Web Development", 
      shortName: "Web Building",
      icon: <Globe className="w-5 h-5" />,
      path: "/services/web-development",
      description: "Professional websites & e-commerce",
      gradient: "from-brand-gold to-brand-coral"
    },
    { 
      name: "Tender Applications", 
      shortName: "Tender Apps",
      icon: <FileText className="w-5 h-5" />,
      path: "/services/tender-applications",
      description: "Professional tender & proposal writing",
      gradient: "from-brand-accent to-brand-gold"
    },
    { 
      name: "Equipment Sales", 
      shortName: "Equipment",
      icon: <ShoppingCart className="w-5 h-5" />,
      path: "/services/equipment-sales",
      description: "Quality equipment & supply solutions",
      gradient: "from-brand-teal to-brand-coral"
    },
    { 
      name: "Branding", 
      shortName: "Branding",
      icon: <Palette className="w-5 h-5" />,
      path: "/services/branding",
      description: "Complete brand identity & design",
      gradient: "from-brand-coral to-brand-accent"
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
    },
    {
      name: "About Us",
      path: "/about",
      icon: <MessageCircle className="w-5 h-5" />
    }
  ]

  return (
    <header 
      className={`fixed z-40 w-full transition-all duration-300 ${
        scrolled 
          ? 'h-16 bg-brand-dark/95 backdrop-blur-md shadow-depth border-b border-brand-gold/20' 
          : 'h-20 bg-brand-dark/80 backdrop-blur-sm border-b border-brand-medium/20'
      }`}
    >
      <div className="container h-full px-4 mx-auto">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group" aria-label="Future Holders Home">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-brand-accent via-brand-gold to-brand-coral shadow-glow group-hover:shadow-gold transition-all duration-300">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-accent/20 to-brand-coral/20 animate-pulse" />
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white relative z-10">
                <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" />
                <path d="M12 8v8m-4-4h8" stroke="currentColor" strokeWidth="1.5" fill="none" />
              </svg>
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold text-white group-hover:text-brand-gold transition-colors duration-300">
                Future<span className="text-brand-gold">Holders</span>
              </span>
              <div className="text-xs text-brand-foam/60 font-medium -mt-1">
                Marketing Solutions
              </div>
            </div>
            <span className="sm:hidden text-lg font-bold text-white group-hover:text-brand-gold transition-colors duration-300">
              Future<span className="text-brand-gold">H</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center gap-1 px-4 py-2 rounded-lg text-brand-foam hover:text-white hover:bg-brand-medium/20 transition-all duration-300 group"
              >
                <span className="font-medium">Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''} group-hover:text-brand-gold`} />
              </button>
              
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-96 p-3 rounded-xl bg-brand-dark/95 backdrop-blur-md border border-brand-gold/20 shadow-depth">
                  <div className="mb-2">
                    <h3 className="text-sm font-semibold text-brand-gold mb-1">Our Services</h3>
                    <p className="text-xs text-brand-foam/60">Complete marketing solutions for your business</p>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.path}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-brand-medium/20 group transition-all duration-300 border border-transparent hover:border-brand-gold/20"
                        onClick={() => setServicesOpen(false)}
                      >
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${service.gradient} opacity-80 group-hover:opacity-100 transition-opacity duration-300`}>
                          {service.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium text-white group-hover:text-brand-gold transition-colors duration-300">
                            {service.shortName}
                          </h4>
                          <p className="text-xs text-brand-foam/60 mt-1">
                            {service.description}
                          </p>
                        </div>
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
                className="px-4 py-2 rounded-lg text-brand-foam hover:text-white hover:bg-brand-medium/20 transition-all duration-300 font-medium group"
              >
                <span className="group-hover:text-brand-gold transition-colors duration-300">
                  {item.name}
                </span>
              </Link>
            ))}
            
            <Link
              href="/contact"
              className="ml-3 px-6 py-2 rounded-full bg-gradient-to-r from-brand-gold to-brand-coral hover:from-brand-coral hover:to-brand-gold text-white font-semibold transition-all duration-300 shadow-glow hover:shadow-gold transform hover:-translate-y-0.5"
            >
              Contact Us
            </Link>
          </nav>

          <div className="flex items-center gap-2 md:gap-3">
            <LanguageSwitcher />

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden flex items-center justify-center h-10 w-10 rounded-lg text-brand-foam hover:bg-brand-medium/20 hover:text-brand-gold transition-all duration-300"
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
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
      
      {/* Enhanced Mobile Menu */}
      <div
        id="mobile-menu"
        ref={mobileMenuRef}
        className={`fixed inset-x-0 z-50 bg-brand-dark/95 backdrop-blur-md border-b border-brand-gold/20 shadow-depth lg:hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen
            ? 'translate-y-0 opacity-100'
            : '-translate-y-full opacity-0 pointer-events-none'
        }`}
        style={{ top: scrolled ? '4rem' : '5rem' }}
      >
        <div className="container px-4 py-6 mx-auto max-h-[calc(100vh-6rem)] overflow-y-auto">
          <nav className="space-y-6">
            {/* Services Section */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-brand-gold to-brand-coral flex items-center justify-center">
                  <Share2 className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Our Services</h3>
                  <p className="text-xs text-brand-foam/60">Complete marketing solutions</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {services.map((service) => (
                  <Link
                    key={service.name}
                    href={service.path}
                    className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-brand-medium/10 to-brand-medium/5 hover:from-brand-medium/20 hover:to-brand-medium/10 border border-brand-medium/20 hover:border-brand-gold/30 transition-all duration-300 group"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className={`p-2.5 rounded-lg bg-gradient-to-r ${service.gradient} shadow-glow`}>
                      {service.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold text-white group-hover:text-brand-gold transition-colors duration-300">
                        {service.shortName}
                      </h4>
                      <p className="text-xs text-brand-foam/60 mt-1 line-clamp-2">
                        {service.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Navigation Section */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-brand-accent to-brand-teal flex items-center justify-center">
                  <Users className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Navigation</h3>
                  <p className="text-xs text-brand-foam/60">Explore our company</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.path}
                    className="flex items-center gap-3 p-4 rounded-xl bg-brand-medium/10 hover:bg-brand-medium/20 border border-brand-medium/20 hover:border-brand-gold/30 transition-all duration-300 group"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="p-2.5 rounded-lg bg-brand-foam/10 text-brand-foam group-hover:bg-brand-gold/20 group-hover:text-brand-gold transition-all duration-300">
                      {item.icon}
                    </div>
                    <span className="text-sm font-semibold text-white group-hover:text-brand-gold transition-colors duration-300">
                      {item.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Section */}
            <div className="pt-4 border-t border-brand-medium/20">
              <Link
                href="/contact"
                className="flex items-center justify-center gap-3 p-4 rounded-xl bg-gradient-to-r from-brand-gold to-brand-coral hover:from-brand-coral hover:to-brand-gold text-white font-semibold transition-all duration-300 shadow-glow hover:shadow-gold group"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span>Contact Us Today</span>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}