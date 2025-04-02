export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-brand-dark to-brand-deep text-white py-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Elevate Your Brand with <span className="text-brand-accent">Future Holders</span>
        </h1>
        <p className="text-xl max-w-2xl mx-auto mb-8">
          From web design to event mastery—we deliver excellence across all platforms.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-6 py-3 bg-brand-accent hover:bg-brand-accent/90 rounded-full font-bold transition-colors shadow-depth">
            Get a Free Quote
          </button>
          <button className="px-6 py-3 border-2 border-white hover:bg-white/10 rounded-full font-bold transition-colors">
            Explore Services
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-brand-foam clip-path-wave"></div>
    </section>
  );
}