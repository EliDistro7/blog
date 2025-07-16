import { 
  Instagram, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Youtube, 
  TicketIcon as TikTok,
  TrendingUp, 
  Users, 
  BarChart3, 
  Target, 
  Camera, 
  Video, 
  Edit3, 
  MessageCircle,
  Heart,
  Share2,
  Eye,
  Calendar,
  Clock,
  Zap,
  Award,
  Smartphone,
  Monitor,
  Palette,
  Megaphone,
  Lightbulb,
  CheckCircle,
  Building,
  ShoppingBag,
  Stethoscope,
  GraduationCap,
  Home,
  Car,
  Utensils,
  Dumbbell,
  Shirt,
  Coffee,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Quote,
  Shield,
  Globe,
  Search,
  PlayCircle,
  Image,
  FileText,
  Mic,
  Settings,
  Crown,
  Sparkles
} from 'lucide-react';

export const heroStats = [
  {
    number: "98%",
    label: { en: "Client Satisfaction", sw: "Kuridhika kwa Wateja" }
  },
  {
    number: "2M+",
    label: { en: "Followers Generated", sw: "Wafuasi Waliozalishwa" }
  },
  {
    number: "300+",
    label: { en: "Brands Managed", sw: "Brands Zilizodhibitiwa" }
  },
  {
    number: "24/7",
    label: { en: "Content Support", sw: "Msaada wa Maudhui" }
  }
];

export const services = [
  {
    icon: Calendar,
    title: { en: "Content Planning & Creation", sw: "Upangaji na Uundaji wa Maudhui" },
    description: { en: "Strategic content calendar with high-quality posts, stories, and campaigns tailored to your brand", sw: "Kalenda ya maudhui ya kimkakati yenye machapisho ya ubora wa juu, hadithi, na kampeni zilizofanywa kwa brand yako" }
  },
  {
    icon: Users,
    title: { en: "Community Management", sw: "Uongozi wa Jumuiya" },
    description: { en: "Engage with your audience, respond to comments, and build meaningful relationships with followers", sw: "Shirikiana na watazamaji wako, jibu maoni, na kujenga mahusiano muhimu na wafuasi" }
  },
  {
    icon: BarChart3,
    title: { en: "Analytics & Reporting", sw: "Uchanganuzi na Uripoti" },
    description: { en: "Detailed performance metrics, insights, and monthly reports to track your social media growth", sw: "Vipimo vya utendaji wa kina, maarifa, na ripoti za kila mwezi kufuatilia ukuaji wa mitandao ya kijamii" }
  },
  {
    icon: Megaphone,
    title: { en: "Paid Advertising", sw: "Matangazo ya Kulipwa" },
    description: { en: "Targeted social media ads to increase reach, drive traffic, and generate leads for your business", sw: "Matangazo ya mitandao ya kijamii yaliyolengwa kuongeza ufikaji, kuongoza trafiki, na kupata viongozi kwa biashara yako" }
  },
  {
    icon: Camera,
    title: { en: "Visual Content Creation", sw: "Uundaji wa Maudhui ya Kuona" },
    description: { en: "Professional photography, graphic design, and video content to make your brand stand out", sw: "Upigaji picha wa kitaalamu, muundo wa michoro, na maudhui ya video kufanya brand yako ionekane" }
  },
  {
    icon: TrendingUp,
    title: { en: "Influencer Marketing", sw: "Uuzaji wa Washawishi" },
    description: { en: "Connect with relevant influencers to amplify your brand message and reach new audiences", sw: "Unganisha na washawishi husika kupanua ujumbe wa brand yako na kufikia watazamaji wapya" }
  }
];

