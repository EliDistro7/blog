'use client';

import { ReactNode } from "react";
import { useLanguage } from '@/context/LanguageContext';
import { LucideCheckCircle } from 'lucide-react'; // Just as an example icon

interface Feature {
  title: string;
  description: string;
  icon: ReactNode;
}

interface ServiceFeaturesProps {
  title?: string | ReactNode;
  features?: Feature[];
  cardClass?: string;
  iconContainerClass?: string;
  titleClass?: string;
  descriptionClass?: string;
  gridClass?: string;
}

const featuresContent: Record<string, { title: string; features: Feature[] }> = {
  en: {
    title: "What We Offer",
    features: [
      {
        title: "Web Design",
        description: "Beautiful and responsive websites tailored to your brand.",
        icon: <LucideCheckCircle className="text-brand-accent" />
      },
      {
        title: "Event Planning",
        description: "Professional coordination and creative event execution.",
        icon: <LucideCheckCircle className="text-brand-accent" />
      },
      {
        title: "Digital Marketing",
        description: "Strategies that bring results and increase visibility.",
        icon: <LucideCheckCircle className="text-brand-accent" />
      }
    ]
  },
  sw: {
    title: "Tunachotoa",
    features: [
      {
        title: "Ubunifu wa Tovuti",
        description: "Tovuti nzuri na zinazoitikia kwa chapa yako.",
        icon: <LucideCheckCircle className="text-brand-accent" />
      },
      {
        title: "Mipango ya Matukio",
        description: "Urataibu wa kitaalamu na utekelezaji wa kiubunifu.",
        icon: <LucideCheckCircle className="text-brand-accent" />
      },
      {
        title: "Masoko ya Kidijitali",
        description: "Mikakati inayotoa matokeo na kuongeza mwonekano.",
        icon: <LucideCheckCircle className="text-brand-accent" />
      }
    ]
  }
};

export default function ServiceFeatures({
  title,
  features,
  
  cardClass = "bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow",
  iconContainerClass = "p-3 rounded-lg bg-brand-accent/10",
  titleClass = "text-xl font-bold text-brand-dark",
  descriptionClass = "text-gray-600",
  gridClass = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
}: ServiceFeaturesProps) {
  const { language } = useLanguage();
  const content = featuresContent[language];

  return (
    <div className="container mx-auto py-20 px-4">
      <h2 className="text-3xl font-bold text-center mb-16 font-serif">
        {typeof title === 'string' || typeof title === 'undefined' ? (title || content.title) : title}
      </h2>
      <div className={gridClass}>
        {(features || content.features).map((feature, index) => (
          <div key={`feature-${index}`} className={cardClass}>
            <div className="flex items-center gap-4 mb-4">
              <div className={iconContainerClass}>
                {feature.icon}
              </div>
              <h3 className={titleClass}>{feature.title}</h3>
            </div>
            <p className={descriptionClass}>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
