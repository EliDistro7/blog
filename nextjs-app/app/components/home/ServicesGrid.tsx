

import { Camera, Utensils, Mic2, Share2 } from 'lucide-react';
import Image from 'next/image';

function ServicesGrid() {
    const services = [
        {
          title: "Web Design",
          desc: "Stunning, responsive websites tailored to your brand identity and business goals.",
          icon: <Camera className="w-10 h-10 text-brand-accent" />,
          color: "bg-brand-accent/10",
          image: "/services/web-design-2.jpg",
          buttonColor: "bg-brand-accent hover:bg-brand-accent/90"
        },
        {
          title: "Catering Services",
          desc: "Exquisite gourmet experiences and flawless event catering for memorable occasions.",
          icon: <Utensils className="w-10 h-10 text-brand-coral" />,
          color: "bg-brand-coral/10",
          image: "/services/catering-bg.jpg",
          buttonColor: "bg-brand-coral hover:bg-brand-coral/90"
        },
        {
          title: "Social Media Management",
          desc: "Strategic campaigns to amplify your digital presence and engagement.",
          icon: <Share2 className="w-10 h-10 text-brand-teal" />,
          color: "bg-brand-teal/10",
          image: "/services/social-media-bg.jpg",
          buttonColor: "bg-brand-teal hover:bg-brand-teal/90"
        },
        {
          title: "Master of Ceremonies",
          desc: "Charismatic hosts to elevate your events with professional flair.",
          icon: <Mic2 className="w-10 h-10 text-brand-deep" />,
          color: "bg-brand-deep/10",
          image: "/services/mc-bg.jpg",
          buttonColor: "bg-brand-deep hover:bg-brand-deep/90"
        },
      ];

  return (
    <section className="container mx-auto py-20 px-4 relative">
      {/* Section Background Pattern */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <Image 
          src="/services/grid-pattern.svg" 
          alt="Decorative pattern"
          fill
          className="object-cover"
        />
      </div>
      
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-brand-dark font-serif">
        Our <span className="text-brand-accent">Premium Services</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
}

function ServiceCard({ title, desc, icon, color, image, buttonColor }: { 
  title: string;
  desc: string;
  icon: React.ReactNode;
  color: string;
  image?: string;
  buttonColor?: string;
}) {
  return (
    <div className={`group relative overflow-hidden rounded-xl h-full ${color} hover:shadow-layer transition-all`}>
      {/* Background Image */}
      {image && (
        <div className="absolute inset-0 -z-10 opacity-20 group-hover:opacity-30 transition-opacity">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      )}
      
      {/* Content */}
      <div className="p-8 h-full flex flex-col backdrop-blur-sm">
        <div className="flex items-center gap-5 mb-6">
          <div className="p-3 rounded-lg bg-white/20 backdrop-blur-sm">
            {icon}
          </div>
          <h3 className="text-2xl font-bold text-brand-dark font-serif tracking-tight">
            {title}
          </h3>
        </div>
        
        <p className="text-gray-700 text-lg leading-relaxed mb-6 flex-grow">
          {desc}
        </p>
        
        <div className="flex gap-3 mt-auto">
          <button className={`px-4 py-2 rounded-full text-white font-bold transition-colors ${buttonColor}`}>
            Get Quote
          </button>
          <button className="px-4 py-2 text-sm font-semibold text-brand-dark hover:text-brand-accent transition-colors">
            Learn more →
          </button>
        </div>
      </div>
    </div>
  );
}

export default ServicesGrid