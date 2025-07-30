'use client';

import React, { useState, useEffect } from 'react';
import { 
  Palette, 
  Target, 
  TrendingUp, 
  Award, 
  Lightbulb, 
  Users, 
  MessageCircle, 
  CheckCircle,
  Calendar,
  Phone,
  Zap,
  Eye,
  Heart,
  Star
} from 'lucide-react';

// Mock useLanguage hook for demo
const useLanguage = () => {
  const [language, setLanguage] = useState('en');
  return { language, setLanguage };
};

const BrandingServices = () => {
  const { language } = useLanguage();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const getLocalizedText = (textObj) => {
    if (!textObj) return '';
    return textObj[language] || textObj.en;
  };

  const brandingServices = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: {
        en: "Brand Identity Design",
        sw: "Muundo wa Utambulisho wa Chapa"
      },
      description: {
        en: "Create distinctive logos, color schemes, and visual elements that make your brand memorable and recognizable.",
        sw: "Tengeneza nembo za kipekee, rangi, na vipengele vya kuona vinavyofanya chapa yako ikumbukeke na kutambulikana."
      }
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: {
        en: "Brand Strategy",
        sw: "Mkakati wa Chapa"
      },
      description: {
        en: "Develop comprehensive brand positioning, messaging, and market positioning strategies that resonate with your target audience.",
        sw: "Tengeneza mkakati wa jumla wa uwekwaji wa chapa, ujumbe, na mkakati wa soko unaofanana na walengwa wako."
      }
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: {
        en: "Brand Voice & Messaging",
        sw: "Sauti na Ujumbe wa Chapa"
      },
      description: {
        en: "Craft consistent brand voice, tone, and messaging across all communication channels and touchpoints.",
        sw: "Tengeneza sauti ya chapa, mtindo, na ujumbe unaofanana katika njia zote za mawasiliano na mahali pa kugusana."
      }
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: {
        en: "Visual Brand Guidelines",
        sw: "Miongozo ya Chapa ya Kuona"
      },
      description: {
        en: "Establish comprehensive brand guidelines ensuring consistent visual identity across all marketing materials.",
        sw: "Weka miongozo ya chapa ya kina inayohakikisha utambulisho wa kuona unaofanana katika nyenzo zote za uuzaji."
      }
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: {
        en: "Brand Experience Design",
        sw: "Muundo wa Uzoefu wa Chapa"
      },
      description: {
        en: "Design memorable customer experiences that align with your brand values and strengthen customer loyalty.",
        sw: "Buni uzoefu wa wateja unaokumbukeka unaofanana na maadili ya chapa yako na kuimarisha uaminifu wa wateja."
      }
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: {
        en: "Brand Refresh & Rebranding",
        sw: "Ubuniaji Upya wa Chapa"
      },
      description: {
        en: "Revitalize existing brands with modern approaches while maintaining brand equity and customer recognition.",
        sw: "Ongeza nguvu za chapa zilizopo kwa njia za kisasa huku ukidumisha thamani ya chapa na utambuzi wa wateja."
      }
    }
  ];

  const brandingProcess = [
    {
      step: "01",
      title: {
        en: "Brand Discovery",
        sw: "Ugunduzi wa Chapa"
      },
      description: {
        en: "Deep dive into your business, values, target audience, and competitive landscape to understand your unique positioning.",
        sw: "Jifunze kina kuhusu biashara yako, maadili, walengwa, na mazingira ya ushindani ili kuelewa msimamo wako wa kipekee."
      }
    },
    {
      step: "02",
      title: {
        en: "Strategy Development",
        sw: "Utengenezaji wa Mkakati"
      },
      description: {
        en: "Create comprehensive brand strategy including positioning, messaging architecture, and brand personality framework.",
        sw: "Tengeneza mkakati wa chapa wa kina ikiwa ni pamoja na uwekwaji, muundo wa ujumbe, na mfumo wa utu wa chapa."
      }
    },
    {
      step: "03",
      title: {
        en: "Creative Execution",
        sw: "Utekelezaji wa Ubunifu"
      },
      description: {
        en: "Design and develop all brand elements including logos, visual identity, and brand guidelines documentation.",
        sw: "Buni na tengeneza vipengele vyote vya chapa ikiwa ni pamoja na nembo, utambulisho wa kuona, na nyaraka za miongozo ya chapa."
      }
    },
    {
      step: "04",
      title: {
        en: "Implementation & Launch",
        sw: "Utekelezaji na Uzinduzi"
      },
      description: {
        en: "Roll out your new brand across all touchpoints with comprehensive launch strategy and ongoing support.",
        sw: "Sambaza chapa yako mpya katika mahali pote pa kugusana na mkakati wa kina wa uzinduzi na msaada unaoendelea."
      }
    }
  ];

  const brandingBenefits = [
    {
      icon: <Award className="w-6 h-6" />,
      benefit: {
        en: "Increased Brand Recognition",
        sw: "Utambuzi wa Chapa Umeongezeka"
      }
    },
    {
      icon: <Heart className="w-6 h-6" />,
      benefit: {
        en: "Enhanced Customer Loyalty",
        sw: "Uaminifu wa Wateja Umeongezeka"
      }
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      benefit: {
        en: "Higher Market Value",
        sw: "Thamani ya Juu ya Soko"
      }
    },
    {
      icon: <Target className="w-6 h-6" />,
      benefit: {
        en: "Better Market Positioning",
        sw: "Uwekwaji Bora wa Soko"
      }
    },
    {
      icon: <Users className="w-6 h-6" />,
      benefit: {
        en: "Stronger Customer Connection",
        sw: "Uhusiano Mkuu wa Wateja"
      }
    },
    {
      icon: <Star className="w-6 h-6" />,
      benefit: {
        en: "Premium Brand Perception",
        sw: "Mtazamo wa Chapa ya Hali ya Juu"
      }
    }
  ];

  if (!isClient) {
    return <div className="min-h-screen bg-gray-900" />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-900 to-brand-deep">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-gold/10 to-brand-coral/10"></div>
        <div className="relative container mx-auto px-6 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-brand-gold/10 backdrop-blur-md px-4 py-2 rounded-full text-brand-goldLight font-medium mb-6 border border-brand-gold/20">
              <Palette className="w-4 h-4" />
              {getLocalizedText({
                en: "Professional Branding Services",
                sw: "Huduma za Chapa za Kitaalamu"
              })}
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-brand-goldLight mb-6 leading-tight">
              {getLocalizedText({
                en: "Build a Brand That",
                sw: "Jenga Chapa Ambayo"
              })}
              <span className="block bg-gradient-to-r from-brand-gold to-brand-coral bg-clip-text text-transparent">
                {getLocalizedText({
                  en: "Stands Out",
                  sw: "Inajipatanisha"
                })}
              </span>
            </h1>
            
            <p className="text-xl text-brand-light mb-8 max-w-3xl mx-auto leading-relaxed">
              {getLocalizedText({
                en: "Transform your business identity with strategic branding that captures hearts, minds, and market share. We create brands that don't just look good—they perform exceptionally.",
                sw: "Badilisha utambulisho wa biashara yako kwa chapa ya kimkakati inayonasa mioyo, akili, na sehemu ya soko. Tunaunda chapa ambazo si tu zinaonekana vizuri—zinafanya kazi vizuri sana."
              })}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-brand-gold to-brand-goldLight text-gray-900 font-bold rounded-xl shadow-gold hover:shadow-2xl transition-all transform hover:scale-105 flex items-center justify-center gap-3">
                {getLocalizedText({
                  en: "Start Your Brand Journey",
                  sw: "Anza Safari ya Chapa Yako"
                })}
                <Zap className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 bg-brand-gold/10 backdrop-blur-md text-brand-goldLight font-bold rounded-xl border border-brand-gold/40 hover:bg-brand-gold/20 transition-all flex items-center justify-center gap-3 shadow-gold">
                {getLocalizedText({
                  en: "View Portfolio",
                  sw: "Angalia Kazi Zetu"
                })}
                <Eye className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-goldLight mb-6">
              {getLocalizedText({
                en: "Our Branding Services",
                sw: "Huduma Zetu za Chapa"
              })}
            </h2>
            <p className="text-xl text-brand-light max-w-3xl mx-auto">
              {getLocalizedText({
                en: "Comprehensive branding solutions that elevate your business and connect with your audience on a deeper level.",
                sw: "Suluhisho la chapa la kina linaloinua biashara yako na kuunganisha na hadhira yako kwa kina zaidi."
              })}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brandingServices.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-brand-deep/50 to-gray-900/50 backdrop-blur-md p-8 rounded-2xl border border-brand-gold/20 hover:border-brand-gold/40 transition-all hover:shadow-gold group">
                <div className="text-brand-gold mb-6 group-hover:text-brand-goldLight transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-brand-goldLight mb-4">
                  {getLocalizedText(service.title)}
                </h3>
                <p className="text-brand-light leading-relaxed">
                  {getLocalizedText(service.description)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-20 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-goldLight mb-6">
              {getLocalizedText({
                en: "Our Branding Process",
                sw: "Mchakato Wetu wa Chapa"
              })}
            </h2>
            <p className="text-xl text-brand-light max-w-3xl mx-auto">
              {getLocalizedText({
                en: "A proven methodology that ensures your brand not only looks exceptional but also performs in the marketplace.",
                sw: "Mbinu iliyothibitishwa inayohakikisha chapa yako si tu inaonekana bora bali pia inafanya kazi sokoni."
              })}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {brandingProcess.map((process, index) => (
              <div key={index} className="flex flex-col md:flex-row items-start gap-8 mb-12 last:mb-0">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-brand-gold to-brand-goldLight rounded-full flex items-center justify-center text-gray-900 font-bold text-xl">
                    {process.step}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-brand-goldLight mb-4">
                    {getLocalizedText(process.title)}
                  </h3>
                  <p className="text-brand-light leading-relaxed text-lg">
                    {getLocalizedText(process.description)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-goldLight mb-6">
              {getLocalizedText({
                en: "Why Invest in Professional Branding?",
                sw: "Kwa Nini Uwekeze katika Chapa ya Kitaalamu?"
              })}
            </h2>
            <p className="text-xl text-brand-light max-w-3xl mx-auto">
              {getLocalizedText({
                en: "Professional branding delivers measurable results that impact your bottom line and long-term success.",
                sw: "Chapa ya kitaalamu hutoa matokeo yanayoweza kupimwa yanayoathiri mapato yako na mafanikio ya muda mrefu."
              })}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {brandingBenefits.map((item, index) => (
              <div key={index} className="flex items-center gap-4 bg-brand-deep/30 backdrop-blur-md p-6 rounded-xl border border-brand-gold/20 hover:border-brand-gold/40 transition-all">
                <div className="text-brand-gold">
                  {item.icon}
                </div>
                <span className="text-brand-goldLight font-medium">
                  {getLocalizedText(item.benefit)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-t from-gray-900 via-gray-900 to-gray-950">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-goldLight mb-6">
              {getLocalizedText({
                en: "Ready to Transform Your Brand?",
                sw: "Tayari Kubadilisha Chapa Yako?"
              })}
            </h2>
            <p className="text-xl text-brand-gold mb-8">
              {getLocalizedText({
                en: "Let's create a brand that not only stands out but also drives real business results. Your success story starts here.",
                sw: "Hebu tuunde chapa ambayo si tu inajipatanisha bali pia inasababisha matokeo halisi ya biashara. Hadithi ya mafanikio yako inaanza hapa."
              })}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-brand-gold to-brand-goldLight text-gray-900 font-bold rounded-xl shadow-gold hover:shadow-2xl transition-all transform hover:scale-105 flex items-center justify-center gap-3">
                {getLocalizedText({
                  en: "Get Free Brand Consultation",
                  sw: "Pata Ushauri wa Chapa wa Bure"
                })}
                <Calendar className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 bg-brand-gold/10 backdrop-blur-md text-brand-goldLight font-bold rounded-xl border border-brand-gold/40 hover:bg-brand-gold/20 transition-all flex items-center justify-center gap-3 shadow-gold">
                {getLocalizedText({
                  en: "Call Us Today",
                  sw: "Tupigie Simu Leo"
                })}
                <Phone className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandingServices;