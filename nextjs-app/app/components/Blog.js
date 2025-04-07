'use client';

import { useState } from 'react';
import { BookText, Calendar, Clock, Globe, Quote } from 'lucide-react';
import { Libre_Baskerville, Source_Sans_3 as Source_Sans_Pro } from 'next/font/google';
import { useLanguage } from '@/context/LanguageContext';

// Define your custom fonts
const baskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-baskerville'
});

const sourceSans = Source_Sans_Pro({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-source-sans'
});




const Blog = ({ post }) => {
    const { language } = useLanguage();

  return (
    <div className={`${sourceSans.variable} font-sans group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl`}>
      {/* Language toggle */}
    

      {/* Image */}
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={post.imageUrl}
          alt={post.title[language]}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute bottom-3 left-3 rounded-full bg-brand-teal/90 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
          {post.category[language]}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 bg-brand-foam/10">
        <h3 className={`${baskerville.variable} font-serif mb-2 text-xl font-bold text-brand-dark line-clamp-2`}>
          {post.title[language]}
        </h3>
        <p className="mb-4 text-brand-medium line-clamp-3">
          {post.excerpt[language]}
        </p>

        {/* Content preview */}
        <div className="mb-4 space-y-3 text-sm text-brand-dark/90">
          {post.content[language].slice(0, 2).map((paragraph, index) => (
            <p key={index} className={index === 0 ? "flex items-start" : ""}>
              {index === 0 && (
                <Quote className="mr-2 h-4 w-4 flex-shrink-0 text-brand-medium/50" />
              )}
              {paragraph}
            </p>
          ))}
          {post.content[language].length > 2 && (
            <p className="text-brand-medium italic">
              {language === 'en' ? '...continue reading' : '...endelea kusoma'}
            </p>
          )}
        </div>

        {/* Tags */}
        <div className="mb-4 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span 
              key={tag} 
              className="text-xs px-2 py-1 rounded-full bg-brand-foam/20 text-brand-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Meta info */}
        <div className="flex items-center justify-between text-sm text-brand-medium">
          <div className="flex items-center space-x-2">
            <Calendar className="h-4 w-4 text-brand-medium" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4 text-brand-medium" />
            <span>{post.readTime}</span>
          </div>
        </div>

        {/* Read more button */}
        <div className="mt-4">
          <a
            href={`/blog/${post.slug}`}
            className="inline-flex items-center text-sm font-medium text-brand-accent hover:text-brand-blue"
          >
            <BookText className="mr-2 h-4 w-4" />
            {language === 'en' ? 'Read more' : 'Soma zaidi'}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Blog;