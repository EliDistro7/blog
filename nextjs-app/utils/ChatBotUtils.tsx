// app/utils/chatbotUtils.ts

import { ContactInfo } from "@/app/components/chatBot/utils/response/generator/types";

import {  ChatbotData, UIText } from '@/data/chat/index';
import {
  ServiceDescription,
  ServicePricing,
  PricingData
  
} from '@/data/chat/types';

// Type definitions
interface ServiceKeywords {
  [language: string]: {
    [serviceTitle: string]: string[];
  };
}



interface ServiceDescriptions {
  [language: string]: {
    [serviceTitle: string]: ServiceDescription;
  };
}

interface FAQ {
  question: string;
  answer: string;
}

interface FAQs {
  [language: string]: FAQ[];
}



interface UITexts {
  [language: string]: {
    moreInfo?: string;
    pricingInfo?: string;
  };
}

interface BookingInfo {
  [language: string]: {
    title: string;
    instructions: string;
    contactDetails: string;
  };
}

interface PricingPackage {
  name: string;
  price: number;
  billingCycle: string;
  description: string;
  features?: string[];
  popular?: boolean;
}








interface ProcessMessageResponse {
  text: string;
  suggestions: string[];
}

interface LanguageKeywords {
  [language: string]: string[];
}

/**
 * Find matching service based on user message
 * @param message - User message
 * @param serviceKeywords - Keywords mapping for different services
 * @param language - Current language
 * @returns Matching service title or null if no match
 */
export const findMatchingService = (
  message: string,
  serviceKeywords: ServiceKeywords,
  language: string
): string | null => {
  if (!message || !serviceKeywords || !serviceKeywords[language]) {
    console.log('Missing parameters in findMatchingService:', { message, serviceKeywords, language });
    return null;
  }

  const lowerMsg = message.toLowerCase();
  
  // Sort service titles by keyword length (descending) to prioritize more specific matches
  const sortedServiceTitles = Object.entries(serviceKeywords[language])
    .sort((a, b) => {
      // Find the longest keyword in each service
      const longestA = a[1].reduce((max, kw) => Math.max(max, kw.length), 0);
      const longestB = b[1].reduce((max, kw) => Math.max(max, kw.length), 0);
      return longestB - longestA;
    })
    .map(entry => entry[0]);
  
  // First pass: look for exact matches with the longest keywords first
  for (const serviceTitle of sortedServiceTitles) {
    const keywords = serviceKeywords[language][serviceTitle];
    // Sort keywords by length (descending) to prioritize longer, more specific keywords
    const sortedKeywords = [...keywords].sort((a, b) => b.length - a.length);
    
    for (const keyword of sortedKeywords) {
      // Check for exact matches (as whole words)
      const regex = new RegExp(`\\b${keyword}\\b`, 'i');
      if (regex.test(lowerMsg)) {
        console.log('Found exact match:', { serviceTitle, keyword });
        return serviceTitle;
      }
    }
  }
  
  // Second pass: look for partial matches if no exact match found
  for (const serviceTitle of sortedServiceTitles) {
    const keywords = serviceKeywords[language][serviceTitle];
    if (keywords.some(keyword => lowerMsg.includes(keyword.toLowerCase()))) {
      console.log('Found partial match:', { serviceTitle });
      return serviceTitle;
    }
  }
  
  return null;
};

/**
 * Get service response based on service title
 * @param serviceTitle - Title of the service
 * @param chatData - Chatbot text data
 * @param language - Current language
 * @returns Response message
 */
