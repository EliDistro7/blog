

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

export default function GetInvolvedPage() {
  const involvementOptions = [
    {
      title: "Volunteer",
      description: "Join our hands-on conservation efforts from beach cleanups to marine research",
      link: "/volunteer",
      cta: "View Opportunities",
      icon: (
        <svg className="w-8 h-8 text-ocean-teal" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      )
    },
    {
      title: "Donate",
      description: "Support our programs with a financial contribution of any amount",
      link: "/donate",
      cta: "Give Now",
      icon: (
        <svg className="w-8 h-8 text-ocean-teal" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
        </svg>
      )
    },
    {
      title: "Partner",
      description: "Businesses and organizations can collaborate on conservation initiatives",
      link: "/partners",
      cta: "Explore Partnerships",
      icon: (
        <svg className="w-8 h-8 text-ocean-teal" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
        </svg>
      )
    },
    {
      title: "Educate",
      description: "Bring our marine conservation programs to your school or community",
      link: "/education",
      cta: "Learn More",
      icon: (
        <svg className="w-8 h-8 text-ocean-teal" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 3L1 9l11 6 9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/>
        </svg>
      )
    }
  ];

  const upcomingEvents = [
    {
      title: "Monthly Beach Cleanup",
      date: "June 15, 2025",
      location: "Dar es Salaam",
      link: "/events/beach-cleanup"
    },
    {
      title: "Marine Conservation Workshop",
      date: "July 3, 2025",
      location: "Zanzibar",
      link: "/events/conservation-workshop"
    },
    {
      title: "Sustainable Fishing Training",
      date: "August 10, 2025",
      location: "Mafia Island",
      link: "/events/fishing-training"
    }
  ];

  return (
    <div className={`min-h-screen ${sourceSans.variable} font-sans bg-ocean-foam text-ocean-dark`}>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-ocean-deep via-ocean-medium to-ocean-teal py-32 text-center">
        <div className="absolute inset-0 opacity-20 bg-[url('/images/wave-pattern.svg')] bg-[size:1200px]"></div>
        <div className="container relative z-10">
          <h1 className={`text-4xl md:text-6xl font-bold ${baskerville.variable} font-serif text-white mb-6`}>
            Get Involved
          </h1>
          <p className="text-xl text-ocean-light max-w-3xl mx-auto">
            Join our movement to protect Tanzania's marine ecosystems
          </p>
        </div>
      </div>

      {/* Ways to Get Involved */}
      <div className="container py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className={`text-3xl font-bold ${baskerville.variable} font-serif text-ocean-deep mb-4`}>
            Make a Difference
          </h2>
          <p className="text-ocean-dark/80 text-lg">
            Choose how you want to contribute to marine conservation in Tanzania
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {involvementOptions.map((option, index) => (
            <div 
              key={index} 
              className="bg-ocean-foam p-6 rounded-xl shadow-depth border border-ocean-medium/20 hover:shadow-glow transition-all h-full flex flex-col"
            >
              <div className="mb-4">
                {option.icon}
              </div>
              <h3 className={`text-xl font-bold ${baskerville.variable} font-serif text-ocean-deep mb-3`}>
                {option.title}
              </h3>
              <p className="text-ocean-dark/80 mb-6 flex-grow">{option.description}</p>
              <Link
                href={option.link}
                className="mt-auto px-6 py-3 rounded-full bg-ocean-teal hover:bg-ocean-light text-ocean-deep font-bold transition-colors shadow-depth hover:shadow-glow text-center block"
              >
                {option.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="bg-gradient-to-b from-white to-ocean-foam py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className={`text-3xl font-bold ${baskerville.variable} font-serif text-ocean-deep mb-4`}>
              Upcoming Events
            </h2>
            <p className="text-ocean-dark/80 text-lg">
              Join us for these conservation activities across Tanzania
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {upcomingEvents.map((event, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-depth border border-ocean-medium/20 hover:border-ocean-teal/50 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="md:w-1/3">
                    <div className="text-ocean-teal font-bold">{event.date}</div>
                    <div className="text-ocean-medium">{event.location}</div>
                  </div>
                  <div className="md:w-1/3">
                    <h3 className={`text-xl font-bold ${baskerville.variable} font-serif text-ocean-deep`}>
                      {event.title}
                    </h3>
                  </div>
                  <div className="md:w-1/3 text-right">
                    <Link
                      href={event.link}
                      className="inline-block px-6 py-2 rounded-full border-2 border-ocean-teal text-ocean-teal hover:bg-ocean-teal/10 font-bold transition-colors"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-ocean-medium py-20">
        <div className="container max-w-4xl mx-auto">
          <div className="bg-white p-8 md:p-12 rounded-xl shadow-depth text-center">
            <h2 className={`text-3xl font-bold ${baskerville.variable} font-serif text-ocean-deep mb-4`}>
              Stay Updated
            </h2>
            <p className="text-ocean-dark/80 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for monthly updates on our conservation work and upcoming events
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 rounded-lg border border-ocean-medium/30 focus:ring-2 focus:ring-ocean-teal focus:border-transparent"
                required
              />
              <button 
                type="submit" 
                className="px-6 py-3 bg-ocean-teal hover:bg-ocean-light text-ocean-deep font-bold rounded-full transition-colors shadow-depth hover:shadow-glow"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-ocean-deep to-ocean-medium py-20">
        <div className="container text-center">
          <h2 className={`text-3xl font-bold ${baskerville.variable} font-serif text-white mb-6`}>
            Ready to take the next step?
          </h2>
          <p className="text-ocean-light/90 max-w-3xl mx-auto mb-8 text-lg">
            Contact us directly to discuss how you can get involved with SOA Tanzania
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full bg-ocean-foam hover:bg-white text-ocean-deep font-bold transition-colors shadow-depth hover:shadow-glow text-lg"
            >
              Contact Our Team
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 rounded-full border-2 border-ocean-foam hover:bg-ocean-foam/10 text-ocean-foam font-bold transition-colors text-lg"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}