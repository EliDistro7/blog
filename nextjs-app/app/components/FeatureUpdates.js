

import Link from "next/link";
import { Rocket, Code, Zap, ChevronRight } from "lucide-react";
import { format, parseISO } from "date-fns";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/utils";

const FeatureUpdate = ({ update }) => {
  const {
    _id,
    title,
    version,
    releaseDate,
    updateType,
    summary,
    product,
    documentationLink,
    relatedTutorial,
    isHighlight
  } = update;

  // Icons based on update type
  const updateIcons = {
    feature: <Rocket className="w-5 h-5 text-brand-accent" />,
    improvement: <Code className="w-5 h-5 text-brand-blue" />,
    fix: <Zap className="w-5 h-5 text-brand-teal" />
  };

  return (
    <article 
      key={_id}
      className={`border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow ${
        isHighlight ? "border-brand-accent/50 bg-brand-accent/5" : "border-brand-medium/20"
      }`}
    >
      {/* Header with version and type */}
      <div className="p-5 border-b border-brand-medium/10">
        <div className="flex justify-between items-start gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              {updateIcons[updateType] || updateIcons.feature}
              <span className="text-xs font-bold uppercase tracking-wider text-brand-dark/60">
                {updateType} • v{version}
              </span>
            </div>
            <h3 className="text-xl font-bold text-brand-dark">{title}</h3>
          </div>
          {product?.name && (
            <span className="px-3 py-1 text-xs font-bold rounded-full bg-brand-foam/70 text-brand-dark">
              {product.name}
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center gap-3 text-sm text-brand-dark/60 mb-4">
          <time dateTime={releaseDate}>
            {format(parseISO(releaseDate), 'MMMM d, yyyy')}
          </time>
          {isHighlight && (
            <span className="px-2 py-0.5 rounded-full bg-brand-accent/10 text-brand-accent text-xs font-bold">
              Major Update
            </span>
          )}
        </div>

        <p className="text-brand-dark/90 mb-5">{summary}</p>

        {/* Links */}
        <div className="flex flex-wrap gap-3">
          {documentationLink && (
            <a
              href={documentationLink}
              className="inline-flex items-center gap-1 px-4 py-2 rounded-lg bg-brand-blue/10 text-brand-blue hover:bg-brand-blue/20 transition-colors text-sm font-medium"
            >
              Documentation
              <ChevronRight className="w-4 h-4" />
            </a>
          )}

          {relatedTutorial && (
            <Link
              href={`/posts/${relatedTutorial.slug.current}`}
              className="inline-flex items-center gap-1 px-4 py-2 rounded-lg bg-brand-foam/70 hover:bg-brand-foam text-brand-dark transition-colors text-sm font-medium"
            >
              Tutorial Guide
              <ChevronRight className="w-4 h-4" />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};

// FeatureUpdatesGrid component for displaying a collection
export const FeatureUpdatesGrid = ({ updates, heading = "Latest Updates", subHeading = "What's new in our products" }) => {
  return (
    <div className="py-16">
      <div className="container">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-3">
            {heading}
          </h2>
          <p className="text-lg text-brand-blue max-w-3xl">
            {subHeading}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {updates.map((update) => (
            <FeatureUpdate key={update._id} update={update} />
          ))}
        </div>
      </div>
    </div>
  );
};

// Example usage in a page
export const AllFeatureUpdates = async () => {
  const { data } = await sanityFetch({
    query: groq`*[_type == "featureUpdate"] | order(releaseDate desc) {
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
    }`
  });

  if (!data || data.length === 0) {
    return <div className="py-16 text-center">No updates available</div>;
  }

  return (
    <FeatureUpdatesGrid 
      updates={data}
      heading="Product Changelog"
      subHeading="Stay updated with our latest features and improvements"
    />
  );
};