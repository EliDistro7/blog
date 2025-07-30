'use client';

import React, { useState } from 'react';
import { 
  Truck, 
  Wrench, 
  Shield, 
  Clock, 
  Award, 
  Users,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  Star,
  TrendingUp,
  Settings,
  ChevronDown,
  ChevronUp,
  DollarSign,
  Calendar,
  Zap
} from 'lucide-react';

// Mock language context
const useLanguage = () => ({ language: 'en' });

// Data for the page
const equipmentHeroStats = [
  {
    number: "500+",
    label: { en: "Equipment Units Sold", sw: "Vifaa Vimeuzwa" }
  },
  {
    number: "15+",
    label: { en: "Years Experience", sw: "Miaka ya Uzoefu" }
  },
  {
    number: "98%",
    label: { en: "Customer Satisfaction", sw: "Kuridhika kwa Wateja" }
  },
  {
    number: "50+",
    label: { en: "Partner Brands", sw: "Chapa Washirika" }
  }
];

const equipmentCategories = [
  {
    id: 1,
    name: { en: "Excavators", sw: "Mashine za Kuchimba" },
    description: { en: "Heavy-duty excavators for all construction needs", sw: "Mashine nzito za kuchimba kwa mahitaji yote ya ujenzi" },
    icon: <Truck className="w-8 h-8" />,
    models: ["CAT 320D", "Komatsu PC200", "Volvo EC210", "JCB JS205"],
    priceRange: { en: "$50,000 - $200,000", sw: "TSh 120M - 480M" }
  },
  {
    id: 2,
    name: { en: "Bulldozers", sw: "Mashine za Kusonga" },
    description: { en: "Powerful bulldozers for earthmoving and grading", sw: "Mashine zenye nguvu za kusonga ardhi na kupanga" },
    icon: <Settings className="w-8 h-8" />,
    models: ["CAT D6T", "Komatsu D65", "John Deere 750K", "Liebherr PR734"],
    priceRange: { en: "$80,000 - $300,000", sw: "TSh 190M - 720M" }
  },
  {
    id: 3,
    name: { en: "Wheel Loaders", sw: "Mashine za Kupakia" },
    description: { en: "Efficient wheel loaders for material handling", sw: "Mashine bora za kupakia vifaa" },
    icon: <Wrench className="w-8 h-8" />,
    models: ["CAT 966M", "Volvo L120H", "Komatsu WA380", "JCB 457"],
    priceRange: { en: "$60,000 - $250,000", sw: "TSh 145M - 600M" }
  },
  {
    id: 4,
    name: { en: "Dump Trucks", sw: "Malori ya Kurusha" },
    description: { en: "Heavy-duty dump trucks for material transport", sw: "Malori nzito ya kusafirisha vifaa" },
    icon: <TrendingUp className="w-8 h-8" />,
    models: ["CAT 735C", "Volvo A40G", "Komatsu HM300", "Bell B30E"],
    priceRange: { en: "$70,000 - $280,000", sw: "TSh 170M - 670M" }
  }
];

const services = [
  {
    icon: <Truck className="w-12 h-12" />,
    title: { en: "Equipment Sales", sw: "Uuzi wa Vifaa" },
    description: { en: "New and certified pre-owned construction equipment from leading manufacturers", sw: "Vifaa vipya na vilivyotumika lakini vimetihibitishwa kutoka kwa wauzaji wakuu" }
  },
  {
    icon: <Wrench className="w-12 h-12" />,
    title: { en: "Maintenance & Repair", sw: "Matengenezo na Ukarabati" },
    description: { en: "Professional maintenance and repair services to keep your equipment running", sw: "Huduma za kitaalamu za matengenezo na ukarabati ili vifaa vyako vendelee kufanya kazi" }
  },
  {
    icon: <Shield className="w-12 h-12" />,
    title: { en: "Warranty & Support", sw: "Dhamana na Msaada" },
    description: { en: "Comprehensive warranty coverage and 24/7 technical support", sw: "Dhamana kamili na msaada wa kiufundi masaa 24 kwa siku" }
  },
  {
    icon: <DollarSign className="w-12 h-12" />,
    title: { en: "Financing Options", sw: "Chaguo za Kifedha" },
    description: { en: "Flexible financing and leasing options to fit your budget", sw: "Chaguo za kifedha na kukodisha zinazofaa bajeti yako" }
  }
];

