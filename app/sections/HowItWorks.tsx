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
        <line x1="9" y1="1" x2="9" y2="4"/>
        <line x1="15" y1="1" x2="15" y2="4"/>
        <line x1="9" y1="20" x2="9" y2="23"/>
        <line x1="15" y1="20" x2="15" y2="23"/>
        <line x1="20" y1="9" x2="23" y2="9"/>
        <line x1="20" y1="14" x2="23" y2="14"/>
        <line x1="1" y1="9" x2="4" y2="9"/>
        <line x1="1" y1="14" x2="4" y2="14"/>
      </svg>
    ),
    title: 'Øget synlighed i Google Maps og AI-søgninger',
    text: 'Vores kunder ligger typisk i top 5 på relevante Google Maps- og AI-søgninger inden for 6 måneder, fordi vi arbejder målrettet med anmeldelser, synlighed og digital troværdighed.',
  },
]

export default function HowItWorks() {
  return (
    <section id="hvordan" className="bg-white py-20 px-6 md:px-12">
      <div className="max-w-[1100px] mx-auto">

        <div className="section-tag">Sådan virker det</div>
        <h2 className="section-h2">Sådan hjælper Bollo<br />din virksomhed</h2>
        <p className="section-sub">
          Vi overtager den tidskrævende og ofte irriterende opgave med
          anmeldelseshåndtering — fra start til slut.
        </p>

        <div className="flex flex-col gap-5">
          {steps.map((s, i) => (
            <div
              key={i}
              className="bollo-card flex flex-col sm:flex-row gap-5 items-start"
            >
              {/* Number */}
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-forest flex items-center justify-center">
                <span className="font-display font-black text-mint text-sm">{s.num}</span>
              </div>

              {/* Icon + Content */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  {s.icon}
                  <h3 className="font-bold text-forest text-base">{s.title}</h3>
                </div>
                <p className="text-forest/90 text-sm leading-relaxed">{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
