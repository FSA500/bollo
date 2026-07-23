'use client'
import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const steps = [
  {
    num: '01',
    icon: (
      <svg className="w-5 h-5 text-forest flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    title: 'Flere anmeldelser fra eksisterende kunder',
    text: 'Vi hjælper dig med at indsamle anmeldelser fra dine eksisterende kunder på en professionel og struktureret måde — så det er nemt for tilfredse kunder at dele deres oplevelse.',
  },
  {
    num: '02',
    icon: (
      <svg className="w-5 h-5 text-forest flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Vi identificerer utilfredse kunder i tide',
    text: 'Vores platform gør det muligt at tage direkte kontakt til utilfredse kunder, før de skriver en negativ anmeldelse offentligt. Det skaber mulighed for dialog og problemløsning.',
  },
  {
    num: '03',
    icon: (
      <svg className="w-5 h-5 text-forest flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
    title: 'Dialog og værdifuld feedback',
    text: 'Vi skaber dialog med dine kunder og indsamler konkret feedback, som du kan bruge til at forbedre din forretning. Anmeldelser bliver et strategisk udviklingsværktøj.',
  },
  {
    num: '04',
    icon: (
      <svg className="w-5 h-5 text-forest flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
      </svg>
    ),
    title: 'Professionelle svar på alle anmeldelser',
    text: 'Vi svarer professionelt på alle anmeldelser på Trustpilot, Google Maps og TripAdvisor — positive, neutrale og negative — tilpasset dit brands tone of voice.',
  },
  {
    num: '05',
    icon: (
      <svg className="w-5 h-5 text-forest flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2"/>
        <rect x="9" y="9" width="6" height="6"/>
        <line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/>
        <line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/>
        <line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/>
        <line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/>
      </svg>
    ),
    title: 'Øget synlighed i Google Maps og AI-søgninger',
    text: 'Vores kunder ligger typisk i top 5 på relevante Google Maps- og AI-søgninger inden for 6 måneder, fordi vi arbejder målrettet med anmeldelser, synlighed og digital troværdighed.',
  },
]

export default function HowItWorks() {
  const container = useRef<HTMLElement>(null)
  const lineRef   = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    /* Section heading */
    gsap.from('.hiw-heading', {
      opacity: 0,
      y: 28,
      duration: 0.7,
      ease: 'power2.out',
      scrollTrigger: { trigger: '.hiw-heading', start: 'top 85%' },
    })

    /* Mint progress line draws downward as you scroll through the section */
    gsap.to(lineRef.current, {
      scaleY: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hiw-timeline',
        start: 'top 55%',
        end:   'bottom 65%',
        scrub: 0.8,
      },
    })

    /* Each dot pops in */
    gsap.utils.toArray<HTMLElement>('.step-dot').forEach((dot) => {
      gsap.from(dot, {
        scale: 0.35,
        opacity: 0,
        duration: 0.45,
        ease: 'back.out(2.2)',
        scrollTrigger: { trigger: dot, start: 'top 83%' },
      })
    })

    /* Each card slides in from the right */
    gsap.utils.toArray<HTMLElement>('.step-card').forEach((card) => {
      gsap.from(card, {
        opacity: 0,
        x: 30,
        duration: 0.65,
        ease: 'power2.out',
        scrollTrigger: { trigger: card, start: 'top 83%' },
      })
    })
  }, { scope: container })

  return (
    <section ref={container} id="hvordan" className="bg-mint-light py-20 px-6 md:px-12">
      <div className="max-w-[1100px] mx-auto">

        <div className="hiw-heading">
          <div className="section-tag">Sådan virker det</div>
          <h2 className="section-h2">
            Sådan hjælper Bollo<br />din virksomhed
          </h2>
          <p className="section-sub">
            Vi overtager den tidskrævende og ofte irriterende opgave med
            anmeldelseshåndtering — fra start til slut.
          </p>
        </div>

        {/* Timeline */}
        <div className="hiw-timeline relative">

          {/* Vertical track — centered on the 40px dot column */}
          <div
            className="absolute top-5 bottom-5 w-px bg-gray-200"
            style={{ left: '20px' }}
            aria-hidden="true"
          >
            <div
              ref={lineRef}
              className="w-full h-full bg-mint"
              style={{ transformOrigin: 'top', transform: 'scaleY(0)' }}
            />
          </div>

          <div className="flex flex-col">
            {steps.map((s, i) => (
              <div key={i} className={`relative flex gap-6 ${i < steps.length - 1 ? 'pb-7' : ''}`}>

                {/* Dot */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="step-dot w-10 h-10 rounded-full border-2 border-gray-200 bg-white flex items-center justify-center shadow-sm">
                    <span className="font-display font-black text-forest text-xs">{s.num}</span>
                  </div>
                </div>

                {/* Content card */}
                <div className="step-card bollo-card flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    {s.icon}
                    <h3 className="font-bold text-forest text-base">{s.title}</h3>
                  </div>
                  <p className="text-bollo-text-soft text-sm leading-relaxed">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
