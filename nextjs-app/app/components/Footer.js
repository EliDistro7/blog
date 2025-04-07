'use client';

import Link from 'next/link';
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { language } = useLanguage();

  // Translation content
  const content = {
    en: {
      description: "Tanzania's premier multi-service provider bridging technology and hospitality for complete business solutions.",
      servicesTitle: "Services",
      companyTitle: "Company",
      legalTitle: "Legal",
      contactTitle: "Contact",
      copyright: "All rights reserved.",
      services: [
        { name: "Web Design", path: "/services/web-design" },
        { name: "Catering", path: "/services/catering" },
        { name: "Social Media", path: "/services/social-media" },
        { name: "MC Services", path: "/services/mc-services" },
        { name: "Portfolio", path: "/portfolio" },
        { name: "Our Team", path: "/team" }
      ],
      company: [
        { name: "About Us", path: "/about" },
        { name: "Careers", path: "/careers" },
        { name: "Blog", path: "/blog" },
        { name: "Press", path: "/press" }
      ],
      legal: [
        { name: "Terms of Service", path: "/terms" },
        { name: "Privacy Policy", path: "/privacy" },
        { name: "Cookie Policy", path: "/cookies" }
      ]
    },
    sw: {
      description: "Kampuni ya Tanzania inayotoa huduma mbalimbali zinazounganisha teknolojia na ukaribu kwa ajili ya ufumbuzi kamili wa biashara.",
      servicesTitle: "Huduma",
      companyTitle: "Kampuni",
      legalTitle: "Kisheria",
      contactTitle: "Mawasiliano",
      copyright: "Haki zote zimehifadhiwa.",
      services: [
        { name: "Uundaji wa Tovuti", path: "/services/web-design" },
        { name: "Upishi", path: "/services/catering" },
        { name: "Mitandao ya Kijamii", path: "/services/social-media" },
        { name: "Huduma za MC", path: "/services/mc-services" },
        { name: "Portfolio", path: "/portfolio" },
        { name: "Timu Yetu", path: "/team" }
      ],
      company: [
        { name: "Kuhusu Sisi", path: "/about" },
        { name: "Kazi", path: "/careers" },
        { name: "Blogu", path: "/blog" },
        { name: "Taarifa", path: "/press" }
      ],
      legal: [
        { name: "Sheria za Huduma", path: "/terms" },
        { name: "Sera ya Faragha", path: "/privacy" },
        { name: "Sera ya Kuki", path: "/cookies" }
      ]
    }
  };

  const socials = [
    { icon: <Facebook className="w-5 h-5" />, path: "#" },
    { icon: <Instagram className="w-5 h-5" />, path: "#" },
    { icon: <Twitter className="w-5 h-5" />, path: "#" },
  
  ];

  return (
    <footer className="bg-brand-dark text-brand-foam border-t border-brand-medium/30">
      <div className="container px-4 py-16 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {/* Logo and description */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
           
              <span className="text-xl font-serif font-bold text-white group-hover:text-brand-accent transition-colors">
                Future Holders
              </span>
            </Link>
            <p className="text-brand-foam/80 mb-8 leading-relaxed">
              {content[language].description}
            </p>
            <div className="flex gap-4">
              {socials.map((social, index) => (
                <a 
                  key={index} 
                  href={social.path} 
                  className="text-brand-foam/70 hover:text-white transition-colors p-2 rounded-full hover:bg-brand-accent/20"
                  aria-label={`${social.icon.type.name} social media`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">{content[language].servicesTitle}</h3>
            <ul className="space-y-4">
              {content[language].services.map((service, index) => (
                <li key={index}>
                  <Link 
                    href={service.path} 
                    className="text-brand-foam/70 hover:text-brand-accent transition-colors text-lg"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">{content[language].companyTitle}</h3>
            <ul className="space-y-4">
              {content[language].company.map((item, index) => (
                <li key={index}>
                  <Link 
                    href={item.path} 
                    className="text-brand-foam/70 hover:text-brand-accent transition-colors text-lg"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal + Contact */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">{content[language].legalTitle}</h3>
            <ul className="space-y-4 mb-8">
              {content[language].legal.map((item, index) => (
                <li key={index}>
                  <Link 
                    href={item.path} 
                    className="text-brand-foam/70 hover:text-brand-accent transition-colors text-lg"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
         
          </div>
          <div className='flex flex-col justify-content-center'>
          <h3 className="text-md font-bold text-white mb-6">{content[language].contactTitle}</h3>
            <ul className="space-y-4">
              <li>
                <a href="mailto:info@futureholders.co.tz" className="text-brand-foam/70 hover:text-brand-accent transition-colors text-lg">
                  info@futureholders.net
                </a>
              </li>
              <li>
                <a href="tel:+255789000000" className="text-brand-foam/70 hover:text-brand-accent transition-colors text-lg">
                  +255 789 000 000
                </a>
              </li>
            </ul>
            </div>
        </div>

        {/* Divider */}
        <div className="border-t border-brand-medium/30 my-20"></div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-brand-foam/60 text-lg">
            © {new Date().getFullYear()} Future Holders. {content[language].copyright}
          </p>
          <div className="flex gap-8">
            <Link href="/privacy" className="text-brand-foam/60 hover:text-brand-accent text-lg transition-colors">
              {language === 'en' ? 'Privacy Policy' : 'Sera ya Faragha'}
            </Link>
            <Link href="/terms" className="text-brand-foam/60 hover:text-brand-accent text-lg transition-colors">
              {language === 'en' ? 'Terms of Service' : 'Sheria za Huduma'}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}