// File: utils/chatbotResponseHandlers.js

import { serviceDescriptions } from '@/data/chat/serviceDescriptions';
import { pricingData } from '@/data/chat/pricingData';
import { detectServiceFromMessage } from '../detect-service/index';
import { questionPatterns } from './patterns';
import { detectQuestionType } from './helpers';

/**
 * Enhanced chatbot response handlers for Future Holders Company Limited
 * Marketing Agency specializing in sales, digital solutions, and business growth
 */

/**
 * Generate services overview response
 * @param {string} language - Language code
 * @returns {Object} - Response object
 */
export const generateServicesResponse = (language = 'en') => {
  const responses = {
    en: {
      intro: "Future Holders Company Limited offers comprehensive marketing and business growth solutions:",
      services: [
        {
          name: "🚪 Door-to-Door Sales",
          description: "Professional field sales representatives promoting your products and services directly to customers",
          highlight: "Proven track record of increasing sales conversion rates by 40%+"
        },
        {
          name: "💻 Website & Application Development", 
          description: "Custom websites, mobile apps, and e-commerce platforms tailored to your business needs",
          highlight: "Modern, responsive designs that convert visitors into customers"
        },
        {
          name: "📱 Social Media Management",
          description: "Complete social media strategy, content creation, and community management across all platforms",
          highlight: "Build your brand presence and engage with your target audience"
        },
        {
          name: "📋 Public Tender Services",
          description: "Comprehensive tender searching, application preparation, and submission services",
          highlight: "Expert guidance to win government and corporate contracts"
        },
        {
          name: "🛒 Equipment Sales",
          description: "Quality business equipment and technology solutions for various industries",
          highlight: "Competitive pricing with full warranty and support services"
        },
        {
          name: "🎨 Product & Service Branding",
          description: "Complete brand identity development, logo design, and marketing materials",
          highlight: "Create a memorable brand that stands out in the marketplace"
        }
      ],
      outro: "Each service is customized to accelerate your business growth and maximize ROI. Which service interests you most?"
    },
    sw: {
      intro: "Future Holders Company Limited inatoa suluhisho kamili za umasoko na ukuaji wa biashara:",
      services: [
        {
          name: "🚪 Mauzo ya Mlango hadi Mlango",
          description: "Wawakilishi wa mauzo wa kitaaluma wanaokwenda moja kwa moja kwa wateja kutangaza bidhaa na huduma zako",
          highlight: "Rekodi iliyothibitishwa ya kuongeza viwango vya ubadilishaji wa mauzo kwa 40%+"
        },
        {
          name: "💻 Maendeleo ya Tovuti na Programu",
          description: "Tovuti za kipekee, programu za rununu, na majukwaa ya biashara yanayolingana na mahitaji ya biashara yako",
          highlight: "Miundo ya kisasa, inayojibu ambayo hubadilisha wageni kuwa wateja"
        },
        {
          name: "📱 Usimamizi wa Mitandao ya Kijamii",
          description: "Mkakati kamili wa mitandao ya kijamii, uundaji wa maudhui, na usimamizi wa jumuiya katika majukwaa yote",
          highlight: "Jenga uwepo wa chapa yako na ushirikiane na hadhira yako lengwa"
        }
      ],
      outro: "Kila huduma imepangwa kuharakisha ukuaji wa biashara yako na kuongeza faida. Ni huduma gani inayokuvutia zaidi?"
    }
  };

  return responses[language] || responses.en;
};

/**
 * Generate pricing information response
 * @param {string} service - Specific service (optional)
 * @param {string} language - Language code
 * @returns {Object} - Response object
 */