export const process = [
  {
    step: "01",
    title: { en: "Brand Analysis", sw: "Uchanganuzi wa Brand" },
    description: { en: "We analyze your brand identity, target audience, and competitive landscape to create a winning strategy", sw: "Tunachanganua utambulisho wa brand yako, watazamaji wa lengo, na mazingira ya ushindani kuunda mkakati wa kushinda" }
  },
  {
    step: "02",
    title: { en: "Strategy Development", sw: "Uundaji wa Mkakati" },
    description: { en: "Custom social media strategy with platform-specific approaches and content pillars", sw: "Mkakati wa kipekee wa mitandao ya kijamii na mbinu za kijukwaa na nguzo za maudhui" }
  },
  {
    step: "03",
    title: { en: "Content Production", sw: "Uzalishaji wa Maudhui" },
    description: { en: "Creating engaging content including posts, stories, videos, and graphics aligned with your brand", sw: "Kuunda maudhui ya kuvutia ikiwa ni pamoja na machapisho, hadithi, video, na michoro inayolingana na brand yako" }
  },
  {
    step: "04",
    title: { en: "Publishing & Engagement", sw: "Uchapishaji na Ushirikiano" },
    description: { en: "Consistent posting schedule with active community management and real-time engagement", sw: "Ratiba ya uthabiti ya kuchapisha na uongozi wa jumuiya na ushirikiano wa wakati halisi" }
  },
  {
    step: "05",
    title: { en: "Performance Optimization", sw: "Kuboresha Utendaji" },
    description: { en: "Continuous monitoring, analysis, and optimization based on performance data and insights", sw: "Ufuatiliaji wa kuendelea, uchanganuzi, na kuboresha kulingana na data ya utendaji na maarifa" }
  }
];

export const platforms = [
  {
    name: "Instagram",
    icon: Instagram,
    color: "bg-gradient-to-r from-purple-500 to-pink-500",
    features: [
      { en: "Feed Posts & Stories", sw: "Machapisho ya Mlisho na Hadithi" },
      { en: "Reels & IGTV", sw: "Reels na IGTV" },
      { en: "Shopping Integration", sw: "Mshikamano wa Ununuzi" },
      { en: "Influencer Collaborations", sw: "Ushirikiano wa Washawishi" }
    ]
  },
  {
    name: "Facebook",
    icon: Facebook,
    color: "bg-blue-600",
    features: [
      { en: "Page Management", sw: "Uongozi wa Ukurasa" },
      { en: "Event Promotion", sw: "Uongozaji wa Matukio" },
      { en: "Community Groups", sw: "Vikundi vya Jumuiya" },
      { en: "Facebook Ads", sw: "Matangazo ya Facebook" }
    ]
  },
  {
    name: "TikTok",
    icon: TikTok,
    color: "bg-black",
    features: [
      { en: "Viral Video Content", sw: "Maudhui ya Video ya Viral" },
      { en: "Trend Participation", sw: "Ushiriki wa Mienendo" },
      { en: "Creator Partnerships", sw: "Ushirikiano wa Waundaji" },
      { en: "Live Streaming", sw: "Kutangaza Moja kwa Moja" }
    ]
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    color: "bg-blue-700",
    features: [
      { en: "Professional Content", sw: "Maudhui ya Kitaalamu" },
      { en: "Thought Leadership", sw: "Uongozi wa Mawazo" },
      { en: "B2B Networking", sw: "Mtandao wa B2B" },
      { en: "Industry Articles", sw: "Makala za Sekta" }
    ]
  },
  {
    name: "YouTube",
    icon: Youtube,
    color: "bg-red-600",
    features: [
      { en: "Video Production", sw: "Uzalishaji wa Video" },
      { en: "Channel Optimization", sw: "Kuboresha Kituo" },
      { en: "SEO & Keywords", sw: "SEO na Maneno Muhimu" },
      { en: "Monetization Setup", sw: "Mpangilio wa Kipato" }
    ]
  },
  {
    name: "Twitter",
    icon: Twitter,
    color: "bg-sky-500",
    features: [
      { en: "Real-time Updates", sw: "Sasisho za Wakati Halisi" },
      { en: "Hashtag Strategy", sw: "Mkakati wa Hashtag" },
      { en: "Twitter Spaces", sw: "Nafasi za Twitter" },
      { en: "Crisis Management", sw: "Uongozi wa Machafuko" }
    ]
  }
];

