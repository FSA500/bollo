'use client'
import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

export default function Hero() {
  const container = useRef<HTMLElement>(null)

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    tl.from('.hero-tag',       { opacity: 0, y: 14, duration: 0.55, delay: 0.3 })
      .from('.hero-line',      { y: '108%', duration: 0.85, stagger: 0.11 }, '-=0.2')
      .from('.hero-sub',       { opacity: 0, y: 18, duration: 0.65 }, '-=0.5')
      .from('.hero-cta',       { opacity: 0, y: 14, duration: 0.45, stagger: 0.1 }, '-=0.42')
      .from('.hero-stat',      { opacity: 0, y: 20, duration: 0.45, stagger: 0.09 }, '-=0.32')
      .from('.hero-platforms', { opacity: 0, duration: 0.4 }, '-=0.25')
  }, { scope: container })

  return (
    <section
      ref={container}
      className="section-dark min-h-screen flex items-center pt-20 pb-16 px-6 md:px-12"
    >
      <div className="relative z-10 max-w-[1100px] mx-auto w-full">
        <div className="max-w-2xl">

          {/* Tag */}
          <div className="hero-tag section-tag-dark mb-7">
            Reputation Management
          </div>

          {/* Headline — each line in an overflow-hidden mask for the reveal */}
          <h1
            className="font-display font-black text-white leading-[1.07] tracking-tight mb-7"
            style={{ fontSize: 'clamp(2.1rem, 5vw, 3.4rem)' }}
          >
            <span className="overflow-hidden block">
              <span className="hero-line block">Få flere anmeldelser,</span>
            </span>
            <span className="overflow-hidden block">
              <span className="hero-line block">bedre omdømme og</span>
            </span>
            <span className="overflow-hidden block">
              <span className="hero-line block">
                synlighed i{' '}
                <em className="not-italic text-mint">AI-søgninger</em>
              </span>
            </span>
          </h1>

          {/* Subtext */}
          <p className="hero-sub text-white/70 text-lg leading-relaxed mb-10 max-w-xl">
            Bollo hjælper virksomheder med professionel Reputation Management på
            Trustpilot, Google Maps og TripAdvisor — så du kan fokusere på din drift,
            mens vi sikrer et stærkere omdømme.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 items-center mb-14">
            <a href="#kontakt" className="hero-cta btn-primary cta-trigger">
              Book en demo
            </a>
            <a href="#hvordan" className="hero-cta btn-secondary">
              Se hvordan det virker →
            </a>
          </div>

          {/* Stats bar */}
          <div className="grid grid-cols-3 divide-x divide-mint/20 border border-mint/20 rounded-2xl overflow-hidden bg-white/5 max-w-lg">
            {[
              { value: 'Top 5', label: 'Google Maps\nefter 6 mdr.' },
              { value: '3x',    label: 'Flere\nanmeldelser' },
              { value: '24/7',  label: 'Professionelle\nsvar' },
            ].map((stat, i) => (
              <div key={i} className="hero-stat px-6 py-5 text-center">
                <div className="font-display font-black text-mint text-2xl">{stat.value}</div>
                <div className="text-white/50 text-xs mt-1 leading-tight whitespace-pre-line">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Platforms */}
          <p className="hero-platforms text-white/38 text-xs mt-6 tracking-widest uppercase">
            Vi arbejder på · Google Maps · Trustpilot · TripAdvisor
          </p>
        </div>
      </div>
    </section>
  )
}
