'use client';

// @/app/components/equipment/shared.js
// Tokens and building blocks live in the tender module so every page matches.
// When convenient, move that file to @/app/components/shared and update imports.
export * from '@/app/components/tender/shared';

const u = (id, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`;

// Every photo lives here so swapping one is a one-line change.
// Remote images need next.config: images.remotePatterns -> images.unsplash.com
// Prefer real photos of your own stock: drop them in /public/equipment and use '/equipment/x.jpg'.
export const EQUIP_IMAGES = {
  hero:     u('1541888946425-d81bb19240f5', 2000),
  services: u('1590496793929-36417d3117de', 1200),
  process:  u('1621905251189-08b45d6a269e', 1200),
  faq:      u('1581094794329-c8112a89af12', 1000),
  cta:      u('1504307651254-35680f356dfd', 2000),
  // Order matches equipmentCategories
  categories: [
    u('1579912437766-7896df6d3cd3', 1400), // Excavators
    u('1580901368919-7738efb0f87e', 1400), // Bulldozers
    u('1533106418989-88406c7cc8ca', 1400), // Wheel loaders
    u('1601584115197-04ecc0da31d7', 1400), // Dump trucks
  ],
};