export const currentClients = [
  {
    company: "AMKA KIJANA",
    logo: Monitor,
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
    industry: { en: "Reproductive Health Education", sw: "Elimu ya Afya ya Uzazi" },
    platforms: ["Instagram", "LinkedIn", "Twitter"],
    socialLinks: {
      instagram: "https://instagram.com/amkakijana",
      linkedin: "https://linkedin.com/company/amka-kijana",
      twitter: "https://twitter.com/amkakijana"
    },
    results: {
      followers: "+15K",
      engagement: "+250%",
      leads: "+180%"
    },
    services: [
      {
        name: { en: "Reproductive health Content Creation", sw: "Uundaji wa Maudhui ya Afya ya uzazi" },
        icon: Smartphone,
        description: { en: "Educational reproductive health content", sw: "Maudhui ya kielimu ya ya afya ya uzazi" }
      },
      {
        name: { en: "B2B Lead Generation", sw: "Uongozaji wa B2B" },
        icon: Target,
        description: { en: "Instagram campaigns targeting young adults in Tanzania", sw: "Kampeni za Instagram zilizowalenga wazazi vijana" }
      }
    ]
  },
  {
    company: "SAFARI ADVENTURES TZ",
    logo: Camera,
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=400&h=300&fit=crop",
    industry: { en: "Tourism & Travel", sw: "Utalii na Usafiri" },
    platforms: ["Instagram", "Facebook", "TikTok"],
    socialLinks: {
      instagram: "https://instagram.com/safariadventures_tz",
      facebook: "https://facebook.com/safariadventures.tz",
      tiktok: "https://tiktok.com/@safariadventures_tz"
    },
    results: {
      followers: "+25K",
      engagement: "+320%",
      bookings: "+150%"
    },
    services: [
      {
        name: { en: "Visual Storytelling", sw: "Uhadithia wa Kuona" },
        icon: Video,
        description: { en: "Stunning travel photography and destination videos", sw: "Upigaji picha wa kusafiri na video za makazi zenye kuvutia" }
      },
      {
        name: { en: "Influencer Partnerships", sw: "Ushirikiano wa Washawishi" },
        icon: Users,
        description: { en: "Collaborations with travel influencers and content creators", sw: "Ushirikiano na washawishi wa kusafiri na waundaji wa maudhui" }
      }
    ]
  },
  {
    company: "MAMA LUCY'S KITCHEN",
    logo: Utensils,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
    industry: { en: "Food & Restaurant", sw: "Chakula na Mgahawa" },
    platforms: ["Instagram", "Facebook", "TikTok"],
    socialLinks: {
      instagram: "https://instagram.com/mamalucyskitchen",
      facebook: "https://facebook.com/mamalucyskitchen",
      tiktok: "https://tiktok.com/@mamalucyskitchen"
    },
    results: {
      followers: "+12K",
      engagement: "+280%",
      orders: "+200%"
    },
    services: [
      {
        name: { en: "Food Photography", sw: "Upigaji Picha wa Chakula" },
        icon: Camera,
        description: { en: "Professional food styling and photography", sw: "Upigaji picha wa chakula wa kitaalamu na urembo" }
      },
      {
        name: { en: "Recipe Content", sw: "Maudhui ya Mapishi" },
        icon: FileText,
        description: { en: "Engaging recipe videos and cooking tutorials", sw: "Video za mapishi zinazovutia na mafunzo ya upishi" }
      }
    ]
  },
  {
    company: "FIT LIFE GYM",
    logo: Dumbbell,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
    industry: { en: "Health & Fitness", sw: "Afya na Mazoezi" },
    platforms: ["Instagram", "YouTube", "TikTok"],
    socialLinks: {
      instagram: "https://instagram.com/fitlifegym_tz",
      youtube: "https://youtube.com/c/fitlifegym",
      tiktok: "https://tiktok.com/@fitlifegym_tz"
    },
    results: {
      followers: "+18K",
      engagement: "+300%",
      memberships: "+120%"
    },
    services: [
      {
        name: { en: "Workout Content", sw: "Maudhui ya Mazoezi" },
        icon: PlayCircle,
        description: { en: "Exercise videos and fitness tips", sw: "Video za mazoezi na vidokezo vya afya" }
      },
      {
        name: { en: "Transformation Stories", sw: "Hadithi za Mabadiliko" },
        icon: TrendingUp,
        description: { en: "Client success stories and testimonials", sw: "Hadithi za mafanikio ya wateja na ushahidi" }
      }
    ]
  },
  {
    company: "ELEGANCE FASHION",
    logo: Shirt,
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
    industry: { en: "Fashion & Retail", sw: "Mitindo na Uuzaji" },
    platforms: ["Instagram", "Facebook", "TikTok"],
    socialLinks: {
      instagram: "https://instagram.com/elegancefashion_tz",
      facebook: "https://facebook.com/elegancefashion.tz",
      tiktok: "https://tiktok.com/@elegancefashion_tz"
    },
    results: {
      followers: "+22K",
      engagement: "+350%",
      sales: "+180%"
    },
    services: [
      {
        name: { en: "Fashion Photography", sw: "Upigaji Picha wa Mitindo" },
        icon: Camera,
        description: { en: "Professional fashion shoots and styling", sw: "Upigaji picha wa mitindo wa kitaalamu na urembo" }
      },
      {
        name: { en: "Trend Content", sw: "Maudhui ya Mienendo" },
        icon: Sparkles,
        description: { en: "Latest fashion trends and styling tips", sw: "Mienendo ya hivi karibuni ya mitindo na vidokezo vya urembo" }
      }
    ]
  }
];

