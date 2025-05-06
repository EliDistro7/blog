import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Utensils, Share2, Mic2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function ServicesVisualization() {
  const containerRef = useRef(null);
  const { language, toggleLanguage } = useLanguage();
  const [activeService, setActiveService] = useState(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });
  
  // Service data
  const services = [
    {
      id: 'web-design',
      link: '/services/web-design',
      title: {
        en: "Web Design",
        sw: "Uundaji wa Tovuti"
      },
      desc: {
        en: "Stunning, responsive websites tailored to your brand identity and business goals.",
        sw: "Tovuti zenye kuvutia na zinazobadilika kulingana na device, zilizobuniwa kwa kufuata utambulisho wa brand na malengo ya biashara."
      },
      icon: <Camera className="w-10 h-10" />,
      color: "#6366F1", // Brand accent (indigo)
      position: { x: 75, y: 30 } // Percentage positions
    },
    {
      id: 'catering',
      link: '/services/catering',
      title: {
        en: "Catering Services",
        sw: "Huduma za Catering"
      },
      desc: {
        en: "Exquisite gourmet experiences and flawless event catering for memorable occasions.",
        sw: "Uzoefu wa hali ya juu wa vyakula bora na huduma bora za chakula kwa hafla zisizosahaulika."
      },
      icon: <Utensils className="w-10 h-10" />,
      color: "#F97316", // Brand coral (orange)
      position: { x: 25, y: 30 }
    },
    {
      id: 'social-media',
      link: '/services/social-media',
      title: {
        en: "Social Media Management",
        sw: "Usimamizi wa Mitandao ya Kijamii"
      },
      desc: {
        en: "Strategic campaigns to amplify your digital presence and engagement.",
        sw: "Kampeni za kimkakati za kuongeza views, follows,likes, engagement mtandaoni."
      },
      icon: <Share2 className="w-10 h-10" />,
      color: "#0D9488", // Brand teal
      position: { x: 75, y: 70 }
    },
    {
      id: 'mc',
      link: '/services/mc-services',
      title: {
        en: "Master of Ceremonies",
        sw: "Washereheshaji"
      },
      desc: {
        en: "Charismatic hosts to elevate your events with professional flair.",
        sw: "Washereheshaji wenye ubunifu wa kuinua hafla yako kuwa nyakati zisizosahaulika ."
      },
      icon: <Mic2 className="w-10 h-10" />,
      color: "#1E293B", // Brand deep
      position: { x: 25, y: 70 }
    }
  ];

  // Update dimensions when window resizes
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const { width } = containerRef.current.getBoundingClientRect();
        // Calculate height based on aspect ratio or use fixed height
        const height = Math.min(window.innerHeight * 0.6, 600);
        setDimensions({ width, height });
      }
    };

    // Initial dimensions
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Find active service details
  const activeServiceDetails = activeService 
    ? services.find(service => service.id === activeService) 
    : null;
  
  return (
    <div ref={containerRef} className="flex flex-col items-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row justify-between items-center w-full mb-6 gap-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center sm:text-left">
          {language === 'en' ? 'Our Services' : 'Huduma Zetu'}
        </h2>
        <button 
          onClick={toggleLanguage}
          className="px-6 py-3 text-base font-semibold text-white bg-brand-blue rounded-lg hover:bg-blue-700 transition-colors shadow-wave"
        >
          {language === 'en' ? 'Royal Services' : 'Hudumiwa Kama Mfalme'}
        </button>
      </div>
      
      <div className="relative w-full bg-gradient-to-b from-blue-900 to-gray-900 rounded-xl shadow-depth mb-8 overflow-hidden" 
           style={{ height: `${dimensions.height}px` }}>
        {/* Central company node */}
        <motion.div 
          className="absolute rounded-full bg-blue-500 shadow-glow"
          style={{ 
            width: 80, 
            height: 80, 
            left: '50%', 
            top: '50%',
            x: -40,
            y: -40,
            boxShadow: '0 0 20px 5px rgba(59, 130, 246, 0.5)'
          }}
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-full h-full flex items-center justify-center text-white font-bold">
            {language === 'en' ? 'ROYAL' : 'FALME'}
          </div>
        </motion.div>
        
        {/* Animated background particles */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute rounded-full bg-white opacity-30"
            style={{
              width: Math.random() * 5 + 1,
              height: Math.random() * 5 + 1,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
        
        {/* Service nodes with connections */}
        {services.map((service) => {
          const isActive = activeService === service.id;
          
          return (
            <React.Fragment key={service.id}>
              {/* Connection line */}
              <motion.div
                className="absolute bg-gradient-to-r z-10"
                style={{
                  left: '50%',
                  top: '50%',
                  width: '20%',
                  height: 3,
                  backgroundColor: service.color,
                  transformOrigin: '0 0',
                  opacity: 0.7,
                  rotate: Math.atan2(
                    service.position.y - 50,
                    service.position.x - 50
                  ) * (180 / Math.PI),
                  scale: Math.sqrt(
                    Math.pow(service.position.x - 50, 2) + 
                    Math.pow(service.position.y - 50, 2)
                  ) / 10
                }}
                animate={{
                  opacity: isActive ? 1 : 0.7,
                  height: isActive ? 5 : 3,
                }}
                transition={{
                  duration: 0.3
                }}
              />
              
              {/* Service node */}
              <motion.div
                className="absolute rounded-full cursor-pointer z-20 flex items-center justify-center"
                style={{
                  backgroundColor: service.color,
                  width: 60,
                  height: 60,
                  left: `${service.position.x}%`,
                  top: `${service.position.y}%`,
                  x: -30,
                  y: -30,
                  boxShadow: `0 0 15px 2px ${service.color}80`
                }}
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: `0 0 20px 5px ${service.color}80` 
                }}
                animate={{
                  y: [-30, -35, -30],
                }}
                transition={{
                  y: {
                    duration: 2 + Math.random(),
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: Math.random() * 2
                  }
                }}
                onClick={() => setActiveService(prev => prev === service.id ? null : service.id)}
              >
                {React.cloneElement(service.icon, { className: "w-8 h-8 text-white" })}
              </motion.div>
              
              {/* Service label */}
              <motion.div
                className="absolute bg-white bg-opacity-90 rounded-lg px-3 py-1 z-10 shadow-md border-l-4 pointer-events-none"
                style={{
                  left: `${service.position.x}%`,
                  top: `${service.position.y}%`,
                  y: 40,
                  x: -60,
                  borderLeftColor: service.color,
                  width: 120
                }}
                animate={{
                  scale: isActive ? 1.1 : 1,
                  y: isActive ? 50 : 40,
                }}
              >
                <span className="font-bold text-gray-900 text-sm">
                  {service.title[language]}
                </span>
              </motion.div>
            </React.Fragment>
          );
        })}
      </div>
      
      {/* Active service details */}
      <AnimatePresence>
        {activeServiceDetails && (
          <motion.div 
            className="w-full p-6 rounded-xl bg-white shadow-layer border-l-4 mb-8"
            style={{ borderLeftColor: activeServiceDetails.color }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col md:flex-row items-start md:items-center mb-4 gap-4">
              <div className="p-3 rounded-full" style={{ backgroundColor: activeServiceDetails.color }}>
                {React.cloneElement(activeServiceDetails.icon, { className: "w-12 h-12 text-white" })}
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  {activeServiceDetails.title[language]}
                </h3>
                <p className="text-lg text-gray-600">
                  {activeServiceDetails.desc[language]}
                </p>
              </div>
            </div>
            
            <div className="mt-6 flex flex-wrap gap-4">
              <motion.a 
                href={activeServiceDetails.link} 
                className="px-6 py-3 rounded-lg text-lg font-semibold text-white transition-all shadow-md hover:shadow-lg"
                style={{ backgroundColor: activeServiceDetails.color }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                {language === 'en' ? 'Get Quote' : 'Pata Bei'}
              </motion.a>
              <motion.a 
                href={activeServiceDetails.link} 
                className="px-6 py-3 rounded-lg text-lg font-semibold border-2 transition-all hover:bg-gray-50"
                style={{ borderColor: activeServiceDetails.color, color: activeServiceDetails.color }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                {language === 'en' ? 'Learn more →' : 'Jifunze zaidi →'}
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <div className="mb-8 p-4 bg-gray-100 rounded-lg border border-gray-200 w-full">
        <h3 className="font-bold text-lg mb-2 text-gray-800">
          {language === 'en' ? 'How to interact:' : 'Jinsi ya kutumia:'}
        </h3>
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li>
            {language === 'en' 
              ? 'Click on a service node to view detailed information' 
              : 'Bofya kwenye kitovu cha huduma kuona maelezo zaidi'}
          </li>
          <li>
            {language === 'en' 
              ? 'Hover over nodes to see highlights' 
              : 'Pitisha kipanya juu ya vitovu kuona maboresho'}
          </li>
        </ul>
      </div>
    </div>
  );
}