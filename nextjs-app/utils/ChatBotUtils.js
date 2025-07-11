// app/utils/chatbotUtils.js

/**
 * Find matching service based on user message
 * @param {string} message - User message
 * @param {object} serviceKeywords - Keywords mapping for different services
 * @param {string} language - Current language
 * @returns {string|null} - Matching service title or null if no match
 */
export const findMatchingService = (message, serviceKeywords, language) => {
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
 * @param {string} serviceTitle - Title of the service
 * @param {object} chatData - Chatbot text data
 * @param {string} language - Current language
 * @returns {string} - Response message
 */
export const getServiceResponse = (serviceTitle, chatData, language) => {
  console.log('getServiceResponse called with:', { serviceTitle, language });
  
  if (!serviceTitle || !chatData || !language) {
    console.error('Missing required parameters:', { serviceTitle, chatData, language });
    return chatData?.defaultResponse?.[language] || 'Sorry, I could not process your request.';
  }

  if (chatData.serviceDescriptions && 
      chatData.serviceDescriptions[language] && 
      chatData.serviceDescriptions[language][serviceTitle]) {
    
    const service = chatData.serviceDescriptions[language][serviceTitle];
    
    // Build response with rich markdown formatting
    const sections = [];
    
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
    const details = [];
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
 * @param {string} message - User message
 * @param {object} faqs - FAQ data
 * @param {string} language - Current language
 * @returns {string|null} - FAQ answer or null if no match
 */
export const findFaqMatch = (message, faqs, language) => {
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
 * @param {string} message - User message
 * @param {string} language - Current language
 * @returns {boolean} - True if asking for contact info
 */
export const isAskingForContact = (message, language) => {
  if (!message) return false;
  
  const lowerMsg = message.toLowerCase();
  
  const contactKeywords = {
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
 * @param {object} contactInfo - Contact info data
 * @param {string} language - Current language
 * @returns {string} - Formatted contact info
 */
export const getContactResponse = (contactInfo, language) => {
  if (!contactInfo || !contactInfo[language]) {
    return 'Contact information is currently unavailable.';
  }

  const info = contactInfo[language];
  
  return `**Contact Information:**\n\n` +
    `📧 Email: ${info.email || 'N/A'}\n` +
    `📞 Phone: ${info.phone || 'N/A'}\n` +
    `📍 Address: ${info.address || 'N/A'}\n` +
    `🕓 Business Hours: ${info.hours || 'N/A'}`;
};

/**
 * Detect language from user message
 * @param {string} message - User message
 * @param {object} langKeywords - Language detection keywords
 * @param {string} currentLanguage - Current language (fallback)
 * @returns {string} - Detected language code (default: 'en')
 */
export const detectLanguage = (message, langKeywords = null, currentLanguage = 'en') => {
  if (!message || message.trim() === '') return currentLanguage;
  
  // Default language detection keywords if not provided
  const keywords = langKeywords || {
    sw: ['habari', 'jambo', 'nafanya', 'nini', 'asante', 'shikamoo', 'tafadhali', 
         'kuhusu', 'huduma', 'bei', 'gani', 'tovuti', 'msaada', 'wasiliana'],
    fr: ['bonjour', 'merci', 'comment', 'ça va', 'salut', 'au revoir', 'oui', 'non'],
    es: ['hola', 'gracias', 'cómo', 'buenos días', 'buenas tardes', 'sí', 'no', 'por favor'],
  };
  
  const lowerMsg = message.toLowerCase();
  
  // Check for keywords in each language
  for (const [lang, langKeywords] of Object.entries(keywords)) {
    if (langKeywords.some(keyword => lowerMsg.includes(keyword))) {
      return lang;
    }
  }
  
  // Default to current language
  return currentLanguage;
};

/**
 * Generate suggestions based on user interaction context
 * @param {string} serviceTitle - Current service being discussed
 * @param {object} chatData - Chatbot data
 * @param {string} language - Current language
 * @returns {Array} - List of suggestion prompts
 */
export const generateSuggestions = (serviceTitle, chatData, language) => {
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
 * @param {string} message - User message
 * @param {string} language - Current language
 * @returns {boolean} - True if asking about booking
 */
export const isBookingQuery = (message, language) => {
  if (!message) return false;
  
  const lowerMsg = message.toLowerCase();
  
  const bookingKeywords = {
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
 * @param {object} chatData - Chatbot data
 * @param {string} language - Current language
 * @returns {string} - Booking response
 */
export const getBookingResponse = (chatData, language) => {
  // Check if booking info exists in chatData
  if (chatData.booking && chatData.booking[language]) {
    const bookingInfo = chatData.booking[language];
    return `**${bookingInfo.title}**\n\n${bookingInfo.instructions}\n\n${bookingInfo.contactDetails}`;
  }
  
  // Default booking response for Future Holders
  const defaultBookingResponses = {
    en: `**How to Book a Consultation with Future Holders Company Limited**\n\n` +
         `To schedule a consultation, please:\n\n` +
         `📞 **Call us:** +255 123 456 789\n` +
         `📧 **Email:** info@futureholders.co.tz\n` +
         `🕒 **Office Hours:** Monday - Friday: 8:00 AM - 6:00 PM\n\n` +
         `Our team will help you find the best time to discuss your business needs and how we can help you grow.`,
    
    sw: `**Jinsi ya Kuagiza Ushauri na Future Holders Company Limited**\n\n` +
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
 * @param {string} message - User message
 * @param {string} language - Current language
 * @returns {boolean} - True if asking about pricing
 */
export const isPricingQuery = (message, language) => {
  if (!message) return false;
  
  const lowerMsg = message.toLowerCase();
  
  const pricingKeywords = {
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
 * @param {string} message - User message to detect specific service
 * @param {object} chatData - Chatbot data
 * @param {string} language - Current language
 * @returns {string} - Pricing response
 */
export const getPricingResponse = (message, chatData, language) => {
  // Try to find which service they're asking about
  const serviceMatch = findMatchingService(message, chatData.serviceKeywords, language);
  
  if (serviceMatch && chatData.pricing && chatData.pricing[language] && chatData.pricing[language][serviceMatch]) {
    const servicePricing = chatData.pricing[language][serviceMatch];
    
    let response = `**${serviceMatch} - Pricing Information**\n\n`;
    
    // Add packages
    if (servicePricing.packages && servicePricing.packages.length > 0) {
      servicePricing.packages.forEach((pkg, index) => {
        const popularBadge = pkg.popular ? ' ⭐ **POPULAR**' : '';
        response += `### ${pkg.name}${popularBadge}\n`;
        response += `💰 **${servicePricing.currency} ${pkg.price.toLocaleString()}** ${pkg.billingCycle}\n\n`;
        response += `${pkg.description}\n\n`;
        
        // Add key features (limit to 5 for brevity)
        if (pkg.features && pkg.features.length > 0) {
          response += `**Key Features:**\n`;
          pkg.features.slice(0, 5).forEach(feature => {
            response += `• ${feature}\n`;
          });
          if (pkg.features.length > 5) {
            response += `• ...and ${pkg.features.length - 5} more features\n`;
          }
        }
        
        response += '\n---\n\n';
      });
    }
    
    // Add custom note if available
    if (servicePricing.customNote) {
      response += `**Important Note:** ${servicePricing.customNote}\n\n`;
    }
    
    response += `For detailed quotes and customization, please contact us directly.`;
    
    return response;
  }
  
  // General pricing response if no specific service found
  const generalPricingResponse = {
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
 * @param {string} message - User message
 * @param {object} chatData - Chatbot data
 * @param {string} language - Current language
 * @returns {object} - Response object with text and suggestions
 */
export const processUserMessage = (message, chatData, language) => {
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
  const faqMatch = findFaqMatch(message, chatData.faqs, detectedLang);
  if (faqMatch) {
    console.log('FAQ match found');
    return {
      text: faqMatch,
      suggestions: generateSuggestions(null, chatData, detectedLang)
    };
  }
  
  // Check for service match
  const serviceMatch = findMatchingService(message, chatData.serviceKeywords, detectedLang);
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

// Make sure all functions are exported
export default {
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