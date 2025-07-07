import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DoorOpen, Smartphone, Globe, Users, ChevronRight, Play, Pause, ExternalLink } from 'lucide-react';

// Mock language context
const useLanguage = () => {
  const [language, setLanguage] = useState('en');
  return {
    language,
    toggleLanguage: () => setLanguage(prev => prev === 'en' ? 'sw' : 'en')
  };
};

const ServicesShowcase = () => {
  const { language, toggleLanguage } = useLanguage();
  const [activeService, setActiveService] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [hoveredService, setHoveredService] = useState(null);

  // Unified service data matching your Hero component
  const services = [
    {
      id: 'door-to-door',
      title: {
        en: "Door-to-Door Marketing",
        sw: "Uuzaji Mlango kwa Mlango"
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
      color: "#6366F1",
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
      color: "#F97316",
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
      color: "#0D9488",
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
      color: "#D4AF37",
      features: [
        { en: "Responsive Design", sw: "Muundo wa Mwitikio" },
        { en: "SEO Optimized", sw: "Imeboreshwa kwa SEO" },
        { en: "E-commerce Ready", sw: "Tayari kwa Biashara" }
      ]
    }
  ];

  // Auto-play functionality
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Header */}
      <div className="relative z-10 container mx-auto px-6 pt-8">
        <div className="flex justify-between items-center mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              {language === 'en' ? 'Our Services' : 'Huduma Zetu'}
            </h1>
            <p className="text-xl text-blue-200 mt-2">
              {language === 'en' ? 'Complete Marketing Solutions' : 'Suluhisho Kamili za Uuzaji'}
            </p>
          </motion.div>
          
          <motion.button
            onClick={toggleLanguage}
            className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg text-white font-semibold hover:bg-white/20 transition-all border border-white/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {language === 'en' ? 'Kiswahili' : 'English'}
          </motion.button>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Service Cards Navigation */}
          <div className="space-y-4">
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-2xl font-bold text-white">
                {language === 'en' ? 'Select Service' : 'Chagua Huduma'}
              </h2>
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all"
              >
                {isAutoPlaying ? <Pause className="w-5 h-5 text-white" /> : <Play className="w-5 h-5 text-white" />}
              </button>
            </div>
            
            {services.map((service, index) => {
              const ServiceIcon = service.icon;
              const isActive = index === activeService;
              const isHovered = hoveredService === index;
              
              return (
                <motion.div
                  key={service.id}
                  className={`relative p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                    isActive 
                      ? 'bg-white/20 backdrop-blur-sm border-2 border-white/30' 
                      : 'bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10'
                  }`}
                  onClick={() => setActiveService(index)}
                  onMouseEnter={() => setHoveredService(index)}
                  onMouseLeave={() => setHoveredService(null)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-full bg-gradient-to-r ${service.gradient} ${isActive ? 'shadow-lg' : ''}`}>
                      <ServiceIcon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-white text-lg">
                        {service.title[language]}
                      </h3>
                      <p className="text-blue-200 text-sm">
                        {service.subtitle[language]}
                      </p>
                    </div>
                    <ChevronRight className={`w-5 h-5 text-white transition-all ${isActive || isHovered ? 'transform translate-x-1' : ''}`} />
                  </div>
                  
                  {/* Active indicator */}
                  {isActive && (
                    <motion.div
                      className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full"
                      layoutId="activeIndicator"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            >
              {/* Service Icon */}
              <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${currentService.gradient} mb-6`}>
                <IconComponent className="w-12 h-12 text-white" />
              </div>

              {/* Service Title */}
              <h3 className="text-3xl font-bold text-white mb-2">
                {currentService.title[language]}
              </h3>
              
              <p className="text-xl text-blue-200 mb-4">
                {currentService.subtitle[language]}
              </p>

              {/* Description */}
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                {currentService.description[language]}
              </p>

              {/* Features */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-white mb-3">
                  {language === 'en' ? 'Key Features' : 'Vipengele Muhimu'}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentService.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-gray-300">{feature[language]}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  className={`flex-1 px-6 py-3 bg-gradient-to-r ${currentService.gradient} text-white font-semibold rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {language === 'en' ? 'Get Started' : 'Anza Sasa'}
                  <ExternalLink className="w-4 h-4" />
                </motion.button>
                
                <motion.button
                  className="flex-1 px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-all border border-white/20"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {language === 'en' ? 'Learn More' : 'Jifunze Zaidi'}
                </motion.button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress Indicator */}
        <div className="mt-12 flex justify-center">
          <div className="flex gap-2">
            {services.map((_, index) => (
              <motion.div
                key={index}
                className={`h-2 rounded-full cursor-pointer transition-all ${
                  index === activeService ? 'bg-white w-8' : 'bg-white/30 w-2'
                }`}
                onClick={() => setActiveService(index)}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesShowcase;