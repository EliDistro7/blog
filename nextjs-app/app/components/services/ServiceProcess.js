'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function ServiceProcess({
  title = {
    en: "Our Process",
    sw: "Mchakato Wetu"
  },
  steps = [
    {
      number: "01",
      title: {
        en: "Discovery",
        sw: "Uchunguzi"
      },
      description: {
        en: "Understanding your business goals and audience",
        sw: "Kuelewa malengo yako ya biashara na watazamaji"
      }
    },
    {
      number: "02",
      title: {
        en: "Planning",
        sw: "Kupanga"
      },
      description: {
        en: "Providing a template to client",
        sw: "Kuonesha namna kazi ikiisha itakavyokuwa kwa mteja"
      }
    },
    {
      number: "03",
      title: {
        en: "Execution",
        sw: "Utekelezaji wa mpango"
      },
      description: {
        en: "Building with clean, scalable code",
        sw: "Kutengeneza code safi, zinazoweza kupanuka kwa urahisi"
      }
    },
    {
      number: "04",
      title: {
        en: "Launch",
        sw: "Kurusha Mtandaoni"
      },
      description: {
        en: "Deploying and optimizing for success",
        sw: "Kuirusha hewani na kuboresha kwa mafanikio zaidi"
      }
    }
  ]
}) {
  const { language } = useLanguage();

  return (
    <div className="hover:border-brand-gold/30 group-hover:bg-brand-gold/5 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16 font-serif">
          {typeof title === 'string' ? title : title[language]}
        </h2>
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 h-full w-0.5 bg-brand-accent/20"></div>
          
          {(Array.isArray(steps) ? steps : steps).map((step, index) => (
            <div key={`process-step-${index}`} className="relative pl-24 mb-16 last:mb-0 group">
              {/* Step number circle */}
              <div className=" flex items-center justify-center w-16 h-16 rounded-full bg-brand-accent text-white font-bold text-xl z-10 group-hover:scale-110 transition-transform">
                {step.number}
              </div>
              
              {/* Step content */}
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-brand-dark">
                  {typeof step.title === 'string' ? step.title : step.title[language]}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {typeof step.description === 'string' ? step.description : step.description[language]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}