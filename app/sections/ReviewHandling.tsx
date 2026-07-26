'use client'
import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const features = [
  { text: 'Vi svarer på alle anmeldelser — positive, neutrale og negative', color: '#28E7C4' },
  { text: 'Vi tilpasser tonen til dit brands ønskede tone of voice',         color: '#7C5AF8' },
  { text: 'Vi sikrer hurtige og professionelle svar hver gang',              color: '#06FF89' },
  { text: 'Vi skaber ensartet og troværdig kommunikation udadtil',           color: '#28E7C4' },
  { text: 'Vi leverer månedlige rapporter med indsigter og tendenser',       color: '#7C5AF8' },
]

function Star({ filled }: { filled: boolean }) {
  return (
    <svg viewBox="0 0 24 24" style={{ width: 11, height: 11 }} fill={filled ? '#FACC15' : 'rgba(255,255,255,0.10)'} stroke="none">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  )
}

export default function ReviewHandling() {
  const container = useRef<HTMLElement>(null)

  useGSAP(() => {
    gsap.from('.rh-left > *', {
      opacity: 0, x: -28, duration: 0.7, ease: 'power2.out', stagger: 0.1,
      scrollTrigger: { trigger: '.rh-left', start: 'top 80%' },
    })
    gsap.from('.rh-card', {
      opacity: 0, x: 28, duration: 0.65, ease: 'power2.out', stagger: 0.15,
      scrollTrigger: { trigger: '.rh-cards', start: 'top 80%' },
    })
  }, { scope: container })

  return (
    <section ref={container} className="relative bg-void-surface py-24 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.020) 1px, transparent 1px)', backgroundSize: '36px 36px' }} />
      <div className="absolute pointer-events-none" style={{
        bottom: '-20%', left: '-10%', width: 600, height: 600, borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(40,231,196,0.07) 0%, transparent 65%)',
      }} />

      <div className="relative z-10 max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Left */}
          <div className="rh-left">
            <div className="section-tag-dark mb-5">Vi svarer for dig</div>
            <h2 className="section-h2 mb-4">
              Et professionelt team<br />
              <span className="gradient-text">bag hvert eneste svar</span>
            </h2>
            <p className="section-sub mb-8">
              Bollo er ikke bare software — vi er et dedikeret team, der håndterer
              din kommunikation med kunderne professionelt og konsekvent, hver dag.
            </p>
            <ul className="flex flex-col gap-3">
              {features.map((f, i) => (
                <li key={i} className="flex items-center gap-4 glass-card px-5 py-3.5" style={{ borderRadius: 12 }}>
                  <div style={{ width: 7, height: 7, borderRadius: '50%', flexShrink: 0, background: f.color, boxShadow: `0 0 8px ${f.color}60` }} />
                  <span style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.70)', lineHeight: 1.5 }}>{f.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — review card mockups */}
          <div className="rh-cards flex flex-col gap-4">

            {/* Positive review */}
            <div className="rh-card glass-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div style={{
                  width: 36, height: 36, borderRadius: '50%',
                  background: 'rgba(40,231,196,0.15)', border: '1px solid rgba(40,231,196,0.25)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.75rem', fontWeight: 700, color: '#28E7C4',
                }}>MJ</div>
                <div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'rgba(255,255,255,0.85)' }}>Mette Jensen</div>
                  <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.35)', display: 'flex', alignItems: 'center', gap: 6, marginTop: 2 }}>
                    <span>Google Maps</span>
                    <span style={{ display: 'flex', gap: 2 }}>
                      {[1,2,3,4,5].map(j => <Star key={j} filled={true} />)}
                    </span>
                  </div>
                </div>
              </div>
              <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.60)', marginBottom: 14, lineHeight: 1.65 }}>
                "Fantastisk service og super hurtig levering. Vil bestemt anbefale!"
              </p>
              <div style={{
                background: 'rgba(40,231,196,0.06)', borderRadius: 10,
                padding: '12px 14px', borderLeft: '2px solid rgba(40,231,196,0.35)',
              }}>
                <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#28E7C4', marginBottom: 5, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Svar fra virksomheden · Bollo</div>
                <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.65 }}>
                  "Mange tak, Mette! Det glæder os meget at høre. Vi sætter stor pris på din anmeldelse og ser frem til at hjælpe dig igen!"
                </p>
              </div>
            </div>

            {/* Negative review */}
            <div className="rh-card glass-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div style={{
                  width: 36, height: 36, borderRadius: '50%',
                  background: 'rgba(124,90,248,0.15)', border: '1px solid rgba(124,90,248,0.25)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.75rem', fontWeight: 700, color: '#7C5AF8',
                }}>TP</div>
                <div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'rgba(255,255,255,0.85)' }}>Thomas P.</div>
                  <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.35)', display: 'flex', alignItems: 'center', gap: 6, marginTop: 2 }}>
                    <span>Trustpilot</span>
                    <span style={{ display: 'flex', gap: 2 }}>
                      {[1,2,3,4,5].map(j => <Star key={j} filled={j <= 2} />)}
                    </span>
                  </div>
                </div>
              </div>
              <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.60)', marginBottom: 14, lineHeight: 1.65 }}>
                "Oplevede forsinkelse i leveringen og ingen svar på min henvendelse."
              </p>
              <div style={{
                background: 'rgba(124,90,248,0.06)', borderRadius: 10,
                padding: '12px 14px', borderLeft: '2px solid rgba(124,90,248,0.35)',
              }}>
                <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#7C5AF8', marginBottom: 5, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Svar fra virksomheden · Bollo</div>
                <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.65 }}>
                  "Hej Thomas, vi beklager din oplevelse. Vi kontakter dig direkte for at finde en løsning. Det er ikke den standard, vi stræber efter."
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
