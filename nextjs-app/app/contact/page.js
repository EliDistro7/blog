'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useLang } from '../../lib/i18n/LanguageContext'
import { Mail, Phone, MessageCircle, ArrowRight, CheckCircle2 } from 'lucide-react'

const WHATSAPP_NUMBER = '255617833806'



const SERVICE_KEYS = ['profile', 'website', 'app', 'card', 'proposal'] 

// ── reusable underline input class ──────────────────────────────────────────
const inputBase =
  'w-full bg-transparent border-b py-3 text-sm font-body text-bss-white placeholder-bss-muted outline-none transition-colors duration-200'
const inputOk  = 'border-bss-border focus:border-bss-subtle'
const inputErr = 'border-red-500'

export default function ContactPage() {
  const { t } = useLang()
  const [sent, setSent] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm()

  const onSubmit = async (data) => {
    // TODO: wire up to Resend / EmailJS / your preferred email API
    // await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) })
    console.log('Form submission:', data)
    await new Promise((r) => setTimeout(r, 800))
    setSent(true)
    reset()
  }

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    'Hello BSS, I would like to enquire about your services.'
  )}`

  return (
    <>
      {/* ── HEADER ───────────────────────────────────────── */}
      <section className="pt-36 pb-16 border-b border-bss-border">
        <div className="container-site">
          <p className="eyebrow">{t.contact.eyebrow}</p>
          <h1 className="display-xl max-w-xl mb-6">{t.contact.headline}</h1>
          <p className="body-lead max-w-prose">{t.contact.body}</p>
        </div>
      </section>

      {/* ── MAIN CONTENT ─────────────────────────────────── */}
      <section className="section-pad">
        <div className="container-site">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24">

            {/* ── FORM ── */}
            <div>
              {sent ? (
                /* Success state */
                <div className="py-12 flex flex-col gap-6">
                  <CheckCircle2
                    size={40}
                    strokeWidth={1.5}
                    className="text-bss-subtle"
                    aria-hidden="true"
                  />
                  <p className="font-display text-2xl font-bold text-bss-white">
                    {t.contact.formSuccess}
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="self-start text-xs tracking-wider uppercase font-medium text-bss-muted hover:text-bss-white transition-colors"
                  >
                    ← Send another
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col gap-8"
                  noValidate
                >
                  {/* Name */}
                  <div className="flex flex-col gap-2">
                    <label className="eyebrow">{t.contact.formName}</label>
                    <input
                      type="text"
                      placeholder="e.g. John Mwangi"
                      aria-invalid={!!errors.name}
                      className={`${inputBase} ${errors.name ? inputErr : inputOk}`}
                      {...register('name', { required: true })}
                    />
                    {errors.name && (
                      <p className="text-xs text-red-400 mt-1">
                        {t.contact.formName} is required.
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label className="eyebrow">{t.contact.formEmail}</label>
                    <input
                      type="email"
                      placeholder="you@company.com"
                      aria-invalid={!!errors.email}
                      className={`${inputBase} ${errors.email ? inputErr : inputOk}`}
                      {...register('email', {
                        required: true,
                        pattern: /^\S+@\S+\.\S+$/,
                      })}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-400 mt-1">
                        A valid email address is required.
                      </p>
                    )}
                  </div>

                  {/* Service */}
                  <div className="flex flex-col gap-2">
                    <label className="eyebrow">{t.contact.formService}</label>
                    <div className="relative">
                      <select
                        aria-invalid={!!errors.service}
                        className={`${inputBase} bg-bss-black cursor-pointer appearance-none pr-8 ${
                          errors.service ? inputErr : inputOk
                        }`}
                        defaultValue=""
                        {...register('service', { required: true })}
                      >
                        <option value="" disabled className="text-bss-muted">
                          Select a service
                        </option>
                        {SERVICE_KEYS.map((key) => (
                          <option key={key} value={key} className="bg-bss-surface">
                            {t.services.tabs[key]}
                          </option>
                        ))}
                      </select>
                      {/* chevron */}
                      <span
                        className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-bss-muted"
                        aria-hidden="true"
                      >
                        ↓
                      </span>
                    </div>
                    {errors.service && (
                      <p className="text-xs text-red-400 mt-1">
                        Please select a service.
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2">
                    <label className="eyebrow">{t.contact.formMessage}</label>
                    <textarea
                      rows={5}
                      placeholder="Tell us what you need and when."
                      aria-invalid={!!errors.message}
                      className={`${inputBase} resize-none ${
                        errors.message ? inputErr : inputOk
                      }`}
                      {...register('message', { required: true })}
                    />
                    {errors.message && (
                      <p className="text-xs text-red-400 mt-1">
                        A message is required.
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary self-start inline-flex items-center gap-2 disabled:opacity-50 disabled:cursor-wait"
                  >
                    {isSubmitting ? (
                      <>
                        <span
                          className="inline-block w-3.5 h-3.5 border-2 border-current border-t-transparent rounded-full animate-spin"
                          aria-hidden="true"
                        />
                        Sending…
                      </>
                    ) : (
                      <>
                        {t.contact.formSubmit}
                        <ArrowRight size={14} aria-hidden="true" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* ── INFO PANEL ── */}
            <div className="flex flex-col gap-10">

              {/* WhatsApp CTA */}
              <div className="border border-bss-border p-8 flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <MessageCircle
                    size={18}
                    strokeWidth={1.5}
                    className="text-bss-subtle shrink-0"
                    aria-hidden="true"
                  />
                  <p className="eyebrow">{t.contact.whatsappLabel}</p>
                </div>
                <p className="body-base">
                  Prefer a quick chat? Message us directly and we'll reply fast.
                </p>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2 self-start"
                >
                  {t.contact.whatsappLabel}
                  <ArrowRight size={14} aria-hidden="true" />
                </a>
              </div>

              {/* Phone */}
              <div
                className="border-t border-bss-border pt-8 flex flex-col gap-3"
              >
                <div className="flex items-center gap-3">
                  <Phone
                    size={16}
                    strokeWidth={1.5}
                    className="text-bss-subtle shrink-0"
                    aria-hidden="true"
                  />
                  <p className="eyebrow">{t.contact.officeLabel}</p>
                </div>
                <a
                  href={`tel:+${WHATSAPP_NUMBER}`}
                  className="font-display text-3xl font-bold text-bss-white hover:text-bss-offwhite transition-colors"
                >
                  {t.contact.officeNumber}
                </a>
                <p className="body-base">Dar es Salaam, Tanzania</p>
              </div>

              {/* Email */}
              <div
                className="border-t border-bss-border pt-8 flex flex-col gap-3"
              >
                <div className="flex items-center gap-3">
                  <Mail
                    size={16}
                    strokeWidth={1.5}
                    className="text-bss-subtle shrink-0"
                    aria-hidden="true"
                  />
                  <p className="eyebrow">Email</p>
                </div>
                <a
                  href="mailto:info@bss.co.tz"
                  className="font-display text-xl font-bold text-bss-white hover:text-bss-offwhite transition-colors"
                >
                  info@bss.co.tz
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}