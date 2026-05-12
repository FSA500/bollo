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

const AlertIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>
    <path d="M12 9v4"/><path d="M12 17h.01"/>
  </svg>
)
const StarIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
)
const MessageIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
)
const ShieldIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
)
const BarChartIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" x2="18" y1="20" y2="10"/><line x1="12" x2="12" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="14"/>
  </svg>
)
const CpuIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="16" height="16" x="4" y="4" rx="2"/>
    <rect width="6" height="6" x="9" y="9" rx="1"/>
    <path d="M15 2v2M9 2v2M2 15h2M2 9h2M15 20v2M9 20v2M20 15h2M20 9h2"/>
  </svg>
)
const MapPinIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
  </svg>
)

const StarLargeIcon = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-mint-dark)' }}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
)
const MapPinLargeIcon = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-mint-dark)' }}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
  </svg>
)
const SendIcon = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-mint-dark)' }}>
    <path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>
  </svg>
)

const painPoints = [
  { icon: <AlertIcon />, text: 'Du ved godt anmeldelser er vigtige — men har ikke tid til at følge op' },
  { icon: <AlertIcon />, text: 'Negative anmeldelser hænger der og skræmmer potentielle kunder væk' },
  { icon: <AlertIcon />, text: 'Du svarer ikke på anmeldelser, fordi du ikke ved hvad du skal skrive' },
  { icon: <BarChartIcon />, text: 'Din konkurrent har 4,8 stjerner — du har 3,9' },
]

const services = [
  {
    icon: <StarIcon />,
    title: 'Indsamling af anmeldelser',
    desc: 'Vi hjælper dine tilfredse kunder med at skrive anmeldelser via automatiserede og personlige flows.',
  },
  {
    icon: <MessageIcon />,
    title: 'Professionelle svar',
    desc: 'Alle anmeldelser — positive som negative — besvares professionelt og i din virksomheds tone of voice.',
  },
  {
    icon: <ShieldIcon />,
    title: 'Krisehåndtering',
    desc: 'Utilfredse kunder fanges tidligt, og vi håndterer negative situationer diskret og konstruktivt.',
  },
  {
    icon: <BarChartIcon />,
    title: 'Månedlige rapporter',
    desc: 'Du modtager en klar rapport over din omdømmestatus, udvikling og anbefalinger.',
  },
  {
    icon: <CpuIcon />,
    title: 'AI-synlighed',
    desc: 'Vi optimerer din profil så du anbefales af ChatGPT, Google AI og andre AI-søgninger.',
  },
  {
    icon: <MapPinIcon />,
    title: 'Lokal søgestyrkelse',
    desc: 'Med stærke anmeldelser rykker du op i lokale søgeresultater og Google Maps top 5.',
  },
]

const stats = [
  { value: '87%', label: 'af forbrugere læser anmeldelser før de køber lokalt' },
  { value: '3x', label: 'flere anmeldelser med systematisk indsamling' },
  { value: '4,8★', label: 'gennemsnitlig score for vores kunder' },
]

const platforms = [
  { icon: <MapPinLargeIcon />, name: 'Google Maps', desc: 'Kom i top 5 lokalt' },
  { icon: <StarLargeIcon />, name: 'Trustpilot', desc: 'Høj score og synlighed' },
  { icon: <SendIcon />, name: 'TripAdvisor', desc: 'Stærk rejse- og restaurantprofil' },
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
                  <div className="card-icon flex-shrink-0">{p.icon}</div>
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
              {platforms.map((p, i) => (
                <div
                  key={i}
                  className="rounded-xl p-6 text-center"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(109,203,160,0.2)' }}
                >
                  <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '12px' }}>{p.icon}</div>
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
