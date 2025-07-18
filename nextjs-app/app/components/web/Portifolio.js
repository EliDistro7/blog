import React from 'react';
import { CheckCircle, ExternalLink } from 'lucide-react';

const PortfolioSection = ({ portfolioProjects }) => {
  return (
    <div className="py-20 bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Portfolio
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover the websites and applications we built for our clients
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioProjects.map((project, index) => (
              <div key={index} className="bg-gradient-to-br from-brand-medium/30 to-brand-deep/30 backdrop-blur-md rounded-xl border border-brand-light/20 hover:border-brand-accent/40 transition-all overflow-hidden group">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-brand-accent text-sm font-semibold bg-brand-accent/20 px-3 py-1 rounded-full">
                      {project.category}
                    </div>
                    {project.inProgress && (
                      <div className="text-brand-coral text-sm font-semibold bg-brand-coral/20 px-3 py-1 rounded-full">
                        In Progress
                      </div>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-brand-accent font-mono text-sm mb-3">{project.url}</p>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-brand-accent" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  {!project.inProgress && (
                    <button className="w-full bg-brand-accent/20 hover:bg-brand-accent/30 text-brand-accent font-semibold py-2 px-4 rounded-lg transition-all flex items-center justify-center gap-2">
                      Visit Website
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;