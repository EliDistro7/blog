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
  title = headerContent.en.title,
  highlight = headerContent.en.highlight,
  subtitle = headerContent.en.subtitle,
  bgClass = "bg-gradient-to-br from-brand-accent to-brand-deep"
}) {
  const { language } = useLanguage();

  // Use the language-specific content if no props are passed
  const content = {
    title: title === headerContent.en.title ? headerContent[language].title : title,
    highlight: highlight === headerContent.en.highlight ? headerContent[language].highlight : highlight,
    subtitle: subtitle === headerContent.en.subtitle ? headerContent[language].subtitle : subtitle
  };

  return (
    <section className={`relative ${bgClass} text-white min-h-[100vh] flex items-center justify-center `}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px]"></div>
      </div>
      
      <div className="container mx-auto text-center px-4 z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-serif leading-tight">
            {content.title}{' '}
            <span className="text-brand-accent">{content.highlight}</span>
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl font-light max-w-3xl mx-auto leading-relaxed">
            {content.subtitle}
          </p>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-brand-foam clip-path-wave transform scale-x-105"></div>
    </section>
  );
}