export const generatePricingResponse = (service = null, language = 'en') => {
  const responses = {
    en: {
      general: {
        intro: "Our pricing is competitive and depends on project scope and requirements:",
        factors: [
          "📊 Project complexity and duration",
          "👥 Team size and expertise level required",
          "📍 Geographic coverage (local, regional, national)",
          "🎯 Customization and specific requirements",
          "⏱️ Timeline and urgency of delivery"
        ],
        ranges: {
          "Door-to-Door Sales": "$500 - $2,500+ per campaign (commission-based options available)",
          "Website Development": "$800 - $5,000+ per project", 
          "Social Media Management": "$300 - $1,500+ per month",
          "Public Tender Services": "$200 - $1,000+ per tender application",
          "Equipment Sales": "Competitive market rates with bulk discounts",
          "Branding Services": "$400 - $2,000+ per brand package"
        },
        outro: "We offer flexible payment terms and packages. What specific service are you interested in pricing for?"
      },
      specific: "For {service}, our pricing typically ranges from {range}. The final cost depends on your specific requirements, timeline, and desired outcomes."
    },
    sw: {
      general: {
        intro: "Bei zetu ni za ushindani na zinategemea upeo na mahitaji ya mradi:",
        factors: [
          "📊 Ugumu wa mradi na muda",
          "👥 Ukubwa wa timu na kiwango cha utaalamu kinachohitajika",
          "📍 Ufikaji wa kijografia (ndani, kikanda, kitaifa)",
          "🎯 Ubinafsishaji na mahitaji maalum",
          "⏱️ Mstari wa wakati na haraka ya utoaji"
        ],
        outro: "Tunatoa masharti ya malipo ya kubadilika na vifurushi. Ni huduma gani maalum unayoipenda bei yake?"
      }
    }
  };

  return responses[language] || responses.en;
};

/**
 * Generate methodology/approach response
 * @param {string} service - Specific service (optional)
 * @param {string} language - Language code
 * @returns {Object} - Response object
 */
export const generateMethodologyResponse = (service = null, language = 'en') => {
  const responses = {
    en: {
      general: {
        intro: "Our approach is results-driven and based on proven marketing strategies:",
        principles: [
          "🎯 **Market Analysis**: Deep understanding of your target audience and competition",
          "📋 **Strategic Planning**: Customized roadmap aligned with your business goals",
          "🚀 **Implementation**: Professional execution with continuous monitoring",
          "📊 **Performance Tracking**: Data-driven optimization for maximum ROI",
          "🔄 **Ongoing Support**: Continuous improvement and adaptation to market changes"
        ],
        methods: [
          "**Customer-Centric Approach**: Focus on understanding and meeting customer needs",
          "**Data-Driven Decisions**: Analytics and metrics guide our strategies",
          "**Agile Methodology**: Flexible adaptation to market dynamics",
          "**Quality Assurance**: Rigorous testing and quality control processes",
          "**Team Collaboration**: Seamless coordination between all service areas"
        ],
        outro: "Every project is tailored to deliver measurable results and sustainable growth. Would you like to know more about our approach for a specific service?"
      },
      specific: {
        "Door-to-Door Sales": "Our field sales approach combines professional training, territory mapping, lead qualification, and performance tracking to maximize conversion rates.",
        "Website Development": "We follow agile development methodology with user experience focus, responsive design, SEO optimization, and comprehensive testing.",
        "Social Media Management": "Our social media strategy includes audience analysis, content calendar planning, engagement optimization, and performance analytics.",
        "Public Tender Services": "We use systematic tender monitoring, requirement analysis, proposal writing, and submission tracking to increase win rates.",
        "Equipment Sales": "Our sales process includes needs assessment, product matching, competitive pricing, and comprehensive after-sales support.",
        "Branding Services": "We follow a structured brand development process including research, concept development, design iteration, and brand guideline creation."
      }
    },
    sw: {
      general: {
        intro: "Mbinu yetu inalenga matokeo na inategemea mikakati ya umasoko iliyothibitishwa:",
        principles: [
          "🎯 **Uchambuzi wa Soko**: Uelewa wa kina wa hadhira yako lengwa na ushindani",
          "📋 **Upangaji wa Kimkakati**: Ramani ya kibinafsi inayolingana na malengo ya biashara yako",
          "🚀 **Utekelezaji**: Utekelezaji wa kitaaluma na ufuatiliaji wa kuendelea",
          "📊 **Ufuatiliaji wa Utendaji**: Uboreshaji unaongozwa na data kwa faida kubwa zaidi"
        ],
        outro: "Kila mradi umepangwa kutoa matokeo yanayoweza kupimwa na ukuaji endelevu. Ungependa kujua zaidi kuhusu mbinu yetu kwa huduma maalum?"
      }
    }
  };

  const response = responses[language] || responses.en;
  
  if (service && response.specific && response.specific[service]) {
    return {
      intro: response.specific[service],
      isSpecific: true
    };
  }
  
  return response.general;
};

/**
 * Generate "more information" response
 * @param {string} context - Detected service context (optional)
 * @param {string} language - Language code
 * @returns {Object} - Response object
 */
