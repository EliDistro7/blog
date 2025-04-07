
'use client';

import HeroSection from "@/app/components/home/HeroSection";
import ServicesGrid from "@/app/components/home/ServicesGrid";
import TestimonialSection from "@/app/components/home/TestimonialSection";
import CTASection from "@/app/components/home/CTASection";
import Blog from "@/app/components/Blog";

import Link from "next/link";
import { ChevronRight, Rocket, Code, Zap } from "lucide-react";
import { format, parseISO } from "date-fns";
import { StoriesSection } from "./components/home/StoriesSection";

//import { Post } from "@/app/components/Posts";

const ExampleBlogPost = {
  id: '2',
  title: {
    en: 'Leadership as Service: The Legacy of Abeid Amani Karume',
    sw: 'Uongozi kama Huduma: Urithi wa Abeid Amani Karume'
  },
  excerpt: {
    en: 'Exploring the philosophy of leadership as service through the words of Zanzibar\'s first president.',
    sw: 'Kuchunguza falsafa ya uongozi kama huduma kupitia maneno ya rais wa kwanza wa Zanzibar.'
  },
  content: {
    en: [
      "Abeid Amani Karume emphasized that leadership is service to the people and the unification of communities. As he famously said: 'I am a servant of the people, and I will never stop serving them with all my heart.'",
      "At PichaZangu.store, we value images that showcase unity, history, and the contributions of our leaders. Your photographs are part of our collective heritage. Preserve and celebrate your history through PichaZangu.store!"
    ],
    sw: [
      "Abeid Amani Karume alisisitiza kuwa uongozi ni huduma kwa watu na kuunganishwa kwa jamii. Kama alivyosema: 'Mimi ni mtumishi wa watu, na sitaacha kutumikia na kuwatumikia kwa moyo wangu wote.'",
      "Katika PichaZangu.store, tunathamini picha zinazoonyesha umoja, historia, na michango ya viongozi wetu. Picha zako ni sehemu ya urithi wetu. Hifadhi na sherehekea historia yako kupitia PichaZangu.store!"
    ]
  },
  category: {
    en: 'History',
    sw: 'Historia'
  },
  date: 'June 12, 2024',
  readTime: '4 min read',
  imageUrl: '/images/abeid.jpeg', // Example image - replace with actual Karume image
  slug: 'leadership-legacy-abeid-karume',
  tags: ['#AbeidAmaniKarume', '#Uongozi', '#PichaZanguStore', '#HifadhiHistoria', '#UmojaNaMaendeleo', '#Tanzania', '#Zanzibar']
};


 function Home() {

 // console.log('Fetched posts:', posts); // Debug log



  return (
    <div className="bg-brand-foam">
      <HeroSection />
      
      <section className="py-16 container">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            Latest Updates
          </h2>
        
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
       
           <Blog post={ExampleBlogPost} />

        </div>
      </section>

      <ServicesGrid />
      <TestimonialSection />
      <CTASection />
    </div>
  );
}

function FeatureUpdateCompact({ update }) {
  const {
    title,
    version,
    releaseDate,
    updateType,
    summary,
    slug,
    isHighlight
  } = update;

  const updateIcons = {
    feature: <Rocket className="w-4 h-4 text-brand-accent" />,
    improvement: <Code className="w-4 h-4 text-brand-blue" />,
    fix: <Zap className="w-4 h-4 text-brand-teal" />
  };

  return (
    <article className="group border-b border-brand-medium/10 pb-6 last:border-0 last:pb-0">
      <div className="flex gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 text-sm text-brand-dark/60 mb-1">
            {updateIcons[updateType] || updateIcons.feature}
            <span>v{version}</span>
            <span>•</span>
            <span className="capitalize">{updateType}</span>
            {isHighlight && (
              <>
                <span>•</span>
                <span className="text-brand-accent font-medium">Highlight</span>
              </>
            )}
          </div>
          <h3 className="text-lg font-bold text-brand-dark group-hover:text-brand-blue transition-colors">
            {title}
          </h3>
          <p className="text-brand-dark/80 mt-1 line-clamp-2">
            {summary}
          </p>
          <time 
            dateTime={releaseDate} 
            className="text-xs text-brand-dark/50 mt-2 block"
          >
            {format(parseISO(releaseDate), 'MMMM d, yyyy')}
          </time>
        </div>
      </div>
    </article>
  );
}

export default Home