// components/social/ClientSuccessSection.jsx
import React from 'react';
import { Instagram, Facebook, Twitter, Linkedin, Youtube, Music } from 'lucide-react';

const ClientSuccessSection = ({ language, currentClients }) => {
  // Helper function to get social media icon
  const getSocialIcon = (platform) => {
    switch (platform.toLowerCase()) {
      case 'instagram':
        return Instagram;
      case 'facebook':
        return Facebook;
      case 'twitter':
        return Twitter;
      case 'linkedin':
        return Linkedin;
      case 'youtube':
        return Youtube;
      case 'tiktok':
        return Music; // Using Music icon for TikTok
      default:
        return null;
    }
  };

  // Helper function to get social media link
  const getSocialLink = (client, platform) => {
    const platformKey = platform.toLowerCase();
    return client.socialLinks?.[platformKey] || '#';
  };

  return (
    <section className="py-20 px-4 bg-brand-dark">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            {language === 'en' ? 'Client Success Stories' : 'Hadithi za Mafanikio ya Wateja'}
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            {language === 'en'
              ? 'Real results from real businesses across Tanzania'
              : 'Matokeo halisi kutoka biashara halisi katika Tanzania'
            }
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentClients.map((client, index) => {
            const Logo = client.logo;
            return (
              <div key={index} className="bg-brand-medium rounded-xl border border-brand-gold/10 hover:border-brand-gold/30 transition-all duration-300 overflow-hidden">
                {/* Client Image */}
                <div className="relative h-96 overflow-hidden">
                  <img 
                    src={client.image} 
                    alt={client.company}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/20 to-transparent" />
                </div>
                
                <div className="p-8">
                  {/* Company Info */}
                  <div className="flex items-center mb-6">
                    <div className="bg-brand-gold/10 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                      <Logo className="w-6 h-6 text-brand-gold" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{client.company}</h3>
                      <p className="text-gray-300 text-sm">{client.industry[language]}</p>
                    </div>
                  </div>
                  
                  {/* Results */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-brand-gold font-bold text-lg">{client.results.followers}</div>
                      <div className="text-gray-300 text-xs">
                        {language === 'en' ? 'Followers' : 'Wafuasi'}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-brand-gold font-bold text-lg">{client.results.engagement}</div>
                      <div className="text-gray-300 text-xs">
                        {language === 'en' ? 'Engagement' : 'Ushirikiano'}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-brand-gold font-bold text-lg">
                        {client.results.leads || client.results.bookings || client.results.orders || client.results.memberships || client.results.sales}
                      </div>
                      <div className="text-brand-light text-xs">
                        {language === 'en' ? 'Conversions' : 'Mabadiliko'}
                      </div>
                    </div>
                  </div>
                  
                  {/* Social Media Platforms with Links */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {client.platforms.map((platform, platformIndex) => {
                      const SocialIcon = getSocialIcon(platform);
                      const socialLink = getSocialLink(client, platform);
                      
                      return (
                        <a
                          key={platformIndex}
                          href={socialLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-brand-gold/10 text-brand-gold px-3 py-2 rounded-full text-sm flex items-center gap-2 hover:bg-brand-gold/20 transition-colors duration-200"
                        >
                          {SocialIcon && <SocialIcon className="w-4 h-4" />}
                          {platform}
                        </a>
                      );
                    })}
                  </div>
                 
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ClientSuccessSection;