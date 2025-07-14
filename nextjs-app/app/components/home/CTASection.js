'use client';
import { useState, useEffect } from 'react';

export default function CTASection() {
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

  const content = {
    title: "Transform Your Vision Into Reality",
    subtitle: "Where innovative solutions meet exceptional execution",
    button: "Start Your Project"
  };

  // Enhanced floating elements with golden theme
  const floatingElements = [
    { left: 8.5, top: 25.2, delay: 0.5, duration: 8.5, size: 'w-4 h-4' },
    { left: 88.2, top: 15.8, delay: 1.2, duration: 9.8, size: 'w-3 h-3' },
    { left: 15.7, top: 75.4, delay: 0.8, duration: 10.2, size: 'w-5 h-5' },
    { left: 82.3, top: 85.6, delay: 1.8, duration: 8.9, size: 'w-3 h-3' },
    { left: 5.1, top: 65.9, delay: 0.3, duration: 11.1, size: 'w-4 h-4' },
    { left: 92.4, top: 45.7, delay: 1.5, duration: 9.3, size: 'w-6 h-6' },
    { left: 25.8, top: 12.3, delay: 0.9, duration: 10.7, size: 'w-3 h-3' },
    { left: 75.2, top: 78.9, delay: 1.1, duration: 8.6, size: 'w-4 h-4' }
  ];

  const lightRays = [
    { left: 15, delay: 0, duration: 8, width: 'w-0.5' },
    { left: 35, delay: 1.5, duration: 6, width: 'w-1' },
    { left: 55, delay: 2.5, duration: 7, width: 'w-0.5' },
    { left: 75, delay: 0.8, duration: 9, width: 'w-1' },
    { left: 85, delay: 1.8, duration: 6.5, width: 'w-0.5' }
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-brand-dark">
      {/* Enhanced gradient background with gold accents */}
      <div className="absolute inset-0">
        {/* Primary dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-deep to-brand-medium" />
        
        {/* Golden overlay with animation */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-gold/10 via-brand-goldLight/5 to-brand-gold/10 animate-pulse" />
        
        {/* Animated mesh pattern */}
        <div 
          className="absolute inset-0 opacity-20 transition-transform duration-1000"
          style={{
            backgroundImage: `
              radial-gradient(circle at 30% 20%, rgba(212, 175, 55, 0.15) 0%, transparent 60%),
              radial-gradient(circle at 70% 80%, rgba(245, 208, 122, 0.1) 0%, transparent 60%),
              radial-gradient(circle at 20% 70%, rgba(153, 101, 21, 0.1) 0%, transparent 50%)
            `,
            transform: `translate(${scrollY * 0.05}px, ${scrollY * 0.03}px) rotate(${scrollY * 0.01}deg)`
          }}
        />
      </div>

      {/* Animated Golden Light Rays */}
      {isClient && (
        <div className="absolute inset-0 pointer-events-none">
          {lightRays.map((ray, i) => (
            <div
              key={i}
              className={`absolute ${ray.width} bg-gradient-to-t from-transparent via-brand-gold/30 to-transparent animate-pulse`}
              style={{
                left: `${ray.left}%`,
                height: '120%',
                top: '-10%',
                transform: 'rotate(15deg)',
                animationDelay: `${ray.delay}s`,
                animationDuration: `${ray.duration}s`,
                filter: 'blur(1px)'
              }}
            />
          ))}
        </div>
      )}

      {/* Enhanced Floating Elements */}
      {isClient && (
        <div className="absolute inset-0 pointer-events-none">
          {floatingElements.map((element, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${element.left}%`,
                top: `${element.top}%`,
                animationDelay: `${element.delay}s`,
                animationDuration: `${element.duration}s`
              }}
            >
              <div className={`${element.size} bg-gradient-to-r from-brand-gold via-brand-goldLight to-brand-gold rounded-full backdrop-blur-sm shadow-gold animate-pulse`} />
            </div>
          ))}
        </div>
      )}

      {/* Elegant Grid Pattern */}
      <div className="absolute inset-0 opacity-5 z-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(212, 175, 55, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212, 175, 55, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }} />
      </div>

      {/* Main Content */}
      <div className="relative z-20 flex items-center justify-center min-h-screen">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Content Side */}
              <div className="text-center lg:text-left order-2 lg:order-1">
                {/* Enhanced glassmorphism container */}
                <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-brand-gold/20 shadow-gold transform transition-all duration-700 hover:scale-105 hover:shadow-2xl">
                  
                  {/* Animated title with gold accent */}
                  <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 drop-shadow-2xl opacity-0 animate-fade-in leading-tight">
                    {content.title}
                    <div className="flex justify-center lg:justify-start mt-6">
                      <span className="block w-20 h-1.5 bg-gradient-to-r from-brand-gold via-brand-goldLight to-brand-gold rounded-full shadow-gold animate-pulse"></span>
                    </div>
                  </h2>
                  
                  {/* Enhanced subtitle */}
                  <p className="text-lg md:text-xl text-brand-goldLight max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed drop-shadow-lg opacity-0 animate-fade-in-delay">
                    {content.subtitle}
                  </p>
                  
                  {/* Premium CTA button */}
                  <div className="relative inline-block group opacity-0 animate-fade-in-delay-2">
                    {/* Enhanced glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-gold via-brand-goldLight to-brand-gold rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition-all duration-500 animate-pulse scale-110"></div>
                    
                    {/* Main button with enhanced styling */}
                    <button className="relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-brand-gold/90 to-brand-goldLight/90 backdrop-blur-md text-brand-dark text-lg font-bold rounded-2xl shadow-gold hover:shadow-2xl transition-all duration-300 border-2 border-brand-gold/50 hover:border-brand-goldLight transform hover:scale-110 hover:-translate-y-1 group">
                      <span className="relative z-10 flex items-center">
                        {content.button}
                        <svg className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-2 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                    </button>
                  </div>

                  {/* Decorative elements */}
                  <div className="mt-8 flex justify-center lg:justify-start space-x-6">
                    <div className="w-2 h-2 bg-brand-gold rounded-full animate-ping"></div>
                    <div className="w-2 h-2 bg-brand-goldLight rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                    <div className="w-2 h-2 bg-brand-gold rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
                  </div>
                </div>
              </div>

              {/* Image Side */}
              <div className="order-1 lg:order-2">
                <div className="relative group">
                  {/* Image container with golden frame effect */}
                  <div className="relative overflow-hidden rounded-3xl shadow-gold bg-gradient-to-br from-brand-gold/20 to-brand-goldLight/20 backdrop-blur-sm border border-brand-gold/30 transform transition-all duration-700 hover:scale-105 hover:shadow-2xl">
                    
                    {/* Business image with golden overlay */}
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <img 
                        src="/images/businessman.jpeg" 
                        alt="Business professional" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      
                      {/* Golden overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-brand-gold/20 via-transparent to-brand-goldLight/10 transition-opacity duration-500 group-hover:opacity-30" />
                      
                      {/* Subtle pattern overlay */}
                      <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500" style={{
                        backgroundImage: `
                          radial-gradient(circle at 25% 25%, rgba(212, 175, 55, 0.3) 0%, transparent 50%),
                          radial-gradient(circle at 75% 75%, rgba(245, 208, 122, 0.2) 0%, transparent 50%)
                        `
                      }} />
                    </div>
                    
                    {/* Golden border animation */}
                    <div className="absolute inset-0 border-2 border-brand-gold/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
                  </div>
                  
                  {/* Decorative elements around image */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-brand-gold to-brand-goldLight rounded-full shadow-gold animate-bounce"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-brand-goldLight to-brand-gold rounded-full shadow-gold animate-bounce" style={{animationDelay: '1s'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced decorative bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-r from-transparent via-brand-gold via-brand-goldLight to-transparent animate-pulse shadow-gold"></div>
      
      {/* Corner decorations */}
      <div className="absolute top-10 left-10 w-20 h-20 border-l-2 border-t-2 border-brand-gold/30 rounded-tl-lg"></div>
      <div className="absolute bottom-10 right-10 w-20 h-20 border-r-2 border-b-2 border-brand-gold/30 rounded-br-lg"></div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out 0.3s forwards;
        }
        
        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.7s forwards;
        }
        
        .animate-fade-in-delay-2 {
          animation: fade-in 1s ease-out 1.1s forwards;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}