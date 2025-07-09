// utils/suggestionEngine.js
import { serviceDescriptions } from '@/data/chat/serviceDescriptions';

/**
 * Smart Suggestion Engine for Future Holders ChatBot
 * Generates contextual, intelligent suggestions based on conversation state,
 * user intent, service context, and conversation depth
 */

// Core service mappings for Future Holders services
const SERVICE_CATEGORIES = {
  'Door to Door Sales': ['sales', 'marketing', 'direct-sales', 'field-marketing', 'customer-outreach'],
  'Website & App Development': ['website', 'application', 'web-development', 'app-development', 'digital-solutions'],
  'Social Media Management': ['social-media', 'facebook', 'instagram', 'twitter', 'content-creation', 'digital-marketing'],
  'Public Tender Services': ['tender', 'procurement', 'bidding', 'government-contracts', 'tender-search'],
  'Equipment Sales': ['equipment', 'machinery', 'tools', 'hardware', 'supplies', 'product-sales'],
  'Product & Service Branding': ['branding', 'logo-design', 'brand-identity', 'marketing-materials', 'brand-strategy']
};

// Intent patterns for better suggestion matching
const INTENT_PATTERNS = {
  pricing: ['price', 'cost', 'fee', 'rate', 'budget', 'investment', 'pricing', 'bei', 'gharama', 'kiasi'],
  duration: ['time', 'long', 'duration', 'period', 'schedule', 'deadline', 'muda', 'mrefu', 'haraka'],
  process: ['how', 'process', 'steps', 'approach', 'method', 'procedure', 'jinsi', 'namna', 'utaratibu'],
  benefits: ['benefit', 'advantage', 'value', 'outcome', 'result', 'success', 'faida', 'manufaa', 'matokeo'],
  comparison: ['compare', 'difference', 'versus', 'vs', 'alternative', 'competitors', 'linganisha', 'tofauti'],
  customization: ['custom', 'tailor', 'specific', 'personalize', 'unique', 'maalum', 'mahsusi', 'kipekee'],
  contact: ['contact', 'reach', 'speak', 'call', 'email', 'meet', 'wasiliana', 'piga', 'kutana'],
  location: ['where', 'location', 'venue', 'place', 'office', 'address', 'wapi', 'mahali', 'ofisi'],
  portfolio: ['portfolio', 'examples', 'work', 'projects', 'samples', 'mifano', 'kazi', 'miradi'],
  experience: ['experience', 'years', 'expertise', 'qualified', 'uzoefu', 'miaka', 'ujuzi']
};

// Conversation depth-based suggestion strategies
const DEPTH_STRATEGIES = {
  initial: 'discovery', // Help user explore services
  shallow: 'exploration', // Dive deeper into specific areas
  moderate: 'specification', // Get specific about requirements
  deep: 'conversion', // Move towards action/contact
  expert: 'consultation' // Advanced questions and next steps
};

/**
 * Generate intelligent suggestions based on conversation context
 */
export const generateSmartSuggestions = (
  serviceContext,
  conversationDepth = 0,
  language = 'en',
  lastUserMessage = '',
  chatMessages = [],
  availableServices = []
) => {
  try {
    const suggestions = [];
    const currentService = serviceContext?.currentService;
    const serviceHistory = serviceContext?.serviceHistory || [];
    
    // Determine conversation strategy based on depth
    const strategy = getConversationStrategy(conversationDepth);
    
    // Analyze user intent from last message
    const detectedIntent = analyzeUserIntent(lastUserMessage, language);
    
    // Generate suggestions based on current context
    if (currentService) {
      // Service-specific suggestions
      suggestions.push(...generateServiceSpecificSuggestions(
        currentService, 
        strategy, 
        detectedIntent, 
        language,
        conversationDepth
      ));
    } else {
      // General discovery suggestions
      suggestions.push(...generateDiscoverySuggestions(
        serviceHistory, 
        language,
        detectedIntent
      ));
    }
    
    // Add cross-selling suggestions if appropriate
    if (strategy === 'specification' || strategy === 'conversion') {
      suggestions.push(...generateCrossSellingSuggestions(
        currentService, 
        serviceHistory, 
        language
      ));
    }
    
    // Add action-oriented suggestions for deep conversations
    if (conversationDepth > 5) {
      suggestions.push(...generateActionSuggestions(language, currentService));
    }
    
    // Ensure variety and limit suggestions
    const finalSuggestions = diversifySuggestions(suggestions, 4);
    
    return finalSuggestions.length > 0 ? finalSuggestions : getDefaultSuggestions(language);
    
  } catch (error) {
    console.warn('Error generating smart suggestions:', error);
    return getDefaultSuggestions(language);
  }
};

