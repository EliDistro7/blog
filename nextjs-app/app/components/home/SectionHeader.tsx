

export const SectionHeader = ({
    title,
    highlight,
    description,
  }: {
    title: string;
    highlight: string;
    description?: string;
  }) => (
    <div className="text-center mb-12">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-ocean-deep">
        {title.split(highlight)[0]}
        <span className="text-ocean-teal">{highlight}</span>
        {title.split(highlight)[1]}
      </h2>
      {description && (
        <p className="text-ocean-dark/80 max-w-2xl mx-auto mt-4">
          {description}
        </p>
      )}
    </div>
  );