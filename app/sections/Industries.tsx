const industries = [
  {
    icon: (
      <svg className="w-8 h-8 text-forest" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
    label: 'Lokale servicevirksomheder',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-forest" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/>
        <path d="M7 2v20"/>
        <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7"/>
      </svg>
    ),
    label: 'Restauranter & hoteller',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-forest" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
        <path d="M12 8v8"/>
        <path d="M8 12h8"/>
      </svg>
    ),
    label: 'Klinikker & sundhed',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-forest" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="2" ry="2"/>
        <path d="M9 22v-4h6v4"/>
        <path d="M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01"/>
      </svg>
    ),
    label: 'Kæder med flere lokationer',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-forest" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="21" r="1"/>
        <circle cx="20" cy="21" r="1"/>
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
      </svg>
    ),
    label: 'E-commerce virksomheder',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-forest" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
      </svg>
    ),
    label: 'B2B virksomheder',
  },
]

export default function Industries() {
  return (
    <section id="brancher" className="bg-bollo-bg-gray py-20 px-6 md:px-12">
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
              {ind.icon}
              <span className="text-xs font-semibold text-forest leading-tight">{ind.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