export const generateMoreInfoResponse = (context = null, language = 'en') => {
  const responses = {
    en: {
      general: {
        intro: "I'd be happy to provide more information about Future Holders Company Limited! Here's what you can learn about:",
        options: [
          "📋 **Service Details**: Comprehensive breakdown of each service offering",
          "💰 **Pricing & Packages**: Customized quotes and flexible payment options",
          "📅 **Project Timeline**: Delivery schedules and implementation phases",
          "🎯 **Our Methodology**: How we approach each type of project",
          "📈 **Success Stories**: Case studies and client testimonials",
          "🤝 **Getting Started**: How to begin your project with us"
        ],
        questions: [
          "Which service would benefit your business most?",
          "What are your main business challenges or goals?",
          "What's your preferred timeline for implementation?",
          "Do you have a specific budget range in mind?"
        ]
      },
      contextual: {
        "Door-to-Door Sales": "For door-to-door sales, I can provide details about our sales team training, territory coverage, performance metrics, and commission structures.",
        "Website Development": "For website development, I can share information about our design process, technology stack, maintenance packages, and SEO optimization.",
        "Social Media Management": "For social media management, I can explain our content strategy, platform coverage, engagement tactics, and reporting systems.",
        "Public Tender Services": "For tender services, I can detail our tender monitoring systems, proposal writing process, and success rates.",
        "Equipment Sales": "For equipment sales, I can provide information about our product range, warranty terms, installation services, and bulk pricing.",
        "Branding Services": "For branding services, I can explain our brand development process, design revisions, deliverables, and brand guideline creation."
      }
    },
    sw: {
      general: {
        intro: "Ningefurahi kutoa maelezo zaidi kuhusu Future Holders Company Limited! Hivi ndivyo unavyoweza kujifunza kuhusu:",
        options: [
          "📋 **Maelezo ya Huduma**: Maelezo kamili ya kila toleo la huduma",
          "💰 **Bei na Vifurushi**: Nukuu zilizobinafsishwa na chaguo za malipo zenye kubadilika",
          "📅 **Ratiba ya Mradi**: Ratiba za utekelezaji na awamu za utekelezaji",
          "🎯 **Mbinu Yetu**: Jinsi tunavyoshughulikia kila aina ya mradi"
        ],
        questions: [
          "Ni huduma gani ingefaa biashara yako zaidi?",
          "Ni changamoto au malengo yako makuu ya biashara yapi?",
          "Ni ratiba gani unayoipendelea kwa utekelezaji?",
          "Je, una miwango maalum ya bajeti akilini?"
        ]
      }
    }
  };

  const response = responses[language] || responses.en;
  
  if (context && response.contextual && response.contextual[context]) {
    return {
      ...response.general,
      contextSpecific: response.contextual[context],
      hasContext: true
    };
  }
  
  return response.general;
};

/**
 * Main response handler that combines question detection and service context
 * @param {string} userMessage - User's message
 * @param {string} language - Language code
 * @returns {Object} - Complete response object
 */
