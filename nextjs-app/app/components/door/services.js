'use client';

import React from 'react';
import { 
  Target, 
  Users, 
  BarChart3, 
  TrendingUp
} from 'lucide-react';

const ServicesProcessSection = ({ language }) => {
  const services = [
    {
      icon: Target,
      title: { en: "Lead Generation", sw: "Uongozaji wa Viongozi" },
      description: { en: "Identify and qualify potential customers through strategic door-to-door campaigns", sw: "Tambua na uhakiki wateja watarajiwa kupitia kampeni za mkakati wa mlango hadi mlango" }
    },
    {
      icon: Users,
      title: { en: "Brand Awareness", sw: "Ufahamu wa Brand" },
      description: { en: "Increase brand visibility and recognition in your target neighborhoods", sw: "Ongeza miwani ya brand na utambuzi katika mitaa yako ya lengo" }
    },
    {
      icon: BarChart3,
      title: { en: "Market Research", sw: "Utafiti wa Soko" },
      description: { en: "Gather valuable insights about customer preferences and market trends", sw: "Kusanya maarifa muhimu kuhusu mapendeleo ya wateja na mienendo ya soko" }
    },
    {
      icon: TrendingUp,
      title: { en: "Sales Conversion", sw: "Kubadilisha Mauzo" },
      description: { en: "Convert prospects into customers through personalized interactions", sw: "Badilisha matarajio kuwa wateja kupitia mwingiliano wa kibinafsi" }
    }
  ];

  const process = [
    {
      step: "01",
      title: { en: "Strategy Planning", sw: "Upangaji wa Mkakati" },
      description: { en: "We analyze your target market and develop a customized door-to-door strategy", sw: "Tunachanganua soko lako la lengo na kuendeleza mkakati wa kipekee wa mlango hadi mlango" }
    },
    {
      step: "02",
      title: { en: "Team Training", sw: "Mafunzo ya Timu" },
      description: { en: "Our professional team is trained on your products and brand messaging", sw: "Timu yetu ya kitaalamu inafunzwa kuhusu bidhaa zako na ujumbe wa brand" }
    },
    {
      step: "03",
      title: { en: "Campaign Execution", sw: "Utekelezaji wa Kampeni" },
      description: { en: "Systematic door-to-door visits with real-time tracking and reporting", sw: "Ziara za mfumo wa mlango hadi mlango na ufuatiliaji wa wakati halisi na uripoti" }
    },
    {
      step: "04",
      title: { en: "Results Analysis", sw: "Uchambuzi wa Matokeo" },
      description: { en: "Detailed analytics and insights to optimize future campaigns", sw: "Uchanganuzi wa kina na maarifa ya kuboresha kampeni za baadaye" }
    }
  ];

  const getLocalizedText = (textObj) => {
    if (!textObj) return '';
    return textObj[language] || textObj.en;
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-900 to-gray-900">
      {/* Services Section */}
      <div className="py-20 bg-gray-900/80 backdrop-blur-md">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-yellow-300 mb-6">
              {getLocalizedText({
                en: "Our Services",
                sw: "Huduma Zetu"
              })}
            </h2>
            <p className="text-xl text-yellow-500 max-w-2xl mx-auto">
              {getLocalizedText({
                en: "Comprehensive door-to-door marketing solutions tailored to your business needs",
                sw: "Suluhisho kamili za uuzaji wa mlango hadi mlango zilizokabidhiwa mahitaji ya biashara yako"
              })}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 border border-yellow-500/30 hover:border-yellow-500/60 transition-all transform hover:scale-[1.02] shadow-2xl shadow-yellow-500/10">
                  <div className="mb-6">
                    <div className="p-4 bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-xl inline-block shadow-2xl shadow-yellow-500/20">
                      <IconComponent className="w-8 h-8 text-gray-900" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-yellow-300 mb-4">
                    {getLocalizedText(service.title)}
                  </h3>
                  <p className="text-yellow-500/80 leading-relaxed">
                    {getLocalizedText(service.description)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-20 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-yellow-300 mb-6">
              {getLocalizedText({
                en: "Our Process",
                sw: "Mchakato Wetu"
              })}
            </h2>
            <p className="text-xl text-yellow-500 max-w-2xl mx-auto">
              {getLocalizedText({
                en: "A proven 4-step process that delivers consistent results",
                sw: "Mchakato wa hatua 4 uliothitishtwa unaotoa matokeo thabiti"
              })}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {process.map((step, index) => (
              <div key={index} className="flex items-start mb-12 last:mb-0">
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-full flex items-center justify-center text-gray-900 font-bold text-2xl shadow-2xl shadow-yellow-500/20">
                  {step.step}
                </div>
                <div className="ml-8 flex-1">
                  <h3 className="text-2xl font-bold text-yellow-300 mb-4">
                    {getLocalizedText(step.title)}
                  </h3>
                  <p className="text-yellow-500/80 leading-relaxed">
                    {getLocalizedText(step.description)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesProcessSection;