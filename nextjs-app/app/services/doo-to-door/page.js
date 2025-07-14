import React, { useState, useEffect } from 'react';
import { 
  DoorOpen, 
  MapPin, 
  Target, 
  Users, 
  TrendingUp, 
  Clock, 
  CheckCircle, 
  Star,
  Phone,
  Mail,
  Calendar,
  ArrowRight,
  Quote,
  BarChart3,
  Shield,
  Award,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const DoorToDoorServices = () => {
  const [language, setLanguage] = useState('en'); // Default to English
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const heroStats = [
    {
      number: "95%",
      label: { en: "Success Rate", sw: "Kiwango cha Mafanikio" }
    },
    {
      number: "10K+",
      label: { en: "Doors Reached", sw: "Milango Yaliyofikiwa" }
    },
    {
      number: "500+",
      label: { en: "Happy Clients", sw: "Wateja Wenye Furaha" }
    },
    {
      number: "24/7",
      label: { en: "Support", sw: "Msaada" }
    }
  ];

  const services = [
    {
      icon: Target,
      title: { en: "Lead Generation", sw: "Uongozaji wa Viongozi" },
      description: { en: "Identify and qualify potential customers through strategic door-to-door campaigns", sw: "Tambua na uhakiki wateja watarajiwa kupitia kampeni za mkakati wa mlango hadi mlango" }
    },
    {
      icon: Users,
      title: { en: "Brand Awareness", sw: "Ufahamu wa Brand" },
      description: { en: "Increase brand visibility and recognition in your target neighborhoods", sw: "Ongeza miwani ya brand na utambuzi katika mitaa yako ya lengo" }
    },
    {
      icon: BarChart3,
      title: { en: "Market Research", sw: "Utafiti wa Soko" },
      description: { en: "Gather valuable insights about customer preferences and market trends", sw: "Kusanya maarifa muhimu kuhusu mapendeleo ya wateja na mienendo ya soko" }
    },
    {
      icon: TrendingUp,
      title: { en: "Sales Conversion", sw: "Kubadilisha Mauzo" },
      description: { en: "Convert prospects into customers through personalized interactions", sw: "Badilisha matarajio kuwa wateja kupitia mwingiliano wa kibinafsi" }
    }
  ];

  const process = [
    {
      step: "01",
      title: { en: "Strategy Planning", sw: "Upangaji wa Mkakati" },
      description: { en: "We analyze your target market and develop a customized door-to-door strategy", sw: "Tunachanganua soko lako la lengo na kuendeleza mkakati wa kipekee wa mlango hadi mlango" }
    },
    {
      step: "02",
      title: { en: "Team Training", sw: "Mafunzo ya Timu" },
      description: { en: "Our professional team is trained on your products and brand messaging", sw: "Timu yetu ya kitaalamu inafunzwa kuhusu bidhaa zako na ujumbe wa brand" }
    },
    {
      step: "03",
      title: { en: "Campaign Execution", sw: "Utekelezaji wa Kampeni" },
      description: { en: "Systematic door-to-door visits with real-time tracking and reporting", sw: "Ziara za mfumo wa mlango hadi mlango na ufuatiliaji wa wakati halisi na uripoti" }
    },
    {
      step: "04",
      title: { en: "Results Analysis", sw: "Uchambuzi wa Matokeo" },
      description: { en: "Detailed analytics and insights to optimize future campaigns", sw: "Uchanganuzi wa kina na maarifa ya kuboresha kampeni za baadaye" }
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Solutions",
      rating: 5,
      text: { 
        en: "The door-to-door campaign exceeded our expectations. We saw a 300% increase in qualified leads within the first month.", 
        sw: "Kampeni ya mlango hadi mlango ilizidi matarajio yetu. Tuliona ongezeko la 300% katika viongozi waliohitimu ndani ya mwezi wa kwanza." 
      }
    },
    {
      name: "Michael Chen",
      company: "Local Restaurant Chain",
      rating: 5,
      text: { 
        en: "Professional team, excellent results. Our brand awareness in the local community increased significantly.", 
        sw: "Timu ya kitaalamu, matokeo bora. Ufahamu wa brand yetu katika jamii ya ndani uliongezeka sana." 
      }
    },
    {
      name: "Emma Thompson",
      company: "Healthcare Services",
      rating: 5,
      text: { 
        en: "The personalized approach helped us connect with our community in a meaningful way. Highly recommend!", 
        sw: "Mbinu ya kibinafsi ilitusaidia kuunganishwa na jumuiya yetu kwa njia yenye maana. Ninashauri sana!" 
      }
    }
  ];

  const faqs = [
    {
      question: { en: "How do you target the right neighborhoods?", sw: "Unavipi mitaa sahihi ya lengo?" },
      answer: { en: "We use demographic data, market research, and your customer profiles to identify high-potential areas for maximum campaign effectiveness.", sw: "Tunatumia data za kidemografia, utafiti wa soko, na maelezo ya wateja wako kutambua maeneo yenye uwezekano mkubwa kwa ufanisi mkubwa wa kampeni." }
    },
    {
      question: { en: "What training do your representatives receive?", sw: "Wawakilishi wako wanapata mafunzo gani?" },
      answer: { en: "Our team undergoes comprehensive training on your products, brand values, communication techniques, and professional door-to-door etiquette.", sw: "Timu yetu inapitia mafunzo ya kina kuhusu bidhaa zako, maadili ya brand, mbinu za mawasiliano, na adabu za kitaalamu za mlango hadi mlango." }
    },
    {
      question: { en: "How do you measure campaign success?", sw: "Unawezaje kupima mafanikio ya kampeni?" },
      answer: { en: "We track key metrics including doors visited, leads generated, conversion rates, and provide detailed analytics reports with actionable insights.", sw: "Tunafuata vipimo muhimu ikiwa ni pamoja na milango iliyotembelewa, viongozi waliozalishwa, viwango vya ubadilishaji, na kutoa ripoti za uchanganuzi wa kina na maarifa ya kutenda." }
    },
    {
      question: { en: "What industries do you serve?", sw: "Unatumikia viwanda gani?" },
      answer: { en: "We serve various industries including retail, healthcare, technology, real estate, financial services, and local businesses of all sizes.", sw: "Tunatumikia viwanda mbalimbali ikiwa ni pamoja na rejareja, huduma za afya, teknolojia, mali isiyohamishika, huduma za kifedha, na biashara za ndani za ukubwa wote." }
    }
  ];

  const pricingPlans = [
    {
      name: { en: "Starter", sw: "Mwanzo" },
      price: "$299",
      period: { en: "per campaign", sw: "kwa kampeni" },
      features: [
        { en: "Up to 100 doors", sw: "Hadi milango 100" },
        { en: "Basic reporting", sw: "Ripoti ya msingi" },
        { en: "Email support", sw: "Msaada wa barua pepe" },
        { en: "2-day campaign", sw: "Kampeni ya siku 2" }
      ]
    },
    {
      name: { en: "Professional", sw: "Mtaalamu" },
      price: "$799",
      period: { en: "per campaign", sw: "kwa kampeni" },
      popular: true,
      features: [
        { en: "Up to 500 doors", sw: "Hadi milango 500" },
        { en: "Advanced analytics", sw: "Uchanganuzi wa kina" },
        { en: "Phone & email support", sw: "Msaada wa simu na barua pepe" },
        { en: "1-week campaign", sw: "Kampeni ya wiki 1" },
        { en: "Lead qualification", sw: "Uhakiki wa viongozi" }
      ]
    },
    {
      name: { en: "Enterprise", sw: "Biashara" },
      price: { en: "Custom", sw: "Maalum" },
      period: { en: "pricing", sw: "bei" },
      features: [
        { en: "Unlimited doors", sw: "Milango isiyopungua" },
        { en: "Custom reporting", sw: "Ripoti maalum" },
        { en: "24/7 support", sw: "Msaada wa 24/7" },
        { en: "Multi-week campaigns", sw: "Kampeni za wiki nyingi" },
        { en: "Dedicated account manager", sw: "Meneja wa akaunti aliyejitolea" }
      ]
    }
  ];

  const getLocalizedText = (textObj) => {
    if (!textObj) return '';
    return textObj[language] || textObj.en;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Language Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setLanguage(language === 'en' ? 'sw' : 'en')}
          className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 text-white hover:bg-white/20 transition-all"
        >
          {language === 'en' ? 'Kiswahili' : 'English'}
        </button>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
              transform: `scale(1.05) translateY(${scrollY * 0.2}px)`,
              filter: 'brightness(0.4) contrast(1.1)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-purple-900/70 to-indigo-900/80" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="p-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl shadow-2xl">
                <DoorOpen className="w-16 h-16 text-white" />
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
              {getLocalizedText({
                en: "Door-to-Door Marketing",
                sw: "Uuzaji Door to Door"
              })}
            </h1>

            <p className="text-xl md:text-2xl text-blue-200 mb-8 drop-shadow-lg">
              {getLocalizedText({
                en: "Personal Connection, Real Results",
                sw: "Miunganiko ya Binafsi, Matokeo ya Kweli"
              })}
            </p>

            <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              {getLocalizedText({
                en: "Transform your business with our professional door-to-door marketing services. We create meaningful connections that drive real results and lasting customer relationships.",
                sw: "Badilisha biashara yako kwa huduma zetu za kitaalamu za uuzaji wa mlango hadi mlango. Tunaunda miunganiko yenye maana inayosukuma matokeo halisi na mahusiano ya kudumu ya wateja."
              })}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
                {getLocalizedText({
                  en: "Start Your Campaign",
                  sw: "Anza Kampeni Yako"
                })}
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 transition-all">
                {getLocalizedText({
                  en: "Schedule Consultation",
                  sw: "Panga Ushauri"
                })}
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {heroStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-blue-200 text-sm md:text-base">
                    {getLocalizedText(stat.label)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 bg-white/5 backdrop-blur-md">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {getLocalizedText({
                en: "Our Services",
                sw: "Huduma Zetu"
              })}
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {getLocalizedText({
                en: "Comprehensive door-to-door marketing solutions tailored to your business needs",
                sw: "Suluhisho kamili za uuzaji wa mlango hadi mlango zilizokabidhiwa mahitaji ya biashara yako"
              })}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all transform hover:scale-105">
                  <div className="mb-6">
                    <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl inline-block">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {getLocalizedText(service.title)}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {getLocalizedText(service.description)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {getLocalizedText({
                en: "Our Process",
                sw: "Mchakato Wetu"
              })}
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {getLocalizedText({
                en: "A proven 4-step process that delivers consistent results",
                sw: "Mchakato wa hatua 4 uliothitishtwa unaotoa matokeo thabiti"
              })}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {process.map((step, index) => (
              <div key={index} className="flex items-start mb-12 last:mb-0">
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-2xl">
                  {step.step}
                </div>
                <div className="ml-8 flex-1">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {getLocalizedText(step.title)}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {getLocalizedText(step.description)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20 bg-white/5 backdrop-blur-md">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {getLocalizedText({
                en: "What Our Clients Say",
                sw: "Wateja Wetu Wanasema Nini"
              })}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <div className="flex items-center mb-6">
                  <Quote className="w-8 h-8 text-blue-400 mr-3" />
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 mb-6 italic">
                  "{getLocalizedText(testimonial.text)}"
                </p>
                <div>
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-blue-200">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {getLocalizedText({
                en: "Pricing Plans",
                sw: "Mipango ya Bei"
              })}
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {getLocalizedText({
                en: "Choose the perfect plan for your door-to-door marketing needs",
                sw: "Chagua mpango mkamilifu kwa mahitaji yako ya uuzaji wa mlango hadi mlango"
              })}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 relative ${plan.popular ? 'ring-2 ring-blue-500' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                      {getLocalizedText({
                        en: "Most Popular",
                        sw: "Maarufu Zaidi"
                      })}
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {getLocalizedText(plan.name)}
                  </h3>
                  <div className="text-4xl font-bold text-white mb-2">
                    {typeof plan.price === 'object' ? getLocalizedText(plan.price) : plan.price}
                  </div>
                  <div className="text-blue-200">
                    {getLocalizedText(plan.period)}
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      {getLocalizedText(feature)}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 rounded-xl font-bold transition-all ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:shadow-2xl' 
                    : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                }`}>
                  {getLocalizedText({
                    en: "Choose Plan",
                    sw: "Chagua Mpango"
                  })}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 bg-white/5 backdrop-blur-md">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {getLocalizedText({
                en: "Frequently Asked Questions",
                sw: "Maswali Yanayoulizwa Mara kwa Mara"
              })}
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-6">
                <button
                  className="w-full bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 flex items-center justify-between hover:bg-white/15 transition-all"
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                >
                  <span className="text-white font-semibold text-left">
                    {getLocalizedText(faq.question)}
                  </span>
                  {expandedFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-white" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-white" />
                  )}
                </button>
                
                {expandedFaq === index && (
                  <div className="mt-4 bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
                    <p className="text-gray-300 leading-relaxed">
                      {getLocalizedText(faq.answer)}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {getLocalizedText({
                en: "Ready to Get Started?",
                sw: "Tayari Kuanza?"
              })}
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              {getLocalizedText({
                en: "Transform your business with our proven door-to-door marketing strategies",
                sw: "Badilisha biashara yako kwa mikakati yetu ya uuzaji wa mlango hadi mlango iliyothibitishwa"
              })}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 flex items-center justify-center gap-3">
                {getLocalizedText({
                  en: "Get Free Consultation",
                  sw: "Pata Ushauri wa Bure"
                })}
                <Calendar className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 transition-all flex items-center justify-center gap-3">
                {getLocalizedText({
                  en: "Call Us Now",
                  sw: "Tupigie Simu Sasa"
                })}
                <Phone className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoorToDoorServices;