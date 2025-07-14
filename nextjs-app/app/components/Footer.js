'use client';

import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  // Show scroll to top button when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 200);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Translation content - enhanced for luxury design
  const content = {
    en: {
      description: "Bridging technology and hospitality for complete business solutions.",
      copyright: "All rights reserved.",
      links: [
        { name: "Services", path: "/services" },
        { name: "About", path: "/about" },
        { name: "Portfolio", path: "/portfolio" },
        { name: "Contact", path: "/contact" },
      ]
    },
    sw: {
      description: "Teknolojia na ukarimu kwa ufumbuzi kamili wa biashara.",
      copyright: "Haki zote zimehifadhiwa.",
      links: [
        { name: "Huduma", path: "/services" },
        { name: "Portfolio", path: "/portfolio" },
        { name: "Mawasiliano", path: "/contact" },
      ]
    }
  };

  const socials = [
    { icon: <Facebook className="w-5 h-5" />, path: "https://www.facebook.com/f.hmarketers", name: "Facebook" },
    { icon: <Instagram className="w-5 h-5" />, path: "https://www.instagram.com/fh_marketers/", name: "Instagram" },
    { icon: <Twitter className="w-5 h-5" />, path: "https://x.com/fh_marketers", name: "Twitter" },
    { icon: <Linkedin className='w-5 h-5' />, path: "https://www.linkedin.com/company/future-holders-company-limited/posts/?feedView=all", name: "LinkedIn" }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-brand-dark via-brand-deep to-brand-medium text-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        {/* Golden gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-gold/5 via-transparent to-brand-goldLight/5" />
        
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-brand-gold to-brand-goldLight rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-r from-brand-goldLight to-brand-gold rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}} />
          <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-brand-gold rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}} />
        </div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `
            linear-gradient(rgba(212, 175, 55, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212, 175, 55, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Main footer content */}
      <div className="relative z-10 container px-6 py-16 mx-auto">
        {/* Top decorative border */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent mb-12" />
        
        {/* Main content grid */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          
          {/* Company Info */}
          <div className="md:col-span-1 text-center md:text-left">
            <Link href="/" className="inline-flex items-center gap-3 mb-6 group">
              <div className="w-10 h-10 bg-gradient-to-r from-brand-gold to-brand-goldLight rounded-xl flex items-center justify-center shadow-gold group-hover:scale-110 transition-transform duration-300">
                <span className="text-brand-dark font-bold text-lg">FH</span>
              </div>
              <span className="text-2xl font-serif font-bold text-white group-hover:text-brand-goldLight transition-colors duration-300">
                Future Holders
              </span>
            </Link>
            
            <p className="text-brand-foam/80 text-base leading-relaxed mb-6 max-w-sm">
              {content.en.description}
            </p>
            
            {/* Contact info with icon */}
            <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-brand-gold/20 to-brand-goldLight/20 rounded-lg flex items-center justify-center">
                <Mail className="w-4 h-4 text-brand-goldLight" />
              </div>
              <a 
                href="mailto:info@futureholders.pro" 
                className="text-brand-foam/80 hover:text-brand-goldLight transition-colors duration-300 text-sm"
              >
                info@futureholders.pro
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="md:col-span-1 text-center">
            <h3 className="text-xl font-semibold text-brand-goldLight mb-6 relative">
              Quick Links
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-brand-gold to-brand-goldLight rounded-full" />
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              {content.en.links.map((link, index) => (
                <Link 
                  key={index} 
                  href={link.path} 
                  className="text-brand-foam/80 hover:text-brand-goldLight transition-all duration-300 text-sm py-2 px-4 rounded-lg hover:bg-brand-gold/10 transform hover:scale-105"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Social Media */}
          <div className="md:col-span-1 text-center">
            <h3 className="text-xl font-semibold text-brand-goldLight mb-6 relative">
              Connect With Us
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-brand-gold to-brand-goldLight rounded-full" />
            </h3>
            
            <div className="flex justify-center gap-4 mb-6">
              {socials.map((social, index) => (
                <a 
                  key={index} 
                  href={social.path} 
                  className="group relative"
                  aria-label={`${social.name} social media`}
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-gold to-brand-goldLight rounded-xl blur-md opacity-0 group-hover:opacity-50 transition-all duration-300 scale-110" />
                  
                  {/* Icon container */}
                  <div className="relative w-12 h-12 bg-gradient-to-r from-brand-gold/20 to-brand-goldLight/20 rounded-xl flex items-center justify-center border border-brand-gold/30 group-hover:border-brand-goldLight group-hover:bg-gradient-to-r group-hover:from-brand-gold/30 group-hover:to-brand-goldLight/30 transition-all duration-300 transform group-hover:scale-110 group-hover:-translate-y-1">
                    <div className="text-brand-foam/80 group-hover:text-brand-goldLight transition-colors duration-300">
                      {social.icon}
                    </div>
                  </div>
                </a>
              ))}
            </div>
            
            <p className="text-brand-foam/60 text-sm">
              Follow us for updates and insights
            </p>
          </div>
        </div>
        
        {/* Bottom decorative border */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent mb-8" />
        
        {/* Copyright and additional info */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-brand-foam/60 text-sm">
              © {new Date().getFullYear()} Future Holders. {content.en.copyright}
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-brand-foam/60 hover:text-brand-goldLight transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-brand-foam/60 hover:text-brand-goldLight transition-colors text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-brand-gold to-brand-goldLight rounded-full flex items-center justify-center shadow-gold hover:shadow-2xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 z-50 group"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 text-brand-dark group-hover:animate-bounce" />
        </button>
      )}
      
      {/* Bottom golden accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-gold via-brand-goldLight to-brand-gold" />
    </footer>
  );
}