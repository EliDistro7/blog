

import ServiceHeader from "@/app/components/services/ServiceHeader";

export default function CateringPage() {
  return (
    <div className="bg-brand-foam">
      <ServiceHeader
        title="Exquisite"
        highlight="Catering Services"
        subtitle="Creating memorable culinary experiences for your special events"
        bgClass="bg-gradient-to-br from-brand-dark to-brand-coral/90"
      />

      {/* Menu Showcase Section */}
      <div className="container mx-auto py-20 px-4">
        <h2 className="text-3xl font-bold text-center mb-12 font-serif">
          Our <span className="text-brand-coral">Signature Menus</span>
        </h2>
        {/* Menu items grid */}
      </div>

      {/* Event Types */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 font-serif">
            Perfect For <span className="text-brand-coral">Your Event</span>
          </h2>
          {/* Event type cards */}
        </div>
      </div>
    </div>
  );
}