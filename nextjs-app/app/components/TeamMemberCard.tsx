import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Linkedin, Twitter, Instagram, User } from 'lucide-react';

function TeamMemberCard({
  name,
  role,
  department,
  bio,
  image,
  tzExperience,
  badge,
  skills = []
}: {
  name: string;
  role: string;
  department: string;
  bio: string;
  image: string;
  tzExperience: string;
  badge: string;
  skills?: string[];
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Handle image loading state for cached images
    if (imgRef.current?.complete) {
      setIsLoading(false);
    }
  }, []);

  const handleImageLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleImageError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all h-full flex flex-col group">
      {/* Image container */}
      <div className="relative h-80 bg-gray-100">
        {/* Loading state */}
        {isLoading && !hasError && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
            <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-200 rounded-xl" />
          </div>
        )}

        {/* Error state */}
        {hasError && (
          <div className="absolute inset-0 bg-gray-100 flex flex-col items-center justify-center gap-2">
            <User className="w-16 h-16 text-gray-400" />
            <span className="text-sm text-gray-500">Image unavailable</span>
          </div>
        )}

        {/* Standard img tag */}
        <img
          ref={imgRef}
          src={image}
          alt={`${name}, ${role} at ${department}`}
          className={`absolute h-full w-full object-cover transition-opacity duration-300 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
          onLoad={handleImageLoad}
          onError={handleImageError}
          loading="lazy"
        />

        {/* Name overlay (only when image loaded) */}
        {!isLoading && !hasError && (
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
            <h3 className="text-xl font-bold text-white">{name}</h3>
            <p className="text-brand-foam/90">{role}</p>
          </div>
        )}

        {/* Badge (always visible) */}
        <div className="absolute top-4 right-4 bg-brand-yellow text-brand-foam text-xs font-bold px-3 py-1 rounded-full transition-transform group-hover:scale-105 z-10">
          {badge}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium bg-brand-foam/10 text-brand-foam px-2 py-1 rounded-full">
            {department}
          </span>
          <span className="text-xs font-medium bg-brand-green/10 text-brand-green px-2 py-1 rounded-full">
            {tzExperience}
          </span>
        </div>
        
        <p className="text-gray-700 mb-4 line-clamp-3">{bio}</p>
        
        {/* Skills chips */}
        {skills.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2">
            {skills.map((skill, i) => (
              <span 
                key={`${name}-skill-${i}`} 
                className="text-xs bg-brand-blue/10 text-brand-blue px-2 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
        
        {/* Social Links */}
        <div className="flex gap-3 mt-auto">
          <Link 
            href="#" 
            aria-label={`${name}'s LinkedIn profile`}
            className="text-brand-dark hover:text-brand-blue transition-colors hover:scale-110"
          >
            <Linkedin className="w-5 h-5" />
          </Link>
          <Link 
            href="#" 
            aria-label={`${name}'s Twitter profile`}
            className="text-brand-dark hover:text-brand-blue transition-colors hover:scale-110"
          >
            <Twitter className="w-5 h-5" />
          </Link>
          <Link 
            href="#" 
            aria-label={`${name}'s Instagram profile`}
            className="text-brand-dark hover:text-brand-blue transition-colors hover:scale-110"
          >
            <Instagram className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TeamMemberCard;