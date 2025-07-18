'use client';

import React, { useState, useEffect } from 'react';
import { portfolioProjects, packages } from '@/app/components/web/data';
import HeroSection from '@/app/components/web/Hero';
import ServicesSection from '@/app/components/web/Services';
import PortfolioSection from '@/app/components/web/Portifolio';
import PricingSection from '@/app/components/web/Pricing';
import CTASection from '@/app/components/web/CTA';

const WebDevelopmentServices = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-gray-900">
      <HeroSection />
      <ServicesSection />
      <PortfolioSection portfolioProjects={portfolioProjects} />
      <PricingSection packages={packages} />
      <CTASection />
    </div>
  );
};

export default WebDevelopmentServices;