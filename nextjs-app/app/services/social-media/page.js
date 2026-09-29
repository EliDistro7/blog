// Sections read their own data and language, so the page only composes them.
// (No 'use client' needed here; the sections are client components.)
import HeroSection from '@/app/components/social/Hero';
import ServicesSection from '@/app/components/social/Services';
import ProcessSection from '@/app/components/social/Process';
import PlatformsSection from '@/app/components/social/Platforms';
import ClientSuccessSection from '@/app/components/social/ClientSuccess';
import PricingSection from '@/app/components/social/Pricing';
import FAQSection from '@/app/components/social/FAQS';
import CTASection from '@/app/components/social/CTA';

export default function SocialMediaServices() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <PlatformsSection />
      <ClientSuccessSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
    </>
  );
}