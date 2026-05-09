const points = [
  {
    icon: '⭐',
    title: 'Kunder vælger virksomheder med stærke anmeldelser',
    text: 'Størstedelen af kunder læser anmeldelser, før de kontakter en virksomhed. Stærke anmeldelser er din bedste sælger.',
  },
  {
    icon: '🔇',
    title: 'Ubesvarede anmeldelser skader tilliden',
    text: 'Ingen svar på anmeldelser sender et signal om, at virksomheden ikke lytter — det koster nye kunder.',
  },
  {
    icon: '📉',
    title: 'Negative anmeldelser uden respons koster kunder',
    text: 'En negativ anmeldelse uden professionelt svar kan skræmme op til 60% af potentielle kunder væk.',
  },
  {
    icon: '📈',
    title: 'Aktive anmeldelsesprofiler styrker synligheden',
    text: 'Hyppige og nylige anmeldelser signalerer til Google og AI-systemer, at din virksomhed er aktiv og troværdig.',
  },
  {
    icon: '🤖',
    title: 'AI-søgninger bruger dit omdømme som anbefaling',
    text: 'I 2026 anbefaler AI-værktøjer virksomheder baseret på online troværdighed. Dårligt omdømme = du bliver ikke fundet.',
  },
]

export default function WhyReviews() {
  return (
    <section id="ydelser" className="bg-bollo-surface-gray py-20 px-6 md:px-12">
      <div className="max-w-[1100px] mx-auto">

        <div className="section-tag">Hvorfor anmeldelser</div>
        <h2 className="section-h2">Anmeldelser er ikke bare stjerner —<br />de er tillid, synlighed og salg</h2>
        <p className="section-sub">
          De fleste virksomheder ved godt, at anmeldelser er vigtige.
          Men de færreste har tid, systemer eller ressourcer til at håndtere dem ordentligt.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {points.map((p, i) => (
            <div key={i} className="bollo-card">
              <div className="card-icon">{p.icon}</div>
              <h3 className="font-bold text-forest text-base mb-2">{p.title}</h3>
              <p className="text-bollo-text-soft text-sm leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
