// File: app/components/layout/ChatBot/utils/utils.ts

import { 
  ResponseObject, 
  ServiceDetection, 

  ServiceContext, 
  IntentAnalysis, 
  ConversationInsights,
 
  SuggestedAction,
  Language
} from './types';
import { PricingData } from '@/data/chat/index';




import { 
  getServiceResponse,
  findFaqMatch,
  getContactResponse
} from '@/utils/ChatBotUtils';

import { 
  generatePricingResponse,
  getConversationInsights
} from '@/utils/context/serviceContextUtils';

import {
  formatResponseForDisplay,
  generatePricingResponse as generateCommonPricingResponse,
  CommonQuestionResponse,
} from '@/utils/context/common-questions/index';

import { 
  calculateIntentStrength,
  getSuggestedAction,
  calculateIntentConfidence,
  generateContextualFollowUp,
  generateServiceElaboration,
  generatePricingElaboration,
  generateGeneralGuidance
} from "../helpers";

import { chatBotData, ChatbotData } from '@/data/chat/index';

// Helper function to create a ResponseObject with backward compatibility
export const createResponseObject = (
  data: Partial<ResponseObject> & { 
    text: string; 
    type: string; 
  }
): ResponseObject => {
  const baseResponse: ResponseObject = {
    text: data.text,
    type: data.type,
    service: data.service,
    confidence: data.confidence,
    questionType: data.questionType ?? null, // Ensure null instead of undefined
    serviceContext: data.serviceContext,
    suggestedActions: data.suggestedActions || [],
    metadata: data.metadata || {},
    matched: data.matched ?? false,
    hasInsights: data.hasInsights ?? false,
    
    // New properties
    response: data.response || null,
    serviceConfidence: data.serviceConfidence || 0,
    language: data.language || 'en',
    formattedText: data.formattedText,
    actionButtons: data.actionButtons || [],
    responseMetadata: {
      generatedAt: new Date(),
      processingTime: 0,
      detectionResults: data.responseMetadata?.detectionResults,
      fallbackUsed: data.responseMetadata?.fallbackUsed ?? false,
      responseSource: data.responseMetadata?.responseSource || 'structured',
      ...data.responseMetadata
    }
  };
  
  return baseResponse;
};

/**
 * Convert CommonQuestionResponse to ResponseObject format
 */
export function convertCommonQuestionToResponseObject(
  commonQuestionResponse: any,
  serviceContext: ServiceContext,
  language: string
): ResponseObject {
  // First format the CommonQuestionResponse for display
  const formattedText = formatResponseForDisplay(commonQuestionResponse);
  
  return createResponseObject({
    text: formattedText,
    type: 'common_question',
    questionType: commonQuestionResponse.questionType || null,
    confidence: commonQuestionResponse.confidence,
    serviceContext: commonQuestionResponse.serviceContext,
    suggestedActions: commonQuestionResponse.suggestedActions,
    language: language as Language,
    formattedText: formattedText,
    metadata: {
      originalQuestionType: commonQuestionResponse.questionType,
      detectedService: commonQuestionResponse.serviceContext,
      conversationDepth: serviceContext.conversationDepth,
      serviceHistory: serviceContext.serviceHistory,
      sourceType: 'common_question'
    }
  });
}

/**
 * Format common question response for the chatbot system
 */
export function formatCommonQuestionResponse(
  commonQuestionResponse: ResponseObject, 
  serviceContext: ServiceContext, 
  language: string
): ResponseObject {
  // Convert to ResponseObject first
  const baseResponse = convertCommonQuestionToResponseObject(
    commonQuestionResponse, 
    serviceContext, 
    language
  );
  
  // Now enhance with contextual information
  let enhancedText = baseResponse.text;
  
  // Add contextual notes based on conversation history
  if (serviceContext.conversationDepth > 2 && commonQuestionResponse.questionType === 'pricing') {
    const contextNote = language === 'sw' ? 
      `\n\n💡 Kwa bei maalum kulingana na mazungumzo yetu, wasiliana nasi moja kwa moja.` :
      `\n\n💡 For personalized pricing based on our discussion, contact us directly.`;
    enhancedText += contextNote;
  }
  
  if (serviceContext.serviceHistory.length > 1 && commonQuestionResponse.questionType === 'services') {
    const historyNote = language === 'sw' ? 
      `\n\n📋 Tumeongea kuhusu: ${serviceContext.serviceHistory.join(', ')}.` :
      `\n\n📋 We've discussed: ${serviceContext.serviceHistory.join(', ')}.`;
    enhancedText += historyNote;
  }

  return createResponseObject({
    ...baseResponse,
    text: enhancedText,
    formattedText: enhancedText,
    metadata: {
      ...baseResponse.metadata,
      enhanced: true,
      enhancementType: 'contextual'
    }
  });
}

