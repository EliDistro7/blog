'use client';
import Link from "next/link";
import { useLanguage } from '@/context/LanguageContext';

export default function CTASection() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Transform Your Vision Into Reality",
      subtitle: "Where innovative solutions meet exceptional execution",
      button: "Start Your Project"
    },
    sw: {
      title: "Badilisha Maono Yako Kuwa Ukweli",
      subtitle: "Ambapo suluhisho mpya zinakutana na utekelezaji bora",
      button: "Anza Mradi Wako"
    }
  };

  return (
    <section className="relative bg-brand-dark overflow-hidden">
      {/* Diamond-pattern overlay */}
      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Gradient spotlight effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-blue/10 via-brand-dark/0 to-brand-dark"></div>

      <div className="container mx-auto py-28 px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Title with elegant underline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-foam mb-6">
            {content[language].title}
            <span className="block w-24 h-1.5 bg-gradient-to-r from-brand-blue to-brand-accent mx-auto mt-6 rounded-full"></span>
          </h2>
          
          {/* Subtitle with refined spacing */}
          <p className="text-xl md:text-2xl text-brand-foam/80 max-w-2xl mx-auto mb-12 leading-relaxed">
            {content[language].subtitle}
          </p>
          
          {/* Premium button with depth */}
          <div className="relative inline-block group">
            {/* Button shadow */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-blue to-brand-accent rounded-xl blur-md opacity-70 group-hover:opacity-90 transition-all -z-10"></div>
            
            {/* Main button */}
            <Link
              href="/contact"
              className="relative inline-flex items-center justify-center px-12 py-5 bg-gradient-to-r from-brand-blue to-brand-accent text-white text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-white/10 hover:border-white/20"
            >
              {content[language].button}
              <svg className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-blue to-transparent"></div>
    </section>
  );
}