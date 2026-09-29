// Bilingual data. Every user-facing string is { en, sw }; components resolve it with tr().
const t = (en, sw) => ({ en, sw });

// ── Portfolio ─────────────────────────────────────────────────────────────────
export const portfolioProjects = [
  {
    url: 'www.pichazangu.store',
    title: 'PichaZangu Store',
    description: t(
      'A comprehensive platform for photographers to store, manage, and sell images and event videos with integrated payment systems',
      'Jukwaa kamili kwa wapiga picha kuhifadhi, kusimamia na kuuza picha na video za matukio, pamoja na mifumo jumuishi ya malipo'
    ),
    category: t('E-commerce & media platform', 'E-commerce na jukwaa la media'),
    features: [
      t('Image storage', 'Uhifadhi wa picha'),
      t('Video management', 'Usimamizi wa video'),
      t('Payment integration', 'Uunganishaji wa malipo'),
      t('User dashboard', 'Dashibodi ya mtumiaji'),
    ],
  },
  {
    url: 'www.amkakijana.org',
    title: 'Amka Kijana',
    description: t(
      'NGO website focused on reproductive and mental health education with resource libraries and educational content',
      'Tovuti ya shirika lisilo la kiserikali inayojikita katika elimu ya afya ya uzazi na afya ya akili, yenye maktaba ya rasilimali na maudhui ya kielimu'
    ),
    category: t('Non-profit & education', 'Isiyo ya faida na elimu'),
    features: [
      t('Content management', 'Usimamizi wa maudhui'),
      t('Resource library', 'Maktaba ya rasilimali'),
      t('Educational portal', 'Lango la elimu'),
      t('Community features', 'Vipengele vya jamii'),
    ],
  },
  {
    url: 'www.fourfreyn.com',
    title: 'Four Freyn Agriculture',
    description: t(
      'Professional company profile site for an agriculture business showcasing services, products, and company information',
      'Tovuti ya kitaalamu ya wasifu wa kampuni ya kilimo inayoonyesha huduma, bidhaa na taarifa za kampuni'
    ),
    category: t('Corporate website', 'Tovuti ya kampuni'),
    features: [
      t('Company profile', 'Wasifu wa kampuni'),
      t('Service showcase', 'Onyesho la huduma'),
      t('Product catalog', 'Katalogi ya bidhaa'),
      t('Contact management', 'Usimamizi wa mawasiliano'),
    ],
  },
  {
    url: 'www.kkktyombo.org',
    title: 'KKKT Yombo',
    description: t(
      'Church management system for a Lutheran congregation with member management and event coordination',
      'Mfumo wa usimamizi wa kanisa kwa usharika wa Kilutheri wenye usimamizi wa waumini na uratibu wa matukio'
    ),
    category: t('Management system', 'Mfumo wa usimamizi'),
    features: [
      t('Member management', 'Usimamizi wa waumini'),
      t('Event planning', 'Mipango ya matukio'),
      t('Communication tools', 'Zana za mawasiliano'),
      t('Admin dashboard', 'Dashibodi ya msimamizi'),
    ],
  },
  {
    url: 'www.futureholder.pro',
    title: 'Future Holders',
    description: t(
      'Our own company website showcasing our full range of services and team capabilities',
      'Tovuti ya kampuni yetu inayoonyesha huduma zetu zote na uwezo wa timu yetu'
    ),
    category: t('Company website', 'Tovuti ya kampuni'),
    features: [
      t('Service portfolio', 'Portfolio ya huduma'),
      t('Team showcase', 'Onyesho la timu'),
      t('Project gallery', 'Ghala la miradi'),
      t('Client testimonials', 'Ushuhuda wa wateja'),
    ],
    inProgress: true,
  },
];

