'use client'
import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function CtaSection() {
  const container = useRef<HTMLElement>(null)

  useGSAP(() => {
    gsap.from('.cta-content > *', {
      opacity: 0, y: 24, duration: 0.65, ease: 'power2.out', stagger: 0.12,
      scrollTrigger: { trigger: '.cta-content', start: 'top 80%' },
    })
  }, { scope: container })

  return (
    <section ref={container} id="kontakt" className="relative overflow-hidden py-28 px-6 md:px-12">
      {/* Gradient background */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #07091C 0%, #0E0B28 40%, #0A1A14 100%)' }} />
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.025) 1px, transparent 1px)', backgroundSize: '36px 36px' }} />

      {/* Glows */}
      <div className="absolute pointer-events-none" style={{
        top: '-30%', left: '25%', width: 700, height: 700, borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(124,90,248,0.18) 0%, transparent 65%)',
        filter: 'blur(2px)',
      }} />
      <div className="absolute pointer-events-none" style={{
        bottom: '-30%', right: '20%', width: 600, height: 600, borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(40,231,196,0.14) 0%, transparent 65%)',
        filter: 'blur(2px)',
      }} />

      <div className="relative z-10 max-w-2xl mx-auto text-center cta-content">

        <div className="section-tag-dark justify-center mx-auto mb-6">Kom i gang i dag</div>

        <h2
          className="font-display font-black text-white leading-tight tracking-tight mb-5"
          style={{ fontSize: 'clamp(1.9rem, 4.2vw, 2.8rem)' }}
        >
          Klar til et{' '}
          <span className="gradient-text">stærkere omdømme?</span>
        </h2>

        <p className="text-white/58 text-lg leading-relaxed mb-10">
          Book en uforpligtende demo og se præcis, hvad Bollo kan gøre for din virksomhed.
          <br />Ingen binding, ingen skjulte omkostninger.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <a href="mailto:hej@bollo.dk" className="btn-primary cta-trigger text-base py-4 px-10">
            Book en gratis demo
          </a>
          <a href="tel:+4500000000" className="btn-secondary text-base py-4 px-10">
            Ring til os
          </a>
        </div>

        {/* Trust chips */}
        <div className="flex flex-wrap justify-center gap-3">
          {['Svar inden 24 timer', 'Ingen bindingsperiode', 'Dansk support'].map((t, i) => (
            <span key={i} style={{
              fontSize: '0.78rem', color: 'rgba(255,255,255,0.40)',
              background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 99, padding: '5px 14px',
            }}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
