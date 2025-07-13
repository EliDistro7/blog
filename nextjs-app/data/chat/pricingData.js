// app/data/pricingData.js

export const pricingData = {
    en: {
      // Door to Door Sales pricing packages
      'Door to Door Sales': {
        currency: 'USD',
        packages: [
          {
            name: "Basic Sales Campaign",
            price: 1500,
            billingCycle: "per month",
            description: "Essential door-to-door sales service for small businesses and startups",
            features: [
              "2 trained sales representatives",
              "20 hours per week coverage",
              "Basic lead generation and tracking",
              "Weekly progress reports",
              "Customer contact database",
              "Basic sales materials provided",
              "Monthly performance review"
            ],
            popular: false,
            deliveryTime: "Campaign starts within 1 week",
            coverage: "Local area coverage (5km radius)"
          },
          {
            name: "Professional Sales Campaign",
            price: 3500,
            billingCycle: "per month",
            description: "Comprehensive door-to-door sales solution for established businesses",
            features: [
              "4 experienced sales representatives",
              "40 hours per week coverage",
              "Advanced CRM integration",
              "Bi-weekly progress reports",
              "Lead qualification and follow-up",
              "Custom sales materials and brochures",
              "Territory mapping and optimization",
              "Monthly strategy sessions",
              "Performance analytics dashboard"
            ],
            popular: true,
            deliveryTime: "Campaign starts within 3-5 days",
            coverage: "City-wide coverage (15km radius)"
          },
          {
            name: "Enterprise Sales Campaign",
            price: 7500,
            billingCycle: "per month",
            description: "Premium door-to-door sales program for large-scale operations",
            features: [
              "8 elite sales representatives",
              "Full-time coverage (80 hours per week)",
              "Multi-channel sales approach",
              "Real-time reporting and tracking",
              "Advanced lead scoring system",
              "Custom branded sales materials",
              "Territory expansion planning",
              "Weekly strategy consultations",
              "Dedicated account manager",
              "ROI optimization and analysis"
            ],
            popular: false,
            deliveryTime: "Campaign starts within 24 hours",
            coverage: "Regional coverage (50km radius)"
          }
        ],
        customNote: "All packages include initial market research and competitor analysis. Custom territories and specialized products available upon request."
      },
      
      // Website and Application Development pricing
      'Website & App Development': {
        currency: 'USD',
        packages: [
          {
            name: "Basic Website",
            price: 2500,
            billingCycle: "one-time",
            description: "Professional website solution for small businesses and personal brands",
            features: [
              "5-page responsive website",
              "Mobile-friendly design",
              "Basic SEO optimization",
              "Contact form integration",
              "Social media links",
              "1-year domain and hosting included",
              "Basic analytics setup",
              "3 months free maintenance"
            ],
            popular: false,
            deliveryTime: "2-3 weeks completion",
            revisions: "3 design revisions included"
          },
          {
            name: "Professional Web Solution",
            price: 6500,
            billingCycle: "one-time",
            description: "Advanced website with custom features and e-commerce capabilities",
            features: [
              "10-page custom website",
              "E-commerce functionality",
              "Content management system",
              "Advanced SEO optimization",
              "Payment gateway integration",
              "Custom graphics and branding",
              "Multi-language support",
              "Database integration",
              "6 months free maintenance",
              "Training and documentation"
            ],
            popular: true,
            deliveryTime: "4-6 weeks completion",
            revisions: "5 design revisions included"
          },
          {
            name: "Enterprise Web & App Package",
            price: 15000,
            billingCycle: "one-time",
            description: "Complete digital solution with web platform and mobile applications",
            features: [
              "Custom web application",
              "iOS and Android mobile apps",
              "Advanced database design",
              "API development and integration",
              "Cloud hosting setup",
              "Security implementation",
              "Admin dashboard",
              "User management system",
              "Push notifications",
              "Analytics and reporting",
              "12 months free maintenance",
              "Ongoing technical support"
            ],
            popular: false,
            deliveryTime: "8-12 weeks completion",
            revisions: "Unlimited revisions during development"
          }
        ],
        customNote: "All websites are responsive and SEO-optimized. Custom features and integrations available. Monthly maintenance packages starting at $200/month."
      },
      
      // Social Media Management pricing
      'Social Media Management': {
        currency: 'USD',
        packages: [
          {
            name: "Starter Social Package",
            price: 800,
            billingCycle: "per month",
            description: "Essential social media management for growing businesses",
            features: [
              "3 social media platforms",
              "12 posts per month",
              "Basic content creation",
              "Community management",
              "Monthly analytics report",
              "Hashtag research and optimization",
              "Basic graphic design"
            ],
            popular: false,
            deliveryTime: "Setup within 2-3 days",
            platforms: "Facebook, Instagram, LinkedIn"
          },
          {
            name: "Professional Social Suite",
            price: 2200,
            billingCycle: "per month",
            description: "Comprehensive social media management with advanced content strategy",
            features: [
              "5 social media platforms",
              "25 posts per month",
              "Professional content creation",
              "Stories and reels production",
              "Advanced community management",
              "Paid advertising management",
              "Weekly analytics reports",
              "Influencer collaboration coordination",
              "Custom graphics and videos",
              "Content calendar planning"
            ],
            popular: true,
            deliveryTime: "Setup within 24 hours",
            platforms: "All major platforms included"
          },
          {
            name: "Enterprise Social Domination",
            price: 5500,
            billingCycle: "per month",
            description: "Full-scale social media management with 24/7 monitoring and premium content",
            features: [
              "All social media platforms",
              "50+ posts per month",
              "Premium content production",
              "Professional video creation",
              "24/7 community management",
              "Advanced paid advertising campaigns",
              "Real-time analytics dashboard",
              "Crisis management support",
              "Influencer partnership management",
              "Custom branded content",
              "Monthly strategy consultations",
              "Reputation management"
            ],
            popular: false,
            deliveryTime: "Immediate setup",
            platforms: "Unlimited platforms"
          }
        ],
        customNote: "All packages include content calendar approval process. Custom content themes and industry-specific strategies available. Ad spend budget managed separately."
      },
      
      // Public Tender Services pricing
      'Public Tender Services': {
        currency: 'USD',
        packages: [
          {
            name: "Tender Alert Service",
            price: 500,
            billingCycle: "per month",
            description: "Basic tender notification and search service for your business sector",
            features: [
              "Daily tender alerts",
              "Sector-specific filtering",
              "Email notifications",
              "Basic tender database access",
              "Monthly tender summary report",
              "Document download links"
            ],
            popular: false,
            deliveryTime: "Service starts immediately",
            coverage: "National tenders"
          },
          {
            name: "Tender Preparation Service",
            price: 2500,
            billingCycle: "per tender",
            description: "Professional tender application preparation and submission assistance",
            features: [
              "Tender document analysis",
              "Professional proposal writing",
              "Compliance checklist review",
              "Document formatting and binding",
              "Submission coordination",
              "Follow-up and status tracking",
              "Feedback analysis for future bids",
              "Legal requirement verification"
            ],
            popular: true,
            deliveryTime: "5-7 days preparation time",
            coverage: "Full application support"
          },
          {
            name: "Complete Tender Management",
            price: 7500,
            billingCycle: "per month",
            description: "End-to-end tender management service with dedicated account handling",
            features: [
              "Comprehensive tender research",
              "Strategic bid planning",
              "Professional proposal development",
              "Partnership and consortium formation",
              "Compliance and legal review",
              "Submission management",
              "Post-submission follow-up",
              "Performance tracking and analysis",
              "Dedicated tender specialist",
              "Monthly strategy sessions",
              "Success rate optimization"
            ],
            popular: false,
            deliveryTime: "Immediate service activation",
            coverage: "Regional and international tenders"
          }
        ],
        customNote: "Success-based pricing options available. Specialized support for government contracts, NGO tenders, and private sector opportunities."
      },
      
      // Equipment Sales pricing
      'Equipment Sales': {
        currency: 'USD',
        packages: [
          {
            name: "Basic Equipment Package",
            price: 2000,
            billingCycle: "per order",
            description: "Essential equipment sourcing and supply for small businesses",
            features: [
              "Equipment sourcing and quotation",
              "Quality verification process",
              "Basic warranty coverage",
              "Delivery coordination",
              "Installation guidance",
              "Basic after-sales support",
              "Equipment documentation"
            ],
            popular: false,
            deliveryTime: "2-4 weeks delivery",
            warranty: "6 months warranty"
          },
          {
            name: "Professional Equipment Solution",
            price: 7500,
            billingCycle: "per order",
            description: "Comprehensive equipment supply with professional installation and training",
            features: [
              "Custom equipment specification",
              "Multi-supplier quotation comparison",
              "Quality assurance testing",
              "Professional installation service",
              "Staff training and orientation",
              "Extended warranty coverage",
              "Maintenance planning",
              "Technical support hotline",
              "Equipment performance monitoring"
            ],
            popular: true,
            deliveryTime: "3-6 weeks delivery",
            warranty: "12 months comprehensive warranty"
          },
          {
            name: "Enterprise Equipment Management",
            price: 20000,
            billingCycle: "per project",
            description: "Complete equipment lifecycle management for large-scale operations",
            features: [
              "Comprehensive needs assessment",
              "Custom equipment design and manufacturing",
              "Multi-phase delivery planning",
              "Professional installation and commissioning",
              "Comprehensive staff training programs",
              "Ongoing maintenance contracts",
              "Performance optimization services",
              "Equipment lifecycle management",
              "24/7 technical support",
              "Replacement planning and budgeting",
              "ROI analysis and reporting"
            ],
            popular: false,
            deliveryTime: "6-12 weeks delivery",
            warranty: "24 months full coverage"
          }
        ],
        customNote: "Equipment sourced from verified global suppliers. Custom equipment specifications available. Flexible payment terms and financing options available."
      },
      
      // Product and Service Branding pricing
      'Product & Service Branding': {
        currency: 'USD',
        packages: [
          {
            name: "Brand Identity Package",
            price: 1800,
            billingCycle: "one-time",
            description: "Essential branding solution for new businesses and product launches",
            features: [
              "Logo design and variations",
              "Brand color palette",
              "Typography selection",
              "Basic brand guidelines",
              "Business card design",
              "Letterhead template",
              "Social media profile setup",
              "Brand usage guidelines"
            ],
            popular: false,
            deliveryTime: "2-3 weeks completion",
            revisions: "3 revision rounds included"
          },
          {
            name: "Complete Brand Development",
            price: 4500,
            billingCycle: "one-time",
            description: "Comprehensive branding solution with marketing materials and strategy",
            features: [
              "Complete brand identity system",
              "Brand strategy development",
              "Marketing materials design",
              "Packaging design concepts",
              "Website branding integration",
              "Social media branding kit",
              "Brand voice and messaging",
              "Comprehensive brand guidelines",
              "Brand launch strategy",
              "Initial marketing campaign"
            ],
            popular: true,
            deliveryTime: "4-6 weeks completion",
            revisions: "5 revision rounds included"
          },
          {
            name: "Premium Brand Management",
            price: 12000,
            billingCycle: "one-time + monthly",
            description: "Full-service branding with ongoing brand management and evolution",
            features: [
              "Strategic brand development",
              "Market research and positioning",
              "Complete visual identity system",
              "Brand architecture planning",
              "Multi-channel brand implementation",
              "Brand campaign development",
              "Ongoing brand monitoring",
              "Brand performance analytics",
              "Quarterly brand reviews",
              "Brand evolution planning",
              "Crisis brand management",
              "6 months ongoing support included"
            ],
            popular: false,
            deliveryTime: "6-8 weeks initial completion",
            revisions: "Unlimited revisions during development"
          }
        ],
        customNote: "All branding packages include trademark search assistance. Industry-specific branding expertise available. Monthly brand management services available from $800/month."
      }
    },
    sw: {
      // Door to Door Sales pricing packages
      'Door to Door Sales': {
        currency: 'TZS',
        packages: [
          {
            name: "Kampeni ya Mauzo ya Kimsingi",
            price: 1500000,
            billingCycle: "kwa mwezi",
            description: "Huduma muhimu ya mauzo ya mlango hadi mlango kwa biashara ndogo na washirika wachanga",
            features: [
              "Wawakilishi 2 wa mauzo waliofunzwa",
              "Ufikaji wa masaa 20 kwa wiki",
              "Kuzalisha na kufuatilia wateja wa kimsingi",
              "Ripoti za maendeleo za kila wiki",
              "Hifadhidata ya mawasiliano ya wateja",
              "Nyenzo za mauzo za kimsingi zinatolewa",
              "Ukaguzi wa utendaji wa kila mwezi"
            ],
            popular: false,
            deliveryTime: "Kampeni inaanza ndani ya wiki 1",
            coverage: "Ufikaji wa eneo la ndani (umbali wa km 5)"
          },
          {
            name: "Kampeni ya Mauzo ya Kitaalamu",
            price: 3500000,
            billingCycle: "kwa mwezi",
            description: "Suluhisho kamili la mauzo ya mlango hadi mlango kwa biashara zilizosimama",
            features: [
              "Wawakilishi 4 wa mauzo wenye uzoefu",
              "Ufikaji wa masaa 40 kwa wiki",
              "Ujumuishaji wa CRM wa hali ya juu",
              "Ripoti za maendeleo za kila wiki mbili",
              "Ubainishaji wa wateja na kufuatilia",
              "Nyenzo za mauzo za kawaida na broshua",
              "Uongozi wa ramani za eneo na uboreshaji",
              "Vikao vya mkakati wa kila mwezi",
              "Dashibodi ya uchambuzi wa utendaji"
            ],
            popular: true,
            deliveryTime: "Kampeni inaanza ndani ya siku 3-5",
            coverage: "Ufikaji wa jiji lote (umbali wa km 15)"
          },
          {
            name: "Kampeni ya Mauzo ya Shirika",
            price: 7500000,
            billingCycle: "kwa mwezi",
            description: "Programu ya premium ya mauzo ya mlango hadi mlango kwa shughuli za kiwango cha juu",
            features: [
              "Wawakilishi 8 wa mauzo wa hali ya juu",
              "Ufikaji wa wakati wote (masaa 80 kwa wiki)",
              "Njia ya mauzo ya njia nyingi",
              "Ripoti na kufuatilia kwa wakati halisi",
              "Mfumo wa alama za wateja wa hali ya juu",
              "Nyenzo za mauzo za chapa maalum",
              "Upangaji wa upanuzi wa eneo",
              "Mashauri ya mkakati wa kila wiki",
              "Meneja wa akaunti aliyetengwa",
              "Uchambuzi wa ROI na uboreshaji"
            ],
            popular: false,
            deliveryTime: "Kampeni inaanza ndani ya masaa 24",
            coverage: "Ufikaji wa kikanda (umbali wa km 50)"
          }
        ],
        customNote: "Vifurushi vyote vinajumuisha utafiti wa soko wa awali na uchambuzi wa washindani. Maeneo maalum na bidhaa za kipekee zinapatikana kwa ombi."
      },
      
      // Website and Application Development pricing
      'Website & App Development': {
        currency: 'TZS',
        packages: [
          {
            name: "Tovuti ya Kimsingi",
            price: 2500000,
            billingCycle: "mara moja",
            description: "Suluhisho la tovuti ya kitaalamu kwa biashara ndogo na chapa za kibinafsi",
            features: [
              "Tovuti ya kuruka ya kurasa 5",
              "Muundo unaofaa simu",
              "Uboreshaji wa SEO wa kimsingi",
              "Ujumuishaji wa fomu ya mawasiliano",
              "Viungo vya mitandao ya kijamii",
              "Jina la kikoa na upangishi wa mwaka 1 zimejumuishwa",
              "Usanidi wa takwimu za kimsingi",
              "Matengenezo ya bure ya miezi 3"
            ],
            popular: false,
            deliveryTime: "Kukamilika kwa wiki 2-3",
            revisions: "Marekebisho 3 ya muundo yamejumuishwa"
          },
          {
            name: "Suluhisho la Wavuti ya Kitaalamu",
            price: 6500000,
            billingCycle: "mara moja",
            description: "Tovuti ya hali ya juu na vipengele vya kawaida na uwezo wa biashara za kielektroniki",
            features: [
              "Tovuti ya kawaida ya kurasa 10",
              "Utendaji wa biashara za kielektroniki",
              "Mfumo wa usimamizi wa maudhui",
              "Uboreshaji wa SEO wa hali ya juu",
              "Ujumuishaji wa lango la malipo",
              "Michoro ya kawaida na chapa",
              "Msaada wa lugha nyingi",
              "Ujumuishaji wa hifadhidata",
              "Matengenezo ya bure ya miezi 6",
              "Mafunzo na nyaraka"
            ],
            popular: true,
            deliveryTime: "Kukamilika kwa wiki 4-6",
            revisions: "Marekebisho 5 ya muundo yamejumuishwa"
          },
          {
            name: "Kifurushi cha Shirika cha Wavuti na Programu",
            price: 15000000,
            billingCycle: "mara moja",
            description: "Suluhisho kamili la kidijitali na jukwaa la wavuti na programu za rununu",
            features: [
              "Programu ya wavuti ya kawaida",
              "Programu za rununu za iOS na Android",
              "Muundo wa hali ya juu wa hifadhidata",
              "Maendeleo ya API na ujumuishaji",
              "Usanidi wa upangishi wa wingu",
              "Utekelezaji wa usalama",
              "Dashibodi ya msimamizi",
              "Mfumo wa usimamizi wa watumiaji",
              "Arifa za kusukuma",
              "Takwimu na ripoti",
              "Matengenezo ya bure ya miezi 12",
              "Msaada wa kiufundi unaoendelea"
            ],
            popular: false,
            deliveryTime: "Kukamilika kwa wiki 8-12",
            revisions: "Marekebisho yasiyo na kikomo wakati wa maendeleo"
          }
        ],
        customNote: "Tovuti zote zina kuruka na zimeongezwa SEO. Vipengele vya kawaida na ujumuishaji unapatikana. Vifurushi vya matengenezo ya kila mwezi kuanzia $200/mwezi."
      },
      
      // Social Media Management pricing
      'Social Media Management': {
        currency: 'TZS',
        packages: [
          {
            name: "Kifurushi cha Kuanza cha Kijamii",
            price: 800000,
            billingCycle: "kwa mwezi",
            description: "Usimamizi muhimu wa mitandao ya kijamii kwa biashara zinazokua",
            features: [
              "Majukwaa 3 ya mitandao ya kijamii",
              "Machapisho 12 kwa mwezi",
              "Uundaji wa maudhui ya kimsingi",
              "Usimamizi wa jamii",
              "Ripoti ya uchambuzi wa kila mwezi",
              "Utafiti wa hashtag na uboreshaji",
              "Muundo wa kimsingi wa picha"
            ],
            popular: false,
            deliveryTime: "Usanidi ndani ya siku 2-3",
            platforms: "Facebook, Instagram, LinkedIn"
          },
          {
            name: "Seti ya Kijamii ya Kitaalamu",
            price: 2200000,
            billingCycle: "kwa mwezi",
            description: "Usimamizi kamili wa mitandao ya kijamii na mkakati wa maudhui wa hali ya juu",
            features: [
              "Majukwaa 5 ya mitandao ya kijamii",
              "Machapisho 25 kwa mwezi",
              "Uundaji wa maudhui wa kitaalamu",
              "Uzalishaji wa hadithi na reel",
              "Usimamizi wa jamii wa hali ya juu",
              "Usimamizi wa matangazo yaliyolipwa",
              "Ripoti za uchambuzi za kila wiki",
              "Uratibu wa ushirikiano wa washawishi",
              "Michoro na video za kawaida",
              "Upangaji wa kalenda ya maudhui"
            ],
            popular: true,
            deliveryTime: "Usanidi ndani ya masaa 24",
            platforms: "Majukwaa makuu yote yamejumuishwa"
          },
          {
            name: "Utawala wa Kijamii wa Shirika",
            price: 5500000,
            billingCycle: "kwa mwezi",
            description: "Usimamizi wa kiwango cha juu wa mitandao ya kijamii na ufuatiliaji wa saa 24/7 na maudhui ya premium",
            features: [
              "Majukwaa yote ya mitandao ya kijamii",
              "Machapisho 50+ kwa mwezi",
              "Uzalishaji wa maudhui ya premium",
              "Uundaji wa video wa kitaalamu",
              "Usimamizi wa jamii wa saa 24/7",
              "Kampeni za matangazo yaliyolipwa za hali ya juu",
              "Dashibodi ya uchambuzi wa wakati halisi",
              "Msaada wa usimamizi wa migogoro",
              "Usimamizi wa ushirikiano wa washawishi",
              "Maudhui ya chapa maalum",
              "Mashauri ya mkakati ya kila mwezi",
              "Usimamizi wa sifa"
            ],
            popular: false,
            deliveryTime: "Usanidi wa mara moja",
            platforms: "Majukwaa yasiyo na kikomo"
          }
        ],
        customNote: "Vifurushi vyote vinajumuisha mchakato wa idhini wa kalenda ya maudhui. Mandhari ya maudhui ya kawaida na mikakati maalum ya sekta inapatikana. Bajeti ya gharama za matangazo inasimamizwa kando."
      },
      
      // Public Tender Services pricing
      'Public Tender Services': {
        currency: 'TZS',
        packages: [
          {
            name: "Huduma ya Tahadhari ya Zabuni",
            price: 500000,
            billingCycle: "kwa mwezi",
            description: "Huduma ya kimsingi ya arifa za zabuni na utafutaji kwa sekta yako ya biashara",
            features: [
              "Tahadhari za zabuni za kila siku",
              "Kuchuja kwa sekta maalum",
              "Arifa za barua pepe",
              "Upatikanaji wa hifadhidata ya zabuni ya kimsingi",
              "Ripoti ya muhtasari wa zabuni za kila mwezi",
              "Viungo vya kupakua nyaraka"
            ],
            popular: false,
            deliveryTime: "Huduma inaanza mara moja",
            coverage: "Zabuni za kitaifa"
          },
          {
            name: "Huduma ya Maandalizi ya Zabuni",
            price: 2500000,
            billingCycle: "kwa zabuni",
            description: "Maandalizi ya kitaalamu ya maombi ya zabuni na msaada wa uwasilishaji",
            features: [
              "Uchambuzi wa nyaraka za zabuni",
              "Uandishi wa mapendekezo ya kitaalamu",
              "Ukaguzi wa orodha ya kufuata",
              "Uumbaji wa nyaraka na kufunga",
              "Uratibu wa uwasilishaji",
              "Kufuatilia na kufuatilia hali",
              "Uchambuzi wa maoni kwa zabuni za baadaye",
              "Uhakiki wa mahitaji ya kisheria"
            ],
            popular: true,
            deliveryTime: "Muda wa maandalizi wa siku 5-7",
            coverage: "Msaada kamili wa maombi"
          },
          {
            name: "Usimamizi Kamili wa Zabuni",
            price: 7500000,
            billingCycle: "kwa mwezi",
            description: "Huduma ya usimamizi wa zabuni kutoka mwanzo hadi mwisho na kushughulikia akaunti inayotengwa",
            features: [
              "Utafiti kamili wa zabuni",
              "Upangaji wa kimkakati wa zabuni",
              "Maendeleo ya mapendekezo ya kitaalamu",
              "Uundaji wa ushirikiano na muungano",
              "Ukaguzi wa kufuata na kisheria",
              "Usimamizi wa uwasilishaji",
              "Kufuatilia baada ya uwasilishaji",
              "Kufuatilia na kuchambua utendaji",
              "Mtaalamu wa zabuni aliyetengwa",
              "Vikao vya mkakati vya kila mwezi",
              "Uboreshaji wa kiwango cha mafanikio"
            ],
            popular: false,
            deliveryTime: "Uamilishaji wa huduma wa mara moja",
            coverage: "Zabuni za kikanda na kimataifa"
          }
        ],
        customNote: "Chaguo za bei zinazotegemea mafanikio zinapatikana. Msaada maalum kwa mikataba ya serikali, zabuni za NGO, na fursa za sekta ya kibinafsi."
      },
      
     // Equipment Sales pricing
'Equipment Sales': {
  currency: 'TZS',
  packages: [
    {
      name: "Kifurushi cha Vifaa vya Kimsingi",
      price: 2000000,
      billingCycle: "kwa agizo",
      description: "Upatikanaji wa vifaa muhimu na ugavi kwa biashara ndogo",
      features: [
        "Upatikanaji wa vifaa na nukuu",
        "Mchakato wa uhakiki wa ubora",
        "Uongozi wa dhamana ya kimsingi",
        "Uratibu wa utoaji",
        "Mwongozo wa usakinishaji",
        "Msaada wa kimsingi baada ya mauzo",
        "Nyaraka za vifaa"
      ],
      popular: false,
      deliveryTime: "Utoaji wa wiki 2-4",
      warranty: "Dhamana ya miezi 6"
    },
    {
      name: "Suluhisho la Vifaa vya Kitaalamu",
      price: 7500000,
      billingCycle: "kwa agizo",
      description: "Ugavi kamili wa vifaa na usakinishaji wa kitaalamu na mafunzo",
      features: [
        "Ubainishaji wa vifaa vya kawaida",
        "Ulinganisho wa nukuu za wasambazaji wengi",
        "Upimaji wa uhakikisho wa ubora",
        "Huduma ya usakinishaji wa kitaalamu",
        "Mafunzo na uwongozi wa wafanyakazi",
        "Uongozi wa dhamana ulioongezwa",
        "Upangaji wa matengenezo",
        "Simu ya msaada wa kiufundi",
        "Ufuatiliaji wa utendaji wa vifaa"
      ],
      popular: true,
      deliveryTime: "Utoaji wa wiki 3-6",
      warranty: "Dhamana kamili ya miezi 12"
    },
    {
      name: "Usimamizi wa Vifaa vya Shirika",
      price: 20000000,
      billingCycle: "kwa mradi",
      description: "Usimamizi kamili wa mzunguko wa maisha wa vifaa kwa shughuli za kiwango cha juu",
      features: [
        "Tathmini kamili ya mahitaji",
        "Kubuni suluhisho la kipekee",
        "Uongozi wa mradi wa kitaalamu",
        "Usakinishaji na upimaji wa kiwango cha juu",
        "Mafunzo makubwa ya wafanyakazi",
        "Huduma za matengenezo ya kudumu",
        "Simu ya msaada wa siku 24/7",
        "Uhakiki wa utendaji wa mara kwa mara",
        "Upanuzi na uboreshaji wa vifaa",
        "Msaada wa uongozi wa hazina",
        "Ripoti za uchambuzi wa data",
        "Uongozi wa dhamana wa miaka 3"
      ],
      popular: false,
      deliveryTime: "Utoaji wa wiki 8-12",
      warranty: "Dhamana kamili ya miaka 3",
      support: "Msaada wa kitaalamu wa siku 24/7",
      maintenance: "Matengenezo ya mchakato wa kila mwezi"
    }
  ],
  additionalServices: [
    {
      name: "Huduma za Matengenezo ya Ziada",
      price: 500000,
      billingCycle: "kwa mwezi",
      description: "Matengenezo ya mara kwa mara na msaada wa kiufundi"
    },
    {
      name: "Mafunzo ya Kitaalamu ya Wafanyakazi",
      price: 1500000,
      billingCycle: "kwa kikundi",
      description: "Mafunzo makubwa ya uendeshaji wa vifaa"
    },
    {
      name: "Uhakiki wa Utendaji wa Vifaa",
      price: 750000,
      billingCycle: "kwa uhakiki",
      description: "Uchambuzi wa kina wa utendaji na mapendekezo"
    }
  ]
}}}