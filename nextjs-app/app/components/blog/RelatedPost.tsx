import { BookText } from 'lucide-react';
import Link from 'next/link';
import { Libre_Baskerville, Source_Sans_3 as Source_Sans_Pro } from 'next/font/google';

// Load your custom fonts
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

interface RelatedPost {
  id: string;
  title: {
    en: string;
    sw: string;
  };
  excerpt: {
    en: string;
    sw: string;
  };
  date: string;
  slug: string;
}

interface RelatedPostsProps {
  posts: RelatedPost[];
  language: 'en' | 'sw';
}

const RelatedPosts = ({ posts, language }: RelatedPostsProps) => (
  <div className={`${sourceSans.variable} font-sans mb-12`}>
    <h2 className={`${baskerville.variable} font-serif text-3xl font-bold text-brand-dark mb-8`}>
      {language === 'en' ? 'You might also like' : 'Unaweza pia kupenda'}
    </h2>
    
    <div className="grid md:grid-cols-2 gap-6">
      {posts.map((post) => (
        <div 
          key={post.id} 
          className="bg-white rounded-xl border border-brand-foam/50 overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-brand-blue/20"
        >
          <div className="p-6">
            <span className="text-xs font-medium text-brand-teal">
              {post.date}
            </span>
            
            <h3 className={`${baskerville.variable} font-serif text-xl font-bold text-brand-dark mt-2 mb-3 line-clamp-2`}>
              {post.title[language]}
            </h3>
            
            <p className="text-brand-medium/90 mb-4 line-clamp-2">
              {post.excerpt[language]}
            </p>
            
            <Link 
              href={`/blog/${post.slug}`}
              className="inline-flex items-center text-sm font-medium text-brand-accent hover:text-brand-blue group transition-colors"
            >
              <BookText className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              {language === 'en' ? 'Read more' : 'Soma zaidi'}
              <span className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default RelatedPosts;