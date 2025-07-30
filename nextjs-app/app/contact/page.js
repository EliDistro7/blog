'use client';

import { Libre_Baskerville, Source_Sans_3 as Source_Sans_Pro } from "next/font/google";
import { Mail, Phone, MapPin, Clock, Send, Camera, Utensils, Mic2, Share2, Users } from 'lucide-react';
import Link from "next/link";
import { useLanguage } from '@/context/LanguageContext';

const baskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-baskerville"
});

const sourceSans = Source_Sans_Pro({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-source-sans"
});

export default function ContactPage() {
  const { language } = useLanguage();

  // Translation content
  const content = {
    en: {
      hero: {
        title: "Connect With Future Holders",
        subtitle: "Reach out to our multi-disciplinary team for all your service needs"
      },
      form: {
        title: "Service Inquiry",
        labels: {
          name: "Full Name",
          email: "Email Address",
          service: "Service Needed",
          message: "Project Details",
          placeholder: "Tell us about your project needs..."
        },
        services: [
          { value: "", label: "Select a service" },
          { value: "web", label: "Web Design" },
     
          { value: "social", label: "Social Media" },
         
          { value: "team", label: "Team Services" }
        ],
        submit: "Send Inquiry"
      },
      serviceContacts: {
        title: "Service-Specific Contacts",
        items: [
          {
            title: "Web Design",
            details: "For website development and digital solutions",
            email: "web@futureholders.co.tz",
            phone: "+255 789 111 111"
          },
      
          {
            title: "Social Media",
            details: "For digital marketing and brand growth",
            email: "social@futureholders.co.tz",
            phone: "+255 789 333 333"
          },
       
        ]
      },
      companyContacts: {
        title: "Company Contacts",
        items: [
          {
            title: "General Inquiries",
            email: "info@futureholders.com",
            phone: "+255 745 787 370"
          },
      
        
        ]
      },
      cta: {
        title: "Meet Our Expert Team",
        subtitle: "Discover the talented professionals behind Future Holders diverse services",
        buttons: [
          { text: "View Our Team", href: "/team" },
          { text: "See Our Portfolio", href: "/portfolio" }
        ]
      }
    },
    sw: {
      hero: {
        title: "Wasiliana Na Future Holders",
        subtitle: "Pata huduma zote unazohitaji kutoka kwa timu yetu ya wataalamu"
      },
      form: {
        title: "Utafiti wa Huduma",
        labels: {
          name: "Jina Kamili",
          email: "Barua Pepe",
          service: "Huduma Unayohitaji",
          message: "Maelezo ya Mradi",
          placeholder: "Tuambie kuhusu mahitaji ya mradi wako..."
        },
        services: [
          { value: "", label: "Chagua huduma" },
          { value: "web", label: "Uundaji wa Tovuti" },
          { value: "catering", label: "Huduma za Upishi" },
          { value: "social", label: "Mitandao ya Kijamii" },
          { value: "mc", label: "Huduma za MC" },
          { value: "portfolio", label: "Maonyesho ya Portfolio" },
          { value: "team", label: "Huduma za Timu" }
        ],
        submit: "Tuma Utafiti"
      },
      serviceContacts: {
        title: "Mawasiliano ya Huduma Maalum",
        items: [
          {
            title: "Uundaji wa Tovuti",
            details: "Kwa uundaji wa tovuti na suluhisho za kidijitali",
            email: "web@futureholders.co.tz",
            phone: "+255 789 111 111"
          },
         
          {
            title: "Mitandao ya Kijamii",
            details: "Kwa uuzaji wa kidijitali na ukuaji wa chapa",
            email: "social@futureholders.co.tz",
            phone: "+255 789 333 333"
          },
     
        ]
      },
      companyContacts: {
        title: "Mawasiliano ya Kampuni",
        items: [
          {
            title: "Maswali ya Jumla",
            email: "info@futureholders.com",
            phone: "+255 789 000 000"
          },
          {
            title: "Kazi",
            email: "careers@futureholders.co.tz",
            phone: "+255 789 555 555"
          },
          {
            title: "Maonyesho ya Portfolio",
            email: "portfolio@futureholders.co.tz",
            phone: "+255 789 666 666"
          }
        ]
      },
      cta: {
        title: "Kutana Na Timu Yetu ya Wataalamu",
        subtitle: "Gundua wataalamu wenye vipaji nyuma ya huduma mbalimbali za Future Holders",
        buttons: [
          { text: "Tazama Timu Yetu", href: "/team" },
          { text: "Ona Portfolio Yetu", href: "/portfolio" }
        ]
      }
    }
  };

  // Service contacts with icons and colors (updated for dark/gold theme)
  const serviceContacts = content[language].serviceContacts.items.map((item, index) => {
    const icons = [
      <Camera key='camera-icon' className="w-5 h-5 text-brand-gold" />,
      <Utensils key='utensils-icon' className="w-5 h-5 text-brand-goldLight" />,
      <Share2 key='share-2' className="w-5 h-5 text-brand-gold" />,
      <Mic2 key='mic2' className="w-5 h-5 text-brand-goldLight" />
    ];
    const colors = [
      { bg: "bg-brand-gold/10", border: "border-brand-gold/30" },
      { bg: "bg-brand-goldLight/10", border: "border-brand-goldLight/30" },
      { bg: "bg-brand-gold/10", border: "border-brand-gold/30" },
      { bg: "bg-brand-goldLight/10", border: "border-brand-goldLight/30" }
    ];
    return { ...item, icon: icons[index], ...colors[index] };
  });

  return (
    <div className={`min-h-screen ${sourceSans.variable} font-sans bg-brand-dark text-white`}>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-brand-dark via-brand-deep to-brand-medium py-32 text-center">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/circuit-pattern.svg')] bg-[size:1200px]"></div>
        <div className="container relative z-10 px-4">
          <h1 className={`text-4xl md:text-6xl font-bold ${baskerville.variable} font-serif text-brand-gold mb-6`}>
            {content[language].hero.title}
          </h1>
          <p className="text-xl text-brand-goldLight/90 max-w-3xl mx-auto">
            {content[language].hero.subtitle}
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-brand-dark clip-path-wave"></div>
      </div>

      {/* Contact Content */}
      <div className="container py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-brand-deep rounded-xl shadow-gold border border-brand-gold/20 p-8">
            <h2 className={`text-3xl font-bold ${baskerville.variable} font-serif text-brand-gold mb-6`}>
              {content[language].form.title}
            </h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-brand-goldLight font-medium mb-2">
                    {content[language].form.labels.name}
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 rounded-lg bg-brand-medium border border-brand-gold/30 text-white placeholder-gray-400 focus:ring-2 focus:ring-brand-gold focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-brand-goldLight font-medium mb-2">
                    {content[language].form.labels.email}
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 rounded-lg bg-brand-medium border border-brand-gold/30 text-white placeholder-gray-400 focus:ring-2 focus:ring-brand-gold focus:border-transparent"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="service" className="block text-brand-goldLight font-medium mb-2">
                  {content[language].form.labels.service}
                </label>
                <select 
                  id="service" 
                  className="w-full px-4 py-3 rounded-lg bg-brand-medium border border-brand-gold/30 text-white focus:ring-2 focus:ring-brand-gold focus:border-transparent"
                >
                  {content[language].form.services.map((service, index) => (
                    <option key={`${index}-option`} value={service.value} className="bg-brand-medium text-white">
                      {service.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-brand-goldLight font-medium mb-2">
                  {content[language].form.labels.message}
                </label>
                <textarea 
                  id="message" 
                  rows={5} 
                  className="w-full px-4 py-3 rounded-lg bg-brand-medium border border-brand-gold/30 text-white placeholder-gray-400 focus:ring-2 focus:ring-brand-gold focus:border-transparent"
                  placeholder={content[language].form.labels.placeholder}
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="flex items-center justify-center gap-2 px-8 py-4 bg-brand-gold hover:bg-brand-goldLight text-brand-dark font-bold rounded-lg transition-all duration-300 shadow-gold hover:shadow-glow"
              >
                <Send className="w-5 h-5" />
                {content[language].form.submit}
              </button>
            </form>
          </div>

          {/* Service Contacts */}
          <div className="space-y-6">
            <div className="bg-brand-deep rounded-xl shadow-gold border border-brand-gold/20 p-6">
              <h2 className={`text-2xl font-bold ${baskerville.variable} font-serif text-brand-gold mb-6`}>
                {content[language].serviceContacts.title}
              </h2>
              <div className="space-y-4">
                {serviceContacts.map((service, index) => (
                  <div 
                    key={`${index}-service-contacts`} 
                    className={`p-4 rounded-lg ${service.bg} border ${service.border} bg-brand-medium/50`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-2 rounded-md bg-brand-gold/20`}>
                        {service.icon}
                      </div>
                      <h3 className="font-bold text-brand-goldLight">{service.title}</h3>
                    </div>
                    <p className="text-gray-300 mb-3 text-sm">{service.details}</p>
                    <div className="space-y-2">
                      <Link 
                        href={`mailto:${service.email}`} 
                        className="flex items-center gap-2 text-brand-goldLight hover:text-brand-gold text-sm transition-colors"
                      >
                        <Mail className="w-4 h-4" />
                        {service.email}
                      </Link>
                      <Link 
                        href={`tel:${service.phone.replace(/\D/g, '')}`} 
                        className="flex items-center gap-2 text-brand-goldLight hover:text-brand-gold text-sm transition-colors"
                      >
                        <Phone className="w-4 h-4" />
                        {service.phone}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* General Contacts */}
            <div className="bg-brand-deep rounded-xl shadow-gold border border-brand-gold/20 p-6">
              <h2 className={`text-2xl font-bold ${baskerville.variable} font-serif text-brand-gold mb-6`}>
                {content[language].companyContacts.title}
              </h2>
              <div className="space-y-4">
                {content[language].companyContacts.items.map((info, index) => (
                  <div key={`${index}-company-contacts`} className="p-4 rounded-lg bg-brand-medium/50 border border-brand-gold/20">
                    <h3 className="font-bold text-brand-goldLight mb-2">{info.title}</h3>
                    <div className="space-y-2">
                      <a 
                        href={`mailto:${info.email}`} 
                        className="flex items-center gap-2 text-brand-goldLight hover:text-brand-gold text-sm transition-colors"
                      >
                        <Mail className="w-4 h-4" />
                        {info.email}
                      </a>
                      <a 
                        href={`tel:${info.phone.replace(/\D/g, '')}`} 
                        className="flex items-center gap-2 text-brand-goldLight hover:text-brand-gold text-sm transition-colors"
                      >
                        <Phone className="w-4 h-4" />
                        {info.phone}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team CTA */}
      <div className="bg-gradient-to-r from-brand-gold to-brand-goldLight py-16 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className={`text-3xl font-bold ${baskerville.variable} font-serif text-brand-dark mb-6`}>
            {content[language].cta.title}
          </h2>
          <p className="text-brand-goldDark mb-8 text-lg max-w-2xl mx-auto">
            {content[language].cta.subtitle}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {content[language].cta.buttons.map((button, index) => (
              <Link
                key={`${index}-team-cta`}
                href={button.href}
                className={`inline-flex items-center justify-center gap-2 font-bold px-8 py-4 rounded-lg transition-all duration-300 shadow-depth hover:shadow-glow ${
                  index === 0 
                    ? 'bg-brand-dark text-brand-gold hover:bg-brand-deep border-2 border-brand-dark' 
                    : 'bg-white text-brand-goldDark hover:bg-gray-100 border-2 border-white'
                }`}
              >
                {index === 0 ? <Users className="w-5 h-5" /> : <Camera className="w-5 h-5" />}
                {button.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}