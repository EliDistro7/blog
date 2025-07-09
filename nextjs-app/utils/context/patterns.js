/**
 * Future Holders Company Limited service detection patterns
 * Marketing agent company specializing in sales, digital solutions, and branding
 */

// Service detection patterns for Future Holders Company Limited
export const serviceDetectionPatterns = {
  'Door to Door Sales': {
    en: {
      keywords: ['door to door', 'direct sales', 'field sales', 'personal selling', 'face to face', 'home visits', 'residential sales', 'canvassing', 'direct marketing', 'sales representative', 'field agent'],
      patterns: [
        /\b(door\s+to\s+door|direct)\s+(sales|selling|marketing)\b/i,
        /\bfield\s+(sales|agent|representative|marketing)\b/i,
        /\bpersonal\s+(selling|sales|marketing)\b/i,
        /\b(face\s+to\s+face|in\s+person)\s+(sales|selling|marketing)\b/i,
        /\bhome\s+(visits|sales|marketing)\b/i,
        /\bresidential\s+(sales|marketing|canvassing)\b/i,
        /\bcanvassing\s+(services|sales|marketing)\b/i,
        /\bdirect\s+(marketing|sales)\s+(campaign|service)\b/i,
        /\bsales\s+(representative|agent|team)\s+(door|field|direct)\b/i
      ],
      negativePatterns: [
        /\b(online|digital|virtual|remote)\s+(sales|marketing)\b/i
      ]
    },
    sw: {
      keywords: ['mauzo ya nyumbani', 'mauzo ya moja kwa moja', 'mauzo ya uwandani', 'uuzaji wa kibinafsi', 'uso kwa uso', 'ziara za nyumbani', 'mauzo ya makazi', 'uuzaji wa moja kwa moja'],
      patterns: [
        /\bmauzo\s+ya\s+(nyumbani|mlangoni|moja\s+kwa\s+moja)\b/i,
        /\buuzaji\s+wa\s+(kibinafsi|uwandani|moja\s+kwa\s+moja)\b/i,
        /\buso\s+kwa\s+uso\s+(mauzo|uuzaji)\b/i,
        /\bziara\s+za\s+(nyumbani|mauzo)\b/i,
        /\bmauzo\s+ya\s+(makazi|mitaani)\b/i,
        /\bmwakilishi\s+wa\s+(mauzo|uuzaji)\b/i,
        /\bkampeni\s+ya\s+(mauzo|uuzaji)\s+ya\s+moja\s+kwa\s+moja\b/i
      ]
    }
  },
  'Website and Application Building': {
    en: {
      keywords: ['website', 'web development', 'application', 'app development', 'mobile app', 'web design', 'software development', 'e-commerce', 'cms', 'responsive design', 'ui/ux', 'frontend', 'backend'],
      patterns: [
        /\bwebsite\s+(development|building|creation|design)\b/i,
        /\bweb\s+(development|design|application|app)\b/i,
        /\b(mobile|android|ios)\s+(app|application)\s+(development|building)\b/i,
        /\bapplication\s+(development|building|creation)\b/i,
        /\be[\-\s]commerce\s+(website|platform|development)\b/i,
        /\bresponsive\s+(design|website|web)\b/i,
        /\b(ui|ux|user\s+interface|user\s+experience)\s+(design|development)\b/i,
        /\b(frontend|backend|full\s+stack)\s+(development|developer)\b/i,
        /\bcms\s+(development|customization|setup)\b/i,
        /\bsoftware\s+(development|solution|application)\b/i,
        /\bcustom\s+(website|application|software)\b/i
      ]
    },
    sw: {
      keywords: ['tovuti', 'maendeleo ya tovuti', 'programu', 'maendeleo ya programu', 'programu ya simu', 'muundo wa tovuti', 'maendeleo ya programu', 'biashara mtandaoni'],
      patterns: [
        /\btovuti\s+(maendeleo|ujenzi|uundaji|muundo)\b/i,
        /\bmaendeleo\s+ya\s+(tovuti|mtandao|programu)\b/i,
        /\bprogramu\s+ya\s+(simu|android|ios)\b/i,
        /\bprogramu\s+(maendeleo|ujenzi|uundaji)\b/i,
        /\bbiashara\s+mtandaoni\s+(tovuti|jukwaa)\b/i,
        /\bmuundo\s+wa\s+(tovuti|programu|mtumiaji)\b/i,
        /\bprogramu\s+maalum\s+(tovuti|simu)\b/i,
        /\bsuluhu\s+za\s+(programu|tovuti|teknolojia)\b/i
      ]
    }
  },
  'Social Media Management': {
    en: {
      keywords: ['social media', 'facebook', 'instagram', 'twitter', 'linkedin', 'tiktok', 'youtube', 'content creation', 'social media marketing', 'digital marketing', 'online presence', 'brand management', 'engagement'],
      patterns: [
        /\bsocial\s+media\s+(management|marketing|strategy|campaign)\b/i,
        /\b(facebook|instagram|twitter|linkedin|tiktok|youtube)\s+(management|marketing|advertising)\b/i,
        /\bcontent\s+(creation|marketing|strategy|management)\b/i,
        /\bdigital\s+(marketing|presence|strategy|campaign)\b/i,
        /\bonline\s+(presence|marketing|brand|reputation)\b/i,
        /\bbrand\s+(management|building|awareness)\s+(social|online|digital)\b/i,
        /\bsocial\s+(engagement|interaction|community)\s+(management|building)\b/i,
        /\binfluencer\s+(marketing|collaboration|management)\b/i,
        /\bpaid\s+(social|facebook|instagram|ads)\s+(campaign|advertising)\b/i,
        /\bsocial\s+media\s+(audit|analytics|reporting)\b/i
      ]
    },
    sw: {
      keywords: ['mitandao ya kijamii', 'facebook', 'instagram', 'twitter', 'linkedin', 'tiktok', 'youtube', 'uundaji wa maudhui', 'uuzaji wa mitandao', 'uuzaji wa kidijitali', 'uongozi wa chapa'],
      patterns: [
        /\bmitandao\s+ya\s+kijamii\s+(usimamizi|uuzaji|mkakati)\b/i,
        /\b(facebook|instagram|twitter|linkedin|tiktok|youtube)\s+(usimamizi|uuzaji|matangazo)\b/i,
        /\buundaji\s+wa\s+(maudhui|habari|picha)\b/i,
        /\buuzaji\s+wa\s+(kidijitali|mtandaoni|kijamii)\b/i,
        /\buwepo\s+wa\s+(mtandaoni|kidijitali)\b/i,
        /\busimamizi\s+wa\s+(chapa|biashara)\s+mtandaoni\b/i,
        /\bmatangazo\s+ya\s+(mitandao|kidijitali)\b/i,
        /\bkampeni\s+za\s+(mitandao|kidijitali)\b/i
      ]
    }
  },
  'Public Tender Searching and Application': {
    en: {
      keywords: ['tender', 'procurement', 'bid', 'government contract', 'public tender', 'tender search', 'tender application', 'proposal writing', 'contract bidding', 'rfp', 'request for proposal'],
      patterns: [
        /\b(public|government)\s+(tender|procurement|contract|bid)\b/i,
        /\btender\s+(search|hunting|application|submission|writing)\b/i,
        /\bprocurement\s+(opportunity|process|application|services)\b/i,
        /\bbid\s+(writing|preparation|submission|application)\b/i,
        /\bcontract\s+(bidding|application|procurement|opportunity)\b/i,
        /\b(rfp|request\s+for\s+proposal)\s+(writing|response|application)\b/i,
        /\bproposal\s+(writing|development|submission|preparation)\b/i,
        /\btendering\s+(process|services|support|assistance)\b/i,
        /\bgovernment\s+(contracts|opportunities|procurement)\b/i,
        /\bcompetitive\s+(bidding|tender|procurement)\b/i
      ]
    },
    sw: {
      keywords: ['zabuni', 'ununuzi', 'zabuni za umma', 'utafutaji wa zabuni', 'maombi ya zabuni', 'uandishi wa mapendekezo', 'zabuni za serikali', 'mkataba wa serikali'],
      patterns: [
        /\bzabuni\s+(za\s+umma|za\s+serikali|utafutaji|maombi)\b/i,
        /\bununuzi\s+(wa\s+umma|wa\s+serikali|fursa)\b/i,
        /\bmaombi\s+ya\s+(zabuni|mkataba|ununuzi)\b/i,
        /\buandishi\s+wa\s+(mapendekezo|zabuni|maombi)\b/i,
        /\bmkataba\s+wa\s+(serikali|umma|zabuni)\b/i,
        /\bkushindania\s+(zabuni|mkataba|ununuzi)\b/i,
        /\bfursa\s+za\s+(zabuni|ununuzi|mkataba)\b/i,
        /\bmsaada\s+wa\s+(zabuni|maombi|mapendekezo)\b/i
      ]
    }
  },
  'Equipment Sales': {
    en: {
      keywords: ['equipment', 'machinery', 'tools', 'hardware', 'industrial equipment', 'office equipment', 'medical equipment', 'construction equipment', 'technology equipment', 'electronics', 'supplies'],
      patterns: [
        /\bequipment\s+(sales|selling|supply|distribution)\b/i,
        /\bmachinery\s+(sales|selling|supply|equipment)\b/i,
        /\b(industrial|office|medical|construction|technology)\s+equipment\s+(sales|supply)\b/i,
        /\btools\s+(and\s+equipment|sales|supply|distribution)\b/i,
        /\bhardware\s+(sales|supply|equipment|solutions)\b/i,
        /\belectronics\s+(sales|equipment|supply|distribution)\b/i,
        /\bsupplies\s+(and\s+equipment|sales|distribution)\b/i,
        /\bequipment\s+(dealer|supplier|distributor|vendor)\b/i,
        /\bspecialized\s+(equipment|machinery|tools)\s+sales\b/i,
        /\btechnical\s+(equipment|solutions|supplies)\b/i
      ]
    },
    sw: {
      keywords: ['vifaa', 'mashine', 'zana', 'vifaa vya kiwanda', 'vifaa vya ofisi', 'vifaa vya matibabu', 'vifaa vya ujenzi', 'vifaa vya teknolojia', 'elektroniki'],
      patterns: [
        /\bvifaa\s+(mauzo|uuzaji|usambazaji|ugavi)\b/i,
        /\bmashine\s+(mauzo|uuzaji|ugavi)\b/i,
        /\b(kiwanda|ofisi|matibabu|ujenzi|teknolojia)\s+vifaa\s+(mauzo|ugavi)\b/i,
        /\bzana\s+(na\s+vifaa|mauzo|ugavi)\b/i,
        /\belektroniki\s+(mauzo|vifaa|ugavi)\b/i,
        /\bvifaa\s+(maalum|vya\s+kazi|vya\s+teknolojia)\b/i,
        /\bmuuzaji\s+wa\s+(vifaa|mashine|zana)\b/i,
        /\bmsambazaji\s+wa\s+(vifaa|mashine)\b/i
      ]
    }
  },
  'Product or Service Branding': {
    en: {
      keywords: ['branding', 'brand identity', 'logo design', 'brand strategy', 'marketing materials', 'brand development', 'corporate identity', 'visual identity', 'brand positioning', 'brand awareness', 'rebranding'],
      patterns: [
        /\bbrand(ing)?\s+(development|strategy|identity|design|creation)\b/i,
        /\blogo\s+(design|creation|development|branding)\b/i,
        /\bbrand\s+(positioning|awareness|recognition|building)\b/i,
        /\b(corporate|visual|brand)\s+identity\s+(design|development|creation)\b/i,
        /\bmarketing\s+(materials|collateral|design|branding)\b/i,
        /\bbrand\s+(messaging|voice|personality|guidelines)\b/i,
        /\brebranding\s+(services|project|strategy|design)\b/i,
        /\bproduct\s+(branding|positioning|identity|marketing)\b/i,
        /\bservice\s+(branding|positioning|marketing|identity)\b/i,
        /\bbrand\s+(consultation|consulting|advisory)\b/i,
        /\bprint\s+(design|materials|branding|marketing)\b/i
      ]
    },
    sw: {
      keywords: ['uwekaji chapa', 'utambulisho wa chapa', 'muundo wa nembo', 'mkakati wa chapa', 'nyenzo za uuzaji', 'maendeleo ya chapa', 'utambulisho wa shirika', 'utambulisho wa kuona'],
      patterns: [
        /\buwekaji\s+chapa\s+(maendeleo|mkakati|muundo)\b/i,
        /\bchapa\s+(utambulisho|ujenzi|maendeleo|mkakati)\b/i,
        /\bmuundo\s+wa\s+(nembo|chapa|utambulisho)\b/i,
        /\butambulisho\s+wa\s+(shirika|chapa|biashara)\b/i,
        /\bnyenzo\s+za\s+(uuzaji|matangazo|chapa)\b/i,
        /\bchapa\s+(ujumbe|sauti|uongozi)\b/i,
        /\bbidhaa\s+(chapa|uuzaji|utambulisho)\b/i,
        /\bhuduma\s+(chapa|uuzaji|utambulisho)\b/i,
        /\bchapa\s+(ushauri|mshauri|uongozi)\b/i,
        /\bmuundo\s+wa\s+(matangazo|uuzaji|chapa)\b/i
      ]
    }
  }
};