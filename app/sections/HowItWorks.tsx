const steps = [
  {
    num: '01',
    icon: '⭐',
    title: 'Flere anmeldelser fra eksisterende kunder',
    text: 'Vi hjælper dig med at indsamle anmeldelser fra dine eksisterende kunder på en professionel og struktureret måde — så det er nemt for tilfredse kunder at dele deres oplevelse.',
  },
  {
    num: '02',
    icon: '🛡️',
    title: 'Vi identificerer utilfredse kunder i tide',
    text: 'Vores platform gør det muligt at tage direkte kontakt til utilfredse kunder, før de skriver en negativ anmeldelse offentligt. Det skaber mulighed for dialog og problemløsning.',
  },
  {
    num: '03',
    icon: '💬',
    title: 'Dialog og værdifuld feedback',
    text: 'Vi skaber dialog med dine kunder og indsamler konkret feedback, som du kan bruge til at forbedre din forretning. Anmeldelser bliver et strategisk udviklingsværktøj.',
  },
  {
    num: '04',
    icon: '✍️',
    title: 'Professionelle svar på alle anmeldelser',
    text: 'Vi svarer professionelt på alle anmeldelser på Trustpilot, Google Maps og TripAdvisor — positive, neutrale og negative — tilpasset dit brands tone of voice.',
  },
  {
    num: '05',
    icon: '🤖',
    title: 'Øget synlighed i Google Maps og AI-søgninger',
    text: 'Vores kunder ligger typisk i top 5 på relevante Google Maps- og AI-søgninger inden for 6 måneder, fordi vi arbejder målrettet med anmeldelser, synlighed og digital troværdighed.',
  },
]

export default function HowItWorks() {
  return (
    <section id="hvordan" className="bg-mint-light py-20 px-6 md:px-12">
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
                  <span className="text-xl">{s.icon}</span>
                  <h3 className="font-bold text-forest text-base">{s.title}</h3>
                </div>
                <p className="text-bollo-text-soft text-sm leading-relaxed">{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
