// app/data/index.ts
// Main entry point for chatbot data

import { welcomeMessages } from './welcomeMessages';
import { defaultResponses } from './defaultResponses';
import { quickPrompts } from './quickPrompts';
import { serviceKeywords } from './serviceKeywords';
import { serviceDescriptions } from './serviceDescriptions';
import { faqs } from './faqs';
import { uiText } from './uiText';
import { contactInfo } from './contactInfo';
import { caseStudies } from './caseStudies';
import { testimonials } from './testimonials';
import { pricingData } from './pricingData';
import { portfolioProjects } from './portfolioProjects';

import type {
  FAQ,
  CaseStudy,
  Testimonial,
  PricingTier,
  PricingData,
  PortfolioProject,
  ContactInfo,
  LanguageData,
  WelcomeMessages,
  ServiceKeywords,
  ServiceDescriptions,
  UIText
} from './types';

// Type-only interface definition
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
  pricing: PricingData;
  portfolio: PortfolioProject[];
  
  // Helper methods
  getResponseByLang<T>(key: keyof Omit<ChatbotData, 'getResponseByLang' | 'findServiceByKeyword' | 'getRelatedFAQs' | 'getRelatedCaseStudies' | 'getTestimonialsByService'>, lang?: string): T;
  findServiceByKeyword(keyword: string, lang?: string): string | null;
  getRelatedFAQs(service: string, lang?: string, limit?: number): FAQ[];
  getRelatedCaseStudies(service: string, lang?: string, limit?: number): CaseStudy[];
  getTestimonialsByService(service: string, lang?: string, limit?: number): Testimonial[];
}

// Actual data implementation
export const chatBotData: ChatbotData = {
  welcome: welcomeMessages,
  defaultResponse: defaultResponses,
  prompts: quickPrompts,
  serviceKeywords: serviceKeywords,
  serviceDescriptions: serviceDescriptions,
  faqs: faqs,
  ui: uiText,
  contactInfo: contactInfo,
  caseStudies: caseStudies,
  testimonials: testimonials,
  pricing: pricingData,
  portfolio: portfolioProjects,
  
  // Helper method implementations
  getResponseByLang<T>(key: keyof Omit<ChatbotData, 'getResponseByLang' | 'findServiceByKeyword' | 'getRelatedFAQs' | 'getRelatedCaseStudies' | 'getTestimonialsByService'>, lang: string = 'en'): T {
    const data = this[key] as any;
    
    // Handle different data structures
    if (data && typeof data === 'object') {
      // For LanguageData structure
      if (data[lang]) {
        return data[lang] as T;
      }
      // For WelcomeMessages structure
      if (data.messages && data.messages[lang]) {
        return data.messages[lang] as T;
      }
      // For PricingData structure
      if (key === 'pricing' && data.tiers) {
        return data as T;
      }
    }
    
    // Fallback to English or return as-is
    return (data?.en || data?.messages?.en || data) as T;
  },

  findServiceByKeyword(keyword: string, lang: string = 'en'): string | null {
    const keywords = this.getResponseByLang<ServiceKeywords>('serviceKeywords', lang);
    if (!keywords) return null;
    
    const lowerKeyword = keyword.toLowerCase();
    
    // Search through all service categories
    for (const [service, serviceKeywords] of Object.entries(keywords)) {
      if (serviceKeywords.some(kw => kw.toLowerCase().includes(lowerKeyword))) {
        return service;
      }
    }
    
    return null;
  },

  getRelatedFAQs(service: string, lang: string = 'en', limit: number = 3): FAQ[] {
    const allFaqs = this.getResponseByLang<FAQ[]>('faqs', lang);
    if (!allFaqs) return [];
    
    const relatedFaqs = allFaqs.filter(faq => 
     // faq.category?.toLowerCase() === service.toLowerCase() ||
      faq.question.toLowerCase().includes(service.toLowerCase()) ||
      faq.answer.toLowerCase().includes(service.toLowerCase())
    );
    
    return relatedFaqs.slice(0, limit);
  },

  getRelatedCaseStudies(service: string, lang: string = 'en', limit: number = 2): CaseStudy[] {
    const allCaseStudies = this.getResponseByLang<CaseStudy[]>('caseStudies', lang);
    if (!allCaseStudies) return [];
    
    const relatedCaseStudies = allCaseStudies.filter(caseStudy =>
      caseStudy.category?.toLowerCase() === service.toLowerCase() ||
      caseStudy.title.toLowerCase().includes(service.toLowerCase()) ||
      caseStudy.solution.toLowerCase().includes(service.toLowerCase()) ||
      caseStudy.services.some(s => s.toLowerCase().includes(service.toLowerCase()))
    );
    
    return relatedCaseStudies.slice(0, limit);
  },

  getTestimonialsByService(service: string, lang: string = 'en', limit: number = 2): Testimonial[] {
    const allTestimonials = this.getResponseByLang<Testimonial[]>('testimonials', lang);
    if (!allTestimonials) return [];
    
    const relatedTestimonials = allTestimonials.filter(testimonial =>
      testimonial.services[0]?.toLowerCase() === service.toLowerCase() ||
      testimonial.company.toLowerCase().includes(service.toLowerCase())
    );
    
    return relatedTestimonials.slice(0, limit);
  }
};



// Export individual data modules for direct access if needed
export {
  welcomeMessages,
  defaultResponses,
  quickPrompts,
  serviceKeywords,
  serviceDescriptions,
  faqs,
  uiText,
  contactInfo,
  caseStudies,
  testimonials,
  pricingData,
  portfolioProjects
};

// Export types for external use
export type {
  FAQ,
  CaseStudy,
  Testimonial,
  PricingTier,
  PricingData,
  PortfolioProject,
  ContactInfo,
  LanguageData,
  WelcomeMessages,
  ServiceKeywords,
  ServiceDescriptions,
  UIText
};