/**
 * Generate service-specific contextual suggestions
 */
const generateServiceSpecificSuggestions = (
  serviceName, 
  strategy, 
  detectedIntent, 
  language,
  conversationDepth
) => {
  const suggestions = [];
  const serviceData = serviceDescriptions[language]?.[serviceName];
  
  if (!serviceData) return suggestions;
  
  // Intent-based suggestions
  switch (detectedIntent.primary) {
    case 'pricing':
      suggestions.push(
        language === 'sw' 
          ? `Bei za ${serviceName} ni ngapi?`
          : `What are the costs for ${serviceName}?`,
        language === 'sw'
          ? `Je, mna packages tofauti za bei?`
          : `Do you have different pricing packages?`
      );
      break;
      
    case 'duration':
      suggestions.push(
        language === 'sw'
          ? `${serviceName} inachukua muda gani?`
          : `How long does ${serviceName} take?`,
        language === 'sw'
          ? `Je, mnaweza kukamilisha haraka?`
          : `Can you complete it quickly?`
      );
      break;
      
    case 'process':
      suggestions.push(
        language === 'sw'
          ? `${serviceName} inafanyaje?`
          : `How does ${serviceName} work?`,
        language === 'sw'
          ? `Ni hatua zipi za kufuata?`
          : `What are the steps to follow?`
      );
      break;
      
    case 'benefits':
      suggestions.push(
        language === 'sw'
          ? `Nini faida za ${serviceName}?`
          : `What are the benefits of ${serviceName}?`,
        language === 'sw'
          ? `Nitapata matokeo gani?`
          : `What results can I expect?`
      );
      break;
      
    case 'portfolio':
      suggestions.push(
        language === 'sw'
          ? `Naomba kuona mifano ya ${serviceName}`
          : `I want to see examples of ${serviceName}`,
        language === 'sw'
          ? `Je, mna portfolio ya kazi mliyofanya?`
          : `Do you have a portfolio of your work?`
      );
      break;
  }
  
  // Strategy-based suggestions
  switch (strategy) {
    case 'exploration':
      suggestions.push(
        language === 'sw'
          ? `Eleza zaidi kuhusu ${serviceName}`
          : `Tell me more about ${serviceName}`,
        language === 'sw'
          ? `Ni nani anayefaa kwa ${serviceName}?`
          : `Who is ${serviceName} suitable for?`
      );
      break;
      
    case 'specification':
      suggestions.push(
        language === 'sw'
          ? `Je, mnaweza kurekebisha ${serviceName} kwa mahitaji yangu?`
          : `Can you customize ${serviceName} for my needs?`,
        language === 'sw'
          ? `Nina biashara ndogo, mnawezaje kunisaidia?`
          : `I have a small business, how can you help me?`
      );
      break;
      
    case 'conversion':
      suggestions.push(
        language === 'sw'
          ? `Ningewezaje kuanza ${serviceName}?`
          : `How can I get started with ${serviceName}?`,
        language === 'sw'
          ? `Nataka kutayarisha mkutano`
          : `I want to schedule a meeting`
      );
      break;
  }
  
  // Service-specific deep questions
  if (conversationDepth > 3) {
    switch (serviceName) {
      case 'Door to Door Sales':
        suggestions.push(
          language === 'sw'
            ? `Je, mna timu ya wauuzaji wenye uzoefu?`
            : `Do you have experienced sales team?`,
          language === 'sw'
            ? `Mnaweza kuuza bidhaa zangu eneo gani?`
            : `Which areas can you sell my products?`
        );
        break;
        
      case 'Website & App Development':
        suggestions.push(
          language === 'sw'
            ? `Je, mnaunda website za e-commerce?`
            : `Do you build e-commerce websites?`,
          language === 'sw'
            ? `Ni teknolojia gani mnatumia?`
            : `What technologies do you use?`
        );
        break;
        
      case 'Social Media Management':
        suggestions.push(
          language === 'sw'
            ? `Je, mnaweza kuongeza followers?`
            : `Can you increase my followers?`,
          language === 'sw'
            ? `Mnaandika content gani?`
            : `What kind of content do you create?`
        );
        break;
        
      case 'Public Tender Services':
        suggestions.push(
          language === 'sw'
            ? `Je, mnasaidia kuandika tender proposals?`
            : `Do you help write tender proposals?`,
          language === 'sw'
            ? `Ni tender za aina gani mnazitafuta?`
            : `What types of tenders do you search for?`
        );
        break;
        
      case 'Equipment Sales':
        suggestions.push(
          language === 'sw'
            ? `Je, mna warranty kwa vifaa?`
            : `Do you provide warranty for equipment?`,
          language === 'sw'
            ? `Mnauza vifaa vya aina gani?`
            : `What types of equipment do you sell?`
        );
        break;
        
      case 'Product & Service Branding':
        suggestions.push(
          language === 'sw'
            ? `Je, mnaunda logo za kibinafsi?`
            : `Do you create custom logos?`,
          language === 'sw'
            ? `Branding yangu itakuwa unique vipi?`
            : `How will my branding be unique?`
        );
        break;
    }
  }
  
  return suggestions;
};