/**
 * Enhanced contact response generator that includes address information
 */
export function generateContactResponse(
  serviceContext: ServiceContext, 
  chatbotData: ChatbotData, 
  language: string
): ResponseObject {
  let contactResponse = getContactResponse(chatbotData.contactInfo, language);
  
  // Add location/address information prominently for location-based queries
  if (serviceContext.isLocationQuery || serviceContext.matchedLocationPattern) {
    const locationInfo = language === 'sw' ? 
      `📍 MAHALI:\n${chatbotData.contactInfo.address || 'Anwani itatolewa baadaye'}\n\n` :
      `📍 OUR LOCATION:\n${chatbotData.contactInfo.address || 'Address will be provided'}\n\n`;
    contactResponse = locationInfo + contactResponse;
  }
  
  // Add service-specific contact note
  if (serviceContext.currentService) {
    const serviceNote = language === 'sw' ? 
      `\n\n📋 Kwa maswali maalum kuhusu ${serviceContext.currentService}, wasiliana nasi moja kwa moja.` :
      `\n\n📋 For specific questions about ${serviceContext.currentService}, contact us directly.`;
    contactResponse += serviceNote;
  }
  
  // Add conversation summary if deep engagement
  if (serviceContext.conversationDepth > 3) {
    const summaryNote = language === 'sw' ? 
      `\n\n💬 Tumeongea mengi kuhusu huduma zetu. Mtaalamu wetu atakusaidia zaidi.` :
      `\n\n💬 We've discussed a lot about our services. Our specialist can help you further.`;
    contactResponse += summaryNote;
  }
  
  return createResponseObject({
    text: contactResponse,
    type: 'contact',
    serviceContext: serviceContext.currentService,
    language: language as Language,
    formattedText: contactResponse,
    metadata: {
      conversationDepth: serviceContext.conversationDepth,
      servicesDiscussed: serviceContext.serviceHistory,
      isLocationQuery: serviceContext.isLocationQuery,
      locationPattern: serviceContext.matchedLocationPattern
    }
  });
}

/**
 * Generate enhanced pricing response with context
 * Enhanced with common questions pricing logic
 */
export function generateEnhancedPricingResponse(
  service: string | null, 
  language: "en" | "sw" | undefined, 
  pricingData: PricingData,
  confidence: number,
  serviceConfidence:0, 
  serviceContext: ServiceContext
): ResponseObject {
  // Get common questions pricing response
  const commonPricingResponse = generateCommonPricingResponse(service, language);
  
  // Create a CommonQuestionResponse-like object to format properly
  const commonQuestionObj: CommonQuestionResponse = {
    response: commonPricingResponse,
    questionType: 'pricing',
    serviceConfidence,
     confidence,
    serviceContext: service ?? null,
    suggestedActions: ['contact_us', 'view_services']
  };

  
  
  // Convert to ResponseObject
  const baseResponse = convertCommonQuestionToResponseObject(
    commonQuestionObj,
    serviceContext,
    language || 'en'
  );
  
  let enhancedText = baseResponse.text;
  
  // Add contextual pricing notes based on conversation history
  if (serviceContext.conversationDepth > 2) {
    const contextNote = language === 'sw' ? 
      `\n\n💡 Kwa bei maalum na mipango ya malipo, wasiliana nasi kwa mazungumzo ya kibinafsi.` :
      `\n\n💡 For custom pricing and payment plans, contact us for a personal consultation.`;
    enhancedText += contextNote;
  }
  
  // Add comparison note if multiple services discussed
  if (serviceContext.serviceHistory.length > 1) {
    const comparisonNote = language === 'sw' ? 
      `\n\n📊 Tunaweza kutengeneza kifurushi cha huduma kwa bei bora zaidi.` :
      `\n\n📊 We can create a service package for better value.`;
    enhancedText += comparisonNote;
  }
  
  return createResponseObject({
    ...baseResponse,
    text: enhancedText,
    type: 'pricing',
    service: service || undefined,
    formattedText: enhancedText,
    metadata: {
      ...baseResponse.metadata,
      conversationDepth: serviceContext.conversationDepth,
      multipleServices: serviceContext.serviceHistory.length > 1,
      usedCommonQuestions: true,
      enhanced: true
    }
  });
}

