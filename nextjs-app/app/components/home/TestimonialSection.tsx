

import TestimonialCarousel from "./TestimonialCarousel";

export default function TestimonialSection() {
  return (
    <section className="bg-brand-dark text-white py-8 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-0">
          Trusted by <span className="text-brand-coral">Clients</span>
        </h2>
        <TestimonialCarousel />
      </div>
    </section>
  );
}