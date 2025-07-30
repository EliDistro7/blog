'use client';
import React from 'react';
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

const TenderCTASection = ({ language }) => {
  return (
    <section className="py-20 bg-gradient-to-r from-brand-primary to-brand-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            {language === 'en' 
              ? 'Ready to Win Your Next Tender?' 
              : 'Tayari Kushinda Zabuni Yako Ijayo?'
            }
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            {language === 'en' 
              ? 'Join hundreds of successful businesses who trust us with their tender applications. Get started today and increase your chances of winning by 95%.'
              : 'Jiunge na mamia ya biashara zilizofanikiwa ambazo zinatuamini na maombi yao ya zabuni. Anza leo na ongeza uwezekano wako wa kushinda kwa 95%.'
            }
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="bg-white text-brand-primary px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-300 font-bold text-lg flex items-center gap-2 justify-center">
              {language === 'en' ? 'Start Your Application' : 'Anza Ombi Lako'}
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-brand-primary transition-colors duration-300 font-bold text-lg">
              {language === 'en' ? 'Schedule Consultation' : 'Ratiba Shauri'}
            </button>
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              {language === 'en' ? 'Call Us' : 'Tupigie Simu'}
            </h3>
            <p className="text-white/90">+255 123 456 789</p>
            <p className="text-white/90">+255 987 654 321</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              {language === 'en' ? 'Email Us' : 'Tuandikie'}
            </h3>
            <p className="text-white/90">info@tenderservices.co.tz</p>
            <p className="text-white/90">support@tenderservices.co.tz</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              {language === 'en' ? 'Visit Us' : 'Tutembelee'}
            </h3>
            <p className="text-white/90">
              {language === 'en' 
                ? 'Dar es Salaam Business Center' 
                : 'Kituo cha Biashara Dar es Salaam'
              }
            </p>
            <p className="text-white/90">
              {language === 'en' 
                ? 'Plot 123, Uhuru Road' 
                : 'Kiwanja Na. 123, Barabara ya Uhuru'
              }
            </p>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 pt-8 border-t border-white/20">
          <div className="text-center">
            <p className="text-white/70 mb-4">
              {language === 'en' 
                ? 'Trusted by leading organizations across East Africa' 
                : 'Tunaaminika na shirika kuu katika Afrika ya Mashariki'
              }
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="bg-white/10 px-6 py-3 rounded-lg">
                <span className="text-white font-semibold">TRA</span>
              </div>
              <div className="bg-white/10 px-6 py-3 rounded-lg">
                <span className="text-white font-semibold">TANROADS</span>
              </div>
              <div className="bg-white/10 px-6 py-3 rounded-lg">
                <span className="text-white font-semibold">PPRA</span>
              </div>
              <div className="bg-white/10 px-6 py-3 rounded-lg">
                <span className="text-white font-semibold">
                  {language === 'en' ? 'Local Councils' : 'Halmashauri'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TenderCTASection;