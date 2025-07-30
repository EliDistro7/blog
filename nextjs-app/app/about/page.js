"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Users, Globe, Share2, FileText, Package, Palette, ArrowRight, Star, Check } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';


const AboutPage = () => {
  const [expandedService, setExpandedService] = useState(null);

  const getServiceIconBg = (color) => {
    const backgrounds = {
      'brand-accent': 'bg-gradient-to-r from-indigo-500 to-indigo-600',
      'brand-teal': 'bg-gradient-to-r from-teal-500 to-teal-600',
      'brand-coral': 'bg-gradient-to-r from-orange-500 to-orange-600',
      'brand-gold': 'bg-gradient-to-r from-yellow-500 to-yellow-600',
      'brand-blue': 'bg-gradient-to-r from-blue-500 to-blue-600',
      'brand-deep': 'bg-gradient-to-r from-slate-700 to-slate-800'
    };
    return backgrounds[color] || 'bg-gradient-to-r from-gray-500 to-gray-600';
  };

  const getServiceButtonBg = (color) => {
    const backgrounds = {
      'brand-accent': 'bg-gradient-to-r from-indigo-500 to-indigo-600 text-white',
      'brand-teal': 'bg-gradient-to-r from-teal-500 to-teal-600 text-white',
      'brand-coral': 'bg-gradient-to-r from-orange-500 to-orange-600 text-white',
      'brand-gold': 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-white',
      'brand-blue': 'bg-gradient-to-r from-blue-500 to-blue-600 text-white',
      'brand-deep': 'bg-gradient-to-r from-slate-700 to-slate-800 text-white'
    };
    return backgrounds[color] || 'bg-gradient-to-r from-gray-500 to-gray-600 text-white';
  };

  const services = [
    {
      id: 1,
      title: "Door to Door Sales",
      icon: Users,
      color: "brand-accent",
      description: "Professional door-to-door sales services to reach customers directly and build personal connections.",
      features: [
        "Trained sales representatives",
        "Targeted neighborhood campaigns",
        "Lead generation and follow-up",
        "Performance tracking and reporting"
      ],
      benefits: [
        "Direct customer engagement",
        "Higher conversion rates",
        "Immediate feedback collection",
        "Brand awareness expansion"
      ],
      gradient: "from-indigo-100 to-orange-100"
    },
    {
      id: 2,
      title: "Website & Application Building",
      icon: Globe,
      color: "brand-teal",
      description: "Custom website and mobile application development tailored to your business needs.",
      features: [
        "Responsive web design",
        "Mobile app development",
        "E-commerce solutions",
        "SEO optimization"
      ],
      benefits: [
        "Professional online presence",
        "24/7 customer accessibility",
        "Scalable solutions",
        "Modern user experience"
      ],
      gradient: "from-teal-100 to-blue-100"
    },
    {
      id: 3,
      title: "Social Media Management",
      icon: Share2,
      color: "brand-coral",
      description: "Comprehensive social media strategy and management across all major platforms.",
      features: [
        "Content creation and scheduling",
        "Community management",
        "Analytics and reporting",
        "Paid advertising campaigns"
      ],
      benefits: [
        "Increased brand visibility",
        "Engaged customer community",
        "Lead generation",
        "Brand reputation management"
      ],
      gradient: "from-orange-100 to-yellow-100"
    },
    {
      id: 4,
      title: "Public Tender Searching & Application",
      icon: FileText,
      color: "brand-gold",
      description: "Expert assistance in finding and applying for government and private sector tenders.",
      features: [
        "Tender identification and analysis",
        "Application preparation",
        "Compliance verification",
        "Submission management"
      ],
      benefits: [
        "Access to government contracts",
        "Professional documentation",
        "Increased success rates",
        "Time-saving solutions"
      ],
      gradient: "from-yellow-100 to-indigo-100"
    },
    {
      id: 5,
      title: "Equipment Sales",
      icon: Package,
      color: "brand-blue",
      description: "Quality equipment and machinery sales with comprehensive support and warranty.",
      features: [
        "Wide equipment selection",
        "Technical specifications",
        "Installation support",
        "Maintenance services"
      ],
      benefits: [
        "Reliable equipment sourcing",
        "Competitive pricing",
        "Technical expertise",
        "Ongoing support"
      ],
      gradient: "from-blue-100 to-teal-100"
    },
    {
      id: 6,
      title: "Product & Service Branding",
      icon: Palette,
      color: "brand-deep",
      description: "Complete branding solutions to establish and strengthen your market presence.",
      features: [
        "Logo and identity design",
        "Brand strategy development",
        "Marketing materials",
        "Brand guidelines"
      ],
      benefits: [
        "Professional brand identity",
        "Market differentiation",
        "Customer recognition",
        "Brand value enhancement"
      ],
      gradient: "from-slate-100 to-gray-100"
    }
  ];

  const toggleService = (serviceId) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-brand-foam">
      {/* Header Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-brand-dark via-brand-deep to-brand-medium">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-accent/10 to-brand-coral/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-brand-gold">Premium</span> Services
            </h1>
            <p className="text-xl md:text-2xl text-brand-foam max-w-3xl mx-auto leading-relaxed">
              Comprehensive business solutions designed to elevate your company and drive sustainable growth across all sectors.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            const isExpanded = expandedService === service.id;
            
            return (
              <div
                key={service.id}
                className={`relative bg-white rounded-2xl shadow-layer hover:shadow-wave transition-all duration-500 overflow-hidden border border-gray-200 ${
                  isExpanded ? 'lg:col-span-2' : ''
                }`}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-50`}></div>
                
                {/* Main Content */}
                <div className="relative p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className={`p-4 rounded-xl shadow-icon ${getServiceIconBg(service.color)}`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-brand-dark mb-2">
                          {service.title}
                        </h3>
                        <p className="text-brand-medium text-base leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => toggleService(service.id)}
                      className="flex-shrink-0 p-2 rounded-full bg-brand-foam hover:bg-brand-light/20 transition-colors duration-200"
                    >
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5 text-brand-dark" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-brand-dark" />
                      )}
                    </button>
                  </div>

                  {/* Expanded Content */}
                  {isExpanded && (
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 animate-float">
                      {/* Features */}
                      <div>
                        <h4 className="text-lg font-semibold text-brand-dark mb-4 flex items-center">
                          <Star className="w-5 h-5 text-brand-gold mr-2" />
                          Key Features
                        </h4>
                        <ul className="space-y-3">
                          {service.features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                              <Check className="w-5 h-5 text-brand-teal mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-brand-medium">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Benefits */}
                      <div>
                        <h4 className="text-lg font-semibold text-brand-dark mb-4 flex items-center">
                          <ArrowRight className="w-5 h-5 text-brand-coral mr-2" />
                          Benefits
                        </h4>
                        <ul className="space-y-3">
                          {service.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start">
                              <Check className="w-5 h-5 text-brand-coral mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-brand-medium">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* Action Button */}
                  <div className="mt-6 pt-6 border-t border-brand-foam">
                    <button className={`w-full font-semibold py-3 px-6 rounded-xl hover:shadow-glow transition-all duration-300 flex items-center justify-center group ${getServiceButtonBg(service.color)}`}>
                      Learn More
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-gradient-to-r from-brand-dark to-brand-deep py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-brand-foam mb-8 leading-relaxed">
            Lets discuss how our comprehensive services can help you achieve your business goals and drive sustainable growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-slate-800 font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
              Get Started Today
            </button>
            <button className="border-2 border-slate-200 text-slate-200 hover:bg-slate-200 hover:text-slate-800 font-semibold py-4 px-8 rounded-xl transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-brand-foam py-8">
        <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <p className="text-brand-medium">
            © 2024 Your Business Name. All rights reserved. | Professional Services in Tanzania
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;