export const contentTypes = [
  {
    type: { en: "Static Posts", sw: "Machapisho ya Utulivu" },
    icon: Image,
    description: { en: "High-quality graphics and photography", sw: "Michoro ya ubora wa juu na upigaji picha" },
    platforms: ["Instagram", "Facebook", "LinkedIn", "Twitter"]
  },
  {
    type: { en: "Video Content", sw: "Maudhui ya Video" },
    icon: Video,
    description: { en: "Reels, stories, and promotional videos", sw: "Reels, hadithi, na video za uongozaji" },
    platforms: ["Instagram", "TikTok", "YouTube", "Facebook"]
  },
  {
    type: { en: "Live Streaming", sw: "Kutangaza Moja kwa Moja" },
    icon: PlayCircle,
    description: { en: "Live events, Q&A sessions, and product launches", sw: "Matukio ya moja kwa moja, vipindi vya maswali, na uzinduzi wa bidhaa" },
    platforms: ["Instagram", "Facebook", "YouTube", "TikTok"]
  },
  {
    type: { en: "Stories & Highlights", sw: "Hadithi na Vipengele" },
    icon: Sparkles,
    description: { en: "Engaging stories with polls, quizzes, and interactive elements", sw: "Hadithi zinazovutia na kura, maswali, na vipengele vya ushirikiano" },
    platforms: ["Instagram", "Facebook"]
  },
  {
    type: { en: "Educational Content", sw: "Maudhui ya Kielimu" },
    icon: GraduationCap,
    description: { en: "Tutorials, tips, and industry insights", sw: "Mafunzo, vidokezo, na maarifa ya sekta" },
    platforms: ["LinkedIn", "YouTube", "Instagram"]
  },
  {
    type: { en: "User-Generated Content", sw: "Maudhui ya Watumiaji" },
    icon: Users,
    description: { en: "Customer testimonials and brand advocacy", sw: "Ushahidi wa wateja na uongozaji wa brand" },
    platforms: ["Instagram", "Facebook", "TikTok"]
  }
];

