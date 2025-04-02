import { ReactNode } from "react";

interface Feature {
  title: string;
  description: string;
  icon: ReactNode;
}

interface ServiceFeaturesProps {
  title: string | ReactNode;
  features: Feature[];
  cardClass?: string;
  iconContainerClass?: string;
  titleClass?: string;
  descriptionClass?: string;
  gridClass?: string;
}

export default function ServiceFeatures({
  title,
  features,
  cardClass = "bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow",
  iconContainerClass = "p-3 rounded-lg bg-brand-accent/10",
  titleClass = "text-xl font-bold text-brand-dark",
  descriptionClass = "text-gray-600",
  gridClass = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
}: ServiceFeaturesProps) {
  return (
    <div className="container mx-auto py-20 px-4">
      <h2 className="text-3xl font-bold text-center mb-16 font-serif">
        {typeof title === 'string' ? title : title}
      </h2>
      <div className={gridClass}>
        {features.map((feature, index) => (
          <div key={index} className={cardClass}>
            <div className="flex items-center gap-4 mb-4">
              <div className={iconContainerClass}>
                {feature.icon}
              </div>
              <h3 className={titleClass}>{feature.title}</h3>
            </div>
            <p className={descriptionClass}>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}