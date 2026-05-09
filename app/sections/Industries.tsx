const industries = [
  { icon: '🔧', label: 'Lokale servicevirksomheder' },
  { icon: '🍽️', label: 'Restauranter & hoteller' },
  { icon: '🏥', label: 'Klinikker & sundhed' },
  { icon: '🏢', label: 'Kæder med flere lokationer' },
  { icon: '🛒', label: 'E-commerce virksomheder' },
  { icon: '💼', label: 'B2B virksomheder' },
]

export default function Industries() {
  return (
    <section id="brancher" className="bg-bollo-bg py-20 px-6 md:px-12">
      <div className="max-w-[1100px] mx-auto text-center">

        <div className="section-tag mx-auto" style={{ display: 'inline-block' }}>Brancher</div>
        <h2 className="section-h2">Vi hjælper både små og store virksomheder</h2>
        <p className="section-sub mx-auto text-center">
          Uanset om du driver en lokal butik eller en kæde med mange lokationer,
          er Bollo skaleret til at passe din virksomhed.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {industries.map((ind, i) => (
            <div
              key={i}
              className="bollo-card text-center flex flex-col items-center gap-3 py-6"
            >
              <span className="text-3xl">{ind.icon}</span>
              <span className="text-xs font-semibold text-forest leading-tight">{ind.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
