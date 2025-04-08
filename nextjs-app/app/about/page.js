'use client';

import { Libre_Baskerville, Source_Sans_3 as Source_Sans_Pro } from "next/font/google";
import { Zap, Cpu, Utensils, Mic2, Share2, Users, Globe, Award, HeartHandshake } from 'lucide-react';
import Link from "next/link";
import { useLanguage } from '@/context/LanguageContext';

const baskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-baskerville"
});

const sourceSans = Source_Sans_Pro({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-source-sans"
});

export default function AboutPage() {
  const { language } = useLanguage();

  // Translation content
  const content = {
    en: {
      hero: {
        title: "Our Story",
        subtitle: "Pioneering multi-service solutions for Tanzania's evolving business landscape"
      },
      mission: {
        title: "Redefining Possibilities",
        paragraphs: [
          "Founded in Dar es Salaam, Future Holders emerged from a vision to create a one-stop solution for businesses navigating the digital and physical event spaces. We bridge the gap between technology and hospitality, offering integrated services that cover all aspects of modern business needs.",
          "What began as a small web design studio has blossomed into a full-service agency, expanding our expertise to include catering, event hosting, and digital marketing - all while maintaining our commitment to technological innovation."
        ]
      },
      services: {
        title: "Our Integrated Services",
        subtitle: "Comprehensive solutions for complete business transformation",
        items: [
          {
            name: "Web Design",
            description: "Cutting-edge digital solutions that propel your business forward"
          },
          {
            name: "Catering",
            description: "Exceptional culinary experiences for all occasions"
          },
          {
            name: "Social Media management",
            description: "Strategic digital presence that amplifies your brand"
          },
          {
            name: "MC Services",
            description: "Dynamic hosting that elevates your events"
          }
        ]
      },
      values: {
        title: "Our Core Values",
        subtitle: "The principles that guide every decision we make",
        items: [
          {
            name: "Innovation",
            description: "Pioneering solutions that set industry standards"
          },
          {
            name: "Excellence",
            description: "Uncompromising quality in every service delivered"
          },
          {
            name: "Collaboration",
            description: "Building lasting partnerships for mutual success"
          }
        ]
      },
      team: {
        title: "Meet The Architects of Tomorrow",
        subtitle: "Our diverse team of experts brings together technology and creativity to deliver exceptional results",
        cta: "Explore Our Team"
      },
      global: {
        title: "Tanzania's Trusted Multi-Service Partner",
        subtitle: "Serving clients across East Africa with our unique integrated approach",
        footprint: {
          title: "Our Footprint",
          description: "From our headquarters in Dar es Salaam, we've expanded our services to Nairobi and Cape Town, bringing our unique combination of digital expertise and event services to clients across East Africa.",
          stats: [
            "3 Countries",
            "50+ Professionals",
            "100+ Successful Projects"
          ]
        }
      }
    },
    sw: {
      hero: {
        title: "Historia Yetu",
        subtitle: "Kuanzisha suluhisho za huduma mbalimbali kwa mazingira ya biashara ya Tanzania"
      },
      mission: {
        title: "Redening Possibilities",
        paragraphs: [
          "Iliyoanzishwa Dar es Salaam, Future Holders ilitokana na dhamira ya kuunda suluhisho moja kwa biashara zinazotafuta nafasi ya kidijitali na matukio halisi. Tunajenga daraja kati ya teknolojia na ukarimu, tukitoa huduma zinazoshughulikia mahitaji yote ya biashara ya kisasa.",
          "Yaliyoanza kama studio ndogo ya ubunifu wa tovuti yamekuwa kampuni kamili ya huduma, ikiwa na utaalamu wa upishi, uandaa wa matukio, na uuzaji wa kidijitali - huku tukidumisha msimamo wetu wa ubunifu wa kiteknolojia."
        ]
      },
      services: {
        title: "Huduma Zetu Zilizounganishwa",
        subtitle: "Suluhisho kamili za mabadiliko kamili ya biashara",
        items: [
          {
            name: "Uundaji wa Tovuti",
            description: "Suluhisho za hali ya juu za kidijitali zinazosukuma biashara yako mbele"
          },
          {
            name: "Upishi",
            description: "Uzoefu bora wa kupikia kwa hafla zote"
          },
          {
            name: "Usimamizi wa Mitandao ya Kijamii",
            description: "Uwepo wa kidijitali wa kimkakati unaoimarisha chapa yako"
          },
          {
            name: "Huduma za MC",
            description: "Uandaa wa matukio unaovuta"
          }
        ]
      },
      values: {
        title: "Maadili Yetu Ya Msingi",
        subtitle: "Kanuni zinazoongoza kila uamuzi tunaochukua",
        items: [
          {
            name: "Ubunifu",
            description: "Suluhisho za kipekee zinazoanzisha viwango vya sekta"
          },
          {
            name: "Ubora",
            description: "Ubora usiokomaa katika kila huduma tunayotoa"
          },
          {
            name: "Ushirikiano",
            description: "Kujenga uhusiano wa kudumu kwa mafanikio ya pande zote"
          }
        ]
      },
      team: {
        title: "Kutana Na Waandaaji Wa Kesho",
        subtitle: "Timu yetu ya wataalamu inaunganisha teknolojia na ubunifu kutoa matokeo bora",
        cta: "Gundua Timu Yetu"
      },
      global: {
        title: "Mshirika Wa Huduma Nyingi Anayetumika Tanzania",
        subtitle: "Tunahudumia wateja kote Afrika Mashariki kwa mbinu yetu ya kipekee",
        footprint: {
          title: "Uenezi Wetu",
          description: "Kutoka makao makuu yetu Dar es Salaam, tumepanua huduma zetu hadi Nairobi na Cape Town, tukileta mchanganyiko wetu wa utaalamu wa kidijitali na huduma za matukio kwa wateja kote Afrika Mashariki.",
          stats: [
            "Nchi 3",
            "Wataalamu 50+",
            "Miradi 100+ Iliyofanikiwa"
          ]
        }
      }
    }
  };

  const services = content[language].services.items.map((item, index) => {
    const colors = [
      { icon: <Cpu className="w-6 h-6 text-brand-accent" />, bg: "bg-brand-accent/10", border: "border-brand-accent/20" },
      { icon: <Utensils className="w-6 h-6 text-brand-coral" />, bg: "bg-brand-coral/10", border: "border-brand-coral/20" },
      { icon: <Share2 className="w-6 h-6 text-brand-teal" />, bg: "bg-brand-teal/10", border: "border-brand-teal/20" },
      { icon: <Mic2 className="w-6 h-6 text-brand-foam" />, bg: "bg-brand-foam/10", border: "border-brand-foam/20" }
    ];
    return { ...item, ...colors[index] };
  });

  const values = content[language].values.items.map((item, index) => {
    const icons = [
      <Zap key="zap-icon" className="w-6 h-6 text-brand-accent" />,
      <Award key='award-icon' className="w-6 h-6 text-brand-blue" />,
      <HeartHandshake key='handshake-icon' className="w-6 h-6 text-brand-coral" />
    ];
    return { ...item, icon: icons[index] };
  });

  return (
    <div className={`min-h-screen ${sourceSans.variable} font-sans bg-brand-foam text-brand-dark`}>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-brand-dark to-brand-blue py-32 text-center">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/circuit-pattern.svg')] bg-[size:1200px]"></div>
        <div className="container relative z-10 px-4">
          <h1 className={`text-4xl md:text-6xl font-bold ${baskerville.variable} font-serif text-white mb-6`}>
            {content[language].hero.title}
          </h1>
          <p className="text-xl text-brand-foam/90 max-w-3xl mx-auto">
            {content[language].hero.subtitle}
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-brand-foam clip-path-wave"></div>
      </div>

      {/* Mission Section */}
      <section className="container py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-3xl font-bold ${baskerville.variable} font-serif text-brand-dark mb-6`}>
            {content[language].mission.title}
          </h2>
          <div className="space-y-6 text-brand-dark/90">
            {content[language].mission.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="bg-gradient-to-b from-white to-brand-foam/50 py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-3xl font-bold ${baskerville.variable} font-serif text-brand-dark mb-4`}>
              {content[language].services.title}
            </h2>
            <p className="text-brand-dark/80 text-lg">
              {content[language].services.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div 
              key={`service-${index}`}
                className={`p-6 rounded-xl ${service.bg} border ${service.border} hover:shadow-glow transition-all`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-lg ${service.bg.replace('10', '20')}`}>
                    {service.icon}
                  </div>
                  <h3 className={`text-xl font-bold ${baskerville.variable} font-serif`}>
                    {service.name}
                  </h3>
                </div>
                <p className="text-brand-dark/80">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="container py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-3xl font-bold ${baskerville.variable} font-serif text-brand-dark mb-4`}>
              {content[language].values.title}
            </h2>
            <p className="text-brand-dark/80 text-lg">
              {content[language].values.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
                <div key={`value-${index}`} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-brand-foam rounded-full">
                    {value.icon}
                  </div>
                </div>
                <h3 className={`text-xl font-bold ${baskerville.variable} font-serif text-brand-dark mb-2`}>
                  {value.name}
                </h3>
                <p className="text-brand-dark/80">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="bg-gradient-to-r from-brand-blue to-brand-accent py-16 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className={`text-3xl font-bold ${baskerville.variable} font-serif text-white mb-6`}>
            {content[language].team.title}
          </h2>
          <p className="text-brand-foam/90 mb-8 text-lg max-w-2xl mx-auto">
            {content[language].team.subtitle}
          </p>
          <div className="flex justify-center">
            <Link 
              href="/team" 
              className="inline-flex items-center justify-center gap-2 bg-white text-brand-dark font-bold px-8 py-4 rounded-lg hover:bg-brand-foam transition-all duration-300 shadow-depth hover:shadow-glow"
            >
              <Users className="w-5 h-5" />
              {content[language].team.cta}
            </Link>
          </div>
        </div>
      </section>

  
    </div>
  );
}