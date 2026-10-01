'use client';

// @/app/components/equipment/shared.js
export * from '@/app/components/tender/shared';

// Local images served from /public/equipment/
// To swap a photo, replace the file and update the path here.
export const EQUIP_IMAGES = {
  hero:     '/equipment/hero.jpeg',         // equip.jpeg — row of ZE335E excavators at dusk
  services: '/equipment/services.jpeg',     // man in Zoomlion shirt with machines
  process:  '/equipment/process.jpeg',      // excavator on CMA CGM flat rack at port
  faq:      '/equipment/faq.jpeg',          // white lowbed trailer
  cta:      '/equipment/cta.jpeg',          // Zoomlion TC500V crane truck

  // Order must match equipmentCategories array in data.js
  categories: [
    '/equipment/cat-excavators.jpeg',       // use your best excavator shot here
    '/equipment/cat-bulldozers.jpeg',       // replace with a bulldozer photo when available
    '/equipment/cat-loaders.jpeg',          // replace with a wheel loader photo when available
    '/equipment/cat-dump-trucks.jpeg',      // replace with a dump truck photo when available
    '/equipment/cat-lowbed.jpeg',           // red lowbed trailer
  ],
};