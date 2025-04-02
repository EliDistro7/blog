import Link from "next/link";
import { Libre_Baskerville, Source_Sans_3 as Source_Sans_Pro } from "next/font/google";
import { sanityFetch } from "@/sanity/lib/live";
import { morePostsQuery, allPostsQuery } from "@/sanity/lib/queries";
import DateComponent from "@/app/components/Date";
import OnBoarding from "@/app/components/Onboarding";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/utils";

// Define premium fonts
const baskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-baskerville"
});

const sourceSans = Source_Sans_Pro({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-source-sans"
});

const Post = ({ post }) => {
  const { 
    _id, 
    title, 
    subtitle, 
    slug, 
    excerpt, 
    date, 
    location, 
    tags, 
    coverImage,
    serviceType // New field from your schema
  } = post;

  // Get image dimensions for proper aspect ratio
  const imageWidth = coverImage?.asset?.metadata?.dimensions?.width || 1200;
  const imageHeight = coverImage?.asset?.metadata?.dimensions?.height || 630;
  const aspectRatio = imageWidth / imageHeight;
  
  const imageUrl = coverImage?.asset?._ref 
    ? urlForImage(coverImage)?.width(1200).quality(90).url()
    : null;

  // Service type color mapping
  const serviceColors = {
    'web-design': 'bg-brand-accent/10 text-brand-accent',
    'catering': 'bg-brand-coral/10 text-brand-coral',
    'social-media': 'bg-brand-teal/10 text-brand-teal',
    'mc-services': 'bg-brand-foam/10 text-brand-foam'
  };

  return (
    <article
      key={_id}
      className={`flex flex-col group ${sourceSans.variable} font-sans h-full`}
    >
      {/* Cover Image with natural dimensions */}
      {coverImage?.asset?._ref && (
        <div className="w-full relative overflow-hidden rounded-xl mb-5 shadow-md hover:shadow-lg transition-shadow duration-300">
          <Link href={`/posts/${slug}`} className="block">
            <div 
              className="w-full" 
              style={{ paddingBottom: `${100 / aspectRatio}%` }}
            >
              <Image
                src={imageUrl}
                alt={coverImage.alt || title}
                width={imageWidth}
                height={imageHeight}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px"
                priority={false}
              />
            </div>
            
            {/* Title Overlay - Updated with service type */}
            <div className={`absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-brand-dark/90 via-brand-dark/30 to-transparent ${baskerville.variable} font-serif`}>
              {serviceType?.title && (
                <span className={`text-xs font-bold px-2 py-1 rounded-full mb-2 inline-block ${serviceColors[serviceType.slug.current] || 'bg-brand-blue/10 text-brand-blue'}`}>
                  {serviceType.title}
                </span>
              )}
              <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                {title}
              </h3>
            </div>
          </Link>
        </div>
      )}

      {/* Metadata - Updated with service context */}
      <div className="flex flex-wrap items-center gap-3 text-sm uppercase tracking-wider text-brand-dark/60 mb-2">
        <DateComponent 
          dateString={date} 
          className="font-semibold"
        />
        {location && (
          <span className="text-brand-blue font-bold">• {location}</span>
        )}
        {serviceType?.title && (
          <span className="text-brand-accent font-bold">• {serviceType.title}</span>
        )}
      </div>

      {/* Subtitle */}
      {subtitle && (
        <h4 className={`text-xl font-semibold text-brand-dark mb-3 leading-snug ${baskerville.variable} font-serif`}>
          {subtitle}
        </h4>
      )}

      {/* Excerpt */}
      {excerpt && (
        <p className="text-brand-dark/90 leading-relaxed mb-4 line-clamp-3">
          {excerpt}
        </p>
      )}
      
      {/* Tags - Updated with service-specific styling */}
      {tags?.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3">
          {tags.map((tag) => {
            // Apply different colors based on service type
            const tagColor = serviceType?.slug?.current === 'web-design' ? 'bg-brand-accent/10 text-brand-accent' :
                            serviceType?.slug?.current === 'catering' ? 'bg-brand-coral/10 text-brand-coral' :
                            serviceType?.slug?.current === 'social-media' ? 'bg-brand-teal/10 text-brand-teal' :
                            'bg-brand-foam/10 text-brand-dark';
            
            return (
              <span 
                key={tag} 
                className={`px-3 py-1 text-xs font-bold rounded-full ${tagColor} hover:opacity-90 transition-opacity`}
              >
                {tag}
              </span>
            );
          })}
        </div>
      )}
    </article>
  );
};

const Posts = ({ children, heading, subHeading }) => (
  <div className={`py-16 ${sourceSans.variable} font-sans`}>
    {heading && (
      <h2 className={`text-4xl md:text-5xl font-bold ${baskerville.variable} font-serif tracking-tight text-brand-dark mb-4`}>
        {heading}
      </h2>
    )}
    {subHeading && (
      <p className="text-xl text-brand-blue max-w-3xl leading-relaxed">
        {subHeading}
      </p>
    )}
    <div className="mt-12 pt-12 border-t border-brand-medium/20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {children}
      </div>
    </div>
  </div>
);

export const MorePosts = async ({ skip, limit }) => {
  const { data } = await sanityFetch({
    query: morePostsQuery,
    params: { skip, limit },
  });

  if (!data || data.length === 0) {
    return null;
  }

  return (
    <Posts heading={`More Updates (${data?.length})`}>
      {data?.map((post) => <Post key={post._id} post={post} />)}
    </Posts>
  );
};

export const AllPosts = async () => {
  const { data } = await sanityFetch({ 
    query: allPostsQuery,
    tags: ['post']
  });

  if (!data || data.length === 0) {
    return <OnBoarding />;
  }

  return (
    <Posts
      heading="Latest Updates"
      subHeading="News and insights from our multi-service offerings"
    >
      {data.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </Posts>
  );
};