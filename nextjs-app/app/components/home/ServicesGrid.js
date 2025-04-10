import { Camera, Utensils, Mic2, Share2 } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';

function ServicesGrid() {
  const { language } = useLanguage();

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
        sw: "Tovuti zenye kuvutia na zinazobadilika kulingana na kifaa, zilizobuniwa kwa kufuata utambulisho wa chapa yako na malengo ya biashara."
      },
      icon: <Camera key="camera-icon" className="w-10 h-10 text-brand-accent" />,
      color: "bg-brand-accent/10",
      image: "/services/web-design-2.jpg",
      buttonColor: "bg-brand-accent hover:bg-brand-accent/90",
      buttonText: {
        en: "Get Quote",
        sw: "Pata Bei"
      },
      learnMore: {
        en: "Learn more →",
        sw: "Jifunze zaidi →"
      }
    },
    {
      id: 'catering',
      link: '/services/catering',
      title: {
        en: "Catering Services",
        sw: "Huduma za Chakula"
      },
      desc: {
        en: "Exquisite gourmet experiences and flawless event catering for memorable occasions.",
        sw: "Uzoefu wa hali ya juu wa vyakula na huduma bora za chakula kwa hafla zisizosahaulika."
      },
      icon: <Utensils key="utensils-icon" className="w-10 h-10 text-brand-coral" />,
      color: "bg-brand-coral/10",
      image: "/images/catering.jpg",
      buttonColor: "bg-brand-coral hover:bg-brand-coral/90",
      buttonText: {
        en: "Get Quote",
        sw: "Pata Bei"
      },
      learnMore: {
        en: "Learn more →",
        sw: "Jifunze zaidi →"
      }
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
        sw: "Kampeni za kimkakati za kuongeza uwepo wako mtandaoni."
      },
      icon: <Share2 key="share-icon" className="w-10 h-10 text-brand-teal" />,
      color: "bg-brand-teal/10",
      image: "/images/social-media.jpg",
      buttonColor: "bg-brand-teal hover:bg-brand-teal/90",
      buttonText: {
        en: "Get Quote",
        sw: "Pata Bei"
      },
      learnMore: {
        en: "Learn more →",
        sw: "Jifunze zaidi →"
      }
    },
    {
      id: 'mc',
      link: '/services/mc-services',
      title: {
        en: "Master of Ceremonies",
        sw: "Mwenye Sherehe"
      },
      desc: {
        en: "Charismatic hosts to elevate your events with professional flair.",
        sw: "Wenyeji wenye ukarimu wa kuinua hafla zako kwa ufundi wa kitaaluma."
      },
      icon: <Mic2 key="mic-icon" className="w-10 h-10 text-brand-deep" />,
      color: "bg-brand-deep/10",
      image: "/images/mc.jpg",
      buttonColor: "bg-brand-deep hover:bg-brand-deep/90",
      buttonText: {
        en: "Get Quote",
        sw: "Pata Bei"
      },
      learnMore: {
        en: "Learn more →",
        sw: "Jifunze zaidi →"
      }
    },
  ];
  

  const sectionTitles = {
    en: {
      main: "Our Premium Services",
      highlighted: "Premium Services"
    },
    sw: {
      main: "Huduma Zetu za Hali ya Juu",
      highlighted: "Huduma za Hali ya Juu"
    }
  };

  return (
    <section className="container mx-auto py-20 px-4 relative">
      {/* Section Background Pattern */}
      
      
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-brand-dark font-serif">
        {sectionTitles[language].main}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
        {services.map((service) => (
          <ServiceCard 
            key={service.id} // Using the unique id as key
            title={service.title[language]}
            desc={service.desc[language]}
            icon={service.icon}
            link={service.link}
            color={service.color}
            image={service.image}
            buttonColor={service.buttonColor}
            buttonText={service.buttonText[language]}
            learnMore={service.learnMore[language]}
          />
        ))}
      </div>
    </section>
  );
}

import { Fade, Slide } from "react-awesome-reveal";

function ServiceCard({ 
  title, 
  desc, 
  icon,
  color,
  image,
  link,
  buttonColor, 
  buttonText,
  learnMore
}) {
  return (
    <div className="group relative h-[500px] overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 bg-brand-dark">
      {/* Image Container with Contrast Overlay */}
      <div className="absolute inset-0 mask-organic overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/60 via-brand-dark/60 to-brand-accent/30" />
      </div>

      {/* Content Section with React Awesome Reveal */}
      <div className="relative h-full flex flex-col justify-between p-8">
        <Fade triggerOnce cascade damping={0.1}>
          {/* Top Section */}
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-brand-foam/20 backdrop-blur-lg border border-brand-foam/30">
              <Slide triggerOnce direction="up" delay={100}>
                {icon}
              </Slide>
            </div>
            <h3 className="text-3xl font-bold font-serif tracking-tight text-brand-foam drop-shadow-lg">
              {title}
            </h3>
          </div>

          {/* Center Description */}
          <p className="text-lg leading-relaxed max-w-[80%] text-brand-foam/90">
            <Fade triggerOnce delay={200}>
              {desc}
            </Fade>
          </p>

          {/* Bottom Actions */}
          <div className="flex gap-4">
            <Fade triggerOnce delay={300}>
              <button 
                className={`px-6 py-3 rounded-xl ${buttonColor} backdrop-blur-sm border border-brand-foam/30 
                  text-brand-foam hover:scale-105 transition-transform shadow-lg`}
              >
                {buttonText}
              </button>
            </Fade>
            <Fade triggerOnce delay={350}>
              <Link 
                href={link} 
                className="px-6 py-3 rounded-xl bg-brand-foam/10 backdrop-blur-sm border border-brand-foam/30 
                  hover:bg-brand-accent/30 hover:scale-105 transition-all text-brand-foam"
              >
                <span className="font-semibold">{learnMore}</span>
              </Link>
            </Fade>
          </div>
        </Fade>
      </div>

      {/* Contrast Border */}
      <div className="absolute inset-0 border-2 border-brand-foam/10 rounded-3xl pointer-events-none" />
    </div>
  );
}

export default ServicesGrid;