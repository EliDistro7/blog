'use client';

import { useLanguage } from '@/context/LanguageContext';
import { Linkedin, Twitter, Instagram, Mail, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import TeamMemberCard from '@/app/components/TeamMemberCard';

export default function TeamPage() {
  const { language } = useLanguage();

  const content = {
    en: {
      hero: {
        title: "Meet Our",
        highlight: "Leadership",
        subtitle: "The brilliant minds driving innovation across every department"
      },
      values: {
        title: "Our",
        highlight: "Leadership Values",
        items: [
          {
            title: "Integrity",
            desc: "We uphold the highest ethical standards in all decisions",
            icon: "⚖️"
          },
          {
            title: "Innovation",
            desc: "We champion creative solutions and continuous improvement",
            icon: "💡"
          },
          {
            title: "Excellence",
            desc: "We pursue outstanding quality in everything we do",
            icon: "🏆"
          },
          {
            title: "Accountability",
            desc: "We take ownership of our actions and results",
            icon: "📝"
          },
          {
            title: "Collaboration",
            desc: "We achieve more through teamwork and shared knowledge",
            icon: "🤝"
          },
          {
            title: "Vision",
            desc: "We lead with strategic foresight and clear direction",
            icon: "🔭"
          }
        ]
      },
      cta: {
        title: "Ready to Work With Us?",
        subtitle: "Get in touch with our team to discuss how we can collaborate on your next project.",
        button: "Contact Our Team"
      }
    },
    sw: {
      hero: {
        title: "Kutana Na",
        highlight: "Viongozi Wetu",
        subtitle: "Akili changamano zinazoongoza uvumbuzi katika kila idara"
      },
      values: {
        title: "Maadili Yetu ya",
        highlight: "Uongozi",
        items: [
          {
            title: "Uadilifu",
            desc: "Tunashika viwango vya juu zaidi vya maadili katika kila uamuzi",
            icon: "⚖️"
          },
          {
            title: "Ubunifu",
            desc: "Tunatanguliza suluhisho za ubunifu na uboreshaji endelevu",
            icon: "💡"
          },
          {
            title: "Ubora",
            desc: "Tunatafuta ubora wa hali ya juu katika kila tunachofanya",
            icon: "🏆"
          },
          {
            title: "Uwajibikaji",
            desc: "Tunachukua uwajibikaji wa matendo na matokeo yetu",
            icon: "📝"
          },
          {
            title: "Ushirikiano",
            desc: "Tunafanikiwa zaidi kupitia kazi ya pamoja na kushiriki maarifa",
            icon: "🤝"
          },
          {
            title: "Maono",
            desc: "Tunaongoza kwa mtazamo wa kimkakati na mwelekeo wazi",
            icon: "🔭"
          }
        ]
      },
      cta: {
        title: "Tayari Kufanya Kazi Nasi?",
        subtitle: "Wasiliana na timu yetu kujadili jinsi tunaweza kushirikiana kwenye mradi wako unaofuata.",
        button: "Wasiliana na Timu Yetu"
      }
    }
  };

  const departmentHeads = [
    {
      name: "Allan Mushi",
      role: {
        en: "Head of Sales and Marketing",
        sw: "Mkuu wa Masoko na Mauzo"
      },
      department: {
        en: "Sales & Marketing",
        sw: "Mauzo na Masoko"
      },
      bio: {
        en: "8+ years driving revenue growth and brand expansion. Specializes in digital marketing strategies and sales pipeline optimization.",
        sw: "Zaidi ya miaka 8 ya kuongeza mapato na upanuzi wa chapa. Mtaalamu wa mikakati ya uuzaji wa kidijitali na uboreshaji wa mfumo wa mauzo."
      },
      image: '/team/allan.jpeg',
      tzExperience: {
        en: "5+ years growing Tanzanian brands",
        sw: "Zaidi ya miaka 5 ya kukuza chapa za Tanzania"
      },
      badge: {
        en: "Certified Sales Leader (CPSL)",
        sw: "Kiongozi wa Mauzo Aliyethibitishwa (CPSL)"
      },
      skills: {
        en: [
          "Digital Marketing Strategy",
          "CRM Management",
          "Market Analysis",
          "Sales Team Leadership",
          "Revenue Growth"
        ],
        sw: [
          "Mkakati wa Uuzaji wa Kidijitali",
          "Usimamizi wa CRM",
          "Uchambuzi wa Soko",
          "Uongozi wa Timu ya Mauzo",
          "Ukuaji wa Mapato"
        ]
      }
    },
    // New team members with translations:
    {
      name: "Japhet Ezeckiel",
      role: {
        en: "Head MC",
        sw: "Mwenye Sherehe"
      },
      department: {
        en: "Master of Ceremonies",
        sw: "Mwenye Sherehe"
      },
      bio: {
        en: "Charismatic host with 8 years experience in weddings and corporate events across Tanzania.",
        sw: "Mwenye hotuba mwenye mvuto akiwa na uzoefu wa miaka 8 katika harusi na matukio ya kampuni kote Tanzania."
      },
      image: '/team/japhet.jpeg',
      tzExperience: {
        en: "Known as 'Bwana Shindano' on TZ reality TV",
        sw: "Anayejulikana kama 'Bwana Shindano' kwenye TV halisi ya Tanzania"
      },
      badge: {
        en: "Tanzania Events Host of the Year 2022",
        sw: "Mwenye Hotuba wa Matukio ya Tanzania wa Mwaka 2022"
      },
      skills: {
        en: [
          "Public Speaking",
          "Event Planning",
          "Audience Engagement",
          "Script Writing",
          "Bilingual Hosting"
        ],
        sw: [
          "Uzungumza hadharani",
          "Mipango ya Matukio",
          "Ushirikiano wa Watazamaji",
          "Uandishi wa Skripti",
          "Ukarimu wa Lugha Mbili"
        ]
      }
    },
    {
      name: "Rose",
      role: {
        en: "Chief Editor",
        sw: "Mhariri Mkuu"
      },
      department: {
        en: "Content Editor",
        sw: "Mhariri wa Maudhui"
      },
      bio: {
        en: "Digital content editor growing brands across Africa. Fluent in Swahili/English content creation.",
        sw: "Mhariri wa maudhui ya kidijitali anayeendeleza chapa kote Afrika. Ana ufasaha katika uundaji wa maudhui kwa Kiswahili na Kiingereza."
      },
      image: '/team/benny.jpeg',
      tzExperience: {
        en: "Built 5 Tanzanian brands to 100K+ followers",
        sw: "Amewasisha chapa 5 za Tanzania hadi kufikia wafuasi zaidi ya 100K"
      },
      badge: {
        en: "Meta Certified Professional",
        sw: "Mtaalamu aliyeidhinishwa na Meta"
      },
      skills: {
        en: [
          "Content Strategy",
          "SEO Writing",
          "Social Media Management",
          "Brand Voice Development",
          "Multilingual Content"
        ],
        sw: [
          "Mkakati wa Maudhui",
          "Uandishi wa SEO",
          "Usimamizi wa Mitandao ya Kijamii",
          "Uendelezaji wa Sauti ya Chapa",
          "Maudhui ya Lugha Mbili au Zaidi"
        ]
      }
    },
    {
      name: "Bariki Kaneno",
      role: {
        en: "Lead Developer",
        sw: "Mtaalam Mkuu wa Maendeleo"
      },
      department: {
        en: "Technology",
        sw: "Teknolojia"
      },
      bio: {
        en: "Full stack developer with expertise in modern web technologies. Architect of our digital platforms and technical vision.",
        sw: "Mtaalamu wa maendeleo ya teknolojia za wavuti za kisasa. Mbunifu wa majukwaa yetu ya kidijitali na maono ya kiteknolojia."
      },
      image: '/team/bari4.png',
      tzExperience: {
        en: "Building Tanzania's digital future",
        sw: "Anaweka msingi wa mustakabali wa kidijitali wa Tanzania"
      },
      badge: {
        en: "Lead Developer",
        sw: "Mtaalam Mkuu wa Maendeleo"
      },
      skills: {
        en: [
          "React/Next.js",
          "Node.js",
          "TypeScript",
          "Cloud Architecture",
          "Database Design",
          "API Development"
        ],
        sw: [
          "React/Next.js",
          "Node.js",
          "TypeScript",
          "Usanifu wa Wingu",
          "Ubunifu wa Hifadhidata",
          "Uendelezaji wa API"
        ]
      }
    },
    {
      name: "Benny",
      role: {
        en: "Head of Catering",
        sw: "Mkuu wa Huduma za Chakula"
      },
      department: {
        en: "Catering Services",
        sw: "Huduma za Chakula"
      },
      bio: {
        en: "Gourmet chef trained in Zanzibar and Paris. Creates unforgettable culinary experiences.",
        sw: "Chef wa kiwango cha juu aliyefunzwa Zanzibar na Paris. Hutoa uzoefu wa kupendeza wa upishi usiosahaulika."
      },
      image: '/team/benny.jpeg',
      tzExperience: {
        en: "Former head chef at Serengeti Safari Lodge",
        sw: "Mkuu wa upishi hapo awali katika Serengeti Safari Lodge"
      },
      badge: {
        en: "Tanzania Culinary Award Winner",
        sw: "Mshindi wa Tuzo ya Upishi ya Tanzania"
      },
      skills: {
        en: [
          "Menu Development",
          "Food Presentation",
          "Large-scale Catering",
          "Local Cuisine Expert",
          "International Flavors"
        ],
        sw: [
          "Maendeleo ya Menyu",
          "Uwasilishaji wa Chakula",
          "Huduma za Chakula kwa Wingi",
          "Mtaalamu wa Vyakula vya Kawaida",
          "Ladha za Kimataifa"
        ]
      }
    },
  ];
  

  return (
    <div className="bg-brand-foam">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-dark to-brand-blue text-white pt-12 pb-28 px-4">
        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif">
            {content[language].hero.title}{' '}
            <span className="text-brand-yellow">{content[language].hero.highlight}</span>
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto">
            {content[language].hero.subtitle}
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-brand-foam clip-path-wave"></div>
      </section>

      {/* Team Grid */}
      <section className="container mx-auto py-20 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {departmentHeads.map((member, index) => (
            <TeamMemberCard 
              key={index} 
              {...member}
              role={typeof member.role === 'string' ? member.role : member.role[language]}
              department={typeof member.department === 'string' ? member.department : member.department[language]}
              bio={typeof member.bio === 'string' ? member.bio : member.bio[language]}
              tzExperience={typeof member.tzExperience === 'string' ? member.tzExperience : member.tzExperience[language]}
              badge={typeof member.badge === 'string' ? member.badge : member.badge[language]}
              skills={Array.isArray(member.skills) ? member.skills : member.skills[language]}
            />
          ))}
        </div>
      </section>

      {/* Professional Leadership Values Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12 font-serif">
            <span className="text-brand-green">{content[language].values.title}</span>{' '}
            {content[language].values.highlight}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {content[language].values.items.map((value, i) => (
              <div key={i} className="bg-brand-foam/50 p-8 rounded-xl">
                <span className="text-4xl mb-4 inline-block">{value.icon}</span>
                <h3 className="text-xl font-bold text-brand-dark mb-2">{value.title}</h3>
                <p className="text-gray-700">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="bg-gradient-to-r from-brand-blue to-brand-teal py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">{content[language].cta.title}</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {content[language].cta.subtitle}
          </p>
          <Link
            href="/contact" 
            className="inline-flex items-center justify-center gap-2 bg-white text-brand-dark font-bold px-8 py-4 rounded-full hover:bg-brand-foam transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Mail className="w-5 h-5" />
            {content[language].cta.button}
          </Link>
        </div>
      </section>
    </div>
  );
}