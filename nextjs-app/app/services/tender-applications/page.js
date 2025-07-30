

'use client';

import React, { useState } from 'react';
import { 
  tenderHeroStats, 
  tenderServices, 
  tenderProcess, 
  tenderTypes, 
  successfulTenders, 
  documentTypes, 
  tenderFaqs, 
  tenderPricingPlans, 
  tenderIndustries 
} from '@/app/components/tender/data';

import LanguageToggle from '@/app/components/tender/LanguageToggle';
import TenderHeroSection from '@/app/components/tender/Hero';
import TenderServicesSection from '@/app/components/tender/Services';
import TenderProcessSection from '@/app/components/tender/Process';
import TenderTypesSection from '@/app/components/tender/TenderTypes';
import TenderSuccessSection from '@/app/components/tender/TenderSuccess';
import TenderPricingSection from '@/app/components/tender/Pricing';
import TenderFAQSection from '@/app/components/tender/FAQS';
import TenderCTASection from '@/app/components/tender/CTA';
import { useLanguage } from '@/context/LanguageContext';

const TenderApplicationServices = () => {
  const { language } = useLanguage();
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [selectedTenderType, setSelectedTenderType] = useState(0);

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'sw' : 'en');
  };

  return (
    <div className="min-h-screen bg-brand-dark text-white">
      
      <TenderHeroSection language={language} heroStats={tenderHeroStats} />
      
      <TenderServicesSection language={language} services={tenderServices} />
      
      <TenderProcessSection language={language} process={tenderProcess} />
      
      <TenderTypesSection 
        language={language} 
        tenderTypes={tenderTypes}
        selectedTenderType={selectedTenderType}
        setSelectedTenderType={setSelectedTenderType}
      />
      
      <TenderSuccessSection language={language} successfulTenders={successfulTenders} />
      
      <TenderPricingSection language={language} pricingPlans={tenderPricingPlans} />
      
      <TenderFAQSection 
        language={language} 
        faqs={tenderFaqs} 
        expandedFaq={expandedFaq} 
        toggleFaq={toggleFaq} 
      />
      
      <TenderCTASection language={language} />
    </div>
  );
};

export default TenderApplicationServices;