/**
 * Generate service-specific response with confidence scoring
 */
export function generateServiceResponse(
  serviceDetection: ServiceDetection, 
  chatbotData: ChatbotData, 
  language: string, 
  serviceContext: ServiceContext
): ResponseObject {
  const baseServiceResponse = getServiceResponse(serviceDetection.service, chatBotData, language);
  
  let enhancedResponse = baseServiceResponse;
  
  // Add confidence-based messaging
  if (serviceDetection.confidence < 0.7) {
    const clarificationNote = language === 'sw' ? 
      `\n\n🤔 Je, unamaanisha huduma ya ${serviceDetection.service}? Kama hapana, niambie zaidi.` :
      `\n\n🤔 Did you mean ${serviceDetection.service} service? If not, please tell me more.`;
    enhancedResponse += clarificationNote;
  }
  
  // Add alternative suggestions if available
  if (serviceDetection.alternativeServices && serviceDetection.alternativeServices.length > 0) {
    const alternatives = serviceDetection.alternativeServices
      .slice(0, 2)
      .map(alt => alt.service)
      .join(', ');
    
    const alternativeNote = language === 'sw' ? 
      `\n\n🔍 Huduma zingine unazoweza kuwa unahitaji: ${alternatives}` :
      `\n\n🔍 Other services you might need: ${alternatives}`;
    enhancedResponse += alternativeNote;
  }
  
  // Add context-based follow-up
  if (serviceContext.conversationDepth === 0) {
    const followUpNote = language === 'sw' ? 
      `\n\n❓ Je, una maswali yoyote maalum kuhusu huduma hii?` :
      `\n\n❓ Do you have any specific questions about this service?`;
    enhancedResponse += followUpNote;
  }
  
  return createResponseObject({
    text: enhancedResponse,
    type: 'service',
    service: serviceDetection.service || undefined,
    confidence: serviceDetection.confidence,
    language: language as Language,
    formattedText: enhancedResponse,
    metadata: {
      matchedTerms: serviceDetection.matchedTerms,
      alternatives: serviceDetection.alternativeServices,
      detectionMethod: serviceDetection.detectionMethod
    }
  });
}

/**
 * Generate FAQ response with context awareness
 */
export function generateFaqResponse(
  userMessage: string, 
  chatbotData: ChatbotData, 
  language: string
): ResponseObject {
  const faqAnswer = findFaqMatch(userMessage, chatbotData.faqs, language);
  
  if (faqAnswer) {
    return createResponseObject({
      text: faqAnswer,
      type: 'faq',
      matched: true,
      language: language as Language,
      formattedText: faqAnswer,
      metadata: {
        trigger: 'faq_match',
        originalQuery: userMessage
      }
    });
  }
  
  return createResponseObject({ 
    text: '',
    type: 'faq',
    matched: false,
    language: language as Language
  });
}

/**
 * Generate response based on conversation insights
 */
export function generateInsightsResponse(
  serviceContext: ServiceContext, 
  language: string
): ResponseObject {
  const insights: ConversationInsights = getConversationInsights(serviceContext);
  
  if (insights.insights.includes('Deep engagement detected')) {
    const engagementResponse = language === 'sw' ? 
      '💡 Ninaona una maswali mengi. Je, ungependa kuongea na mtaalamu wetu moja kwa moja?' :
      '💡 I can see you have many questions. Would you like to speak with our specialist directly?';
    
    return createResponseObject({
      text: engagementResponse,
      type: 'insights',
      hasInsights: true,
      language: language as Language,
      formattedText: engagementResponse,
      metadata: {
        insights: insights.insights,
        conversationDepth: serviceContext.conversationDepth
      }
    });
  }
  
  if (insights.insights.includes('Multiple services explored')) {
    const multiServiceResponse = language === 'sw' ? 
      '🔄 Umeuliza kuhusu huduma nyingi. Je, ungependa kifurushi cha huduma mojawapo?' :
      '🔄 You\'ve asked about multiple services. Would you like a service package?';
    
    return createResponseObject({
      text: multiServiceResponse,
      type: 'insights',
      hasInsights: true,
      language: language as Language,
      formattedText: multiServiceResponse,
      metadata: {
        insights: insights.insights,
        servicesDiscussed: serviceContext.serviceHistory
      }
    });
  }
  
  return createResponseObject({ 
    text: '',
    type: 'insights',
    hasInsights: false,
    language: language as Language
  });
}