export const handleCommonQuestions = (userMessage, language = 'en') => {
  // Detect question type
  const questionType = detectQuestionType(userMessage, language);
  
  // Detect service context
  const serviceContext = detectServiceFromMessage(userMessage, language);
  
  let response = {
    questionType: questionType.type,
    confidence: questionType.confidence,
    serviceContext: serviceContext.service,
    serviceConfidence: serviceContext.confidence,
    response: null,
    suggestedActions: []
  };

  // Generate appropriate response based on question type
  switch (questionType.type) {
    case 'services':
      response.response = generateServicesResponse(language);
      response.suggestedActions = ['show_pricing', 'learn_methodology', 'request_quote'];
      break;
      
    case 'pricing':
      response.response = generatePricingResponse(serviceContext.service, language);
      response.suggestedActions = ['request_quote', 'schedule_consultation', 'view_services'];
      break;
      
    case 'methodology':
      response.response = generateMethodologyResponse(serviceContext.service, language);
      response.suggestedActions = ['see_examples', 'request_consultation', 'get_proposal'];
      break;
      
    case 'moreInfo':
      response.response = generateMoreInfoResponse(serviceContext.service, language);
      response.suggestedActions = ['specific_service', 'pricing_info', 'schedule_consultation'];
      break;

    case 'contact':
      response.response = generateContactResponse(language);
      response.suggestedActions = ['schedule_consultation', 'send_email', 'whatsapp_chat'];
      break;
      
    case 'timeline':
      response.response = generateTimelineResponse(serviceContext.service, language);
      response.suggestedActions = ['request_consultation', 'discuss_urgency', 'flexible_scheduling'];
      break;
      
    case 'location':
      response.response = generateLocationResponse(language);
      response.suggestedActions = ['discuss_coverage', 'local_meeting', 'remote_consultation'];
      break;
      
    case 'qualifications':
      response.response = generateQualificationsResponse(language);
      response.suggestedActions = ['see_portfolio', 'view_testimonials', 'request_consultation'];
      break;
      
    default:
      // If no specific question type detected, provide general help
      response.response = {
        intro: language === 'sw' ? 
          "Samahani, sijaelewa vizuri swali lako. Je, unaweza kuuliza kwa njia nyingine?" :
          "I'd be happy to help you learn more about Future Holders Company Limited! Could you clarify what you'd like to know?",
        suggestions: language === 'sw' ? [
          "Mnatoa huduma gani?",
          "Bei zenu ni ngapi?", 
          "Mnafanyaje kazi?",
          "Nataka maelezo zaidi kuhusu kampuni yenu"
        ] : [
          "What services do you offer?",
          "What are your pricing rates?",
          "How do you work with clients?",
          "I need more information about your company"
        ]
      };
      response.suggestedActions = ['show_services', 'show_pricing', 'request_consultation'];
  }

  return response;
};

/**
 * Format response for display in chatbot
 * @param {Object} responseObj - Response object from handleCommonQuestions
 * @param {string} language - Language code
 * @returns {string} - Formatted message for display
 */
export const formatResponseForDisplay = (responseObj, language = 'en') => {
  const { response, serviceContext, questionType } = responseObj;
  
  if (!response) return '';

  let formattedMessage = '';

  // Add intro
  if (response.intro) {
    formattedMessage += response.intro + '\n\n';
  }

  // Add main content based on response type
  if (response.services) {
    response.services.forEach(service => {
      formattedMessage += `${service.name}\n${service.description}\n*${service.highlight}*\n\n`;
    });
  }

  // Add contact methods
  if (response.contactMethods) {
    response.contactMethods.forEach(contact => {
      formattedMessage += `${contact.method}: ${contact.details}\n*${contact.note}*\n\n`;
    });
  }

  // Add timelines
  if (response.timelines) {
    response.timelines.forEach(timeline => {
      formattedMessage += `${timeline.service}: ${timeline.timeline}\n*${timeline.details}*\n\n`;
    });
  }

  // Add service areas
  if (response.serviceAreas) {
    response.serviceAreas.forEach(area => {
      formattedMessage += `${area.region}\n${area.description}\n`;
      formattedMessage += `Coverage: ${area.coverage.join(', ')}\n`;
      formattedMessage += `*${area.note}*\n\n`;
    });
  }

  // Add company credentials
  if (response.credentials) {
    formattedMessage += '**Company Credentials:**\n';
    formattedMessage += response.credentials.join('\n') + '\n\n';
  }

  // Add specializations  
  if (response.specializations) {
    formattedMessage += '**Our Specializations:**\n';
    formattedMessage += response.specializations.map(s => `• ${s}`).join('\n') + '\n\n';
  }

  if (response.factors) {
    formattedMessage += response.factors.join('\n') + '\n\n';
  }

  if (response.principles) {
    formattedMessage += response.principles.join('\n\n') + '\n\n';
  }

  if (response.options) {
    formattedMessage += response.options.join('\n\n') + '\n\n';
  }

  // Add context-specific information
  if (response.contextSpecific) {
    formattedMessage += `\n**Specific to your interest**: ${response.contextSpecific}\n\n`;
  }

  // Add ranges for pricing
  if (response.ranges) {
    formattedMessage += '**Service Investment Ranges:**\n';
    Object.entries(response.ranges).forEach(([service, range]) => {
      formattedMessage += `• ${service}: ${range}\n`;
    });
    formattedMessage += '\n';
  }

  // Add outro/questions
  if (response.outro) {
    formattedMessage += response.outro;
  }

  if (response.questions) {
    formattedMessage += '\n\n**To help us serve you better, please let us know:**\n';
    formattedMessage += response.questions.map(q => `• ${q}`).join('\n');
  }

  if (response.suggestions) {
    formattedMessage += '\n\n**You can ask us:**\n';
    formattedMessage += response.suggestions.map(s => `• "${s}"`).join('\n');
  }

  return formattedMessage.trim();
};

