const points = [
  {
    icon: (
      <svg className="w-5 h-5 text-forest" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    title: 'Kunder vælger virksomheder med stærke anmeldelser',
    text: 'Størstedelen af kunder læser anmeldelser, før de kontakter en virksomhed. Stærke anmeldelser er din bedste sælger.',
  },
  {
    icon: (
      <svg className="w-5 h-5 text-forest" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
        <line x1="23" y1="9" x2="17" y2="15"/>
        <line x1="17" y1="9" x2="23" y2="15"/>
      </svg>
    ),
    title: 'Ubesvarede anmeldelser skader tilliden',
    text: 'Ingen svar på anmeldelser sender et signal om, at virksomheden ikke lytter — det koster nye kunder.',
  },
  {
    icon: (
      <svg className="w-5 h-5 text-forest" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/>
        <polyline points="17 18 23 18 23 12"/>
      </svg>
    ),
    title: 'Negative anmeldelser uden respons koster kunder',
    text: 'En negativ anmeldelse uden professionelt svar kan skræmme op til 60% af potentielle kunder væk.',
  },
  {
    icon: (
      <svg className="w-5 h-5 text-forest" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
        <polyline points="17 6 23 6 23 12"/>
      </svg>
    ),
    title: 'Aktive anmeldelsesprofiler styrker synligheden',
    text: 'Hyppige og nylige anmeldelser signalerer til Google og AI-systemer, at din virksomhed er aktiv og troværdig.',
  },
  {
    icon: (
      <svg className="w-5 h-5 text-forest" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
