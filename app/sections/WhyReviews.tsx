'use client'
import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const points = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#28E7C4" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ width: 22, height: 22 }}>
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    stat: '93%',
    title: 'Kunder vælger ud fra anmeldelser',
    text: 'Størstedelen af kunder læser anmeldelser, før de kontakter en virksomhed. Stærke anmeldelser er din bedste sælger.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#7C5AF8" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ width: 22, height: 22 }}>
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
        <line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/>
      </svg>
    ),
    stat: '60%',
    title: 'Ubesvarede anmeldelser skader tilliden',
    text: 'Ingen svar signalerer, at virksomheden ikke lytter — det koster nye kunder. En negativ anmeldelse uden svar skræmmer op til 60% væk.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#06FF89" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ width: 22, height: 22 }}>
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
        <polyline points="17 18 23 18 23 12"/>
      </svg>
    ),
    stat: '6 mdr.',
    title: 'Aktive profiler styrker synlighed',
    text: 'Hyppige og nylige anmeldelser signalerer til Google og AI-systemer, at din virksomhed er aktiv og troværdig.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#28E7C4" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ width: 22, height: 22 }}>
        <rect x="4" y="4" width="16" height="16" rx="2"/>
        <rect x="9" y="9" width="6" height="6"/>
        <line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/>
        <line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/>
        <line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/>
        <line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/>
      </svg>
    ),
    stat: '2026',
    title: 'AI-søgninger bruger dit omdømme',
    text: 'I 2026 anbefaler AI-assistenter virksomheder baseret på online troværdighed. Dårligt omdømme = du bliver ikke fundet.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#7C5AF8" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ width: 22, height: 22 }}>
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
    stat: '3×',
    title: 'Professionelle svar skaber loyalitet',
    text: 'Virksomheder der svarer professionelt på anmeldelser opnår op til 3× mere loyalitet og flere genbesøg fra eksisterende kunder.',
  },
]

export default function WhyReviews() {
  const container = useRef<HTMLElement>(null)

  useGSAP(() => {
    gsap.from('.wr-heading', {
      opacity: 0, y: 28, duration: 0.7, ease: 'power2.out',
      scrollTrigger: { trigger: '.wr-heading', start: 'top 85%' },
    })
    gsap.from('.wr-card', {
      opacity: 0, y: 36, duration: 0.6, ease: 'power2.out', stagger: 0.1,
      scrollTrigger: { trigger: '.wr-cards', start: 'top 80%' },
    })
  }, { scope: container })

  return (
    <section ref={container} id="ydelser" className="relative bg-void py-24 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.022) 1px, transparent 1px)', backgroundSize: '36px 36px' }} />

      <div className="relative z-10 max-w-[1100px] mx-auto">
        <div className="wr-heading text-center mb-14">
          <div className="section-tag-dark justify-center mx-auto mb-5">Hvorfor anmeldelser</div>
          <h2 className="section-h2 mx-auto" style={{ maxWidth: 640 }}>
            Anmeldelser er ikke bare stjerner —
            <br />de er <span className="gradient-text">tillid, synlighed og salg</span>
          </h2>
          <p className="section-sub mx-auto text-center">
            De fleste virksomheder ved godt, at anmeldelser er vigtige.
            Men de færreste har tid, systemer eller ressourcer til at håndtere dem ordentligt.
          </p>
        </div>

        <div className="wr-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {points.map((p, i) => (
            <div key={i} className="wr-card glass-card p-6">
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 14 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  {p.icon}
                </div>
                <span style={{
                  fontSize: '1.1rem', fontWeight: 800, fontFamily: 'var(--font-display)',
                  color: 'rgba(255,255,255,0.18)',
                }}>
                  {p.stat}
                </span>
              </div>
              <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'rgba(255,255,255,0.88)', marginBottom: 8, lineHeight: 1.4 }}>{p.title}</h3>
              <p style={{ fontSize: '0.84rem', color: 'rgba(255,255,255,0.48)', lineHeight: 1.65 }}>{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
