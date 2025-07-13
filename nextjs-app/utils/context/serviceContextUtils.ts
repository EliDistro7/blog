// File: utils/serviceContextUtils.ts
// Future Holders Company Limited - Marketing Agency Services

import { pricingData } from '@/data/chat/pricingData';
import { serviceKeywords } from '@/data/chat/serviceKeywords';
import { serviceDescriptions } from '@/data/chat/serviceDescriptions';
import { serviceDetectionPatterns } from './patterns';
import { stopWords } from './stopwords';
import { preprocessMessage } from './helpers';
import { calculateKeywordScore } from './helpers';
import { detectServiceFromMessage } from './detect-service/index';

export { detectServiceFromMessage };

// Type definitions
export interface ServiceDetectionResult {
  service: string;
  confidence: number;
  matchedTerms: string[];
  details: {
    keywordMatches: number;
    patternMatches: number;
    exactMatches?: number;
    method: 'pattern+keyword' | 'keyword-only';
  };
}

import { ServiceContext as ServiceContext2 } from '@/app/components/chatBot/utils/response/generator/types';

export interface ServiceContext {
  currentService: string | null;
  serviceHistory: string[];
  lastServiceMention: string | null;
  contextualPrompts: string[];
  conversationDepth: number;
  conversationFlow: ConversationFlowEntry[];
  lastResponse: string | null;
  companyName: string;
  companyType: string;
  alternativeServiceDetected?: AlternativeServiceDetection;
  alternativeServiceHistory?: AlternativeServiceDetection[];
}



export interface ConversationFlowEntry {
  timestamp: string;
  userMessage: string;
  detectedService: string | null;
  contextService: string | null;
  options: UpdateContextOptions;
}

export interface AlternativeServiceDetection {
  service: string;
  timestamp: string;
  confidence: number;
}

export interface UpdateContextOptions {
  preservePrevious?: boolean;
  confidenceThreshold?: number;
  forceUpdate?: boolean;
}

export interface ServicePackage {
  name: string;
  price: number | string;
  billingCycle?: string;
  description?: string;
}

export interface ServicePricingData {
  currency?: string;
  packages?: ServicePackage[];
  customNote?: string;
}

import { ConversationInsights as ConversationInsight2 } from '@/app/components/chatBot/utils/response/generator/types';

export interface ConversationInsights {
  insights: string[];
  recommendations: string[];
}

export interface KeywordAnalysis {
  relevanceScore: number;
  matchedKeywords: string[];
  totalMatches: number;
}

export type Language = 'en' | 'sw';



/**
 * Validate service detection result
 */
export const isDetectionReliable = (detectionResult: ServiceDetectionResult | null): boolean => {
  if (!detectionResult || !detectionResult.service) {
    return false;
  }
  
  const { confidence, details } = detectionResult;
  
  // Consider reliable if:
  // - High confidence score (> 5)
  // - Has pattern matches
  // - Has multiple keyword matches or exact matches
  return confidence > 5 || 
         details.patternMatches > 0 || 
         (details.exactMatches && details.exactMatches > 0) ||
         details.keywordMatches > 2;
};

/**
 * Update service context based on detected service and conversation history
 */
