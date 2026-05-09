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
            <p className="text-white/70 text-base leading-relaxed mb-6">
              Flere og flere kunder stiller spørgsmål direkte til AI-assistenter i stedet
              for at bruge klassiske Google-søgninger. Disse AI-systemer anbefaler
              virksomheder baseret på online omdømme, anmeldelser og digital troværdighed.
            </p>
            <p className="text-white/70 text-base leading-relaxed mb-8">
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
              { icon: '🔍', title: 'Google Maps Top 5', text: 'Vores kunder opnår typisk top 5 placering inden for 6 måneder.' },
              { icon: '🤖', title: 'AI-anbefalinger', text: 'Stærkt omdømme = din virksomhed bliver anbefalet af AI-assistenter.' },
              { icon: '⭐', title: 'Troværdighed online', text: 'Aktive og høje anmeldelser signalerer troværdighed til alle platforme.' },
              { icon: '📍', title: 'Lokal synlighed', text: 'Stærkere tilstedeværelse i lokale søgninger for din by og branche.' },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl p-5 border border-mint/20 bg-white/5"
              >
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-white text-sm mb-2">{item.title}</h3>
                <p className="text-white/60 text-xs leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
