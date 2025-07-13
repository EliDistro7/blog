import { analyzeCasualInteraction, CasualInteractionAnalysis } from "../casual/casualInteractionUtils";
import { calculateIntentStrength, getSuggestedAction } from "./helpers";
import { detectQuestionType, QuestionTypeAnalysis,QuestionMatch } from "@/utils/context/common-questions/helpers";

import {
     contactIndicators,
     elaborationIndicators,
     locationIndicators,
     pricingIndicators,
     infoIndicators,
     serviceIndicators,
     bookingIndicators,
     urgencyIndicators,
     confirmationIndicators,
} from "./indicators";

import {
   servicePatterns,
   locationContactPatterns,
} from "./patterns";

// Type definitions
interface LanguageIndicators {
  [language: string]: string[];
}

interface LanguagePatterns {
  [language: string]: RegExp[];
}

interface EnhancedIntentFlags {
  isContactRequest: boolean;
  isPricingInquiry: boolean;
  isServiceInquiry: boolean;
  isInfoSeeking: boolean;
  isBookingRequest: boolean;
}

interface IntentStrengthParams {
  isContactRequest: boolean;
  isLocationRequest: boolean;
  isPricingInquiry: boolean;
  isInfoSeeking: boolean;
  isServiceInquiry: boolean;
  isBookingRequest: boolean;
  isUrgent: boolean;
  matchesLocationContactPattern: boolean;
  matchesServicePattern: boolean;
  questionTypeConfidence: number;
}

interface DetectedPatterns {
  location: boolean;
  service: boolean;
  casual: boolean;
  questionType: string | null;
}

interface QuestionTypeAnalysisMetadata {
  type: string | null;
  confidence: number;
  matches: QuestionMatch[] | undefined; // Allow undefined
}

interface IntentAlignment {
  questionTypeMatchesIntent: boolean;
  confidenceBoostApplied: boolean;
}

interface IntentAnalysisMetadata {
  language: string;
  messageLength: number;
  hasMultipleIntents: boolean;
  detectedPatterns: DetectedPatterns;
  questionTypeAnalysis: QuestionTypeAnalysisMetadata;
  intentAlignment: IntentAlignment;
}

export interface IntentAnalysisResult {
  // Core intent flags (enhanced)
  isContactRequest: boolean;
  isLocationRequest: boolean;
  isPricingInquiry: boolean;
  isInfoSeeking: boolean;
  isServiceInquiry: boolean;
  isBookingRequest: boolean;
  isUrgent: boolean;
  isQuestion: boolean;
  
  // Question type analysis results
  questionType: string | null;
  questionTypeConfidence: number;
  questionMatches: any[];
  
  // Casual interaction analysis
  isCasualInteraction: boolean;
  casualType: string | null;
  
  // Primary classification
  primaryIntent: string;
  confidence: number;
  intentStrength: number;
  
  // Contextual responses
  isConfirmation: boolean;
  isElaborationRequest: boolean;
  isContextualResponse: boolean;
  
  // Pattern matching results
  matchedLocationPattern: boolean;
  matchedServicePattern: boolean;
  
  // Additional context
  requiresImmediateAttention: boolean;
  suggestedAction: string;
  
  // Enhanced metadata for analytics
  metadata: IntentAnalysisMetadata;
}

/**
 * Analyze message intent for better response generation with enhanced question type detection
 * @param message - User message
 * @param language - Current language
 * @returns Intent analysis result
 */
export function analyzeMessageIntent(message: string, language: string): IntentAnalysisResult {
  const messageText: string = message.toLowerCase().trim();
  const casualAnalysis: CasualInteractionAnalysis = analyzeCasualInteraction(message, language);
  
  // Detect question type using your existing detector
  const questionTypeAnalysis: QuestionTypeAnalysis = detectQuestionType(message, language);
  const isQuestion: boolean = questionTypeAnalysis.type !== null || message.includes('?');
  
  // Get language-specific indicators
  const langContactIndicators: string[] = (contactIndicators as LanguageIndicators)[language] || (contactIndicators as LanguageIndicators)['en'];
  const langLocationIndicators: string[] = (locationIndicators as LanguageIndicators)[language] || (locationIndicators as LanguageIndicators)['en'];
  const langPricingIndicators: string[] = (pricingIndicators as LanguageIndicators)[language] || (pricingIndicators as LanguageIndicators)['en'];
  const langInfoIndicators: string[] = (infoIndicators as LanguageIndicators)[language] || (infoIndicators as LanguageIndicators)['en'];
  const langServiceIndicators: string[] = (serviceIndicators as LanguageIndicators)[language] || (serviceIndicators as LanguageIndicators)['en'];
  const langBookingIndicators: string[] = (bookingIndicators as LanguageIndicators)[language] || (bookingIndicators as LanguageIndicators)['en'];
  const langUrgencyIndicators: string[] = (urgencyIndicators as LanguageIndicators)[language] || (urgencyIndicators as LanguageIndicators)['en'];
  const langConfirmationIndicators: string[] = (confirmationIndicators as LanguageIndicators)[language] || (confirmationIndicators as LanguageIndicators)['en'];
  const langElaborationIndicators: string[] = (elaborationIndicators as LanguageIndicators)[language] || (elaborationIndicators as LanguageIndicators)['en'];

  // Basic intent detection
  const isContactRequest: boolean = langContactIndicators.some((indicator: string) => messageText.includes(indicator));
  const isLocationRequest: boolean = langLocationIndicators.some((indicator: string) => messageText.includes(indicator));
  const isPricingInquiry: boolean = langPricingIndicators.some((indicator: string) => messageText.includes(indicator));
  const isInfoSeeking: boolean = langInfoIndicators.some((indicator: string) => messageText.includes(indicator));
  const isServiceInquiry: boolean = langServiceIndicators.some((indicator: string) => messageText.includes(indicator));
  const isBookingRequest: boolean = langBookingIndicators.some((indicator: string) => messageText.includes(indicator));
  const isUrgent: boolean = langUrgencyIndicators.some((indicator: string) => messageText.includes(indicator));
  const isConfirmation: boolean = langConfirmationIndicators.some((indicator: string) => 
    messageText === indicator || messageText.startsWith(indicator)
  );
  const isElaborationRequest: boolean = langElaborationIndicators.some((indicator: string) => 
    messageText.includes(indicator)
  );

  // Pattern matching
  const langLocationPatterns: RegExp[] = (locationContactPatterns as LanguagePatterns)[language] || (locationContactPatterns as LanguagePatterns)['en'];
  const langServicePatterns: RegExp[] = (servicePatterns as LanguagePatterns)[language] || (servicePatterns as LanguagePatterns)['en'];
  
  const matchesLocationContactPattern: boolean = langLocationPatterns.some((pattern: RegExp) => pattern.test(messageText));
  const matchesServicePattern: boolean = langServicePatterns.some((pattern: RegExp) => pattern.test(messageText));
  
  // Enhanced intent detection using question type analysis
  let enhancedIntentFlags: EnhancedIntentFlags = {
    isContactRequest: isContactRequest || isLocationRequest || matchesLocationContactPattern || isBookingRequest,
    isPricingInquiry: isPricingInquiry,
    isServiceInquiry: isServiceInquiry || matchesServicePattern,
    isInfoSeeking: isInfoSeeking,
    isBookingRequest: isBookingRequest
  };

  // Override or enhance based on question type detection
  if (questionTypeAnalysis.type && questionTypeAnalysis.confidence > 50) {
    switch (questionTypeAnalysis.type) {
      case 'services':
        enhancedIntentFlags.isServiceInquiry = true;
        enhancedIntentFlags.isInfoSeeking = true;
        break;
      case 'pricing':
        enhancedIntentFlags.isPricingInquiry = true;
        break;
      case 'methodology':
        enhancedIntentFlags.isInfoSeeking = true;
        enhancedIntentFlags.isServiceInquiry = true; // Methodology is service-related
        break;
      case 'moreInfo':
        enhancedIntentFlags.isInfoSeeking = true;
        // If it's asking for more info about something specific, check context
        if (messageText.includes('service') || messageText.includes('huduma')) {
          enhancedIntentFlags.isServiceInquiry = true;
        }
        if (messageText.includes('price') || messageText.includes('cost') || messageText.includes('bei')) {
          enhancedIntentFlags.isPricingInquiry = true;
        }
        break;
    }
  }

  // Determine primary intent with enhanced logic
  let primaryIntent: string = 'general';
  let confidence: number = 0.5;
  
  if (casualAnalysis.isCasualInteraction) {
    primaryIntent = 'casual';
    confidence = 0.9;
  } else if (questionTypeAnalysis.type && questionTypeAnalysis.confidence > 70) {
    // High confidence question type detection takes priority
    primaryIntent = questionTypeAnalysis.type;
    confidence = Math.min(questionTypeAnalysis.confidence / 100, 0.95);
  } else if (enhancedIntentFlags.isContactRequest) {
    primaryIntent = 'contact';
    confidence = 0.85;
  } else if (enhancedIntentFlags.isPricingInquiry) {
    primaryIntent = 'pricing';
    confidence = 0.8;
  } else if (enhancedIntentFlags.isServiceInquiry || matchesServicePattern) {
    primaryIntent = 'services';
    confidence = 0.8;
  } else if (enhancedIntentFlags.isBookingRequest) {
    primaryIntent = 'booking';
    confidence = 0.85;
  } else if (enhancedIntentFlags.isInfoSeeking || isQuestion) {
    primaryIntent = 'information';
    confidence = 0.7;
  }
  
  // Boost confidence for urgent requests
  if (isUrgent) {
    confidence = Math.min(confidence + 0.1, 1.0);
  }

  // Boost confidence if question type analysis aligns with detected intent
  if (questionTypeAnalysis.type && 
      ((questionTypeAnalysis.type === 'services' && enhancedIntentFlags.isServiceInquiry) ||
       (questionTypeAnalysis.type === 'pricing' && enhancedIntentFlags.isPricingInquiry) ||
       (questionTypeAnalysis.type === 'methodology' && enhancedIntentFlags.isInfoSeeking))) {
    confidence = Math.min(confidence + 0.15, 1.0);
  }
  
  // Calculate intent strength based on multiple indicators
  const intentStrengthParams: IntentStrengthParams = {
    isContactRequest: enhancedIntentFlags.isContactRequest,
    isLocationRequest,
    isPricingInquiry: enhancedIntentFlags.isPricingInquiry,
    isInfoSeeking: enhancedIntentFlags.isInfoSeeking,
    isServiceInquiry: enhancedIntentFlags.isServiceInquiry,
    isBookingRequest: enhancedIntentFlags.isBookingRequest,
    isUrgent,
    matchesLocationContactPattern,
    matchesServicePattern,
    questionTypeConfidence: questionTypeAnalysis.confidence
  };

  const intentStrength: number = calculateIntentStrength(intentStrengthParams);

  return {
    // Core intent flags (enhanced)
    isContactRequest: enhancedIntentFlags.isContactRequest,
    isLocationRequest,
    isPricingInquiry: enhancedIntentFlags.isPricingInquiry,
    isInfoSeeking: enhancedIntentFlags.isInfoSeeking,
    isServiceInquiry: enhancedIntentFlags.isServiceInquiry,
    isBookingRequest: enhancedIntentFlags.isBookingRequest,
    isUrgent,
    isQuestion,
    
    // Question type analysis results
    questionType: questionTypeAnalysis.type,
    questionTypeConfidence: questionTypeAnalysis.confidence,
    questionMatches: questionTypeAnalysis.matches ?? [],
    
    // Casual interaction analysis
    isCasualInteraction: casualAnalysis.isCasualInteraction,
    casualType: casualAnalysis.interactionType,
    
    // Primary classification
    primaryIntent,
    confidence,
    intentStrength,
    
    // Contextual responses
    isConfirmation,
    isElaborationRequest,
    isContextualResponse: isConfirmation || isElaborationRequest,
    
    // Pattern matching results
    matchedLocationPattern: matchesLocationContactPattern,
    matchedServicePattern: matchesServicePattern,
    
    // Additional context
    requiresImmediateAttention: isUrgent || (enhancedIntentFlags.isBookingRequest && isUrgent),
    suggestedAction: getSuggestedAction(primaryIntent, isUrgent, enhancedIntentFlags.isBookingRequest),
    
    // Enhanced metadata for analytics
    metadata: {
      language,
      messageLength: message.length,
      hasMultipleIntents: [
        enhancedIntentFlags.isContactRequest, 
        enhancedIntentFlags.isPricingInquiry, 
        enhancedIntentFlags.isServiceInquiry, 
        enhancedIntentFlags.isBookingRequest
      ].filter(Boolean).length > 1,
      detectedPatterns: {
        location: matchesLocationContactPattern,
        service: matchesServicePattern,
        casual: casualAnalysis.isCasualInteraction,
        questionType: questionTypeAnalysis.type
      },
      questionTypeAnalysis: {
        type: questionTypeAnalysis.type,
        confidence: questionTypeAnalysis.confidence,
        matches: questionTypeAnalysis.matches
      },
      intentAlignment: {
        questionTypeMatchesIntent: questionTypeAnalysis.type !== null && 
          ((questionTypeAnalysis.type === 'services' && enhancedIntentFlags.isServiceInquiry) ||
           (questionTypeAnalysis.type === 'pricing' && enhancedIntentFlags.isPricingInquiry) ||
           (questionTypeAnalysis.type === 'methodology' && enhancedIntentFlags.isInfoSeeking)),
        confidenceBoostApplied: questionTypeAnalysis.confidence > 50
      }
    }
  };
}