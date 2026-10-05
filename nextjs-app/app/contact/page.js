'use client';

// @/app/contact/ContactPage.js
// One self-contained page. Tokens and helpers come from the shared module
// (see tender/shared.js); adjust the import path if you move it.
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { useLanguage } from '@/context/LanguageContext';
import {
  SURFACE, AMBER, DARK, CREAM, MUTED, RULE, BORDER_S, IMAGES, CONTACT,
  focusRing, openWhatsApp,
  AfricanPattern, SectionHead,
  btnPrimary, btnPrimaryStyle, btnGhost, btnGhostStyle,
} from '@/app/components/tender/shared';

// Unsplash photo; needs images.remotePatterns in next.config. Swap for your own if you like.
const HERO_IMAGE =
  'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=2000&q=75';

// ── Copy ──────────────────────────────────────────────────────────────────────
const content = {
  en: {
    hero: {
      kicker: 'Contact',
      line1: 'Connect with',
      accent: 'Future Holders',
      text: 'Reach out to our multi-disciplinary team for all your service needs. Tell us what you are building and we will tell you how we can help.',
      whatsappBtn: 'Chat on WhatsApp',
      callBtn: 'Call',
      imageAlt: 'Two colleagues meeting with a client',
      whatsapp: "Hi! I'd like to get in touch with Future Holders.",
    },
    form: {
      label: 'Write to us',
      title: 'Service inquiry',
      subtitle: 'Share a few details and we will reply as soon as we can.',
      labels: { name: 'Full name', email: 'Email address', service: 'Service needed', message: 'Project details' },
      placeholder: 'Tell us about your project needs...',
      services: [
        { value: '', label: 'Select a service' },
        { value: 'Web development', label: 'Web development' },
        { value: 'Branding & identity', label: 'Branding & identity' },
        { value: 'Social media management', label: 'Social media management' },
        { value: 'Door-to-door marketing', label: 'Door-to-door marketing' },
        { value: 'Tender applications', label: 'Tender applications' },
        { value: 'Equipment sales', label: 'Equipment sales' },
        { value: 'Something else', label: 'Something else' },
      ],
      submit: 'Send via WhatsApp',
      email: 'Send by email instead',
      note: 'Sending opens WhatsApp with your message ready to go.',
      msg: (f) =>
        `Hi! My name is ${f.name} (${f.email}).\nService: ${f.service || 'Not specified'}\n\n${f.message}`,
      subject: 'Service inquiry',
    },
    directory: {
      title: 'Contact directory',
      items: [
        { title: 'General inquiries', email: 'info@futureholder.pro', phone: '+255 765 762 688, +255 697 093 672, +255 628 673 512' },
        { title: 'Projects & sales', details: 'Websites, social media and branding projects', email: 'sales@futureholder.pro', phone: '+255 745 787 370' },
        { title: 'Management', details: 'CEO office', email: 'info@futureholder.pro', phone: '+255 745 787 370' },
        { title: 'Portfolio requests', email: 'info@futureholder.pro', phone: '+255 745 787 370' },
      ],
    },
    cta: {
      label: 'The team',
      title: ['Meet our', 'expert team'],
      text: 'Discover the talented professionals behind Future Holders and the work they deliver.',
      buttons: [
        { text: 'View our team', href: '/team' },
        { text: 'See our portfolio', href: '/portfolio' },
      ],
    },
  },
  sw: {
    hero: {
      kicker: 'Mawasiliano',
      line1: 'Wasiliana na',
      accent: 'Future Holders',
      text: 'Wasiliana na timu yetu ya wataalamu wa fani mbalimbali kwa mahitaji yako yote ya huduma. Tuambie unachojenga, nasi tutakuambia jinsi tunavyoweza kusaidia.',
      whatsappBtn: 'Ongea nasi WhatsApp',
      callBtn: 'Piga simu',
      imageAlt: 'Wafanyakazi wawili wakikutana na mteja',
      whatsapp: 'Hujambo! Ningependa kuwasiliana na Future Holders.',
    },
    form: {
      label: 'Tuandikie',
      title: 'Maulizo ya huduma',
      subtitle: 'Toa maelezo machache nasi tutakujibu haraka iwezekanavyo.',
      labels: { name: 'Jina kamili', email: 'Barua pepe', service: 'Huduma unayohitaji', message: 'Maelezo ya mradi' },
      placeholder: 'Tuambie kuhusu mahitaji ya mradi wako...',
      services: [
        { value: '', label: 'Chagua huduma' },
        { value: 'Ujenzi wa tovuti', label: 'Ujenzi wa tovuti' },
        { value: 'Utambulisho wa chapa', label: 'Utambulisho wa chapa' },
        { value: 'Usimamizi wa mitandao ya kijamii', label: 'Usimamizi wa mitandao ya kijamii' },
        { value: 'Uuzaji nyumba kwa nyumba', label: 'Uuzaji nyumba kwa nyumba' },
        { value: 'Maombi ya zabuni', label: 'Maombi ya zabuni' },
        { value: 'Mauzo ya vifaa', label: 'Mauzo ya vifaa' },
        { value: 'Nyingine', label: 'Nyingine' },
      ],
      submit: 'Tuma kupitia WhatsApp',
      email: 'Tuma kwa barua pepe badala yake',
      note: 'Kutuma kunafungua WhatsApp ikiwa na ujumbe wako tayari.',
      msg: (f) =>
        `Hujambo! Jina langu ni ${f.name} (${f.email}).\nHuduma: ${f.service || 'Haijabainishwa'}\n\n${f.message}`,
      subject: 'Maulizo ya huduma',
    },
    directory: {
      title: 'Orodha ya mawasiliano',
      items: [
        { title: 'Maswali ya jumla', email: 'info@futureholder.pro', phone: '+255 765 762 688, +255 697 093 672, +255 628 673 512' },
        { title: 'Miradi na mauzo', details: 'Miradi ya tovuti, mitandao ya kijamii na chapa', email: 'sales@futureholder.pro', phone: '+255 745 787 370' },
        { title: 'Uongozi', details: 'Ofisi ya Mkurugenzi Mtendaji', email: 'info@futureholder.pro', phone: '+255 745 787 370' },
        { title: 'Maombi ya portfolio', email: 'info@futureholder.pro', phone: '+255 745 787 370' },
      ],
    },
    cta: {
      label: 'Timu',
      title: ['Kutana na', 'timu yetu ya wataalamu'],
      text: 'Gundua wataalamu wenye vipaji nyuma ya Future Holders na kazi wanazotoa.',
      buttons: [
        { text: 'Tazama timu yetu', href: '/team' },
        { text: 'Ona portfolio yetu', href: '/portfolio' },
      ],
    },
  },
};

