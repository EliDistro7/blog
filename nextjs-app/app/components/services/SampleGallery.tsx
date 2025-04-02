import Image from "next/image";
import { ReactNode } from "react";

interface ContentGalleryProps {
  images: {
    src: string;
    alt: string;
    caption?: string;
  }[];
  title?: ReactNode;
  highlightColor?: string;
  columns?: {
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  aspectRatio?: string;
  withCaptions?: boolean;
}

export function ContentGallery({
  images,
  title = "Our Content Samples",
  highlightColor = "brand-teal",
  columns = { sm: 2, md: 3, lg: 4 },
  aspectRatio = "aspect-square",
  withCaptions = false
}: ContentGalleryProps) {
  const gridClass = `grid grid-cols-${columns.sm || 2} md:grid-cols-${columns.md || 3} lg:grid-cols-${columns.lg || 4} gap-4`;

  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4">
        {title && (
          <h2 className="text-3xl font-bold text-center mb-12 font-serif">
            {typeof title === 'string' ? (
              <>
                {title.split(' ').map((word, i, arr) => 
                  i === arr.length - 1 ? (
                    <span key={i} className={`text-${highlightColor}`}> {word}</span>
                  ) : (
                    ` ${word}`
                  )
                )}
              </>
            ) : title}
          </h2>
        )}

        <div className={gridClass}>
          {images.map((image, index) => (
            <div 
              key={index} 
              className={`${aspectRatio} rounded-lg overflow-hidden group relative hover:scale-[1.03] transition-transform duration-300 shadow-sm hover:shadow-md`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              
              {withCaptions && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <p className="text-white text-sm translate-y-2 group-hover:translate-y-0 transition-transform">
                    {image.caption || image.alt}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}