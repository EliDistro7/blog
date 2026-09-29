'use client';

import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import {
  AMBER, GOLD, DARK, CREAM, MUTED, RULE,
  AfricanPattern, SectionHead, focusRing, useLang,
} from './shared';
import { currentClients as defaultClients } from './data';

const copy = {
  en: {
    label: 'Our clients',
    title: 'Client success stories',
    subtitle: 'Real results from real businesses across Tanzania.',
    followers: 'Followers',
    engagement: 'Engagement',
    conversions: 'Conversions',
    newTab: '(opens in a new tab)',
    imageAlt: (name) => `${name}: social media content`,
  },
  sw: {
    label: 'Wateja wetu',
    title: 'Hadithi za mafanikio ya wateja',
    subtitle: 'Matokeo halisi kutoka biashara halisi katika Tanzania.',
    followers: 'Wafuasi',
    engagement: 'Ushirikiano',
    conversions: 'Mabadiliko',
    newTab: '(inafunguka kwenye kichupo kipya)',
    imageAlt: (name) => `${name}: maudhui ya mitandao ya kijamii`,
  },
};

export default function ClientSuccessSection({ currentClients = defaultClients }) {
  const { lang, tr } = useLang();
  const c = copy[lang];

  const Card = ({ client, number, large }) => {
    const accent = number % 2 === 1 ? AMBER : GOLD;
    const conversion =
      client.results.leads ||
      client.results.bookings ||
      client.results.orders ||
      client.results.memberships ||
      client.results.sales;

    const metrics = [
      { value: client.results.followers, label: c.followers },
      { value: client.results.engagement, label: c.engagement },
      { value: conversion, label: c.conversions },
    ];

    return (
      <article>
        <div
          className="relative overflow-hidden rounded"
          style={{ aspectRatio: large ? '16 / 10' : '4 / 3', background: DARK }}
        >
          <Image
            src={client.image}
            alt={c.imageAlt(client.company)}
            fill
            sizes={large ? '(min-width: 1024px) 50vw, 100vw' : '(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw'}
            className="object-cover object-top"
          />
          <div className="absolute inset-0 pointer-events-none rounded" style={{ border: `1px solid ${RULE}` }} />
        </div>

        <div className="pt-4 mt-5" style={{ borderTop: `2px solid ${accent}` }}>
          <div className="flex items-center gap-3 mb-2">
            <span aria-hidden="true" className="font-display font-bold text-sm tabular-nums" style={{ color: MUTED }}>
              {String(number).padStart(2, '0')}
            </span>
            <span className="font-display font-semibold text-sm" style={{ color: accent }}>
              {tr(client.industry)}
            </span>
          </div>
          <h3
            className="font-display font-extrabold"
            style={{ fontSize: large ? '2rem' : '1.6rem', lineHeight: 1.08, color: CREAM, letterSpacing: '-0.02em' }}
          >
            {client.company}
          </h3>

          {/* Results */}
          <dl className="grid grid-cols-3 mt-6 pt-5" style={{ borderTop: `1px solid ${RULE}` }}>
            {metrics.map((m, i) => (
              <div
                key={m.label}
                className="flex flex-col-reverse justify-end px-3 first:pl-0"
                style={{ borderLeft: i === 0 ? 'none' : `1px solid ${RULE}` }}
              >
                <dt className="mt-1 text-xs leading-snug" style={{ color: MUTED }}>{m.label}</dt>
                <dd
                  className="font-display font-extrabold leading-none"
                  style={{ color: CREAM, fontSize: '1.6rem', letterSpacing: '-0.02em' }}
                >
                  {m.value}
                </dd>
              </div>
            ))}
          </dl>

          {/* Platforms: linked only where a real profile URL exists */}
          <ul className="flex flex-wrap gap-x-5 gap-y-1 mt-5">
            {client.platforms.map((platform) => {
              const href = client.socialLinks?.[platform.toLowerCase()];
              return (
                <li key={platform}>
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group inline-flex items-center gap-1 py-1 font-display font-bold text-sm ${focusRing}`}
                      style={{ color: accent }}
                    >
                      {platform}
                      <span className="sr-only"> {client.company} {c.newTab}</span>
                      <ArrowUpRight
                        size={14}
                        aria-hidden="true"
                        className="motion-safe:transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </a>
                  ) : (
                    <span className="inline-block py-1 font-display font-semibold text-sm" style={{ color: MUTED }}>
                      {platform}
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </article>
    );
  };

  const halves = currentClients.slice(0, 2);
  const thirds = currentClients.slice(2);

  return (
    <section
      id="clients"
      aria-labelledby="social-clients-title"
      className="relative overflow-hidden pb-24 scroll-mt-24"
      style={{ background: DARK }}
    >
      <AfricanPattern id="socialClientsPattern" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHead id="social-clients-title" label={c.label} title={c.title} subtitle={c.subtitle} />

        {/* Two half-width stories, then the rest in thirds */}
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-16">
          {halves.map((client, i) => (
            <li key={client.company} className="lg:col-span-6">
              <Card client={client} number={i + 1} large />
            </li>
          ))}
          {thirds.map((client, i) => (
            <li key={client.company} className="lg:col-span-4">
              <Card client={client} number={i + 3} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}