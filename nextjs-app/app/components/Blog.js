'use client';

import { BookText, Calendar, Clock, Quote } from 'lucide-react';
import { Libre_Baskerville, Source_Sans_3 as Source_Sans_Pro } from 'next/font/google';
import { useLanguage } from '@/context/LanguageContext';
import Image from 'next/image';

// Define your custom fonts
const baskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-baskerville'
});

const sourceSans = Source_Sans_Pro({
  subsets: ['latin'],
  weight: ['600', '700', '900'],
  variable: '--font-source-sans'
});

const Blog = ({ post }) => {
  const { language } = useLanguage();

  return (
    <div className={`${sourceSans.variable} font-sans group relative overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1`}>
      {/* Image */}
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={post.imageUrl}
          alt={post.title[language]}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute bottom-3 left-3 rounded-full bg-brand-teal px-3 py-1 text-xs font-bold text-white backdrop-blur-sm shadow-sm">
          {post.category[language]}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6 bg-white">
        <div className="mb-4">
          <h3 className={`${baskerville.variable} font-serif text-2xl font-bold text-brand-dark leading-tight mb-3`}>
            {post.title[language]}
          </h3>
          <p className="text-brand-medium/90 text-lg line-clamp-2">
            {post.excerpt[language]}
          </p>
        </div>

        {/* Content preview */}
        <div className="mb-5 space-y-3 text-brand-dark/90">
          {post.content[language].slice(0, 2).map((paragraph, index) => (
            <div key={index} className={index === 0 ? "flex items-start" : ""}>
              {index === 0 && (
                <Quote className="mr-3 h-5 w-5 flex-shrink-0 text-brand-accent/70 mt-1" />
              )}
              <p className="text-base leading-relaxed">
                {paragraph}
              </p>
            </div>
          ))}
          {post.content[language].length > 2 && (
            <p className="text-brand-accent font-medium">
              {language === 'en' ? '...continue reading' : '...endelea kusoma'}
            </p>
          )}
        </div>

        {/* Tags */}
        <div className="mb-5 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span 
              key={tag} 
              className="text-xs px-3 py-1 rounded-full bg-brand-foam/40 text-brand-dark font-semibold hover:bg-brand-foam/60 transition-colors"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-brand-foam/30 my-4" />

        {/* Meta info */}
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-3 text-brand-medium">
            <Calendar className="h-5 w-5 text-brand-accent" />
            <span className="font-medium">{post.date}</span>
          </div>
          <div className="flex items-center space-x-3 text-brand-medium">
            <Clock className="h-5 w-5 text-brand-accent" />
            <span className="font-medium">{post.readTime}</span>
          </div>
        </div>

        {/* Read more button */}
        <div className="mt-6">
          <a
            href={`/blog/${post.slug}`}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-brand-accent/10 hover:bg-brand-accent/20 text-brand-accent font-bold transition-all group"
          >
            <BookText className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            {language === 'en' ? 'Read more' : 'Soma zaidi'}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right transition-transform group-hover:translate-x-1">
              <path d="M5 12h14"/>
              <path d="m12 5 7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Blog;