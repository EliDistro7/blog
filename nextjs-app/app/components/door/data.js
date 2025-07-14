import { 
  DoorOpen, 
  MapPin, 
  Target, 
  Users, 
  TrendingUp, 
  Clock, 
  CheckCircle, 
  Star,
  Phone,
  Mail,
  PenTool,
  BookOpen,
  Flame,
  Utensils,
  Wheat,
  Leaf,
  Seed,
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
        icon: Seed,
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
    industry: { en: "Food Processing", sw: "Usindikaji wa Chakula" },
    products: [
      {
        name: { en: "Cottage Cheese", sw: "Jibini la Cottage" },
        icon: Milk,
        description: { en: "Fresh cottage cheese products", sw: "Bidhaa za jibini la cottage mpya" }
      },
      {
        name: { en: "Top Grain", sw: "Nafaka Bora" },
        icon: Wheat,
        description: { en: "Premium grain products", sw: "Bidhaa za nafaka za hali ya juu" }
      },
      {
        name: { en: "Pillow Fillers", sw: "Vijijazi vya Mto" },
        icon: Package,
        description: { en: "Comfortable pillow filling materials", sw: "Vifaa vya kujaza mto vya urahisi" }
      },
      {
        name: { en: "Fibers", sw: "Nyuzi" },
        icon: Layers,
        description: { en: "Natural and synthetic fiber products", sw: "Bidhaa za nyuzi za asili na bandia" }
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
      price: "$299",
      period: { en: "per campaign", sw: "kwa kampeni" },
      features: [
        { en: "Up to 100 doors", sw: "Hadi milango 100" },
        { en: "Basic reporting", sw: "Ripoti ya msingi" },
        { en: "Email support", sw: "Msaada wa barua pepe" },
        { en: "2-day campaign", sw: "Kampeni ya siku 2" }
      ]
    },
    {
      name: { en: "Professional", sw: "Mtaalamu" },
      price: "$799",
      period: { en: "per campaign", sw: "kwa kampeni" },
      popular: true,
      features: [
        { en: "Up to 500 doors", sw: "Hadi milango 500" },
        { en: "Advanced analytics", sw: "Uchanganuzi wa kina" },
        { en: "Phone & email support", sw: "Msaada wa simu na barua pepe" },
        { en: "1-week campaign", sw: "Kampeni ya wiki 1" },
        { en: "Lead qualification", sw: "Uhakiki wa viongozi" }
      ]
    },
    {
      name: { en: "Enterprise", sw: "Biashara" },
      price: { en: "Custom", sw: "Maalum" },
      period: { en: "pricing", sw: "bei" },
      features: [
        { en: "Unlimited doors", sw: "Milango isiyopungua" },
        { en: "Custom reporting", sw: "Ripoti maalum" },
        { en: "24/7 support", sw: "Msaada wa 24/7" },
        { en: "Multi-week campaigns", sw: "Kampeni za wiki nyingi" },
        { en: "Dedicated account manager", sw: "Meneja wa akaunti aliyejitolea" }
      ]
    }
  ];
