

import ServiceHeader from "@/app/components/services/ServiceHeader";
import ServiceFeatures from "@/app/components/services/ServiceFeatures";
import ServiceProcess from "@/app/components/services/ServiceProcess";
import TestimonialCarousel from "@/app/components/home/TestimonialCarousel";
import { Share2, TrendingUp, Hash, Camera, Heart, Zap } from 'lucide-react';

export default function SocialMediaPage() {
  return (
    <div className="bg-brand-foam">
      {/* Hero Section */}
      <ServiceHeader
        title="Strategic"
        highlight="Social Media Management"
        subtitle="Amplifying your brand's digital presence with data-driven strategies"
        bgClass="bg-gradient-to-br from-brand-dark to-brand-teal/90"
      />

      {/* Results Showcase */}
      <div className="container mx-auto py-20 px-4">
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-brand-teal mb-2">3-5X</div>
            <p className="text-gray-600">Engagement Growth</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-brand-teal mb-2">24/7</div>
            <p className="text-gray-600">Community Management</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-brand-teal mb-2">360°</div>
            <p className="text-gray-600">Content Strategy</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-brand-teal mb-2">$0</div>
            <p className="text-gray-600">Upfront Costs</p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <ServiceFeatures
        title="Our Social Media Solutions"
        features={[
          {
            title: "Content Strategy",
            description: "Tailored content calendars for maximum impact",
            icon: <Share2 className="w-8 h-8 text-brand-teal" />
          },
          {
            title: "Growth Analytics",
            description: "Data-driven optimizations for your audience",
            icon: <TrendingUp className="w-8 h-8 text-brand-teal" />
          },
          {
            title: "Hashtag Research",
            description: "Strategic tagging for discoverability",
            icon: <Hash className="w-8 h-8 text-brand-teal" />
          },
          {
            title: "Visual Storytelling",
            description: "Professional photography & videography",
            icon: <Camera className="w-8 h-8 text-brand-teal" />
          },
          {
            title: "Community Building",
            description: "Authentic engagement with your audience",
            icon: <Heart className="w-8 h-8 text-brand-teal" />
          },
          {
            title: "Ad Campaigns",
            description: "High-converting paid strategies",
            icon: <Zap className="w-8 h-8 text-brand-teal" />
          }
        ]}
      />

      {/* Platform Specialization */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 font-serif">
            Platform <span className="text-brand-teal">Expertise</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {['Instagram', 'TikTok', 'LinkedIn', 'Facebook'].map((platform) => (
              <div key={platform} className="bg-brand-foam/50 p-6 rounded-xl text-center hover:bg-brand-teal/10 transition-colors">
                <div className="text-2xl font-bold text-brand-dark mb-2">{platform}</div>
                <div className="h-1 w-12 bg-brand-teal mx-auto mb-3"></div>
                <p className="text-sm text-gray-600">Content + Ads + Analytics</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <ServiceProcess
        title="Our 4-Phase Approach"
        steps={[
          {
            number: "01",
            title: "Audit & Strategy",
            description: "Comprehensive profile analysis and goal setting"
          },
          {
            number: "02",
            title: "Content Production",
            description: "Professional creation of posts, stories, and reels"
          },
          {
            number: "03",
            title: "Community Growth",
            description: "Organic and paid audience development"
          },
          {
            number: "04",
            title: "Performance Reporting",
            description: "Monthly analytics and optimization"
          }
        ]}
      />

      {/* Testimonials */}
      <div className="bg-brand-dark text-white py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 font-serif">
            Client <span className="text-brand-teal">Success Stories</span>
          </h2>
          <TestimonialCarousel />
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto py-20 px-4 text-center">
        <h2 className="text-3xl font-bold mb-6 font-serif">
          Ready to Dominate <span className="text-brand-teal">Social Media?</span>
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-brand-teal hover:bg-brand-teal/90 text-white rounded-full font-bold transition-colors shadow-depth">
            Get Your Free Audit
          </button>
          <button className="px-8 py-4 border-2 border-brand-dark hover:bg-brand-dark/5 text-brand-dark rounded-full font-bold transition-colors">
            View Pricing Plans
          </button>
        </div>
      </div>
    </div>
  );
}