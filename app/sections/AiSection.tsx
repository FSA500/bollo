export default function AiSection() {
  return (
    <section id="ai" className="section-dark py-20 px-6 md:px-12">
      <div className="relative z-10 max-w-[1100px] mx-auto">

        <div className="section-tag-dark">AI-søgninger & fremtidig synlighed</div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left — text */}
          <div>
            <h2 className="section-h2-dark mb-6">
              I 2026 søger dine kunder<br />
              via <em className="not-italic text-mint">AI-værktøjer</em>
            </h2>
            <p className="text-white/88 text-base leading-relaxed mb-6">
              Flere og flere kunder stiller spørgsmål direkte til AI-assistenter i stedet
              for at bruge klassiske Google-søgninger. Disse AI-systemer anbefaler
              virksomheder baseret på online omdømme, anmeldelser og digital troværdighed.
            </p>
            <p className="text-white/88 text-base leading-relaxed mb-8">
              Bollo hjælper dig med at opbygge det digitale fundament, der sikrer, at
              din virksomhed bliver anbefalet og fundet — både i dag og i fremtiden.
            </p>
            <a href="#kontakt" className="btn-primary cta-trigger">
              Bliv synlig i AI-søgninger
            </a>
          </div>

          {/* Right — feature boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                icon: (
                  <svg className="w-6 h-6 text-mint" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"/>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                  </svg>
                ),
                title: 'Google Maps Top 5',
                text: 'Vores kunder opnår typisk top 5 placering inden for 6 måneder.',
              },
              {
                icon: (
                  <svg className="w-6 h-6 text-mint" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
                title: 'AI-anbefalinger',
                text: 'Stærkt omdømme = din virksomhed bliver anbefalet af AI-assistenter.',
              },
              {
                icon: (
                  <svg className="w-6 h-6 text-mint" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                ),
                title: 'Troværdighed online',
                text: 'Aktive og høje anmeldelser signalerer troværdighed til alle platforme.',
              },
              {
                icon: (
                  <svg className="w-6 h-6 text-mint" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                ),
                title: 'Lokal synlighed',
                text: 'Stærkere tilstedeværelse i lokale søgninger for din by og branche.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl p-5 border border-mint/20 bg-white/5"
              >
                <div className="mb-3">{item.icon}</div>
                <h3 className="font-bold text-white text-sm mb-2">{item.title}</h3>
                <p className="text-white/82 text-xs leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
