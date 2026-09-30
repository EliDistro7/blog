'use client';

// @/app/components/branding/shared.js
// Tokens and building blocks live in the tender module so every page matches.
// When convenient, move that file to @/app/components/shared and update imports.
export * from '@/app/components/tender/shared';

const u = (id, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`;

// Every photo lives here so swapping one is a one-line change.
// Remote images need next.config: images.remotePatterns -> images.unsplash.com
// Best of all: use your own brand work, e.g. '/branding/hero.jpg' from /public/branding.
export const BRAND_IMAGES = {
  hero:     u('1561070791-2526d30994b5', 2000),
  services: u('1542744094-3a31f272c490', 2000),
  process:  u('1572044162444-ad60f128bdea', 1200),
  cta:      u('1626785774573-4b799315345d', 2000),
}