const process = [
  {
    step: 1,
    title: { en: "Consultation", sw: "Ushauri" },
    description: { en: "Discuss your project needs and equipment requirements", sw: "Jadili mahitaji ya mradi wako na vifaa unavyohitaji" }
  },
  {
    step: 2,
    title: { en: "Equipment Selection", sw: "Uchaguzi wa Vifaa" },
    description: { en: "Choose from our wide range of quality construction equipment", sw: "Chagua kutoka kwa vifaa vyetu vingi vya ubora wa ujenzi" }
  },
  {
    step: 3,
    title: { en: "Inspection & Testing", sw: "Ukaguzi na Mtihani" },
    description: { en: "Thorough inspection and testing of selected equipment", sw: "Ukaguzi na mtihani wa kina wa vifaa vilivyochaguliwa" }
  },
  {
    step: 4,
    title: { en: "Delivery & Training", sw: "Utoaji na Mafunzo" },
    description: { en: "Equipment delivery and operator training at your site", sw: "Utoaji wa vifaa na mafunzo ya waendeshaji kwenye eneo lako" }
  }
];

const testimonials = [
  {
    name: "John Mwangi",
    company: "Mwangi Construction Ltd",
    rating: 5,
    comment: { 
      en: "Excellent equipment quality and outstanding customer service. Our CAT excavator has been running smoothly for 2 years.",
      sw: "Ubora wa vifaa ni bora sana na huduma ya wateja ni ya kipekee. Mashine yetu ya CAT imekuwa ikifanya kazi vizuri kwa miaka 2."
    }
  },
  {
    name: "Grace Kilimo",
    company: "Kilimo Heavy Works",
    rating: 5,
    comment: { 
      en: "Professional team and competitive prices. The financing options made it possible for us to expand our fleet.",
      sw: "Timu ya kitaalamu na bei zinazoshindana. Chaguo za kifedha zilituwezesha kupanua mzunguko wetu wa vifaa."
    }
  },
  {
    name: "Ahmed Hassan",
    company: "Hassan Earthmoving",
    rating: 5,
    comment: { 
      en: "Reliable equipment and excellent after-sales support. They respond quickly whenever we need assistance.",
      sw: "Vifaa vinavyoaminika na msaada mzuri baada ya mauzo. Hujibu haraka tunahitaji msaada."
    }
  }
];

const pricingPlans = [
  {
    name: { en: "Basic Package", sw: "Kifurushi cha Msingi" },
    price: { en: "$2,000/month", sw: "TSh 4.8M/mwezi" },
    features: [
      { en: "Equipment rental", sw: "Ukodishaji wa vifaa" },
      { en: "Basic maintenance", sw: "Matengenezo ya msingi" },
      { en: "Operator training", sw: "Mafunzo ya waendeshaji" },
      { en: "Monthly inspections", sw: "Ukaguzi wa kila mwezi" }
    ]
  },
  {
    name: { en: "Professional Package", sw: "Kifurushi cha Kitaalamu" },
    price: { en: "$3,500/month", sw: "TSh 8.4M/mwezi" },
    features: [
      { en: "Everything in Basic", sw: "Kila kitu katika Msingi" },
      { en: "Priority support", sw: "Msaada wa kwanza" },
      { en: "Extended warranty", sw: "Dhamana iliyoongezwa" },
      { en: "Performance monitoring", sw: "Ufuatiliaji wa utendaji" },
      { en: "Replacement guarantee", sw: "Dhamana ya ubadilishaji" }
    ],
    popular: true
  },
  {
    name: { en: "Enterprise Package", sw: "Kifurushi cha Makampuni" },
    price: { en: "Custom Quote", sw: "Bei ya Maalum" },
    features: [
      { en: "Everything in Professional", sw: "Kila kitu katika Kitaalamu" },
      { en: "Fleet management", sw: "Usimamizi wa mzunguko" },
      { en: "24/7 emergency support", sw: "Msaada wa dharura 24/7" },
      { en: "Custom financing", sw: "Ufupi wa kifedha" },
      { en: "Dedicated account manager", sw: "Meneja mahususi wa akaunti" }
    ]
  }
];

