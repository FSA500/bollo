import { Metadata } from 'next'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Mascot from '../components/Mascot'
import PageHero from '../components/PageHero'
import CtaSection from '../sections/CtaSection'

export const metadata: Metadata = {
  title: 'Cases | Bollo',
  description: 'Se hvordan Bollo har hjulpet danske virksomheder med at forbedre deres omdømme, få flere anmeldelser og øge synligheden på Google Maps og Trustpilot.',
}

const UtensilsIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-mint-dark)' }}>
    <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/>
    <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>
  </svg>
)
const CrossIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-mint-dark)' }}>
    <rect width="18" height="18" x="3" y="3" rx="2"/><path d="M12 8v8M8 12h8"/>
  </svg>
)
const CartIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-mint-dark)' }}>
    <circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/>
    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
  </svg>
)
const WrenchIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-mint-dark)' }}>
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
  </svg>
)

const cases = [
  {
    category: 'Restauranter & hoteller',
    icon: <UtensilsIcon />,
    name: 'Restaurant i Aarhus',
    before: { stars: 3.8, reviews: 42, mapRank: 'Side 2' },
    after: { stars: 4.7, reviews: 203, mapRank: 'Top 3' },
    duration: '6 måneder',
    quote: 'Vi mærkede forskel allerede efter første måned. Flere gæster nævner, at de fandt os via Google anmeldelserne.',
    results: ['4,7 i gennemsnitsscore', '203 anmeldelser', 'Top 3 på Google Maps', '28% flere bookinger'],
  },
  {
    category: 'Sundhed & klinikker',
    icon: <CrossIcon />,
    name: 'Tandlægeklinik i København',
    before: { stars: 3.6, reviews: 18, mapRank: 'Side 3' },
    after: { stars: 4.9, reviews: 147, mapRank: 'Top 5' },
    duration: '9 måneder',
    quote: 'Vores patienter siger nu aktivt, at de valgte os på grund af vores gode anmeldelser. Noget vi aldrig oplevede før.',
    results: ['4,9 i gennemsnitsscore', '147 anmeldelser', 'Top 5 på Google Maps', 'Fuld kalender 3 uger frem'],
  },
  {
    category: 'E-commerce',
    icon: <CartIcon />,
    name: 'Online butik — boligindretning',
    before: { stars: 4.0, reviews: 89, mapRank: '—' },
    after: { stars: 4.7, reviews: 642, mapRank: '—' },
    duration: '12 måneder',
    quote: 'Trustpilot-stjernerne vises nu i Google Shopping. Vores CTR er steget med 34% og konverteringsraten ligeså.',
    results: ['642 Trustpilot-anmeldelser', 'TrustScore 4,7', '+34% CTR i Google Shopping', '+22% konverteringsrate'],
  },
  {
    category: 'Lokale servicevirksomheder',
    icon: <WrenchIcon />,
    name: 'VVS-firma Nordjylland',
    before: { stars: 4.1, reviews: 11, mapRank: 'Side 2' },
    after: { stars: 4.8, reviews: 93, mapRank: 'Top 3' },
    duration: '5 måneder',
    quote: 'Inden Bollo fik vi en ny anmeldelse en gang i måneden. Nu får vi 8–10. Og vi svarer nu professionelt på dem alle.',
    results: ['4,8 i gennemsnitsscore', '93 anmeldelser', 'Top 3 lokal søgning', '~8 nye anmeldelser/md.'],
  },
]

const overallStats = [
  { value: '4,7★', label: 'Gennemsnitlig score hos Bollo-kunder' },
  { value: '6x', label: 'Gennemsnitlig stigning i antal anmeldelser' },
  { value: '94%', label: 'Af kunder oplever forbedret Google-placering' },
]

