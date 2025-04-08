'use client';

import ServiceHeader from "@/app/components/services/ServiceHeader";
import ServiceFeatures from "@/app/components/services/ServiceFeatures";
import ServiceProcess from "@/app/components/services/ServiceProcess";
import { Mic2, Calendar, Languages, Award, Laugh, Sparkles } from "lucide-react";
import { useLanguage } from '@/context/LanguageContext';

export default function MCServicesPage() {
  const { language } = useLanguage();

  const content = {
    en: {
      hero: {
        title: "Professional",
        highlight: "Master of Ceremonies",
        subtitle: "Elevating events with charismatic hosting and Tanzanian flair"
      },
      goldSection: {
        title: "Events That Shine",
        description: "Our MCs blend professional polish with Tanzanian warmth - creating unforgettable moments",
        highlight1: "professional polish",
        highlight2: "Tanzanian warmth"
      },
      features: {
        title: "Our Signature MC Skills",
        items: [
          {
            title: "Bilingual Hosting",
            description: "Fluent in English & Swahili for diverse audiences"
          },
          {
            title: "Event Coordination",
            description: "Seamless timeline management"
          },
          {
            title: "Crowd Engagement",
            description: "Interactive techniques to energize"
          },
          {
            title: "Award Ceremonies",
            description: "Professional honors handling"
          },
          {
            title: "Corporate Events",
            description: "Polished business hosting"
          },
          {
            title: "Cultural Adaptation",
            description: "Tailored Tanzanian approach"
          }
        ]
      },
      eventTypes: {
        title: "Perfect For Your Event",
        items: [
          { name: "Weddings", icon: "💍" },
          { name: "Corporate", icon: "👔" },
          { name: "Launches", icon: "🚀" },
          { name: "Awards", icon: "🏆" },
          { name: "Charity", icon: "🤝" },
          { name: "Festivals", icon: "🌍" }
        ]
      },
      process: {
        title: "Our Gold Standard Process",
        steps: [
          {
            number: "01",
            title: "Event Briefing",
            description: "Understanding your vision"
          },
          {
            number: "02",
            title: "Script Customization",
            description: "Tailoring to your event's tone"
          },
          {
            number: "03",
            title: "Rehearsal",
            description: "Aligning with speakers"
          },
          {
            number: "04",
            title: "Execution",
            description: "Flawless hosting"
          }
        ]
      },
      testimonials: {
        title: "Client Praise",
        quote: "Our wedding MC blended modern energy with traditional respect - keeping 300 guests engaged for 8 hours!",
        author: "- Sarah & James, Dar es Salaam"
      },
      cta: {
        title: "Ready for Golden Moments?",
        buttons: [
          { text: "Book Our MCs", variant: "primary" },
          { text: "View MC Profiles", variant: "secondary" }
        ]
      }
    },
    sw: {
      hero: {
        title: "Kitaaluma",
        highlight: "Mwenye Sherehe",
        subtitle: "Kuimarisha hafla kwa ukarimu na ufundi wa kitanzania"
      },
      goldSection: {
        title: "Hafla Zenye Mwangaza",
        description: "Waandaa wetu wanachanganya ufundi wa kitaaluma na ukarimu wa kitanzania - kuunda nyakasi zisizosahaulika",
        highlight1: "ufundi wa kitaaluma",
        highlight2: "ukarimu wa kitanzania"
      },
      features: {
        title: "Ujuzi Wetu wa Kipekee",
        items: [
          {
            title: "Uandaa Wa Lugha Mbili",
            description: "Wazungumzaji wa Kiingereza na Kiswahili kwa watazamaji mbalimbali"
          },
          {
            title: "Uratibu wa Hafla",
            description: "Usimamizi mzuri wa ratiba"
          },
          {
            title: "Kushirikisha Watazamaji",
            description: "Mbinu za kushirikisha na kuamsha"
          },
          {
            title: "Sherehe za Tuzo",
            description: "Utunzaji wa kitaaluma wa tuzo"
          },
          {
            title: "Hafla za Kikorporate",
            description: "Uandaa wa kitaaluma wa biashara"
          },
          {
            title: "Mbinu za Kitanzania",
            description: "Mbinu maalum za kitanzania"
          }
        ]
      },
      eventTypes: {
        title: "Inafaa Kwa Hafla Yako",
        items: [
          { name: "Arusi", icon: "💍" },
          { name: "Kikorporate", icon: "👔" },
          { name: "Uzinduzi", icon: "🚀" },
          { name: "Tuzo", icon: "🏆" },
          { name: "Hisani", icon: "🤝" },
          { name: "Tamasha", icon: "🌍" }
        ]
      },
      process: {
        title: "Mchakato Wetu wa Dhahabu",
        steps: [
          {
            number: "01",
            title: "Maelezo ya Hafla",
            description: "Kuelewa maono yako"
          },
          {
            number: "02",
            title: "Maandalizi ya Maandishi",
            description: "Kurekebisha kulingana na mada ya hafla yako"
          },
          {
            number: "03",
            title: "Mazoezi",
            description: "Kulinganisha na wasemaji"
          },
          {
            number: "04",
            title: "Utekelezaji",
            description: "Uandaa bila dosari"
          }
        ]
      },
      testimonials: {
        title: "Pongezi za Wateja",
        quote: "Mwenye sherehe wetu alichanganya nguvu ya kisasa na heshima ya jadi - akishirikisha wageni 300 kwa masaa 8!",
        author: "- Sarah & James, Dar es Salaam"
      },
      cta: {
        title: "Tayari kwa Nyakasi za Dhahabu?",
        buttons: [
          { text: "Hudhuria Waandaa Wetu", variant: "primary" },
          { text: "Tazama Wasifu wa Waandaa", variant: "secondary" }
        ]
      }
    }
  };

  const features = content[language].features.items.map((feature, index) => ({
    ...feature,
    icon: [
      <Languages key="lang-icon" className="w-8 h-8 text-brand-gold" />,
      <Calendar key="cal-icon" className="w-8 h-8 text-brand-gold" />,
      <Laugh key="laugh-icon" className="w-8 h-8 text-brand-gold" />,
      <Award key="award-icon" className="w-8 h-8 text-brand-gold" />,
      <Mic2 key="mic-icon" className="w-8 h-8 text-brand-gold" />,
      <Sparkles key="sparkles-icon" className="w-8 h-8 text-brand-gold" />
    ][index]
  }));

  return (
    <div className="bg-gradient-to-b from-brand-foam to-white">
      {/* Hero with Gold Gradient */}
      <ServiceHeader
        title={content[language].hero.title}
        highlight={content[language].hero.highlight}
        subtitle={content[language].hero.subtitle}
        bgClass="bg-gradient-to-br from-brand-dark via-brand-goldDark to-brand-gold"
      />

      {/* Gold Accent Section */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/gold-pattern.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto text-center border border-brand-gold/20">
            <Mic2 className="w-14 h-14 mx-auto text-brand-gold mb-6 drop-shadow-icon" />
            <h2 className="text-4xl font-bold font-serif mb-6 bg-clip-text text-transparent bg-gradient-to-r from-brand-goldDark to-brand-gold">
              {content[language].goldSection.title}
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              {content[language].goldSection.description.split(content[language].goldSection.highlight1)[0]}
              <span className="font-semibold text-brand-goldDark">{content[language].goldSection.highlight1}</span>
              {content[language].goldSection.description.split(content[language].goldSection.highlight1)[1].split(content[language].goldSection.highlight2)[0]}
              <span className="font-semibold text-brand-goldDark">{content[language].goldSection.highlight2}</span>
              {content[language].goldSection.description.split(content[language].goldSection.highlight2)[1]}
            </p>
          </div>
        </div>
      </div>

      {/* Features with Gold Highlights */}
      <ServiceFeatures
        title={content[language].features.title}
        features={features}
      />

      {/* Event Types with Gold Hover */}
      <div className="py-20 bg-gradient-to-b from-white to-brand-foam">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 font-serif">
            {content[language].eventTypes.title.split('Your Event')[0]}
            <span className="text-brand-gold">Your Event</span>
            {content[language].eventTypes.title.split('Your Event')[1]}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {content[language].eventTypes.items.map((event) => (
              <div 
                key={event.name} 
                className="bg-white p-6 rounded-xl text-center transition-all 
                           border-2 border-transparent hover:border-brand-gold/50
                           hover:shadow-gold hover:bg-brand-gold/5"
              >
                <span className="text-3xl block mb-3">{event.icon}</span>
                <h3 className="font-medium">{event.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gold Process Timeline */}
      <ServiceProcess
        title={content[language].process.title}
        steps={content[language].process.steps}
      />

      {/* Testimonials with Gold Accent */}
      <div className="py-20 bg-gradient-to-b from-brand-foam to-white relative">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent"></div>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12 font-serif">
            <span className="text-brand-gold">{content[language].testimonials.title.split('Praise')[0]}</span>
            {content[language].testimonials.title.split('Praise')[1]}
          </h2>
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-sm border border-brand-gold/20">
            <blockquote className="text-xl italic mb-6">
              {content[language].testimonials.quote}
            </blockquote>
            <div className="w-16 h-1 bg-brand-gold mx-auto mb-4"></div>
            <p className="font-bold">{content[language].testimonials.author}</p>
          </div>
        </div>
      </div>

      {/* Gold CTA */}
      <div className="bg-gradient-to-br from-brand-dark to-brand-goldDark py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 font-serif">
            {content[language].cta.title.split('Golden Moments')[0]}
            <span className="text-brand-goldLight">Golden Moments</span>
            {content[language].cta.title.split('Golden Moments')[1]}
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-brand-gold hover:bg-brand-goldLight text-brand-dark rounded-full font-bold shadow-depth transition-all hover:scale-105">
              {content[language].cta.buttons[0].text}
            </button>
            <button className="px-8 py-4 border-2 border-white hover:bg-white/10 rounded-full font-bold transition-colors">
              {content[language].cta.buttons[1].text}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}