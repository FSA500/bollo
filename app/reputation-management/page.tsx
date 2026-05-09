import { Metadata } from 'next'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Mascot from '../components/Mascot'
import PageHero from '../components/PageHero'
import CtaSection from '../sections/CtaSection'

export const metadata: Metadata = {
  title: 'Reputation Management | Bollo',
  description: 'Professionel reputation management for din virksomhed. Bollo håndterer dine anmeldelser, styrker dit omdømme og øger din synlighed på Google Maps, Trustpilot og TripAdvisor.',
}

const painPoints = [
  { icon: '😤', text: 'Du ved godt anmeldelser er vigtige — men har ikke tid til at følge op' },
  { icon: '😟', text: 'Negative anmeldelser hænger der og skræmmer potentielle kunder væk' },
  { icon: '😶', text: 'Du svarer ikke på anmeldelser, fordi du ikke ved hvad du skal skrive' },
  { icon: '📉', text: 'Din konkurrent har 4,8 stjerner — du har 3,9' },
]

const services = [
  {
    icon: '⭐',
    title: 'Indsamling af anmeldelser',
    desc: 'Vi hjælper dine tilfredse kunder med at skrive anmeldelser via automatiserede og personlige flows.',
  },
  {
    icon: '💬',
    title: 'Professionelle svar',
    desc: 'Alle anmeldelser — positive som negative — besvares professionelt og i din virksomheds tone of voice.',
  },
  {
    icon: '🛡️',
    title: 'Krisehåndtering',
    desc: 'Utilfredse kunder fanges tidligt, og vi håndterer negative situationer diskret og konstruktivt.',
  },
  {
    icon: '📊',
    title: 'Månedlige rapporter',
    desc: 'Du modtager en klar rapport over din omdømmestatus, udvikling og anbefalinger.',
  },
  {
    icon: '🤖',
    title: 'AI-synlighed',
    desc: 'Vi optimerer din profil så du anbefales af ChatGPT, Google AI og andre AI-søgninger.',
  },
  {
    icon: '📍',
    title: 'Lokal søgestyrkelse',
    desc: 'Med stærke anmeldelser rykker du op i lokale søgeresultater og Google Maps top 5.',
  },
]

const stats = [
  { value: '87%', label: 'af forbrugere læser anmeldelser før de køber lokalt' },
  { value: '3x', label: 'flere anmeldelser med systematisk indsamling' },
  { value: '4,8★', label: 'gennemsnitlig score for vores kunder' },
]

export default function ReputationManagementPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          tag="Reputation Management"
          title="Vi passer på dit omdømme — så du kan passe din forretning"
          titleAccentWord="omdømme"
          subtitle="Bollo tager hånd om alle dine anmeldelser og din online profil. Fra indsamling til svar, fra krisehåndtering til AI-synlighed — vi klarer det hele."
          ctaText="Få en gratis gennemgang"
          secondaryCta={{ text: 'Se hvordan det virker →', href: '#process' }}
        />

        {/* Pain points */}
        <section className="py-20 px-6" style={{ background: 'var(--color-bg)' }}>
          <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
            <div className="text-center mb-14">
              <span className="section-tag">Kender du det her?</span>
              <h2 className="section-h2 mt-3">De fleste virksomheder kæmper med det samme</h2>
              <p className="section-sub mx-auto">
                Du er ikke alene. Anmeldelseshåndtering er en af de ting, de fleste virksomheder ved er vigtige — men aldrig får gjort systematisk.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {painPoints.map((p, i) => (
                <div key={i} className="bollo-card flex items-start gap-4">
                  <span style={{ fontSize: '2rem', lineHeight: 1 }}>{p.icon}</span>
                  <p style={{ color: 'var(--color-text)', fontSize: 'var(--text-base)', fontFamily: 'var(--font-body)' }}>
                    {p.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="process" className="py-20 px-6" style={{ background: 'var(--color-surface)' }}>
          <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
            <div className="text-center mb-14">
              <span className="section-tag">Hvad vi gør for dig</span>
              <h2 className="section-h2 mt-3">Alt hvad du behøver — samlet ét sted</h2>
              <p className="section-sub mx-auto">
                Bollo er din komplette løsning for online omdømmestyring. Vi arbejder i baggrunden, du høster resultaterne.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s, i) => (
                <div key={i} className="bollo-card">
                  <div className="card-icon">{s.icon}</div>
                  <h3
                    className="font-bold mb-2"
                    style={{ fontFamily: 'var(--font-body)', color: 'var(--color-forest)', fontSize: 'var(--text-lg)' }}
                  >
                    {s.title}
                  </h3>
                  <p style={{ color: 'var(--color-text-soft)', fontSize: 'var(--text-sm)', fontFamily: 'var(--font-body)' }}>
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Platforms */}
        <section className="py-20 px-6 section-dark">
          <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }} className="text-center">
            <span className="section-tag-dark">Platforme vi arbejder på</span>
            <h2 className="section-h2-dark mt-3 mb-6">Vi styrker dit omdømme overalt, hvor kunderne kigger</h2>
            <p className="mb-12 mx-auto" style={{ color: 'var(--color-text-muted-dark)', fontSize: 'var(--text-md)', maxWidth: '560px', fontFamily: 'var(--font-body)' }}>
              Bollo håndterer din tilstedeværelse på de tre vigtigste anmeldelsesplatforme i Danmark.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              {[
                { icon: '📍', name: 'Google Maps', desc: 'Kom i top 5 lokalt' },
                { icon: '⭐', name: 'Trustpilot', desc: 'Høj score og synlighed' },
                { icon: '✈️', name: 'TripAdvisor', desc: 'Stærk rejse- og restaurantprofil' },
              ].map((p, i) => (
                <div
                  key={i}
                  className="rounded-xl p-6 text-center"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(109,203,160,0.2)' }}
                >
                  <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>{p.icon}</div>
                  <div
                    className="font-bold mb-1"
                    style={{ fontFamily: 'var(--font-display)', color: '#fff', fontSize: 'var(--text-lg)' }}
                  >
                    {p.name}
                  </div>
                  <div style={{ color: 'var(--color-text-muted-dark)', fontSize: 'var(--text-sm)', fontFamily: 'var(--font-body)' }}>
                    {p.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 px-6" style={{ background: 'var(--color-bg)' }}>
          <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
            <div className="text-center mb-14">
              <span className="section-tag">Resultater</span>
              <h2 className="section-h2 mt-3">Tallene taler for sig selv</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              {stats.map((s, i) => (
                <div key={i}>
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

        <CtaSection />
      </main>
      <Footer />
      <Mascot />
    </>
  )
}
