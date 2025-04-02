import Image from "next/image";

export default function ProjectCard({
    title,
    description,
    url,
    image,
    status,
    metrics
  }: {
    title: string;
    description: string;
    url: string;
    image: string;
    status: string;
    metrics: string[];
  }) {
    return (
      <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all h-full flex flex-col">
        <div className="h-48 bg-brand-foam relative overflow-hidden">
          <Image 
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <p className="text-brand-foam/90">{description}</p>
          </div>
        </div>
        <div className="p-6 flex-grow">
          <div className="flex items-center gap-2 mb-4">
            <span className={`px-2 py-1 text-xs rounded-full ${
              status.includes('Live') 
                ? 'bg-green-100 text-green-800' 
                : 'bg-blue-100 text-blue-800'
            }`}>
              {status}
            </span>
            <a 
              href={url} 
              target="_blank"
              className="text-xs text-brand-accent hover:underline"
            >
              Visit Live Site →
            </a>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {metrics.map((metric, i) => (
              <span key={i} className="px-3 py-1 bg-brand-foam/50 rounded-full text-sm">
                {metric}
              </span>
            ))}
          </div>
          
          <button className="mt-auto w-full py-2 border border-brand-dark rounded-lg hover:bg-brand-dark hover:text-white transition-colors">
            View Case Details
          </button>
        </div>
      </div>
    );
  }