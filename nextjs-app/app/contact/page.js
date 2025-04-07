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
          { value: "catering", label: "Catering Services" },
          { value: "social", label: "Social Media" },
          { value: "mc", label: "MC Services" },
          { value: "portfolio", label: "Portfolio Showcase" },
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
            title: "Catering Services",
            details: "For event catering and culinary inquiries",
            email: "catering@futureholders.co.tz",
            phone: "+255 789 222 222"
          },
          {
            title: "Social Media",
            details: "For digital marketing and brand growth",
            email: "social@futureholders.co.tz",
            phone: "+255 789 333 333"
          },
          {
            title: "MC Services",
            details: "For event hosting and entertainment bookings",
            email: "events@futureholders.co.tz",
            phone: "+255 789 444 444"
          }
        ]
      },
      companyContacts: {
        title: "Company Contacts",
        items: [
          {
            title: "General Inquiries",
            email: "info@futureholders.co.tz",
            phone: "+255 789 000 000"
          },
          {
            title: "Careers",
            email: "careers@futureholders.co.tz",
            phone: "+255 789 555 555"
          },
          {
            title: "Portfolio Showcase",
            email: "portfolio@futureholders.co.tz",
            phone: "+255 789 666 666"
          }
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
            title: "Huduma za Upishi",
            details: "Kwa upishi wa hafla na maswali ya upishi",
            email: "catering@futureholders.co.tz",
            phone: "+255 789 222 222"
          },
          {
            title: "Mitandao ya Kijamii",
            details: "Kwa uuzaji wa kidijitali na ukuaji wa chapa",
            email: "social@futureholders.co.tz",
            phone: "+255 789 333 333"
          },
          {
            title: "Huduma za MC",
            details: "Kwa uandaa wa matukio na uhifadhi wa burudani",
            email: "events@futureholders.co.tz",
            phone: "+255 789 444 444"
          }
        ]
      },
      companyContacts: {
        title: "Mawasiliano ya Kampuni",
        items: [
          {
            title: "Maswali ya Jumla",
            email: "info@futureholders.co.tz",
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

  // Service contacts with icons and colors
  const serviceContacts = content[language].serviceContacts.items.map((item, index) => {
    const icons = [
      <Camera className="w-5 h-5 text-brand-accent" />,
      <Utensils className="w-5 h-5 text-brand-coral" />,
      <Share2 className="w-5 h-5 text-brand-teal" />,
      <Mic2 className="w-5 h-5 text-brand-foam" />
    ];
    const colors = [
      { bg: "bg-brand-accent/10", border: "border-brand-accent/30" },
      { bg: "bg-brand-coral/10", border: "border-brand-coral/30" },
      { bg: "bg-brand-teal/10", border: "border-brand-teal/30" },
      { bg: "bg-brand-foam/10", border: "border-brand-foam/30" }
    ];
    return { ...item, icon: icons[index], ...colors[index] };
  });

  return (
    <div className={`min-h-screen ${sourceSans.variable} font-sans bg-brand-foam text-brand-dark`}>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-brand-dark to-brand-blue py-32 text-center">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/circuit-pattern.svg')] bg-[size:1200px]"></div>
        <div className="container relative z-10 px-4">
          <h1 className={`text-4xl md:text-6xl font-bold ${baskerville.variable} font-serif text-white mb-6`}>
            {content[language].hero.title}
          </h1>
          <p className="text-xl text-brand-foam/90 max-w-3xl mx-auto">
            {content[language].hero.subtitle}
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-brand-foam clip-path-wave"></div>
      </div>

      {/* Contact Content */}
      <div className="container py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-depth p-8 border border-brand-foam/20">
            <h2 className={`text-3xl font-bold ${baskerville.variable} font-serif text-brand-dark mb-6`}>
              {content[language].form.title}
            </h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-brand-dark font-medium mb-2">
                    {content[language].form.labels.name}
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 rounded-lg border border-brand-foam/30 focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-brand-dark font-medium mb-2">
                    {content[language].form.labels.email}
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 rounded-lg border border-brand-foam/30 focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="service" className="block text-brand-dark font-medium mb-2">
                  {content[language].form.labels.service}
                </label>
                <select 
                  id="service" 
                  className="w-full px-4 py-3 rounded-lg border border-brand-foam/30 focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                >
                  {content[language].form.services.map((service, index) => (
                    <option key={index} value={service.value}>{service.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-brand-dark font-medium mb-2">
                  {content[language].form.labels.message}
                </label>
                <textarea 
                  id="message" 
                  rows={5} 
                  className="w-full px-4 py-3 rounded-lg border border-brand-foam/30 focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                  placeholder={content[language].form.labels.placeholder}
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="flex items-center justify-center gap-2 px-8 py-4 bg-brand-blue hover:bg-brand-accent text-white font-bold rounded-lg transition-all duration-300 shadow-depth hover:shadow-glow"
              >
                <Send className="w-5 h-5" />
                {content[language].form.submit}
              </button>
            </form>
          </div>

          {/* Service Contacts */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-depth p-6 border border-brand-foam/20">
              <h2 className={`text-2xl font-bold ${baskerville.variable} font-serif text-brand-dark mb-6`}>
                {content[language].serviceContacts.title}
              </h2>
              <div className="space-y-4">
                {serviceContacts.map((service, index) => (
                  <div 
                    key={index} 
                    className={`p-4 rounded-lg ${service.bg} border ${service.border}`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-2 rounded-md ${service.bg.replace('10', '20')}`}>
                        {service.icon}
                      </div>
                      <h3 className="font-bold text-brand-dark">{service.title}</h3>
                    </div>
                    <p className="text-brand-dark/80 mb-3 text-sm">{service.details}</p>
                    <div className="space-y-2">
                      <Link 
                        href={`mailto:${service.email}`} 
                        className="flex items-center gap-2 text-brand-dark hover:text-brand-accent text-sm"
                      >
                        <Mail className="w-4 h-4" />
                        {service.email}
                      </Link>
                      <Link 
                        href={`tel:${service.phone.replace(/\D/g, '')}`} 
                        className="flex items-center gap-2 text-brand-dark hover:text-brand-accent text-sm"
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
            <div className="bg-white rounded-xl shadow-depth p-6 border border-brand-foam/20">
              <h2 className={`text-2xl font-bold ${baskerville.variable} font-serif text-brand-dark mb-6`}>
                {content[language].companyContacts.title}
              </h2>
              <div className="space-y-4">
                {content[language].companyContacts.items.map((info, index) => (
                  <div key={index} className="p-4 rounded-lg bg-brand-foam/10 border border-brand-foam/30">
                    <h3 className="font-bold text-brand-dark mb-2">{info.title}</h3>
                    <div className="space-y-2">
                      <a 
                        href={`mailto:${info.email}`} 
                        className="flex items-center gap-2 text-brand-dark hover:text-brand-accent text-sm"
                      >
                        <Mail className="w-4 h-4" />
                        {info.email}
                      </a>
                      <a 
                        href={`tel:${info.phone.replace(/\D/g, '')}`} 
                        className="flex items-center gap-2 text-brand-dark hover:text-brand-accent text-sm"
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
      <div className="bg-gradient-to-r from-brand-blue to-brand-accent py-16 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className={`text-3xl font-bold ${baskerville.variable} font-serif text-white mb-6`}>
            {content[language].cta.title}
          </h2>
          <p className="text-brand-foam/90 mb-8 text-lg max-w-2xl mx-auto">
            {content[language].cta.subtitle}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {content[language].cta.buttons.map((button, index) => (
              <Link
                key={index}
                href={button.href}
                className={`inline-flex items-center justify-center gap-2 font-bold px-8 py-4 rounded-lg transition-all duration-300 shadow-depth hover:shadow-glow ${
                  index === 0 
                    ? 'bg-white text-brand-dark hover:bg-brand-foam' 
                    : 'bg-brand-dark text-white hover:bg-brand-deep'
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