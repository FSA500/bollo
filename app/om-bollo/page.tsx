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

const TargetIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
  </svg>
)
const UsersIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
)
const ZapIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
)
const LightbulbIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/>
    <path d="M9 18h6"/><path d="M10 22h4"/>
  </svg>
)
const BuildingIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="16" height="20" x="4" y="2" rx="2" ry="2"/>
    <path d="M9 22V12h6v10"/><path d="M8 7h.01M12 7h.01M16 7h.01M8 11h.01M12 11h.01M16 11h.01"/>
  </svg>
)
const LockIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
)
const PhoneIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.64 2.83l3-.01a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.29 6.29l.95-.94a2 2 0 0 1 2.1-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 17.92z"/>
  </svg>
)

const values = [
  {
    icon: <TargetIcon />,
    title: 'Resultater over processer',
    desc: 'Vi måler vores succes på dine resultater — ikke på aktiviteter. Hvis din score ikke stiger, er vi ikke tilfredse.',
  },
  {
    icon: <UsersIcon />,
    title: 'Ærlighed altid',
    desc: 'Vi siger det som det er. Hvis vi ser et problem, siger vi det. Og vi anbefaler aldrig noget, du ikke har brug for.',
  },
  {
    icon: <ZapIcon />,
    title: 'Hastighed er service',
    desc: 'Anmeldelser kræver hurtige svar. Vores processer er bygget til at agere hurtigt — altid.',
  },
  {
    icon: <LightbulbIcon />,
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

const bullets = [
  { icon: <BuildingIcon />, text: 'Dansk bureau med fokus på det danske marked' },
  { icon: <UsersIcon />, text: 'Dedikerede specialister med branchekendskab' },
  { icon: <LockIcon />, text: 'GDPR-compliant og datasikker håndtering' },
  { icon: <PhoneIcon />, text: 'Personlig kontaktperson til din konto' },
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
                {bullets.map((item, i) => (
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