/**
 * Generate discovery suggestions for new conversations
 */
const generateDiscoverySuggestions = (serviceHistory, language, detectedIntent) => {
  const suggestions = [];
  const exploredServices = new Set(serviceHistory);
  
  // Popular service suggestions
  const popularServices = [
    'Website & App Development',
    'Social Media Management',
    'Door to Door Sales',
    'Product & Service Branding'
  ];
  
  // Filter out already explored services
  const unexploredServices = popularServices.filter(
    service => !exploredServices.has(service)
  );
  
  // Add service exploration suggestions
  unexploredServices.slice(0, 2).forEach(service => {
    suggestions.push(
      language === 'sw'
        ? `Niambie kuhusu ${service}`
        : `Tell me about ${service}`
    );
  });
  
  // Add general exploration suggestions
  suggestions.push(
    language === 'sw'
      ? 'Ni huduma gani Future Holders inatoa?'
      : 'What services does Future Holders offer?',
    language === 'sw'
      ? 'Ninaweza kupata msaada gani?'
      : 'How can you help me?',
    language === 'sw'
      ? 'Nataka kujua bei za huduma'
      : 'I want to know about pricing',
    language === 'sw'
      ? 'Je, mna ofisi wapi?'
      : 'Where is your office located?'
  );
  
  return suggestions;
};

/**
 * Generate cross-selling suggestions
 */
const generateCrossSellingSuggestions = (currentService, serviceHistory, language) => {
  const suggestions = [];
  
  // Service combinations that work well together
  const serviceCombinations = {
    'Door to Door Sales': ['Product & Service Branding', 'Social Media Management', 'Equipment Sales'],
    'Website & App Development': ['Social Media Management', 'Product & Service Branding', 'Door to Door Sales'],
    'Social Media Management': ['Website & App Development', 'Product & Service Branding', 'Door to Door Sales'],
    'Public Tender Services': ['Website & App Development', 'Product & Service Branding', 'Equipment Sales'],
    'Equipment Sales': ['Door to Door Sales', 'Product & Service Branding', 'Website & App Development'],
    'Product & Service Branding': ['Website & App Development', 'Social Media Management', 'Door to Door Sales']
  };
  
  const relatedServices = serviceCombinations[currentService] || [];
  const unexploredRelated = relatedServices.filter(
    service => !serviceHistory.includes(service)
  );
  
  if (unexploredRelated.length > 0) {
    const relatedService = unexploredRelated[0];
    suggestions.push(
      language === 'sw'
        ? `${relatedService} inawezaje kusaidia pamoja na ${currentService}?`
        : `How can ${relatedService} help along with ${currentService}?`,
      language === 'sw'
        ? `Je, ${relatedService} ingaongeza thamani?`
        : `Would ${relatedService} add value?`
    );
  }
  
  return suggestions;
};

/**
 * Generate action-oriented suggestions for deep conversations
 */
const generateActionSuggestions = (language, currentService) => {
  const suggestions = [];
  
  suggestions.push(
    language === 'sw'
      ? 'Nataka kuongea na mkuu wa huduma'
      : 'I want to speak with a service manager',
    language === 'sw'
      ? 'Ninaweza kupata quotation?'
      : 'Can I get a quotation?',
    language === 'sw'
      ? 'Tuanze mkutano wa kujadili'
      : 'Let\'s schedule a consultation',
    language === 'sw'
      ? 'Je, mnaweza kutembelea ofisi yangu?'
      : 'Can you visit my office?'
  );
  
  if (currentService) {
    suggestions.push(
      language === 'sw'
        ? `Natayari kuanza ${currentService}`
        : `I'm ready to start ${currentService}`
    );
  }
  
  return suggestions;
};

/**
 * Analyze user intent from message
 */
const analyzeUserIntent = (message, language) => {
  const intent = {
    primary: 'general',
    confidence: 0,
    keywords: []
  };
  
  if (!message) return intent;
  
  const messageLower = message.toLowerCase();
  
  // Check each intent pattern
  for (const [intentName, patterns] of Object.entries(INTENT_PATTERNS)) {
    const matchingPatterns = patterns.filter(pattern => 
      messageLower.includes(pattern.toLowerCase())
    );
    
    if (matchingPatterns.length > 0) {
      const confidence = matchingPatterns.length / patterns.length;
      if (confidence > intent.confidence) {
        intent.primary = intentName;
        intent.confidence = confidence;
        intent.keywords = matchingPatterns;
      }
    }
  }
  
  return intent;
};