export const updateServiceContext = (
  currentContext: ServiceContext, 
  detectedService: string | null, 
  userMessage: string, 
  options: UpdateContextOptions = {}
): ServiceContext => {
  const newContext: ServiceContext = { ...currentContext };
  const timestamp = new Date().toISOString();
  
  // Extract options with defaults
  const {
    preservePrevious = false,
    confidenceThreshold = 0.5,
    forceUpdate = false
  } = options;

  if (detectedService) {
    // Check if we should preserve previous context for low confidence detections
    if (preservePrevious && newContext.currentService && newContext.currentService !== detectedService) {
      // Only update if confidence is above threshold or force update is true
      if (forceUpdate || !confidenceThreshold) {
        // New service detected - update normally
        newContext.currentService = detectedService;
        newContext.lastServiceMention = timestamp;
        
        // Add to history if not already present
        if (!newContext.serviceHistory.includes(detectedService)) {
          newContext.serviceHistory.push(detectedService);
        }
        
        // Reset conversation depth for new service
        newContext.conversationDepth = 1;
      } else {
        // Preserve previous service but increment depth
        newContext.conversationDepth = Math.min(newContext.conversationDepth + 1, 10);
        
        // Still add the detected service to history for reference
        if (!newContext.serviceHistory.includes(detectedService)) {
          newContext.serviceHistory.push(detectedService);
        }
        
        // Add a note about the alternative service detected
        newContext.alternativeServiceDetected = {
          service: detectedService,
          timestamp,
          confidence: confidenceThreshold
        };
      }
    } else {
      // New service detected or same service - update normally
      newContext.currentService = detectedService;
      newContext.lastServiceMention = timestamp;
      
      // Add to history if not already present
      if (!newContext.serviceHistory.includes(detectedService)) {
        newContext.serviceHistory.push(detectedService);
      }
      
      // Reset or increment conversation depth
      if (currentContext.currentService !== detectedService) {
        newContext.conversationDepth = 1;
      } else {
        newContext.conversationDepth = Math.min(newContext.conversationDepth + 1, 10);
      }
    }
  } else if (newContext.currentService) {
    // Continue with current service context
    newContext.conversationDepth = Math.min(newContext.conversationDepth + 1, 10);
  }

  // Add interaction to conversation flow
  newContext.conversationFlow = newContext.conversationFlow || [];
  newContext.conversationFlow.push({
    timestamp,
    userMessage: userMessage.substring(0, 100), // Truncate for storage
    detectedService,
    contextService: newContext.currentService,
    options: {
      preservePrevious,
      confidenceThreshold,
      forceUpdate
    }
  });

  // Keep only last 20 interactions
  if (newContext.conversationFlow.length > 20) {
    newContext.conversationFlow = newContext.conversationFlow.slice(-20);
  }

  // Clean up old alternative service detections (keep only last 3)
  if (newContext.alternativeServiceDetected) {
    newContext.alternativeServiceHistory = newContext.alternativeServiceHistory || [];
    newContext.alternativeServiceHistory.push(newContext.alternativeServiceDetected);
    
    if (newContext.alternativeServiceHistory.length > 3) {
      newContext.alternativeServiceHistory = newContext.alternativeServiceHistory.slice(-3);
    }
    
    // Clear the current alternative detection
    delete newContext.alternativeServiceDetected;
  }

  return newContext;
};

/**
 * Generate contextual prompts based on service and conversation depth
 */
export const generateContextualPrompts = (
  serviceName: string | null, 
  conversationDepth: number = 0, 
  language: Language = 'en', 
  serviceContext: ServiceContext = {} as ServiceContext
): string[] => {
  if (!serviceName) {
    // Return general prompts about Future Holders services
    return language === 'sw' ? [
      'Je, mnatoa huduma gani za uuzaji?',
      'Je, mnaweza kutengeneza website?',
      'Ni bei gani za huduma zenu?',
      'Je, mnasaidia na social media?',
      'Je, mnaweza kunisaidia kutafuta tender?'
    ] : [
      'What sales services do you offer?',
      'Can you build websites and applications?',
      'What are your pricing options?',
      'Do you help with social media management?',
      'Can you help me find tenders?'
    ];
  }

  const contextualPrompts: string[] = [];
  function getPricingDataForService(language: string, serviceName: string) {
  const languageData = pricingData[language as keyof typeof pricingData];
  if (!languageData || !serviceName) return null;
  
  return (languageData as Record<string, any>)[serviceName] || null;
}

// Then use:
const serviceData = getPricingDataForService(language, serviceName);

  // Generate prompts based on conversation depth
  switch (conversationDepth) {
    case 0:
    case 1:
      // Initial inquiry prompts
      contextualPrompts.push(
        ...(language === 'sw' ? [
          `Je, ni bei gani za ${serviceName}?`,
          `Je, mnaweza kunieleza zaidi kuhusu ${serviceName}?`,
          `${serviceName} inajumuisha nini?`,
          `Je, mna uzoefu gani katika ${serviceName}?`
        ] : [
          `What are the pricing options for ${serviceName}?`,
          `Can you tell me more about ${serviceName}?`,
          `What does ${serviceName} include?`,
          `What experience do you have with ${serviceName}?`
        ])
      );
      break;

    case 2:
    case 3:
      // Follow-up questions
      if (serviceData && serviceData.packages) {
        const packageNames = serviceData.packages.map((pkg: ServicePackage) => pkg.name);
        contextualPrompts.push(
          ...(language === 'sw' ? [
            `Je, tofauti ni nini kati ya ${packageNames[0]} na ${packageNames[1] || 'vifurushi vingine'}?`,
            `Ni kifurushi gani kinachofaa kwa biashara ndogo?`,
            `Je, mnatoa punguzo kwa mipango ya muda mrefu?`,
            'Je, mnaweza kubadilisha mipango?'
          ] : [
            `What's the difference between ${packageNames[0]} and ${packageNames[1] || 'other packages'}?`,
            `Which package is best for small businesses?`,
            `Do you offer discounts for long-term contracts?`,
            'Can you customize the packages?'
          ])
        );
      }
      break;

    default:
      // Deep conversation - implementation questions
      contextualPrompts.push(
        ...(language === 'sw' ? [
          'Je, mchakato wa kuanza ni upi?',
          'Je, mnaweza kutoa mifano ya kazi zilizofanywa?',
          'Ni nini kinahitajika kutoka kwangu?',
          'Je, mnaweza kuongea na wateja wengine wenu?',
          'Je, mnatoa dhamana ya huduma?'
        ] : [
          `What's the process to get started?`,
          'Can you provide examples of past work?',
          'What do you need from me to begin?',
          'Can I speak with some of your other clients?',
          'Do you offer any guarantees?'
        ])
      );
  }

  // Add service-specific contextual prompts
  const serviceSpecificPrompts = getServiceSpecificPrompts(serviceName, language, conversationDepth);
  contextualPrompts.push(...serviceSpecificPrompts);

  // Remove duplicates and return limited number
  const uniquePrompts = [...new Set(contextualPrompts)];
  return uniquePrompts.slice(0, 4);
};