// Form field styling (defined once, outside the component)
const fieldClass =
  'w-full rounded px-4 py-3 text-base placeholder:text-cream-muted focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-amber';
const fieldStyle = {
  background: 'rgba(255,255,255,0.04)',
  border: `1px solid ${BORDER_S}`,
  color: CREAM,
  colorScheme: 'dark',
};
const labelClass = 'block font-display font-bold text-sm mb-2';

const phoneHref = (p) => `tel:+${p.replace(/\D/g, '')}`;

const DirectoryItem = ({ item }) => (
  <li className="py-6" style={{ borderTop: `1px solid ${RULE}` }}>
    <h4 className="font-display font-extrabold" style={{ color: CREAM, fontSize: '1.2rem', letterSpacing: '-0.015em' }}>
      {item.title}
    </h4>
    {item.details && <p className="mt-1 text-sm" style={{ color: MUTED }}>{item.details}</p>}
    <div className="mt-3 space-y-1">
      <a href={`mailto:${item.email}`} className={`block text-sm font-semibold hover:underline ${focusRing}`} style={{ color: AMBER }}>
        {item.email}
      </a>
      {item.phone.split(',').map((p) => (
        <a key={p} href={phoneHref(p)} className={`block text-sm hover:underline ${focusRing}`} style={{ color: CREAM }}>
          {p.trim()}
        </a>
      ))}
    </div>
  </li>
);