export const getServiceResponse = (
  serviceTitle: string | null,
  chatData: ChatbotData,
  language: string
): string => {
  console.log('getServiceResponse called with:', { serviceTitle, language });
let res = chatData?.defaultResponse;
if (!serviceTitle || !chatData || !language) {
  console.error('Missing required parameters:', { serviceTitle, chatData, language });
  return res?.[language] || 'Sorry, I could not process your request.';
}

  if (chatData.serviceDescriptions && 
      chatData.serviceDescriptions[language] && 
      chatData.serviceDescriptions[language][serviceTitle]) {
    
    const service = chatData.serviceDescriptions[language][serviceTitle];
    
    // Build response with rich markdown formatting
    const sections: string[] = [];
    
    // Title section
    sections.push(`# ${service.title || serviceTitle}`);
    
    // Short description
    if (service.shortDescription) {
      sections.push(service.shortDescription);
    }
    
    // Key benefits section
    if (service.keyBenefits && service.keyBenefits.length > 0) {
      sections.push('## Key Benefits:');
      sections.push(service.keyBenefits.map(benefit => `- ${benefit}`).join('\n'));
    }
    
    // Service details section
    const details: string[] = [];
    if (service.deliveryFormats && service.deliveryFormats.length > 0) {
      details.push(`**Available as:** ${service.deliveryFormats.join(', ')}`);
    }
    if (service.duration) {
      details.push(`**Duration:** ${service.duration}`);
    }
    if (service.targetAudience) {
      details.push(`**Target Audience:** ${service.targetAudience}`);
    }
    
    if (details.length > 0) {
      sections.push('## Service Details:');
      sections.push(details.join('\n\n'));
    }
    
    // Call to action section
    const moreInfoPrompt = chatData.ui?.moreInfo?.[language] || 'Would you like more detailed information?';
    const pricingPrompt = chatData.ui?.pricingInfo?.[language] || 'Would you like pricing information?';
    
    sections.push('---'); // Horizontal rule for separation
    sections.push(`${moreInfoPrompt}\n\n${pricingPrompt}`);
    
    // Join all sections with double line breaks for proper markdown paragraphs
    return sections.join('\n\n');
  }
  
  // Fallback
  return chatData.defaultResponse?.[language] || 'I can help you with that. Please let me know what specific information you need.';
};

/**
 * Look for FAQ matches in user message
 * @param message - User message
 * @param faqs - FAQ data
 * @param language - Current language
 * @returns FAQ answer or null if no match
 */
export const findFaqMatch = (
  message: string,
  faqs: FAQs,
  language: string
): string | null => {
  if (!faqs || !faqs[language] || !Array.isArray(faqs[language])) {
    console.log('No FAQ data available for language:', language);
    return null;
  }
  
  const lowerMsg = message.toLowerCase();
  
  // Look for questions that contain keywords from the user's message
  const relevantFaqs = faqs[language].filter(faq => {
    if (!faq.question || !faq.answer) return false;
    
    const questionWords = faq.question.toLowerCase().split(/\s+/);
    // Return true if at least 2 significant words from the question appear in the message
    const significantMatches = questionWords
      .filter(word => word.length > 3) // Only consider words longer than 3 chars
      .filter(word => lowerMsg.includes(word.toLowerCase()))
      .length;
    
    return significantMatches >= 2;
  });
  
  if (relevantFaqs.length > 0) {
    // Return the most relevant FAQ (first match)
    return `**${relevantFaqs[0].question}**\n\n${relevantFaqs[0].answer}`;
  }
  
  return null;
};

/**
 * Check if user is asking for contact information
 * @param message - User message
 * @param language - Current language
 * @returns True if asking for contact info
 */
export const isAskingForContact = (message: string, language: string): boolean => {
  if (!message) return false;
  
  const lowerMsg = message.toLowerCase();
  
  const contactKeywords: LanguageKeywords = {
    en: ['contact', 'email', 'phone', 'call', 'reach', 'address', 'location', 'hours', "nawezaje kukupata",
            'how to contact', 'get in touch', 'where are you', 'what is your email', 'what is your phone number'],
    
    sw: ['wasiliana', 'barua pepe', 'simu', 'piga', 'fikia', 'anwani', 'mahali', 'saa', 
            'namba ya simu', 'jinsi ya kuwasiliana', 'nini barua pepe yako', 'nini namba yako ya simu',
            'unapatikana wapi', 'unaishi wapi', 'unapatikana lini'
    ]
  };
  
  const keywords = contactKeywords[language] || contactKeywords.en;
  return keywords.some(keyword => lowerMsg.includes(keyword));
};

/**
 * Format contact information response
 * @param contactInfo - Contact info data
 * @param language - Current language
 * @returns Formatted contact info
 */
export const getContactResponse = (
  contactInfo: ContactInfo,
  language: string
): string => {
  if (!contactInfo) {
    return 'Contact information is currently unavailable.';
  }

  const info = contactInfo;
  
  return `**Contact Information:**\n\n` +
    `📧 Email: ${info.email || 'N/A'}\n` +
    `📞 Phone: ${info.phone || 'N/A'}\n` +
    `📍 Address: ${info.address || 'N/A'}\n` +
    `📍 Address: ${info.whatsapp || 'N/A'}\n` +
    `🕓 Business Hours: ${info.website || 'N/A'} 
    `;
};

