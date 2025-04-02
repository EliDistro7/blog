'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X, Mic2, Share2, Camera, Utensils, Users } from 'lucide-react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'auto'
    return () => { document.body.style.overflow = 'auto' }
  }, [mobileMenuOpen])

  const services = [
    { 
      name: "Web Design", 
      icon: <Camera className="w-5 h-5 text-brand-accent" />, // Now colored!
      path: "/services/web-design",
      bg: "bg-brand-accent/10",
      border: "border-brand-accent/30",
      iconBg: "bg-brand-accent/20"
    },
    { 
      name: "Catering", 
      icon: <Utensils className="w-5 h-5 text-brand-coral" />, // Now colored!
      path: "/services/catering",
      bg: "bg-brand-coral/10",
      border: "border-brand-coral/30",
      iconBg: "bg-brand-coral/20"
    },
    { 
      name: "Social Media", 
      icon: <Share2 className="w-5 h-5 text-brand-teal" />, // Now colored!
      path: "/services/social-media",
      bg: "bg-brand-teal/10",
      border: "border-brand-teal/30",
      iconBg: "bg-brand-teal/20"
    },
    { 
      name: "MC Services", 
      icon: <Mic2 className="w-5 h-5 text-brand-foam" />, // Now colored!
      path: "/services/mc-services",
      bg: "bg-brand-foam/10",
      border: "border-brand-foam/30",
      iconBg: "bg-brand-foam/20"
    },
    { 
      name: "Portfolio", 
      icon: <Share2 className="w-5 h-5 text-brand-teal" />, // Now colored!
      path: "/portifolio",
      bg: "bg-brand-teal/10",
      border: "border-brand-teal/30",
      iconBg: "bg-brand-teal/20"
    },
    { 
      name: "Our Team", 
      icon: <Users className="w-5 h-5 text-brand-teal" />, // Now colored!
      path: "/team",
      bg: "bg-brand-teal/10",
      border: "border-brand-teal/30",
      iconBg: "bg-brand-teal/20"
    },
   
  ]

  return (
    <header className="w-full h-20 bg-brand-dark/95 backdrop-blur-md border-b border-brand-medium/30 sticky top-0 z-50">
      <div className="container h-full px-4 sm:px-6 mx-auto">
        <div className="flex items-center justify-between h-full gap-5">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" aria-label="Future Holders Home">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-accent text-white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M18.364 5.636L16.95 7.05A7 7 0 1 0 19 12h2a9 9 0 1 1-2.636-6.364z" />
              </svg>
            </div>
            <span className="text-xl font-serif font-bold text-brand-foam group-hover:text-brand-accent transition-colors">
              Future Holders
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-4">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.path}
                    className={`flex items-center gap-2 text-brand-foam hover:text-white px-3 py-2 rounded-lg transition-colors ${service.bg} hover:${service.bg.replace('10', '30')}`}
                  >
                    {service.icon}
                    <span>{service.name}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="ml-4 px-4 py-2 rounded-full bg-brand-accent hover:bg-brand-accent/90 text-white font-bold transition-colors shadow-depth"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-brand-foam p-2 rounded-lg hover:bg-brand-dark/30 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay - Now with proper background */}
  
      <div className={`fixed inset-0 z-40 transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}
           style={{ top: '5rem' }}>
        <div className="absolute inset-0 bg-brand-dark/95 backdrop-blur-lg"></div>
        
        <div className="relative container h-[calc(100vh-5rem)] flex flex-col justify-start items-center gap-6 px-6 py-8 overflow-y-auto bg-brand-dark border-t border-brand-medium/30">
          <nav className="w-full">
            <ul className="flex flex-col items-center gap-4">
              {services.map((service) => (
                <li key={service.name} className="w-full max-w-xs">
                  <Link
                    href={service.path}
                    className={`flex items-center gap-4 p-4 rounded-xl transition-all w-full ${service.bg} border ${service.border} hover:${service.bg.replace('10', '20')}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className={`p-2 rounded-lg ${service.iconBg}`}>
                      {service.icon} {/* Now properly colored */}
                    </div>
                    <span className="text-lg font-medium text-brand-foam">{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="mt-4 w-full max-w-xs">
            <Link
              href="/contact"
              className="block w-full px-6 py-3 text-center rounded-full bg-brand-accent hover:bg-brand-accent/90 text-white font-bold transition-colors shadow-depth"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}