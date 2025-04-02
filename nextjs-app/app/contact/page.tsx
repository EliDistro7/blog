import { Libre_Baskerville, Source_Sans_3 as Source_Sans_Pro } from "next/font/google";
import { Mail, Phone, MapPin, Clock, Send, Camera, Utensils, Mic2, Share2, Users } from 'lucide-react';
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

export default function ContactPage() {
  const serviceContacts = [
    {
      title: "Web Design",
      details: "For website development and digital solutions",
      email: "web@futureholders.co.tz",
      phone: "+255 789 111 111",
      icon: <Camera className="w-5 h-5 text-brand-accent" />,
      color: "bg-brand-accent/10",
      border: "border-brand-accent/30"
    },
    {
      title: "Catering Services",
      details: "For event catering and culinary inquiries",
      email: "catering@futureholders.co.tz",
      phone: "+255 789 222 222",
      icon: <Utensils className="w-5 h-5 text-brand-coral" />,
      color: "bg-brand-coral/10",
      border: "border-brand-coral/30"
    },
    {
      title: "Social Media",
      details: "For digital marketing and brand growth",
      email: "social@futureholders.co.tz",
      phone: "+255 789 333 333",
      icon: <Share2 className="w-5 h-5 text-brand-teal" />,
      color: "bg-brand-teal/10",
      border: "border-brand-teal/30"
    },
    {
      title: "MC Services",
      details: "For event hosting and entertainment bookings",
      email: "events@futureholders.co.tz",
      phone: "+255 789 444 444",
      icon: <Mic2 className="w-5 h-5 text-brand-foam" />,
      color: "bg-brand-foam/10",
      border: "border-brand-foam/30"
    }
  ];

  const companyInfo = [
    {
      title: "General Inquiries",
      email: "info@futureholders.co.tz",
      phone: "+255 789 000 000"
    },
    {
      title: "Careers",
      email: "careers@futureholders.co.tz",
      phone: "+255 789 555 555"
    },
    {
      title: "Portfolio Showcase",
      email: "portfolio@futureholders.co.tz",
      phone: "+255 789 666 666"
    }
  ];

  return (
    <div className={`min-h-screen ${sourceSans.variable} font-sans bg-brand-foam text-brand-dark`}>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-brand-dark to-brand-blue py-32 text-center">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/circuit-pattern.svg')] bg-[size:1200px]"></div>
        <div className="container relative z-10 px-4">
          <h1 className={`text-4xl md:text-6xl font-bold ${baskerville.variable} font-serif text-white mb-6`}>
            Connect With Future Holders
          </h1>
          <p className="text-xl text-brand-foam/90 max-w-3xl mx-auto">
            Reach out to our multi-disciplinary team for all your service needs
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-brand-foam clip-path-wave"></div>
      </div>

      {/* Contact Content */}
      <div className="container py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-depth p-8 border border-brand-foam/20">
            <h2 className={`text-3xl font-bold ${baskerville.variable} font-serif text-brand-dark mb-6`}>
              Service Inquiry
            </h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-brand-dark font-medium mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 rounded-lg border border-brand-foam/30 focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-brand-dark font-medium mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 rounded-lg border border-brand-foam/30 focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="service" className="block text-brand-dark font-medium mb-2">Service Needed</label>
                <select 
                  id="service" 
                  className="w-full px-4 py-3 rounded-lg border border-brand-foam/30 focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  <option value="web">Web Design</option>
                  <option value="catering">Catering Services</option>
                  <option value="social">Social Media</option>
                  <option value="mc">MC Services</option>
                  <option value="portfolio">Portfolio Showcase</option>
                  <option value="team">Team Services</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-brand-dark font-medium mb-2">Project Details</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  className="w-full px-4 py-3 rounded-lg border border-brand-foam/30 focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                  placeholder="Tell us about your project needs..."
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="flex items-center justify-center gap-2 px-8 py-4 bg-brand-blue hover:bg-brand-accent text-white font-bold rounded-lg transition-all duration-300 shadow-depth hover:shadow-glow"
              >
                <Send className="w-5 h-5" />
                Send Inquiry
              </button>
            </form>
          </div>

          {/* Service Contacts */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-depth p-6 border border-brand-foam/20">
              <h2 className={`text-2xl font-bold ${baskerville.variable} font-serif text-brand-dark mb-6`}>
                Service-Specific Contacts
              </h2>
              <div className="space-y-4">
                {serviceContacts.map((service, index) => (
                  <div 
                    key={index} 
                    className={`p-4 rounded-lg ${service.color} border ${service.border}`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-2 rounded-md ${service.color.replace('10', '20')}`}>
                        {service.icon}
                      </div>
                      <h3 className="font-bold text-brand-dark">{service.title}</h3>
                    </div>
                    <p className="text-brand-dark/80 mb-3 text-sm">{service.details}</p>
                    <div className="space-y-2">
                      <Link 
                        href={`mailto:${service.email}`} 
                        className="flex items-center gap-2 text-brand-dark hover:text-brand-accent text-sm"
                      >
                        <Mail className="w-4 h-4" />
                        {service.email}
                      </Link>
                      <Link 
                        href={`tel:${service.phone.replace(/\D/g, '')}`} 
                        className="flex items-center gap-2 text-brand-dark hover:text-brand-accent text-sm"
                      >
                        <Phone className="w-4 h-4" />
                        {service.phone}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* General Contacts */}
            <div className="bg-white rounded-xl shadow-depth p-6 border border-brand-foam/20">
              <h2 className={`text-2xl font-bold ${baskerville.variable} font-serif text-brand-dark mb-6`}>
                Company Contacts
              </h2>
              <div className="space-y-4">
                {companyInfo.map((info, index) => (
                  <div key={index} className="p-4 rounded-lg bg-brand-foam/10 border border-brand-foam/30">
                    <h3 className="font-bold text-brand-dark mb-2">{info.title}</h3>
                    <div className="space-y-2">
                      <a 
                        href={`mailto:${info.email}`} 
                        className="flex items-center gap-2 text-brand-dark hover:text-brand-accent text-sm"
                      >
                        <Mail className="w-4 h-4" />
                        {info.email}
                      </a>
                      <a 
                        href={`tel:${info.phone.replace(/\D/g, '')}`} 
                        className="flex items-center gap-2 text-brand-dark hover:text-brand-accent text-sm"
                      >
                        <Phone className="w-4 h-4" />
                        {info.phone}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team CTA */}
      <div className="bg-gradient-to-r from-brand-blue to-brand-accent py-16 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className={`text-3xl font-bold ${baskerville.variable} font-serif text-white mb-6`}>
            Meet Our Expert Team
          </h2>
          <p className="text-brand-foam/90 mb-8 text-lg max-w-2xl mx-auto">
            Discover the talented professionals behind Future Holders diverse services
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/team"
              className="inline-flex items-center justify-center gap-2 bg-white text-brand-dark font-bold px-8 py-4 rounded-lg hover:bg-brand-foam transition-all duration-300 shadow-depth hover:shadow-glow"
            >
              <Users className="w-5 h-5" />
              View Our Team
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center gap-2 bg-brand-dark text-white font-bold px-8 py-4 rounded-lg hover:bg-brand-deep transition-all duration-300 shadow-depth hover:shadow-glow"
            >
              <Camera className="w-5 h-5" />
              See Our Portfolio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}