const faqs = [
  {
    question: { en: "What brands of equipment do you sell?", sw: "Je, muuza chapa gani za vifaa?" },
    answer: { 
      en: "We partner with leading manufacturers including Caterpillar, Komatsu, Volvo, JCB, John Deere, and many others to provide quality construction equipment.",
      sw: "Tunashirikiana na wauzaji wakuu ikiwa ni pamoja na Caterpillar, Komatsu, Volvo, JCB, John Deere, na wengine wengi kutoa vifaa vya ubora wa ujenzi."
    }
  },
  {
    question: { en: "Do you offer financing options?", sw: "Je, mnatoa chaguo za kifedha?" },
    answer: { 
      en: "Yes, we offer flexible financing and leasing options with competitive rates. Our team can help you find the best payment plan for your business.",
      sw: "Ndiyo, tunatoa chaguo za kifedha na kukodisha zenye kubadilika pamoja na viwango vya ushindani. Timu yetu inaweza kukusaidia kupata mpango bora wa malipo kwa biashara yako."
    }
  },
  {
    question: { en: "What warranty coverage do you provide?", sw: "Mnatoa dhamana gani?" },
    answer: { 
      en: "All new equipment comes with manufacturer warranty, and we offer extended warranty options. Pre-owned equipment includes our certified quality guarantee.",
      sw: "Vifaa vyote vipya vinakuja na dhamana ya mtengenezaji, na tunatoa chaguo za dhamana iliyoongezwa. Vifaa vilivyotumika vinapata dhamana yetu ya ubora uliosakiniwa."
    }
  },
  {
    question: { en: "Do you provide equipment training?", sw: "Je, mnatoa mafunzo ya vifaa?" },
    answer: { 
      en: "Yes, we provide comprehensive operator training for all equipment purchases. Our certified trainers ensure your operators can safely and efficiently use the equipment.",
      sw: "Ndiyo, tunatoa mafunzo kamili ya waendeshaji kwa ununuzi wote wa vifaa. Wakufunzi wetu waliothibitishwa wanahakikisha waendeshaji wako wanaweza kutumia vifaa kwa usalama na ufanisi."
    }
  }
];

