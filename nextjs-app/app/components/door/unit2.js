'use client';

import React, { useState, useEffect } from 'react';
import { 
  Star, 
  Quote, 
  TrendingUp, 
  MapPin, 
  Users, 
  Calendar, 
  Award, 
  CheckCircle, 
  ArrowRight,
  Building,
  Phone,
  Mail,
  Globe,
  Clock,
  Target,
  BarChart3,
  Zap,
  Shield,
  Heart,
  Smartphone,
  Home,
  Eye,
  HandHeart,
  MessageCircle,
  ThumbsUp,
  Camera,
  FileText,
  Headphones,
  Navigation
} from 'lucide-react';

const DoorToDoorServicesUnit2 = () => {
  const [language, setLanguage] = useState('en');
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      name: "Sarah Johnson",
      title: { en: "Marketing Director", sw: "Mkurugenzi wa Uuzaji" },
      company: "TechnoLink Solutions",
      image: "https://images.unsplash.com/photo-1494790108755-2616b9f3c1b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      quote: {
        en: "The door-to-door campaign exceeded our expectations! We saw a 40% increase in leads and 25% boost in sales within just one month.",
        sw: "Kampeni ya mlango hadi mlango ililipuka matarajio yetu! Tuliona ongezeko la 40% katika viongozi na kuongezeka kwa 25% katika mauzo ndani ya mwezi mmoja tu."
      }
    },
    {
      name: "Michael Chen",
      title: { en: "CEO", sw: "Mkurugenzi Mkuu" },
      company: "PowerGrid Energy",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      quote: {
        en: "Professional team, excellent results. Our solar panel installations increased by 60% after their targeted campaign in residential areas.",
        sw: "Timu ya kitaalamu, matokeo bora. Usakinishaji wetu wa paneli za jua uliongezeka kwa 60% baada ya kampeni yao ya lengo katika maeneo ya makazi."
      }
    },
    {
      name: "Dr. Amina Hassan",
      title: { en: "Operations Manager", sw: "Meneja wa Uendeshaji" },
      company: "HealthFirst Medical",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      quote: {
        en: "Their approach to healthcare marketing was sensitive and effective. We gained 200+ new patients and improved community health awareness.",
        sw: "Mkabala wao wa uuzaji wa huduma za afya ulikuwa wa hisia na mzuri. Tulipata wagonjwa wapya 200+ na kuboresha uelewa wa afya ya jamii."
      }
    }
  ];

  const caseStudies = [
    {
      company: "TechnoLink Solutions",
      industry: { en: "Technology", sw: "Teknolojia" },
      icon: Shield,
      challenge: {
        en: "Low brand awareness in residential areas for smart home security systems",
        sw: "Utambuzi mdogo wa brand katika maeneo ya makazi kwa mifumo ya usalama wa nyumbani wa akili"
      },
      solution: {
        en: "Targeted door-to-door campaign in middle-class neighborhoods with product demonstrations",
        sw: "Kampeni ya lengo ya mlango hadi mlango katika mitaa ya tabaka la kati na maonyesho ya bidhaa"
      },
      results: [
        { metric: "40%", label: { en: "Increase in leads", sw: "Ongezeko la viongozi" } },
        { metric: "25%", label: { en: "Sales boost", sw: "Kuongezeka kwa mauzo" } },
        { metric: "300+", label: { en: "Demos scheduled", sw: "Maonyesho yaliyopangwa" } }
      ]
    },
    {
      company: "PowerGrid Energy",
      industry: { en: "Energy", sw: "Nishati" },
      icon: Zap,
      challenge: {
        en: "Difficulty reaching homeowners interested in solar panel installation",
        sw: "Ugumu wa kufikia wamiliki wa nyumba wanaovutiwa na usakinishaji wa paneli za jua"
      },
      solution: {
        en: "Educational door-to-door visits with cost-benefit analysis and financing options",
        sw: "Ziara za kielimu za mlango hadi mlango na uchambuzi wa gharama-faida na chaguo za ufadhili"
      },
      results: [
        { metric: "60%", label: { en: "Installation increase", sw: "Ongezeko la usakinishaji" } },
        { metric: "150+", label: { en: "Consultations", sw: "Mashauriano" } },
        { metric: "85%", label: { en: "Satisfaction rate", sw: "Kiwango cha kuridhika" } }
      ]
    },
    {
      company: "HealthFirst Medical",
      industry: { en: "Healthcare", sw: "Huduma za Afya" },
      icon: Heart,
      challenge: {
        en: "Need to increase health insurance enrollment in underserved communities",
        sw: "Haja ya kuongeza usajili wa bima ya afya katika jamii zisizopata huduma za kutosha"
      },
      solution: {
        en: "Community-focused health education visits with multilingual representatives",
        sw: "Ziara za elimu ya afya zinazozingatia jamii na wawakilishi wa lugha nyingi"
      },
      results: [
        { metric: "200+", label: { en: "New patients", sw: "Wagonjwa wapya" } },
        { metric: "75%", label: { en: "Enrollment rate", sw: "Kiwango cha usajili" } },
        { metric: "95%", label: { en: "Community satisfaction", sw: "Kuridhika kwa jamii" } }
      ]
    }
  ];

  const features = [
    {
      icon: Eye,
      title: { en: "Real-Time Tracking", sw: "Ufuatiliaji wa Wakati Halisi" },
      description: { en: "Monitor campaign progress with live GPS tracking and instant updates", sw: "Fuatilia maendeleo ya kampeni na ufuatiliaji wa GPS wa moja kwa moja na masasisho ya haraka" }
    },
    {
      icon: HandHeart,
      title: { en: "Professional Training", sw: "Mafunzo ya Kitaalamu" },
      description: { en: "Our team receives comprehensive training on communication and sales techniques", sw: "Timu yetu inapokea mafunzo ya kina kuhusu mawasiliano na mbinu za mauzo" }
    },
    {
      icon: MessageCircle,
      title: { en: "Multilingual Support", sw: "Msaada wa Lugha Nyingi" },
      description: { en: "Representatives fluent in English, Swahili, and other local languages", sw: "Wawakilishi wanaongea Kiingereza, Kiswahili, na lugha nyingine za ndani" }
    },
    {
      icon: ThumbsUp,
      title: { en: "Quality Assurance", sw: "Uhakikisho wa Ubora" },
      description: { en: "Regular quality checks and customer feedback collection for continuous improvement", sw: "Ukaguzi wa ubora wa kawaida na ukusanyaji wa maoni ya wateja kwa uboreshaji wa kuendelea" }
    },
    {
      icon: Camera,
      title: { en: "Photo Documentation", sw: "Uandishi wa Picha" },
      description: { en: "Visual proof of visits and interactions for complete transparency", sw: "Uthibitisho wa kuona wa ziara na mwingiliano kwa uwazi mkamilifu" }
    },
    {
      icon: FileText,
      title: { en: "Detailed Reports", sw: "Ripoti za Kina" },
      description: { en: "Comprehensive analytics and insights delivered weekly", sw: "Uchanganuzi kamili na maarifa yanayoletwa kila wiki" }
    }
  ];

  const serviceAreas = [
    {
      area: "Dar es Salaam",
      neighborhoods: ["Kinondoni", "Ilala", "Temeke", "Kariakoo", "Masaki"],
      coverage: "95%"
    },
    {
      area: "Arusha",
      neighborhoods: ["Arusha City", "Meru", "Arumeru", "Njiro", "Kaloleni"],
      coverage: "80%"
    },
    {
      area: "Mwanza",
      neighborhoods: ["Nyamagana", "Ilemela", "Magu", "Sengerema", "Ukerewe"],
      coverage: "75%"
    },
    {
      area: "Dodoma",
      neighborhoods: ["Dodoma Urban", "Chamwino", "Bahi", "Kondoa", "Mpwapwa"],
      coverage: "70%"
    }
  ];

  const getLocalizedText = (textObj) => {
    if (!textObj) return '';
    return textObj[language] || textObj.en;
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-400'}`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-gray-900">
      {/* Language Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setLanguage(language === 'en' ? 'sw' : 'en')}
          className="px-4 py-2 bg-yellow-500/20 backdrop-blur-md rounded-lg border border-yellow-500/40 text-yellow-300 hover:bg-yellow-500/30 transition-all"
        >
          {language === 'en' ? 'Kiswahili' : 'English'}
        </button>
      </div>

      {/* Testimonials Section */}
      <div className="py-20 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-yellow-300 mb-6">
              {getLocalizedText({
                en: "What Our Clients Say",
                sw: "Wateja Wetu Wanasema Nini"
              })}
            </h2>
            <p className="text-xl text-yellow-500 max-w-2xl mx-auto">
              {getLocalizedText({
                en: "Real success stories from businesses that transformed their marketing with our services",
                sw: "Hadithi za kweli za mafanikio kutoka biashara zilizobadilisha uuzaji wao kwa huduma zetu"
              })}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 border border-yellow-500/30 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-6">
                  <img 
                    src={testimonials[activeTestimonial].image} 
                    alt={testimonials[activeTestimonial].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-yellow-300">
                    {testimonials[activeTestimonial].name}
                  </h3>
                  <p className="text-yellow-500">
                    {getLocalizedText(testimonials[activeTestimonial].title)} - {testimonials[activeTestimonial].company}
                  </p>
                  <div className="flex mt-2">
                    {renderStars(testimonials[activeTestimonial].rating)}
                  </div>
                </div>
              </div>

              <div className="relative">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-yellow-500/40" />
                <blockquote className="text-lg text-yellow-300/90 italic leading-relaxed pl-8">
                  {getLocalizedText(testimonials[activeTestimonial].quote)}
                </blockquote>
              </div>
            </div>

            {/* Testimonial navigation */}
            <div className="flex justify-center mt-8 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === activeTestimonial ? 'bg-yellow-500' : 'bg-yellow-500/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Case Studies Section */}
      <div className="py-20 bg-gray-900/80 backdrop-blur-md">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-yellow-300 mb-6">
              {getLocalizedText({
                en: "Success Case Studies",
                sw: "Mafunzo ya Kesi za Mafanikio"
              })}
            </h2>
            <p className="text-xl text-yellow-500 max-w-2xl mx-auto">
              {getLocalizedText({
                en: "Detailed analysis of how our campaigns delivered exceptional results",
                sw: "Uchambuzi wa kina wa jinsi kampeni zetu zililetakavyo matokeo ya kipekee"
              })}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => {
              const IconComponent = study.icon;
              return (
                <div key={index} className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 border border-yellow-500/30 hover:border-yellow-500/60 transition-all transform hover:scale-[1.02] shadow-lg">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-xl mr-4 shadow-lg">
                      <IconComponent className="w-6 h-6 text-gray-900" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-yellow-300">{study.company}</h3>
                      <p className="text-yellow-500">{getLocalizedText(study.industry)}</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-yellow-300 mb-2">
                        {getLocalizedText({ en: "Challenge", sw: "Changamoto" })}
                      </h4>
                      <p className="text-yellow-500/80 text-sm leading-relaxed">
                        {getLocalizedText(study.challenge)}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-yellow-300 mb-2">
                        {getLocalizedText({ en: "Solution", sw: "Suluhisho" })}
                      </h4>
                      <p className="text-yellow-500/80 text-sm leading-relaxed">
                        {getLocalizedText(study.solution)}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-yellow-300 mb-4">
                        {getLocalizedText({ en: "Results", sw: "Matokeo" })}
                      </h4>
                      <div className="grid grid-cols-1 gap-3">
                        {study.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="bg-yellow-500/10 rounded-lg p-3 text-center">
                            <div className="text-2xl font-bold text-yellow-300">{result.metric}</div>
                            <div className="text-yellow-500 text-sm">{getLocalizedText(result.label)}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-yellow-300 mb-6">
              {getLocalizedText({
                en: "Why Choose Our Service",
                sw: "Kwa Nini Uchague Huduma Yetu"
              })}
            </h2>
            <p className="text-xl text-yellow-500 max-w-2xl mx-auto">
              {getLocalizedText({
                en: "Advanced features and professional approach that set us apart",
                sw: "Vipengele vya hali ya juu na mkabala wa kitaalamu unavyotufanya tofauti"
              })}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 border border-yellow-500/30 hover:border-yellow-500/60 transition-all transform hover:scale-[1.02] shadow-lg">
                  <div className="mb-6">
                    <div className="p-4 bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-xl inline-block shadow-lg">
                      <IconComponent className="w-8 h-8 text-gray-900" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-yellow-300 mb-4">
                    {getLocalizedText(feature.title)}
                  </h3>
                  <p className="text-yellow-500/80 leading-relaxed">
                    {getLocalizedText(feature.description)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Service Areas Section */}
      <div className="py-20 bg-gray-900/80 backdrop-blur-md">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-yellow-300 mb-6">
              {getLocalizedText({
                en: "Our Service Areas",
                sw: "Maeneo ya Huduma Yetu"
              })}
            </h2>
            <p className="text-xl text-yellow-500 max-w-2xl mx-auto">
              {getLocalizedText({
                en: "Comprehensive coverage across Tanzania's major cities and regions",
                sw: "Utunzaji kamili katika miji mikuu na mikoa ya Tanzania"
              })}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceAreas.map((area, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 border border-yellow-500/30 hover:border-yellow-500/60 transition-all transform hover:scale-[1.02] shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-xl mr-4 shadow-lg">
                    <MapPin className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-yellow-300">{area.area}</h3>
                    <p className="text-yellow-500">{area.coverage} {getLocalizedText({ en: "Coverage", sw: "Mfumo" })}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  {area.neighborhoods.map((neighborhood, neighborhoodIndex) => (
                    <div key={neighborhoodIndex} className="flex items-center text-yellow-500/80">
                      <CheckCircle className="w-4 h-4 text-yellow-500 mr-2" />
                      <span className="text-sm">{neighborhood}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-20 bg-gradient-to-t from-gray-900 via-gray-900 to-gray-950">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-yellow-300 mb-6">
              {getLocalizedText({
                en: "Let's Start Your Campaign",
                sw: "Hebu Tuanze Kampeni Yako"
              })}
            </h2>
            <p className="text-xl text-yellow-500 mb-12">
              {getLocalizedText({
                en: "Ready to transform your business? Get in touch with our team today",
                sw: "Tayari kubadilisha biashara yako? Wasiliana na timu yetu leo"
              })}
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="p-4 bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-xl inline-block shadow-lg mb-4">
                  <Phone className="w-8 h-8 text-gray-900" />
                </div>
                <h3 className="text-lg font-bold text-yellow-300 mb-2">
                  {getLocalizedText({ en: "Call Us", sw: "Tupigie Simu" })}
                </h3>
                <p className="text-yellow-500">+255 123 456 789</p>
              </div>
              
              <div className="text-center">
                <div className="p-4 bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-xl inline-block shadow-lg mb-4">
                  <Mail className="w-8 h-8 text-gray-900" />
                </div>
                <h3 className="text-lg font-bold text-yellow-300 mb-2">
                  {getLocalizedText({ en: "Email Us", sw: "Tutumie Barua Pepe" })}
                </h3>
                <p className="text-yellow-500">info@doormarketing.tz</p>
              </div>
              
              <div className="text-center">
                <div className="p-4 bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-xl inline-block shadow-lg mb-4">
                  <MapPin className="w-8 h-8 text-gray-900" />
                </div>
                <h3 className="text-lg font-bold text-yellow-300 mb-2">
                  {getLocalizedText({ en: "Visit Us", sw: "Tutembelee" })}
                </h3>
                <p className="text-yellow-500">Dar es Salaam, Tanzania</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-400 text-gray-900 font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 flex items-center justify-center gap-3">
                {getLocalizedText({
                  en: "Get Free Quote",
                  sw: "Pata Karatasi ya Bei ya Bure"
                })}
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 bg-yellow-500/10 backdrop-blur-md text-yellow-300 font-bold rounded-xl border border-yellow-500/40 hover:bg-yellow-500/20 transition-all flex items-center justify-center gap-3">
                {getLocalizedText({
                  en: "Schedule Meeting",
                  sw: "Panga Mkutano"
                })}
                <Calendar className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoorToDoorServicesUnit2;