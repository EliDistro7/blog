// File: utils/chatbotResponseHandlers.ts

import { serviceDescriptions } from '@/data/chat/serviceDescriptions';
import { pricingData } from '@/data/chat/pricingData';
import { detectServiceFromMessage, ServiceDetectionResult } from '../detect-service/index';
import { questionPatterns } from './patterns';
import { detectQuestionType, QuestionTypeAnalysis } from './helpers';
import { ResponseObject} from '@/app/components/chatBot/utils/response/generator/responseGenerator';
import {createResponseObject } from '@/app/components/chatBot/utils/response/generator/utils';


/**
 * Enhanced chatbot response handlers for Future Holders Company Limited
 * Marketing Agency specializing in sales, digital solutions, and business growth
 */

// Type definitions
export type Language = 'en' | 'sw';

export type QuestionType = String | null;

export type ServiceType = string
  | null;

export type SuggestedAction = 
  | 'show_pricing'
  | 'learn_methodology'
  | 'request_quote'
  | 'schedule_consultation'
  | 'view_services'
  | 'see_examples'
  | 'request_consultation'
  | 'get_proposal'
  | 'specific_service'
  | 'pricing_info'
  | 'send_email'
  | 'whatsapp_chat'
  | 'discuss_urgency'
  | 'flexible_scheduling'
  | 'discuss_coverage'
  | 'local_meeting'
  | 'remote_consultation'
  | 'see_portfolio'
  | 'view_testimonials'
  | 'show_services';

// Interface definitions
export interface ServiceInfo {
  name: string;
  description: string;
  highlight: string;
}

export interface CommonQuestionResponse {
  questionType: string | null;
  confidence: number;
  serviceContext: string | null;
  serviceConfidence: number;
  response: ResponseData | null;  // Changed from string to ResponseData | null
  suggestedActions: string[];
}

export interface ServicesResponse {
  intro: string;
  services: ServiceInfo[];
  outro: string;
}

export interface PricingFactors {
  intro: string;
  factors: string[];
  ranges: Record<string, string>;
  outro: string;
}

export interface PricingResponse {
  general: PricingFactors;
  specific: string;
}

export interface MethodologyResponse {
  intro: string;
  principles?: string[];
  methods?: string[];
  outro: string;
  isSpecific?: boolean;
}

export interface ContactMethod {
  method: string;
  details: string;
  note: string;
}

export interface ContactResponse {
  intro: string;
  contactMethods: ContactMethod[];
  availability: string;
  nextSteps?: string;
  outro: string;
}

export interface TimelineInfo {
  service: string;
  timeline: string;
  details: string;
}

export interface TimelineResponse {
  intro: string;
  timelines?: TimelineInfo[];
  flexibility?: string;
  options?: string[];
  note?: string;
  outro: string;
}

export interface ServiceArea {
  region: string;
  description: string;
  coverage: string[];
  note: string;
}

export interface LocationCapabilities {
  intro: string;
  details: string[];
}

export interface LocationResponse {
  intro: string;
  serviceAreas: ServiceArea[];
  capabilities: LocationCapabilities;
  outro: string;
}

export interface ExperienceInfo {
  founded: string;
  clients: string;
  reach: string;
}

export interface QualificationsResponse {
  intro: string;
  experience: ExperienceInfo;
  credentials: string[];
  specializations: string[];
  achievements: string[];
  outro: string;
}

export interface MoreInfoResponse {
  intro: string;
  options: string[];
  questions: string[];
  contextSpecific?: string;
  hasContext?: boolean;
}

export interface GeneralResponse {
  intro: string;
  suggestions: string[];
}

export type ResponseData = 
  | ServicesResponse 
  | PricingResponse 
  | MethodologyResponse 
  | ContactResponse 
  | TimelineResponse 
  | LocationResponse 
  | QualificationsResponse 
  | MoreInfoResponse 
  | GeneralResponse;

export interface DetectedQuestion {
  type: QuestionType;
  confidence: number;
}

export interface DetectedService {
  service: ServiceType;
  confidence: number;
}



// Language-specific response collections
interface LanguageResponses<T> {
  en: T;
  sw: T;
}




/**
 * Generate services overview response
 * @param language - Language code
 * @returns Response object
 */
