import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DoorOpen, Smartphone, Globe, Users, ChevronRight, ExternalLink } from 'lucide-react';

const ServicesShowcase = () => {
  const [language, setLanguage] = useState('en');
  const [activeService, setActiveService] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [hoveredService, setHoveredService] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      {/* Parallax Background Layers */}
      <div className="absolute inset-0">
        {/* Layer 1: Far Background - City Skyline */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
        
        {/* Layer 2: Mid Background - Modern Buildings */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        />
        
        {/* Layer 3: Foreground - Business District */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
            transform: `translateY(${scrollY * 0.1}px)`,
          }}
        />
        
        {/* Dynamic Overlay with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-blue-900/60 to-purple-900/70" />
        
        {/* Animated Light Rays */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 bg-gradient-to-t from-transparent via-blue-400/20 to-transparent"
              style={{
                left: `${15 + i * 15}%`,
                height: '100%',
                transform: 'rotate(15deg)',
              }}
              animate={{
                opacity: [0.2, 0.6, 0.2],
                scaleY: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
        
        {/* Floating Business Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                x: [0, 50, 0],
                rotate: [0, 360],
                opacity: [0.3, 0.8, 0.3],
                scale: [0.8, 1.5, 0.8],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            >
              <div className="w-3 h-3 bg-gradient-to-r from-blue-400/60 to-purple-400/60 rounded-full backdrop-blur-sm shadow-lg" />
            </motion.div>
          ))}
        </div>
        
        {/* Success Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${10 + i * 6}%`,
                top: `${20 + i * 5}%`,
              }}
              animate={{
                y: [0, -80, 0],
                opacity: [0.4, 1, 0.4],
                scale: [1, 1.8, 1],
              }}
              transition={{
                duration: 6 + i * 0.8,
                repeat: Infinity,
                delay: i * 0.4,
                ease: "easeInOut"
              }}
            >
              <div className="w-2 h-2 bg-yellow-400/70 rounded-full shadow-md backdrop-blur-sm" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Enhanced Grid Pattern */}
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
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-2xl">
                {language === 'en' ? 'Our Services' : 'Huduma Zetu'}
              </h1>
              <p className="text-2xl text-brand-coral mt-3 drop-shadow-lg">
                {language === 'en' ? 'Complete Marketing Solutions' : 'Suluhisho Kamili za Uuzaji'}
              </p>
            </motion.div>
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
                  <motion.div
                    key={service.id}
                    className={`relative p-8 rounded-2xl cursor-pointer transition-all duration-500 backdrop-blur-md border-2 ${
                      isActive 
                        ? 'bg-white/25 border-white/40 shadow-2xl transform scale-105' 
                        : 'bg-white/10 border-white/20 hover:bg-white/20 hover:border-white/30'
                    }`}
                    onClick={() => setActiveService(index)}
                    onMouseEnter={() => setHoveredService(index)}
                    onMouseLeave={() => setHoveredService(null)}
                    whileHover={{ scale: 1.03, y: -5 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <div className="flex items-center gap-6">
                      <div className={`p-4 rounded-2xl bg-gradient-to-r ${service.gradient} shadow-xl ${isActive ? 'shadow-2xl' : ''}`}>
                        <ServiceIcon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-white text-xl mb-1 drop-shadow-lg">
                          {service.title[language]}
                        </h3>
                        <p className="text-brand-coral drop-shadow-md">
                          {service.subtitle[language]}
                        </p>
                      </div>
                      <ChevronRight className={`w-6 h-6 text-white transition-all duration-300 ${
                        isActive || isHovered ? 'transform translate-x-2 scale-110' : ''
                      }`} />
                    </div>
                    
                    {/* Glow effect for active card */}
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      />
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Active Service Details */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.9 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="bg-white/20 backdrop-blur-md rounded-3xl p-10 border-2 border-white/30 shadow-2xl"
              >
                {/* Service Icon */}
                <div className={`inline-flex p-6 rounded-2xl bg-gradient-to-r ${currentService.gradient} mb-8 shadow-2xl`}>
                  <IconComponent className="w-16 h-16 text-white" />
                </div>

                {/* Service Title */}
                <h3 className="text-4xl font-bold text-white mb-3 drop-shadow-lg">
                  {currentService.title[language]}
                </h3>
                
                <p className="text-2xl text-brand-coral mb-6 drop-shadow-md">
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
                      <motion.div 
                        key={idx} 
                        className="flex items-center gap-3 p-3 bg-white/10 rounded-xl backdrop-blur-sm"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full shadow-md"></div>
                        <span className="text-gray-200 font-medium drop-shadow-sm">{feature[language]}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    className={`flex-1 px-8 py-4 bg-gradient-to-r ${currentService.gradient} text-white font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all flex items-center justify-center gap-3`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {language === 'en' ? 'Get Started' : 'Anza Sasa'}
                    <ExternalLink className="w-5 h-5" />
                  </motion.button>
                  
                  <motion.button
                    className="flex-1 px-8 py-4 bg-white/15 backdrop-blur-md text-white font-bold rounded-xl hover:bg-white/25 transition-all border-2 border-white/30 shadow-lg"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {language === 'en' ? 'Learn More' : 'Jifunze Zaidi'}
                  </motion.button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Enhanced Progress Indicator */}
          <div className="mt-16 flex justify-center pb-12">
            <div className="flex gap-3 p-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              {services.map((_, index) => (
                <motion.div
                  key={index}
                  className={`h-3 rounded-full cursor-pointer transition-all duration-300 ${
                    index === activeService 
                      ? 'bg-gradient-to-r from-blue-400 to-purple-400 w-12 shadow-lg' 
                      : 'bg-white/40 w-3 hover:bg-white/60'
                  }`}
                  onClick={() => setActiveService(index)}
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesShowcase;