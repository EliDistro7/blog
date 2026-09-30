// @/app/components/equipment/data.js
// Content only. No icons or emoji: the design carries the structure with type and numbers.

export const equipmentHeroStats = [
  { number: '500+', label: { en: 'Equipment Units Sold', sw: 'Vifaa Vilivyouzwa' } },
  { number: '15+',  label: { en: 'Years Experience', sw: 'Miaka ya Uzoefu' } },
  { number: '98%',  label: { en: 'Customer Satisfaction', sw: 'Kuridhika kwa Wateja' } },
  { number: '50+',  label: { en: 'Partner Brands', sw: 'Chapa Washirika' } },
];

export const equipmentCategories = [
  {
    id: 1,
    name: { en: 'Excavators', sw: 'Mashine za Kuchimba' },
    description: { en: 'Heavy-duty excavators for all construction needs', sw: 'Mashine nzito za kuchimba kwa mahitaji yote ya ujenzi' },
    models: ['CAT 320D', 'Komatsu PC200', 'Volvo EC210', 'JCB JS205'],
    priceRange: { en: '$50,000 \u2013 $200,000', sw: 'TSh 120M \u2013 480M' },
  },
  {
    id: 2,
    name: { en: 'Bulldozers', sw: 'Matingatinga' },
    description: { en: 'Powerful bulldozers for earthmoving and grading', sw: 'Matingatinga yenye nguvu kwa kusogeza na kusawazisha ardhi' },
    models: ['CAT D6T', 'Komatsu D65', 'John Deere 750K', 'Liebherr PR734'],
    priceRange: { en: '$80,000 \u2013 $300,000', sw: 'TSh 190M \u2013 720M' },
  },
  {
    id: 3,
    name: { en: 'Wheel Loaders', sw: 'Mashine za Kupakia' },
    description: { en: 'Efficient wheel loaders for material handling', sw: 'Mashine bora za kupakia na kushughulikia vifaa' },
    models: ['CAT 966M', 'Volvo L120H', 'Komatsu WA380', 'JCB 457'],
    priceRange: { en: '$60,000 \u2013 $250,000', sw: 'TSh 145M \u2013 600M' },
  },
  {
    id: 4,
    name: { en: 'Dump Trucks', sw: 'Malori ya Kumwaga' },
    description: { en: 'Heavy-duty dump trucks for material transport', sw: 'Malori mazito ya kusafirisha vifaa' },
    models: ['CAT 735C', 'Volvo A40G', 'Komatsu HM300', 'Bell B30E'],
    priceRange: { en: '$70,000 \u2013 $280,000', sw: 'TSh 170M \u2013 670M' },
  },
];

export const services = [
  {
    title: { en: 'Equipment Sales', sw: 'Mauzo ya Vifaa' },
    description: { en: 'New and certified pre-owned construction equipment from leading manufacturers', sw: 'Vifaa vipya na vilivyotumika lakini vimethibitishwa kutoka kwa watengenezaji wakuu' },
  },
  {
    title: { en: 'Maintenance & Repair', sw: 'Matengenezo na Ukarabati' },
    description: { en: 'Professional maintenance and repair services to keep your equipment running', sw: 'Huduma za kitaalamu za matengenezo na ukarabati ili vifaa vyako viendelee kufanya kazi' },
  },
  {
    title: { en: 'Warranty & Support', sw: 'Dhamana na Msaada' },
    description: { en: 'Comprehensive warranty coverage and 24/7 technical support', sw: 'Dhamana kamili na msaada wa kiufundi saa 24 kwa siku' },
  },
  {
    title: { en: 'Financing Options', sw: 'Chaguo za Ufadhili' },
    description: { en: 'Flexible financing and leasing options to fit your budget', sw: 'Chaguo nyumbufu za ufadhili na kukodisha zinazofaa bajeti yako' },
  },
];

export const process = [
  {
    step: '01',
    title: { en: 'Consultation', sw: 'Ushauri' },
    description: { en: 'Discuss your project needs and equipment requirements', sw: 'Jadili mahitaji ya mradi wako na vifaa unavyohitaji' },
  },
  {
    step: '02',
    title: { en: 'Equipment Selection', sw: 'Uchaguzi wa Vifaa' },
    description: { en: 'Choose from our wide range of quality construction equipment', sw: 'Chagua kutoka kwa vifaa vyetu vingi vya ujenzi vya ubora' },
  },
  {
    step: '03',
    title: { en: 'Inspection & Testing', sw: 'Ukaguzi na Majaribio' },
    description: { en: 'Thorough inspection and testing of selected equipment', sw: 'Ukaguzi na majaribio ya kina ya vifaa vilivyochaguliwa' },
  },
  {
    step: '04',
    title: { en: 'Delivery & Training', sw: 'Utoaji na Mafunzo' },
    description: { en: 'Equipment delivery and operator training at your site', sw: 'Utoaji wa vifaa na mafunzo ya waendeshaji kwenye eneo lako' },
  },
];

export const testimonials = [
  {
    name: 'John Mwangi',
    company: 'Mwangi Construction Ltd',
    comment: {
      en: 'Excellent equipment quality and outstanding customer service. Our CAT excavator has been running smoothly for 2 years.',
      sw: 'Ubora wa vifaa ni bora sana na huduma ya wateja ni ya kipekee. Mashine yetu ya CAT imekuwa ikifanya kazi vizuri kwa miaka 2.',
    },
  },
  {
    name: 'Grace Kilimo',
    company: 'Kilimo Heavy Works',
    comment: {
      en: 'Professional team and competitive prices. The financing options made it possible for us to expand our fleet.',
      sw: 'Timu ya kitaalamu na bei shindani. Chaguo za ufadhili zilituwezesha kupanua kundi letu la vifaa.',
    },
  },
  {
    name: 'Ahmed Hassan',
    company: 'Hassan Earthmoving',
    comment: {
      en: 'Reliable equipment and excellent after-sales support. They respond quickly whenever we need assistance.',
      sw: 'Vifaa vya kuaminika na msaada mzuri baada ya mauzo. Hujibu haraka tunapohitaji msaada.',
    },
  },
];

export const pricingPlans = [
  {
    name: { en: 'Basic Package', sw: 'Kifurushi cha Msingi' },
    price: { en: '$2,000/month', sw: 'TSh 4.8M/mwezi' },
    features: [
      { en: 'Equipment rental', sw: 'Ukodishaji wa vifaa' },
      { en: 'Basic maintenance', sw: 'Matengenezo ya msingi' },
      { en: 'Operator training', sw: 'Mafunzo ya waendeshaji' },
      { en: 'Monthly inspections', sw: 'Ukaguzi wa kila mwezi' },
    ],
  },
  {
    name: { en: 'Professional Package', sw: 'Kifurushi cha Kitaalamu' },
    price: { en: '$3,500/month', sw: 'TSh 8.4M/mwezi' },
    popular: true,
    features: [
      { en: 'Everything in Basic', sw: 'Kila kitu katika Msingi' },
      { en: 'Priority support', sw: 'Msaada wa kipaumbele' },
      { en: 'Extended warranty', sw: 'Dhamana iliyoongezwa' },
      { en: 'Performance monitoring', sw: 'Ufuatiliaji wa utendaji' },
      { en: 'Replacement guarantee', sw: 'Dhamana ya kubadilishiwa' },
    ],
  },
  {
    name: { en: 'Enterprise Package', sw: 'Kifurushi cha Makampuni' },
    price: { en: 'Custom quote', sw: 'Bei Maalum' },
    features: [
      { en: 'Everything in Professional', sw: 'Kila kitu katika Kitaalamu' },
      { en: 'Fleet management', sw: 'Usimamizi wa kundi la vifaa' },
      { en: '24/7 emergency support', sw: 'Msaada wa dharura 24/7' },
      { en: 'Custom financing', sw: 'Ufadhili maalum' },
      { en: 'Dedicated account manager', sw: 'Meneja mahususi wa akaunti' },
    ],
  },
];

export const faqs = [
  {
    question: { en: 'What brands of equipment do you sell?', sw: 'Mnauza chapa gani za vifaa?' },
    answer: {
      en: 'We partner with leading manufacturers including Caterpillar, Komatsu, Volvo, JCB, John Deere, and many others to provide quality construction equipment.',
      sw: 'Tunashirikiana na watengenezaji wakuu ikiwa ni pamoja na Caterpillar, Komatsu, Volvo, JCB, John Deere, na wengine wengi ili kutoa vifaa vya ujenzi vya ubora.',
    },
  },
  {
    question: { en: 'Do you offer financing options?', sw: 'Je, mnatoa chaguo za ufadhili?' },
    answer: {
      en: 'Yes, we offer flexible financing and leasing options with competitive rates. Our team can help you find the best payment plan for your business.',
      sw: 'Ndiyo, tunatoa chaguo nyumbufu za ufadhili na kukodisha kwa viwango shindani. Timu yetu inaweza kukusaidia kupata mpango bora wa malipo kwa biashara yako.',
    },
  },
  {
    question: { en: 'What warranty coverage do you provide?', sw: 'Mnatoa dhamana gani?' },
    answer: {
      en: 'All new equipment comes with manufacturer warranty, and we offer extended warranty options. Pre-owned equipment includes our certified quality guarantee.',
      sw: 'Vifaa vyote vipya vinakuja na dhamana ya mtengenezaji, na tunatoa chaguo za dhamana iliyoongezwa. Vifaa vilivyotumika vina dhamana yetu ya ubora uliothibitishwa.',
    },
  },
  {
    question: { en: 'Do you provide equipment training?', sw: 'Je, mnatoa mafunzo ya vifaa?' },
    answer: {
      en: 'Yes, we provide comprehensive operator training for all equipment purchases. Our certified trainers ensure your operators can safely and efficiently use the equipment.',
      sw: 'Ndiyo, tunatoa mafunzo kamili ya waendeshaji kwa ununuzi wote wa vifaa. Wakufunzi wetu waliothibitishwa wanahakikisha waendeshaji wako wanatumia vifaa kwa usalama na ufanisi.',
    },
  },
];