export const generateServicesResponse = (language: Language = 'en'): ServicesResponse => {
  const responses: LanguageResponses<ServicesResponse> = {
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
 * @param service - Specific service (optional)
 * @param language - Language code
 * @returns Response object
 */
export const generatePricingResponse = (service: ServiceType = null, language: Language = 'en'): PricingResponse => {
  const responses: LanguageResponses<PricingResponse> = {
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
        ranges: {},
        outro: "Tunatoa masharti ya malipo ya kubadilika na vifurushi. Ni huduma gani maalum unayoipenda bei yake?"
      },
      specific: "Kwa {service}, bei zetu kwa kawaida ni kutoka {range}. Gharama ya mwisho inategemea mahitaji yako maalum, mstari wa wakati, na matokeo unayotaka."
    }
  };

  return responses[language] || responses.en;
};

/**
 * Generate methodology/approach response
 * @param service - Specific service (optional)
 * @param language - Language code
 * @returns Response object
 */
export const generateMethodologyResponse = (service: ServiceType = null, language: Language = 'en'): MethodologyResponse => {
  const responses: LanguageResponses<{
    general: MethodologyResponse;
    specific: Record<string, string>;
  }> = {
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
      },
      specific: {}
    }
  };

  const response = responses[language] || responses.en;
  
  if (service && response.specific && response.specific[service]) {
    return {
      intro: response.specific[service],
      outro: "",
      isSpecific: true
    };
  }
  
  return response.general;
};

/**
 * Generate "more information" response
 * @param context - Detected service context (optional)
 * @param language - Language code
 * @returns Response object
 */
