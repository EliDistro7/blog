import HeroSection from "@/app/components/home/HeroSection";
import ServicesGrid from "@/app/components/home/ServicesGrid";
import TestimonialSection from "@/app/components/home/TestimonialSection";
import CTASection from "@/app/components/home/CTASection";

export default function Home() {
  return (
    <div className="bg-brand-foam">
      <HeroSection />
      <ServicesGrid />
      <TestimonialSection />
      <CTASection />
    </div>
  );
}