/**
 * Detect language from user message
 * @param message - User message
 * @param langKeywords - Language detection keywords
 * @param currentLanguage - Current language (fallback)
 * @returns Detected language code (default: 'en')
 */

export type Language = 'en' | 'sw';

export const detectLanguage = (
  message: string,
  langKeywords: LanguageKeywords | null = null,
  currentLanguage: Language = 'en'
): Language => {
  if (!message || message.trim() === '') return currentLanguage;
  
  // Default language detection keywords if not provided
  const keywords = langKeywords || {
    sw: ['habari', 'jambo', 'nafanya', 'nini', 'asante', 'shikamoo', 'tafadhali', 
         'kuhusu', 'huduma', 'bei', 'gani', 'tovuti', 'msaada', 'wasiliana'],
  };
  
  const lowerMsg = message.toLowerCase();
  
  // Check for Swahili keywords
  if (keywords.sw && keywords.sw.some(keyword => lowerMsg.includes(keyword))) {
    return 'sw';
  }
  
  // Default to current language (which will be 'en' or 'sw')
  return currentLanguage;
};

/**
 * Generate suggestions based on user interaction context
 * @param serviceTitle - Current service being discussed
 * @param chatData - Chatbot data
 * @param language - Current language
 * @returns List of suggestion prompts
 */
export const generateSuggestions = (
  serviceTitle: string | null,
  chatData: ChatbotData,
  language: string
): string[] => {
  // If discussing a specific service, offer related questions
  if (serviceTitle && chatData.ui) {
    const pricingInfo = chatData.ui.pricingInfo?.[language] || 'What are the prices for';
    
    return [
      `${pricingInfo} ${serviceTitle}?`,
      `What does ${serviceTitle} include?`,
      `Do you have examples of ${serviceTitle}?`,
      `How long does ${serviceTitle} take?`
    ];
  }
  
  // Otherwise return default prompts
  return chatData.prompts?.[language] || [];
};

/**
 * Check if user is asking about booking/appointment
 * @param message - User message
 * @param language - Current language
 * @returns True if asking about booking
 */
export const isBookingQuery = (message: string, language: string): boolean => {
  if (!message) return false;
  
  const lowerMsg = message.toLowerCase();
  
  const bookingKeywords: LanguageKeywords = {
    en: [
      'book', 'booking',"time", 'appointment', 'schedule', 'reserve',
      'how to book', 'book dr', 'doctor appointment', 'consultation',
      'visit', 'see doctor', 'meet doctor', 'appointment with',
      'dr. mwangamba', 'dr mwangamba', 'mwangamba'
    ],
    sw: [
      'kureserv', 'miadi',"muda", 'kuweka miadi', 'kuonana na daktari',
      'jinsi ya kuweka miadi', 'daktari', 'kumpata daktari',
      'kumuona daktari', 'mahojiano', 'mwangamba'
    ]
  };
  
  const keywords = bookingKeywords[language] || bookingKeywords.en;
  return keywords.some(keyword => lowerMsg.includes(keyword.toLowerCase()));
};

/**
 * Get booking response
 * @param chatData - Chatbot data
 * @param language - Current language
 * @returns Booking response
 */

/**
 * Get booking response
 * @param chatData - Chatbot data
 * @param language - Current language
 * @returns Booking response
 */
