const features = [
  {
    icon: (
      <svg className="w-5 h-5 text-mint flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
      </svg>
    ),
    text: 'Vi svarer på alle anmeldelser — positive, neutrale og negative',
  },
  {
    icon: (
      <svg className="w-5 h-5 text-mint flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <circle cx="12" cy="12" r="6"/>
        <circle cx="12" cy="12" r="2"/>
      </svg>
    ),
    text: 'Vi tilpasser tonen til dit brands ønskede tone of voice',
  },
  {
    icon: (
      <svg className="w-5 h-5 text-mint flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
    text: 'Vi sikrer hurtige og professionelle svar hver gang',
  },
  {
    icon: (
      <svg className="w-5 h-5 text-mint flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 4 23 10 17 10"/>
        <polyline points="1 20 1 14 7 14"/>
        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
      </svg>
    ),
    text: 'Vi skaber ensartet og troværdig kommunikation udadtil',
  },
  {
    icon: (
      <svg className="w-5 h-5 text-mint flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"/>
        <line x1="12" y1="20" x2="12" y2="4"/>
        <line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
    ),
    text: 'Vi leverer månedlige rapporter med indsigter og tendenser',
  },
]

const StarFilled = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="#F5C518" stroke="none">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
)

const StarEmpty = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="#d1d5db" stroke="none">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
)

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
                  {f.icon}
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
                  <div className="text-xs text-bollo-text-soft flex items-center gap-1">
                    <span>Google Maps</span>
                    <span className="flex gap-0.5 ml-1">
                      <StarFilled /><StarFilled /><StarFilled /><StarFilled /><StarFilled />
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-xs text-bollo-text-soft mb-3 leading-relaxed">
                "Fantastisk service og super hurtig levering. Vil bestemt anbefale!"
              </p>
              <div className="bg-mint-light rounded-lg p-3 border-l-2 border-mint">
                <div className="text-xs font-bold text-forest mb-1">Svar fra virksomheden · Bollo</div>
                <p className="text-xs text-bollo-text-soft leading-relaxed">
                  "Mange tak, Mette! Det glæder os meget at høre. Vi sætter stor pris på din anmeldelse og ser frem til at hjælpe dig igen!"
                </p>
              </div>
            </div>

            {/* Negative review example */}
            <div className="bollo-card">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-full bg-coral/10 flex items-center justify-center text-sm font-bold text-coral">TP</div>
                <div>
                  <div className="text-xs font-bold text-forest">Thomas P.</div>
                  <div className="text-xs text-bollo-text-soft flex items-center gap-1">
                    <span>Trustpilot</span>
                    <span className="flex gap-0.5 ml-1">
                      <StarFilled /><StarFilled /><StarEmpty /><StarEmpty /><StarEmpty />
                    </span>
                  </div>
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
