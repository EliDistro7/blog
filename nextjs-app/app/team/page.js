'use client';

import { useLanguage } from '@/context/LanguageContext';
import { Linkedin, Twitter, Instagram, Mail, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import {content, departmentHeads} from '@/app/components/team/data';

export default function TeamPage() {
  const { language } = useLanguage();

  const handlePlanClick = () => {
    const message = language === 'en'? `Hi! I'm interested in your services. Can you provide more details?` : `Hujambo! Ninapendezwa na huduma zenu za masoko. Je, unaweza kutoa maelezo zaidi`;
    
      const whatsappUrl = `https://wa.me/255745787370?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif">
            <span className="text-white">{content[language].hero.title}</span>{' '}
            <span className="text-brand-goldLight bg-gradient-to-r from-brand-gold to-brand-goldLight bg-clip-text text-transparent">
              {content[language].hero.highlight}
            </span>
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto text-brand-gold">
            {content[language].hero.subtitle}
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="container mx-auto py-20 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departmentHeads.map((member, index) => (
            <div key={index} className="group">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-2xl p-8 border border-brand-gold/20 hover:border-brand-gold/40 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-gold/10 transform hover:scale-105">
                {/* Member Image */}
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-brand-gold/30 group-hover:border-brand-gold/60 transition-all duration-300">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Badge */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-brand-gold to-brand-goldLight text-gray-900 px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      {typeof member.badge === 'string' ? member.badge : member.badge[language]}
                    </div>
                  </div>
                </div>

                {/* Member Info */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-brand-goldLight mb-2">{member.name}</h3>
                  <p className="text-brand-gold font-semibold mb-1">
                    {typeof member.role === 'string' ? member.role : member.role[language]}
                  </p>
                  <p className="text-brand-gold/70 text-sm">
                    {typeof member.department === 'string' ? member.department : member.department[language]}
                  </p>
                </div>

                {/* Bio */}
                <div className="mb-6">
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {typeof member.bio === 'string' ? member.bio : member.bio[language]}
                  </p>
                  <div className="bg-brand-gold/10 rounded-lg p-3 border border-brand-gold/20">
                    <p className="text-brand-goldLight text-xs font-medium">
                      {typeof member.tzExperience === 'string' ? member.tzExperience : member.tzExperience[language]}
                    </p>
                  </div>
                </div>

                {/* Skills */}
                <div className="mb-6">
                  <h4 className="text-brand-goldLight font-semibold mb-3 text-sm">Key Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {(Array.isArray(member.skills) ? member.skills : member.skills[language]).map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="bg-brand-gold/10 text-brand-gold px-2 py-1 rounded text-xs border border-brand-gold/20 hover:bg-brand-gold/20 transition-all duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Professional Leadership Values Section */}
      <section className="py-20 bg-gradient-to-t from-gray-950 to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 font-serif">
            <span className="text-brand-goldLight">{content[language].values.title}</span>{' '}
            <span className="text-white">{content[language].values.highlight}</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {content[language].values.items.map((value, i) => (
              <div 
                key={i} 
                className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-md p-8 rounded-2xl border border-brand-gold/20 hover:border-brand-gold/40 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-gold/10 transform hover:scale-105"
              >
                <div className="text-5xl mb-6 filter drop-shadow-lg">{value.icon}</div>
                <h3 className="text-xl font-bold text-brand-goldLight mb-4">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-goldLight mb-6">
            {content[language].cta.title}
          </h2>
          <p className="text-xl text-brand-gold mb-8 max-w-2xl mx-auto">
            {content[language].cta.subtitle}
          </p>
          <button
            onClick={handlePlanClick}
            className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-brand-gold to-brand-goldLight text-gray-900 font-bold px-8 py-4 rounded-xl shadow-gold hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <Mail className="w-5 h-5" />
            {content[language].cta.button}
          </button>
        </div>
      </section>
    </div>
  );
}