export const getBookingResponse = (chatData: ChatbotData, language: string): string => {
  // Get contact info from the existing chatData structure
  const contactInfo = chatData.getResponseByLang<ContactInfo>('contactInfo', language);
  const uiText = chatData.getResponseByLang<UIText>('ui', language);
  
  if (contactInfo) {
    // Build booking response using existing contact data
    // Fix: Access uiText properties directly as strings, not nested objects
    const bookingTitle = uiText?.bookingTitle || 
                        (language === 'sw' ? 'Jinsi ya Kuagiza Ushauri' : 'How to Book a Consultation');
    
    const bookingInstructions = uiText?.bookingInstructions || 
                               (language === 'sw' ? 'Kupanga ushauri, tafadhali:' : 'To schedule a consultation, please:');
    
    let response = `**${bookingTitle}**\n\n${bookingInstructions}\n\n`;
    
    // Add contact details from contactInfo
    if (contactInfo.phone) {
      const phoneLabel = uiText?.phoneLabel || (language === 'sw' ? 'Piga simu' : 'Call us');
      response += `📞 **${phoneLabel}:** ${contactInfo.phone}\n`;
    }
    
    if (contactInfo.email) {
      const emailLabel = uiText?.emailLabel || (language === 'sw' ? 'Barua pepe' : 'Email');
      response += `📧 **${emailLabel}:** ${contactInfo.email}\n`;
    }
    
    if (contactInfo.address) {
      const addressLabel = uiText?.addressLabel || (language === 'sw' ? 'Anwani' : 'Address');
      response += `📍 **${addressLabel}:** ${contactInfo.address}\n`;
    }
    
    // Fix: Check if workingHours exists on contactInfo (it's not in the interface)
    if ('workingHours' in contactInfo && contactInfo.workingHours) {
      const hoursLabel = uiText?.hoursLabel || (language === 'sw' ? 'Saa za Ofisi' : 'Office Hours');
      response += `🕒 **${hoursLabel}:** ${contactInfo.workingHours}\n`;
    }
    
    // Add closing message
    const closingMessage = uiText?.bookingClosingMessage || (language === 'sw' ? 
      '\nTimu yetu itakusaidia kupata wakati bora wa kujadili mahitaji ya biashara yako na jinsi tunavyoweza kukusaidia kukua.' :
      '\nOur team will help you find the best time to discuss your business needs and how we can help you grow.');
    
    response += closingMessage;
    
    return response;
  }
  
  // Fallback to default booking responses if no contact info exists
  const defaultBookingResponses: { [key: string]: string } = {
    en: `**How to Book a Consultation**\n\n` +
         `To schedule a consultation, please:\n\n` +
         `📞 **Call us:** +255 123 456 789\n` +
         `📧 **Email:** info@futureholders.co.tz\n` +
         `🕒 **Office Hours:** Monday - Friday: 8:00 AM - 6:00 PM\n\n` +
         `Our team will help you find the best time to discuss your business needs and how we can help you grow.`,
    
    sw: `**Jinsi ya Kuagiza Ushauri**\n\n` +
         `Kupanga ushauri, tafadhali:\n\n` +
         `📞 **Piga simu:** +255 123 456 789\n` +
         `📧 **Barua pepe:** info@futureholders.co.tz\n` +
         `🕒 **Saa za Ofisi:** Jumatatu - Ijumaa: 8:00 AM - 6:00 PM\n\n` +
         `Timu yetu itakusaidia kupata wakati bora wa kujadili mahitaji ya biashara yako na jinsi tunavyoweza kukusaidia kukua.`
  };
  
  return defaultBookingResponses[language] || defaultBookingResponses.en;
};

/**
 * Check if user is asking about pricing
 * @param message - User message
 * @param language - Current language
 * @returns True if asking about pricing
 */
export const isPricingQuery = (message: string, language: string): boolean => {
  if (!message) return false;
  
  const lowerMsg = message.toLowerCase();
  
  const pricingKeywords: LanguageKeywords = {
    en: [
      'price','prices', 'pricing', 'cost', 'fee', 'charge', 'rate', 'budget',
      'how much', 'what does it cost', 'pricing for', 'cost of',
      'rates for', 'fees for', 'charges for', 'price list',
      'what are the prices', 'how much does', 'what is the cost'
    ],
    sw: [
      'bei', 'gharama', 'kiasi', 'malipo', 'ada', 'kiwango','sh ngapi','ngapi',
      'ni kiasi gani', 'gharama ya', 'bei ya', 'malipo ya',
      'ni bei gani', 'inagharimu', 'unatozwa'
    ]
  };
  
  const keywords = pricingKeywords[language] || pricingKeywords.en;
  return keywords.some(keyword => lowerMsg.includes(keyword.toLowerCase()));
};






/**
 * Get pricing response for a specific service or general pricing
 * @param message - User message to detect specific service
 * @param chatData - Chatbot data
 * @param language - Current language
 * @returns Pricing response
 */
