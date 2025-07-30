'use client';
import React from 'react';
import { Trophy, DollarSign, Building } from 'lucide-react';

const TenderSuccessSection = ({ language, successfulTenders }) => {
  const data = successfulTenders[language];

  const getTypeIcon = (type) => {
    switch (type.toLowerCase()) {
      case 'government':
      case 'serikali':
        return <Building className="w-6 h-6" />;
      case 'municipal':
      case 'manispaa':
        return <Building className="w-6 h-6" />;
      case 'private':
      case 'binafsi':
        return <DollarSign className="w-6 h-6" />;
      default:
        return <Trophy className="w-6 h-6" />;
    }
  };

  const getTypeColor = (type) => {
    switch (type.toLowerCase()) {
      case 'government':
      case 'serikali':
        return 'bg-blue-500';
      case 'municipal':
      case 'manispaa':
        return 'bg-green-500';
      case 'private':
      case 'binafsi':
        return 'bg-purple-500';
      default:
        return 'bg-brand-primary';
    }
  };

  return (
    <section className="py-20 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {data.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {data.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.tenders.map((tender, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300 border border-gray-700"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className={`w-10 h-10 ${getTypeColor(tender.type)} rounded-full flex items-center justify-center text-white`}>
                  {getTypeIcon(tender.type)}
                </div>
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {tender.status}
                </span>
              </div>

              {/* Client and project */}
              <h3 className="text-lg font-bold text-white mb-2">
                {tender.client}
              </h3>
              <h4 className="text-md text-gray-300 mb-4">
                {tender.project}
              </h4>

              {/* Value */}
              <div className="mb-4">
                <span className="text-2xl font-bold text-brand-primary">
                  {tender.value}
                </span>
                <span className="text-gray-400 ml-2">
                  {tender.type}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed">
                {tender.description}
              </p>

              {/* Success indicator */}
              <div className="mt-6 pt-4 border-t border-gray-700">
                <div className="flex items-center gap-2 text-green-400">
                  <Trophy className="w-4 h-4" />
                  <span className="text-sm font-medium">
                    {language === 'en' ? 'Successful Bid' : 'Zabuni Iliyofanikiwa'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <div className="bg-gray-800 p-8 rounded-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              {language === 'en' ? 'Ready to Win Your Next Tender?' : 'Tayari Kushinda Zabuni Yako Ijayo?'}
            </h3>
            <p className="text-gray-300 mb-6">
              {language === 'en' 
                ? 'Join our successful clients and increase your tender win rate by 95%'
                : 'Jiunge na wateja wetu waliofanikiwa na ongeza kiwango chako cha kushinda zabuni kwa 95%'
              }
            </p>
            <button className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white px-8 py-3 rounded-lg hover:shadow-lg transition-shadow duration-300 font-semibold">
              {language === 'en' ? 'Get Started Today' : 'Anza Leo'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TenderSuccessSection;