// ── Page ──────────────────────────────────────────────────────────────────────
export default function ContactPage() {
  const { language } = useLanguage();
  const lang = language === 'sw' ? 'sw' : 'en';
  const c = content[lang];
  const h = c.hero;

  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' });
  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    openWhatsApp(c.form.msg(form));
  };

  const mailtoHref = `mailto:sales@futureholder.pro?subject=${encodeURIComponent(c.form.subject)}&body=${encodeURIComponent(
    c.form.msg(form)
  )}`;

  return (
    <div className="min-h-screen" style={{ background: SURFACE }}>
      {/* ═════════ HERO: image first ═════════ */}
      <section aria-labelledby="contact-hero-title" style={{ background: SURFACE }}>
        <div
          className="relative w-full overflow-hidden h-[clamp(28rem,75vh,44rem)] lg:h-auto lg:aspect-[16/7] lg:min-h-[32rem] lg:max-h-[50rem]"
          style={{ background: DARK }}
        >
          <Image src={HERO_IMAGE} alt={h.imageAlt} fill priority sizes="100vw" className="object-cover object-[50%_35%]" />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to bottom, rgba(13,9,3,0.55) 0%, rgba(13,9,3,0) 22%), linear-gradient(to top, rgba(26,18,8,1) 0%, rgba(26,18,8,0.75) 28%, rgba(26,18,8,0) 65%)',
            }}
          />
          <div className="absolute inset-x-0 bottom-0">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-10 lg:pb-6">
              <div className="flex items-center gap-3 mb-5">
                <div style={{ width: '3rem', height: 3, background: AMBER, borderRadius: 2, flexShrink: 0 }} />
                <span className="font-display font-bold text-sm" style={{ color: AMBER, letterSpacing: '0.04em' }}>{h.kicker}</span>
              </div>
              <h1
                id="contact-hero-title"
                className="font-display font-extrabold max-w-5xl"
                style={{ fontSize: 'clamp(2.75rem, 8vw, 6.5rem)', lineHeight: 0.96, letterSpacing: '-0.035em', color: CREAM }}
              >
                {h.line1} <span style={{ color: AMBER }}>{h.accent}</span>
              </h1>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 lg:pb-20">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 pt-8" style={{ borderTop: `1px solid ${RULE}` }}>
            <p className="lg:col-span-7 leading-snug" style={{ color: CREAM, fontSize: 'clamp(1.15rem, 2vw, 1.5rem)' }}>{h.text}</p>
            <div className="lg:col-span-4 lg:col-start-9 lg:self-end flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3">
              <button type="button" onClick={() => openWhatsApp(h.whatsapp)} className={btnPrimary} style={btnPrimaryStyle}>
                {h.whatsappBtn}
                <ArrowRight size={16} aria-hidden="true" />
              </button>
              <a href={CONTACT.phoneHref} className={btnGhost} style={btnGhostStyle}>
                {h.callBtn} {CONTACT.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═════════ FORM + DIRECTORY ═════════ */}
      <section
        aria-labelledby="contact-form-title"
        className="relative overflow-hidden pb-24"
        style={{ background: SURFACE }}
      >
        <AfricanPattern id="contactPattern" />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead id="contact-form-title" label={c.form.label} title={c.form.title} subtitle={c.form.subtitle} />

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Form */}
            <form onSubmit={handleSubmit} className="lg:col-span-7 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="contact-name" className={labelClass} style={{ color: CREAM }}>{c.form.labels.name}</label>
                  <input id="contact-name" type="text" autoComplete="name" required value={form.name} onChange={set('name')} className={fieldClass} style={fieldStyle} />
                </div>
                <div>
                  <label htmlFor="contact-email" className={labelClass} style={{ color: CREAM }}>{c.form.labels.email}</label>
                  <input id="contact-email" type="email" autoComplete="email" required value={form.email} onChange={set('email')} className={fieldClass} style={fieldStyle} />
                </div>
              </div>

              <div>
                <label htmlFor="contact-service" className={labelClass} style={{ color: CREAM }}>{c.form.labels.service}</label>
                <select id="contact-service" value={form.service} onChange={set('service')} className={fieldClass} style={fieldStyle}>
                  {c.form.services.map((s) => (
                    <option key={s.label} value={s.value} style={{ background: DARK, color: CREAM }}>{s.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="contact-message" className={labelClass} style={{ color: CREAM }}>{c.form.labels.message}</label>
                <textarea id="contact-message" rows={6} required value={form.message} onChange={set('message')} placeholder={c.form.placeholder} className={fieldClass} style={fieldStyle} />
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button type="submit" className={btnPrimary} style={btnPrimaryStyle}>
                  {c.form.submit}
                  <ArrowRight size={16} aria-hidden="true" />
                </button>
                <a href={mailtoHref} className={btnGhost} style={btnGhostStyle}>{c.form.email}</a>
              </div>
              <p className="text-sm" style={{ color: MUTED }}>{c.form.note}</p>
            </form>

            {/* Directory */}
            <aside className="lg:col-span-5" aria-labelledby="contact-directory-title">
              <h3
                id="contact-directory-title"
                className="font-display font-extrabold mb-6"
                style={{ fontSize: '1.75rem', lineHeight: 1.08, color: CREAM, letterSpacing: '-0.02em' }}
              >
                {c.directory.title}
              </h3>
              <ul style={{ borderBottom: `1px solid ${RULE}` }}>
                {c.directory.items.map((item) => (
                  <DirectoryItem key={item.title} item={item} />
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      {/* ═════════ TEAM CTA ═════════ */}
      <section aria-labelledby="contact-cta-title" className="relative overflow-hidden" style={{ background: DARK }}>
        <Image src={IMAGES.cta} alt="" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(26,18,8,1) 0%, rgba(13,9,3,0.88) 35%, rgba(13,9,3,0.94) 100%)' }} />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 pt-8" style={{ borderTop: `1px solid ${RULE}` }}>
            <div className="lg:col-span-7">
              <span className="font-display font-bold text-sm" style={{ color: AMBER, letterSpacing: '0.04em' }}>{c.cta.label}</span>
              <h2 id="contact-cta-title" className="font-display font-extrabold mt-3" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: 0.98, color: CREAM, letterSpacing: '-0.035em' }}>
                {c.cta.title[0]} <span style={{ color: AMBER }}>{c.cta.title[1]}</span>
              </h2>
            </div>
            <div className="lg:col-span-4 lg:col-start-9 lg:self-end">
              <p className="leading-relaxed mb-6" style={{ color: MUTED, fontSize: '1.05rem' }}>{c.cta.text}</p>
              <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3">
                {c.cta.buttons.map((b, i) => (
                  <Link key={b.href} href={b.href} className={i === 0 ? btnPrimary : btnGhost} style={i === 0 ? btnPrimaryStyle : btnGhostStyle}>
                    {b.text}
                    {i === 0 && <ArrowRight size={16} aria-hidden="true" />}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}