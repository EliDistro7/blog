'use client';

import React, { useState, useEffect } from 'react';
import { 
  DoorOpen, 
  MapPin, 
  Target, 
  Users, 
  TrendingUp, 
  Clock, 
  CheckCircle, 
  Star,
  Phone,
  Mail,
  Calendar,
  ArrowRight,
  Quote,
  BarChart3,
  Shield,
  Award,
  ChevronDown,
  ChevronUp,
  Building,
  Package,
  Zap,
  Smartphone,
  Shield as ShieldIcon,
  Wifi,
  Home,
  Heart
} from 'lucide-react';

import {
  pricingPlans,
  process,
  faqs,
  currentPartners,
  services,
  heroStats,
} from '@/app/components/door/data';
import { useLanguage } from '@/context/LanguageContext';

const DoorToDoorServices = () => {
  const {language} = useLanguage();
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const getLocalizedText = (textObj) => {
    if (!textObj) return '';
    return textObj[language] || textObj.en;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-gray-900">
    
      

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
              transform: `scale(1.05) translateY(${scrollY * 0.2}px)`,
              filter: 'brightness(0.3) contrast(1.1)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/80 to-gray-900/90" />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-gold/10 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8 animate-float">
              <div className="p-6 bg-gradient-to-r from-brand-gold to-brand-goldLight rounded-2xl shadow-gold">
                <DoorOpen className="w-16 h-16 text-white" />
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-brand-goldLight mb-6 drop-shadow-2xl">
              {getLocalizedText({
                en: "Door-to-Door Marketing",
                sw: "Uuzaji Door to Door"
              })}
            </h1>

            <p className="text-xl md:text-2xl text-brand-gold mb-8 drop-shadow-lg">
              {getLocalizedText({
                en: "Personal Connection, Real Results",
                sw: "Miunganiko ya Binafsi, Matokeo ya Kweli"
              })}
            </p>

            <p className="text-lg text-brand-goldLight/80 mb-12 max-w-2xl mx-auto leading-relaxed">
              {getLocalizedText({
                en: "Transform your business with our professional door-to-door marketing services. We create meaningful connections that drive real results and lasting customer relationships.",
                sw: "Badilisha biashara yako kwa huduma zetu za kitaalamu za uuzaji wa mlango hadi mlango. Tunaunda miunganiko yenye maana inayosukuma matokeo halisi na mahusiano ya kudumu ya wateja."
              })}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button className="px-8 py-4 bg-gradient-to-r from-brand-gold to-brand-goldLight text-gray-900 font-bold rounded-xl shadow-gold hover:shadow-2xl transition-all transform hover:scale-105">
                {getLocalizedText({
                  en: "Start Your Campaign",
                  sw: "Anza Kampeni Yako"
                })}
              </button>
              <button className="px-8 py-4 bg-brand-gold/10 backdrop-blur-md text-brand-goldLight font-bold rounded-xl border border-brand-gold/40 hover:bg-brand-gold/20 transition-all shadow-gold">
                {getLocalizedText({
                  en: "Schedule Consultation",
                  sw: "Panga Ushauri"
                })}
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {heroStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-brand-goldLight mb-2">
                    {stat.number}
                  </div>
                  <div className="text-brand-gold text-sm md:text-base">
                    {getLocalizedText(stat.label)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 bg-gray-900/80 backdrop-blur-md">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-goldLight mb-6">
              {getLocalizedText({
                en: "Our Services",
                sw: "Huduma Zetu"
              })}
            </h2>
            <p className="text-xl text-brand-gold max-w-2xl mx-auto">
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
                <div key={index} className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 border border-brand-gold/30 hover:border-brand-gold/60 transition-all transform hover:scale-[1.02] shadow-layer">
                  <div className="mb-6">
                    <div className="p-4 bg-gradient-to-r from-brand-gold to-brand-goldLight rounded-xl inline-block shadow-gold">
                      <IconComponent className="w-8 h-8 text-gray-900" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-brand-goldLight mb-4">
                    {getLocalizedText(service.title)}
                  </h3>
                  <p className="text-brand-gold/80 leading-relaxed">
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
            <h2 className="text-4xl md:text-5xl font-bold text-brand-goldLight mb-6">
              {getLocalizedText({
                en: "Our Process",
                sw: "Mchakato Wetu"
              })}
            </h2>
            <p className="text-xl text-brand-gold max-w-2xl mx-auto">
              {getLocalizedText({
                en: "A proven 4-step process that delivers consistent results",
                sw: "Mchakato wa hatua 4 uliothitishtwa unaotoa matokeo thabiti"
              })}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {process.map((step, index) => (
              <div key={index} className="flex items-start mb-12 last:mb-0">
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-r from-brand-gold to-brand-goldLight rounded-full flex items-center justify-center text-gray-900 font-bold text-2xl shadow-gold">
                  {step.step}
                </div>
                <div className="ml-8 flex-1">
                  <h3 className="text-2xl font-bold text-brand-goldLight mb-4">
                    {getLocalizedText(step.title)}
                  </h3>
                  <p className="text-brand-gold/80 leading-relaxed">
                    {getLocalizedText(step.description)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Current Partners Section */}
      <div className="py-20 bg-gray-900/80 backdrop-blur-md">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-goldLight mb-6">
              {getLocalizedText({
                en: "Our Current Partners",
                sw: "Washirika Wetu wa Sasa"
              })}
            </h2>
            <p className="text-xl text-brand-gold max-w-2xl mx-auto">
              {getLocalizedText({
                en: "Companies we're actively promoting through door-to-door campaigns",
                sw: "Makampuni tunayokutangatanga kwa kutumia kampeni za mlango hadi mlango"
              })}
            </p>
          </div>

          <div className="space-y-12">
            {currentPartners.map((partner, index) => {
              const LogoComponent = partner.logo;
              return (
                <div key={index} className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 border border-brand-gold/30 shadow-layer">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-gradient-to-r from-brand-gold to-brand-goldLight rounded-xl mr-4 shadow-gold">
                      <LogoComponent className="w-8 h-8 text-gray-900" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-brand-goldLight">{partner.company}</h3>
                      <p className="text-brand-gold">{getLocalizedText(partner.industry)}</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {partner.products.map((product, productIndex) => {
                      const ProductIcon = product.icon || Package;
                      return (
                        <div key={productIndex} className="bg-gray-700/30 rounded-xl p-6 border border-brand-gold/20 hover:border-brand-gold/40 transition-all">
                          <div className="flex items-center mb-4">
                            <div className="p-2 bg-brand-gold/20 rounded-lg mr-3">
                              <ProductIcon className="w-5 h-5 text-brand-gold" />
                            </div>
                            <h4 className="text-lg font-semibold text-brand-goldLight">
                              {getLocalizedText(product.name)}
                            </h4>
                          </div>
                          <p className="text-brand-gold/80 text-sm leading-relaxed">
                            {getLocalizedText(product.description)}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-20 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-goldLight mb-6">
              {getLocalizedText({
                en: "Pricing Plans",
                sw: "Mipango ya Bei"
              })}
            </h2>
            <p className="text-xl text-brand-gold max-w-2xl mx-auto">
              {getLocalizedText({
                en: "Choose the perfect plan for your door-to-door marketing needs",
                sw: "Chagua mpango mkamilifu kwa mahitaji yako ya uuzaji wa mlango hadi mlango"
              })}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 border border-brand-gold/30 relative shadow-layer ${plan.popular ? 'ring-2 ring-brand-gold' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-brand-gold to-brand-goldLight text-gray-900 px-6 py-2 rounded-full text-sm font-bold shadow-gold">
                      {getLocalizedText({
                        en: "Most Popular",
                        sw: "Maarufu Zaidi"
                      })}
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-brand-goldLight mb-4">
                    {getLocalizedText(plan.name)}
                  </h3>
                  <div className="text-4xl font-bold text-brand-goldLight mb-2">
                    {typeof plan.price === 'object' ? getLocalizedText(plan.price) : plan.price}
                  </div>
                  <div className="text-brand-gold">
                    {getLocalizedText(plan.period)}
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-brand-gold/80">
                      <CheckCircle className="w-5 h-5 text-brand-gold mr-3" />
                      {getLocalizedText(feature)}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 rounded-xl font-bold transition-all shadow-gold ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-brand-gold to-brand-goldLight text-gray-900 hover:shadow-2xl' 
                    : 'bg-brand-gold/10 text-brand-goldLight border border-brand-gold/40 hover:bg-brand-gold/20'
                }`}>
                  {getLocalizedText({
                    en: "Choose Plan",
                    sw: "Chagua Mpango"
                  })}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 bg-gray-900/80 backdrop-blur-md">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-goldLight mb-6">
              {getLocalizedText({
                en: "Frequently Asked Questions",
                sw: "Maswali Yanayoulizwa Mara kwa Mara"
              })}
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-6">
                <button
                  className="w-full bg-gray-800/50 backdrop-blur-md rounded-xl p-6 border border-brand-gold/30 flex items-center justify-between hover:bg-brand-gold/10 transition-all shadow-layer"
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                >
                  <span className="text-brand-goldLight font-semibold text-left">
                    {getLocalizedText(faq.question)}
                  </span>
                  {expandedFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-brand-gold" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-brand-gold" />
                  )}
                </button>
                
                {expandedFaq === index && (
                  <div className="mt-4 bg-gray-800/30 backdrop-blur-md rounded-xl p-6 border border-brand-gold/20">
                    <p className="text-brand-gold/80 leading-relaxed">
                      {getLocalizedText(faq.answer)}
                    </p>
                  </div>
                )}
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
                en: "Ready to Get Started?",
                sw: "Tayari Kuanza?"
              })}
            </h2>
            <p className="text-xl text-brand-gold mb-8">
              {getLocalizedText({
                en: "Transform your business with our proven door-to-door marketing strategies",
                sw: "Badilisha biashara yako kwa mikakati yetu ya uuzaji wa mlango hadi mlango iliyothibitishwa"
              })}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-brand-gold to-brand-goldLight text-gray-900 font-bold rounded-xl shadow-gold hover:shadow-2xl transition-all transform hover:scale-105 flex items-center justify-center gap-3">
                {getLocalizedText({
                  en: "Get Free Consultation",
                  sw: "Pata Ushauri wa Bure"
                })}
                <Calendar className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 bg-brand-gold/10 backdrop-blur-md text-brand-goldLight font-bold rounded-xl border border-brand-gold/40 hover:bg-brand-gold/20 transition-all flex items-center justify-center gap-3 shadow-gold">
                {getLocalizedText({
                  en: "Call Us Now",
                  sw: "Tupigie Simu Sasa"
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

export default DoorToDoorServices;