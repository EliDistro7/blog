import React, { useState, useEffect, useCallback } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Globe, Users, Heart, Building } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function TestimonialCarousel() {
  const {language} = useLanguage(); // it returns either "sw" for swahili or "en" for english;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const translations = {
    en: {
      sectionBadge: "Client Success Stories",
      mainTitle: "What Our Clients Say",
      subtitle: "Discover how we've transformed businesses across Tanzania with our digital solutions",
      previous: "Previous",
      next: "Next",
      stats: {
        websites: "Websites Delivered",
        clients: "Happy Clients", 
        projects: "Projects Completed",
        experience: "Years Experience"
      }
    },
    sw: {
      sectionBadge: "Hadithi za Mafanikio ya Wateja",
      mainTitle: "Wateja Wetu Wanasema Nini",
      subtitle: "Gundua jinsi tulivyobadilisha biashara kote Tanzania kwa suluhisho zetu za kidijitali",
      previous: "Iliyopita",
      next: "Ifuatayo",
      stats: {
        websites: "Tovuti Zilizotolewa",
        clients: "Wateja Wenye Furaha",
        projects: "Miradi Iliyokamilika", 
        experience: "Miaka ya Uzoefu"
      }
    }
  };

  const testimonials = [
    { 
      quote: {
        en: "Future Holders built our website in just 10 days—absolutely flawless execution and stunning design. Their team's attention to detail made our brand shine online.",
        sw: "Future Holders walijenga tovuti yetu kwa siku 10 pekee—utekelezaji bila hitilafu yoyote na muundo wa kuvutia. Umakini wa timu yao kwa maelezo ulifanya chapa yetu ing'ae mtandaoni."
      },
      author: "Salila Mohammed",
      title: "Executive Director & Founder",
      company: "Amka Kijana Organisation",
      website: "www.amkakijana.org",
      image: "/images/amka.jpeg",
      rating: 5,
      category: "NGO - Health Education",
      icon: <Heart className="w-5 h-5" />
    },
    { 
      quote: {
        en: "Their photography platform revolutionized how we showcase and sell our work. The seamless integration and user-friendly interface exceeded all our expectations.",
        sw: "Jukwaa lao la upigaji picha lilibadilisha jinsi tunavyoonyesha na kuuza kazi yetu. Muunganiko usio na matatizo na kiolesura rahisi kutumia vilivukia matarajio yetu yote."
      },
      author: "James Mwalimu",
      title: "Professional Photographer",
      company: "Pichazangu Photography",
      website: "www.pichazangu.store.com",
      image: "/api/placeholder/100/100",
      rating: 5,
      category: "Photography Platform",
      icon: <Globe className="w-5 h-5" />
    },
    { 
      quote: {
        en: "Our agriculture business needed a professional online presence, and Future Holders delivered beyond expectations. The site perfectly represents our brand values.",
        sw: "Biashara yetu ya kilimo ilihitaji uwepo wa kitaalamu mtandaoni, na Future Holders walitoa zaidi ya matarajio. Tovuti inawakilisha vizuri maadili ya chapa yetu."
      },
      author: "Sarah Kamau",
      title: "Managing Director",
      company: "Four Freyn Agriculture",
      website: "www.fourfreyn.com",
      image: "/api/placeholder/100/100",
      rating: 5,
      category: "Agriculture Business",
      icon: <Building className="w-5 h-5" />
    },
    { 
      quote: {
        en: "The church management system transformed how we connect with our congregation. Modern technology meeting spiritual community needs perfectly.",
        sw: "Mfumo wa usimamizi wa kanisa uliibadilisha jinsi tunavyounganishwa na waumini wetu. Teknolojia ya kisasa inakutana na mahitaji ya kijamii ya kiroho vizuri."
      },
      author: "Pastor Martin Kileo",
      title: "Senior Pastor",
      company: "KKKTYOMBO Lutheran Church",
      website: "www.kkktyombo.org",
      image: "/api/placeholder/100/100",
      rating: 5,
      category: "Church Management",
      icon: <Users className="w-5 h-5" />
    },
    { 
      quote: {
        en: "Their catering team made our wedding absolutely unforgettable. The presentation was magazine-worthy, and every guest raved about the cuisine. Pure elegance from start to finish.",
        sw: "Timu yao ya upishi ilifanya harusi yetu kuwa isiyo sahaulika kabisa. Uwasilishaji ulikuwa wa kiwango cha jarida, na kila mgeni alisifu mapishi. Uzuri wa hali ya juu kutoka mwanzo hadi mwisho."
      },
      author: "David Lumumba",
      title: "Entrepreneur",
      company: "Lumumba Ventures",
      website: "Private Client",
      image: "/api/placeholder/100/100",
      rating: 5,
      category: "Catering Services",
      icon: <Heart className="w-5 h-5" />
    },
    { 
      quote: {
        en: "Our social media engagement doubled in just one month after partnering with Future Holders! Their strategic approach and creative content transformed our brand's digital presence.",
        sw: "Mwingiliano wetu wa mitandao ya kijamii uliongezeka mara mbili kwa mwezi mmoja tu baada ya kushirikiana na Future Holders! Mbinu yao ya kimkakati na maudhui ya ubunifu ziliimarisha uwepo wa chapa yetu kwenye mitandao."
      },
      author: "Jackson Maganga",
      title: "CEO",
      company: "EcoSolutions Tanzania",
      website: "Social Media Client",
      image: "/api/placeholder/100/100",
      rating: 5,
      category: "Social Media Management",
      icon: <Globe className="w-5 h-5" />
    }
  ];

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(nextSlide, 6000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, nextSlide]);

  const t = translations[language];

  return (
    <div className="relative w-full py-8 sm:py-16 bg-gradient-to-br from-brand-dark via-brand-deep to-brand-medium overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-brand-accent/20 to-transparent rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl animate-float"></div>
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-gradient-to-tl from-brand-coral/20 to-transparent rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-gradient-to-t from-brand-teal/20 to-transparent rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      <div className="relative w-full px-2 sm:px-2 md:px-2 lg:px-8 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-16 px-2">
          <div className="inline-flex items-center gap-2 bg-brand-accent/10 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 mb-4 sm:mb-6">
            <Star className="w-4 h-4 sm:w-5 sm:h-5 text-brand-gold animate-pulse" />
            <span className="text-brand-gold font-medium text-sm sm:text-base">{t.sectionBadge}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 px-2">
            {language === 'en' ? (
              <>
                What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-coral">Clients Say</span>
              </>
            ) : (
              <>
                Wateja Wetu <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-coral">Wanasema Nini</span>
              </>
            )}
          </h2>
          <p className="text-lg sm:text-xl text-brand-light max-w-2xl mx-auto px-2">
            {t.subtitle}
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="relative">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-12 border border-white/10 shadow-depth mx-2 sm:mx-0">
            <div className="grid lg:grid-cols-5 gap-6 sm:gap-8 items-center">
              {/* Profile Section */}
              <div className="lg:col-span-2 text-center lg:text-left">
                <div className="relative inline-block mb-4 sm:mb-6">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-accent via-brand-coral to-brand-teal transform rotate-12 scale-110 blur-sm opacity-60"></div>
                  <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-white/20 shadow-glow bg-gradient-to-br from-brand-accent to-brand-coral mx-auto flex items-center justify-center">
                    <span className="text-white font-bold text-lg sm:text-2xl">
                      {testimonials[activeIndex].author.split(' ').map(name => name.charAt(0)).join('')}
                    </span>
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-brand-gold rounded-full p-2 shadow-lg">
                    {testimonials[activeIndex].icon}
                  </div>
                </div>
                
                <div className="flex justify-center lg:justify-start gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      className={`sm:w-5 sm:h-5 ${i < testimonials[activeIndex].rating ? "fill-brand-gold text-brand-gold" : "text-brand-light/30"} transition-colors duration-300`}
                    />
                  ))}
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  {testimonials[activeIndex].author}
                </h3>
                <p className="text-brand-accent font-semibold mb-1 text-sm sm:text-base">
                  {testimonials[activeIndex].title}
                </p>
                <p className="text-brand-light mb-3 text-sm sm:text-base">
                  {testimonials[activeIndex].company}
                </p>
                <div className="inline-flex items-center gap-2 bg-brand-accent/10 rounded-full px-3 sm:px-4 py-2">
                  <span className="text-brand-gold text-xs sm:text-sm font-medium">
                    {testimonials[activeIndex].category}
                  </span>
                </div>
                {testimonials[activeIndex].website !== "Private Client" && testimonials[activeIndex].website !== "Social Media Client" && (
                  <p className="text-brand-coral text-xs sm:text-sm mt-2 font-mono">
                    {testimonials[activeIndex].website}
                  </p>
                )}
              </div>
              
              {/* Quote Section */}
              <div className="lg:col-span-3 relative">
                <Quote size={40} className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 text-brand-accent/20 sm:w-15 sm:h-15" />
                <blockquote className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-white leading-relaxed pl-6 sm:pl-8 pr-2 sm:pr-4">
                  &ldquo;{testimonials[activeIndex].quote[language]}&rdquo;
                </blockquote>
                <div className="absolute bottom-0 right-0 w-12 sm:w-16 h-1 bg-gradient-to-r from-brand-accent to-brand-coral rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-6 sm:mt-8 px-2 sm:px-0">
            <button
              onClick={prevSlide}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
              className="group flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 text-white transition-all duration-300 border border-white/20 hover:border-brand-accent/50"
            >
              <ChevronLeft size={18} className="sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="hidden sm:inline text-sm sm:text-base">{t.previous}</span>
            </button>

            <div className="flex gap-2 sm:gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex 
                      ? 'bg-brand-accent scale-125 shadow-glow' 
                      : 'bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
              className="group flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 text-white transition-all duration-300 border border-white/20 hover:border-brand-accent/50"
            >
              <span className="hidden sm:inline text-sm sm:text-base">{t.next}</span>
              <ChevronRight size={18} className="sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 mt-12 sm:mt-16 px-2 sm:px-0">
          {[
            { label: t.stats.websites, value: "50+", icon: <Globe className="w-5 h-5 sm:w-6 sm:h-6" /> },
            { label: t.stats.clients, value: "40+", icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" /> },
            { label: t.stats.projects, value: "60+", icon: <Building className="w-5 h-5 sm:w-6 sm:h-6" /> },
            { label: t.stats.experience, value: "5+", icon: <Star className="w-5 h-5 sm:w-6 sm:h-6" /> }
          ].map((stat, index) => (
            <div key={index} className="text-center bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 border border-white/10 hover:border-brand-accent/30 transition-all duration-300 group">
              <div className="text-brand-gold mb-2 flex justify-center group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-brand-light text-xs sm:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}