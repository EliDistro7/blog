import { SectionHeader } from "./SectionHeader";


export const ImpactStats = () => (
    <div className="bg-ocean-foam py-16">
      <div className="container">
        <SectionHeader
          title="Our Impact in Tanzania"
          highlight="Tanzania"
        />
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <StatItem value="35+" label="Coastal Communities" />
          <StatItem value="2,800" label="Local Volunteers" />
          <StatItem value="18T" label="Plastic Removed" />
          <StatItem value="6" label="Marine Protected Areas" />
        </div>
      </div>
    </div>
  );
  
  const StatItem = ({ value, label }: { value: string; label: string }) => (
    <div className="p-6">
      <div className="text-4xl md:text-5xl font-bold text-ocean-deep">{value}</div>
      <div className="text-ocean-dark mt-2">{label}</div>
    </div>
  );