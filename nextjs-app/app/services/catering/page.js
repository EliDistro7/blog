
'use client';

import ServiceHeader from "@/app/components/services/ServiceHeader";
import { useLanguage } from '@/context/LanguageContext';

export default function CateringPage() {
  const { language } = useLanguage();

  const content = {
    en: {
      header: {
        title: "Exquisite",
        highlight: "Catering Services",
        subtitle: "Creating memorable culinary experiences for your special events"
      },
      menus: {
        title: "Our",
        highlight: "Signature Menus"
      },
      events: {
        title: "Perfect For",
        highlight: "Your Event"
      }
    },
    sw: {
      header: {
        title: "Bora",
        highlight: "Huduma za Upishi",
        subtitle: "Kuunda uzoefu wa kulinganisha wa kupikia kwa hafla zako maalum"
      },
      menus: {
        title: "Menyu",
        highlight: "Zetu Maalum"
      },
      events: {
        title: "Inafaa Kwa",
        highlight: "Hafla Yako"
      }
    }
  };

  return (
    <div className="bg-brand-foam">
      <ServiceHeader
        title={content[language].header.title}
        highlight={content[language].header.highlight}
        subtitle={content[language].header.subtitle}
        bgClass="bg-gradient-to-br from-brand-dark to-brand-coral/90"
      />

      {/* Menu Showcase Section */}
      <div className="container mx-auto py-20 px-4">
        <h2 className="text-3xl font-bold text-center mb-12 font-serif">
          {content[language].menus.title}{' '}
          <span className="text-brand-coral">{content[language].menus.highlight}</span>
        </h2>
        {/* Menu items grid */}
      </div>

      {/* Event Types */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 font-serif">
            {content[language].events.title}{' '}
            <span className="text-brand-coral">{content[language].events.highlight}</span>
          </h2>
          {/* Event type cards */}
        </div>
      </div>
    </div>
  );
}