export const faqs = [
  {
    question: { en: "How do you determine the right social media strategy for my business?", sw: "Unavyoweza kutambua mkakati sahihi wa mitandao ya kijamii kwa biashara yangu?" },
    answer: { en: "We conduct a comprehensive analysis of your brand, target audience, competitors, and industry trends. Then we create a customized strategy that aligns with your business goals and resonates with your specific audience.", sw: "Tunafanya uchanganuzi wa kina wa brand yako, watazamaji wa lengo, washindani, na mienendo ya sekta. Kisha tunaunda mkakati wa kipekee unaofanana na malengo ya biashara yako na kuambatana na watazamaji wako maalum." }
  },
  {
    question: { en: "What platforms should my business be on?", sw: "Mitandao gani biashara yangu inapaswa kuwa nayo?" },
    answer: { en: "The choice depends on your target audience, business type, and goals. We help you identify the most effective platforms where your audience is most active and engaged, ensuring maximum ROI from your social media investment.", sw: "Uchaguzi unategemea watazamaji wako wa lengo, aina ya biashara, na malengo. Tunakusaidia kutambua mitandao yenye ufanisi zaidi ambapo watazamaji wako ni makini na washiriki zaidi, kuhakikisha faida kubwa kutoka kwa uwekezaji wako wa mitandao ya kijamii." }
  },
  {
    question: { en: "How often will you post content?", sw: "Utachapisha maudhui mara ngapi?" },
    answer: { en: "Posting frequency varies by platform and package. Generally, we recommend 3-5 posts per week on Instagram/Facebook, daily tweets, and 2-3 LinkedIn posts weekly. We create a custom content calendar that maintains optimal engagement without overwhelming your audience.", sw: "Marudio ya kuchapisha yanatofautiana kwa jukwaa na kifurushi. Kwa ujumla, tunapendekeza machapisho 3-5 kwa wiki kwenye Instagram/Facebook, tweets za kila siku, na machapisho 2-3 ya LinkedIn kwa wiki. Tunaunda kalenda ya maudhui ya kipekee inayodumisha ushirikiano bora bila kupitisha watazamaji wako." }
  },
  {
    question: { en: "Do you handle customer service and comments?", sw: "Unahudumia huduma za wateja na maoni?" },
    answer: { en: "Yes, community management is a core part of our service. We monitor all your social media channels, respond to comments and messages promptly, and escalate important issues to you when necessary. We maintain your brand voice and ensure positive customer interactions.", sw: "Ndiyo, uongozi wa jumuiya ni sehemu muhimu ya huduma yetu. Tunafuatilia mitandao yako yote ya kijamii, tunajibu maoni na ujumbe haraka, na kuongeza masuala muhimu kwako inapohitajika. Tunadumisha sauti ya brand yako na kuhakikisha mwingiliano mzuri wa wateja." }
  },
  {
    question: { en: "How do you measure and report success?", sw: "Unavyoweza kupima na kuripoti mafanikio?" },
    answer: { en: "We track key performance indicators including follower growth, engagement rates, reach, website traffic, lead generation, and conversions. You'll receive detailed monthly reports with insights and recommendations for continuous improvement.", sw: "Tunafuatilia viashiria muhimu vya utendaji ikiwa ni pamoja na ukuaji wa wafuasi, viwango vya ushirikiano, ufikaji, trafiki ya tovuti, uongozaji wa viongozi, na mabadiliko. Utapokea ripoti za kila mwezi za kina na maarifa na mapendekezo ya kuboresha kuendelea." }
  },
  {
    question: { en: "Can you help with paid advertising?", sw: "Unaweza kusaidia na matangazo ya kulipwa?" },
    answer: { en: "Absolutely! We create and manage targeted advertising campaigns across all major platforms. This includes audience research, ad creative development, campaign optimization, and detailed performance reporting to maximize your ad spend ROI.", sw: "Kabisa! Tunaunda na kusimamia kampeni za matangazo yaliyolengwa katika mitandao yote mikuu. Hii ni pamoja na utafiti wa watazamaji, uundaji wa matangazo ya ubunifu, kuboresha kampeni, na uripoti wa kina wa utendaji kuongeza faida za matumizi yako ya matangazo." }
  }
];

