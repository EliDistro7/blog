// app/types/chatbot.ts - Updated Pricing Type Definitions

export interface FAQ {
  question: string;
  answer: string;
}

// Case study structure
export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category?:string;
  services: string[];
  challenge: string;
  solution: string;
  results: string[];
  testimonial: string;
  image: string;
  url: string;
}



// Case studies data structure
export interface CaseStudies {
  en: CaseStudy[];
  sw: CaseStudy[];
}

// Testimonial structure
export interface Testimonial {
  name: string;
  company: string;
  image: string;
  text: string;
  rating: number;
  services: string[]; // Added this to match your helper function usage
}

// Testimonials data structure
export interface Testimonials {
  en: Testimonial[];
  sw: Testimonial[];
}

// Basic pricing tier (keep this for backward compatibility if needed)
export interface PricingTier {
  name: string;
  price: number;
  features: string[];
  popular?: boolean;
}

// First, update the PricingPackage interface to include all the optional fields
interface PricingPackage {
  name: string;
  price: number;
  billingCycle: string;
  description: string;
  features?: string[];
  popular?: boolean;
  // Add all the missing optional fields
  deliveryTime?: string;
  coverage?: string;
  revisions?: string;
  warranty?: string;
  platforms?: string;
  support?: string;
  maintenance?: string;
  minimumTerm?: string;
  audienceSize?: string;
  maxParticipants?: string;
  sessionDuration?: string;
  platform?: string;
}

// Add interface for additional services
interface AdditionalService {
  name: string;
  price: number;
  billingCycle: string;
  description: string;
}



export interface ServicePricing {
  currency: string;
  packages: PricingPackage[];
 // customNote: string;
  // Optional additional services array for Equipment Sales
  additionalServices?: {
    name: string;
    price: number;
    billingCycle: string;
    description: string;
  }[];
}



// Make the service names more flexible - using Record instead of fixed interface
export type LanguagePricing = Record<string, ServicePricing>;

export interface PricingData {
  en: LanguagePricing;
  sw: LanguagePricing;
}

// Common service names that should exist in both languages
export const REQUIRED_SERVICES = [
  'Door to Door Sales',
  'Website & App Development',
  'Social Media Management',
  'Public Tender Services',
  'Equipment Sales',
  'Product & Service Branding'
] as const;

export type RequiredServiceName = typeof REQUIRED_SERVICES[number];

// Helper function to validate that both language versions have the same keys
export function validatePricingData(data: PricingData): {
  isValid: boolean;
  missingFromEn: string[];
  missingFromSw: string[];
  errors: string[];
} {
  const enKeys = Object.keys(data.en);
  const swKeys = Object.keys(data.sw);
  
  const missingFromEn = swKeys.filter(key => !enKeys.includes(key));
  const missingFromSw = enKeys.filter(key => !swKeys.includes(key));
  
  const errors: string[] = [];
  
  if (missingFromEn.length > 0) {
    errors.push(`Missing from English: ${missingFromEn.join(', ')}`);
  }
  
  if (missingFromSw.length > 0) {
    errors.push(`Missing from Swahili: ${missingFromSw.join(', ')}`);
  }
  
  // Check if all required services are present
  const missingRequiredEn = REQUIRED_SERVICES.filter(service => !enKeys.includes(service));
  const missingRequiredSw = REQUIRED_SERVICES.filter(service => !swKeys.includes(service));
  
  if (missingRequiredEn.length > 0) {
    errors.push(`Missing required services from English: ${missingRequiredEn.join(', ')}`);
  }
  
  if (missingRequiredSw.length > 0) {
    errors.push(`Missing required services from Swahili: ${missingRequiredSw.join(', ')}`);
  }
  
  return {
    isValid: errors.length === 0,
    missingFromEn,
    missingFromSw,
    errors
  };
}

// Type guard for checking if a service exists in pricing data
export function hasService(data: PricingData, serviceName: string, lang: 'en' | 'sw'): boolean {
  return serviceName in data[lang];
}

// Helper to get all available services for a language
export function getAvailableServices(data: PricingData, lang: 'en' | 'sw'): string[] {
  return Object.keys(data[lang]);
}




// Helper type for getting service names
//export type ServiceName = keyof LanguagePricing;



// CORRECTED: Type definitions for specific service categories to match actual data
export type ServiceCategory = 
  | 'Door to Door Sales'
  | 'Website & App Development'
  | 'Social Media Management'
  | 'Public Tender Services'
  | 'Equipment Sales'
  | 'Product & Service Branding';

export type LanguageCode = 'en' | 'sw';

export type Currency = 'USD' | 'TZS';

// Utility type for accessing specific package data
export type PackageData = {
  [K in ServiceCategory]: PricingPackage[];
};

// Helper interface for package validation
export interface PackageRequirements {
  hasMinimumTerm?: boolean;
  hasAudienceSize?: boolean;
  hasMaxParticipants?: boolean;
  hasSessionDuration?: boolean;
  hasPlatform?: boolean;
  hasCoverage?: boolean;
  hasRevisions?: boolean;
  hasWarranty?: boolean;
  hasPlatforms?: boolean;
  hasSupport?: boolean;
  hasMaintenance?: boolean;
}

