// File: app/components/layout/ChatBot/utils/responseGenerator.ts

import { 
  ResponseObject,
  GenerateContextualResponseParams,
  ServiceContext,
  Language,
  QuestionType,
  ServiceType,
  SuggestedAction
} from './types';

import {
  formatCommonQuestionResponse,
  generateContactResponse,
  generateEnhancedPricingResponse,
  generateServiceResponse,
  generateFaqResponse,
  generateInsightsResponse,
  generateFallbackResponse,
  validateResponse
} from './utils';

import { 
  isPricingInquiry,
} from '@/utils/context/serviceContextUtils';

// Import common questions functionality
import {
  handleCommonQuestions,
  CommonQuestionResponse,
} from '@/utils/context/common-questions/index';

import { 
  generateContextualFollowUp,
} from "../helpers";

import {
  analyzeMessageIntent,
} from "../intent";

export { analyzeMessageIntent };

import { 
  analyzeCasualInteraction, 
  CasualInteractionAnalysis, 
  generateCasualResponse 
} from '../../casual/casualInteractionUtils';

/**
 * Generate contextual response based on service detection and user intent
 * Enhanced with common questions functionality
 */
export function generateContextualResponse({
  userMessage, 
  serviceDetection, 
  intentAnalysis, 
  chatbotData, 
  language, 
  serviceContext, 
  pricingData
}: GenerateContextualResponseParams): ResponseObject {
  // Priority 0: Handle casual interactions (greetings, goodbyes, appreciation)
  const casualAnalysis: CasualInteractionAnalysis = analyzeCasualInteraction(userMessage, language);
  if (casualAnalysis.isCasualInteraction) {
    return generateCasualResponse(casualAnalysis, serviceContext, language);
  }

  // Priority 0.5: Handle common questions using the dedicated handler
  const commonQuestionResponse: ResponseObject = handleCommonQuestions(userMessage, language);
  if (commonQuestionResponse.questionType !== 'unknown' && (commonQuestionResponse.confidence ?? 0) > 0.6) {
    return formatCommonQuestionResponse(commonQuestionResponse, serviceContext, language);
  }

  // Priority 1: Handle contextual follow-ups (yes/no, tell me more)
  if (intentAnalysis.isContextualResponse) {
    const contextualResponse : any = generateContextualFollowUp(serviceContext, intentAnalysis, chatbotData, language);
    if (contextualResponse) {
      return contextualResponse;
    }
  }

  // Priority 2: Handle contact requests
  if (intentAnalysis.isContactRequest) {
    return generateContactResponse(serviceContext, chatbotData, language);
  }
  
  // priority 3: pricing requ
 if (intentAnalysis.isPricingInquiry) {
  return generateEnhancedPricingResponse(
    serviceDetection.service, 
    language, 
    pricingData, 
    serviceDetection.confidence || 0.5, // Add confidence from serviceDetection
    0, // Add serviceConfidence (you have it hardcoded as 0 in the function signature)
    serviceContext
  );
}
  
  // Priority 4: Handle service-specific inquiries
  if (serviceDetection.service && serviceDetection.confidence > 0.5) {
    return generateServiceResponse(serviceDetection, chatbotData, language, serviceContext);
  }
  
  // Priority 5: Handle FAQ matches
  const faqResponse = generateFaqResponse(userMessage, chatbotData, language);
  if (faqResponse.matched) {
    return faqResponse;
  }
  
  // Priority 6: Handle conversation insights
  const insightsResponse = generateInsightsResponse(serviceContext, language);
  if (insightsResponse.hasInsights) {
    return insightsResponse;
  }
  
  // Priority 7: Generate fallback response
  return generateFallbackResponse(userMessage, intentAnalysis, chatbotData, language, serviceContext);
}

// Export types for external use
export type {
  Language,
  QuestionType,
  ServiceType,
  SuggestedAction,
  ResponseObject,
  GenerateContextualResponseParams
} from './types';