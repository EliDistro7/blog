// components/social/ServicesSection.jsx
import React from 'react';

const ServicesSection = ({ language, services }) => {
  // Custom clip art style SVG components
  const ClipArtGraphics = {
    contentCreation: () => (
      <svg viewBox="0 0 120 120" className="w-full h-full">
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFD700" />
            <stop offset="100%" stopColor="#FFA500" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4CAF50" />
            <stop offset="100%" stopColor="#2E7D32" />
          </linearGradient>
        </defs>
        
        {/* Background circle */}
        <circle cx="60" cy="60" r="50" fill="url(#gradient1)" opacity="0.2" />
        
        {/* Phone/Device */}
        <rect x="35" y="25" width="30" height="50" rx="5" fill="#2A2A2A" stroke="#FFD700" strokeWidth="2"/>
        <rect x="38" y="30" width="24" height="35" rx="2" fill="#1A1A1A"/>
        
        {/* Content elements */}
        <rect x="40" y="33" width="20" height="3" rx="1" fill="#FFD700"/>
        <rect x="40" y="38" width="15" height="2" rx="1" fill="#888"/>
        <rect x="40" y="42" width="18" height="2" rx="1" fill="#888"/>
        <rect x="40" y="46" width="12" height="2" rx="1" fill="#888"/>
        
        {/* Play button */}
        <circle cx="50" cy="55" r="6" fill="url(#gradient2)" opacity="0.8"/>
        <polygon points="48,52 48,58 53,55" fill="white"/>
        
        {/* Sparkles */}
        <g className="animate-pulse">
          <path d="M75,35 L77,40 L82,38 L77,43 L75,48 L73,43 L68,38 L73,40 Z" fill="#FFD700"/>
          <path d="M25,70 L26,73 L29,72 L26,75 L25,78 L24,75 L21,72 L24,73 Z" fill="#FFD700"/>
          <path d="M85,75 L86,77 L88,76 L86,78 L85,80 L84,78 L82,76 L84,77 Z" fill="#FFD700"/>
        </g>
      </svg>
    ),
    
    socialManagement: () => (
      <svg viewBox="0 0 120 120" className="w-full h-full">
        <defs>
          <linearGradient id="socialGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E91E63" />
            <stop offset="50%" stopColor="#9C27B0" />
            <stop offset="100%" stopColor="#673AB7" />
          </linearGradient>
        </defs>
        
        {/* Background */}
        <circle cx="60" cy="60" r="50" fill="url(#socialGradient)" opacity="0.2" />
        
        {/* Central hub */}
        <circle cx="60" cy="60" r="12" fill="#FFD700" stroke="#2A2A2A" strokeWidth="2"/>
        
        {/* Social media icons as circles */}
        <circle cx="35" cy="35" r="8" fill="#E91E63" className="animate-pulse"/>
        <circle cx="85" cy="35" r="8" fill="#1877F2" className="animate-pulse"/>
        <circle cx="35" cy="85" r="8" fill="#25D366" className="animate-pulse"/>
        <circle cx="85" cy="85" r="8" fill="#1DA1F2" className="animate-pulse"/>
        
        {/* Connection lines */}
        <line x1="60" y1="60" x2="35" y2="35" stroke="#FFD700" strokeWidth="2" opacity="0.6"/>
        <line x1="60" y1="60" x2="85" y2="35" stroke="#FFD700" strokeWidth="2" opacity="0.6"/>
        <line x1="60" y1="60" x2="35" y2="85" stroke="#FFD700" strokeWidth="2" opacity="0.6"/>
        <line x1="60" y1="60" x2="85" y2="85" stroke="#FFD700" strokeWidth="2" opacity="0.6"/>
        
        {/* Center icon */}
        <path d="M55,55 L65,55 L65,65 L55,65 Z" fill="#2A2A2A"/>
        <circle cx="60" cy="60" r="2" fill="#FFD700"/>
      </svg>
    ),
    
    analytics: () => (
      <svg viewBox="0 0 120 120" className="w-full h-full">
        <defs>
          <linearGradient id="analyticsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00BCD4" />
            <stop offset="100%" stopColor="#0097A7" />
          </linearGradient>
        </defs>
        
        {/* Background */}
        <circle cx="60" cy="60" r="50" fill="url(#analyticsGradient)" opacity="0.2" />
        
        {/* Chart bars */}
        <rect x="25" y="65" width="8" height="20" fill="#FFD700" rx="2"/>
        <rect x="38" y="55" width="8" height="30" fill="#00BCD4" rx="2"/>
        <rect x="51" y="45" width="8" height="40" fill="#4CAF50" rx="2"/>
        <rect x="64" y="35" width="8" height="50" fill="#FF9800" rx="2"/>
        <rect x="77" y="50" width="8" height="35" fill="#E91E63" rx="2"/>
        
        {/* Growth arrow */}
        <path d="M30,40 L85,20" stroke="#FFD700" strokeWidth="3" markerEnd="url(#arrowhead)"/>
        
        {/* Arrow marker */}
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#FFD700"/>
          </marker>
        </defs>
        
        {/* Floating metrics */}
        <circle cx="90" cy="25" r="8" fill="#4CAF50" className="animate-bounce"/>
        <text x="90" y="29" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">%</text>
      </svg>
    ),
    
    advertising: () => (
      <svg viewBox="0 0 120 120" className="w-full h-full">
        <defs>
          <linearGradient id="adGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF5722" />
            <stop offset="100%" stopColor="#D32F2F" />
          </linearGradient>
        </defs>
        
        {/* Background */}
        <circle cx="60" cy="60" r="50" fill="url(#adGradient)" opacity="0.2" />
        
        {/* Megaphone */}
        <path d="M25,50 L45,45 L70,35 L75,40 L70,45 L45,55 L25,50 Z" fill="#FFD700"/>
        <path d="M45,45 L45,55 L55,60 L55,50 Z" fill="#FFA500"/>
        
        {/* Sound waves */}
        <g className="animate-pulse">
          <path d="M80,45 Q85,50 85,55 Q85,60 80,65" stroke="#FFD700" strokeWidth="2" fill="none"/>
          <path d="M85,40 Q92,50 92,60 Q92,70 85,80" stroke="#FFD700" strokeWidth="2" fill="none" opacity="0.7"/>
          <path d="M90,35 Q99,50 99,65 Q99,80 90,85" stroke="#FFD700" strokeWidth="2" fill="none" opacity="0.5"/>
        </g>
        
        {/* Target symbol */}
        <circle cx="35" cy="75" r="8" fill="none" stroke="#FFD700" strokeWidth="2"/>
        <circle cx="35" cy="75" r="4" fill="#FFD700"/>
        <circle cx="35" cy="75" r="2" fill="#2A2A2A"/>
      </svg>
    ),
    
    branding: () => (
      <svg viewBox="0 0 120 120" className="w-full h-full">
        <defs>
          <linearGradient id="brandGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9C27B0" />
            <stop offset="100%" stopColor="#673AB7" />
          </linearGradient>
        </defs>
        
        {/* Background */}
        <circle cx="60" cy="60" r="50" fill="url(#brandGradient)" opacity="0.2" />
        
        {/* Palette */}
        <ellipse cx="60" cy="70" rx="25" ry="15" fill="#2A2A2A" stroke="#FFD700" strokeWidth="2"/>
        
        {/* Color dots */}
        <circle cx="45" cy="65" r="4" fill="#E91E63"/>
        <circle cx="55" cy="70" r="4" fill="#2196F3"/>
        <circle cx="65" cy="65" r="4" fill="#4CAF50"/>
        <circle cx="75" cy="70" r="4" fill="#FF9800"/>
        
        {/* Brush */}
        <rect x="40" y="35" width="3" height="25" fill="#8B4513" rx="1"/>
        <path d="M38,35 L45,35 L44,30 L39,30 Z" fill="#C0C0C0"/>
        <path d="M39,30 L44,30 L43,25 L40,25 Z" fill="#FFD700"/>
        
        {/* Paint stroke */}
        <path d="M45,45 Q65,35 85,50" stroke="#FFD700" strokeWidth="4" fill="none" opacity="0.7"/>
        
        {/* Sparkles */}
        <g className="animate-pulse">
          <path d="M75,30 L76,33 L79,32 L76,35 L75,38 L74,35 L71,32 L74,33 Z" fill="#FFD700"/>
          <path d="M25,50 L26,52 L28,51 L26,53 L25,55 L24,53 L22,51 L24,52 Z" fill="#FFD700"/>
        </g>
      </svg>
    ),
    
    consulting: () => (
      <svg viewBox="0 0 120 120" className="w-full h-full">
        <defs>
          <linearGradient id="consultGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#607D8B" />
            <stop offset="100%" stopColor="#455A64" />
          </linearGradient>
        </defs>
        
        {/* Background */}
        <circle cx="60" cy="60" r="50" fill="url(#consultGradient)" opacity="0.2" />
        
        {/* Lightbulb */}
        <circle cx="60" cy="45" r="15" fill="#FFD700" opacity="0.8"/>
        <rect x="55" y="58" width="10" height="15" fill="#C0C0C0" rx="2"/>
        <rect x="53" y="73" width="14" height="3" fill="#8B4513" rx="1"/>
        
        {/* Filament */}
        <path d="M55,40 Q60,35 65,40 Q60,45 55,40" stroke="#FFA500" strokeWidth="2" fill="none"/>
        
        {/* Gears */}
        <g className="animate-spin" style={{transformOrigin: '80px 75px', animationDuration: '3s'}}>
          <circle cx="80" cy="75" r="8" fill="#FFD700"/>
          <circle cx="80" cy="75" r="5" fill="#2A2A2A"/>
          <rect x="76" y="67" width="8" height="2" fill="#FFD700"/>
          <rect x="76" y="81" width="8" height="2" fill="#FFD700"/>
          <rect x="72" y="71" width="2" height="8" fill="#FFD700"/>
          <rect x="86" y="71" width="2" height="8" fill="#FFD700"/>
        </g>
        
        <g className="animate-spin" style={{transformOrigin: '35px 80px', animationDuration: '2s', animationDirection: 'reverse'}}>
          <circle cx="35" cy="80" r="6" fill="#00BCD4"/>
          <circle cx="35" cy="80" r="3" fill="#2A2A2A"/>
          <rect x="32" y="74" width="6" height="1" fill="#00BCD4"/>
          <rect x="32" y="85" width="6" height="1" fill="#00BCD4"/>
          <rect x="29" y="77" width="1" height="6" fill="#00BCD4"/>
          <rect x="40" y="77" width="1" height="6" fill="#00BCD4"/>
        </g>
        
        {/* Rays */}
        <g className="animate-pulse">
          <line x1="60" y1="20" x2="60" y2="25" stroke="#FFD700" strokeWidth="2"/>
          <line x1="77" y1="28" x2="74" y2="31" stroke="#FFD700" strokeWidth="2"/>
          <line x1="85" y1="45" x2="80" y2="45" stroke="#FFD700" strokeWidth="2"/>
          <line x1="43" y1="28" x2="46" y2="31" stroke="#FFD700" strokeWidth="2"/>
          <line x1="35" y1="45" x2="40" y2="45" stroke="#FFD700" strokeWidth="2"/>
        </g>
      </svg>
    )
  };

  // Function to get the appropriate clip art based on service type
  const getClipArt = (service) => {
    const serviceTitle = service.title.en.toLowerCase();
    
    if (serviceTitle.includes('content') || serviceTitle.includes('creation')) {
      return <ClipArtGraphics.contentCreation />;
    } else if (serviceTitle.includes('social') || serviceTitle.includes('management')) {
      return <ClipArtGraphics.socialManagement />;
    } else if (serviceTitle.includes('analytics') || serviceTitle.includes('reporting')) {
      return <ClipArtGraphics.analytics />;
    } else if (serviceTitle.includes('advertising') || serviceTitle.includes('ads')) {
      return <ClipArtGraphics.advertising />;
    } else if (serviceTitle.includes('brand') || serviceTitle.includes('design')) {
      return <ClipArtGraphics.branding />;
    } else {
      return <ClipArtGraphics.consulting />;
    }
  };

  return (
    <section className="py-20 px-4 bg-brand-deep relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-brand-gold"></div>
        <div className="absolute top-40 right-20 w-16 h-16 rounded-full bg-brand-gold"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 rounded-full bg-brand-gold"></div>
        <div className="absolute bottom-40 right-1/3 w-24 h-24 rounded-full bg-brand-gold"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            {language === 'en' ? 'Our Services' : 'Huduma Zetu'}
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            {language === 'en' 
              ? 'Comprehensive social media solutions tailored to your business needs'
              : 'Suluhisho kamili za mitandao ya kijamii zilizofanywa kwa mahitaji ya biashara yako'
            }
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="group bg-brand-medium hover:bg-brand-medium/80 p-8 rounded-xl transition-all duration-500 hover:transform hover:scale-105 border border-brand-gold/10 hover:border-brand-gold/30 relative overflow-hidden">
                {/* Hover effect background */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Clip Art Graphics */}
                <div className="relative w-24 h-24 mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-500">
                  {getClipArt(service)}
                </div>
                
                {/* Traditional Icon (smaller, positioned in corner) */}
                <div className="absolute top-4 right-4 bg-brand-gold/10 w-8 h-8 rounded-lg flex items-center justify-center opacity-50">
                  <Icon className="w-4 h-4 text-brand-gold" />
                </div>
                
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold mb-4 text-white text-center group-hover:text-brand-gold transition-colors duration-300">
                    {service.title[language]}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-center group-hover:text-gray-200 transition-colors duration-300">
                    {service.description[language]}
                  </p>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-brand-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;