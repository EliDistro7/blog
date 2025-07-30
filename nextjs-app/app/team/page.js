'use client';

import { useLanguage } from '@/context/LanguageContext';
import { Linkedin, Twitter, Instagram, Mail, User, Target, Eye, Building2, Users, Award, Lightbulb } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

import {content, departmentHeads} from '@/app/components/team/data';

// Enhanced content with mission/vision data for marketing agency
const enhancedContent = {
  en: {
    company: {
      name: "Future Holders Company LTD",
      tagline: "Your Marketing Success Partner",
      intro: "Future Holders Company LTD is a dynamic marketing agency specializing in comprehensive business solutions. From door-to-door sales campaigns to cutting-edge digital presence, we transform how businesses connect with their customers. Our expertise spans direct sales, web development, social media management, tender applications, equipment sales, and brand development.",
      established: "Your trusted marketing and business solutions partner"
    },
    mission: {
      title: "Our Mission",
      description: "To accelerate business growth through innovative marketing strategies, direct sales excellence, and comprehensive digital solutions that connect brands with their ideal customers and drive measurable results.",
      points: [
        "Deliver exceptional door-to-door sales campaigns that convert",
        "Create powerful digital experiences through websites and applications",
        "Amplify brand presence across all social media platforms",
        "Secure profitable opportunities through expert tender applications",
        "Provide quality equipment solutions for business operations",
        "Build compelling brand identities that resonate with target markets"
      ]
    },
    vision: {
      title: "Our Vision",
      description: "To be East Africa's premier marketing agency, recognized for transforming businesses through innovative sales strategies, digital excellence, and comprehensive marketing solutions that drive sustainable growth.",
      points: [
        "Leading the marketing industry with innovative direct sales approaches",
        "Setting digital standards through exceptional web and app development",
        "Dominating social media management with creative excellence",
        "Becoming the go-to partner for successful tender acquisitions",
        "Building lasting partnerships through quality equipment provision",
        "Creating iconic brands that define market leadership"
      ]
    },
    services: {
      title: "Our Core Services",
      items: [
        {
          title: "Door-to-Door Sales",
          description: "Professional field sales teams that bring your products directly to customers",
          icon: "🚪"
        },
        {
          title: "Web & App Development",
          description: "Modern, responsive websites and applications that drive business growth",
          icon: "💻"
        },
        {
          title: "Social Media Management",
          description: "Strategic social media campaigns that build brand awareness and engagement",
          icon: "📱"
        },
        {
          title: "Tender Applications",
          description: "Expert research and application services for public and private tenders",
          icon: "📋"
        },
        {
          title: "Equipment Sales",
          description: "Quality business equipment and tools to support your operations",
          icon: "⚙️"
        },
        {
          title: "Brand Development",
          description: "Complete branding solutions from logo design to brand strategy",
          icon: "🎨"
        }
      ]
    }
  },
  sw: {
    company: {
      name: "Future Holders Company LTD",
      tagline: "Mshirika Wako wa Mafanikio ya Masoko",
      intro: "Future Holders Company LTD ni shirika la masoko lenye nguvu linalojikita katika suluhisho kamili za biashara. Kutoka kampeni za mauzo ya mlango hadi mlango hadi uwepo wa kidijitali wa kisasa, tunabadilisha jinsi biashara zinavyounganisha na wateja wao. Utaalamu wetu unajumuisha mauzo ya moja kwa moja, maendeleo ya wavuti, usimamizi wa mitandao ya kijamii, maombi ya zabuni, mauzo ya vifaa, na maendeleo ya chapa.",
      established: "Mshirika wako wa kuaminika wa masoko na suluhisho za biashara"
    },
    mission: {
      title: "Dhamira Yetu",
      description: "Kuharakisha ukuaji wa biashara kupitia mikakati ya masoko ya uvumbuzi, ubora wa mauzo ya moja kwa moja, na suluhisho kamili za kidijitali zinazounganisha chapa na wateja wao bora na kuendesha matokeo yanayoweza kupimwa.",
      points: [
        "Kutoa kampeni bora za mauzo ya mlango hadi mlango zinazobadilisha",
        "Kuunda uzoefu mkuu wa kidijitali kupitia tovuti na programu",
        "Kuongeza uwepo wa chapa katika majukwaa yote ya mitandao ya kijamii",
        "Kuhakikisha fursa za faida kupitia maombi ya zabuni ya kitaalamu",
        "Kutoa suluhisho za vifaa vya ubora kwa shughuli za biashara",
        "Kujenga utambulisho wa chapa unaovutia ambao unaungana na masoko lengwa"
      ]
    },
    vision: {
      title: "Maono Yetu",
      description: "Kuwa shirika kuu la masoko la Afrika Mashariki, linalotambuliwa kwa kubadilisha biashara kupitia mikakati ya uvumbuzi ya mauzo, ubora wa kidijitali, na suluhisho kamili za masoko zinazoendesha ukuaji endelevu.",
      points: [
        "Kuongoza sekta ya masoko kwa mbinu za uvumbuzi za mauzo ya moja kwa moja",
        "Kuweka viwango vya kidijitali kupitia maendeleo bora ya wavuti na programu",
        "Kutawala usimamizi wa mitandao ya kijamii kwa ubora wa ubunifu",
        "Kuwa mshirika wa kwanza kwa ushindi wa zabuni",
        "Kujenga ushirikiano wa kudumu kupitia utoaji wa vifaa vya ubora",
        "Kuunda chapa za kitaifa zinazofafanua uongozi wa soko"
      ]
    },
    services: {
      title: "Huduma Zetu Kuu",
      items: [
        {
          title: "Mauzo ya Mlango hadi Mlango",
          description: "Timu za mauzo za uwandani za kitaalamu zinazoleta bidhaa zako moja kwa moja kwa wateja",
          icon: "🚪"
        },
        {
          title: "Maendeleo ya Wavuti na Programu",
          description: "Tovuti na programu za kisasa, zinazoweza kujibu ambazo zinaendesha ukuaji wa biashara",
          icon: "💻"
        },
        {
          title: "Usimamizi wa Mitandao ya Kijamii",
          description: "Kampeni za kimkakati za mitandao ya kijamii zinazojenga utambuzi wa chapa na ushirikiano",
          icon: "📱"
        },
        {
          title: "Maombi ya Zabuni",
          description: "Huduma za utafiti na maombi za kitaalamu kwa zabuni za umma na za kibinafsi",
          icon: "📋"
        },
        {
          title: "Mauzo ya Vifaa",
          description: "Vifaa na zana za ubora za biashara za kusaidia shughuli zako",
          icon: "⚙️"
        },
        {
          title: "Maendeleo ya Chapa",
          description: "Suluhisho kamili za chapa kutoka muundo wa nembo hadi mkakati wa chapa",
          icon: "🎨"
        }
      ]
    }
  }
};

