
'use client';

import ServiceHeader from "@/app/components/services/ServiceHeader";
import ServiceFeatures from "@/app/components/services/ServiceFeatures";
import ServiceProcess from "@/app/components/services/ServiceProcess";
import CaseStudies from "@/app/components/services/CaseStudies";
import { MonitorSmartphone, Search, Paintbrush, Rocket, ShoppingCart, BarChart3 } from "lucide-react";
import { useLanguage } from '@/context/LanguageContext';

export default function WebDesignPage() {
  const { language } = useLanguage();
  
  const caseStudies = [
    {
      platform: {
        en: "E-commerce",
        sw: "Biashara ya Mtandaoni"
      },
      title: {
        en: "Luxury Fashion Retailer",
        sw: "Muuzaji wa Mavazi ya Anasa"
      },
      result: {
        en: "Increased conversions by 220%",
        sw: "Ongezeko la uongofu kwa 220%"
      },
      description: {
        en: "Redesigned shopping experience with intuitive navigation",
        sw: "Ubunifu upya wa uzoefu wa ununuzi na urambazaji rahisi"
      },
      icon: "🛍️"
    },
    {
      platform: {
        en: "SaaS Platform",
        sw: "Jukwaa la SaaS"
      },
      title: {
        en: "B2B Analytics Dashboard",
        sw: "Dashibodi ya Uchambuzi wa B2B"
      },
      result: {
        en: "Reduced bounce rate by 65%",
        sw: "Kupunguzwa kwa kiwango cha bounce kwa 65%"
      },
      description: {
        en: "Streamlined complex data visualization",
        sw: "Uboreshaji wa uonyeshaji wa data changamano"
      },
      icon: "📊"
    },
    {
      platform: {
        en: "Healthcare",
        sw: "Afya"
      },
      title: {
        en: "Telemedicine Portal",
        sw: "Jukwaa la Tiba ya Mtandaoni"
      },
      result: {
        en: "Improved appointment bookings by 180%",
        sw: "Uboreshaji wa kuhifadhi miadi kwa 180%"
      },
      description: {
        en: "Accessible design for all age groups",
        sw: "Muundo unaofaa kwa makundi yote ya umri"
      },
      icon: "🏥"
    }
  ];

  const headerContent = {
    title: {
      en: "Transformative",
      sw: "Kubadilika"
    },
    highlight: {
      en: "Web Design",
      sw: "Uundaji wa Tovuti"
    },
    subtitle: {
      en: "Crafting digital experiences that convert visitors into customers",
      sw: "Kuunda uzoefu wa kidijitali unaobadilisha wageni kuwa wateja"
    }
  };

  const featuresContent = {
    title: {
      en: "Our Web Design Solutions",
      sw: "Suluhisho Zetu za Uundaji wa Tovuti"
    },
    features: [
      {
        title: {
          en: "Responsive Design",
          sw: "Muundo Unaobadilika"
        },
        description: {
          en: "Flawless experience across all devices",
          sw: "Uzoefu kamili kwenye vifaa vyote"
        }
      },
      {
        title: {
          en: "SEO Optimized",
          sw: "Iliyoboreshwa kwa SEO"
        },
        description: {
          en: "Built to rank higher in search results",
          sw: "Imejengwa kwa cheo cha juu katika matokeo ya utafutaji"
        }
      },
      {
        title: {
          en: "Custom UX/UI",
          sw: "UX/UI Maalum"
        },
        description: {
          en: "Intuitive designs that enhance engagement",
          sw: "Miundo ya asili inayoimarisha mwingiliano"
        }
      },
      {
        title: {
          en: "Performance",
          sw: "Utendaji"
        },
        description: {
          en: "Fast-loading websites for better UX",
          sw: "Tovuti zinazopakia haraka kwa UX bora"
        }
      },
      {
        title: {
          en: "E-commerce",
          sw: "Biashara ya Mtandaoni"
        },
        description: {
          en: "Seamless store experiences that sell",
          sw: "Uzoefu wa duka bila mshono unaouza"
        }
      },
      {
        title: {
          en: "Analytics",
          sw: "Uchambuzi"
        },
        description: {
          en: "Data-driven continuous improvement",
          sw: "Uboreshaji endelevu unaoongozwa na data"
        }
      }
    ]
  };

  const processContent = {
    title: {
      en: "Our Design Process",
      sw: "Mchakato Wetu wa Ubunifu"
    },
    steps: [
      {
        number: "01",
        title: {
          en: "Discovery",
          sw: "Uchunguzi"
        },
        description: {
          en: "Understanding your business goals and audience",
          sw: "Kuelewa malengo yako ya biashara na watazamaji"
        }
      },
      {
        number: "02",
        title: {
          en: "Wireframing",
          sw: "Uundaji wa Mfumo"
        },
        description: {
          en: "Creating blueprints for seamless experiences",
          sw: "Kuunda ramani za uzoefu bila mshono"
        }
      },
      {
        number: "03",
        title: {
          en: "Development",
          sw: "Maendeleo"
        },
        description: {
          en: "Building with clean, scalable code",
          sw: "Kujenga na msimbo safi, unaoweza kupanuka"
        }
      },
      {
        number: "04",
        title: {
          en: "Launch",
          sw: "Uzinduzi"
        },
        description: {
          en: "Deploying and optimizing for success",
          sw: "Kutekeleza na kuboresha kwa mafanikio"
        }
      }
    ]
  };

  const caseStudiesContent = {
    title: {
      en: "Our",
      sw: "Yetu"
    },
    highlight: {
      en: "Web Design Success Stories",
      sw: "Hadithi za Mafanikio ya Uundaji wa Tovuti"
    }
  };

  return (
    <div className="bg-brand-foam">
      {/* Hero Section */}
      <ServiceHeader
        title={headerContent.title[language]}
        highlight={headerContent.highlight[language]}
        subtitle={headerContent.subtitle[language]}
        bgClass="bg-gradient-to-br from-brand-dark to-brand-deep"
      />

      {/* Features Section */}
      <ServiceFeatures
        title={featuresContent.title[language]}
        features={featuresContent.features.map((feature, index) => ({
          title: feature.title[language],
          description: feature.description[language],
          icon: [
            <MonitorSmartphone className="w-8 h-8 text-brand-accent" />,
            <Search className="w-8 h-8 text-brand-accent" />,
            <Paintbrush className="w-8 h-8 text-brand-accent" />,
            <Rocket className="w-8 h-8 text-brand-accent" />,
            <ShoppingCart className="w-8 h-8 text-brand-accent" />,
            <BarChart3 className="w-8 h-8 text-brand-accent" />
          ][index]
        }))}
      />

      {/* Process Section */}
      <ServiceProcess
        title={processContent.title[language]}
        steps={processContent.steps.map(step => ({
          number: step.number,
          title: step.title[language],
          description: step.description[language]
        }))}
      />

      {/* Case Studies Section */}
      <CaseStudies 
        caseStudies={caseStudies.map(study => ({
          platform: study.platform[language],
          title: study.title[language],
          result: study.result[language],
          description: study.description[language],
          icon: study.icon
        }))}
        title={caseStudiesContent.title[language]}
        highlight={caseStudiesContent.highlight[language]}
        bgClass="bg-white"
      />
    </div>
  );
}