export default function CasesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          tag="Cases & Resultater"
          title="Resultater der taler for sig selv"
          titleAccentWord="Resultater"
          subtitle="Vi måler succes i stjerner, placeringer og vækst. Se hvad Bollo har hjulpet danske virksomheder med at opnå."
          ctaText="Book en demo"
          secondaryCta={{ text: 'Se cases →', href: '#cases' }}
        />

        {/* Overall stats */}
        <section className="py-20 px-6" style={{ background: 'var(--color-bg)' }}>
          <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
            <div className="text-center mb-14">
              <span className="section-tag">Vores track record</span>
              <h2 className="section-h2 mt-3">Hvad du kan forvente</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              {overallStats.map((s, i) => (
                <div key={i} className="bollo-card">
                  <div
                    className="font-extrabold mb-2"
                    style={{ fontFamily: 'var(--font-display)', color: 'var(--color-mint)', fontSize: '3rem' }}
                  >
                    {s.value}
                  </div>
                  <div style={{ color: 'var(--color-text-soft)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)' }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case studies */}
        <section id="cases" className="py-20 px-6" style={{ background: 'var(--color-surface)' }}>
          <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
            <div className="text-center mb-14">
              <span className="section-tag">Kundecases</span>
              <h2 className="section-h2 mt-3">Fra middelmådig til markedsleder</h2>
              <p className="section-sub mx-auto">
                Alle cases er anonymiserede af hensyn til vores kunder, men tallene er reelle.
              </p>
            </div>
            <div className="flex flex-col gap-8">
              {cases.map((c, i) => (
                <div
                  key={i}
                  className="rounded-xl overflow-hidden"
                  style={{ border: '1px solid var(--color-border-mint)', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}
                >
                  {/* Header */}
                  <div
                    className="px-8 py-5 flex items-center gap-4"
                    style={{ background: 'var(--color-mint-light)', borderBottom: '1px solid var(--color-border-mint)' }}
                  >
                    {c.icon}
                    <div>
                      <div
                        className="font-bold"
                        style={{ fontFamily: 'var(--font-display)', color: 'var(--color-forest)', fontSize: 'var(--text-lg)' }}
                      >
                        {c.name}
                      </div>
                      <div style={{ color: 'var(--color-text-soft)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)' }}>
                        {c.category} · {c.duration} med Bollo
                      </div>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      {/* Before / After */}
                      <div className="lg:col-span-2">
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div
                            className="rounded-xl p-5"
                            style={{ background: '#fff3f3', border: '1px solid rgba(255,107,107,0.15)' }}
                          >
                            <div
                              className="font-bold mb-3"
                              style={{ fontFamily: 'var(--font-body)', color: '#ff6b6b', fontSize: 'var(--text-xs)', textTransform: 'uppercase', letterSpacing: '0.08em' }}
                            >
                              Før Bollo
                            </div>
                            <div style={{ color: 'var(--color-text)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)' }}>
                              <div>{c.before.stars} ★ score</div>
                              <div>{c.before.reviews} anmeldelser</div>
                              <div>Placering: {c.before.mapRank}</div>
                            </div>
                          </div>
                          <div
                            className="rounded-xl p-5"
                            style={{ background: 'var(--color-mint-light)', border: '1px solid rgba(40,231,196,0.3)' }}
                          >
                            <div
                              className="font-bold mb-3"
                              style={{ fontFamily: 'var(--font-body)', color: 'var(--color-mint-dark)', fontSize: 'var(--text-xs)', textTransform: 'uppercase', letterSpacing: '0.08em' }}
                            >
                              Efter Bollo
                            </div>
                            <div style={{ color: 'var(--color-forest)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', fontWeight: 600 }}>
                              <div>{c.after.stars} ★ score</div>
                              <div>{c.after.reviews} anmeldelser</div>
                              <div>Placering: {c.after.mapRank}</div>
                            </div>
                          </div>
                        </div>
                        <blockquote
                          className="italic"
                          style={{ color: 'var(--color-text)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', borderLeft: '3px solid var(--color-mint)', paddingLeft: '16px' }}
                        >
                          &ldquo;{c.quote}&rdquo;
                        </blockquote>
                      </div>

                      {/* Results */}
                      <div>
                        <div
                          className="font-bold mb-3"
                          style={{ fontFamily: 'var(--font-body)', color: 'var(--color-forest)', fontSize: 'var(--text-sm)', textTransform: 'uppercase', letterSpacing: '0.06em' }}
                        >
                          Nøgleresultater
                        </div>
                        <ul className="flex flex-col gap-2">
                          {c.results.map((r, j) => (
                            <li
                              key={j}
                              className="flex items-center gap-2"
                              style={{ color: 'var(--color-text)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)' }}
                            >
                              <span style={{ color: 'var(--color-mint)', fontWeight: 700 }}>✓</span>
                              {r}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 section-dark text-center">
          <div style={{ maxWidth: '640px', margin: '0 auto' }}>
            <span className="section-tag-dark">Din tur</span>
            <h2 className="section-h2-dark mt-3 mb-4">
              Klar til at se lignende resultater?
            </h2>
            <p className="mb-8" style={{ color: 'var(--color-text-muted-dark)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-md)' }}>
              Book en gratis gennemgang af din nuværende anmeldelsesstatus, og hør hvad vi konkret kan gøre for dig.
            </p>
            <a href="/kontakt" className="btn-primary cta-trigger">
              Book en gratis gennemgang
            </a>
          </div>
        </section>

        <CtaSection />
      </main>
      <Footer />
      <Mascot />
    </>
  )
}