// ── Packages ──────────────────────────────────────────────────────────────────
// Features shared between packages are defined once, so the pricing section can
// show "Everything in Dynamic website, plus…" for the Premium package.
const F = {
  hosting:     t('1 year free hosting and domain', 'Hosting na domain bure kwa mwaka 1'),
  sourceCode:  t('Full source code', 'Msimbo chanzo kamili'),
  seo:         t('Search engine optimization (SEO)', 'Uboreshaji wa injini za utafutaji (SEO)'),
  siteMap:     t('Site map', 'Ramani ya tovuti'),
  keywords:    t('Keyword search', 'Utafutaji kwa maneno muhimu'),
  onPage:      t('On-page optimization', 'Uboreshaji wa kurasa (on-page)'),
  bandwidth:   t('Unlimited bandwidth', 'Bandwidth isiyo na kikomo'),
  analytics:   t('Website analytics (weekly and monthly)', 'Takwimu za tovuti (kila wiki na kila mwezi)'),
  socialLinks: t('Linked with social media', 'Imeunganishwa na mitandao ya kijamii'),
  ssl:         t('SSL certificate', 'Cheti cha SSL'),
  adminPanel:  t('Admin panel', 'Paneli ya msimamizi'),
  whatsapp:    t('WhatsApp chatbot', 'WhatsApp chatbot'),
  liveChat:    t('Live chat bot', 'Live chat bot'),
  reviews:     t('Customer review section', 'Sehemu ya maoni ya wateja'),
  smm:         t('Social media management', 'Usimamizi wa mitandao ya kijamii'),
  dailyPosts:  t('2 pictures and 1 video post daily', 'Picha 2 na video 1 kila siku'),
  content:     t('Content creation', 'Uundaji wa maudhui'),
  templates:   t('Graphic templates', 'Violezo vya michoro'),
  ads:         t('2 ads monthly', 'Matangazo 2 kila mwezi'),
  officeVideo: t('1 video content at the office per month', 'Video 1 ya maudhui ofisini kila mwezi'),
  platforms:   t(
    'Instagram, Threads, Facebook, LinkedIn, TikTok, X (Twitter)',
    'Instagram, Threads, Facebook, LinkedIn, TikTok, X (Twitter)'
  ),
};

const dynamicFeatures = [
  t('5 pages', 'Kurasa 5'),
  F.hosting,
  F.sourceCode,
  t('3 months free maintenance', 'Matengenezo bure kwa miezi 3'),
  F.seo,
  F.siteMap,
  F.keywords,
  F.onPage,
  t('5 email accounts', 'Barua pepe 5'),
  t('20 subdomains', 'Subdomain 20'),
  F.bandwidth,
  t('75 GB SSD storage', 'Hifadhi ya SSD ya GB 75'),
  F.analytics,
  F.socialLinks,
  F.ssl,
  F.adminPanel,
  F.whatsapp,
];

export const packages = [
  {
    id: 'static',
    name: t('Static website', 'Tovuti ya static'),
    type: t('Static website + blog', 'Tovuti ya static + blogu'),
    price: 'TSH 300,000',
    features: [
      t('3 pages (Home, About us, Contact us)', 'Kurasa 3 (Mwanzo, Kuhusu sisi, Mawasiliano)'),
      F.hosting,
      F.sourceCode,
      t('1 month free maintenance', 'Matengenezo bure kwa mwezi 1'),
      F.seo,
      t('3 email accounts', 'Barua pepe 3'),
      t('5 subdomains', 'Subdomain 5'),
      F.bandwidth,
      t('30 GB SSD storage', 'Hifadhi ya SSD ya GB 30'),
      F.analytics,
      F.socialLinks,
      F.ssl,
    ],
    popular: false,
  },
  {
    id: 'dynamic',
    name: t('Dynamic website', 'Tovuti ya dynamic'),
    type: t('Dynamic website + blog', 'Tovuti ya dynamic + blogu'),
    price: 'TSH 500,000',
    features: dynamicFeatures,
    popular: true,
  },
  {
    id: 'premium',
    name: t('Premium package', 'Kifurushi cha Premium'),
    type: t('Dynamic website + social media management', 'Tovuti ya dynamic + usimamizi wa mitandao ya kijamii'),
    price: 'TSH 700,000',
    extends: 'dynamic',
    features: [
      ...dynamicFeatures,
      F.liveChat,
      F.reviews,
      F.smm,
      F.dailyPosts,
      F.content,
      F.templates,
      F.ads,
      F.officeVideo,
      F.platforms,
    ],
    popular: false,
  },
];