export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface ContactInfo {
  email: string;
  phone?: string;
  address?: string;
  socialMedia?: {
    [key: string]: string;
  };
}

export interface LanguageData<T> {
  [languageCode: string]: T;
}

export interface WelcomeMessages {
  en: string;
  sw: string;
  [key: string]: string; // Add index signature
}

export interface ServiceKeywords {
  [service: string]: string[];
}

// Updated UIText interface to support nested objects
export interface UIText {
  [key: string]: string | {
    title?: string;
    instructions?: string;
    [key: string]: string | undefined;
  };
}


// Updated ContactInfo interface to include workingHours
export interface ContactInfo {
  email: string;
  phone?: string;
  address?: string;
  workingHours?: string; // Add this property
  socialMedia?: {
    [key: string]: string;
  };
}

// If you use the nested structure, your original code would work:
export const getBookingResponseWithNestedUI = (chatData: ChatbotData, language: string): string => {
  const contactInfo = chatData.getResponseByLang<ContactInfo>('contactInfo', language);
  const uiText = chatData.getResponseByLang<UIText>('ui', language);
  
  if (contactInfo) {
    // This would now work with the updated UIText interface
    const bookingTitle = (uiText?.booking as any)?.title || 
                        (language === 'sw' ? 'Jinsi ya Kuagiza Ushauri' : 'How to Book a Consultation');
    
    const bookingInstructions = (uiText?.booking as any)?.instructions || 
                               (language === 'sw' ? 'Kupanga ushauri, tafadhali:' : 'To schedule a consultation, please:');
    
    let response = `**${bookingTitle}**\n\n${bookingInstructions}\n\n`;
    
    // Rest of your implementation...
    
    return response;
  }
  
  // Fallback implementation...
  return '';
};

// Service description structure
export interface ServiceDescription {
  title: string;
  shortDescription?: string;
  fullDescription?: string;
  keyBenefits?: string[];
  deliveryFormats?: string[];
  duration?: string;
  targetAudience?: string;
}




// Service descriptions for each language
export interface ServiceDescriptions {
  [serviceName: string]: ServiceDescription;
}

// CORRECTED: Service names type for better type safety - UPDATED with your current products
export type ServiceName = 
  | 'Door to Door Sales'
  | 'Website & App Development'
  | 'Social Media Management'
  | 'Public Tender Services'
  | 'Equipment Sales'
  | 'Product & Service Branding';

// Specific type for default responses
export interface DefaultResponses {
  en: string;
  sw: string;
}

// Type for supported language codes
export type SupportedLanguage = 'en' | 'sw';

// Service descriptions data structure
export type ServiceDescriptionsData = LanguageData<ServiceDescriptions>;

// Alternative generic type that matches your data structure
export type WelcomeMessageData = LanguageData<string>;

// CORRECTED: Type guard to check if a language is supported
export function isSupportedLanguage(lang: string): lang is SupportedLanguage {
  return lang === 'en' || lang === 'sw';
}

// CORRECTED: Type guard to check if a service name is valid - UPDATED with your current products
export function isValidServiceName(name: string): name is ServiceName {
  const validServices: ServiceName[] = [
    'Door to Door Sales',
    'Website & App Development',
    'Social Media Management',
    'Public Tender Services',
    'Equipment Sales',
    'Product & Service Branding'
  ];
  return validServices.includes(name as ServiceName);
}

// CORRECTED: Main ChatbotData interface - updated to match your actual data structure
export interface ChatbotData {
  welcome: WelcomeMessages;
  defaultResponse: WelcomeMessages;
  prompts: LanguageData<string[]>;
  serviceKeywords: LanguageData<ServiceKeywords>;
  serviceDescriptions: LanguageData<ServiceDescriptions>;
  faqs: LanguageData<FAQ[]>;
  ui: LanguageData<UIText>;
  contactInfo: LanguageData<ContactInfo>;
  caseStudies: LanguageData<CaseStudy[]>;
  testimonials: LanguageData<Testimonial[]>;
  pricing: PricingData; // Correct type definition
  portfolio: LanguageData<PortfolioProject[]>;
  
  // Helper methods
  getResponseByLang<T>(key: keyof ChatbotData, lang?: string): T;
  findServiceByKeyword(keyword: string, lang?: string): string | null;
  getRelatedFAQs(service: string, lang?: string, limit?: number): FAQ[];
  getRelatedCaseStudies(service: string, lang?: string, limit?: number): CaseStudy[];
  getTestimonialsByService(service: string, lang?: string, limit?: number): Testimonial[];
}

// Export the main pricing data type
export declare const pricingData: PricingData;

// Utility types for easier access to pricing data
export type PricingPackagesByService<T extends ServiceCategory> = PricingData['en'][T]['packages'];
export type ServicePricingByLang<T extends ServiceCategory, L extends LanguageCode> = PricingData[L][T];

// Type helpers for working with pricing data
export function getPricingForService<T extends ServiceCategory>(
  service: T, 
  language: LanguageCode = 'en'
): ServicePricing {
  // Implementation would go here
  throw new Error('Implementation needed');
}

export function getPackagesByService<T extends ServiceCategory>(
  service: T, 
  language: LanguageCode = 'en'
): PricingPackage[] {
  // Implementation would go here
  throw new Error('Implementation needed');
}