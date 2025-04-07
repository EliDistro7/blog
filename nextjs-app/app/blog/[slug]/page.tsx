'use client';

import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import LanguageToggle
 from '@/app/components/blog/LanguageToggle';
 import SharePost from '@/app/components/blog/SharePost';
 import CommentsSection from '@/app/components/blog/CommentsSection';
 import RelatedPosts from '@/app/components/blog/RelatedPost';
 import PostMeta from '@/app/components/blog/PostMeta';
 import { PostTags } from '@/app/components/blog/PostTags';

import { Libre_Baskerville, Source_Sans_3 as Source_Sans_Pro } from 'next/font/google';

// Font definitions
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

interface BlogPost {
  id: string;
  title: {
    en: string;
    sw: string;
  };
  excerpt: {
    en: string;
    sw: string;
  };
  content: {
    en: string[];
    sw: string[];
  };
  category: {
    en: string;
    sw: string;
  };
  date: string;
  readTime: string;
  imageUrl: string;
  slug: string;
  tags: string[];
}

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

export default function SinglePostPage() {
  const [language, setLanguage] = useState<'en' | 'sw'>('en');
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  // Post data would typically come from props or API call
// Current post data
  const post: BlogPost = {
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
        "Abeid Amani Karume emphasized that leadership is service to the people and the unification of communities. His philosophy centered on the idea that true leaders are those who dedicate themselves to the welfare of their people.",
        "As he famously said: 'I am a servant of the people, and I will never stop serving them with all my heart.' This simple yet powerful statement encapsulates his approach to governance and community building.",
        "Karume's leadership during the formative years of Zanzibar's revolution set a precedent for servant leadership in East Africa. His focus was always on improving the lives of ordinary citizens through education, healthcare, and economic empowerment.",
        "At PichaZangu.store, we value images that showcase unity, history, and the contributions of our leaders. Your photographs are part of our collective heritage. Preserve and celebrate your history through PichaZangu.store!"
      ],
      sw: [
        "Abeid Amani Karume alisisitiza kuwa uongozi ni huduma kwa watu na kuunganishwa kwa jamii. Falsafa yake ilizingatia wazo kwamba viongozi wa kweli ni wale wanaojitolea kwa ustawi wa watu wao.",
        "Kama alivyosema: 'Mimi ni mtumishi wa watu, na sitaacha kutumikia na kuwatumikia kwa moyo wangu wote.' Kauli hii rahisi lakini yenye nguvu inafupisha mbinu yake ya utawala na ujenzi wa jamii.",
        "Uongozi wa Karume wakati wa miaka ya mapinduzi ya Zanzibar uliweka mfano wa uongozi wa utumishi katika Afrika Mashariki. Lengo lake lilikuwa daima kuboresha maisha ya raia wa kawaida kupitia elimu, afya, na uwezeshaji wa kiuchumi.",
        "Katika PichaZangu.store, tunathamini picha zinazoonyesha umoja, historia, na michango ya viongozi wetu. Picha zako ni sehemu ya urithi wetu. Hifadhi na sherehekea historia yako kupitia PichaZangu.store!"
      ]
    },
    category: {
      en: 'History & Leadership',
      sw: 'Historia na Uongozi'
    },
    date: 'June 12, 2024',
    readTime: '6 min read',
    imageUrl: '/images/abeid.jpeg',
    slug: 'leadership-legacy-abeid-karume',
    tags: ['#AbeidAmaniKarume', '#Uongozi', '#PichaZanguStore', '#HifadhiHistoria', '#UmojaNaMaendeleo', '#Tanzania', '#Zanzibar']
  };

  // Related posts data
  const relatedPosts: RelatedPost[] = [
    {
      id: '3',
      title: {
        en: 'The Zanzibar Revolution: A Photographic Journey',
        sw: 'Mapinduzi ya Zanzibar: Safari ya Picha'
      },
      excerpt: {
        en: 'Explore the visual history of the 1964 revolution through rare archival images.',
        sw: 'Chunguza historia ya kuona ya mapinduzi ya 1964 kupitia picha nadra za kumbukumbu.'
      },
      date: 'May 28, 2024',
      slug: 'zanzibar-revolution-photos'
    },
    {
      id: '4',
      title: {
        en: 'Preserving Tanzania\'s Cultural Heritage',
        sw: 'Kuhifadhi Urithi wa Kitamaduni wa Tanzania'
      },
      excerpt: {
        en: 'How digital archives are helping save Tanzania\'s rich history for future generations.',
        sw: 'Jinsi kumbukumbu za kidijitali zinasaidia kuokoa historia tajiri ya Tanzania kwa vizazi vijavyo.'
      },
      date: 'April 15, 2024',
      slug: 'preserving-tanzania-heritage'
    }
  ];


  return (
    <div className={`min-h-screen ${sourceSans.variable} font-sans bg-brand-foam text-brand-dark`}>
      <div className="container mx-auto px-4 py-6">
        <Link href="/" className="inline-flex items-center text-brand-accent hover:text-brand-blue">
          <ArrowLeft className="mr-2 h-5 w-5" />
          <span className="font-medium">{language === 'en' ? 'Back to Blog' : 'Rudi kwa Blogu'}</span>
        </Link>
      </div>

      <div className="container mx-auto px-4 pb-12">
        <div className="max-w-4xl mx-auto">
          <LanguageToggle language={language} setLanguage={setLanguage} />

          <div className="mb-4">
            <span className="inline-block rounded-full bg-brand-teal/90 px-4 py-1 text-sm font-medium text-white backdrop-blur-sm">
              {post.category[language]}
            </span>
          </div>

          <h1 className={`${baskerville.variable} font-serif text-4xl md:text-5xl font-bold text-brand-dark mb-6 leading-tight`}>
            {post.title[language]}
          </h1>

          <PostMeta
            date={post.date}
            readTime={post.readTime}
            language={language}
            isBookmarked={isBookmarked}
            isLiked={isLiked}
            onBookmark={() => setIsBookmarked(!isBookmarked)}
            onLike={() => setIsLiked(!isLiked)}
          />

          <div className="mb-10 rounded-xl overflow-hidden shadow-lg">
            <img
              src={post.imageUrl}
              alt={post.title[language]}
              className="w-full h-auto max-h-[500px] object-cover"
            />
          </div>

          <article className="prose prose-lg max-w-none mb-12">
            {post.content[language].map((paragraph, index) => (
              <p 
                key={index} 
                className={`mb-6 text-brand-dark/90 ${index === 1 ? 'text-xl italic border-l-4 border-brand-blue pl-6 py-2' : ''}`}
              >
                {paragraph}
              </p>
            ))}
          </article>

          <PostTags tags={post.tags} language={language} />
          <SharePost language={language} />
          <RelatedPosts posts={relatedPosts} language={language} />
          <CommentsSection language={language} />
        </div>
      </div>
    </div>
  );
}