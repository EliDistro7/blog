'use client';

// @/app/components/door/shared.js
// Tokens, helpers and building blocks come from the tender module so both
// pages stay identical. When convenient, move that file to
// @/app/components/shared and update both imports.
export * from '@/app/components/tender/shared';

const u = (id, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`;

// Door-to-door page photos. Local files are the team's own photography.
// Remote images need next.config: images.remotePatterns -> images.unsplash.com
export const DOOR_IMAGES = {
  hero: '/services/door.jpeg',
  process: '/images/door.jpeg',
  faq: u('1552664730-d307ca884978', 1000),
  cta: u('1560472354-b33ff0c44a43', 2000),
  // Keyed by partner company name in data.js
  partners: {
    'SIFEX': '/partners/sifex.jpeg',
    'SIMBA CARGO': '/partners/simba-cargo.jpeg',
    'BESTAN LIMITED': '/partners/bestan.jpeg',
    'MAGNA': u('1456735190827-d1262f71b8a3', 1200),
    'CHRISTY QUALITY FOODS PVT LTD': '/door/tamtam.jpeg',
    
    'ARIVEA GLOBAL': '/partners/arivea.jpeg',
  },
};