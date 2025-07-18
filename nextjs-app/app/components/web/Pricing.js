import React from 'react';
import { CheckCircle } from 'lucide-react';

const PricingSection = ({ packages }) => {
  return (
    <div className="py-20 bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Website Packages
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the perfect package for your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className={`relative bg-gradient-to-br from-brand-medium/30 to-brand-deep/30 backdrop-blur-md rounded-xl border transition-all ${
                pkg.popular ? 'border-brand-accent/60 shadow-glow' : 'border-brand-light/20'
              } overflow-hidden`}>
                {pkg.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-brand-accent to-brand-coral text-white text-center py-2 font-semibold">
                    Most Popular
                  </div>
                )}
                
                <div className={`p-6 ${pkg.popular ? 'pt-12' : ''}`}>
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                    <p className="text-brand-accent font-semibold mb-4">{pkg.type}</p>
                    <div className="text-3xl font-bold text-brand-accent mb-4">
                      {pkg.price}
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    {pkg.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-brand-accent mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className={`w-full font-semibold py-3 px-6 rounded-lg transition-all ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-brand-accent to-brand-coral text-white shadow-lg hover:shadow-xl'
                      : 'bg-brand-accent/20 hover:bg-brand-accent/30 text-brand-accent'
                  }`}>
                    Choose This Package
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;