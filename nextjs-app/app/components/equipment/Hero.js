const HeroSection = ({ language, heroStats }) => (
  <section className="relative py-20 overflow-hidden bg-gradient-to-br from-brand-dark via-brand-goldDark to-brand-dark">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,_var(--tw-gradient-stops))] from-brand-dark/90 via-brand-gold/30 to-brand-dark"></div>
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* ... existing content ... */}
    </div>
  </section>
);

export default HeroSection;