/**
 * Generate contact information response
 * @param {string} language - Language code
 * @returns {Object} - Response object
 */
export const generateContactResponse = (language = 'en') => {
  const responses = {
    en: {
      intro: "We'd love to discuss how Future Holders Company Limited can help grow your business! Here's how to reach us:",
      contactMethods: [
        {
          method: "📧 **Email**",
          details: "info@futureholders.co.tz",
          note: "Best for detailed project inquiries and proposals"
        },
        {
          method: "📞 **Phone**", 
          details: "+255 XXX XXX XXX",
          note: "Available Monday-Friday, 8 AM - 6 PM EAT"
        },
        {
          method: "💬 **WhatsApp**",
          details: "+255 XXX XXX XXX",
          note: "Quick responses and instant communication"
        },
        {
          method: "📍 **Office Visit**",
          details: "Dar es Salaam, Tanzania",
          note: "Schedule an appointment for in-person consultation"
        }
      ],
      availability: "We typically respond within 4-6 hours during business hours and offer flexible meeting times.",
      nextSteps: "Ready to grow your business? We offer a complimentary consultation to discuss your needs and how we can help achieve your goals.",
      outro: "What's the best way to connect with you?"
    },
    sw: {
      intro: "Tungependa kujadili jinsi Future Holders Company Limited inavyoweza kusaidia kukuza biashara yako! Hivi ndivyo unavyoweza kutufikia:",
      contactMethods: [
        {
          method: "📧 **Barua Pepe**",
          details: "info@futureholders.co.tz", 
          note: "Bora kwa maswali ya kina ya miradi na mapendekezo"
        },
        {
          method: "📞 **Simu**",
          details: "+255 XXX XXX XXX",
          note: "Tunapatikana Jumatatu-Ijumaa, 8 AM - 6 PM EAT"
        },
        {
          method: "💬 **WhatsApp**",
          details: "+255 XXX XXX XXX",
          note: "Majibu ya haraka na mawasiliano ya papo hapo"
        }
      ],
      availability: "Kwa kawaida tunajibu ndani ya masaa 4-6 wakati wa kazi na tunatoa wakati wa kukutana wa kubadilika.",
      outro: "Ni njia gani bora ya kuungana nawe?"
    }
  };

  return responses[language] || responses.en;
};

/**
 * Generate timeline/scheduling response
 * @param {string} service - Specific service (optional)
 * @param {string} language - Language code
 * @returns {Object} - Response object
 */
export const generateTimelineResponse = (service = null, language = 'en') => {
  const responses = {
    en: {
      general: {
        intro: "Project timelines vary based on service type and complexity:",
        timelines: [
          {
            service: "🚪 **Door-to-Door Sales**",
            timeline: "Campaign launch: 1-2 weeks",
            details: "Includes team training, territory planning, and material preparation"
          },
          {
            service: "💻 **Website Development**", 
            timeline: "2-6 weeks completion",
            details: "Timeline depends on complexity, features, and content requirements"
          },
          {
            service: "📱 **Social Media Management**",
            timeline: "Can start within 1 week",
            details: "Ongoing monthly service with initial strategy development"
          },
          {
            service: "📋 **Public Tender Services**",
            timeline: "5-10 days per tender",
            details: "Depends on tender complexity and submission requirements"
          },
          {
            service: "🛒 **Equipment Sales**",
            timeline: "1-3 days processing",
            details: "Subject to stock availability and delivery location"
          },
          {
            service: "🎨 **Branding Services**",
            timeline: "2-4 weeks completion",
            details: "Includes research, design iterations, and final deliverables"
          }
        ],
        flexibility: "We work with your schedule and can accommodate urgent requests with expedited services.",
        outro: "When do you need your project completed? We can create a timeline that works for your business."
      },
      urgent: {
        intro: "Need something done quickly? We offer expedited services:",
        options: [
          "**Rush website development**: 1-2 weeks with additional resources",
          "**Emergency branding**: 1 week for basic brand package", 
          "**Immediate social media setup**: 2-3 days for account optimization",
          "**Express consultation**: Same-day or next-day meetings available"
        ],
        note: "Rush services may have additional costs but we guarantee quality delivery within your timeline."
      }
    },
    sw: {
      general: {
        intro: "Mstari wa wakati wa miradi hubadilika kulingana na aina ya huduma na ugumu:",
        flexibility: "Tunafanya kazi na ratiba yako na tunaweza kukidhi maombi ya haraka na huduma za kuharakisha.",
        outro: "Ni lini unahitaji mradi wako ukamilike? Tunaweza kuunda mstari wa wakati unaofaa biashara yako."
      }
    }
  };

  return responses[language] || responses.en;
};

