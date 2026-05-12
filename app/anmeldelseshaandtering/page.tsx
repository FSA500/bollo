import { Metadata } from 'next'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Mascot from '../components/Mascot'
import PageHero from '../components/PageHero'
import CtaSection from '../sections/CtaSection'

export const metadata: Metadata = {
  title: 'Anmeldelseshåndtering | Bollo',
  description: 'Professionel håndtering af anmeldelser på Google, Trustpilot og TripAdvisor. Bollo svarer for dig og sikrer, at hver eneste anmeldelse styrker dit omdømme.',
}

const EyeIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>
  </svg>
)
const EditIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/>
  </svg>
)
const TargetIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
  </svg>
)
const TrendingUpIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
  </svg>
)
const BarChartIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" x2="18" y1="20" y2="10"/><line x1="12" x2="12" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="14"/>
  </svg>
)

const steps = [
  { num: '01', icon: <EyeIcon />, title: 'Vi overvåger', desc: 'Alle anmeldelser på tværs af platforme monitoreres døgnet rundt. Du går aldrig glip af en anmeldelse.' },
  { num: '02', icon: <EditIcon />, title: 'Vi svarer professionelt', desc: 'Hvert svar skrives i din virksomheds tone of voice — professionelt, varmt og i overensstemmelse med dit brand.' },
  { num: '03', icon: <TargetIcon />, title: 'Vi håndterer de negative', desc: 'Negative anmeldelser mødes konstruktivt og i mange tilfælde vender vi dem til en positiv oplevelse.' },
  { num: '04', icon: <TrendingUpIcon />, title: 'Vi indhenter flere', desc: 'Via automatiserede flows kontakter vi tilfredse kunder og hjælper dem med at dele deres oplevelse.' },
  { num: '05', icon: <BarChartIcon />, title: 'Vi rapporterer', desc: 'Månedlige rapporter med indsigt i din omdømmestatus, tendenser og konkrete anbefalinger.' },
]

const examples = [
  {
    type: 'positive',
    platform: 'Google Maps',
    stars: 5,
    reviewer: 'Mette H.',
    review: 'Fantastisk service! De løste mit problem samme dag og var utrolig venlige. Kan varmt anbefales!',
    response: 'Kære Mette — tusind tak for de søde ord! Det glæder os enormt at høre, at vi kunne hjælpe dig hurtigt og effektivt. Vi ser frem til at hjælpe dig igen.',
  },
  {
    type: 'negative',
    platform: 'Trustpilot',
    stars: 2,
    reviewer: 'Thomas P.',
    review: 'Ventede 3 dage på svar på min henvendelse. Skuffende service.',
    response: 'Kære Thomas — vi beklager oplevelsen. Det er ikke den standard vi arbejder efter, og vi har allerede taget fat i din sag. Vi kontakter dig direkte i dag for at rette op på situationen.',
  },
]

export default function AnmeldelseshaandteringPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          tag="Anmeldelseshåndtering"
          title="Hvert svar er en mulighed — vi sikrer, at du griber den"
          titleAccentWord="mulighed"
          subtitle="Bollo overvåger, svarer og følger op på alle dine anmeldelser. Du slipper for besværet — og dine kunder mærker forskellen."
          ctaText="Få en gratis gennemgang"
          secondaryCta={{ text: 'Se eksempler →', href: '#examples' }}
        />

        {/* Process steps */}
        <section className="py-20 px-6" style={{ background: 'var(--color-bg)' }}>
          <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
            <div className="text-center mb-14">
              <span className="section-tag">Vores proces</span>
              <h2 className="section-h2 mt-3">Sådan håndterer vi dine anmeldelser</h2>
              <p className="section-sub mx-auto">
                En komplet og professionel proces fra overvågning til rapport — du behøver ikke løfte en finger.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              {steps.map((s, i) => (
                <div key={i} className="bollo-card flex items-start gap-6">
                  <div
                    className="flex-shrink-0 font-extrabold"
                    style={{
                      fontFamily: 'var(--font-display)',
                      color: 'var(--color-mint)',
                      fontSize: '2rem',
                      lineHeight: 1,
                      minWidth: '3rem',
                    }}
                  >
                    {s.num}
                  </div>
                  <div className="card-icon flex-shrink-0">{s.icon}</div>
                  <div>
                    <h3
                      className="font-bold mb-1"
                      style={{ fontFamily: 'var(--font-body)', color: 'var(--color-forest)', fontSize: 'var(--text-md)' }}
                    >
                      {s.title}
                    </h3>
                    <p style={{ color: 'var(--color-text-soft)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)' }}>
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Response examples */}
        <section id="examples" className="py-20 px-6" style={{ background: 'var(--color-surface)' }}>
          <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
            <div className="text-center mb-14">
              <span className="section-tag">Eksempler</span>
              <h2 className="section-h2 mt-3">Sådan lyder et professionelt svar</h2>
              <p className="section-sub mx-auto">
                Vi tilpasser tonen til dit brand og til situationen — altid professionelt, aldrig generisk.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {examples.map((ex, i) => (
                <div
                  key={i}
                  className="rounded-xl overflow-hidden"
                  style={{ border: '1px solid var(--color-border-mint)', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}
                >
                  <div
                    className="px-6 py-4 flex items-center justify-between"
                    style={{
                      background: ex.type === 'positive' ? 'var(--color-mint-light)' : '#fff3f3',
                      borderBottom: '1px solid var(--color-border-mint)',
                    }}
                  >
                    <div>
                      <span
                        className="font-bold"
                        style={{ fontFamily: 'var(--font-body)', color: 'var(--color-forest)', fontSize: 'var(--text-sm)' }}
                      >
                        {ex.reviewer}
                      </span>
                      <span
                        className="ml-2"
                        style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-soft)', fontSize: 'var(--text-xs)' }}
                      >
                        via {ex.platform}
                      </span>
                    </div>
                    <div style={{ color: '#f5a623', fontSize: 'var(--text-sm)' }}>
                      {'★'.repeat(ex.stars)}{'☆'.repeat(5 - ex.stars)}
                    </div>
                  </div>
                  <div className="px-6 pt-5 pb-4" style={{ background: 'var(--color-surface)' }}>
                    <p
                      className="italic mb-4"
                      style={{ color: 'var(--color-text)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)' }}
                    >
                      &ldquo;{ex.review}&rdquo;
                    </p>
                    <div
                      className="rounded-lg p-4"
                      style={{ background: 'var(--color-mint-light)', borderLeft: '3px solid var(--color-mint)' }}
                    >
                      <div
                        className="font-semibold mb-1"
                        style={{ fontFamily: 'var(--font-body)', color: 'var(--color-mint-dark)', fontSize: 'var(--text-xs)', textTransform: 'uppercase', letterSpacing: '0.05em' }}
                      >
                        Bollos svar
                      </div>
                      <p style={{ color: 'var(--color-forest)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)' }}>
                        {ex.response}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why it matters */}
        <section className="py-20 px-6 section-dark">
          <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }} className="text-center">
            <span className="section-tag-dark">Vidste du det?</span>
            <h2 className="section-h2-dark mt-3 mb-12">Ubesvarede anmeldelser er en tabt mulighed</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                { stat: '89%', label: 'af kunder læser virksomhedens svar på anmeldelser' },
                { stat: '45%', label: 'er mere tilbøjelige til at besøge virksomheder der svarer' },
                { stat: '1 af 3', label: 'kunder sletter en negativ anmeldelse hvis virksomheden håndterer det godt' },
              ].map((item, i) => (
                <div key={i}>
                  <div
                    className="font-extrabold mb-2"
                    style={{ fontFamily: 'var(--font-display)', color: 'var(--color-mint)', fontSize: '2.8rem' }}
                  >
                    {item.stat}
                  </div>
                  <div style={{ color: 'var(--color-text-muted-dark)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)' }}>
                    {item.label}
                  </div>
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
