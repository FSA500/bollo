import { Metadata } from 'next'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Mascot from '../components/Mascot'
import PageHero from '../components/PageHero'
import CtaSection from '../sections/CtaSection'

export const metadata: Metadata = {
  title: 'Om Bollo | Bollo',
  description: 'Lær Bollo at kende. Vi er et dansk bureau specialiseret i reputation management — og vi er passionerede om at hjælpe virksomheder med at vokse gennem et stærkt omdømme.',
}

const values = [
  {
    icon: '🎯',
    title: 'Resultater over processer',
    desc: 'Vi måler vores succes på dine resultater — ikke på aktiviteter. Hvis din score ikke stiger, er vi ikke tilfredse.',
  },
  {
    icon: '🤝',
    title: 'Ærlighed altid',
    desc: 'Vi siger det som det er. Hvis vi ser et problem, siger vi det. Og vi anbefaler aldrig noget, du ikke har brug for.',
  },
  {
    icon: '⚡',
    title: 'Hastighed er service',
    desc: 'Anmeldelser kræver hurtige svar. Vores processer er bygget til at agere hurtigt — altid.',
  },
  {
    icon: '🧠',
    title: 'Vi forstår din branche',
    desc: 'Vi bruger tid på at forstå, hvem du er og hvem dine kunder er, inden vi skriver et eneste svar.',
  },
]

const timeline = [
  { year: '2022', event: 'Bollo grundlægges i Danmark med fokus på lokal anmeldelseshåndtering' },
  { year: '2023', event: 'Vi udvider til Trustpilot og TripAdvisor og lancerer vores første automatiserede flows' },
  { year: '2024', event: 'AI-synlighed tilføjes som kerneydelse — vi ser skifte i kundernes søgeadfærd' },
  { year: '2025', event: 'Over 100 aktive kunder og partnerships med ledende brancheforeninger' },
  { year: '2026', event: 'Lancering af ny platform med realtids-dashboard og AI-optimering' },
]

export default function OmBolloPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          tag="Om Bollo"
          title="Vi er obsesset med ét: dit omdømme"
          titleAccentWord="omdømme"
          subtitle="Bollo er et dansk bureau grundlagt med ét formål — at give virksomheder de same muligheder for at styre sit online omdømme som de store brands. Professionelt, systematisk og uden besvær."
          ctaText="Kontakt os"
          ctaHref="/kontakt"
        />

        {/* Story */}
        <section className="py-20 px-6" style={{ background: 'var(--color-bg)' }}>
          <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="section-tag">Vores historie</span>
                <h2 className="section-h2 mt-3 mb-6">Startet af frustrerede forbrugere — bygget til erhvervslivet</h2>
                <p style={{ color: 'var(--color-text)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', lineHeight: 1.8, marginBottom: '16px' }}>
                  Bollo opstod, da vi selv som kunder oplevede, at fantastiske virksomheder lå i bund på Google Maps — ikke fordi de var dårlige, men fordi de aldrig havde taget hånd om deres online omdømme.
                </p>
                <p style={{ color: 'var(--color-text)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', lineHeight: 1.8, marginBottom: '16px' }}>
                  Det er uretfærdigt. En dårlig Google-score bør ikke afspejle en dårlig virksomhed — men det gør det, hvis du ikke aktivt arbejder med det.
                </p>
                <p style={{ color: 'var(--color-text)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', lineHeight: 1.8 }}>
                  Derfor byggede vi Bollo: en komplet løsning der giver alle virksomheder — store som små — mulighed for at præsentere sig bedst muligt online.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                {[
                  { icon: '🏢', text: 'Dansk bureau med fokus på det danske marked' },
                  { icon: '👥', text: 'Dedikerede specialister med branchekendskab' },
                  { icon: '🔒', text: 'GDPR-compliant og datasikker håndtering' },
                  { icon: '📞', text: 'Personlig kontaktperson til din konto' },
                ].map((item, i) => (
                  <div key={i} className="bollo-card flex items-center gap-4">
                    <div className="card-icon flex-shrink-0">{item.icon}</div>
                    <span style={{ color: 'var(--color-text)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)' }}>
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 px-6" style={{ background: 'var(--color-surface)' }}>
          <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
            <div className="text-center mb-14">
              <span className="section-tag">Vores værdier</span>
              <h2 className="section-h2 mt-3">Det vi tror på</h2>
              <p className="section-sub mx-auto">
                Fire principper der guider alt hvad vi gør — og alt hvad vi siger til vores kunder.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((v, i) => (
                <div key={i} className="bollo-card flex gap-5">
                  <div className="card-icon flex-shrink-0">{v.icon}</div>
                  <div>
                    <h3
                      className="font-bold mb-2"
                      style={{ fontFamily: 'var(--font-body)', color: 'var(--color-forest)', fontSize: 'var(--text-md)' }}
                    >
                      {v.title}
                    </h3>
                    <p style={{ color: 'var(--color-text-soft)', fontSize: 'var(--text-sm)', fontFamily: 'var(--font-body)' }}>
                      {v.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 px-6 section-dark">
          <div style={{ maxWidth: '760px', margin: '0 auto' }}>
            <div className="text-center mb-14">
              <span className="section-tag-dark">Vores rejse</span>
              <h2 className="section-h2-dark mt-3">Fra idé til markedsleder</h2>
            </div>
            <div className="flex flex-col gap-0">
              {timeline.map((t, i) => (
                <div key={i} className="flex gap-6 pb-10 relative">
                  {/* Line */}
                  {i < timeline.length - 1 && (
                    <div
                      style={{
                        position: 'absolute',
                        left: '27px',
                        top: '44px',
                        bottom: 0,
                        width: '2px',
                        background: 'rgba(109,203,160,0.25)',
                      }}
                    />
                  )}
                  {/* Dot */}
                  <div
                    className="flex-shrink-0 flex items-center justify-center rounded-full font-extrabold"
                    style={{
                      width: '54px',
                      height: '54px',
                      background: 'rgba(109,203,160,0.15)',
                      border: '2px solid rgba(109,203,160,0.4)',
                      fontFamily: 'var(--font-display)',
                      color: 'var(--color-mint)',
                      fontSize: 'var(--text-xs)',
                    }}
                  >
                    {t.year}
                  </div>
                  <div className="pt-3">
                    <p style={{ color: 'var(--color-text-on-dark)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', lineHeight: 1.7 }}>
                      {t.event}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20 px-6" style={{ background: 'var(--color-bg)' }}>
          <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}>
            <span className="section-tag">Mission</span>
            <h2 className="section-h2 mt-3 mb-6">Vores mission er simpel</h2>
            <p
              className="font-bold"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--color-forest)', fontSize: 'clamp(1.4rem, 3vw, 2rem)', lineHeight: 1.5, marginBottom: '24px' }}
            >
              &ldquo;At give enhver dansk virksomhed et omdømme der afspejler den kvalitet de leverer — online som offline.&rdquo;
            </p>
            <a href="/kontakt" className="btn-primary cta-trigger">
              Lær os bedre at kende
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
