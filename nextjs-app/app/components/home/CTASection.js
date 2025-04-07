'use client';

import Link from "next/link";
import { useLanguage } from '@/context/LanguageContext';

export default function CTASection() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Ready to Transform Your Vision?",
      description: "Whether it's a website, event, or social media strategy—we've got you covered.",
      button: "Contact Us Today"
    },
    sw: {
      title: "Tayari Kubadilisha Maono Yako?",
      description: "Iwe ni tovuti, hafla, au mkakati wa mitandao ya kijamii—tunakusudia.",
      button: "Wasiliana Nasi Leo"
    }
  };

  return (
    <section className="container mx-auto py-20 px-4 text-center">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-dark">
          {content[language].title}
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-gray-700 text-lg">
          {content[language].description}
        </p>
      </div>
      <Link 
        href="/contact" 
        className="inline-block px-8 py-4 bg-gradient-to-r from-brand-accent to-brand-teal text-white rounded-full font-bold hover:shadow-glow hover:bg-opacity-90 transition-all text-lg hover:scale-105"
      >
        {content[language].button}
      </Link>
    </section>
  );
}