export const getPricingResponse = (
  message: string,
  chatData: ChatbotData,
  language: string
): string => {
  // Try to find which service they're asking about
  const serviceMatch = findMatchingService(message, chatData.serviceKeywords || {}, language);
  
  if (serviceMatch && chatData.pricing) {
    // Get the pricing data for the specific language
    const languagePricing = chatData.pricing[language as 'en' | 'sw'] || chatData.pricing.en;
    
    // Check if the service exists in the pricing data
    if (languagePricing && serviceMatch in languagePricing) {
      const servicePricing = languagePricing[serviceMatch];
      
      let response = `**${serviceMatch} - Pricing Information**\n\n`;
      
      // Add packages
      if (servicePricing.packages && servicePricing.packages.length > 0) {
        servicePricing.packages.forEach((pkg, index: number) => {
          const popularBadge = pkg.popular ? ' ⭐ **POPULAR**' : '';
          response += `### ${pkg.name}${popularBadge}\n`;
          response += `💰 **${servicePricing.currency} ${pkg.price.toLocaleString()}** ${pkg.billingCycle}\n\n`;
          response += `${pkg.description}\n\n`;
          
          // Add key features (limit to 5 for brevity)
          if (pkg.features && pkg.features.length > 0) {
            response += `**Key Features:**\n`;
            pkg.features.slice(0, 5).forEach((feature: string) => {
              response += `• ${feature}\n`;
            });
            if (pkg.features.length > 5) {
              response += `• ...and ${pkg.features.length - 5} more features\n`;
            }
          }
          
          // Add optional package details
          if (pkg.deliveryTime) {
            response += `⏱️ **Delivery Time:** ${pkg.deliveryTime}\n`;
          }
          
          if (pkg.coverage) {
            response += `🌍 **Coverage:** ${pkg.coverage}\n`;
          }
          
          if (pkg.revisions) {
            response += `🔄 **Revisions:** ${pkg.revisions}\n`;
          }
          
          if (pkg.warranty) {
            response += `🛡️ **Warranty:** ${pkg.warranty}\n`;
          }
          
          if (pkg.platforms) {
            response += `📱 **Platforms:** ${pkg.platforms}\n`;
          }
          
          if (pkg.support) {
            response += `🎧 **Support:** ${pkg.support}\n`;
          }
          
          if (pkg.maintenance) {
            response += `🔧 **Maintenance:** ${pkg.maintenance}\n`;
          }
          
          if (pkg.minimumTerm) {
            response += `📅 **Minimum Term:** ${pkg.minimumTerm}\n`;
          }
          
          if (pkg.audienceSize) {
            response += `👥 **Audience Size:** ${pkg.audienceSize}\n`;
          }
          
          if (pkg.maxParticipants) {
            response += `👥 **Max Participants:** ${pkg.maxParticipants}\n`;
          }
          
          if (pkg.sessionDuration) {
            response += `⏰ **Session Duration:** ${pkg.sessionDuration}\n`;
          }
          
          if (pkg.platform) {
            response += `🖥️ **Platform:** ${pkg.platform}\n`;
          }
          
          response += '\n---\n\n';
        });
      }
      
      // Add additional services if available (for Equipment Sales, etc.)
      if (servicePricing.additionalServices && servicePricing.additionalServices.length > 0) {
        response += `**Additional Services:**\n\n`;
        servicePricing.additionalServices.forEach((service) => {
          response += `### ${service.name}\n`;
          response += `💰 **${servicePricing.currency} ${service.price.toLocaleString()}** ${service.billingCycle}\n`;
          response += `${service.description}\n\n`;
        });
        response += '---\n\n';
      }
      
      response += `For detailed quotes and customization, please contact us directly.`;
      
      return response;
    }
  }
  
  // General pricing response if no specific service found
  const generalPricingResponse: { [key: string]: string } = {
    en: `**Our Pricing Information**\n\n` +
         `We offer competitive rates for all our services:\n\n` +
         `• **Door to Door Sales**: Starting from $500/month\n` +
         `• **Website Development**: Starting from $800\n` +
         `• **Social Media Management**: Starting from $300/month\n` +
         `• **Public Tender Services**: Custom quotes available\n` +
         `• **Equipment Sales**: Varies by equipment type\n` +
         `• **Branding Services**: Starting from $500\n\n` +
         `Pricing varies based on:\n` +
         `- Project scope and complexity\n` +
         `- Timeline requirements\n` +
         `- Customization level\n` +
         `- Ongoing support needs\n\n` +
         `For detailed pricing information, please specify which service you're interested in or contact us directly.`,
    
    sw: `**Maelezo ya Bei Zetu**\n\n` +
         `Tunauza kwa bei nafuu kwa huduma zote:\n\n` +
         `• **Uuzaji wa Mlango kwa Mlango**: Kuanzia $500/mwezi\n` +
         `• **Utengenezaji wa Tovuti**: Kuanzia $800\n` +
         `• **Usimamizi wa Mitandao ya Kijamii**: Kuanzia $300/mwezi\n` +
         `• **Huduma za Zabuni za Umma**: Bei maalum zinapatikana\n` +
         `• **Uuzaji wa Vifaa**: Inategemea aina ya kifaa\n` +
         `• **Huduma za Ujenzi wa Chapa**: Kuanzia $500\n\n` +
         `Bei inategemea:\n` +
         `- Upeo na ugumu wa mradi\n` +
         `- Mahitaji ya muda\n` +
         `- Kiwango cha ubinafsishaji\n` +
         `- Mahitaji ya msaada wa kuendelea\n\n` +
         `Kwa maelezo kamili ya bei, tafadhali bainisha huduma unayohitaji au wasiliana nasi moja kwa moja.`
  };
  
  return generalPricingResponse[language] || generalPricingResponse.en;
};
/**
 * Process user message and generate appropriate response
 * @param message - User message
 * @param chatData - Chatbot data
 * @param language - Current language
 * @returns Response object with text and suggestions
 */
