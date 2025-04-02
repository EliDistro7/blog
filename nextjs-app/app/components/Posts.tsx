import Link from "next/link";
import { Libre_Baskerville, Source_Sans_3 as Source_Sans_Pro } from "next/font/google";
import { sanityFetch } from "@/sanity/lib/live";
import { morePostsQuery, allPostsQuery } from "@/sanity/lib/queries";
import { Post as PostType } from "@/sanity.types";
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

const Post = ({ post }: { post: PostType }) => {
  const { _id, title, subtitle, slug, excerpt, date, location, tags, coverImage } = post;

  // Get image dimensions for proper aspect ratio
  const imageWidth = coverImage?.asset?.metadata?.dimensions?.width || 1200;
  const imageHeight = coverImage?.asset?.metadata?.dimensions?.height || 630;
  const aspectRatio = imageWidth / imageHeight;
  
  const imageUrl = coverImage?.asset?._ref 
    ? urlForImage(coverImage)?.width(1200).quality(90).url()
    : null;

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
            
            {/* Title Overlay */}
            <div className={`absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-ocean-deep/90 via-ocean-deep/30 to-transparent ${baskerville.variable} font-serif`}>
              <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                {title}
              </h3>
            </div>
          </Link>
        </div>
      )}

      {/* Metadata */}
      <div className="flex items-center gap-3 text-sm uppercase tracking-wider text-ocean-dark/60 mb-2">
        <DateComponent 
          dateString={date} 
          className="font-semibold"
        />
        {location && (
          <span className="text-ocean-teal font-bold">• {location}</span>
        )}
      </div>

      {/* Subtitle */}
      {subtitle && (
        <h4 className={`text-xl font-semibold text-ocean-deep mb-3 leading-snug ${baskerville.variable} font-serif`}>
          {subtitle}
        </h4>
      )}

      {/* Excerpt */}
      {excerpt && (
        <p className="text-ocean-dark/90 leading-relaxed mb-4 line-clamp-3">
          {excerpt}
        </p>
      )}
      
      {/* Tags */}
      {tags?.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="px-3 py-1 text-xs font-bold rounded-full bg-ocean-foam/70 text-ocean-deep hover:bg-ocean-teal/20 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </article>
  );
};

const Posts = ({
  children,
  heading,
  subHeading,
}: {
  children: React.ReactNode;
  heading?: string;
  subHeading?: string;
}) => (
  <div className={`py-16 ${sourceSans.variable} font-sans`}>
    {heading && (
      <h2 className={`text-4xl md:text-5xl font-bold ${baskerville.variable} font-serif tracking-tight text-ocean-deep mb-4`}>
        {heading}
      </h2>
    )}
    {subHeading && (
      <p className="text-xl text-ocean-teal max-w-3xl leading-relaxed">
        {subHeading}
      </p>
    )}
    <div className="mt-12 pt-12 border-t border-ocean-medium/20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {children}
      </div>
    </div>
  </div>
);

export const MorePosts = async ({
  skip,
  limit,
}: {
  skip: string;
  limit: number;
}) => {
  const { data } = await sanityFetch({
    query: morePostsQuery,
    params: { skip, limit },
  });

  if (!data || data.length === 0) {
    return null;
  }

  return (
    <Posts heading={`More Updates (${data?.length})`}>
      {data?.map((post: any) => <Post key={post._id} post={post} />)}
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
      heading="Latest Stories"
      subHeading="Updates from our conservation efforts across Tanzania"
    >
      {data.map((post: any) => (
        <Post key={post._id} post={post} />
      ))}
    </Posts>
  );
};