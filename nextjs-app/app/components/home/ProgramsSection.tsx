import Link from "next/link";

// ── Types ─────────────────────────────────────────────────────────────────────
interface SectionHeaderProps {
  title: string;
  highlight: string;
  description: string;
}

interface ProgramCardProps {
  title: string;
  description: string;
  href: string;
  index: number; // used to alternate accent stripe color
}

// ── Inline African geometric SVG pattern ─────────────────────────────────────
const AfricanPatternBg = () => (
  <svg
    width="100%" height="100%"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute inset-0 pointer-events-none"
    style={{ opacity: 0.04 }}
  >
    <defs>
      <pattern id="progPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
        <polygon points="20,3 37,20 20,37 3,20" fill="none" stroke="#F59E0B" strokeWidth="1" />
        <circle cx="20" cy="20" r="1.5" fill="#F59E0B" />
        <circle cx="0"  cy="0"  r="1"   fill="#D4AF37" />
        <circle cx="40" cy="0"  r="1"   fill="#D4AF37" />
        <circle cx="0"  cy="40" r="1"   fill="#D4AF37" />
        <circle cx="40" cy="40" r="1"   fill="#D4AF37" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#progPattern)" />
  </svg>
)

// ── Section Header ────────────────────────────────────────────────────────────
export const SectionHeader = ({ title, highlight, description }: SectionHeaderProps) => {
  // Split the title so we can colour the highlight substring in amber
  const parts = title.split(highlight)

  return (
    <div className="mb-14">
      {/* Label row */}
      <div className="flex items-center gap-3 mb-4">
        {/* Amber accent rule — matches `.accent-rule` utility */}
        <div
          style={{
            display: 'inline-block',
            width: '3rem',
            height: '3px',
            background: '#F59E0B',
            borderRadius: '2px',
            flexShrink: 0,
          }}
        />
        <span
          className="font-display font-bold uppercase"
          style={{ color: '#F59E0B', fontSize: '0.75rem', letterSpacing: '0.2em' }}
        >
          What We Do
        </span>
      </div>

      {/* Main heading */}
      <h2
        className="font-display font-extrabold uppercase leading-none tracking-tight"
        style={{
          fontSize: 'clamp(2rem, 4.5vw, 3.25rem)',
          letterSpacing: '-0.02em',
          color: '#F5F0E8',
          marginBottom: '1rem',
        }}
      >
        {parts[0]}
        <span style={{ color: '#F59E0B' }}>{highlight}</span>
        {parts[1]}
      </h2>

      {/* Description */}
      <p
        className="leading-relaxed"
        style={{
          color: 'rgba(245,240,232,0.55)',
          fontSize: '1rem',
          maxWidth: '540px',
        }}
      >
        {description}
      </p>
    </div>
  )
}

// ── Program Card ──────────────────────────────────────────────────────────────
const ProgramCard = ({ title, description, href, index }: ProgramCardProps) => {
  // Alternate top stripe between amber (#F59E0B) and gold (#D4AF37)
  const stripeColor = index % 2 === 0 ? '#F59E0B' : '#D4AF37'
  const tagColor    = index % 2 === 0 ? '#F59E0B' : '#D4AF37'

  return (
    <Link
      href={href}
      className="group relative flex flex-col overflow-hidden rounded transition-all duration-300"
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(245,158,11,0.15)',
        padding: '2rem 1.75rem',
      }}
    >
      {/* Top accent stripe */}
      <div
        className="absolute top-0 left-0 right-0 transition-transform duration-500"
        style={{ height: 3, background: stripeColor }}
      />

      {/* Index number — decorative, top-right */}
      <span
        className="absolute top-5 right-5 font-display font-black"
        style={{
          fontSize: '3rem',
          lineHeight: 1,
          color: 'rgba(245,158,11,0.08)',
          letterSpacing: '-0.04em',
          userSelect: 'none',
        }}
      >
        {String(index + 1).padStart(2, '0')}
      </span>

      {/* Title */}
      <h3
        className="font-display font-extrabold uppercase tracking-tight leading-tight transition-colors duration-200 group-hover:text-warning"
        style={{
          fontSize: '1.1rem',
          color: '#F5F0E8',
          marginBottom: '0.75rem',
          letterSpacing: '-0.01em',
        }}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className="leading-relaxed flex-1"
        style={{
          color: 'rgba(245,240,232,0.5)',
          fontSize: '0.875rem',
          marginBottom: '1.5rem',
        }}
      >
        {description}
      </p>

      {/* CTA link */}
      <div
        className="flex items-center gap-1.5 font-display font-bold uppercase tracking-widest transition-colors duration-200"
        style={{ color: tagColor, fontSize: '0.75rem' }}
      >
        Learn more
        {/* Arrow SVG — avoids importing an extra icon */}
        <svg
          width="12" height="12" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" strokeWidth="2.5"
          strokeLinecap="round" strokeLinejoin="round"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  )
}

// ── Programs Section ──────────────────────────────────────────────────────────
export const ProgramsSection = () => (
  <div
    className="relative py-20 px-6 overflow-hidden"
    style={{ background: '#0D0903' }} // surface.deep (darkBrown)
  >
    {/* Ambient amber glow — top left */}
    <div
      className="absolute top-0 left-0 w-1/2 h-full pointer-events-none"
      style={{
        background: 'radial-gradient(ellipse at top left, rgba(245,158,11,0.06), transparent 70%)',
      }}
    />

    {/* Geometric dot grid */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        opacity: 0.035,
        backgroundImage: 'radial-gradient(circle at 1px 1px, #F59E0B 1px, transparent 0)',
        backgroundSize: '40px 40px',
      }}
    />

    {/* African geometric overlay */}
    <AfricanPatternBg />

    {/* Content */}
    <div className="relative max-w-6xl mx-auto z-10">
      <SectionHeader
        title="Our Tanzanian Programs"
        highlight="Tanzanian"
        description="Initiatives tailored for Tanzania's unique marine ecosystems and coastal communities."
      />

      <div className="grid md:grid-cols-3 gap-5">
        <ProgramCard
          index={0}
          title="Coastal Cleanups"
          description="Monthly beach cleanups across Dar es Salaam, Zanzibar, and Tanga — protecting our shores one effort at a time."
          href="/programs/cleanups"
        />
        <ProgramCard
          index={1}
          title="Fishermen Training"
          description="Sustainable fishing practices for local fishing communities that preserve livelihoods and marine biodiversity."
          href="/programs/fishing"
        />
        <ProgramCard
          index={2}
          title="School Programs"
          description="Marine conservation education in coastal schools, building the next generation of environmental stewards."
          href="/programs/education"
        />
      </div>
    </div>

    {/* Bottom divider */}
    <div
      className="absolute bottom-0 left-0 right-0"
      style={{ height: '2px', background: 'linear-gradient(to right, transparent, rgba(245,158,11,0.25), transparent)' }}
    />
  </div>
)

export default ProgramsSection;