export const processUserMessage = (
  message: string,
  chatData: ChatbotData,
  language: string
): ProcessMessageResponse => {
  console.log('Processing message:', { message, language });
  
  // If language is not specified, detect it
  const detectedLang = language || detectLanguage(message);
  
  // Validate chatData structure
  if (!chatData) {
    console.error('ChatData is missing');
    return {
      text: 'Sorry, I am currently unavailable. Please try again later.',
      suggestions: []
    };
  }
  
  // Check for booking request FIRST
  if (isBookingQuery(message, detectedLang)) {
    console.log('Booking request detected');
    return {
      text: getBookingResponse(chatData, detectedLang),
      suggestions: generateSuggestions(null, chatData, detectedLang)
    };
  }

  // Check for pricing request
  if (isPricingQuery(message, detectedLang)) {
    console.log('Pricing request detected');
    return {
      text: getPricingResponse(message, chatData, detectedLang),
      suggestions: generateSuggestions(null, chatData, detectedLang)
    };
  }
  
  // Check for contact information request
  if (isAskingForContact(message, detectedLang)) {
    console.log('Contact request detected');
    return {
      text: getContactResponse(chatData.contactInfo, detectedLang),
      suggestions: generateSuggestions(null, chatData, detectedLang)
    };
  }
  
  // Check for FAQ match
  const faqMatch = findFaqMatch(message, chatData.faqs || {}, detectedLang);
  if (faqMatch) {
    console.log('FAQ match found');
    return {
      text: faqMatch,
      suggestions: generateSuggestions(null, chatData, detectedLang)
    };
  }
  
  // Check for service match
  const serviceMatch = findMatchingService(message, chatData.serviceKeywords || {}, detectedLang);
  if (serviceMatch) {
    console.log('Service match found:', serviceMatch);
    return {
      text: getServiceResponse(serviceMatch, chatData, detectedLang),
      suggestions: generateSuggestions(serviceMatch, chatData, detectedLang)
    };
  }
  
  // Default response when no specific matches found  
  console.log('Using default response');
  return {
    text: chatData.defaultResponse?.[detectedLang] || 'How can I help you today?',
    suggestions: chatData.prompts?.[detectedLang] || []
  };
};

// Default export with all functions
const chatbotUtils = {
  findMatchingService,
  getServiceResponse,
  findFaqMatch,
  isAskingForContact,
  getContactResponse,
  detectLanguage,
  generateSuggestions,
  isBookingQuery,
  getBookingResponse,
  isPricingQuery,
  getPricingResponse,
  processUserMessage
};

export default chatbotUtils;

// Export types for external use
export type {
  ServiceKeywords,
  ServiceDescription,
  ServiceDescriptions,
  FAQ,
  FAQs,
  ContactInfo,
  UITexts,
  BookingInfo,
  PricingPackage,
  ServicePricing,
  PricingData,
  ChatbotData,
  ProcessMessageResponse,
  LanguageKeywords
};