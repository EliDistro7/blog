import ServiceHeader from "@/app/components/services/ServiceHeader";
import ServiceFeatures from "@/app/components/services/ServiceFeatures";
import ServiceProcess from "@/app/components/services/ServiceProcess";
import CaseStudies from "@/app/components/services/CaseStudies";
import { MonitorSmartphone, Search, Paintbrush, Rocket, ShoppingCart, BarChart3 } from "lucide-react";

export default function WebDesignPage() {
  const caseStudies = [
    {
      platform: "E-commerce",
      title: "Luxury Fashion Retailer",
      result: "Increased conversions by 220%",
      description: "Redesigned shopping experience with intuitive navigation",
      icon: "🛍️"
    },
    {
      platform: "SaaS Platform",
      title: "B2B Analytics Dashboard",
      result: "Reduced bounce rate by 65%",
      description: "Streamlined complex data visualization",
      icon: "📊"
    },
    {
      platform: "Healthcare",
      title: "Telemedicine Portal",
      result: "Improved appointment bookings by 180%",
      description: "Accessible design for all age groups",
      icon: "🏥"
    }
  ];

  return (
    <div className="bg-brand-foam">
      {/* Hero Section */}
      <ServiceHeader
        title="Transformative"
        highlight="Web Design"
        subtitle="Crafting digital experiences that convert visitors into customers"
        bgClass="bg-gradient-to-br from-brand-dark to-brand-deep"
      />

      {/* Features Section */}
      <ServiceFeatures
        title="Our Web Design Solutions"
        features={[
          {
            title: "Responsive Design",
            description: "Flawless experience across all devices",
            icon: <MonitorSmartphone className="w-8 h-8 text-brand-accent" />
          },
          {
            title: "SEO Optimized",
            description: "Built to rank higher in search results",
            icon: <Search className="w-8 h-8 text-brand-accent" />
          },
          {
            title: "Custom UX/UI",
            description: "Intuitive designs that enhance engagement",
            icon: <Paintbrush className="w-8 h-8 text-brand-accent" />
          },
          {
            title: "Performance",
            description: "Fast-loading websites for better UX",
            icon: <Rocket className="w-8 h-8 text-brand-accent" />
          },
          {
            title: "E-commerce",
            description: "Seamless store experiences that sell",
            icon: <ShoppingCart className="w-8 h-8 text-brand-accent" />
          },
          {
            title: "Analytics",
            description: "Data-driven continuous improvement",
            icon: <BarChart3 className="w-8 h-8 text-brand-accent" />
          }
        ]}
      />

      {/* Process Section */}
      <ServiceProcess
        title="Our Design Process"
        steps={[
          {
            number: "01",
            title: "Discovery",
            description: "Understanding your business goals and audience"
          },
          {
            number: "02",
            title: "Wireframing",
            description: "Creating blueprints for seamless experiences"
          },
          {
            number: "03",
            title: "Development",
            description: "Building with clean, scalable code"
          },
          {
            number: "04",
            title: "Launch",
            description: "Deploying and optimizing for success"
          }
        ]}
      />

      {/* Case Studies Section - Enhanced */}
      <CaseStudies 
        caseStudies={caseStudies}
        title="Our"
        highlight="Web Design Success Stories"
        bgClass="bg-white"
      />
    </div>
  );
}