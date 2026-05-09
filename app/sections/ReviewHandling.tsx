const features = [
  { icon: '✍️', text: 'Vi svarer på alle anmeldelser — positive, neutrale og negative' },
  { icon: '🎯', text: 'Vi tilpasser tonen til dit brands ønskede tone of voice' },
  { icon: '⚡', text: 'Vi sikrer hurtige og professionelle svar hver gang' },
  { icon: '🔄', text: 'Vi skaber ensartet og troværdig kommunikation udadtil' },
  { icon: '📊', text: 'Vi leverer månedlige rapporter med indsigter og tendenser' },
]

export default function ReviewHandling() {
  return (
    <section className="bg-bollo-surface-gray py-20 px-6 md:px-12">
      <div className="max-w-[1100px] mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div>
            <div className="section-tag">Vi svarer for dig</div>
            <h2 className="section-h2">
              Et professionelt team<br />bag hvert eneste svar
            </h2>
            <p className="section-sub">
              Bollo er ikke bare software — vi er et dedikeret team, der håndterer
              din kommunikation med kunderne professionelt og konsekvent, hver dag.
            </p>
            <ul className="flex flex-col gap-2">
              {features.map((f, i) => (
                <li key={i} className="flex items-start gap-3 bg-bollo-bg-gray rounded-xl px-4 py-3">
                  <span className="text-xl flex-shrink-0 mt-0.5">{f.icon}</span>
                  <span className="text-bollo-text-soft text-sm leading-relaxed">{f.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — visual card mockup */}
          <div className="flex flex-col gap-4">
            {/* Positive review example */}
            <div className="bollo-card">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-full bg-mint-light flex items-center justify-center text-sm font-bold text-forest">MJ</div>
                <div>
                  <div className="text-xs font-bold text-forest">Mette Jensen</div>
                  <div className="text-xs text-bollo-text-soft">Google Maps · ⭐⭐⭐⭐⭐</div>
                </div>
              </div>
              <p className="text-xs text-bollo-text-soft mb-3 leading-relaxed">
                "Fantastisk service og super hurtig levering. Vil bestemt anbefale!"
              </p>
              <div className="bg-mint-light rounded-lg p-3 border-l-2 border-mint">
                <div className="text-xs font-bold text-forest mb-1">Svar fra virksomheden · Bollo</div>
                <p className="text-xs text-bollo-text-soft leading-relaxed">
                  "Mange tak, Mette! Det glæder os meget at høre. Vi sætter stor pris på din anmeldelse og ser frem til at hjælpe dig igen! 😊"
                </p>
              </div>
            </div>

            {/* Negative review example */}
            <div className="bollo-card">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-full bg-coral/10 flex items-center justify-center text-sm font-bold text-coral">TP</div>
                <div>
                  <div className="text-xs font-bold text-forest">Thomas P.</div>
                  <div className="text-xs text-bollo-text-soft">Trustpilot · ⭐⭐</div>
                </div>
              </div>
              <p className="text-xs text-bollo-text-soft mb-3 leading-relaxed">
                "Oplevede forsinkelse i leveringen og ingen svar på min henvendelse."
              </p>
              <div className="bg-orange-50 rounded-lg p-3 border-l-2 border-coral">
                <div className="text-xs font-bold text-forest mb-1">Svar fra virksomheden · Bollo</div>
                <p className="text-xs text-bollo-text-soft leading-relaxed">
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
