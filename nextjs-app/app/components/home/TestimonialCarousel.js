import React, { useState, useEffect, useCallback } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Globe, Users, Heart, Building } from 'lucide-react';

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

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

  return (
    <div className="relative w-full py-16 bg-gradient-to-br from-brand-dark via-brand-deep to-brand-medium overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-brand-accent/20 to-transparent rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl animate-float"></div>
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-gradient-to-tl from-brand-coral/20 to-transparent rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-gradient-to-t from-brand-teal/20 to-transparent rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-accent/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <Star className="w-5 h-5 text-brand-gold animate-pulse" />
            <span className="text-brand-gold font-medium">Client Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-coral">Clients Say</span>
          </h2>
          <p className="text-xl text-brand-light max-w-2xl mx-auto">
            Discover how we&apos;ve transformed businesses across Tanzania with our digital solutions
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="relative">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10 shadow-depth">
            <div className="grid lg:grid-cols-5 gap-8 items-center">
              {/* Profile Section */}
              <div className="lg:col-span-2 text-center lg:text-left">
                <div className="relative inline-block mb-6">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-accent via-brand-coral to-brand-teal transform rotate-12 scale-110 blur-sm opacity-60"></div>
                  <div className="relative w-32 h-32 rounded-full border-4 border-white/20 shadow-glow overflow-hidden mx-auto">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={testimonials[activeIndex].image} 
                      alt={testimonials[activeIndex].author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-brand-gold rounded-full p-2 shadow-lg">
                    {testimonials[activeIndex].icon}
                  </div>
                </div>
                
                <div className="flex justify-center lg:justify-start gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={20} 
                      className={`${i < testimonials[activeIndex].rating ? "fill-brand-gold text-brand-gold" : "text-brand-light/30"} transition-colors duration-300`}
                    />
                  ))}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">
                  {testimonials[activeIndex].author}
                </h3>
                <p className="text-brand-accent font-semibold mb-1">
                  {testimonials[activeIndex].title}
                </p>
                <p className="text-brand-light mb-3">
                  {testimonials[activeIndex].company}
                </p>
                <div className="inline-flex items-center gap-2 bg-brand-accent/10 rounded-full px-4 py-2">
                  <span className="text-brand-gold text-sm font-medium">
                    {testimonials[activeIndex].category}
                  </span>
                </div>
                {testimonials[activeIndex].website !== "Private Client" && testimonials[activeIndex].website !== "Social Media Client" && (
                  <p className="text-brand-coral text-sm mt-2 font-mono">
                    {testimonials[activeIndex].website}
                  </p>
                )}
              </div>
              
              {/* Quote Section */}
              <div className="lg:col-span-3 relative">
                <Quote size={60} className="absolute -top-4 -left-4 text-brand-accent/20" />
                <blockquote className="text-xl md:text-2xl lg:text-3xl font-light text-white leading-relaxed pl-8 pr-4">
                  &ldquo;{testimonials[activeIndex].quote.en}&rdquo;
                </blockquote>
                <div className="absolute bottom-0 right-0 w-16 h-1 bg-gradient-to-r from-brand-accent to-brand-coral rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={prevSlide}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
              className="group flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-white transition-all duration-300 border border-white/20 hover:border-brand-accent/50"
            >
              <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              <span className="hidden sm:inline">Previous</span>
            </button>

            <div className="flex gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
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
              className="group flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-white transition-all duration-300 border border-white/20 hover:border-brand-accent/50"
            >
              <span className="hidden sm:inline">Next</span>
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { label: "Websites Delivered", value: "50+", icon: <Globe className="w-6 h-6" /> },
            { label: "Happy Clients", value: "40+", icon: <Users className="w-6 h-6" /> },
            { label: "Projects Completed", value: "60+", icon: <Building className="w-6 h-6" /> },
            { label: "Years Experience", value: "5+", icon: <Star className="w-6 h-6" /> }
          ].map((stat, index) => (
            <div key={index} className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-brand-accent/30 transition-all duration-300 group">
              <div className="text-brand-gold mb-2 flex justify-center group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-brand-light text-sm">{stat.label}</div>
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