/**
 * Get service-specific contextual prompts for Future Holders services
 */
const getServiceSpecificPrompts = (serviceName: string, language: Language, depth: number): string[] => {
  const prompts: string[] = [];

  switch (serviceName) {
    case 'Door to Door Sales':
      prompts.push(
        ...(language === 'sw' ? [
          'Je, mnaweza kuuza bidhaa zangu kwa mlango hadi mlango?',
          'Je, mna timu ya wauza wa kutosha?',
          'Je, mnafundisha wafanyakazi wenu jinsi ya kuuza?',
          'Je, mnatoa ripoti za uuzaji?',
          'Je, mnaweza kufanya kazi katika maeneo gani?'
        ] : [
          'Can you sell my products door to door?',
          'Do you have enough sales team members?',
          'Do you train your staff on sales techniques?',
          'Do you provide sales reports?',
          'Which areas can you cover?'
        ])
      );
      break;

    case 'Website Development':
    case 'Application Building':
      prompts.push(
        ...(language === 'sw' ? [
          'Je, mnatengeneza website za biashara?',
          'Je, mnaweza kutengeneza mobile app?',
          'Je, mnatoa hosting na domain?',
          'Je, mnasaidia na SEO?',
          'Je, website itakuwa responsive?',
          'Je, mnaweza kuintegrate payment systems?'
        ] : [
          'Do you build business websites?',
          'Can you develop mobile applications?',
          'Do you provide hosting and domain services?',
          'Do you help with SEO?',
          'Will the website be mobile responsive?',
          'Can you integrate payment systems?'
        ])
      );
      break;

    case 'Social Media Management':
      prompts.push(
        ...(language === 'sw' ? [
          'Je, mnaweza kusimamia Facebook na Instagram?',
          'Je, mnaandika content ya social media?',
          'Je, mnafanya matangazo ya social media?',
          'Je, mnatoa ripoti za performance?',
          'Je, mnaweza kujibu maswali ya wateja?',
          'Je, mnasaidia na brand awareness?'
        ] : [
          'Can you manage Facebook and Instagram?',
          'Do you create social media content?',
          'Do you run social media advertisements?',
          'Do you provide performance reports?',
          'Can you respond to customer inquiries?',
          'Do you help with brand awareness?'
        ])
      );
      break;

    case 'Tender Search & Application':
      prompts.push(
        ...(language === 'sw' ? [
          'Je, mnaweza kutafuta tender za serikali?',
          'Je, mnasaidia kuandika proposal?',
          'Je, mnajua mahitaji ya tender?',
          'Je, mnatoa ushauri wa bei?',
          'Je, mnaweza kusaidia na documents?',
          'Je, mna uzoefu wa tender za aina gani?'
        ] : [
          'Can you search for government tenders?',
          'Do you help write proposals?',
          'Do you understand tender requirements?',
          'Do you provide pricing advice?',
          'Can you help with documentation?',
          'What types of tenders do you have experience with?'
        ])
      );
      break;

    case 'Equipment Sales':
      prompts.push(
        ...(language === 'sw' ? [
          'Je, mnauza vifaa gani?',
          'Je, mnatoa warranty?',
          'Je, mnasaidia na installation?',
          'Je, mna spare parts?',
          'Je, mnaweza kutoa training?',
          'Je, mnaweza kuimport vifaa maalum?'
        ] : [
          'What equipment do you sell?',
          'Do you provide warranty?',
          'Do you help with installation?',
          'Do you have spare parts?',
          'Can you provide training?',
          'Can you import specialized equipment?'
        ])
      );
      break;

    case 'Product Branding':
    case 'Service Branding':
      prompts.push(
        ...(language === 'sw' ? [
          'Je, mnaweza kutengeneza logo?',
          'Je, mnadesign packaging?',
          'Je, mnasaidia na brand strategy?',
          'Je, mnaandika marketing materials?',
          'Je, mnaweza kufanya brand research?',
          'Je, mnasaidia na brand positioning?'
        ] : [
          'Can you create logos?',
          'Do you design packaging?',
          'Do you help with brand strategy?',
          'Do you create marketing materials?',
          'Can you do brand research?',
          'Do you help with brand positioning?'
        ])
      );
      break;

    default:
      // General Future Holders prompts
      prompts.push(
        ...(language === 'sw' ? [
          'Je, mnaweza kuongea zaidi kuhusu hii?',
          'Je, mna experience gani katika hii?',
          'Je, mnaweza kutoa maelezo zaidi?',
          'Je, Future Holders ina uzoefu gani?'
        ] : [
          'Can we discuss this service more?',
          'What experience do you have with this?',
          'Can you provide more details?',
          'What experience does Future Holders have?'
        ])
      );
  }

  return prompts;
};