export const pricingPlans = [
  {
    name: { en: "Starter", sw: "Mwanzo" },
    subtitle: { en: "Social Presence", sw: "Uongozi wa Kijamii" },
    price: "TZS 400,000",
    period: { en: "per Month", sw: "kwa Mwezi" },
    target: { en: "Small businesses starting their social media journey", sw: "Biashara ndogo zinazoanza safari yao ya mitandao ya kijamii" },
    features: [
      { en: "2 social media platforms (Instagram + Facebook)", sw: "Mitandao 2 ya kijamii (Instagram + Facebook)" },
      { en: "12 posts per month (3 per week)", sw: "Machapisho 12 kwa mwezi (3 kwa wiki)" },
      { en: "Basic graphic design and content creation", sw: "Muundo wa msingi wa michoro na uundaji wa maudhui" },
      { en: "Community management (comments & messages)", sw: "Uongozi wa jumuiya (maoni na ujumbe)" },
      { en: "Monthly performance report", sw: "Ripoti ya utendaji wa kila mwezi" },
      { en: "Content calendar planning", sw: "Upangaji wa kalenda ya maudhui" }
    ]
  },
  {
    name: { en: "Growth", sw: "Ukuaji" },
    subtitle: { en: "Multi-Platform Impact", sw: "Athari ya Mitandao Mingi" },
    price: "TZS 750,000",
    period: { en: "per Month", sw: "kwa Mwezi" },
    popular: true,
    target: { en: "Growing businesses ready to scale their social presence", sw: "Biashara zinazokua tayari kupanua uongozi wao wa kijamii" },
    features: [
      { en: "4 social media platforms (Instagram, Facebook, TikTok, LinkedIn)", sw: "Mitandao 4 ya kijamii (Instagram, Facebook, TikTok, LinkedIn)" },
      { en: "20 posts per month (5 per week)", sw: "Machapisho 20 kwa mwezi (5 kwa wiki)" },
      { en: "Professional graphic design & video content", sw: "Muundo wa kitaalamu wa michoro na maudhui ya video" },
      { en: "Stories & Reels creation (8 per month)", sw: "Uundaji wa hadithi na Reels (8 kwa mwezi)" },
      { en: "Active community management", sw: "Uongozi mkali wa jumuiya" },
      { en: "Basic paid advertising setup (ad spend separate)", sw: "Mpangilio wa msingi wa matangazo ya kulipwa (gharama za matangazo ni tofauti)" },
      { en: "Bi-weekly strategy calls", sw: "Simu za mkakati kila wiki mbili" },
      { en: "Detailed monthly analytics report", sw: "Ripoti ya kina ya uchanganuzi wa kila mwezi" }
    ]
  },
  {
    name: { en: "Premium", sw: "Bora" },
    subtitle: { en: "Full-Service Domination", sw: "Utawala wa Huduma Kamili" },
    price: "TZS 1,200,000 - 1,800,000",
    period: { en: "per Month", sw: "kwa Mwezi" },
    target: { en: "Established businesses seeking comprehensive social media domination", sw: "Biashara zilizoimarika zinazotafuta utawala wa kina wa mitandao ya kijamii" },
    features: [
      { en: "All major platforms (Instagram, Facebook, TikTok, LinkedIn, Twitter, YouTube)", sw: "Mitandao yote mikuu (Instagram, Facebook, TikTok, LinkedIn, Twitter, YouTube)" },
      { en: "35+ posts per month (daily posting)", sw: "Machapisho 35+ kwa mwezi (kuchapisha kila siku)" },
      { en: "Premium content creation (photos, videos, graphics)", sw: "Uundaji wa maudhui ya hali ya juu (picha, video, michoro)" },
      { en: "Daily Stories & Reels (25+ per month)", sw: "Hadithi na Reels za kila siku (25+ kwa mwezi)" },
      { en: "Professional photography & video production", sw: "Upigaji picha wa kitaalamu na uzalishaji wa video" },
      { en: "Comprehensive paid advertising management", sw: "Uongozi wa kina wa matangazo ya kulipwa" },
      { en: "Influencer collaboration coordination", sw: "Uratibu wa ushirikiano wa washawishi" },
      { en: "Crisis management & reputation monitoring", sw: "Uongozi wa machafuko na ufuatiliaji wa sifa" },
      { en: "Weekly strategy calls + dedicated account manager", sw: "Simu za mkakati za kila wiki + meneja maalum wa akaunti" },
      { en: "Advanced analytics & competitor analysis", sw: "Uchanganuzi wa juu na uchanganuzi wa washindani" }
    ]
  }
];

export const industries = [
  {
    name: { en: "Technology", sw: "Teknolojia" },
    icon: Monitor,
    description: { en: "Software, apps, and tech solutions", sw: "Programu, programu, na suluhisho za teknolojia" }
  },
  {
    name: { en: "Healthcare", sw: "Huduma za Afya" },
    icon: Stethoscope,
    description: { en: "Medical services and health products", sw: "Huduma za kimatibabu na bidhaa za afya" }
  },
  {
    name: { en: "Food & Beverage", sw: "Chakula na Kinywaji" },
    icon: Utensils,
    description: { en: "Restaurants, cafes, and food products", sw: "Migahawa, vikahawa, na bidhaa za chakula" }
  },
  {
    name: { en: "Fashion & Retail", sw: "Mitindo na Uuzaji" },
    icon: Shirt,
    description: { en: "Clothing, accessories, and retail stores", sw: "Nguo, vifaa, na maduka ya reja reja" }
  },
  {
    name: { en: "Real Estate", sw: "Mali Isiyohamishika" },
    icon: Home,
    description: { en: "Property sales and real estate services", sw: "Mauzo ya mali na huduma za mali isiyohamishika" }
  },
  {
    name: { en: "Education", sw: "Elimu" },
    icon: GraduationCap,
    description: { en: "Schools, courses, and educational services", sw: "Shule, kozi, na huduma za elimu" }
  },
  {
    name: { en: "Fitness & Wellness", sw: "Afya na Ustawi" },
    icon: Dumbbell,
    description: { en: "Gyms, wellness centers, and fitness products", sw: "Majimu, vituo vya ustawi, na bidhaa za mazoezi" }
  },
  {
    name: { en: "Tourism & Travel", sw: "Utalii na Usafiri" },
    icon: Camera,
    description: { en: "Travel agencies, hotels, and tourism services", sw: "Wakala wa usafiri, hoteli, na huduma za utalii" }
  }
];

