'use client'
import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const steps = [
  {
    num: '01',
    color: '#28E7C4',
    title: 'Flere anmeldelser fra eksisterende kunder',
    text: 'Vi hjælper dig med at indsamle anmeldelser fra dine eksisterende kunder på en professionel og struktureret måde — så det er nemt for tilfredse kunder at dele deres oplevelse.',
  },
  {
    num: '02',
    color: '#7C5AF8',
    title: 'Vi identificerer utilfredse kunder i tide',
    text: 'Vores platform gør det muligt at tage direkte kontakt til utilfredse kunder, før de skriver en negativ anmeldelse offentligt. Det skaber mulighed for dialog og problemløsning.',
  },
  {
    num: '03',
    color: '#06FF89',
    title: 'Dialog og værdifuld feedback',
    text: 'Vi skaber dialog med dine kunder og indsamler konkret feedback, som du kan bruge til at forbedre din forretning. Anmeldelser bliver et strategisk udviklingsværktøj.',
  },
  {
    num: '04',
    color: '#28E7C4',
    title: 'Professionelle svar på alle anmeldelser',
    text: 'Vi svarer professionelt på alle anmeldelser på Trustpilot, Google Maps og TripAdvisor — positive, neutrale og negative — tilpasset dit brands tone of voice.',
  },
  {
    num: '05',
    color: '#7C5AF8',
    title: 'Øget synlighed i Google Maps og AI-søgninger',
    text: 'Vores kunder ligger typisk i top 5 på relevante Google Maps- og AI-søgninger inden for 6 måneder, fordi vi arbejder målrettet med anmeldelser, synlighed og digital troværdighed.',
  },
]

export default function HowItWorks() {
  const container = useRef<HTMLElement>(null)

  useGSAP(() => {
    gsap.from('.hiw-heading', {
      opacity: 0, y: 28, duration: 0.7, ease: 'power2.out',
      scrollTrigger: { trigger: '.hiw-heading', start: 'top 85%' },
    })
    gsap.utils.toArray<HTMLElement>('.hiw-step').forEach((el) => {
      gsap.from(el, {
        opacity: 0, x: -28, duration: 0.65, ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 83%' },
      })
    })
  }, { scope: container })

  return (
    <section ref={container} id="hvordan" className="relative bg-void-surface py-24 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.020) 1px, transparent 1px)', backgroundSize: '36px 36px' }} />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(ellipse, rgba(124,90,248,0.07) 0%, transparent 65%)', transform: 'translate(30%, -30%)' }} />

      <div className="relative z-10 max-w-[1100px] mx-auto">
        <div className="hiw-heading mb-16">
          <div className="section-tag-dark mb-5">Sådan virker det</div>
          <h2 className="section-h2" style={{ maxWidth: 540 }}>
            Sådan hjælper Bollo<br />
            <span className="gradient-text">din virksomhed til tops</span>
          </h2>
          <p className="section-sub">
            Vi overtager den tidskrævende og ofte irriterende opgave med
            anmeldelseshåndtering — fra start til slut.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {steps.map((s, i) => (
            <div
              key={i}
              className={`hiw-step glass-card p-7 flex gap-5 items-start ${i === 4 ? 'lg:col-span-2 lg:max-w-[560px]' : ''}`}
            >
              {/* Number badge */}
              <div style={{
                width: 48, height: 48, borderRadius: 14, flexShrink: 0,
                background: `${s.color}14`,
                border: `1px solid ${s.color}30`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '0.9rem', color: s.color }}>
                  {s.num}
                </span>
              </div>

              <div>
                <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'rgba(255,255,255,0.88)', marginBottom: 8, lineHeight: 1.4 }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: '0.84rem', color: 'rgba(255,255,255,0.48)', lineHeight: 1.65 }}>
                  {s.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