/**
 * Check if user is asking about pricing
 */
export const isPricingInquiry = (userMessage: string, language: Language = 'en'): boolean => {
  const pricingKeywords = language === 'sw' ? 
    ['bei', 'gharama', 'malipo', 'pesa', 'kiasi', 'ada', 'kodi', 'nauli'] : 
    ['price', 'cost', 'pricing', 'fee', 'rate', 'charge', 'expensive', 'cheap', 'affordable', 'budget'];
    
  return pricingKeywords.some(keyword => 
    userMessage.toLowerCase().includes(keyword.toLowerCase())
  );
};

/**
 * Generate pricing response for Future Holders services
 */
export const generatePricingResponse = (
  serviceName: string, 
  language:string , 
  customPricingData: any = null
): string => {
  const pricing = customPricingData || pricingData;
  
  if (!pricing[language] || !pricing[language][serviceName]) {
    return language === 'sw' ? 
      'Samahani, taarifa za bei hazipo kwa sasa. Tafadhali wasiliana nasi kwa maelezo zaidi kuhusu huduma za Future Holders.' :
      'Sorry, pricing information is not available right now. Please contact us for detailed information about Future Holders services.';
  }

  const serviceData: ServicePricingData = pricing[language][serviceName];
  const currency = serviceData.currency || (language === 'sw' ? 'TSH' : 'USD');
  const packages = serviceData.packages || [];

  let pricingResponse = language === 'sw' ? 
    `**💰 Bei za ${serviceName} - Future Holders**\n\n` :
    `**💰 ${serviceName} Pricing - Future Holders**\n\n`;

  packages.forEach((pkg: ServicePackage, index: number) => {
    const price = typeof pkg.price === 'number' ? pkg.price.toLocaleString() : pkg.price;
    pricingResponse += language === 'sw' ? 
      `**${pkg.name}** - ${currency} ${price}${pkg.billingCycle ? ` ${pkg.billingCycle}` : ''}\n${pkg.description || ''}\n\n` :
      `**${pkg.name}** - ${currency} ${price}${pkg.billingCycle ? ` ${pkg.billingCycle}` : ''}\n${pkg.description || ''}\n\n`;
  });

  if (serviceData.customNote) {
    pricingResponse += language === 'sw' ? 
      `📋 **Taarifa za Ziada:** ${serviceData.customNote}\n\n` :
      `📋 **Additional Info:** ${serviceData.customNote}\n\n`;
  }

  // Add Future Holders specific call to action
  pricingResponse += language === 'sw' ? 
    `Je, ungependa kujua zaidi kuhusu kifurushi fulani au huduma zingine za Future Holders?` :
    `Would you like to know more about any specific package or other Future Holders services?`;

  return pricingResponse;
};

/**
 * Get conversation insights from service context
 */
/**
 * Get conversation insights from service context
 */


