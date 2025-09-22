import React, { useState, useEffect } from 'react';
import { DoorOpen, Smartphone, Globe, Users, ChevronRight, ExternalLink, ArrowRight, Play } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useRouter } from 'next/navigation';

const ServicesShowcase = () => {
  const router = useRouter();
  const {language} = useLanguage(); 
  const [activeService, setActiveService] = useState(null);
  const [isClient, setIsClient] = useState(false);

  // Fix hydration
  useEffect(() => {
    setIsClient(true);
  }, []);

  const services = [
    {
      id: 'branding',
      title: {
        en: "Branding & Identity",
        sw: "Utambulisho wa Brand"
      },
      subtitle: {
        en: "Build Your Unique Brand Identity",
        sw: "Jenga Utambulisho Wako wa Kipekee"
      },
      description: {
        en: "Complete brand identity development including logo design, brand guidelines, visual identity systems, and brand positioning strategies that make your business memorable.",
        sw: "Uundaji kamili wa utambulisho wa brand ikiwa ni pamoja na muundo wa logo, miongozo ya brand, mifumo ya utambulisho wa kuona, na mikakati ya kuweka brand ambayo inafanya biashara yako ikumbukwe."
      },
      icon: DoorOpen,
      gradient: "from-indigo-500 via-purple-500 to-pink-500",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
   features: [
        { en: "Logo Design", sw: "Muundo wa Logo" },
        { en: "Brand Guidelines", sw: "Miongozo ya Brand" },
        { en: "Visual Identity", sw: "Utambulisho wa Kuona" }
      ]
    },

    {
      id: 'door-to-door',
      title: {
        en: "Door-to-Door Marketing",
        sw: "Uuzaji Door to Door"
      },
      subtitle: {
        en: "Personal Connection, Real Results",
        sw: "Miunganiko ya Binafsi, Matokeo ya Kweli"
      },
      description: {
        en: "Direct engagement with your target audience through personalized face-to-face interactions that build trust, create lasting relationships, and drive immediate conversions.",
        sw: "Ushirikiano wa moja kwa moja na walengwa wako kupitia mazungumzo ya ana kwa ana yanayojenga imani, kuunda mahusiano ya kudumu, na kusonga mbele mabadiliko ya haraka."
      },
      icon: Users,
      gradient: "from-teal-500 via-green-500 to-blue-500",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      features: [
        { en: "Personal Engagement", sw: "Ushirikiano wa Binafsi" },
        { en: "Local Targeting", sw: "Lengo la Mtandaoni" },
        { en: "Direct Feedback", sw: "Maoni ya Moja kwa Moja" }
      ]
    },
    {
      id: 'equipment-sales',
      title: {
        en: "Equipment Sales",
        sw: "Mauzo ya Vifaa"
      },
      subtitle: {
        en: "Quality Equipment Solutions",
        sw: "Suluhisho za Vifaa vya Ubora"
      },
      description: {
        en: "Premium equipment sales and consultation services, providing businesses with the right tools and technology solutions to enhance productivity and operational efficiency.",
        sw: "Mauzo ya vifaa vya hali ya juu na huduma za ushauri, kutoa biashara zifaa sahihi na suluhisho za teknolojia kuimarisha uzalishaji na ufanisi wa uendeshaji."
      },
      icon: Smartphone,
      gradient: "from-orange-500 via-yellow-500 to-green-500",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      features: [
        { en: "Equipment Consultation", sw: "Ushauri wa Vifaa" },
        { en: "Quality Products", sw: "Bidhaa za Ubora" },
        { en: "Technical Support", sw: "Msaada wa Kiufundi" }
      ]
    },
    {
      id: 'social-media',
      title: {
        en: "Social Media Management",
        sw: "Usimamizi wa Mitandao ya Kijamii"
      },
      subtitle: {
        en: "Amplify Your Digital Presence",
        sw: "Kuongeza Uwepo Wako wa Kidijitali"
      },
      description: {
        en: "Strategic social media management across all platforms including content creation, community building, analytics, and targeted advertising to grow your online influence.",
        sw: "Usimamizi wa kimkakati wa mitandao ya kijamii katika majukwaa yote ikiwa ni pamoja na uundaji wa maudhui, ujenzi wa jumuiya, uchanganuzi, na utangazaji wa lengo kuongeza ushawishi wako mtandaoni."
      },
      icon: Users,
      gradient: "from-violet-500 via-purple-500 to-indigo-500",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      features: [
        { en: "Content Strategy", sw: "Mkakati wa Maudhui" },
        { en: "Community Building", sw: "Ujenzi wa Jumuiya" },
        { en: "Analytics & Insights", sw: "Uchanganuzi na Maarifa" }
      ]
    },
    {
      id: 'tender-applications',
      title: {
        en: "Tender Applications",
        sw: "Maombi ya Zabuni"
      },
      subtitle: {
        en: "Win More Contracts",
        sw: "Shinda Mikataba Zaidi"
      },
      description: {
        en: "Professional tender application services including documentation preparation, compliance checking, proposal writing, and submission management to maximize your success rate.",
        sw: "Huduma za kitaalamu za maombi ya zabuni ikiwa ni pamoja na utayarishaji wa nyaraka, ukaguzi wa kufuata taratibu, uandishi wa mapendekezo, na usimamizi wa kuwasilisha kuongeza kiwango chako cha mafanikio."
      },
      icon: ChevronRight,
      gradient: "from-emerald-500 via-teal-500 to-cyan-500",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      features: [
        { en: "Document Preparation", sw: "Utayarishaji wa Nyaraka" },
        { en: "Compliance Check", sw: "Ukaguzi wa Kufuata" },
        { en: "Proposal Writing", sw: "Uandishi wa Mapendekezo" }
      ]
    },

  ];

  // Helper function to get localized text
  const getLocalizedText = (textObj) => {
    return textObj[language] || textObj.en;
  };

  // Mock navigation function
  const navigateToService = (serviceId) => {
    console.log(`Navigating to /services/${serviceId}`);
   router.push(`/services/${serviceId}`)
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 relative overflow-hidden">
      {/* Background Pattern - Original Theme */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(99, 102, 241, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(236, 72, 153, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(14, 165, 233, 0.2) 0%, transparent 50%),
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '800px 800px, 800px 800px, 600px 600px, 40px 40px, 40px 40px'
        }} />
      </div>

      {/* Floating Geometric Elements */}
      {isClient && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-32 right-16 w-24 h-24 bg-gradient-to-r from-blue-500/10 to-teal-500/10 rounded-full blur-lg animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-full blur-md animate-pulse" style={{animationDelay: '4s'}}></div>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10">
        {/* Header - Original Styling */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12 lg:pt-20 pb-8 lg:pb-12">
          <div className="text-center mb-12 lg:mb-20">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 lg:mb-6 drop-shadow-2xl">
              {language === 'en' ? 'Our Services' : 'Huduma Zetu'}
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-orange-300 max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
              {language === 'en' 
                ? 'Comprehensive marketing solutions designed to elevate your business and connect you with your target audience'
                : 'Suluhisho kamili za uuzaji zilizoundwa kuinua biashara yako na kukuunganisha na walengwa wako'
              }
            </p>
          </div>

          {/* Services Grid - Larger Images with Minimal Text Overlay */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 mb-12 lg:mb-20">
            {services.map((service) => {
              const ServiceIcon = service.icon;
              const isActive = activeService === service.id;
              
              return (
                <div
                  key={service.id}
                  className={`group relative bg-white/10 backdrop-blur-md rounded-2xl lg:rounded-3xl border border-white/20 shadow-2xl hover:shadow-purple-500/20 cursor-pointer transition-all duration-500 overflow-hidden hover:-translate-y-3 hover:scale-105 ${
                    isActive ? 'ring-2 ring-purple-400/50 shadow-purple-500/30' : ''
                  }`}
                  onClick={() => {
                    setActiveService(service.id);
                    navigateToService(service.id);
                  }}
                  onMouseEnter={() => setActiveService(service.id)}
                >
                  {/* Dominant Image Section - Much Larger */}
                  <div className="relative h-80 sm:h-96 lg:h-80 xl:h-96 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={getLocalizedText(service.title)}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Subtle Gradient Overlay - More Transparent */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-40 group-hover:opacity-50 transition-opacity duration-300`} />
                    
                    {/* Minimalist Icon in Corner */}
                    <div className="absolute top-4 right-4 transform group-hover:scale-110 transition-transform duration-300">
                      <div className="p-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                        <ServiceIcon className="w-5 h-5 text-white drop-shadow-md" />
                      </div>
                    </div>

                    {/* Interactive Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-75 group-hover:scale-100">
                      <div className="p-6 bg-white/20 backdrop-blur-sm rounded-full border-2 border-white/50 hover:bg-white/30 transition-colors duration-300">
                        <Play className="w-10 h-10 text-white fill-current drop-shadow-lg" />
                      </div>
                    </div>

                    {/* Service Title Overlay - Bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                      <h3 className="text-xl lg:text-2xl font-bold text-white mb-1 drop-shadow-lg">
                        {getLocalizedText(service.title)}
                      </h3>
                      <p className="text-orange-200 text-sm drop-shadow-md opacity-90">
                        {getLocalizedText(service.subtitle)}
                      </p>
                    </div>
                  </div>

                  {/* Minimal Content Section - Compact */}
                  <div className="p-4 lg:p-5 bg-gradient-to-b from-transparent to-black/20">
                    {/* Condensed Features List */}
                    <div className="space-y-2 mb-4">
                      {service.features.slice(0, 2).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 p-2 bg-white/5 rounded-lg backdrop-blur-sm">
                          <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full shadow-lg flex-shrink-0`}></div>
                          <span className="text-gray-200 text-sm drop-shadow-sm">
                            {getLocalizedText(feature)}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Compact Action Footer */}
                    <div className="flex items-center justify-between pt-3 border-t border-white/10">
                      <span className={`text-sm font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent drop-shadow-sm`}>
                        {language === 'en' ? 'Explore' : 'Chunguza'}
                      </span>
                      <ArrowRight className="w-4 h-4 text-orange-300 group-hover:text-white group-hover:translate-x-2 transition-all duration-300 drop-shadow-sm" />
                    </div>
                  </div>

                  {/* Glow Effect */}
                  <div className={`absolute inset-0 rounded-2xl lg:rounded-3xl bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`} />
                </div>
              );
            })}
          </div>

          {/* Featured Service Details - Image-Heavy */}
          {activeService && (
            <div className="bg-white/10 backdrop-blur-md rounded-2xl lg:rounded-3xl border border-white/20 shadow-2xl overflow-hidden mb-12 lg:mb-20">
              {(() => {
                const service = services.find(s => s.id === activeService);
                const ServiceIcon = service.icon;
                
                return (
                  <div className="grid lg:grid-cols-3 gap-0">
                    {/* Large Featured Image - Takes 2/3 Width */}
                    <div className="relative lg:col-span-2 h-96 lg:h-auto">
                      <img 
                        src={service.image} 
                        alt={getLocalizedText(service.title)}
                        className="w-full h-full object-cover"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-30`} />
                      
                      {/* Large Floating Icon */}
                      <div className="absolute top-8 left-8">
                        <div className={`p-6 bg-gradient-to-r ${service.gradient} rounded-3xl shadow-2xl border border-white/20`}>
                          <ServiceIcon className="w-12 h-12 text-white drop-shadow-lg" />
                        </div>
                      </div>

                      {/* Image Text Overlay */}
                      <div className="absolute bottom-8 left-8 right-8">
                        <div className="p-6 bg-black/40 backdrop-blur-md rounded-2xl border border-white/20">
                          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2 drop-shadow-lg">
                            {getLocalizedText(service.title)}
                          </h2>
                          <p className="text-orange-200 text-lg drop-shadow-md">
                            {getLocalizedText(service.subtitle)}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Compact Content Column - 1/3 Width */}
                    <div className="p-6 lg:p-8 flex flex-col justify-center bg-gradient-to-br from-slate-800/50 to-gray-900/50">
                      <div className="mb-6">
                        <p className="text-gray-200 leading-relaxed drop-shadow-sm mb-6">
                          {getLocalizedText(service.description)}
                        </p>
                      </div>

                      {/* Compact Features */}
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-4 drop-shadow-lg">
                          {language === 'en' ? 'Key Features' : 'Vipengele Muhimu'}
                        </h4>
                        <div className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-3 p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                              <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full shadow-lg flex-shrink-0`}></div>
                              <span className="text-gray-200 text-sm drop-shadow-sm">
                                {getLocalizedText(feature)}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Stacked Action Buttons */}
                      <div className="space-y-3">
                        <button
                          onClick={() => navigateToService(service.id)}
                          className={`w-full px-6 py-4 bg-gradient-to-r ${service.gradient} text-white font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-3`}
                        >
                          {language === 'en' ? 'Explore Service' : 'Chunguza Huduma'}
                          <ExternalLink className="w-4 h-4" />
                        </button>
                        
                        <button className="w-full px-6 py-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-bold rounded-xl transition-all duration-300 border-2 border-white/20 hover:border-white/40">
                          {language === 'en' ? 'Learn More' : 'Jifunze Zaidi'}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          )}

          {/* Call to Action Section - Original Vibrant Theme */}
          <div className="text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl lg:rounded-3xl p-8 lg:p-16 text-white shadow-2xl border border-white/20">
            <h3 className="text-2xl lg:text-4xl font-bold mb-4 lg:mb-6 drop-shadow-lg">
              {language === 'en' ? 'Ready to Elevate Your Business?' : 'Tayari Kuinua Biashara Yako?'}
            </h3>
            <p className="text-lg lg:text-xl opacity-90 mb-8 lg:mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              {language === 'en' 
                ? 'Join thousands of successful businesses that have transformed their marketing with our innovative solutions and expert team'
                : 'Jiunge na maelfu ya biashara zilizofanikiwa ambazo zimebadilisha uuzaji wao kwa suluhisho zetu za ubunifu na timu ya wataalamu'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <button className="px-8 py-4 bg-white text-purple-600 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex-1 hover:scale-105">
                {language === 'en' ? 'Get Free Consultation' : 'Pata Ushauri Bure'}
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 flex-1">
                {language === 'en' ? 'View Success Stories' : 'Ona Hadithi za Mafanikio'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesShowcase;