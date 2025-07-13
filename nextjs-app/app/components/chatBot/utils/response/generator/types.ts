// Complete Response Types for Future Holders Company Limited Chatbot
// This file contains all response types with missing elements from the response generator

import { PricingData } from '@/data/chat/index';

// Core language and question types
export type Language = 'en' | 'sw';
export type QuestionType = string | null;
export type ServiceType = string | null;

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

// ============================================================================
// CORE DATA INTERFACES
// ============================================================================

export interface ContactInfo {
  address?: string;
  phone?: string;
  email?: string;
  website?: string;
  whatsapp?: string;
  businessHours?: string;
  timezone?: string;
}



export interface ConversationFlowEntry {
  timestamp: string;
  userMessage: string;
  detectedService: string | null;
  contextService: string | null;
  options: UpdateContextOptions;
}

export interface UpdateContextOptions {
  preservePrevious?: boolean;
  confidenceThreshold?: number;
  forceUpdate?: boolean;
}

export interface AlternativeServiceDetection {
  service: string;
  timestamp: string;
  confidence: number;
}

export interface ServiceDetection {
  service: string | null;
  confidence: number;
  matchedTerms?: string[];
  alternativeServices?: Array<{
    service: string;
    confidence: number;
  }>;
  detectionMethod?: string;
}

export interface IntentAnalysis {
  isContextualResponse: boolean;
  isContactRequest: boolean;
  isPricingInquiry: boolean;
  intentType?: string;
  confidence?: number;
  urgency?: 'low' | 'medium' | 'high';
  expectedResponseType?: string;
}

export interface ServiceContext {
  // Core service properties
  currentService: string | null;
  serviceHistory: string[];
  conversationDepth: number;
  
  // Service tracking
  lastServiceMention: string | null;
  contextualPrompts: string[];
  conversationFlow: ConversationFlowEntry[];
  lastResponse: string | null;
  
  // Company context
  companyName: string;
  companyType: string;
  
  // Alternative service detection
  alternativeServiceDetected?: AlternativeServiceDetection;
  alternativeServiceHistory?: AlternativeServiceDetection[];
  
  // Location context
  isLocationQuery?: boolean;
  matchedLocationPattern?: string;
  
  // Question tracking
  previousQuestions?: string[];
}



export interface ConversationInsights {
  insights: string[];
  conversationDepth: number;
  
  servicesDiscussed: string[];
  userPreferences?: {
    preferredContactMethod?: string;
    budget?: string;
    timeline?: string;
    location?: string;
  };
}

export interface CasualAnalysis {
  isCasualInteraction: boolean;
  type?: string;
  confidence?: number;
  sentiment?: 'positive' | 'neutral' | 'negative';
}

// ============================================================================
// RESPONSE DATA INTERFACES - COMPLETE WITH ALL MISSING ELEMENTS
// ============================================================================

export interface ServiceInfo {
  name: string;
  description: string;
  highlight: string;
  features?: string[];
  icon?: string;
  category?: string;
  popularity?: number;
}

export interface ServicesResponse {
  intro: string;
  services: ServiceInfo[];
  outro: string;
  categories?: string[];
  totalServices?: number;
  featuredService?: string;
}

export interface PricingFactors {
  intro: string;
  factors: string[];
  ranges: Record<string, string>;
  outro: string;
  currency?: string;
  paymentTerms?: string[];
  discounts?: Array<{
    type: string;
    description: string;
    percentage?: number;
  }>;
}

export interface PricingResponse {
  general: PricingFactors;
  specific: string;
  customQuoteAvailable?: boolean;
  consultationRequired?: boolean;
  validUntil?: string;
}

export interface MethodologyResponse {
  intro: string;
  principles?: string[];
  methods?: string[];
  outro: string;
  isSpecific?: boolean;
  processSteps?: Array<{
    step: number;
    title: string;
    description: string;
    duration?: string;
  }>;
  tools?: string[];
  certifications?: string[];
}

export interface ContactMethod {
  method: string;
  details: string;
  note: string;
  availability?: string;
  responseTime?: string;
  preferred?: boolean;
}

export interface ContactResponse {
  intro: string;
  contactMethods: ContactMethod[];
  availability: string;
  nextSteps?: string;
  outro: string;
  emergencyContact?: string;
  officeHours?: string;
  timezone?: string;
}

export interface TimelineInfo {
  service: string;
  timeline: string;
  details: string;
  phases?: Array<{
    phase: string;
    duration: string;
    description: string;
  }>;
  dependencies?: string[];
}

export interface TimelineResponse {
  intro: string;
  timelines?: TimelineInfo[];
  flexibility?: string;
  options?: string[];
  note?: string;
  outro: string;
  rushOptions?: Array<{
    service: string;
    rushTimeline: string;
    additionalCost?: string;
  }>;
  factors?: string[];
}

export interface ServiceArea {
  region: string;
  description: string;
  coverage: string[];
  note: string;
  travelCost?: string;
  availability?: string;
}

export interface LocationCapabilities {
  intro: string;
  details: string[];
  specializations?: string[];
  limitations?: string[];
}

export interface LocationResponse {
  intro: string;
  serviceAreas: ServiceArea[];
  capabilities: LocationCapabilities;
  outro: string;
  headquarters?: string;
  remoteCapabilities?: string[];
  travelPolicy?: string;
}

export interface ExperienceInfo {
  founded: string;
  clients: string;
  reach: string;
  yearsInBusiness?: number;
  projectsCompleted?: number;
  industriesServed?: string[];
}

export interface QualificationsResponse {
  intro: string;
  experience: ExperienceInfo;
  credentials: string[];
  specializations: string[];
  achievements: string[];
  outro: string;
  teamSize?: number;
  certifications?: Array<{
    name: string;
    issuer: string;
    year?: number;
  }>;
  partnerships?: string[];
}

export interface MoreInfoResponse {
  intro: string;
  options: string[];
  questions: string[];
  contextSpecific?: string;
  hasContext?: boolean;
  recommendedNextSteps?: string[];
  resourceLinks?: Array<{
    title: string;
    description: string;
    url?: string;
  }>;
}

export interface GeneralResponse {
  intro: string;
  suggestions: string[];
  helpfulLinks?: string[];
  commonQuestions?: string[];
}

// ============================================================================
// ADDITIONAL MISSING RESPONSE TYPES FROM RESPONSE GENERATOR
// ============================================================================

export interface UrgentResponse {
  intro: string;
  options: string[];
  note?: string;
  outro: string;
  expeditedServices?: Array<{
    service: string;
    timeline: string;
    additionalCost?: string;
  }>;
  emergencyContact?: string;
}

export interface AvailabilityResponse {
  intro: string;
  availability: string;
  scheduling?: Array<{
    timeSlot: string;
    availability: 'available' | 'busy' | 'limited';
    note?: string;
  }>;
  nextAvailable?: string;
  outro: string;
}

export interface CustomResponse {
  intro: string;
  content: string;
  outro: string;
  customData?: Record<string, any>;
  dynamicSections?: Array<{
    title: string;
    content: string;
    type: 'text' | 'list' | 'table';
  }>;
}

export interface ErrorResponse {
  intro: string;
  errorType: string;
  suggestions: string[];
  contactInfo?: string;
  outro: string;
}

export interface MultiLanguageResponse {
  [language: string]: ResponseData;
}

// ============================================================================
// EXTENDED RESPONSE DATA UNION TYPE
// ============================================================================

export type ResponseData = 
  | ServicesResponse 
  | PricingResponse 
  | MethodologyResponse 
  | ContactResponse 
  | TimelineResponse 
  | LocationResponse 
  | QualificationsResponse 
  | MoreInfoResponse 
  | GeneralResponse
  | UrgentResponse
  | AvailabilityResponse
  | CustomResponse
  | ErrorResponse;

// ============================================================================
// DETECTION AND ANALYSIS INTERFACES
// ============================================================================

export interface QuestionTypeAnalysis {
  type: QuestionType;
  confidence: number;
  matchedPatterns?: string[];
  alternativeTypes?: Array<{
    type: string;
    confidence: number;
  }>;
  detectionMethod?: string;
}

export interface ServiceDetectionResult {
  service: ServiceType;
  confidence: number;
  matchedTerms?: string[];
  alternativeServices?: Array<{
    service: string;
    confidence: number;
  }>;
  detectionMethod?: string;
}

export interface DetectedQuestion {
  type: QuestionType;
  confidence: number;
  category?: string;
  urgency?: 'low' | 'medium' | 'high';
}

export interface DetectedService {
  service: ServiceType;
  confidence: number;
  category?: string;
  relatedServices?: string[];
}

// ============================================================================
// COMPREHENSIVE RESPONSE OBJECT WITH ALL MISSING ELEMENTS
// ============================================================================

export interface ResponseObject {
  // Core response properties
  text: string;
  type: string;
  service?: string | null;
  confidence?: number;
  questionType?: string | null;
  serviceContext?: string | null;
  suggestedActions?: string[];
  metadata?: {
    [key: string]: any;
  };
  matched?: boolean;
  hasInsights?: boolean;
  
