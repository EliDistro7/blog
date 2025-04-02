import HeroSection from "@/app/components/home/HeroSection";
import ServicesGrid from "@/app/components/home/ServicesGrid";
import TestimonialSection from "@/app/components/home/TestimonialSection";
import CTASection from "@/app/components/home/CTASection";
import { sanityFetch } from "@/sanity/lib/live";
import { groq } from "next-sanity";
import Link from "next/link";
import { ChevronRight, Rocket, Code, Zap } from "lucide-react";
import { format, parseISO } from "date-fns";

// Import your Post component
import {Post} from "@/app/components/Posts";

// Compact FeatureUpdate component variant
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

// Combined content query
const homepageContentQuery = groq`{
  "posts": *[_type == "post"] | order(date desc)[0...3] {
    _id,
    title,
    subtitle,
    slug,
    excerpt,
    date,
    location,
    tags,
    coverImage,
    "serviceType": serviceType->{title, slug}
  },
  "updates": *[_type == "featureUpdate"] | order(releaseDate desc)[0...3] {
    _id,
    title,
    version,
    releaseDate,
    updateType,
    summary,
    isHighlight,
    documentationLink,
    "product": product->{name},
    "relatedTutorial": relatedTutorial->{slug}
  }
}`;

export default async function Home() {
  const { posts, updates } = await sanityFetch({ 
    query: homepageContentQuery,
    tags: ['post', 'featureUpdate']
  });

  const hasPosts = posts?.length > 0;
  const hasUpdates = updates?.length > 0;

  return (
    <div className="bg-brand-foam">
      <HeroSection />
      
      {/* Combined Content Section */}
      <section className="py-16 container">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            Latest From Future Holders
          </h2>
          <p className="text-xl text-brand-blue max-w-3xl">
            Stay updated with our news and product developments
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Blog Posts Column */}
          {hasPosts && (
            <div>
              <h3 className="text-2xl font-bold text-brand-dark mb-6 pb-2 border-b border-brand-medium/20 flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-brand-accent"></span>
                Company Updates
              </h3>
              <div className="space-y-8">
                {posts.map((post) => (
                  <Post key={post._id} post={post} variant="compact" />
                ))}
              </div>
              {posts.length >= 3 && (
                <div className="mt-8 text-center">
                  <Link 
                    href="/posts" 
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-dark text-white hover:bg-brand-blue transition-colors"
                  >
                    View All Blog Posts
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              )}
            </div>
          )}

          {/* Feature Updates Column */}
          {hasUpdates && (
            <div>
              <h3 className="text-2xl font-bold text-brand-dark mb-6 pb-2 border-b border-brand-medium/20 flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-brand-blue"></span>
                Product Updates
              </h3>
              <div className="space-y-6">
                {updates.map((update) => (
                  <FeatureUpdateCompact key={update._id} update={update} />
                ))}
              </div>
              {updates.length >= 3 && (
                <div className="mt-8 text-center">
                  <Link 
                    href="/changelog" 
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-blue text-white hover:bg-brand-dark transition-colors"
                  >
                    View Full Changelog
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      <ServicesGrid />
      <TestimonialSection />
      <CTASection />
    </div>
  );
}