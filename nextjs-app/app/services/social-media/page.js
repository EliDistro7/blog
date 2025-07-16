'use client';

import React, { useState } from 'react';
import { 
  heroStats, 
  services, 
  process, 
  platforms, 
  currentClients, 
  contentTypes, 
  faqs, 
  pricingPlans, 
  industries 
} from '@/app/components/social/data';



import LanguageToggle from '@/app/components/social/LanguageToggle';
import HeroSection from '@/app/components/social/Hero';
import ServicesSection from '@/app/components/social/Services';
import ProcessSection from '@/app/components/social/Process';
import PlatformsSection from '@/app/components/social/Platforms';
import ClientSuccessSection from '@/app/components/social/ClientSuccess';
import PricingSection from '@/app/components/social/Pricing';
import FAQSection from '@/app/components/social/FAQS';
import CTASection from '@/app/components/social/CTA';
import { useLanguage } from '@/context/LanguageContext';

const SocialMediaServices = () => {
  const { language } = useLanguage();
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [selectedPlatform, setSelectedPlatform] = useState(0);

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'sw' : 'en');
  };

  return (
    <div className="min-h-screen bg-brand-dark text-white">
      
      
      <HeroSection language={language} heroStats={heroStats} />
      
      <ServicesSection language={language} services={services} />
      
      <ProcessSection language={language} process={process} />
      
      <PlatformsSection language={language} platforms={platforms} />
      
      <ClientSuccessSection language={language} currentClients={currentClients} />
      
      <PricingSection language={language} pricingPlans={pricingPlans} />
      
      <FAQSection 
        language={language} 
        faqs={faqs} 
        expandedFaq={expandedFaq} 
        toggleFaq={toggleFaq} 
      />
      
      <CTASection language={language} />
    </div>
  );
};

export default SocialMediaServices;