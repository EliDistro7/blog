import React from 'react';
import { Globe, Smartphone, Search, Users, BarChart3, Shield } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Website Development",
      description: "Custom websites built with modern technologies and best practices"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Responsive",
      description: "Websites that work perfectly on all devices and screen sizes"
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "SEO Optimization",
      description: "Built-in SEO features to help your website rank higher in search results"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "User Experience",
      description: "Intuitive designs that provide exceptional user experiences"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Analytics & Insights",
      description: "Track your website performance with detailed analytics"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security & Maintenance",
      description: "Secure hosting with regular updates and maintenance"
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Web Development Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive web solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-brand-medium/50 to-brand-deep/50 backdrop-blur-md p-6 rounded-xl border border-brand-light/20 hover:border-brand-accent/40 transition-all">
                <div className="text-brand-accent mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;