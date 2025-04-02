

import Link from "next/link";
import { SectionHeader } from "./SectionHeader";

export const ProgramsSection = () => (
  <div className="bg-white py-16">
    <div className="container">
      <SectionHeader
        title="Our Tanzanian Programs"
        highlight="Tanzanian"
        description="Initiatives tailored for Tanzania's unique marine ecosystems"
      />
      
      <div className="grid md:grid-cols-3 gap-8">
        <ProgramCard
          title="Coastal Cleanups"
          description="Monthly beach cleanups across Dar es Salaam, Zanzibar, and Tanga"
          href="/programs/cleanups"
        />
        <ProgramCard
          title="Fishermen Training"
          description="Sustainable fishing practices for local fishing communities"
          href="/programs/fishing"
        />
        <ProgramCard
          title="School Programs"
          description="Marine conservation education in coastal schools"
          href="/programs/education"
        />
      </div>
    </div>
  </div>
);

const ProgramCard = ({ title, description, href }: { 
  title: string;
  description: string;
  href: string;
}) => (
  <div className="bg-ocean-foam p-8 rounded-xl border border-ocean-medium/20">
    <h3 className="text-xl font-display font-bold text-ocean-deep mb-4">{title}</h3>
    <p className="text-ocean-dark/80 mb-4">{description}</p>
    <Link href={href} className="text-ocean-teal hover:underline">
      Learn more →
    </Link>
  </div>
);