/**
 * Generate fallback response when no specific match is found
 * Enhanced with common questions suggestions
 */
export function generateFallbackResponse(
  userMessage: string, 
  intentAnalysis: IntentAnalysis, 
  chatbotData: ChatbotData, 
  language: string, 
  serviceContext: ServiceContext
): ResponseObject {
  // Use existing fallback from base processing
  const baseFallback = 
    (language === 'sw' ? 
      'Samahani, sijaelewa vizuri. Je, unaweza kueleza zaidi?' : 
      'I\'m sorry, I didn\'t understand that well. Could you please explain more?');
  
  let enhancedFallback = baseFallback;
  
  // Add helpful context based on conversation history
  if (serviceContext.serviceHistory.length > 0) {
    const historyNote = language === 'sw' ? 
      `\n\nTumeongea kuhusu: ${serviceContext.serviceHistory.join(', ')}. Je, unahitaji msaada zaidi kwa mojawapo ya hizi?` :
      `\n\nWe've discussed: ${serviceContext.serviceHistory.join(', ')}. Do you need more help with any of these?`;
    enhancedFallback += historyNote;
  }
  
  // Add common questions suggestions
  if (serviceContext.conversationDepth === 0) {
    const suggestionsNote = language === 'sw' ? 
      `\n\n🔍 Unaweza kuuliza:\n• "Huduma gani mnazotoa?"\n• "Bei zenu ni ngapi?"\n• "Mnafanyaje mafunzo?"\n• "Nataka maelezo zaidi"` :
      `\n\n🔍 You can ask:\n• "What services do you offer?"\n• "What are your pricing rates?"\n• "How do you conduct training?"\n• "I need more information"`;
    enhancedFallback += suggestionsNote;
  }
  
  return createResponseObject({
    text: enhancedFallback,
    type: 'fallback',
    language: language as Language,
    formattedText: enhancedFallback,
    metadata: {
      originalMessage: userMessage,
      intentAnalysis: intentAnalysis,
      conversationDepth: serviceContext.conversationDepth,
      serviceHistory: serviceContext.serviceHistory,
      suggestedActions: ['show_services', 'show_pricing', 'book_consultation']
    }
  });
}

/**
 * Validate response object structure
 */
export function validateResponse(response: any): response is ResponseObject {
  if (!response || typeof response !== 'object') {
    return false;
  }
  
  return response.hasOwnProperty('text') && 
         response.hasOwnProperty('type') && 
         typeof response.text === 'string' &&
         response.text.length > 0;
}

/**
 * Ensure any response is properly formatted as ResponseObject
 */
export function ensureResponseObject(
  response: any, 
  fallbackType: string = 'unknown',
  language: string = 'en'
): ResponseObject {
  if (validateResponse(response)) {
    return response as ResponseObject;
  }
  
  // Handle CommonQuestionResponse conversion
  if (response && typeof response === 'object' && response.hasOwnProperty('response')) {
    const formattedText = formatResponseForDisplay(response);
    return createResponseObject({
      text: formattedText,
      type: 'common_question',
      questionType: response.questionType || null,
      confidence: response.confidence,
      serviceContext: response.serviceContext,
      suggestedActions: response.suggestedActions,
      language: language as Language,
      formattedText: formattedText
    });
  }
  
  // Handle string responses
  if (typeof response === 'string') {
    return createResponseObject({
      text: response,
      type: fallbackType,
      language: language as Language,
      formattedText: response
    });
  }
  
  // Fallback for invalid responses
  return createResponseObject({
    text: language === 'sw' ? 'Kuna hitilafu. Jaribu tena.' : 'Something went wrong. Please try again.',
    type: 'error',
    language: language as Language,
    metadata: {
      originalResponse: response,
      error: 'Invalid response format'
    }
  });
}