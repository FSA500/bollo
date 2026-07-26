'use client'
import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#28E7C4" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ width: 20, height: 20 }}>
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
    ),
    title: 'Google Maps Top 5',
    text: 'Vores kunder opnår typisk top 5 placering inden for 6 måneder.',
    color: '#28E7C4',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#7C5AF8" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ width: 20, height: 20 }}>
        <rect x="4" y="4" width="16" height="16" rx="2"/>
        <rect x="9" y="9" width="6" height="6"/>
        <line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/>
        <line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/>
        <line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/>
        <line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/>
      </svg>
    ),
    title: 'AI-anbefalinger',
    text: 'Stærkt omdømme = din virksomhed bliver anbefalet af AI-assistenter.',
    color: '#7C5AF8',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#06FF89" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ width: 20, height: 20 }}>
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    title: 'Troværdighed online',
    text: 'Aktive og høje anmeldelser signalerer troværdighed til alle platforme.',
    color: '#06FF89',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#28E7C4" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ width: 20, height: 20 }}>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    title: 'Lokal synlighed',
    text: 'Stærkere tilstedeværelse i lokale søgninger for din by og branche.',
    color: '#28E7C4',
  },
]

export default function AiSection() {
  const container = useRef<HTMLElement>(null)

  useGSAP(() => {
    gsap.from('.ai-text > *', {
      opacity: 0, x: -28, duration: 0.7, ease: 'power2.out', stagger: 0.1,
      scrollTrigger: { trigger: '.ai-text', start: 'top 80%' },
    })
    gsap.from('.ai-box', {
      opacity: 0, y: 28, duration: 0.6, ease: 'power2.out', stagger: 0.1,
      scrollTrigger: { trigger: '.ai-boxes', start: 'top 80%' },
    })
  }, { scope: container })

  return (
    <section ref={container} id="ai" className="relative bg-void py-24 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.022) 1px, transparent 1px)', backgroundSize: '36px 36px' }} />
      <div className="absolute pointer-events-none" style={{
        top: '-20%', right: '-10%', width: 700, height: 700, borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(124,90,248,0.09) 0%, rgba(40,231,196,0.04) 45%, transparent 70%)',
        animation: 'glow-pulse 10s ease-in-out infinite',
      }} />

      <div className="relative z-10 max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Left — text */}
          <div className="ai-text">
            <div className="section-tag-dark mb-5">AI-søgninger & fremtidig synlighed</div>
            <h2 className="section-h2 mb-6">
              I 2026 søger dine kunder<br />
              via <span className="gradient-text">AI-værktøjer</span>
            </h2>
            <p className="text-white/55 text-base leading-relaxed mb-5">
              Flere og flere kunder stiller spørgsmål direkte til AI-assistenter i stedet
              for at bruge klassiske Google-søgninger. Disse AI-systemer anbefaler
              virksomheder baseret på online omdømme, anmeldelser og digital troværdighed.
            </p>
            <p className="text-white/55 text-base leading-relaxed mb-10">
              Bollo hjælper dig med at opbygge det digitale fundament, der sikrer, at
              din virksomhed bliver anbefalet og fundet — både i dag og i fremtiden.
            </p>
            <a href="#kontakt" className="btn-primary cta-trigger">
              Bliv synlig i AI-søgninger
            </a>
          </div>

          {/* Right — feature boxes */}
          <div className="ai-boxes grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((item, i) => (
              <div key={i} className="ai-box glass-card p-5">
                <div style={{
                  width: 40, height: 40, borderRadius: 10, marginBottom: 12,
                  background: `${item.color}12`, border: `1px solid ${item.color}25`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: '0.88rem', fontWeight: 700, color: 'rgba(255,255,255,0.88)', marginBottom: 6 }}>{item.title}</h3>
                <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
