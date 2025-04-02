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

export default function ImpactPage() {
  // Sample impact data - replace with your actual data
  const impactStats = [
    { value: "2,800+", label: "Local Volunteers", description: "Engaged in coastal conservation efforts" },
    { value: "18 Tons", label: "Plastic Removed", description: "From Tanzania's beaches and waterways" },
    { value: "35", label: "Coastal Communities", description: "Participating in our programs" },
    { value: "6", label: "Marine Protected Areas", description: "Established with local partners" },
    { value: "120", label: "Fishermen Trained", description: "In sustainable fishing practices" },
    { value: "15,000+", label: "Students Reached", description: "Through marine education programs" }
  ];

  const successStories = [
    {
      title: "Zanzibar Coral Restoration",
      location: "Nungwi, Zanzibar",
      impact: "85% coral survival rate in restored areas, creating new habitats for marine life",
      tags: ["conservation", "coral-reef", "zanzibar"]
    },
    {
      title: "Dar es Salaam Beach Cleanups",
      location: "Dar es Salaam",
      impact: "Reduced shoreline plastic waste by 60% in participating communities",
      tags: ["community", "plastic", "cleanup"]
    },
    {
      title: "Sustainable Fishing Initiative",
      location: "Mafia Island",
      impact: "Increased fish stocks by 40% through community-led conservation efforts",
      tags: ["fishing", "sustainability", "mafia-island"]
    }
  ];

  return (
    <div className={`min-h-screen ${sourceSans.variable} font-sans bg-ocean-foam text-ocean-dark`}>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-ocean-deep via-ocean-medium to-ocean-teal py-32 text-center">
        <div className="absolute inset-0 opacity-20 bg-[url('/images/wave-pattern.svg')] bg-[size:1200px]"></div>
        <div className="container relative z-10">
          <h1 className={`text-4xl md:text-6xl font-bold ${baskerville.variable} font-serif text-white mb-6`}>
            Our Impact
          </h1>
          <p className="text-xl text-ocean-light max-w-3xl mx-auto">
            Measuring success through Tanzania's thriving marine ecosystems and empowered communities
          </p>
        </div>
      </div>

      {/* Key Stats Section */}
      <div className="container py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className={`text-3xl font-bold ${baskerville.variable} font-serif text-ocean-deep mb-4`}>
            By The Numbers
          </h2>
          <p className="text-ocean-dark/80 text-lg">
            Quantifying our conservation efforts across Tanzania's coastline
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {impactStats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-ocean-foam p-8 rounded-xl shadow-depth border border-ocean-medium/20 hover:shadow-glow transition-all"
            >
              <div className="text-5xl font-bold text-ocean-teal mb-3">{stat.value}</div>
              <h3 className={`text-2xl font-bold ${baskerville.variable} font-serif text-ocean-deep mb-2`}>
                {stat.label}
              </h3>
              <p className="text-ocean-dark/80">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Success Stories */}
      <div className="bg-gradient-to-b from-ocean-foam to-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className={`text-3xl font-bold ${baskerville.variable} font-serif text-ocean-deep mb-4`}>
              Success Stories
            </h2>
            <p className="text-ocean-dark/80 text-lg">
              How our programs are making waves in coastal communities
            </p>
          </div>

          <div className="space-y-10 max-w-4xl mx-auto">
            {successStories.map((story, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-depth border border-ocean-medium/20 hover:border-ocean-teal/50 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                  <h3 className={`text-2xl font-bold ${baskerville.variable} font-serif text-ocean-deep`}>
                    {story.title}
                  </h3>
                  <span className="px-4 py-2 bg-ocean-teal/10 text-ocean-teal rounded-full text-sm font-bold">
                    {story.location}
                  </span>
                </div>
                <p className="text-ocean-dark/90 mb-6">{story.impact}</p>
                <div className="flex flex-wrap gap-2">
                  {story.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="px-3 py-1.5 text-xs font-bold rounded-full bg-ocean-foam text-ocean-deep border border-ocean-medium/30 hover:bg-ocean-teal/20 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Methodology */}
      <div className="bg-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className={`text-3xl font-bold ${baskerville.variable} font-serif text-ocean-deep mb-4`}>
              Our Approach
            </h2>
            <p className="text-ocean-dark/80 text-lg">
              The science and strategy behind our conservation success
            </p>
          </div>
          
          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="p-8 bg-ocean-foam/50 rounded-xl shadow-depth border border-ocean-medium/20 hover:shadow-glow transition-all">
              <h3 className={`text-2xl font-bold ${baskerville.variable} font-serif text-ocean-deep mb-4`}>
                Community-Led Conservation
              </h3>
              <p className="text-ocean-dark/90">
                We empower local communities to take ownership of marine protection through training, 
                education, and sustainable livelihood programs. Our model ensures long-term success 
                by making conservation economically viable for coastal residents.
              </p>
            </div>
            
            <div className="p-8 bg-ocean-foam/50 rounded-xl shadow-depth border border-ocean-medium/20 hover:shadow-glow transition-all">
              <h3 className={`text-2xl font-bold ${baskerville.variable} font-serif text-ocean-deep mb-4`}>
                Science-Based Solutions
              </h3>
              <p className="text-ocean-dark/90">
                All our programs are grounded in marine biology research and data. We collaborate with 
                Tanzanian universities and international marine scientists to implement the most effective 
                conservation strategies for East Africa's unique ecosystems.
              </p>
            </div>
            
            <div className="p-8 bg-ocean-foam/50 rounded-xl shadow-depth border border-ocean-medium/20 hover:shadow-glow transition-all">
              <h3 className={`text-2xl font-bold ${baskerville.variable} font-serif text-ocean-deep mb-4`}>
                Measurable Results
              </h3>
              <p className="text-ocean-dark/90">
                We establish clear metrics for each initiative and conduct regular monitoring to evaluate 
                impact. Our transparent reporting ensures donors and partners see exactly how their 
                support makes a difference.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-ocean-medium to-ocean-teal py-20">
        <div className="container text-center">
          <h2 className={`text-3xl font-bold ${baskerville.variable} font-serif text-white mb-6`}>
            Be Part of Our Impact
          </h2>
          <p className="text-ocean-light/90 max-w-3xl mx-auto mb-8 text-lg">
            Your support helps us expand these successful programs to more communities along Tanzania's coast.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              href="/donate"
              className="px-8 py-4 rounded-full bg-ocean-foam hover:bg-white text-ocean-deep font-bold transition-colors shadow-depth hover:shadow-glow text-lg"
            >
              Donate Now
            </Link>
            <Link
              href="/volunteer"
              className="px-8 py-4 rounded-full border-2 border-ocean-foam hover:bg-ocean-foam/10 text-ocean-foam font-bold transition-colors text-lg"
            >
              Volunteer Opportunities
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}