export default function TeamPage() {
  const { language } = useLanguage();

  const handlePlanClick = () => {
    const message = language === 'en'? `Hi! I'm interested in your services. Can you provide more details?` : `Hujambo! Ninapendezwa na huduma zenu za masoko. Je, unaweza kutoa maelezo zaidi`;
    
      const whatsappUrl = `https://wa.me/255745787370?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800">
      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-gold/20 to-transparent"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.1),transparent_70%)]"></div>
        </div>
        
        <div className="container mx-auto text-center max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-brand-gold/10 to-brand-goldLight/10 backdrop-blur-sm px-6 py-3 rounded-full border border-brand-gold/20 mb-8">
              <Building2 className="w-5 h-5 text-brand-gold" />
              <span className="text-brand-gold font-medium">{enhancedContent[language].company.established}</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-6 font-serif leading-tight">
              <span className="text-white">{content[language].hero.title}</span>{' '}
              <span className="text-brand-goldLight bg-gradient-to-r from-brand-gold to-brand-goldLight bg-clip-text text-transparent">
                {content[language].hero.highlight}
              </span>
            </h1>
            
            <div className="max-w-4xl mx-auto mb-8">
              <p className="text-2xl md:text-3xl font-light mb-4 text-brand-gold">
                {enhancedContent[language].company.tagline}
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                {content[language].hero.subtitle}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900/50 to-gray-900">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-3 bg-gradient-to-r from-brand-gold/20 to-brand-goldLight/20 backdrop-blur-sm px-8 py-4 rounded-2xl border border-brand-gold/30 mb-8">
              <Award className="w-6 h-6 text-brand-gold" />
              <h2 className="text-3xl md:text-4xl font-bold text-brand-goldLight">
                {enhancedContent[language].company.name}
              </h2>
            </motion.div>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto"
            >
              {enhancedContent[language].company.intro}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Showcase Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-brand-gold/20 to-brand-goldLight/20 backdrop-blur-sm px-6 py-3 rounded-full border border-brand-gold/20 mb-6">
              <Target className="w-5 h-5 text-brand-gold" />
              <span className="text-brand-gold font-medium">What We Do</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-brand-goldLight font-serif mb-6">
              {enhancedContent[language].services.title}
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Comprehensive marketing solutions designed to accelerate your business growth and market presence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {enhancedContent[language].services.items.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-3xl p-8 border border-brand-gold/20 hover:border-brand-gold/40 transition-all duration-500 hover:shadow-2xl hover:shadow-brand-gold/20 transform hover:scale-[1.02] h-full">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-brand-goldLight mb-4 font-serif">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-3xl p-10 border border-brand-gold/20 hover:border-brand-gold/40 transition-all duration-500 hover:shadow-2xl hover:shadow-brand-gold/10 h-full">
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-gradient-to-r from-brand-gold to-brand-goldLight p-4 rounded-2xl shadow-lg">
                    <Target className="w-8 h-8 text-gray-900" />
                  </div>
                  <h3 className="text-4xl font-bold text-brand-goldLight font-serif">
                    {enhancedContent[language].mission.title}
                  </h3>
                </div>
                
                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                  {enhancedContent[language].mission.description}
                </p>
                
                <div className="space-y-4">
                  {enhancedContent[language].mission.points.map((point, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-2 h-2 bg-brand-gold rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-gray-300">{point}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-3xl p-10 border border-brand-gold/20 hover:border-brand-gold/40 transition-all duration-500 hover:shadow-2xl hover:shadow-brand-gold/10 h-full">
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-gradient-to-r from-brand-goldLight to-brand-gold p-4 rounded-2xl shadow-lg">
                    <Eye className="w-8 h-8 text-gray-900" />
                  </div>
                  <h3 className="text-4xl font-bold text-brand-goldLight font-serif">
                    {enhancedContent[language].vision.title}
                  </h3>
                </div>
                
                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                  {enhancedContent[language].vision.description}
                </p>
                
                <div className="space-y-4">
                  {enhancedContent[language].vision.points.map((point, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-2 h-2 bg-brand-goldLight rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-gray-300">{point}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="container mx-auto py-24 px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-brand-gold/10 to-brand-goldLight/10 backdrop-blur-sm px-6 py-3 rounded-full border border-brand-gold/20 mb-6">
            <Users className="w-5 h-5 text-brand-gold" />
            <span className="text-brand-gold font-medium">Our Leadership Team</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-goldLight font-serif mb-4">
            Meet Our Experts
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Driven by passion, guided by expertise, united in our mission to deliver excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departmentHeads.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-3xl p-8 border border-brand-gold/20 hover:border-brand-gold/40 transition-all duration-500 hover:shadow-2xl hover:shadow-brand-gold/20 transform hover:scale-[1.02] h-full">
                {/* Member Image */}
                <div className="relative mb-6">
                  <div className="w-36 h-36 mx-auto rounded-2xl overflow-hidden border-4 border-brand-gold/30 group-hover:border-brand-gold/60 transition-all duration-300 shadow-lg">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={144}
                      height={144}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Badge */}
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-brand-gold to-brand-goldLight text-gray-900 px-4 py-2 rounded-xl text-sm font-bold shadow-xl border border-brand-gold/30">
                      {typeof member.badge === 'string' ? member.badge : member.badge[language]}
                    </div>
                  </div>
                </div>

                {/* Member Info */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-brand-goldLight mb-2 font-serif">{member.name}</h3>
                  <p className="text-brand-gold font-semibold mb-1 text-lg">
                    {typeof member.role === 'string' ? member.role : member.role[language]}
                  </p>
                  <p className="text-brand-gold/70">
                    {typeof member.department === 'string' ? member.department : member.department[language]}
                  </p>
                </div>

                {/* Bio */}
                <div className="mb-6">
                  <p className="text-gray-300 leading-relaxed mb-4">
                    {typeof member.bio === 'string' ? member.bio : member.bio[language]}
                  </p>
                  <div className="bg-gradient-to-r from-brand-gold/10 to-brand-goldLight/10 rounded-xl p-4 border border-brand-gold/20 backdrop-blur-sm">
                    <p className="text-brand-goldLight text-sm font-medium">
                      {typeof member.tzExperience === 'string' ? member.tzExperience : member.tzExperience[language]}
                    </p>
                  </div>
                </div>

                {/* Skills */}
                <div className="mb-6">
                  <h4 className="text-brand-goldLight font-semibold mb-3 flex items-center gap-2">
                    <Lightbulb className="w-4 h-4" />
                    Key Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {(Array.isArray(member.skills) ? member.skills : member.skills[language]).map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="bg-gradient-to-r from-brand-gold/10 to-brand-goldLight/10 text-brand-gold px-3 py-1 rounded-lg text-sm border border-brand-gold/20 hover:bg-brand-gold/20 hover:border-brand-gold/40 transition-all duration-200 backdrop-blur-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Professional Leadership Values Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 font-serif">
              <span className="text-brand-goldLight">{content[language].values.title}</span>{' '}
              <span className="text-white">{content[language].values.highlight}</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide our every decision and action
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {content[language].values.items.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl p-8 rounded-3xl border border-brand-gold/20 hover:border-brand-gold/40 transition-all duration-500 hover:shadow-2xl hover:shadow-brand-gold/20 transform hover:scale-105 group"
              >
                <div className="text-6xl mb-6 filter drop-shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-brand-goldLight mb-4 font-serif">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-24 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-brand-gold to-brand-goldLight rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto text-center px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-brand-goldLight mb-6 font-serif">
              {content[language].cta.title}
            </h2>
            <p className="text-2xl text-brand-gold mb-12 max-w-3xl mx-auto leading-relaxed">
              {content[language].cta.subtitle}
            </p>
            <motion.button
              onClick={handlePlanClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-4 bg-gradient-to-r from-brand-gold to-brand-goldLight text-gray-900 font-bold px-12 py-6 rounded-2xl shadow-2xl hover:shadow-brand-gold/30 transition-all duration-300 text-lg border border-brand-gold/30"
            >
              <Mail className="w-6 h-6" />
              {content[language].cta.button}
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}