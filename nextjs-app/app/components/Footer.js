'use client';

import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { language } = useLanguage();

  // Translation content - simplified for minimalistic design
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
    { icon: <Facebook className="w-4 h-4" />, path: "#" },
    { icon: <Instagram className="w-4 h-4" />, path: "#" },
    { icon: <Twitter className="w-4 h-4" />, path: "#" },
  ];

  return (
    <footer className="bg-gradient-to-r from-brand-dark to-brand-deep text-brand-foam border-t border-brand-medium/20">
      <div className="container px-4 py-8 mx-auto">
        {/* Logo and description - simplified */}
        <div className="flex flex-col items-center text-center mb-6">
          <Link href="/" className="flex items-center gap-2 mb-3 group">
            <span className="text-xl font-serif font-bold text-white group-hover:text-brand-accent transition-colors">
              Future Holders
            </span>
          </Link>
          <p className="text-brand-foam/70 text-sm max-w-md mb-4">
            {content[language].description}
          </p>
          
          {/* Simplified Links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-6">
            {content[language].links.map((link, index) => (
              <Link 
                key={index} 
                href={link.path} 
                className="text-brand-foam/80 hover:text-brand-accent transition-colors text-sm"
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          {/* Contact - simplified */}
          <a href="mailto:info@futureholders.net" className="text-brand-foam/70 hover:text-brand-accent transition-colors text-sm mb-5">
            info@futureholders.pro
          </a>
          
          {/* Social icons */}
          <div className="flex gap-4 mb-6">
            {socials.map((social, index) => (
              <a 
                key={index} 
                href={social.path} 
                className="text-brand-foam/70 hover:text-brand-accent transition-colors p-1.5 rounded-full hover:bg-brand-medium/30"
                aria-label={`${social.icon.type.name} social media`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Divider - thinner */}
        <div className="border-t border-brand-medium/20 my-4"></div>

        {/* Copyright - simplified */}
        <div className="text-center">
          <p className="text-brand-foam/50 text-xs">
            © {new Date().getFullYear()} Future Holders. {content[language].copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}