

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

export default function VolunteerPage() {
  return (
    <div className={`min-h-screen ${sourceSans.variable} font-sans`}>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-ocean-deep to-ocean-teal py-32 text-center">
        <div className="container relative z-10">
          <h1 className={`text-4xl md:text-6xl font-bold ${baskerville.variable} font-serif text-ocean-foam mb-6`}>
            Volunteer With SOA Tanzania
          </h1>
          <p className="text-xl text-ocean-light max-w-3xl mx-auto">
            Join our community of ocean protectors and make a tangible difference
          </p>
        </div>
      </div>

      {/* Volunteer Opportunities */}
      <div className="container py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-xl shadow-md border border-ocean-medium/20">
            <h3 className={`text-2xl font-bold ${baskerville.variable} font-serif text-ocean-deep mb-4`}>
              Beach Cleanups
            </h3>
            <p className="text-ocean-dark/90 mb-6">
              Join our monthly coastal cleanups in Dar es Salaam, Zanzibar, and Tanga. 
              Perfect for individuals and groups looking for short-term commitments.
            </p>
            <Link 
              href="#signup" 
              className="inline-block px-6 py-3 bg-ocean-teal text-ocean-deep font-bold rounded-full hover:bg-ocean-light transition-colors"
            >
              Sign Up
            </Link>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md border border-ocean-medium/20">
            <h3 className={`text-2xl font-bold ${baskerville.variable} font-serif text-ocean-deep mb-4`}>
              Marine Research
            </h3>
            <p className="text-ocean-dark/90 mb-6">
              Assist our scientists with coral reef monitoring, turtle tracking, 
              and data collection. Ideal for students and marine enthusiasts.
            </p>
            <Link 
              href="#signup" 
              className="inline-block px-6 py-3 bg-ocean-teal text-ocean-deep font-bold rounded-full hover:bg-ocean-light transition-colors"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>

      {/* Volunteer Form */}
      <div id="signup" className="bg-ocean-foam py-20">
        <div className="container max-w-3xl">
          <h2 className={`text-3xl font-bold ${baskerville.variable} font-serif text-ocean-deep mb-8 text-center`}>
            Join Our Volunteer Team
          </h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-ocean-dark font-medium mb-2">Full Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-ocean-medium/30 focus:ring-2 focus:ring-ocean-teal focus:border-transparent" />
              </div>
              <div>
                <label className="block text-ocean-dark font-medium mb-2">Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg border border-ocean-medium/30 focus:ring-2 focus:ring-ocean-teal focus:border-transparent" />
              </div>
            </div>
            <div>
              <label className="block text-ocean-dark font-medium mb-2">Interest Area</label>
              <select className="w-full px-4 py-3 rounded-lg border border-ocean-medium/30 focus:ring-2 focus:ring-ocean-teal focus:border-transparent">
                <option>Beach Cleanups</option>
                <option>Marine Research</option>
                <option>Education Programs</option>
                <option>Community Outreach</option>
              </select>
            </div>
            <div>
              <label className="block text-ocean-dark font-medium mb-2">Message</label>
              <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-ocean-medium/30 focus:ring-2 focus:ring-ocean-teal focus:border-transparent"></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full md:w-auto px-8 py-4 bg-ocean-deep text-white font-bold rounded-full hover:bg-ocean-medium transition-colors shadow-depth"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}