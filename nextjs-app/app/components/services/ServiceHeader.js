'use client';

import { useLanguage } from '@/context/LanguageContext';

const headerContent = {
  en: {
    title: "Our Premium",
    highlight: "Services",
    subtitle: "Tailored solutions to help your business thrive in the digital world."
  },
  sw: {
    title: "Huduma Zetu",
    highlight: "Bora",
    subtitle: "Suluhisho maalum kusaidia biashara yako kustawi katika ulimwengu wa kidijitali."
  }
};

export default function ServiceHeader({
  bgClass = "bg-gradient-to-br from-brand-dark to-brand-deep"
}) {
  const { language } = useLanguage();

  return (
    <section className={`relative ${bgClass} text-white py-28 px-4`}>
      <div className="container mx-auto text-center max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif">
          {headerContent[language].title}{' '}
          <span className="text-brand-accent">{headerContent[language].highlight}</span>
        </h1>
        <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto">
          {headerContent[language].subtitle}
        </p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-brand-foam clip-path-wave"></div>
    </section>
  );
}