export const generateMoreInfoResponse = (context: ServiceType = null, language: Language = 'en'): MoreInfoResponse => {
  const responses: LanguageResponses<{
    general: MoreInfoResponse;
    contextual: Record<string, string>;
  }> = {
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
      },
      contextual: {}
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
 * Generate contact information response
 * @param language - Language code
 * @returns Response object
 */
export const generateContactResponse = (language: Language = 'en'): ContactResponse => {
  const responses: LanguageResponses<ContactResponse> = {
    en: {
      intro: "We'd love to discuss how Future Holders Company Limited can help grow your business! Here's how to reach us:",
      contactMethods: [
        {
          method: "📧 **Email**",
          details: "info@futureholders.pro",
          note: "Best for detailed project inquiries and proposals"
        },
        {
          method: "📞 **Phone**", 
          details: "+255 745 787 370",
          note: "Available Monday-Friday, 8 AM - 6 PM EAT"
        },
        {
          method: "💬 **WhatsApp**",
          details: "+255 745 787 370",
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
          details: "info@futureholders.pro", 
          note: "Bora kwa maswali ya kina ya miradi na mapendekezo"
        },
        {
          method: "📞 **Simu**",
          details: "+255 745 787 370",
          note: "Tunapatikana Jumatatu-Ijumaa, 8 AM - 6 PM EAT"
        },
        {
          method: "💬 **WhatsApp**",
          details: "+255 745 787 370",
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
 * @param service - Specific service (optional)
 * @param language - Language code
 * @returns Response object
 */
export const generateTimelineResponse = (service: ServiceType = null, language: Language = 'en'): TimelineResponse => {
  const responses: LanguageResponses<{
    general: TimelineResponse;
    urgent: TimelineResponse;
  }> = {
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
        note: "Rush services may have additional costs but we guarantee quality delivery within your timeline.",
        outro: "Contact us to discuss your urgent requirements."
      }
    },
    sw: {
      general: {
        intro: "Mstari wa wakati wa miradi hubadilika kulingana na aina ya huduma na ugumu:",
        flexibility: "Tunafanya kazi na ratiba yako na tunaweza kukidhi maombi ya haraka na huduma za kuharakisha.",
        outro: "Ni lini unahitaji mradi wako ukamilike? Tunaweza kuunda mstari wa wakati unaofaa biashara yako."
      },
      urgent: {
        intro: "Unahitaji kitu kifanyike haraka? Tunatoa huduma za kuharakisha:",
        outro: "Wasiliana nasi kujadili mahitaji yako ya haraka."
      }
    }
  };

  return responses[language]?.general || responses.en.general;
};

/**
 * Generate location/service coverage response
 * @param language - Language code  
 * @returns Response object
 */
export const generateLocationResponse = (language: Language = 'en'): LocationResponse => {
  const responses: LanguageResponses<LocationResponse> = {
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
      serviceAreas: [],
      capabilities: {
        intro: "**Uwezo Wetu wa Huduma:**",
        details: []
      },
      outro: "Biashara yako iko wapi? Tunaweza kujadili mbinu bora ya utoaji wa huduma kwa eneo lako."
    }
  };

  return responses[language] || responses.en;
};

/**
 * Generate company qualifications/credentials response
 * @param language - Language code
 * @returns Response object  
 */
export const generateQualificationsResponse = (language: Language = 'en'): QualificationsResponse => {
  const responses: LanguageResponses<QualificationsResponse> = {
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
      experience: {
        founded: "Wakala wa umasoko uliozinduliwa unaohudumia biashara katika Tanzania",
        clients: "Tumefanya kazi na biashara ndogo na za kati, makampuni, na mashirika ya serikali",
        reach: "Tumekamilisha kwa ufanisi miradi 200+ katika viwanda mbalimbali"
      },
      credentials: [],
      specializations: [],
      achievements: [],
      outro: "Timu yetu inachanganya maarifa ya soko la ndani na mbinu za kisasa za umasoko. Ungependa kuona mifano ya kazi yetu au ushuhuda wa wateja?"
    }
  };

  return responses[language] || responses.en;
};

/**
 * Main response handler that combines question detection and service context
 * @param userMessage - User's message
 * @param language - Language code
 * @returns Complete response object
 */
/**
 * Main response handler that combines question detection and service context
 * @param userMessage - User's message
 * @param language - Language code
 * @returns Complete response object
 */
export const handleCommonQuestions = (userMessage: string, language: Language = 'en'): ResponseObject => {
  const startTime = Date.now();
  
  // Detect question type
  const questionType: QuestionTypeAnalysis = detectQuestionType(userMessage, language);
  
  // Detect service context
  const serviceContext: ServiceDetectionResult = detectServiceFromMessage(userMessage, language);
  
  let responseData: ResponseData | null = null;
  let suggestedActions: SuggestedAction[] = [];
  let fallbackUsed = false;

  // Generate appropriate response based on question type
  try {
    switch (questionType.type) {
      case 'services':
        responseData = generateServicesResponse(language);
        suggestedActions = ['show_pricing', 'learn_methodology', 'request_quote'];
        break;
        
      case 'pricing':
        responseData = generatePricingResponse(serviceContext.service, language);
        suggestedActions = ['request_quote', 'schedule_consultation', 'view_services'];
        break;
        
      case 'methodology':
        responseData = generateMethodologyResponse(serviceContext.service, language);
        suggestedActions = ['see_examples', 'request_consultation', 'get_proposal'];
        break;
        
      case 'moreInfo':
        responseData = generateMoreInfoResponse(serviceContext.service, language);
        suggestedActions = ['specific_service', 'pricing_info', 'schedule_consultation'];
        break;

      case 'contact':
        responseData = generateContactResponse(language);
        suggestedActions = ['schedule_consultation', 'send_email', 'whatsapp_chat'];
        break;
        
      case 'timeline':
        responseData = generateTimelineResponse(serviceContext.service, language);
        suggestedActions = ['request_consultation', 'discuss_urgency', 'flexible_scheduling'];
        break;
        
      case 'location':
        responseData = generateLocationResponse(language);
        suggestedActions = ['discuss_coverage', 'local_meeting', 'remote_consultation'];
        break;
        
      case 'qualifications':
        responseData = generateQualificationsResponse(language);
        suggestedActions = ['see_portfolio', 'view_testimonials', 'schedule_consultation'];
        break;
        
      case 'unknown':
      default:
        responseData = generateGeneralResponse(language);
        suggestedActions = ['show_services', 'pricing_info', 'schedule_consultation'];
        fallbackUsed = true;
        break;
    }
  } catch (error) {
    // Fallback to general response on error
    responseData = generateGeneralResponse(language);
    suggestedActions = ['show_services', 'pricing_info', 'schedule_consultation'];
    fallbackUsed = true;
  }
  
  // Create a temporary ResponseObject for formatting
  const tempResponseObject: ResponseObject = {
    text: '', // Will be populated with formatted text
    type: questionType.type || 'unknown',
    service: serviceContext.service,
    confidence: questionType.confidence,
    questionType: questionType.type,
    serviceContext: serviceContext.service,
    suggestedActions: suggestedActions.map(action => action.toString()),
    response: responseData,
    serviceConfidence: serviceContext.confidence,
    language: language,
    metadata: {
      originalMessage: userMessage,
      detectedLanguage: language,
      hasServiceContext: !!serviceContext.service,
      processingTimeMs: Date.now() - startTime
    },
    matched: questionType.confidence > 0.5,
    hasInsights: questionType.confidence > 0.7 || serviceContext.confidence > 0.7
  };
  
  // Format the response text using the complete object
  const formattedText = responseData ? formatResponseForDisplay(tempResponseObject) : "I apologize, but I couldn't generate a response. Please try rephrasing your question.";
  
  // Generate action buttons
  const actionButtons = getSuggestedActions(suggestedActions, language);
  
  const processingTime = Date.now() - startTime;
  
  // Create the complete ResponseObject
  return createResponseObject({
    text: formattedText,
    type: questionType.type || 'unknown',
    service: serviceContext.service,
    confidence: questionType.confidence,
    questionType: questionType.type,
    serviceContext: serviceContext.service,
    suggestedActions: suggestedActions.map(action => action.toString()),
    metadata: {
      originalMessage: userMessage,
      detectedLanguage: language,
      hasServiceContext: !!serviceContext.service,
      processingTimeMs: processingTime
    },
    matched: questionType.confidence > 0.5,
    hasInsights: questionType.confidence > 0.7 || serviceContext.confidence > 0.7,
    
    // New properties
    response: responseData,
    serviceConfidence: serviceContext.confidence,
    language: language,
    formattedText: formattedText,
    actionButtons: actionButtons,
    responseMetadata: {
      generatedAt: new Date(),
      processingTime: processingTime,
      detectionResults: {
        questionDetection: questionType,
        serviceDetection: serviceContext
      },
      fallbackUsed: fallbackUsed,
      responseSource: fallbackUsed ? 'fallback' : 'structured'
    }
  });
};

// Helper function to extract just the text for simple use cases
export const getResponseText = (responseObj: ResponseObject): string => {
  return responseObj.formattedText || responseObj.text;
};

// Helper function to check if response has structured data
export const hasStructuredResponse = (responseObj: ResponseObject): boolean => {
  return responseObj.response !== null && responseObj.response !== undefined;
};

// Helper function to get confidence score
export const getOverallConfidence = (responseObj: ResponseObject): number => {
  const questionConfidence = responseObj.confidence || 0;
  const serviceConfidence = responseObj.serviceConfidence || 0;
  
  // Calculate weighted average if both are available
  if (questionConfidence > 0 && serviceConfidence > 0) {
    return (questionConfidence * 0.7) + (serviceConfidence * 0.3);
  }
  
  return Math.max(questionConfidence, serviceConfidence);
};

// Export the generateGeneralResponse function that was referenced but not defined
const generateGeneralResponse = (language: Language): ResponseData => {
  return {
    intro: language === 'sw' 
      ? "Asante kwa kuuliza kuhusu Future Holders Company Limited! Ninaweza kukusaidia na:" 
      : "Thank you for asking about Future Holders Company Limited! I can help you with:",
    suggestions: [
      language === 'sw' ? "Maelezo ya huduma zetu" : "Information about our services",
      language === 'sw' ? "Bei na vifurushi" : "Pricing and packages", 
      language === 'sw' ? "Jinsi ya kuanza" : "How to get started",
      language === 'sw' ? "Mawasiliano na timu yetu" : "Contact information"
    ]
  };
};



/**
 * Utility function to format response for display
 * @param responseObj - Response object from handleCommonQuestions
 * @returns Formatted string ready for display
 */
export const formatResponseForDisplay = (responseObj: ResponseObject): string => {
  if (!responseObj.response) return "I apologize, but I couldn't generate a response. Please try rephrasing your question.";
  
  const response = responseObj.response;
  let formattedResponse = "";
  
  // Handle different response types
  if ('intro' in response) {
    formattedResponse += response.intro + "\n\n";
  }
  
  if ('services' in response && response.services) {
    response.services.forEach(service => {
      formattedResponse += `${service.name}\n${service.description}\n✨ ${service.highlight}\n\n`;
    });
  }
  
  if ('factors' in response && Array.isArray(response.factors)) {
    response.factors.forEach(factor => {
      formattedResponse += `${factor}\n`;
    });
    formattedResponse += "\n";
  }
  
  if ('ranges' in response && response.ranges) {
    formattedResponse += "**Price Ranges:**\n";
    Object.entries(response.ranges).forEach(([service, range]) => {
      formattedResponse += `• ${service}: ${range}\n`;
    });
    formattedResponse += "\n";
  }
  
  if ('principles' in response && response.principles) {
    formattedResponse += "**Our Principles:**\n";
    response.principles.forEach(principle => {
      formattedResponse += `${principle}\n`;
    });
    formattedResponse += "\n";
  }
  
  if ('methods' in response && response.methods) {
    formattedResponse += "**Our Methods:**\n";
    response.methods.forEach(method => {
      formattedResponse += `${method}\n`;
    });
    formattedResponse += "\n";
  }
  
  if ('contactMethods' in response && response.contactMethods) {
    formattedResponse += "**Contact Methods:**\n";
    response.contactMethods.forEach(contact => {
      formattedResponse += `${contact.method}\n${contact.details}\n${contact.note}\n\n`;
    });
  }
  
  if ('timelines' in response && response.timelines) {
    formattedResponse += "**Project Timelines:**\n";
    response.timelines.forEach(timeline => {
      formattedResponse += `${timeline.service}\n${timeline.timeline}\n${timeline.details}\n\n`;
    });
  }
  
  if ('serviceAreas' in response && response.serviceAreas) {
    formattedResponse += "**Service Areas:**\n";
    response.serviceAreas.forEach(area => {
      formattedResponse += `${area.region}\n${area.description}\n${area.note}\n\n`;
    });
  }
  
  if ('experience' in response && response.experience) {
    formattedResponse += "**Our Experience:**\n";
    formattedResponse += `Founded: ${response.experience.founded}\n`;
    formattedResponse += `Clients: ${response.experience.clients}\n`;
    formattedResponse += `Reach: ${response.experience.reach}\n\n`;
  }
  
  if ('credentials' in response && response.credentials) {
    formattedResponse += "**Credentials:**\n";
    response.credentials.forEach(credential => {
      formattedResponse += `${credential}\n`;
    });
    formattedResponse += "\n";
  }
  
  if ('options' in response && response.options) {
    formattedResponse += "**Available Options:**\n";
    response.options.forEach(option => {
      formattedResponse += `${option}\n`;
    });
    formattedResponse += "\n";
  }
  
  if ('suggestions' in response && response.suggestions) {
    formattedResponse += "**I can help you with:**\n";
    response.suggestions.forEach(suggestion => {
      formattedResponse += `• ${suggestion}\n`;
    });
    formattedResponse += "\n";
  }
  
  if ('outro' in response && response.outro) {
    formattedResponse += response.outro;
  }
  
  return formattedResponse.trim();
};

/**
 * Get suggested actions as actionable buttons/options
 * @param actions - Array of suggested actions
 * @param language - Language code
 * @returns Array of action objects with display text and action type
 */
export const getSuggestedActions = (actions: SuggestedAction[], language: Language = 'en'): Array<{action: SuggestedAction, text: string}> => {
  const actionTexts: LanguageResponses<Record<SuggestedAction, string>> = {
    en: {
      'show_pricing': '💰 View Pricing',
      'learn_methodology': '🎯 Our Approach',
      'request_quote': '📋 Get Quote',
      'schedule_consultation': '📅 Schedule Consultation',
      'view_services': '🔍 View Services',
      'see_examples': '📈 See Examples',
      'request_consultation': '🤝 Request Consultation',
      'get_proposal': '📄 Get Proposal',
      'specific_service': '🎯 Specific Service',
      'pricing_info': '💰 Pricing Info',
      'send_email': '📧 Send Email',
      'whatsapp_chat': '💬 WhatsApp Chat',
      'discuss_urgency': '⏰ Discuss Urgency',
      'flexible_scheduling': '📅 Flexible Scheduling',
      'discuss_coverage': '🌍 Discuss Coverage',
      'local_meeting': '🏢 Local Meeting',
      'remote_consultation': '💻 Remote Consultation',
      'see_portfolio': '📁 See Portfolio',
      'view_testimonials': '⭐ View Testimonials',
      'show_services': '🔍 Show Services'
    },
    sw: {
      'show_pricing': '💰 Ona Bei',
      'learn_methodology': '🎯 Mbinu Yetu',
      'request_quote': '📋 Omba Nukuu',
      'schedule_consultation': '📅 Panga Mazungumzo',
      'view_services': '🔍 Ona Huduma',
      'see_examples': '📈 Ona Mifano',
      'request_consultation': '🤝 Omba Mazungumzo',
      'get_proposal': '📄 Pata Pendekezo',
      'specific_service': '🎯 Huduma Maalum',
      'pricing_info': '💰 Taarifa za Bei',
      'send_email': '📧 Tuma Barua Pepe',
      'whatsapp_chat': '💬 Mazungumzo ya WhatsApp',
      'discuss_urgency': '⏰ Jadili Haraka',
      'flexible_scheduling': '📅 Ratiba za Kubadilika',
      'discuss_coverage': '🌍 Jadili Ufikaji',
      'local_meeting': '🏢 Mkutano wa Ndani',
      'remote_consultation': '💻 Mazungumzo ya Mbali',
      'see_portfolio': '📁 Ona Kazi Zetu',
      'view_testimonials': '⭐ Ona Ushuhuda',
      'show_services': '🔍 Onyesha Huduma'
    }
  };
  
  const texts = actionTexts[language] || actionTexts.en;
  
  return actions.map(action => ({
    action,
    text: texts[action] || action
  }));
};

/**
 * Export all response generators for individual use
 */