/**
 * Generate location/service coverage response
 * @param {string} language - Language code  
 * @returns {Object} - Response object
 */
export const generateLocationResponse = (language = 'en') => {
  const responses = {
    en: {
      intro: "Future Holders Company Limited serves clients across Tanzania and beyond:",
      serviceAreas: [
        {
          region: "🏢 **Dar es Salaam Region**",
          description: "Full service coverage with on-site visits and support",
          coverage: ["Dar es Salaam City", "Coastal areas", "Surrounding districts"],
          note: "Our headquarters location - no additional travel costs"
        },
        {
          region: "🌍 **National Coverage**", 
          description: "Services available throughout Tanzania",
          coverage: ["All major cities", "Regional centers", "Remote areas"],
          note: "Travel costs may apply for on-site services outside Dar es Salaam"
        },
        {
          region: "💻 **Remote Services**",
          description: "Digital services available globally",  
          coverage: ["Website development", "Social media management", "Online consultations"],
          note: "No geographic limitations for digital services"
        },
        {
          region: "🚪 **Door-to-Door Sales**",
          description: "Field sales coverage in major urban areas",
          coverage: ["Dar es Salaam", "Dodoma", "Arusha", "Mbeya", "Mwanza"],
          note: "Expandable to other regions based on client requirements"
        }
      ],
      capabilities: {
        intro: "**Our Service Capabilities:**",
        details: [
          "• On-site consultations and meetings",
          "• Remote project management and delivery", 
          "• Hybrid service delivery combining on-site and remote work",
          "• Multi-location project coordination"
        ]
      },
      outro: "Where is your business located? We can discuss the best service delivery approach for your area."
    },
    sw: {
      intro: "Future Holders Company Limited inahudumia wateja katika Tanzania na nje:",
      outro: "Biashara yako iko wapi? Tunaweza kujadili mbinu bora ya utoaji wa huduma kwa eneo lako."
    }
  };

  return responses[language] || responses.en;
};

/**
 * Generate company qualifications/credentials response
 * @param {string} language - Language code
 * @returns {Object} - Response object  
 */
export const generateQualificationsResponse = (language = 'en') => {
  const responses = {
    en: {
      intro: "Future Holders Company Limited brings expertise and proven results to every project:",
      experience: {
        founded: "Established marketing agency serving businesses across Tanzania",
        clients: "Worked with SMEs, corporations, and government entities",
        reach: "Successfully completed 200+ projects across various industries"
      },
      credentials: [
        "🏢 **Licensed Business**: Registered with Tanzania Business Registration Authority",
        "🎯 **Marketing Expertise**: Specialized team in digital marketing and sales",
        "💻 **Technical Skills**: Certified developers and design professionals",
        "📋 **Tender Experience**: Proven track record in public tender applications"
      ],
      specializations: [
        "Direct Sales & Customer Acquisition",
        "Web Development & E-commerce Solutions", 
        "Social Media Strategy & Content Marketing",
        "Government & Corporate Tender Applications",
        "Business Equipment & Technology Solutions",
        "Brand Development & Marketing Materials"
      ],
      achievements: [
        "98% client satisfaction rate",
        "Average sales increase of 40% for door-to-door campaigns",
        "70% tender application success rate",
        "50+ successful website launches"
      ],
      outro: "Our team combines local market knowledge with modern marketing techniques. Would you like to see examples of our work or client testimonials?"
    },
    sw: {
      intro: "Future Holders Company Limited inaleta utaalamu na matokeo yaliyothibitishwa katika kila mradi:",
      outro: "Timu yetu inachanganya maarifa ya soko la ndani na mbinu za kisasa za umasoko. Ungependa kuona mifano ya kazi yetu au ushuhuda wa wateja?"
    }
  };

  return responses[language] || responses.en;
};