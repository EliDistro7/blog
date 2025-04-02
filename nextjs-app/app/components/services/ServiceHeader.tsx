

export default function ServiceHeader({
    title,
    subtitle,
    highlight,
    bgClass = "bg-gradient-to-br from-brand-dark to-brand-deep"
  }: {
    title: string;
    subtitle: string;
    highlight: string;
    bgClass?: string;
  }) {
    return (
      <section className={`relative ${bgClass} text-white py-28 px-4`}>
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif">
            {title} <span className="text-brand-accent">{highlight}</span>
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-brand-foam clip-path-wave"></div>
      </section>
    );
  }