export const getConversationInsights = (serviceContext: ServiceContext | null): ConversationInsight2 => {
  if (!serviceContext) {
    return { 
      insights: [], 
      conversationDepth: 0, 
      servicesDiscussed: [],
      userPreferences: {}
    };
  }

  const insights: string[] = [];
  const conversationDepth = serviceContext.conversationDepth || 0;
  const servicesDiscussed = serviceContext.serviceHistory || [];
  
  // Initialize user preferences object
  const userPreferences: {
    preferredContactMethod?: string;
    budget?: string;
    timeline?: string;
    location?: string;
  } = {};

  // Analyze conversation depth
  if (conversationDepth > 5) {
    insights.push('Deep engagement detected');
  }

  // Analyze service interest
  if (servicesDiscussed.length > 2) {
    insights.push('Multiple services explored');
  }

  // Analyze conversation flow for pricing interest
  if (serviceContext.conversationFlow && serviceContext.conversationFlow.length > 0) {
    const recentInteractions = serviceContext.conversationFlow.slice(-5);
    const pricingMentions = recentInteractions.filter(interaction => 
      isPricingInquiry(interaction.userMessage, 'en') || isPricingInquiry(interaction.userMessage, 'sw')
    ).length;

    if (pricingMentions > 2) {
      insights.push('Strong pricing interest');
      userPreferences.budget = 'price_conscious';
    }
  }

  /*
  if (serviceContext.isLocationQuery || serviceContext.matchedLocationPattern) {
    insights.push('Location-based inquiry');
    userPreferences.location = 'location_sensitive';
  }
*/
  // Analyze current service focus
  if (serviceContext.currentService) {
    insights.push(`Focused on ${serviceContext.currentService}`);
  }

  // Detect contact preference patterns
  if (serviceContext.conversationFlow) {
    const contactMentions = serviceContext.conversationFlow.filter(interaction => 
      interaction.userMessage.toLowerCase().includes('contact') ||
      interaction.userMessage.toLowerCase().includes('call') ||
      interaction.userMessage.toLowerCase().includes('email') ||
      interaction.userMessage.toLowerCase().includes('wasiliana') ||
      interaction.userMessage.toLowerCase().includes('piga')
    );

    if (contactMentions.length > 0) {
      insights.push('Contact preference indicated');
      userPreferences.preferredContactMethod = 'direct_contact';
    }
  }

  // Analyze urgency/timeline indicators
  if (serviceContext.conversationFlow) {
    const urgencyIndicators = serviceContext.conversationFlow.filter(interaction => 
      interaction.userMessage.toLowerCase().includes('urgent') ||
      interaction.userMessage.toLowerCase().includes('asap') ||
      interaction.userMessage.toLowerCase().includes('immediately') ||
      interaction.userMessage.toLowerCase().includes('haraka') ||
      interaction.userMessage.toLowerCase().includes('sasa')
    );

    if (urgencyIndicators.length > 0) {
      insights.push('Urgency indicated');
      userPreferences.timeline = 'urgent';
    }
  }

  return {
    insights,
    conversationDepth,
    servicesDiscussed,
    userPreferences
  };
};

/**
 * Reset service context for Future Holders
 */
export const createFreshServiceContext = (): ServiceContext => ({
  currentService: null,
  serviceHistory: [],
  lastServiceMention: null,
  contextualPrompts: [],
  conversationDepth: 0,
  conversationFlow: [],
  lastResponse: null,
  companyName: 'Future Holders Company Limited',
  companyType: 'Marketing Agency'
});

/**
 * Validate service context object
 */
export const validateServiceContext = (context: any): context is ServiceContext => {
  if (!context || typeof context !== 'object') return false;
  
  const requiredFields = ['currentService', 'serviceHistory', 'conversationDepth'];
  return requiredFields.every(field => context.hasOwnProperty(field));
};

/**
 * Get Future Holders company introduction
 */
export const getCompanyIntroduction = (language: Language = 'en'): string => {
  return language === 'sw' ? 
    `**🏢 Future Holders Company Limited**\n\nTunakaribishwa! Sisi ni kampuni ya uuzaji na uongozi ambayo tunasaidia biashara kukua. Huduma zetu ni pamoja na:\n\n• Uuzaji wa mlango hadi mlango\n• Utengenezaji wa tovuti na programu\n• Usimamizi wa mitandao ya kijamii\n• Utafutaji na maombi ya tender\n• Uuzaji wa vifaa\n• Uongozi wa chapa za bidhaa na huduma\n\nJe, ni huduma gani ungependa kujua zaidi?` :
    `**🏢 Future Holders Company Limited**\n\nWelcome! We are a marketing agency that helps businesses grow. Our services include:\n\n• Door to door sales\n• Website and application development\n• Social media management\n• Tender search and application\n• Equipment sales\n• Product and service branding\n\nWhich service would you like to know more about?`;
};

// Export all utility functions
export default {
  serviceDetectionPatterns,
  detectServiceFromMessage,
  updateServiceContext,
  generateContextualPrompts,
  isPricingInquiry,
  generatePricingResponse,
  getConversationInsights,
  createFreshServiceContext,
  validateServiceContext,
  getCompanyIntroduction
};