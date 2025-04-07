import { BookText } from 'lucide-react';
import Link from 'next/link';

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
  <div className="mb-12">
    <h2 className="font-serif text-3xl font-bold text-brand-dark mb-8">
      {language === 'en' ? 'You might also like' : 'Unaweza pia kupenda'}
    </h2>
    <div className="grid md:grid-cols-2 gap-6">
      {posts.map((post) => (
        <div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <div className="p-5">
            <span className="text-sm text-brand-medium">{post.date}</span>
            <h3 className="font-serif font-semibold text-lg text-brand-dark mt-2 mb-3 line-clamp-2">
              {post.title[language]}
            </h3>
            <p className="text-brand-medium mb-4 line-clamp-2">
              {post.excerpt[language]}
            </p>
            <Link 
              href={`/blog/${post.slug}`}
              className="inline-flex items-center text-sm font-medium text-brand-accent hover:text-brand-blue"
            >
              <BookText className="mr-2 h-4 w-4" />
              {language === 'en' ? 'Read more' : 'Soma zaidi'}
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default RelatedPosts;