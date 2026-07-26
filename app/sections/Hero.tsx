'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

const platforms = [
  { name: 'Google Maps', color: '#4285F4' },
  { name: 'Trustpilot',  color: '#00B67A' },
  { name: 'TripAdvisor', color: '#34A853' },
]

export default function Hero() {
  const container = useRef<HTMLElement>(null)

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    tl.from('.hero-badge',    { opacity: 0, y: 12, duration: 0.5, delay: 0.2 })
      .from('.hero-h1 span',  { y: '110%', duration: 0.9, stagger: 0.12 }, '-=0.2')
      .from('.hero-sub',      { opacity: 0, y: 20, duration: 0.65 }, '-=0.55')
      .from('.hero-cta-row',  { opacity: 0, y: 16, duration: 0.5 }, '-=0.4')
      .from('.hero-stat',     { opacity: 0, y: 18, duration: 0.4, stagger: 0.08 }, '-=0.3')
      .from('.hero-platforms-row', { opacity: 0, duration: 0.5 }, '-=0.2')
  }, { scope: container })

  return (
    <section
      ref={container}
      className="relative min-h-[90vh] flex flex-col items-center justify-center pt-28 pb-20 px-6 overflow-hidden bg-void"
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.025) 1px, transparent 1px)', backgroundSize: '36px 36px' }}
      />

      {/* Ambient glow orbs */}
      <div className="absolute pointer-events-none" style={{
        top: '-10%', left: '50%', transform: 'translateX(-50%)',
        width: 1000, height: 600, borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(124,90,248,0.12) 0%, rgba(40,231,196,0.05) 45%, transparent 70%)',
        filter: 'blur(1px)',
      }} />
      <div className="absolute pointer-events-none" style={{
        bottom: '0%', left: '15%',
        width: 400, height: 400, borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(40,231,196,0.07) 0%, transparent 65%)',
      }} />

      {/* Content */}
      <div className="relative z-10 max-w-[820px] mx-auto text-center">

        {/* Badge */}
        <div className="hero-badge inline-flex items-center gap-2 mb-8">
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(124,90,248,0.12)',
            border: '1px solid rgba(124,90,248,0.30)',
            borderRadius: 99, padding: '6px 16px',
          }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#7C5AF8', boxShadow: '0 0 8px rgba(124,90,248,0.8)', animation: 'blink 2.5s ease-in-out infinite' }} />
            <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.11em', color: 'rgba(255,255,255,0.75)', textTransform: 'uppercase', fontFamily: 'var(--font-body)' }}>
              Reputation Management Platform
            </span>
          </div>
        </div>

        {/* Headline */}
        <h1
          className="hero-h1 font-display font-black text-white leading-[1.06] tracking-tight mb-6"
          style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4rem)' }}
        >
          <span className="overflow-hidden block">
            <span className="block">Få 3× flere anmeldelser</span>
          </span>
          <span className="overflow-hidden block">
            <span className="block">og det <em className="not-italic gradient-text">omdømme</em></span>
          </span>
          <span className="overflow-hidden block">
            <span className="block">din virksomhed fortjener</span>
          </span>
        </h1>

        {/* Sub */}
        <p className="hero-sub text-white/60 text-lg leading-relaxed mb-10 max-w-[600px] mx-auto">
          Bollo håndterer professionel Reputation Management på Trustpilot,
          Google Maps og TripAdvisor — så du kan fokusere på din drift,
          mens vi sikrer dit omdømme.
        </p>

        {/* CTAs */}
        <div className="hero-cta-row flex flex-wrap gap-4 items-center justify-center mb-12">
          <a href="#kontakt" className="btn-primary cta-trigger text-base py-4 px-8">
            Book en gratis demo
          </a>
          <a href="#demo" className="btn-secondary text-base py-4 px-8">
            Se det i aktion ↓
          </a>
        </div>

        {/* Stats */}
        <div className="hero-stat-bar inline-grid grid-cols-3 divide-x divide-white/[0.08] rounded-2xl overflow-hidden mb-8 border border-white/[0.08]">
          {[
            { value: 'Top 5',  label: 'Google Maps\nefter 6 mdr.' },
            { value: '3×',     label: 'Flere\nanmeldelser' },
            { value: '24/7',   label: 'Professionelle\nsvar' },
          ].map((stat, i) => (
            <div key={i} className="hero-stat px-8 py-4 text-center">
              <div className="font-display font-black text-mint text-2xl mb-0.5">{stat.value}</div>
              <div className="text-white/45 text-xs leading-tight whitespace-pre-line">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Platform row */}
        <div className="hero-platforms-row flex items-center justify-center gap-3 flex-wrap">
          <span className="text-white/30 text-xs tracking-widest uppercase">Vi arbejder på</span>
          {platforms.map((p) => (
            <span
              key={p.name}
              className="text-xs font-semibold px-3 py-1 rounded-full border"
              style={{ color: p.color, borderColor: `${p.color}30`, background: `${p.color}10` }}
            >
              {p.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
