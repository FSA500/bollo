import { Metadata } from 'next'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Mascot from '../components/Mascot'
import PageHero from '../components/PageHero'
import CtaSection from '../sections/CtaSection'

export const metadata: Metadata = {
  title: 'Google Maps Optimering | Bollo',
  description: 'Kom i Top 5 på Google Maps. Bollo optimerer din Google Business profil og styrker din lokale søgesynlighed med professionel anmeldelseshåndtering.',
}

const rankingFactors = [
  { icon: '⭐', title: 'Antal og frekvens af anmeldelser', desc: 'Google belønner virksomheder med mange, nylige og positive anmeldelser med bedre placering.' },
  { icon: '💬', title: 'Svarprocent og responstid', desc: 'Aktive virksomheder der svarer hurtigt signalerer troværdighed til Google-algoritmen.' },
  { icon: '📋', title: 'Profilfuldstændighed', desc: 'En komplet profil med korrekte åbningstider, billeder og beskrivelse rangerer højere.' },
  { icon: '🔄', title: 'Løbende aktivitet', desc: 'Google foretrækker profiler der opdateres regelmæssigt fremfor dem, der er sat og glemt.' },
]

const optimizationItems = [
  { num: '01', title: 'Profiloptimering', desc: 'Vi gennemgår og optimerer din Google Business-profil fra bund til top.' },
  { num: '02', title: 'Anmeldelsesindsamling', desc: 'Vi implementerer et systematisk flow til at indhente anmeldelser fra tilfredse kunder.' },
  { num: '03', title: 'Professionelle svar', desc: 'Alle anmeldelser besvares hurtigt og professionelt — positivt som negativt.' },
  { num: '04', title: 'Keyword-optimering', desc: 'Vi sikrer at de rigtige søgeord fremgår naturligt i svar og profil.' },
  { num: '05', title: 'Løbende vedligeholdelse', desc: 'Din profil holdes aktiv og opdateret, så Google ved du er åben for business.' },
]

export default function GoogleMapsOptimeringPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          tag="Google Maps Optimering"
          title="Kom i Top 5 på Google Maps — og bliv fundet af de rigtige kunder"
          titleAccentWord="Top 5"
          subtitle="93% af alle forbrugere bruger Google Maps til at finde lokale virksomheder. Bollo sikrer, at du er der, når de søger."
          ctaText="Få en gratis analyse"
          secondaryCta={{ text: 'Hvordan det virker →', href: '#process' }}
        />

        {/* Why it matters */}
        <section className="py-20 px-6" style={{ background: 'var(--color-bg)' }}>
          <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="section-tag">Lokal søgning</span>
                <h2 className="section-h2 mt-3 mb-6">Google Maps er den vigtigste lokale salgskanal</h2>
                <p style={{ color: 'var(--color-text)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', lineHeight: 1.8, marginBottom: '16px' }}>
                  Når en ny kunde søger efter &ldquo;VVS Aarhus&rdquo; eller &ldquo;bedste tandlæge tæt på mig&rdquo;, viser Google et kort med 3-5 lokale anbefalinger øverst. Det kalder Google &ldquo;Local Pack&rdquo; — og at komme med her er guld værd.
                </p>
                <p style={{ color: 'var(--color-text)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', lineHeight: 1.8 }}>
                  Virksomheder i Local Pack får op til 70% af alle klik på den side. Dem der ikke er med, bliver simpelthen ikke set.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: '🗺️', stat: '93%', label: 'bruger Google til at finde lokale virksomheder' },
                  { icon: '👆', stat: '70%', label: 'af klik går til Top 3 i Local Pack' },
                  { icon: '📱', stat: '76%', label: 'af lokale søgninger fra mobil fører til besøg' },
                  { icon: '⭐', stat: '4,0+', label: 'stjerner kræver Google for featured snippets' },
                ].map((item, i) => (
                  <div key={i} className="bollo-card text-center">
                    <div style={{ fontSize: '1.8rem', marginBottom: '8px' }}>{item.icon}</div>
                    <div
                      className="font-extrabold"
                      style={{ fontFamily: 'var(--font-display)', color: 'var(--color-mint-dark)', fontSize: 'var(--text-xl)' }}
                    >
                      {item.stat}
                    </div>
                    <div style={{ color: 'var(--color-text-soft)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)', marginTop: '4px' }}>
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Ranking factors */}
        <section className="py-20 px-6" style={{ background: 'var(--color-surface)' }}>
          <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
            <div className="text-center mb-14">
              <span className="section-tag">Rangeringsfaktorer</span>
              <h2 className="section-h2 mt-3">Hvad bestemmer din Google Maps-placering?</h2>
              <p className="section-sub mx-auto">
                Googles algoritme vægter disse faktorer højest. Vi optimerer dem alle.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {rankingFactors.map((f, i) => (
                <div key={i} className="bollo-card flex gap-5">
                  <div className="card-icon flex-shrink-0">{f.icon}</div>
                  <div>
                    <h3
                      className="font-bold mb-2"
                      style={{ fontFamily: 'var(--font-body)', color: 'var(--color-forest)', fontSize: 'var(--text-md)' }}
                    >
                      {f.title}
                    </h3>
                    <p style={{ color: 'var(--color-text-soft)', fontSize: 'var(--text-sm)', fontFamily: 'var(--font-body)' }}>
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="py-20 px-6 section-dark">
          <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
            <div className="text-center mb-14">
              <span className="section-tag-dark">Bollos tilgang</span>
              <h2 className="section-h2-dark mt-3">Vores Google Maps optimeringsstrategi</h2>
              <p className="mb-0 mx-auto" style={{ color: 'var(--color-text-muted-dark)', fontSize: 'var(--text-md)', maxWidth: '560px', fontFamily: 'var(--font-body)' }}>
                En systematisk og dokumenteret tilgang, der er designet til at rykke dig op.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {optimizationItems.map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl p-6"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(109,203,160,0.2)' }}
                >
                  <div
                    className="font-extrabold mb-3"
                    style={{ fontFamily: 'var(--font-display)', color: 'var(--color-mint)', fontSize: 'var(--text-xl)' }}
                  >
                    {item.num}
                  </div>
                  <h3
                    className="font-bold mb-2"
                    style={{ fontFamily: 'var(--font-body)', color: '#fff', fontSize: 'var(--text-md)' }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ color: 'var(--color-text-muted-dark)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)' }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CtaSection />
      </main>
      <Footer />
      <Mascot />
    </>
  )
}
