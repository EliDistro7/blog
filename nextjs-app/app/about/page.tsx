import { Libre_Baskerville, Source_Sans_3 as Source_Sans_Pro } from "next/font/google";
import Link from "next/link";

const baskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-baskerville"
});

const sourceSans = Source_Sans_Pro({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-source-sans"
});

export default function AboutPage() {
  return (
    <div className={`min-h-screen ${sourceSans.variable} font-sans`}>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-ocean-deep via-ocean-medium to-ocean-teal py-32 text-center">
        <div className="container relative z-10">
          <h1 className={`text-4xl md:text-6xl font-bold ${baskerville.variable} font-serif text-ocean-foam mb-6`}>
            About SOA Tanzania
          </h1>
          <p className="text-xl text-ocean-light max-w-3xl mx-auto">
            Protecting Tanzania's marine heritage through science, community, and action
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="container py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-3xl font-bold ${baskerville.variable} font-serif text-ocean-deep mb-8 text-center`}>
            Our Mission
          </h2>
          
          <div className="space-y-6 text-ocean-dark/90">
            <div className="p-6 bg-ocean-foam/30 rounded-xl border border-ocean-medium/20">
              <h3 className={`text-xl font-bold ${baskerville.variable} font-serif text-ocean-deep mb-3`}>
                Conservation First
              </h3>
              <p>
                Save Our Oceans Africa Tanzania is dedicated to preserving the rich marine biodiversity 
                along Tanzania's coastline through community-led conservation, education programs, and 
                sustainable fishing initiatives.
              </p>
            </div>
            
            <div className="p-6 bg-ocean-foam/30 rounded-xl border border-ocean-medium/20">
              <h3 className={`text-xl font-bold ${baskerville.variable} font-serif text-ocean-deep mb-3`}>
                Our Growth
              </h3>
              <p>
                Founded in 2018, we've grown from a small group of marine enthusiasts to a network of 
                2,800 local volunteers across 35 coastal communities.
              </p>
            </div>
            
            <div className="p-6 bg-ocean-foam/30 rounded-xl border border-ocean-medium/20">
              <h3 className={`text-xl font-bold ${baskerville.variable} font-serif text-ocean-deep mb-3`}>
                Three Pillars
              </h3>
              <p>
                Our work focuses on: <span className="text-ocean-teal font-semibold">protection</span> of marine ecosystems, 
                <span className="text-ocean-teal font-semibold"> education</span> of coastal communities, and 
                <span className="text-ocean-teal font-semibold"> sustainable development</span> of ocean resources.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div className="bg-ocean-foam py-20">
        <div className="container">
          <h2 className={`text-3xl font-bold ${baskerville.variable} font-serif text-ocean-deep mb-12 text-center`}>
            Our Impact in Tanzania
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-xl text-center shadow-sm border border-ocean-medium/20">
              <div className="text-5xl font-bold text-ocean-teal mb-3">35+</div>
              <h3 className="text-xl font-bold text-ocean-deep mb-2">Coastal Communities</h3>
              <p className="text-ocean-dark/80">Engaged in conservation programs</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center shadow-sm border border-ocean-medium/20">
              <div className="text-5xl font-bold text-ocean-teal mb-3">18T</div>
              <h3 className="text-xl font-bold text-ocean-deep mb-2">Plastic Removed</h3>
              <p className="text-ocean-dark/80">From beaches and ocean since 2018</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center shadow-sm border border-ocean-medium/20">
              <div className="text-5xl font-bold text-ocean-teal mb-3">6</div>
              <h3 className="text-xl font-bold text-ocean-deep mb-2">Protected Areas</h3>
              <p className="text-ocean-dark/80">Established with local partners</p>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="container py-20">
        <h2 className={`text-3xl font-bold ${baskerville.variable} font-serif text-ocean-deep mb-12 text-center`}>
          Our Core Values
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="p-6 bg-ocean-deep/5 rounded-xl border border-ocean-deep/10">
            <h3 className={`text-xl font-bold ${baskerville.variable} font-serif text-ocean-deep mb-3`}>
              Community
            </h3>
            <p className="text-ocean-dark/90">
              Empowering local communities as stewards of their marine resources through education and capacity building.
            </p>
          </div>
          <div className="p-6 bg-ocean-deep/5 rounded-xl border border-ocean-deep/10">
            <h3 className={`text-xl font-bold ${baskerville.variable} font-serif text-ocean-deep mb-3`}>
              Sustainability
            </h3>
            <p className="text-ocean-dark/90">
              Promoting practices that balance ecological health with community needs for long-term impact.
            </p>
          </div>
          <div className="p-6 bg-ocean-deep/5 rounded-xl border border-ocean-deep/10">
            <h3 className={`text-xl font-bold ${baskerville.variable} font-serif text-ocean-deep mb-3`}>
              Transparency
            </h3>
            <p className="text-ocean-dark/90">
              Maintaining open communication about our work, challenges, and achievements with all stakeholders.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-ocean-medium to-ocean-teal py-20">
        <div className="container text-center">
          <h2 className={`text-3xl font-bold ${baskerville.variable} font-serif text-white mb-6`}>
            Ready to make a difference?
          </h2>
          <p className="text-ocean-foam/90 max-w-3xl mx-auto mb-8 text-lg">
            Join our network of ocean protectors and contribute to Tanzania's marine conservation efforts.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/volunteer"
              className="px-8 py-4 rounded-full bg-ocean-foam hover:bg-white text-ocean-deep font-bold transition-colors shadow-depth hover:shadow-glow text-lg"
            >
              Volunteer With Us
            </Link>
            <Link
              href="/donate"
              className="px-8 py-4 rounded-full border-2 border-ocean-foam hover:bg-ocean-foam/10 text-ocean-foam font-bold transition-colors text-lg"
            >
              Support Our Work
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}