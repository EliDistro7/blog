import Link from "next/link";

export default function CTASection() {
  return (
    <section className="container mx-auto py-20 px-4 text-center">
      <div>
        <h2 className="text-3xl font-bold mb-6 text-brand-dark">
          Ready to Transform Your Vision?
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-gray-700">
          Whether it&apos;s a website, event, or social media strategy—we&apos;ve got you covered.
        </p>
      </div>
      <Link 
        href="/contact" 
        className="inline-block px-8 py-4 bg-gradient-to-r from-brand-accent to-brand-teal text-white rounded-full font-bold hover:shadow-glow hover:bg-opacity-90 transition-all"
      >
        Contact Us Today
      </Link>
    </section>
  );
}
