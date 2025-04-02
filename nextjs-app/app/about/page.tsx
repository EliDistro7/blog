import { Libre_Baskerville, Source_Sans_3 as Source_Sans_Pro } from "next/font/google";
import { Zap, Cpu, Utensils, Mic2, Share2, Users, Globe, Award, HeartHandshake } from 'lucide-react';
import Link from "next/link";

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
  const services = [
    {
      name: "Web Design",
      icon: <Cpu className="w-6 h-6 text-brand-accent" />,
      description: "Cutting-edge digital solutions that propel your business forward",
      color: "bg-brand-accent/10",
      border: "border-brand-accent/20"
    },
    {
      name: "Catering",
      icon: <Utensils className="w-6 h-6 text-brand-coral" />,
      description: "Exceptional culinary experiences for all occasions",
      color: "bg-brand-coral/10",
      border: "border-brand-coral/20"
    },
    {
      name: "Social Media",
      icon: <Share2 className="w-6 h-6 text-brand-teal" />,
      description: "Strategic digital presence that amplifies your brand",
      color: "bg-brand-teal/10",
      border: "border-brand-teal/20"
    },
    {
      name: "MC Services",
      icon: <Mic2 className="w-6 h-6 text-brand-foam" />,
      description: "Dynamic hosting that elevates your events",
      color: "bg-brand-foam/10",
      border: "border-brand-foam/20"
    }
  ];

  const values = [
    {
      name: "Innovation",
      description: "Pioneering solutions that set industry standards",
      icon: <Zap className="w-6 h-6 text-brand-accent" />
    },
    {
      name: "Excellence",
      description: "Uncompromising quality in every service delivered",
      icon: <Award className="w-6 h-6 text-brand-blue" />
    },
    {
      name: "Collaboration",
      description: "Building lasting partnerships for mutual success",
      icon: <HeartHandshake className="w-6 h-6 text-brand-coral" />
    }
  ];

  return (
    <div className={`min-h-screen ${sourceSans.variable} font-sans bg-brand-foam text-brand-dark`}>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-brand-dark to-brand-blue py-32 text-center">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/circuit-pattern.svg')] bg-[size:1200px]"></div>
        <div className="container relative z-10 px-4">
          <h1 className={`text-4xl md:text-6xl font-bold ${baskerville.variable} font-serif text-white mb-6`}>
            Our Story
          </h1>
          <p className="text-xl text-brand-foam/90 max-w-3xl mx-auto">
            Pioneering multi-service solutions for Tanzania&apos;s evolving business landscape
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-brand-foam clip-path-wave"></div>
      </div>

      {/* Mission Section */}
      <section className="container py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-3xl font-bold ${baskerville.variable} font-serif text-brand-dark mb-6`}>
            Redefining Possibilities
          </h2>
          <div className="space-y-6 text-brand-dark/90">
            <p>
              Founded in Dar es Salaam, Future Holders emerged from a vision to create a one-stop solution for businesses navigating the digital and physical event spaces. We bridge the gap between technology and hospitality, offering integrated services that cover all aspects of modern business needs.
            </p>
            <p>
              What began as a small web design studio has blossomed into a full-service agency, expanding our expertise to include catering, event hosting, and digital marketing - all while maintaining our commitment to technological innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="bg-gradient-to-b from-white to-brand-foam/50 py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-3xl font-bold ${baskerville.variable} font-serif text-brand-dark mb-4`}>
              Our Integrated Services
            </h2>
            <p className="text-brand-dark/80 text-lg">
              Comprehensive solutions for complete business transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`p-6 rounded-xl ${service.color} border ${service.border} hover:shadow-glow transition-all`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-lg ${service.color.replace('10', '20')}`}>
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
              Our Core Values
            </h2>
            <p className="text-brand-dark/80 text-lg">
              The principles that guide every decision we make
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
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
            Meet The Architects of Tomorrow
          </h2>
          <p className="text-brand-foam/90 mb-8 text-lg max-w-2xl mx-auto">
            Our diverse team of experts brings together technology and creativity to deliver exceptional results
          </p>
          <div className="flex justify-center">
            <Link 
              href="/team" 
              className="inline-flex items-center justify-center gap-2 bg-white text-brand-dark font-bold px-8 py-4 rounded-lg hover:bg-brand-foam transition-all duration-300 shadow-depth hover:shadow-glow"
            >
              <Users className="w-5 h-5" />
              Explore Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="container py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-3xl font-bold ${baskerville.variable} font-serif text-brand-dark mb-4`}>
              Tanzania&apos;s Trusted Multi-Service Partner
            </h2>
            <p className="text-brand-dark/80 text-lg">
              Serving clients across East Africa with our unique integrated approach
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-depth p-8 border border-brand-foam/20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className={`text-2xl font-bold ${baskerville.variable} font-serif text-brand-dark mb-4`}>
                  Our Footprint
                </h3>
                <p className="text-brand-dark/80 mb-6">
                  From our headquarters in Dar es Salaam, we&apos;ve expanded our services to Nairobi and Cape Town, bringing our unique combination of digital expertise and event services to clients across East Africa.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-brand-accent" />
                    <span>3 Countries</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-brand-blue" />
                    <span>50+ Professionals</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-brand-coral" />
                    <span>100+ Successful Projects</span>
                  </li>
                </ul>
              </div>
              <div className="bg-brand-foam/30 rounded-lg h-64 flex items-center justify-center">
                {/* Replace with your map component or image */}
                <Globe className="w-16 h-16 text-brand-blue/30" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}