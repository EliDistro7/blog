

export default function ServiceProcess({
  title,
  steps
}: {
  title: string;
  steps: {
    title: string;
    description: string;
    number: string;
  }[];
}) {
  return (
    <div className="hover:border-brand-gold/30 group-hover:bg-brand-gold/5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16 font-serif">
          {title}
        </h2>
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-8 top-0 h-full w-0.5 bg-brand-accent/20"></div>
          {steps.map((step, index) => (
            <div key={index} className="relative pl-16 mb-12 last:mb-0">
              <div className="absolute left-0 flex items-center justify-center w-16 h-16 rounded-full bg-brand-accent text-white font-bold text-xl">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}