  // Enhanced structured response properties
  response?: ResponseData | null;
  serviceConfidence?: number;
  language?: Language;
  formattedText?: string;
  actionButtons?: Array<{
    action: SuggestedAction;
    text: string;
    priority?: 'high' | 'medium' | 'low';
    icon?: string;
  }>;
  
  // Enhanced metadata for comprehensive response tracking
  responseMetadata?: {
    generatedAt?: Date;
    processingTime?: number;
    detectionResults?: {
      questionDetection?: QuestionTypeAnalysis;
      serviceDetection?: ServiceDetectionResult;
    };
    fallbackUsed?: boolean;
    responseSource?: 'structured' | 'fallback' | 'cached' | 'custom';
    version?: string;
    responseId?: string;
  };
  
  // Missing elements from response generator
  conversationContext?: {
    previousQuestions?: string[];
    servicesDiscussed?: string[];
    userPreferences?: {
      contactMethod?: string;
      budget?: string;
      timeline?: string;
      location?: string;
    };
    sessionId?: string;
    conversationDepth?: number;
  };
  
  // Response formatting options
  formatting?: {
    useMarkdown?: boolean;
    includeEmojis?: boolean;
    maxLength?: number;
    style?: 'formal' | 'casual' | 'professional';
  };
  
  // Analytics and tracking
  analytics?: {
    responseGenerated?: boolean;
    userSatisfaction?: number;
    followupRequired?: boolean;
    conversionIntent?: 'high' | 'medium' | 'low';
  };
  
  // Error handling
  errors?: Array<{
    type: string;
    message: string;
    recoverable: boolean;
  }>;
  
  // Localization support
  localization?: {
    detectedLanguage?: Language;
    supportedLanguages?: Language[];
    translationQuality?: number;
  };
}

// ============================================================================
// COMMON QUESTION RESPONSE INTERFACE (LEGACY COMPATIBILITY)
// ============================================================================

export interface CommonQuestionResponse {
  questionType: string | null;
  confidence: number;
  serviceContext: string;
  serviceConfidence: number;
  response: ResponseData | null;
  suggestedActions: string[];
  language?: Language;
  formattedText?: string;
  metadata?: {
    processingTime?: number;
    detectionMethod?: string;
    fallbackUsed?: boolean;
  };
}

// ============================================================================
// LANGUAGE-SPECIFIC RESPONSE COLLECTIONS
// ============================================================================

export interface LanguageResponses<T> {
  en: T;
  sw: T;
  [language: string]: T;
}

// ============================================================================
// UTILITY TYPES
// ============================================================================

export type ResponseGenerator = (
  service?: ServiceType, 
  language?: Language,
  options?: Record<string, any>
) => ResponseData;

export type ResponseHandler = (
  userMessage: string,
  language?: Language,
  context?: ServiceContext
) => ResponseObject;

export type ActionHandler = (
  action: SuggestedAction,
  context?: ResponseObject
) => ResponseObject;

// ============================================================================
// EXPORT COLLECTIONS FOR EASY IMPORTS
// ============================================================================

export type AllResponseTypes = 
  | ServicesResponse 
  | PricingResponse 
  | MethodologyResponse 
  | ContactResponse 
  | TimelineResponse 
  | LocationResponse 
  | QualificationsResponse 
  | MoreInfoResponse 
  | GeneralResponse
  | UrgentResponse
  | AvailabilityResponse
  | CustomResponse
  | ErrorResponse;

export type CoreTypes = {
  Language: Language;
  QuestionType: QuestionType;
  ServiceType: ServiceType;
  SuggestedAction: SuggestedAction;
  ResponseData: ResponseData;
  ResponseObject: ResponseObject;
};

export type DetectionTypes = {
  QuestionTypeAnalysis: QuestionTypeAnalysis;
  ServiceDetectionResult: ServiceDetectionResult;
  DetectedQuestion: DetectedQuestion;
  DetectedService: DetectedService;
};

export type UtilityTypes = {
  ResponseGenerator: ResponseGenerator;
  ResponseHandler: ResponseHandler;
  ActionHandler: ActionHandler;
  LanguageResponses: LanguageResponses<any>;
};

import { ChatbotData } from '@/data/chat/index';

// Parameters interface for the main function
export interface GenerateContextualResponseParams {
  userMessage: string;
  serviceDetection: ServiceDetection;
  intentAnalysis: IntentAnalysis;
  chatbotData: ChatbotData;
   language: Language; // Changed from string to Language
  serviceContext: ServiceContext;
  pricingData: PricingData;
}