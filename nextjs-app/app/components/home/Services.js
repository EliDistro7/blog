import React, { useState, useEffect } from 'react';
import { DoorOpen, Smartphone, Globe, Users, ChevronRight, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';



const ServicesShowcase = () => {
  const { language } = useLanguage(); // language prop return either "sw" for swahili or "en" for english;
  const [activeService, setActiveService] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [hoveredService, setHoveredService] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [isClient, setIsClient] = useState(false);

  // Fix hydration by ensuring client-side only rendering for dynamic elements
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Pre-defined positions to avoid Math.random() hydration issues
  const floatingElements = [
    { left: 18.01, top: 59.06, delay: 1.58, duration: 10.92 },
    { left: 56.65, top: 29.72, delay: 1.27, duration: 9.77 },
    { left: 10.29, top: 46.55, delay: 1.31, duration: 9.28 },
    { left: 6.06, top: 25.54, delay: 1.91, duration: 11.39 },
    { left: 17.13, top: 39.33, delay: 1.17, duration: 8.09 },
    { left: 0.47, top: 38.75, delay: 0.87, duration: 10.68 },
    { left: 8.73, top: 23.71, delay: 1.66, duration: 8.75 },
    { left: 91.39, top: 66.46, delay: 1.03, duration: 10.71 },
    { left: 21.92, top: 26.13, delay: 0.56, duration: 10.27 },
    { left: 75.47, top: 63.71, delay: 0.31, duration: 9.41 },
    { left: 11.28, top: 14.88, delay: 1.04, duration: 10.59 },
    { left: 6.57, top: 99.22, delay: 1.37, duration: 8.99 },
    { left: 61.70, top: 12.58, delay: 1.46, duration: 8.99 },
    { left: 9.06, top: 65.84, delay: 1.06, duration: 8.71 },
    { left: 9.64, top: 84.28, delay: 0.49, duration: 8.17 },
    { left: 91.12, top: 93.51, delay: 1.36, duration: 9.59 },
    { left: 81.72, top: 47.56, delay: 1.88, duration: 9.29 },
    { left: 1.04, top: 82.16, delay: 1.35, duration: 9.57 },
    { left: 35.90, top: 85.48, delay: 0.55, duration: 10.76 },
    { left: 17.95, top: 12.93, delay: 1.44, duration: 11.65 }
  ];

  const lightRays = [
    { left: 15, delay: 0, duration: 4 },
    { left: 30, delay: 0.5, duration: 4.5 },
    { left: 45, delay: 1, duration: 5 },
    { left: 60, delay: 1.5, duration: 5.5 },
    { left: 75, delay: 2, duration: 6 },
    { left: 90, delay: 2.5, duration: 6.5 }
  ];

  const services = [
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
        en: "Direct engagement with your target audience through personalized face-to-face interactions that build trust and drive conversions.",
        sw: "Ushirikiano wa moja kwa moja na walengwa wako kupitia mazungumzo ya ana kwa ana yanayojenga imani na kusonga mbele biashara."
      },
      icon: DoorOpen,
      gradient: "from-indigo-500 via-purple-500 to-pink-500",
      image: "/images/door.jpeg",
      features: [
        { en: "Personal Engagement", sw: "Ushirikiano wa Binafsi" },
        { en: "Local Targeting", sw: "Lengo la Mtandaoni" },
        { en: "Direct Feedback", sw: "Maoni ya Moja kwa Moja" }
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
        en: "Strategic content creation and community management across all major platforms to grow your brand's online influence.",
        sw: "Uundaji wa maudhui ya kimkakati na usimamizi wa jumuiya katika majukwaa yote makuu ya kuongeza ushawishi wa brand yako mtandaoni."
      },
      icon: Users,
      gradient: "from-pink-500 via-red-500 to-orange-500",
   image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
          features: [
        { en: "Content Strategy", sw: "Mkakati wa Maudhui" },
        { en: "Community Building", sw: "Ujenzi wa Jumuiya" },
        { en: "Analytics & Insights", sw: "Uchanganuzi na Maarifa" }
      ]
    },
    {
      id: 'app-development',
      title: {
        en: "App Development",
        sw: "Uundaji wa Programu"
      },
      subtitle: {
        en: "Mobile Solutions That Work",
        sw: "Suluhisho za Rununu Zinazofanya Kazi"
      },
      description: {
        en: "Custom mobile applications designed to enhance customer experience and streamline your business operations.",
        sw: "Programu za rununu za kipekee zilizoundwa kuimarisha uzoefu wa mteja na kurahisisha shughuli za biashara yako."
      },
      icon: Smartphone,
      gradient: "from-teal-500 via-green-500 to-blue-500",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      features: [
        { en: "Custom Development", sw: "Uundaji wa Kipekee" },
        { en: "User Experience", sw: "Uzoefu wa Mtumiaji" },
        { en: "Performance Optimization", sw: "Uboreshaji wa Utendaji" }
      ]
    },
    {
      id: 'web-development',
      title: {
        en: "Web Development",
        sw: "Uundaji wa Tovuti"
      },
      subtitle: {
        en: "Digital Excellence Delivered",
        sw: "Ubora wa Kidijitali Unaotolewa"
      },
      description: {
        en: "Responsive, fast-loading websites that convert visitors into customers and establish your professional online presence.",
        sw: "Tovuti zinazoweza kujibu, za kasi za kupakia ambazo zinabadilisha wageni kuwa wateja na kuanzisha uwepo wako wa kitaalamu mtandaoni."
      },
      icon: Globe,
      gradient: "from-orange-500 via-yellow-500 to-green-500",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      features: [
        { en: "Responsive Design", sw: "Muundo wa Mwitikio" },
        { en: "SEO Optimized", sw: "Imeboreshwa kwa SEO" },
        { en: "E-commerce Ready", sw: "Tayari kwa Biashara" }
      ]
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setActiveService(prev => (prev + 1) % services.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, services.length]);

  const currentService = services[activeService];
  const IconComponent = currentService.icon;

  // Helper function to get localized text
  const getLocalizedText = (textObj) => {
    console.log('textobj',textObj)
    console.log('local lang',textObj[language] )
    console.log('language now', language)
    return textObj[language] || textObj.en;
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
   

      {/* Dynamic Background Image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 transform"
          style={{
            backgroundImage: `url('${currentService.image}')`,
            transform: `scale(1.05) translateY(${scrollY * 0.2}px)`,
            filter: 'brightness(0.9) contrast(1.1) saturate(1.2)'
          }}
        />
        
        {/* Subtle overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/30" />
        
        {/* Animated Light Rays - Only render on client */}
        {isClient && (
          <div className="absolute inset-0 pointer-events-none">
            {lightRays.map((ray, i) => (
              <div
                key={i}
                className="absolute w-1 bg-gradient-to-t from-transparent via-white/10 to-transparent animate-pulse"
                style={{
                  left: `${ray.left}%`,
                  height: '100%',
                  transform: 'rotate(15deg)',
                  animationDelay: `${ray.delay}s`,
                  animationDuration: `${ray.duration}s`
                }}
              />
            ))}
          </div>
        )}
        
        {/* Floating Business Elements - Only render on client */}
        {isClient && (
          <div className="absolute inset-0 pointer-events-none">
            {floatingElements.map((element, i) => (
              <div
                key={i}
                className="absolute animate-bounce"
                style={{
                  left: `${element.left}%`,
                  top: `${element.top}%`,
                  animationDelay: `${element.delay}s`,
                  animationDuration: `${element.duration}s`
                }}
              >
                <div className="w-2 h-2 bg-white/40 rounded-full backdrop-blur-sm shadow-lg animate-pulse" />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-5 z-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Content Overlay */}
      <div className="relative z-20 min-h-screen">
        {/* Header */}
        <div className="container mx-auto px-6 pt-8">
          <div className="flex justify-between items-center mb-12">
            <div className="opacity-0 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-2xl">
                {language === 'en' ? 'Our Services' : 'Huduma Zetu'}
              </h1>
              <p className="text-2xl text-orange-400 mt-3 drop-shadow-lg">
                {language === 'en' ? 'Complete Marketing Solutions' : 'Suluhisho Kamili za Uuzaji'}
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Service Cards Navigation */}
            <div className="space-y-6">
              {services.map((service, index) => {
                const ServiceIcon = service.icon;
                const isActive = index === activeService;
                const isHovered = hoveredService === index;
                
                return (
                  <div
                    key={service.id}
                    className={`relative p-6 rounded-2xl cursor-pointer transition-all duration-500 backdrop-blur-md border-2 transform hover:scale-105 hover:-translate-y-2 ${
                      isActive 
                        ? 'bg-white/15 border-white/30 shadow-2xl scale-105' 
                        : 'bg-white/8 border-white/15 hover:bg-white/12 hover:border-white/25'
                    }`}
                    onClick={() => setActiveService(index)}
                    onMouseEnter={() => setHoveredService(index)}
                    onMouseLeave={() => setHoveredService(null)}
                  >
                    <div className="flex items-center gap-6">
                      <div className={`p-4 rounded-2xl bg-gradient-to-r ${service.gradient} shadow-xl ${isActive ? 'shadow-2xl' : ''}`}>
                        <ServiceIcon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-white text-xl mb-1 drop-shadow-lg">
                          {getLocalizedText(service.title)}
                        </h3>
                        <p className="text-orange-300 drop-shadow-md">
                          {getLocalizedText(service.subtitle)}
                        </p>
                      </div>
                      <ChevronRight className={`w-6 h-6 text-white transition-all duration-300 drop-shadow-md ${
                        isActive || isHovered ? 'transform translate-x-2 scale-110' : ''
                      }`} />
                    </div>
                    
                    {/* Subtle glow effect for active card */}
                    {isActive && (
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl animate-pulse" />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Active Service Details */}
            <div
              key={activeService}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl transform transition-all duration-600 opacity-0 translate-y-8 animate-fade-in-up"
            >
              {/* Service Icon */}
              <div className={`inline-flex p-6 rounded-2xl bg-gradient-to-r ${currentService.gradient} mb-6 shadow-2xl`}>
                <IconComponent className="w-12 h-12 text-white" />
              </div>

              {/* Service Title */}
              <h3 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">
                {getLocalizedText(currentService.title)}
              </h3>
              
              <p className="text-xl text-orange-300 mb-6 drop-shadow-md">
                {getLocalizedText(currentService.subtitle)}
              </p>

              {/* Description */}
              <p className="text-gray-100 text-lg mb-8 leading-relaxed drop-shadow-md">
                {getLocalizedText(currentService.description)}
              </p>

              {/* Features */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-white mb-4 drop-shadow-lg">
                  {language === 'en' ? 'Key Features' : 'Vipengele Muhimu'}
                </h4>
                <div className="grid grid-cols-1 gap-3">
                  {currentService.features.map((feature, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center gap-3 p-3 bg-white/5 rounded-xl backdrop-blur-sm transform transition-all duration-300 hover:bg-white/10 hover:scale-105"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full shadow-md animate-pulse"></div>
                      <span className="text-gray-100 font-medium drop-shadow-sm">
                        {getLocalizedText(feature)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  className={`flex-1 px-6 py-3 bg-gradient-to-r ${currentService.gradient} text-white font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all flex items-center justify-center gap-3 transform hover:scale-105 hover:-translate-y-1`}
                >
                  {language === 'en' ? 'Get Started' : 'Anza Sasa'}
                  <ExternalLink className="w-5 h-5" />
                </button>
                
                <button
                  className="flex-1 px-6 py-3 bg-white/10 backdrop-blur-md text-white font-bold rounded-xl hover:bg-white/20 transition-all border border-white/20 shadow-lg transform hover:scale-105 hover:-translate-y-1"
                >
                  {language === 'en' ? 'Learn More' : 'Jifunze Zaidi'}
                </button>
              </div>
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="mt-16 flex justify-center pb-12">
            <div className="flex gap-3 p-4 bg-white/8 backdrop-blur-md rounded-full border border-white/15">
              {services.map((_, index) => (
                <div
                  key={index}
                  className={`h-3 rounded-full cursor-pointer transition-all duration-300 transform hover:scale-150 ${
                    index === activeService 
                      ? 'bg-gradient-to-r from-blue-400 to-purple-400 w-12 shadow-lg' 
                      : 'bg-white/30 w-3 hover:bg-white/50'
                  }`}
                  onClick={() => setActiveService(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ServicesShowcase;