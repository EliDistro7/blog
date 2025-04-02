import ServiceHeader from "@/app/components/services/ServiceHeader";
import ServiceFeatures from "@/app/components/services/ServiceFeatures";
import ServiceProcess from "@/app/components/services/ServiceProcess";
import { Mic2, Calendar, Languages, Award, Laugh, Sparkles } from "lucide-react";

export default function MCServicesPage() {
  const features = [
    {
      title: "Bilingual Hosting",
      description: "Fluent in English & Swahili for diverse audiences",
      icon: <Languages className="w-8 h-8 text-brand-gold" />
    },
    {
      title: "Event Coordination",
      description: "Seamless timeline management",
      icon: <Calendar className="w-8 h-8 text-brand-gold" />
    },
    {
      title: "Crowd Engagement",
      description: "Interactive techniques to energize",
      icon: <Laugh className="w-8 h-8 text-brand-gold" />
    },
    {
      title: "Award Ceremonies",
      description: "Professional honors handling",
      icon: <Award className="w-8 h-8 text-brand-gold" />
    },
    {
      title: "Corporate Events",
      description: "Polished business hosting",
      icon: <Mic2 className="w-8 h-8 text-brand-gold" />
    },
    {
      title: "Cultural Adaptation",
      description: "Tailored Tanzanian approach",
      icon: <Sparkles className="w-8 h-8 text-brand-gold" />
    }
  ];

  return (
    <div className="bg-gradient-to-b from-brand-foam to-white">
      {/* Hero with Gold Gradient */}
      <ServiceHeader
        title="Professional"
        highlight="Master of Ceremonies"
        subtitle="Elevating events with charismatic hosting and Tanzanian flair"
        bgClass="bg-gradient-to-br from-brand-dark via-brand-goldDark to-brand-gold"
      />

      {/* Gold Accent Section */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/gold-pattern.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto text-center border border-brand-gold/20">
            <Mic2 className="w-14 h-14 mx-auto text-brand-gold mb-6 drop-shadow-icon" />
            <h2 className="text-4xl font-bold font-serif mb-6 bg-clip-text text-transparent bg-gradient-to-r from-brand-goldDark to-brand-gold">
              Events That Shine
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              "Our MCs blend <span className="font-semibold text-brand-goldDark">professional polish</span> with 
              <span className="font-semibold text-brand-goldDark"> Tanzanian warmth</span> - creating unforgettable moments"
            </p>
          </div>
        </div>
      </div>

      {/* Features with Gold Highlights */}
      <ServiceFeatures
        title={`
      
            Our Signature MC Skills
          `
        }
        features={features}
       
      />

      {/* Event Types with Gold Hover */}
      <div className="py-20 bg-gradient-to-b from-white to-brand-foam">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 font-serif">
            Perfect For <span className="text-brand-gold">Your Event</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: "Weddings", icon: "💍" },
              { name: "Corporate", icon: "👔" },
              { name: "Launches", icon: "🚀" },
              { name: "Awards", icon: "🏆" },
              { name: "Charity", icon: "🤝" },
              { name: "Festivals", icon: "🌍" }
            ].map((event) => (
              <div 
                key={event.name} 
                className="bg-white p-6 rounded-xl text-center transition-all 
                           border-2 border-transparent hover:border-brand-gold/50
                           hover:shadow-gold hover:bg-brand-gold/5"
              >
                <span className="text-3xl block mb-3">{event.icon}</span>
                <h3 className="font-medium">{event.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gold Process Timeline */}
      <ServiceProcess
        title={`
         
            Our Gold Standard Process
          `
        }
        steps={[
          {
            number: "01",
            title: "Event Briefing",
            description: "Understanding your vision"
          },
          {
            number: "02",
            title: "Script Customization",
            description: "Tailoring to your event's tone"
          },
          {
            number: "03",
            title: "Rehearsal",
            description: "Aligning with speakers"
          },
          {
            number: "04",
            title: "Execution",
            description: "Flawless hosting"
          }
        ]}
      
       
      />

      {/* Testimonials with Gold Accent */}
      <div className="py-20 bg-gradient-to-b from-brand-foam to-white relative">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent"></div>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12 font-serif">
            <span className="text-brand-gold">Client</span> Praise
          </h2>
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-sm border border-brand-gold/20">
            <blockquote className="text-xl italic mb-6">
              "Our wedding MC blended modern energy with traditional respect - 
              keeping 300 guests engaged for 8 hours!"
            </blockquote>
            <div className="w-16 h-1 bg-brand-gold mx-auto mb-4"></div>
            <p className="font-bold">- Sarah & James, Dar es Salaam</p>
          </div>
        </div>
      </div>

      {/* Gold CTA */}
      <div className="bg-gradient-to-br from-brand-dark to-brand-goldDark py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 font-serif">
            Ready for <span className="text-brand-goldLight">Golden Moments</span>?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-brand-gold hover:bg-brand-goldLight text-brand-dark rounded-full font-bold shadow-depth transition-all hover:scale-105">
              Book Our MCs
            </button>
            <button className="px-8 py-4 border-2 border-white hover:bg-white/10 rounded-full font-bold transition-colors">
              View MC Profiles
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}