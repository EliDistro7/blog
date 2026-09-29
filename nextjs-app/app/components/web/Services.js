'use client';

import { Globe, Smartphone, Search, Users, BarChart3, Shield } from 'lucide-react';
import {
  AMBER, GOLD, SURFACE, CREAM, MUTED,
  AfricanPattern, SectionHead, useLang,
} from './shared';

const copy = {
  en: {
    label: 'What we build',
    title: 'Our web development services',
    subtitle: 'Comprehensive web solutions tailored to your business needs.',
  },
  sw: {
    label: 'Tunachojenga',
    title: 'Huduma zetu za ujenzi wa tovuti',
    subtitle: 'Suluhisho kamili za tovuti zinazolingana na mahitaji ya biashara yako.',
  },
};

const services = [
  {
    Icon: Globe,
    title: { en: 'Website development', sw: 'Ujenzi wa tovuti' },
    description: {
      en: 'Custom websites built with modern technologies and best practices.',
      sw: 'Tovuti maalum zilizojengwa kwa teknolojia za kisasa na mbinu bora.',
    },
  },
  {
    Icon: Smartphone,
    title: { en: 'Mobile responsive', sw: 'Zinafanya kazi kwenye simu' },
    description: {
      en: 'Websites that work perfectly on all devices and screen sizes.',
      sw: 'Tovuti zinazofanya kazi vizuri kwenye vifaa vyote na ukubwa wote wa skrini.',
    },
  },
  {
    Icon: Search,
    title: { en: 'SEO optimization', sw: 'Uboreshaji wa SEO' },
    description: {
      en: 'Built-in SEO features to help your website rank higher in search results.',
      sw: 'Vipengele vya SEO vilivyojengewa ndani kusaidia tovuti yako kuonekana juu kwenye matokeo ya utafutaji.',
    },
  },
  {
    Icon: Users,
    title: { en: 'User experience', sw: 'Uzoefu wa mtumiaji' },
    description: {
      en: 'Intuitive designs that provide exceptional user experiences.',
      sw: 'Muundo rahisi kutumia unaotoa uzoefu bora kwa mtumiaji.',
    },
  },
  {
    Icon: BarChart3,
    title: { en: 'Analytics & insights', sw: 'Takwimu na uchambuzi' },
    description: {
      en: 'Track your website performance with detailed analytics.',
      sw: 'Fuatilia utendaji wa tovuti yako kwa takwimu za kina.',
    },
  },
  {
    Icon: Shield,
    title: { en: 'Security & maintenance', sw: 'Usalama na matengenezo' },
    description: {
      en: 'Secure hosting with regular updates and maintenance.',
      sw: 'Hosting salama na masasisho na matengenezo ya mara kwa mara.',
    },
  },
];

export default function ServicesSection() {
  const { lang, tr } = useLang();
  const c = copy[lang];

  return (
    <section
      id="services"
      aria-labelledby="web-services-title"
      className="relative overflow-hidden pb-24 scroll-mt-24"
      style={{ background: SURFACE }}
    >
      <AfricanPattern id="webSvcPattern" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHead id="web-services-title" label={c.label} title={c.title} subtitle={c.subtitle} />

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
          {services.map(({ Icon, title, description }, i) => {
            const accent = i % 2 === 0 ? AMBER : GOLD;
            return (
              <li key={title.en} className="pt-5" style={{ borderTop: `2px solid ${accent}` }}>
                <Icon size={22} aria-hidden="true" style={{ color: accent }} />
                <h3
                  className="font-display font-extrabold mt-4"
                  style={{ fontSize: '1.6rem', lineHeight: 1.08, color: CREAM, letterSpacing: '-0.02em' }}
                >
                  {tr(title)}
                </h3>
                <p className="mt-3 leading-relaxed" style={{ color: MUTED, fontSize: '1rem' }}>
                  {tr(description)}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}