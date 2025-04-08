'use client';

import ServiceHeader from "@/app/components/services/ServiceHeader";
import ServiceFeatures from "@/app/components/services/ServiceFeatures";
import ServiceProcess from "@/app/components/services/ServiceProcess";
import TestimonialCarousel from "@/app/components/home/TestimonialCarousel";
import { Share2, TrendingUp, Hash, Camera, Heart, Zap } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { Libre_Baskerville } from "next/font/google";

const baskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-baskerville"
});

export default function SocialMediaPage() {
  const { language } = useLanguage();

  // Translation content
  const content = {
    en: {
      hero: {
        title: "Strategic",
        highlight: "Social Media Management",
        subtitle: "Amplifying your brand's digital presence with data-driven strategies"
      },
      results: {
        items: [
          { value: "3-5X", label: "Engagement Growth" },
          { value: "24/7", label: "Community Management" },
          { value: "360°", label: "Content Strategy" },
          { value: "$0", label: "Upfront Costs" }
        ]
      },
      features: {
        title: "Our Social Media Solutions",
        items: [
          {
            title: "Content Strategy",
            description: "Tailored content calendars for maximum impact"
          },
          {
            title: "Growth Analytics",
            description: "Data-driven optimizations for your audience"
          },
          {
            title: "Hashtag Research",
            description: "Strategic tagging for discoverability"
          },
          {
            title: "Visual Storytelling",
            description: "Professional photography & videography"
          },
          {
            title: "Community Building",
            description: "Authentic engagement with your audience"
          },
          {
            title: "Ad Campaigns",
            description: "High-converting paid strategies"
          }
        ]
      },
      platforms: {
        title: "Platform",
        highlight: "Expertise",
        items: ['Instagram', 'TikTok', 'LinkedIn', 'Facebook'],
        tagline: "Content + Ads + Analytics"
      },
      process: {
        title: "Our 4-Phase Approach",
        steps: [
          {
            number: "01",
            title: "Audit & Strategy",
            description: "Comprehensive profile analysis and goal setting"
          },
          {
            number: "02",
            title: "Content Production",
            description: "Professional creation of posts, stories, and reels"
          },
          {
            number: "03",
            title: "Community Growth",
            description: "Organic and paid audience development"
          },
          {
            number: "04",
            title: "Performance Reporting",
            description: "Monthly analytics and optimization"
          }
        ]
      },
      testimonials: {
        title: "Client",
        highlight: "Success Stories"
      },
      cta: {
        title: "Ready to Dominate",
        highlight: "Social Media?",
        buttons: [
          { text: "Get Your Free Audit", variant: "primary" },
          { text: "View Pricing Plans", variant: "secondary" }
        ]
      }
    },
    sw: {
      hero: {
        title: "Kimkakati",
        highlight: "Usimamizi wa Mitandao ya Kijamii",
        subtitle: "Kuimarisha uwepo wako wa kidijitali kwa mikakati inayotegemea data"
      },
      results: {
        items: [
          { value: "3-5X", label: "Ukuaji wa Mwingiliano" },
          { value: "24/7", label: "Usimamizi wa Jamii" },
          { value: "360°", label: "Mkakati wa Maudhui" },
          { value: "$0", label: "Gharama za Awali" }
        ]
      },
      features: {
        title: "Suluhisho Zetu za Mitandao ya Kijamii",
        items: [
          {
            title: "Mkakati wa Maudhui",
            description: "Kalenda za maudhui zilizobinafsishwa kwa ufanisi mkubwa"
          },
          {
            title: "Uchambuzi wa Ukuaji",
            description: "Uboreshaji wa data kwa watazama wako"
          },
          {
            title: "Utafiti wa Hashtag",
            description: "Kutambua kwa kimkakati kupitia vitambulisho"
          },
          {
            title: "Simulizi za Kuona",
            description: "Upigaji picha na video za kitaaluma"
          },
          {
            title: "Kujenga Jamii",
            description: "Mwingiliano wa kweli na watazama wako"
          },
          {
            title: "Kampeni za Matangazo",
            description: "Mikakati ya malipo yenye ubadilishaji wa juu"
          }
        ]
      },
      platforms: {
        title: "Utaalamu wa",
        highlight: "Jukwaa",
        items: ['Instagram', 'TikTok', 'LinkedIn', 'Facebook'],
        tagline: "Maudhui + Matangazo + Uchambuzi"
      },
      process: {
        title: "Mbinu Yetu ya Hatua 4",
        steps: [
          {
            number: "01",
            title: "Ukaguzi & Mkakati",
            description: "Uchambuzi kamili wa wasifu na kuweka malengo"
          },
          {
            number: "02",
            title: "Uzalishaji wa Maudhui",
            description: "Uundaji wa kitaaluma wa machapisho, hadithi, na reels"
          },
          {
            number: "03",
            title: "Ukuaji wa Jamii",
            description: "Maendeleo ya watazama kwa njia asilia na ya malipo"
          },
          {
            number: "04",
            title: "Ripoti ya Utendaji",
            description: "Uchambuzi wa kila mwezi na uboreshaji"
          }
        ]
      },
      testimonials: {
        title: "Hadithi za",
        highlight: "Mafanikio ya Wateja"
      },
      cta: {
        title: "Tayari Kutawala",
        highlight: "Mitandao ya Kijamii?",
        buttons: [
          { text: "Pata bei", variant: "primary" },
          { text: "Tazama Mipango ya Bei", variant: "secondary" }
        ]
      }
    }
  };

 // Features with icons - Fixed with keys
 const features = content[language].features.items.map((item, index) => {
  const icons = [
    <Share2 key="share" className="w-8 h-8 text-brand-teal" />,
    <TrendingUp key="trend" className="w-8 h-8 text-brand-teal" />,
    <Hash key="hash" className="w-8 h-8 text-brand-teal" />,
    <Camera key="camera" className="w-8 h-8 text-brand-teal" />,
    <Heart key="heart" className="w-8 h-8 text-brand-teal" />,
    <Zap key="zap" className="w-8 h-8 text-brand-teal" />
  ];
  return { ...item, icon: icons[index] };
});

return (
  <div className={`bg-brand-foam ${baskerville.variable}`}>
    {/* Hero Section */}
    <ServiceHeader
      title={content[language].hero.title}
      highlight={content[language].hero.highlight}
      subtitle={content[language].hero.subtitle}
      bgClass="bg-gradient-to-br from-brand-dark to-brand-teal/90"
    />

    {/* Results Showcase */}
    <div className="container mx-auto py-20 px-4">
      <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        {content[language].results.items.map((item, index) => (
          <div key={`result-${index}`} className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-brand-teal mb-3">
              {item.value}
            </div>
            <p className="text-gray-600 text-lg md:text-xl">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>

    {/* Features Section */}
    <ServiceFeatures
      title={content[language].features.title}
      features={features}
    />

    {/* Platform Specialization */}
    <div className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className={`text-4xl font-bold text-center mb-12 font-serif`}>
          {content[language].platforms.title}{' '}
          <span className="text-brand-teal">{content[language].platforms.highlight}</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {content[language].platforms.items.map((platform) => (
            <div key={`platform-${platform}`} className="bg-brand-foam/50 p-6 rounded-xl text-center hover:bg-brand-teal/10 transition-colors">
              <div className="text-2xl md:text-3xl font-bold text-brand-dark mb-3">
                {platform}
              </div>
              <div className="h-1.5 w-16 bg-brand-teal mx-auto mb-4"></div>
              <p className="text-base text-gray-600">
                {content[language].platforms.tagline}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* ... (rest of the components remain the same) */}

    {/* CTA Section */}
    <div className="container mx-auto py-20 px-4 text-center">
      <h2 className={`text-4xl font-bold mb-8 font-serif`}>
        {content[language].cta.title}{' '}
        <span className="text-brand-teal">{content[language].cta.highlight}</span>
      </h2>
      <div className="flex flex-col sm:flex-row gap-6 justify-center">
        {content[language].cta.buttons.map((button, index) => (
          <button
            key={`cta-btn-${index}`}
            className={`px-8 py-4 rounded-full font-bold transition-colors shadow-depth text-lg ${
              button.variant === 'primary'
                ? 'bg-brand-teal hover:bg-brand-teal/90 text-black'
                : 'border-2 border-brand-dark hover:bg-brand-dark/5 text-brand-dark'
            }`}
          >
            {button.text}
          </button>
        ))}
      </div>
    </div>
  </div>
);
}