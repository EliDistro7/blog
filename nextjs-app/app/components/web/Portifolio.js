'use client';

import { Check, ArrowUpRight } from 'lucide-react';
import {
  AMBER, GOLD, SURFACE, CREAM, MUTED, RULE,
  AfricanPattern, SectionHead, focusRing, useLang,
} from './shared';
import { portfolioProjects as defaultProjects } from './data';

const copy = {
  en: {
    label: 'Our work',
    title: 'Our portfolio',
    subtitle: 'Discover the websites and applications we built for our clients.',
    inProgress: 'In progress',
    visit: 'Visit website',
    newTab: '(opens in a new tab)',
  },
  sw: {
    label: 'Kazi zetu',
    title: 'Portfolio yetu',
    subtitle: 'Gundua tovuti na programu tulizojenga kwa wateja wetu.',
    inProgress: 'Inaendelea',
    visit: 'Tembelea tovuti',
    newTab: '(inafunguka kwenye kichupo kipya)',
  },
};

export default function PortfolioSection({ portfolioProjects = defaultProjects }) {
  const { lang, tr } = useLang();
  const c = copy[lang];

  return (
    <section
      id="portfolio"
      aria-labelledby="web-portfolio-title"
      className="relative overflow-hidden pb-24 scroll-mt-24"
      style={{ background: SURFACE }}
    >
      <AfricanPattern id="webPortfolioPattern" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHead id="web-portfolio-title" label={c.label} title={c.title} subtitle={c.subtitle} />

        {/* Table-of-contents style index */}
        <ol style={{ borderTop: `1px solid ${RULE}` }}>
          {portfolioProjects.map((project, i) => {
            const accent = i % 2 === 0 ? AMBER : GOLD;
            return (
              <li
                key={project.url}
                className="grid lg:grid-cols-12 gap-6 lg:gap-8 py-8 lg:py-10"
                style={{ borderBottom: `1px solid ${RULE}` }}
              >
                {/* Title block */}
                <div className="lg:col-span-5">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-3">
                    <span aria-hidden="true" className="font-display font-bold text-sm tabular-nums" style={{ color: MUTED }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="font-display font-semibold text-sm" style={{ color: accent }}>
                      {tr(project.category)}
                    </span>
                    {project.inProgress && (
                      <span className="font-display font-semibold text-sm" style={{ color: GOLD }}>
                        · {c.inProgress}
                      </span>
                    )}
                  </div>
                  <h3
                    className="font-display font-extrabold"
                    style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', lineHeight: 1.05, color: CREAM, letterSpacing: '-0.025em' }}
                  >
                    {project.title}
                  </h3>
                  <p className="font-mono text-sm mt-3" style={{ color: accent }}>
                    {project.url}
                  </p>
                </div>

                {/* Detail block */}
                <div className="lg:col-span-6 lg:col-start-7">
                  <p className="leading-relaxed" style={{ color: CREAM, fontSize: '1.05rem' }}>
                    {tr(project.description)}
                  </p>

                  <ul className="flex flex-wrap gap-x-6 gap-y-2 mt-5">
                    {project.features.map((feature) => (
                      <li key={feature.en} className="flex items-center gap-2 text-sm" style={{ color: MUTED }}>
                        <Check size={14} aria-hidden="true" style={{ color: accent }} />
                        {tr(feature)}
                      </li>
                    ))}
                  </ul>

                  {!project.inProgress && (
                    <a
                      href={`https://${project.url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group inline-flex items-center gap-2 mt-6 font-display font-bold text-sm ${focusRing}`}
                      style={{ color: accent }}
                    >
                      {c.visit}
                      <span className="sr-only"> {project.title} {c.newTab}</span>
                      <ArrowUpRight
                        size={16}
                        aria-hidden="true"
                        className="motion-safe:transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </a>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}