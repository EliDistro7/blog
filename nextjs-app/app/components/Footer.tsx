import Link from 'next/link';
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
  const services = [
    { name: "Web Design", path: "/services/web-design" },
    { name: "Catering", path: "/services/catering" },
    { name: "Social Media", path: "/services/social-media" },
    { name: "MC Services", path: "/services/mc-services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Our Team", path: "/team" }
  ];

  const company = [
    { name: "About Us", path: "/about" },
    { name: "Careers", path: "/careers" },
    { name: "Blog", path: "/blog" },
    { name: "Press", path: "/press" }
  ];

  const legal = [
    { name: "Terms of Service", path: "/terms" },
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Cookie Policy", path: "/cookies" }
  ];

  const socials = [
    { icon: <Facebook className="w-5 h-5" />, path: "#" },
    { icon: <Instagram className="w-5 h-5" />, path: "#" },
    { icon: <Twitter className="w-5 h-5" />, path: "#" },
    { icon: <Linkedin className="w-5 h-5" />, path: "#" },
    { icon: <Youtube className="w-5 h-5" />, path: "#" }
  ];

  return (
    <footer className="bg-brand-dark text-brand-foam border-t border-brand-medium/30">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
          {/* Logo and description */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-accent text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M18.364 5.636L16.95 7.05A7 7 0 1 0 19 12h2a9 9 0 1 1-2.636-6.364z" />
                </svg>
              </div>
              <span className="text-xl font-serif font-bold text-white group-hover:text-brand-accent transition-colors">
                Future Holders
              </span>
            </Link>
            <p className="text-brand-foam/80 mb-6">
              Tanzania premier multi-service provider bridging technology and hospitality for complete business solutions.
            </p>
            <div className="flex gap-4">
              {socials.map((social, index) => (
                <a 
                  key={index} 
                  href={social.path} 
                  className="text-brand-foam/70 hover:text-brand-accent transition-colors p-2 rounded-full hover:bg-brand-dark/50"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    href={service.path} 
                    className="text-brand-foam/70 hover:text-brand-accent transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <Link 
                    href={item.path} 
                    className="text-brand-foam/70 hover:text-brand-accent transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal + Contact */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Legal</h3>
            <ul className="space-y-3 mb-8">
              {legal.map((item, index) => (
                <li key={index}>
                  <Link 
                    href={item.path} 
                    className="text-brand-foam/70 hover:text-brand-accent transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-lg font-bold text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:info@futureholders.co.tz" className="text-brand-foam/70 hover:text-brand-accent transition-colors">
                  info@futureholders.co.tz
                </a>
              </li>
              <li>
                <a href="tel:+255789000000" className="text-brand-foam/70 hover:text-brand-accent transition-colors">
                  +255 789 000 000
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-brand-medium/30 my-8"></div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-brand-foam/60 text-sm">
            © {new Date().getFullYear()} Future Holders. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-brand-foam/60 hover:text-brand-accent text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-brand-foam/60 hover:text-brand-accent text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}