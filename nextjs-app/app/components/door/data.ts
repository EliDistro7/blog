import { 
  DoorOpen, 
  MapPin, 
  Target, 
  Users, 
  TrendingUp, 
  Clock, 
  CheckCircle, 
  Cookie,
  Candy,
  Gift,
  Mail,
  PenTool,
  BookOpen,
  Flame,
  Utensils,
  Wheat,
  Leaf,
 
  Truck,
  Sparkles,
  Milk,
  Layers,
  Calendar,
  ArrowRight,
  Quote,
  BarChart3,
  Shield,

  Award,
  ChevronDown,
  ChevronUp,
  Building,
  Package,
  Zap,
  Smartphone,
  Shield as ShieldIcon,
  Wifi,
  Home,
  Heart
} from 'lucide-react';

  export const heroStats = [
    {
      number: "95%",
      label: { en: "Success Rate", sw: "Kiwango cha Mafanikio" }
    },
    {
      number: "10K+",
      label: { en: "Doors Reached", sw: "Milango Yaliyofikiwa" }
    },
    {
      number: "500+",
      label: { en: "Happy Clients", sw: "Wateja Wenye Furaha" }
    },
    {
      number: "24/7",
      label: { en: "Support", sw: "Msaada" }
    }
  ];

  export const services = [
    {
      icon: Target,
      title: { en: "Lead Generation", sw: "Uongozaji wa Viongozi" },
      description: { en: "Identify and qualify potential customers through strategic door-to-door campaigns", sw: "Tambua na uhakiki wateja watarajiwa kupitia kampeni za mkakati wa mlango hadi mlango" }
    },
    {
      icon: Users,
      title: { en: "Brand Awareness", sw: "Ufahamu wa Brand" },
      description: { en: "Increase brand visibility and recognition in your target neighborhoods", sw: "Ongeza miwani ya brand na utambuzi katika mitaa yako ya lengo" }
    },
    {
      icon: BarChart3,
      title: { en: "Market Research", sw: "Utafiti wa Soko" },
      description: { en: "Gather valuable insights about customer preferences and market trends", sw: "Kusanya maarifa muhimu kuhusu mapendeleo ya wateja na mienendo ya soko" }
    },
    {
      icon: TrendingUp,
      title: { en: "Sales Conversion", sw: "Kubadilisha Mauzo" },
      description: { en: "Convert prospects into customers through personalized interactions", sw: "Badilisha matarajio kuwa wateja kupitia mwingiliano wa kibinafsi" }
    }
  ];

  export const process = [
    {
      step: "01",
      title: { en: "Strategy Planning", sw: "Upangaji wa Mkakati" },
      description: { en: "We analyze your target market and develop a customized door-to-door strategy", sw: "Tunachanganua soko lako la lengo na kuendeleza mkakati wa kipekee wa mlango hadi mlango" }
    },
    {
      step: "02",
      title: { en: "Team Training", sw: "Mafunzo ya Timu" },
      description: { en: "Our professional team is trained on your products and brand messaging", sw: "Timu yetu ya kitaalamu inafunzwa kuhusu bidhaa zako na ujumbe wa brand" }
    },
    {
      step: "03",
      title: { en: "Campaign Execution", sw: "Utekelezaji wa Kampeni" },
      description: { en: "Systematic door-to-door visits with real-time tracking and reporting", sw: "Ziara za mfumo wa mlango hadi mlango na ufuatiliaji wa wakati halisi na uripoti" }
    },
    {
      step: "04",
      title: { en: "Results Analysis", sw: "Uchambuzi wa Matokeo" },
      description: { en: "Detailed analytics and insights to optimize future campaigns", sw: "Uchanganuzi wa kina na maarifa ya kuboresha kampeni za baadaye" }
    }
  ];

export const currentPartners = [
  {
    company: "MAGNA",
    logo: Building,
    industry: { en: "Stationery & Office Supplies", sw: "Vifaa vya Ofisi" },
    products: [
      {
        name: { en: "Stationery", sw: "Vifaa vya Uandishi" },
        icon: PenTool,
        description: { en: "Complete office stationery solutions", sw: "Suluhisho kamili la vifaa vya ofisi" }
      },
      {
        name: { en: "Counter Books", sw: "Vitabu vya Hesabu" },
        icon: BookOpen,
        description: { en: "Accounting and record keeping books", sw: "Vitabu vya uhasibu na uwekaji rekodi" }
      },
      {
        name: { en: "Kilns", sw: "Tanuru" },
        icon: Flame,
        description: { en: "Industrial kilns for manufacturing", sw: "Tanuru za viwandani kwa utengenezaji" }
      },
      {
        name: { en: "Envelopes", sw: "Bahasha" },
        icon: Mail,
        description: { en: "Various sizes of envelopes for mailing", sw: "Bahasha za ukubwa mbalimbali kwa barua" }
      }
    ]
  },
  {
    company: "CHRISTY QUALITY FOODS PVT LTD",
    logo: Utensils,
    industry: { en: "Food & Beverages", sw: "Chakula na Vinywaji" },
    location: { en: "Arusha - Mbeya", sw: "Arusha - Mbeya" },
    products: [
      {
        name: { en: "Maize Flour", sw: "Unga wa Mahindi" },
        icon: Wheat,
        description: { en: "High quality maize flour for households", sw: "Unga wa mahindi wa ubora wa juu kwa familia" }
      },
      {
        name: { en: "Bulgur Wheat", sw: "Ngano ya Bulgur" },
        icon: Wheat,
        description: { en: "Nutritious bulgur wheat products", sw: "Bidhaa za ngano ya bulgur zenye lishe" }
      },
      {
        name: { en: "Mbogi & Cassava", sw: "Mbogi na Muhogo" },
        icon: Leaf,
        description: { en: "Traditional vegetables and cassava products", sw: "Mboga za jadi na bidhaa za muhogo" }
      },
      {
        name: { en: "Beans (Various)", sw: "Maharage (Aina Mbalimbali)" },
        icon: Wheat,
        description: { en: "Different varieties of beans including Rosecoco", sw: "Aina mbalimbali za maharage ikiwa ni pamoja na Rosecoco" }
      }
    ]
  },
  {
    company: "TAMTAM",
    logo: Truck,
    industry: { en: "Food Distribution", sw: "Usambazaji wa Chakula" },
    products: [
      {
        name: { en: "Wholesale Distribution", sw: "Usambazaji wa Jumla" },
        icon: Package,
        description: { en: "Bulk food distribution services", sw: "Huduma za usambazaji wa chakula kwa wingi" }
      }
    ]
  },
  {
    company: "EX-PIDO",
    logo: Truck,
    industry: { en: "Food & Spices", sw: "Chakula na Viungo" },
    products: [
      {
        name: { en: "Malguito Repellant", sw: "Dawa ya Mbu" },
        icon: Shield,
        description: { en: "Natural mosquito repellent products", sw: "Bidhaa za asili za kuzuia mbu" }
      },
      {
        name: { en: "Thyme Sticks", sw: "Vijiti vya Thyme" },
        icon: Leaf,
        description: { en: "Natural thyme sticks for flavoring", sw: "Vijiti vya thyme vya asili kwa ladha" }
      },
      {
        name: { en: "Turmeric", sw: "Manjano" },
        icon: Sparkles,
        description: { en: "Pure turmeric powder and sticks", sw: "Unga na vijiti vya manjano safi" }
      }
    ]
  },
  {
    company: "SAADO FOODS",
    logo: Utensils,
    industry: { en: "Confectionery & Food Products", sw: "Peremende na Bidhaa za Chakula" },
    products: [
      {
        name: { en: "Chocolate", sw: "Chokoleti" },
        icon: Gift,
        description: { en: "Premium chocolate products and confectionery", sw: "Bidhaa za chokoleti na peremende za hali ya juu" }
      },
      {
        name: { en: "Finger Chocolate", sw: "Chokoleti ya Kidole" },
        icon: Candy,
        description: { en: "Finger-shaped chocolate snacks", sw: "Vitafunio vya chokoleti vya umbo la kidole" }
      },
      {
        name: { en: "Top Corn", sw: "Mahindi Bora" },
        icon: Wheat,
        description: { en: "Premium corn-based snack products", sw: "Vitafunio vya mahindi vya hali ya juu" }
      },
      {
        name: { en: "Biscuits", sw: "Biskuti" },
        icon: Cookie,
        description: { en: "Various types of biscuits and cookies", sw: "Aina mbalimbali za biskuti na mikate" }
      }
    ]
  }
];

  export const faqs = [
    {
      question: { en: "How do you target the right neighborhoods?", sw: "Unavipi mitaa sahihi ya lengo?" },
      answer: { en: "We use demographic data, market research, and your customer profiles to identify high-potential areas for maximum campaign effectiveness.", sw: "Tunatumia data za kidemografia, utafiti wa soko, na maelezo ya wateja wako kutambua maeneo yenye uwezekano mkubwa kwa ufanisi mkubwa wa kampeni." }
    },
    {
      question: { en: "What training do your representatives receive?", sw: "Wawakilishi wako wanapata mafunzo gani?" },
      answer: { en: "Our team undergoes comprehensive training on your products, brand values, communication techniques, and professional door-to-door etiquette.", sw: "Timu yetu inapitia mafunzo ya kina kuhusu bidhaa zako, maadili ya brand, mbinu za mawasiliano, na adabu za kitaalamu za mlango hadi mlango." }
    },
    {
      question: { en: "How do you measure campaign success?", sw: "Unawezaje kupima mafanikio ya kampeni?" },
      answer: { en: "We track key metrics including doors visited, leads generated, conversion rates, and provide detailed analytics reports with actionable insights.", sw: "Tunafuata vipimo muhimu ikiwa ni pamoja na milango iliyotembelewa, viongozi waliozalishwa, viwango vya ubadilishaji, na kutoa ripoti za uchanganuzi wa kina na maarifa ya kutenda." }
    },
    {
      question: { en: "What industries do you serve?", sw: "Unatumikia viwanda gani?" },
      answer: { en: "We serve various industries including retail, healthcare, technology, real estate, financial services, and local businesses of all sizes.", sw: "Tunatumikia viwanda mbalimbali ikiwa ni pamoja na rejareja, huduma za afya, teknolojia, mali isiyohamishika, huduma za kifedha, na biashara za ndani za ukubwa wote." }
    }
  ];

 export const pricingPlans = [
  {
    name: { en: "Starter", sw: "Mwanzo" },
    subtitle: { en: "Street Presence", sw: "Uongozi wa Mtaani" },
    price: "TZS 300,000",
    period: { en: "per Month", sw: "kwa Mwezi" },
    target: { en: "Small businesses or startups testing physical outreach", sw: "Biashara ndogo au miradi mipya yanayojaribu kufikia wateja" },
    features: [
      { en: "1 sales rep assigned for 2 days per week (8 days/month)", sw: "Mwakilishi mmoja wa mauzo kwa siku 2 kwa wiki (siku 8/mwezi)" },
      { en: "Coverage of selected districts or ward", sw: "Uongozi wa wilaya au kata zilizochaguliwa" },
      { en: "Distribution of 100 branded flyers per week", sw: "Ugavi wa vipeperushi 100 vya biashara kwa wiki" },
      { en: "Collection of potential clients per week (5-10 per month)", sw: "Ukusanyaji wa wateja watarajiwa kwa wiki (5-10 kwa mwezi)" },
      { en: "Weekly status reports to track feedback", sw: "Ripoti za kila wiki za kufuatilia maoni" }
    ]
  },
  {
    name: { en: "Growth", sw: "Ukuaji" },
    subtitle: { en: "Neighborhood Impact", sw: "Athari ya Mtaani" },
    price: "TZS 600,000",
    period: { en: "per Month", sw: "kwa Mwezi" },
    popular: true,
    target: { en: "Businesses ready to expand reach and generate leads", sw: "Biashara zilizo tayari kupanua uwazi na kupata viongozi" },
    features: [
      { en: "2 trained sales reps assigned for 3 days/week (12 visits/month)", sw: "Wawakilishi 2 wa mauzo waliofunzwa kwa siku 3/wiki (ziara 12/mwezi)" },
      { en: "Coverage of up to 5-8 districts/wards", sw: "Uongozi wa hadi wilaya/kata 5-8" },
      { en: "Distribution of 200 branded flyers per week", sw: "Ugavi wa vipeperushi 200 vya biashara kwa wiki" },
      { en: "Branded uniforms for the reps (to enhance brand presence)", sw: "Sare za biashara kwa wawakilishi (kuboresha uongozi wa biashara)" },
      { en: "Contact collection (100+ prospects monthly)", sw: "Ukusanyaji wa anwani (wapenzi 100+ kwa mwezi)" },
      { en: "Weekly performance reports - leads summary", sw: "Ripoti za utendaji wa kila wiki - muhtasari wa viongozi" }
    ]
  },
  {
    name: { en: "Premium", sw: "Bora" },
    subtitle: { en: "City Domination", sw: "Utawala wa Jiji" },
    price: "TZS 900,000 - 1,200,000",
    period: { en: "per Month", sw: "kwa Mwezi" },
    target: { en: "Established businesses seeking city-wide scale and dominance", sw: "Biashara zilizoimarika zinazotafuta ukuu wa jiji lote" },
    features: [
      { en: "3-4 uniformed sales reps, active 5 days/week", sw: "Wawakilishi 3-4 wa mauzo wenye sare, wakiwa hai siku 5/wiki" },
      { en: "Coverage of entire Dar es Salaam, roofing zones", sw: "Uongozi wa Dar es Salaam nzima, maeneo ya mapaa" },
      { en: "Distribution of up to 1,000 flyers/posters/month", sw: "Ugavi wa hadi vipeperushi/mabango 1,000/mwezi" },
      { en: "Product demonstrations (for applicable businesses)", sw: "Maonyesho ya bidhaa (kwa biashara zinazofaa)" },
      { en: "Monthly lead generation targets (100+ qualified prospects)", sw: "Malengo ya kila mwezi ya kupata viongozi (wapenzi 100+ wanaofaa)" },
      { en: "Bi-weekly strategy calls with dedicated WhatsApp check-ins", sw: "Simu za mkakati kila wiki mbili na mahakikisho ya WhatsApp" },
      { en: "Monthly performance meeting & campaign optimization", sw: "Mkutano wa utendaji wa kila mwezi na kuboresha kampeni" }
    ]
  }
];