/**
 * Determine conversation strategy based on depth
 */
const getConversationStrategy = (depth) => {
  if (depth === 0) return 'discovery';
  if (depth <= 2) return 'exploration';
  if (depth <= 4) return 'specification';
  if (depth <= 7) return 'conversion';
  return 'consultation';
};

/**
 * Diversify suggestions to avoid repetition
 */
const diversifySuggestions = (suggestions, limit = 4) => {
  // Remove duplicates
  const uniqueSuggestions = [...new Set(suggestions)];
  
  // Shuffle and limit
  const shuffled = uniqueSuggestions.sort(() => 0.5 - Math.random());
  
  return shuffled.slice(0, limit);
};

/**
 * Get default fallback suggestions
 */
const getDefaultSuggestions = (language) => {
  return language === 'sw' ? [
    'Ni huduma gani Future Holders inatoa?',
    'Nataka kujua bei za huduma',
    'Mnafanyaje kazi?',
    'Naomba maelezo zaidi',
    'Je, mna ofisi wapi?'
  ] : [
    'What services does Future Holders offer?',
    'I want to know about pricing',
    'How do you work?',
    'I need more information',
    'Where is your office located?'
  ];
};

/**
 * Generate suggestions based on conversation context and user behavior
 */
export const generateContextualSuggestions = (
  currentService,
  conversationDepth,
  language,
  serviceContext,
  userPreferences = {}
) => {
  return generateSmartSuggestions(
    serviceContext,
    conversationDepth,
    language,
    '',
    [],
    []
  );
};

/**
 * Generate follow-up suggestions after bot response
 */
export const generateFollowUpSuggestions = (
  botResponse,
  currentService,
  language,
  conversationDepth
) => {
  const suggestions = [];
  
  // Analyze bot response to generate relevant follow-ups
  const responseLower = botResponse.toLowerCase();
  
  if (responseLower.includes('price') || responseLower.includes('cost') || responseLower.includes('bei')) {
    suggestions.push(
      language === 'sw'
        ? 'Je, mna package deals?'
        : 'Do you have package deals?',
      language === 'sw'
        ? 'Mnakubali malipo kwa awamu?'
        : 'Do you accept installment payments?'
    );
  }
  
  if (responseLower.includes('website') || responseLower.includes('app') || responseLower.includes('digital')) {
    suggestions.push(
      language === 'sw'
        ? 'Je, mnaunda mobile apps pia?'
        : 'Do you also build mobile apps?',
      language === 'sw'
        ? 'Ni muda gani wa kumaliza website?'
        : 'How long does it take to complete a website?'
    );
  }
  
  if (responseLower.includes('social media') || responseLower.includes('facebook') || responseLower.includes('instagram')) {
    suggestions.push(
      language === 'sw'
        ? 'Je, mnaweza kuongeza engagement?'
        : 'Can you increase engagement?',
      language === 'sw'
        ? 'Ni platforms gani mnashughulikia?'
        : 'Which platforms do you handle?'
    );
  }
  
  return suggestions.length > 0 ? suggestions : getDefaultSuggestions(language);
};

/**
 * Generate business-type specific suggestions
 */
export const generateBusinessTypeSuggestions = (businessType, language) => {
  const businessMappings = {
    'retail': ['Door to Door Sales', 'Social Media Management', 'Product & Service Branding'],
    'manufacturing': ['Equipment Sales', 'Door to Door Sales', 'Public Tender Services'],
    'service': ['Website & App Development', 'Social Media Management', 'Product & Service Branding'],
    'startup': ['Website & App Development', 'Product & Service Branding', 'Social Media Management'],
    'restaurant': ['Social Media Management', 'Product & Service Branding', 'Door to Door Sales'],
    'healthcare': ['Website & App Development', 'Social Media Management', 'Equipment Sales'],
    'education': ['Website & App Development', 'Social Media Management', 'Equipment Sales']
  };
  
  const relevantServices = businessMappings[businessType?.toLowerCase()] || [];
  
  return relevantServices.map(service => 
    language === 'sw'
      ? `Niambie kuhusu ${service} kwa ${businessType}`
      : `Tell me about ${service} for ${businessType}`
  );
};

/**
 * Export all utility functions
 */
export {
  SERVICE_CATEGORIES,
  INTENT_PATTERNS,
  DEPTH_STRATEGIES,
  analyzeUserIntent,
  getConversationStrategy,
  diversifySuggestions,
  getDefaultSuggestions
};