// Component definitions
const HeroSection = ({ language, heroStats }) => (
  <section className="relative py-20 bg-gradient-to-br from-brand-dark via-brand-deep to-brand-medium overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-brand-gold/10 to-brand-goldLight/5"></div>
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-brand-gold mb-6 leading-tight drop-shadow-icon">
          {language === 'en' 
            ? 'Premium Construction Equipment Sales' 
            : 'Mauzo ya Vifaa vya Ujenzi vya Ubora'
          }
        </h1>
        <p className="text-xl md:text-2xl text-brand-goldLight mb-8 max-w-4xl mx-auto">
          {language === 'en' 
            ? 'Trusted supplier of quality construction equipment across East Africa. From excavators to bulldozers - we have everything you need to build your success.'
            : 'Muuzaji wa kuaminika wa vifaa vya ubora vya ujenzi katika Afrika ya Mashariki. Kutoka mashine za kuchimba hadi za kusonga - tuna kila kitu unachohitaji kujenga mafanikio yako.'
          }
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button className="bg-brand-gold text-brand-dark px-8 py-4 rounded-lg hover:bg-brand-goldLight transition-colors duration-300 font-bold text-lg flex items-center gap-2 justify-center shadow-gold">
            {language === 'en' ? 'Browse Equipment' : 'Angalia Vifaa'}
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="bg-transparent border-2 border-brand-gold text-brand-gold px-8 py-4 rounded-lg hover:bg-brand-gold hover:text-brand-dark transition-colors duration-300 font-bold text-lg">
            {language === 'en' ? 'Get Quote' : 'Pata Bei'}
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
        {heroStats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-3xl md:text-5xl font-bold text-brand-gold mb-2">{stat.number}</div>
            <div className="text-brand-goldLight text-sm md:text-base">{stat.label[language]}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ServicesSection = ({ language, services }) => (
  <section className="py-20 bg-brand-deep">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-brand-gold mb-6">
          {language === 'en' ? 'Our Services' : 'Huduma Zetu'}
        </h2>
        <p className="text-xl text-brand-goldLight max-w-3xl mx-auto">
          {language === 'en' 
            ? 'Comprehensive solutions for all your construction equipment needs'
            : 'Suluhisho kamili kwa mahitaji yako yote ya vifaa vya ujenzi'
          }
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-brand-medium p-8 rounded-lg hover:bg-brand-light transition-colors duration-300 border border-brand-gold/20 shadow-gold">
            <div className="text-brand-gold mb-6">{service.icon}</div>
            <h3 className="text-xl font-bold text-brand-goldLight mb-4">{service.title[language]}</h3>
            <p className="text-brand-foam">{service.description[language]}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const EquipmentCategoriesSection = ({ language, categories, selectedCategory, setSelectedCategory }) => (
  <section className="py-20 bg-brand-dark">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-brand-gold mb-6">
          {language === 'en' ? 'Equipment Categories' : 'Aina za Vifaa'}
        </h2>
        <p className="text-xl text-brand-goldLight max-w-3xl mx-auto">
          {language === 'en' 
            ? 'Choose from our extensive range of construction equipment'
            : 'Chagua kutoka kwa vifaa vyetu vingi vya ujenzi'
          }
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {categories.map((category, index) => (
          <div 
            key={category.id}
            className={`p-6 rounded-lg cursor-pointer transition-all duration-300 border ${
              selectedCategory === index 
                ? 'bg-brand-gold text-brand-dark shadow-gold border-brand-goldLight' 
                : 'bg-brand-medium text-brand-goldLight hover:bg-brand-gold hover:text-brand-dark border-brand-gold/30'
            }`}
            onClick={() => setSelectedCategory(index)}
          >
            <div className="mb-4">{category.icon}</div>
            <h3 className="text-xl font-bold mb-2">{category.name[language]}</h3>
            <p className="text-sm opacity-90 mb-4">{category.description[language]}</p>
            <div className="text-sm font-bold">{category.priceRange[language]}</div>
          </div>
        ))}
      </div>
      
      {selectedCategory !== null && (
        <div className="bg-brand-medium p-8 rounded-lg shadow-gold border border-brand-gold/30">
          <h3 className="text-2xl font-bold text-brand-gold mb-6">
            {categories[selectedCategory].name[language]} - {language === 'en' ? 'Available Models' : 'Mifano Inayopatikana'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories[selectedCategory].models.map((model, index) => (
              <div key={index} className="bg-brand-light p-4 rounded-lg text-center border border-brand-gold/20">
                <div className="font-bold text-brand-goldLight">{model}</div>
                <button className="mt-2 text-brand-gold hover:text-brand-goldLight text-sm font-medium">
                  {language === 'en' ? 'Get Quote' : 'Pata Bei'}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  </section>
);

const ProcessSection = ({ language, process }) => (
  <section className="py-20 bg-brand-deep">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-brand-gold mb-6">
          {language === 'en' ? 'Our Process' : 'Mchakato Wetu'}
        </h2>
        <p className="text-xl text-brand-goldLight max-w-3xl mx-auto">
          {language === 'en' 
            ? 'Simple and transparent process from consultation to delivery'
            : 'Mchakato rahisi na uwazi kutoka ushauri hadi utoaji'
          }
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {process.map((step, index) => (
          <div key={index} className="text-center">
            <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-6 shadow-gold">
              <span className="text-2xl font-bold text-brand-dark">{step.step}</span>
            </div>
            <h3 className="text-xl font-bold text-brand-goldLight mb-4">{step.title[language]}</h3>
            <p className="text-brand-foam">{step.description[language]}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const TestimonialsSection = ({ language, testimonials }) => (
  <section className="py-20 bg-brand-dark">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-brand-gold mb-6">
          {language === 'en' ? 'What Our Clients Say' : 'Wateja Wetu Wanasema Nini'}
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-brand-medium p-8 rounded-lg shadow-gold border border-brand-gold/20">
            <div className="flex mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-brand-gold fill-current" />
              ))}
            </div>
            <p className="text-brand-foam mb-6 italic">"{testimonial.comment[language]}"</p>
            <div>
              <div className="font-bold text-brand-goldLight">{testimonial.name}</div>
              <div className="text-brand-light text-sm">{testimonial.company}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const PricingSection = ({ language, pricingPlans }) => (
  <section className="py-20 bg-brand-deep">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-brand-gold mb-6">
          {language === 'en' ? 'Service Packages' : 'Vifurushi vya Huduma'}
        </h2>
        <p className="text-xl text-brand-goldLight max-w-3xl mx-auto">
          {language === 'en' 
            ? 'Choose the service package that best fits your needs'
            : 'Chagua kifurushi cha huduma kinachofaa mahitaji yako'
          }
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingPlans.map((plan, index) => (
          <div key={index} className={`p-8 rounded-lg ${plan.popular ? 'bg-brand-gold border-4 border-brand-goldLight' : 'bg-brand-medium border border-brand-gold/30'} relative shadow-gold`}>
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-brand-goldDark text-brand-goldLight px-4 py-1 rounded-full text-sm font-bold">
                  {language === 'en' ? 'Most Popular' : 'Maarufu Zaidi'}
                </span>
              </div>
            )}
            <h3 className={`text-2xl font-bold mb-4 ${plan.popular ? 'text-brand-dark' : 'text-brand-goldLight'}`}>{plan.name[language]}</h3>
            <div className={`text-3xl font-bold mb-6 ${plan.popular ? 'text-brand-dark' : 'text-brand-gold'}`}>{plan.price[language]}</div>
            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className={`flex items-center ${plan.popular ? 'text-brand-dark' : 'text-brand-foam'}`}>
                  <CheckCircle className={`w-5 h-5 mr-3 flex-shrink-0 ${plan.popular ? 'text-success' : 'text-success'}`} />
                  {feature[language]}
                </li>
              ))}
            </ul>
            <button className={`w-full py-3 rounded-lg font-bold transition-colors duration-300 ${
              plan.popular 
                ? 'bg-brand-dark text-brand-gold hover:bg-brand-medium' 
                : 'bg-brand-gold text-brand-dark hover:bg-brand-goldLight'
            }`}>
              {language === 'en' ? 'Get Started' : 'Anza Sasa'}
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);



const FAQSection = ({ language, faqs, expandedFaq, toggleFaq }) => (
  <section className="py-20 bg-black">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-yellow-400 mb-6">
          {language === 'en' ? 'Frequently Asked Questions' : 'Maswali Yanayoulizwa Mara kwa Mara'}
        </h2>
      </div>
      
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-gray-800 rounded-lg shadow-md border border-yellow-500/20">
            <button
              className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-700"
              onClick={() => toggleFaq(index)}
            >
              <span className="font-bold text-yellow-300">{faq.question[language]}</span>
              {expandedFaq === index ? (
                <ChevronUp className="w-5 h-5 text-yellow-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-yellow-400" />
              )}
            </button>
            {expandedFaq === index && (
              <div className="px-6 pb-4">
                <p className="text-gray-300">{faq.answer[language]}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CTASection = ({ language }) => (
  <section className="py-20 bg-gradient-to-r from-brand-deep to-brand-dark">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-brand-gold mb-6">
          {language === 'en' 
            ? 'Ready to Upgrade Your Fleet?' 
            : 'Tayari Kuboresha Mzunguko Wako?'
          }
        </h2>
        <p className="text-xl text-brand-goldLight mb-8 max-w-3xl mx-auto">
          {language === 'en' 
            ? 'Join hundreds of successful construction companies who trust us with their equipment needs. Get started today with a free consultation.'
            : 'Jiunge na mamia ya makampuni ya ujenzi yaliyofanikiwa yanayotuamini kwa mahitaji yao ya vifaa. Anza leo kwa ushauri wa bure.'
          }
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button className="bg-brand-gold text-brand-dark px-8 py-4 rounded-lg hover:bg-brand-goldLight transition-colors duration-300 font-bold text-lg flex items-center gap-2 justify-center shadow-gold">
            {language === 'en' ? 'Browse Equipment' : 'Angalia Vifaa'}
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="bg-transparent border-2 border-brand-gold text-brand-gold px-8 py-4 rounded-lg hover:bg-brand-gold hover:text-brand-dark transition-colors duration-300 font-bold text-lg">
            {language === 'en' ? 'Free Consultation' : 'Ushauri wa Bure'}
          </button>
        </div>
      </div>

      {/* Contact Information */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        <div className="text-center">
          <div className="w-12 h-12 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Phone className="w-6 h-6 text-brand-gold" />
          </div>
          <h3 className="text-lg font-bold text-brand-goldLight mb-2">
            {language === 'en' ? 'Call Us' : 'Tupigie Simu'}
          </h3>
          <p className="text-brand-goldLight">+255 789 123 456</p>
          <p className="text-brand-goldLight">+255 654 987 321</p>
        </div>
        
        <div className="text-center">
          <div className="w-12 h-12 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail className="w-6 h-6 text-brand-gold" />
          </div>
          <h3 className="text-lg font-bold text-brand-goldLight mb-2">
            {language === 'en' ? 'Email Us' : 'Tutumie Barua Pepe'}
          </h3>
          <p className="text-brand-goldLight">sales@equipmentkenya.com</p>
          <p className="text-brand-goldLight">info@equipmentkenya.com</p>
        </div>
        
        <div className="text-center">
          <div className="w-12 h-12 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <MapPin className="w-6 h-6 text-brand-gold" />
          </div>
          <h3 className="text-lg font-bold text-brand-goldLight mb-2">
            {language === 'en' ? 'Visit Us' : 'Tutembelee'}
          </h3>
          <p className="text-brand-goldLight">Industrial Area, Nairobi</p>
          <p className="text-brand-goldLight">Dar es Salaam, Tanzania</p>
        </div>
      </div>
    </div>
  </section>
);

// Main Equipment Sales Page Component
const EquipmentSalesPage = () => {
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [expandedFaq, setExpandedFaq] = useState(null);

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-brand-dark">
      <HeroSection language={language} heroStats={equipmentHeroStats} />
      <ServicesSection language={language} services={services} />
      <EquipmentCategoriesSection 
        language={language} 
        categories={equipmentCategories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <ProcessSection language={language} process={process} />
      <TestimonialsSection language={language} testimonials={testimonials} />
      <PricingSection language={language} pricingPlans={pricingPlans} />
      <FAQSection 
        language={language} 
        faqs={faqs}
        expandedFaq={expandedFaq}
        toggleFaq={toggleFaq}
      />
      <CTASection language={language} />
    </div>
  );
};

export default EquipmentSalesPage;