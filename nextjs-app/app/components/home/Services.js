import React, { useState, useEffect } from 'react';
import { DoorOpen, Smartphone, Globe, Users, ChevronRight, ExternalLink } from 'lucide-react';

const ServicesShowcase = () => {
  const [language, setLanguage] = useState('en');
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

  const successParticles = [
    { left: 16, top: 25, delay: 0.4, duration: 6.8 },
    { left: 22, top: 30, delay: 0.8, duration: 7.6 },
    { left: 28, top: 35, delay: 1.2, duration: 8.4 },
    { left: 34, top: 40, delay: 1.6, duration: 9.2 },
    { left: 40, top: 45, delay: 2.0, duration: 10.0 },
    { left: 46, top: 50, delay: 2.4, duration: 10.8 },
    { left: 52, top: 55, delay: 2.8, duration: 11.6 },
    { left: 58, top: 60, delay: 3.2, duration: 12.4 },
    { left: 64, top: 65, delay: 3.6, duration: 13.2 },
    { left: 70, top: 70, delay: 4.0, duration: 14.0 },
    { left: 76, top: 75, delay: 4.4, duration: 14.8 },
    { left: 82, top: 80, delay: 4.8, duration: 15.6 },
    { left: 88, top: 85, delay: 5.2, duration: 16.4 },
    { left: 94, top: 90, delay: 5.6, duration: 17.2 },
    { left: 100, top: 95, delay: 6.0, duration: 18.0 }
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
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, services.length]);

  const currentService = services[activeService];
  const IconComponent = currentService.icon;

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Language Toggle */}
      <div className="absolute top-4 right-4 z-50">
        <button
          onClick={() => setLanguage(language === 'en' ? 'sw' : 'en')}
          className="px-4 py-2 bg-white/20 backdrop-blur-md text-white rounded-lg hover:bg-white/30 transition-all"
        >
          {language === 'en' ? 'SW' : 'EN'}
        </button>
      </div>

      {/* Background Layers */}
      <div className="absolute inset-0">
        {/* City Skyline Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000"
          style={{
           backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
           transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
        
        {/* Modern Buildings */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80 transition-transform duration-1000"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        />
        
        {/* Business District */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60 transition-transform duration-1000"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
            transform: `translateY(${scrollY * 0.1}px)`,
          }}
        />
        
        {/* Dynamic Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-blue-900/60 to-purple-900/70" />
        
        {/* Animated Light Rays - Only render on client */}
        {isClient && (
          <div className="absolute inset-0 pointer-events-none">
            {lightRays.map((ray, i) => (
              <div
                key={i}
                className="absolute w-1 bg-gradient-to-t from-transparent via-blue-400/20 to-transparent animate-pulse"
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
                <div className="w-3 h-3 bg-gradient-to-r from-blue-400/60 to-purple-400/60 rounded-full backdrop-blur-sm shadow-lg" />
              </div>
            ))}
          </div>
        )}
        
        {/* Success Particles - Only render on client */}
        {isClient && (
          <div className="absolute inset-0 pointer-events-none">
            {successParticles.map((particle, i) => (
              <div
                key={i}
                className="absolute animate-pulse"
                style={{
                  left: `${particle.left}%`,
                  top: `${particle.top}%`,
                  animationDelay: `${particle.delay}s`,
                  animationDuration: `${particle.duration}s`
                }}
              >
                <div className="w-2 h-2 bg-yellow-400/70 rounded-full shadow-md backdrop-blur-sm" />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10 z-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Content Overlay */}
      <div className="relative z-20 bg-black/20 backdrop-blur-sm min-h-screen">
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
                    className={`relative p-8 rounded-2xl cursor-pointer transition-all duration-500 backdrop-blur-md border-2 transform hover:scale-105 hover:-translate-y-2 ${
                      isActive 
                        ? 'bg-white/25 border-white/40 shadow-2xl scale-105' 
                        : 'bg-white/10 border-white/20 hover:bg-white/20 hover:border-white/30'
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
                          {service.title[language]}
                        </h3>
                        <p className="text-orange-400 drop-shadow-md">
                          {service.subtitle[language]}
                        </p>
                      </div>
                      <ChevronRight className={`w-6 h-6 text-white transition-all duration-300 ${
                        isActive || isHovered ? 'transform translate-x-2 scale-110' : ''
                      }`} />
                    </div>
                    
                    {/* Glow effect for active card */}
                    {isActive && (
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl animate-pulse" />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Active Service Details */}
            <div
              key={activeService}
              className="bg-white/20 backdrop-blur-md rounded-3xl p-10 border-2 border-white/30 shadow-2xl transform transition-all duration-600 opacity-0 translate-y-8 animate-fade-in-up"
            >
              {/* Service Icon */}
              <div className={`inline-flex p-6 rounded-2xl bg-gradient-to-r ${currentService.gradient} mb-8 shadow-2xl`}>
                <IconComponent className="w-16 h-16 text-white" />
              </div>

              {/* Service Title */}
              <h3 className="text-4xl font-bold text-white mb-3 drop-shadow-lg">
                {currentService.title[language]}
              </h3>
              
              <p className="text-2xl text-orange-400 mb-6 drop-shadow-md">
                {currentService.subtitle[language]}
              </p>

              {/* Description */}
              <p className="text-gray-200 text-lg mb-8 leading-relaxed drop-shadow-md">
                {currentService.description[language]}
              </p>

              {/* Features */}
              <div className="mb-10">
                <h4 className="text-xl font-semibold text-white mb-4 drop-shadow-lg">
                  {language === 'en' ? 'Key Features' : 'Vipengele Muhimu'}
                </h4>
                <div className="grid grid-cols-1 gap-4">
                  {currentService.features.map((feature, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center gap-3 p-3 bg-white/10 rounded-xl backdrop-blur-sm transform transition-all duration-300 hover:bg-white/20 hover:scale-105"
                    >
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full shadow-md animate-pulse"></div>
                      <span className="text-gray-200 font-medium drop-shadow-sm">{feature[language]}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  className={`flex-1 px-8 py-4 bg-gradient-to-r ${currentService.gradient} text-white font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all flex items-center justify-center gap-3 transform hover:scale-105 hover:-translate-y-1`}
                >
                  {language === 'en' ? 'Get Started' : 'Anza Sasa'}
                  <ExternalLink className="w-5 h-5" />
                </button>
                
                <button
                  className="flex-1 px-8 py-4 bg-white/15 backdrop-blur-md text-white font-bold rounded-xl hover:bg-white/25 transition-all border-2 border-white/30 shadow-lg transform hover:scale-105 hover:-translate-y-1"
                >
                  {language === 'en' ? 'Learn More' : 'Jifunze Zaidi'}
                </button>
              </div>
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="mt-16 flex justify-center pb-12">
            <div className="flex gap-3 p-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              {services.map((_, index) => (
                <div
                  key={index}
                  className={`h-3 rounded-full cursor-pointer transition-all duration-300 transform hover:scale-150 ${
                    index === activeService 
                      ? 'bg-gradient-to-r from-blue-400 to-purple-400 w-12 shadow-lg' 
                      : 'bg-white/40 w-3 hover:bg-white/60'
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