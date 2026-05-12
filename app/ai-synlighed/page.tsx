import { Metadata } from 'next'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Mascot from '../components/Mascot'
import PageHero from '../components/PageHero'
import CtaSection from '../sections/CtaSection'

export const metadata: Metadata = {
  title: 'AI-Synlighed | Bollo',
  description: 'I 2026 søger dine kunder via AI-værktøjer. Anmeldelser og online troværdighed afgør om din virksomhed bliver anbefalet. Bollo sikrer din AI-synlighed.',
}

const CpuIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="16" height="16" x="4" y="4" rx="2"/>
    <rect width="6" height="6" x="9" y="9" rx="1"/>
    <path d="M15 2v2M9 2v2M2 15h2M2 9h2M15 20v2M9 20v2M20 15h2M20 9h2"/>
  </svg>
)
const SearchIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
  </svg>
)
const SparkleIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3z"/>
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
const ClipboardIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="8" height="4" x="8" y="2" rx="1" ry="1"/>
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
  </svg>
)
const MapPinIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
  </svg>
)

const TrendingUpLargeIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-mint-dark)' }}>
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
  </svg>
)
const StarLargeIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-mint-dark)' }}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
)
const MessageLargeIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-mint-dark)' }}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
)
const ZapLargeIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-mint-dark)' }}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
)

const aiTools = [
  { icon: <CpuIcon />, name: 'ChatGPT', desc: 'Millioner af brugere spørger dagligt om lokale anbefalinger' },
  { icon: <SearchIcon />, name: 'Google AI Overview', desc: 'Googles AI-svar vises øverst og dominerer søgeresultater' },
  { icon: <SparkleIcon />, name: 'Perplexity', desc: 'Den hurtigst voksende AI-søgemaskine prioriterer troværdige kilder' },
  { icon: <SparkleIcon />, name: 'Microsoft Copilot', desc: 'Integreret i Windows og Edge — enorm brugerbase' },
]

const factors = [
  {
    icon: <StarIcon />,
    title: 'Antal og kvalitet af anmeldelser',
    desc: 'AI-modeller læser tusindvis af anmeldelser og bruger dem til at vurdere troværdighed. Flere gode anmeldelser = bedre anbefalinger.',
  },
  {
    icon: <MessageIcon />,
    title: 'Aktive og professionelle svar',
    desc: 'Virksomheder der aktivt engagerer sig med anmeldelserne signalerer troværdighed og god kundepleje.',
  },
  {
    icon: <ClipboardIcon />,
    title: 'Konsistent online tilstedeværelse',
    desc: 'Sammenhængende information på tværs af platforme giver AI-modeller et klart og troværdigt billede.',
  },
  {
    icon: <MapPinIcon />,
    title: 'Lokal SEO-styrke',
    desc: 'Google Maps-placering og lokal søgesynlighed føder direkte ind i AI-anbefalinger.',
  },
]

export default function AiSynlighedPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          tag="AI-Synlighed"
          title="Bliv anbefalet af AI — ikke overset"
          titleAccentWord="AI"
          subtitle="I 2026 søger dine kunder ikke kun på Google — de spørger AI-assistenter. Anmeldelser og online troværdighed afgør om du bliver anbefalet eller ikke engang nævnt."
          ctaText="Bliv synlig i AI-søgninger"
          secondaryCta={{ text: 'Hvordan det virker →', href: '#how' }}
        />

        {/* The shift */}
        <section className="py-20 px-6" style={{ background: 'var(--color-bg)' }}>
          <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="section-tag">Den nye virkelighed</span>
                <h2 className="section-h2 mt-3 mb-6">Søgeadfærden har ændret sig drastisk</h2>
                <p style={{ color: 'var(--color-text)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', lineHeight: 1.8, marginBottom: '16px' }}>
                  Hvor kunder før søgte på Google og klikkede rundt, stiller de nu spørgsmål til AI-assistenter: &ldquo;Hvad er den bedste tandlæge i Aarhus?&rdquo; eller &ldquo;Hvilket VVS-firma kan jeg stole på i København?&rdquo;
                </p>
                <p style={{ color: 'var(--color-text)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', lineHeight: 1.8 }}>
                  AI-modellerne anbefaler virksomheder baseret på online troværdighed — og den er i høj grad bygget på anmeldelser.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <TrendingUpLargeIcon />, stat: '40%', label: 'af søgninger i 2026 sker via AI-assistenter' },
                  { icon: <StarLargeIcon />, stat: '4,5+', label: 'stjerner kræves for at blive anbefalet af AI' },
                  { icon: <MessageLargeIcon />, stat: '50+', label: 'anmeldelser er minimumsstandarden' },
                  { icon: <ZapLargeIcon />, stat: '3 sek', label: 'er alt hvad en AI bruger på at værtssætte din profil' },
                ].map((item, i) => (
                  <div key={i} className="bollo-card text-center">
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '8px' }}>{item.icon}</div>
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

        {/* AI tools */}
        <section className="py-20 px-6 section-dark">
          <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }} className="text-center">
            <span className="section-tag-dark">AI-platforme</span>
            <h2 className="section-h2-dark mt-3 mb-4">De AI-søgninger der afgør din fremtid</h2>
            <p className="mb-12 mx-auto" style={{ color: 'var(--color-text-muted-dark)', fontSize: 'var(--text-md)', maxWidth: '560px', fontFamily: 'var(--font-body)' }}>
              Bollo optimerer din online profil til at blive anbefalet på alle de store AI-platforme.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {aiTools.map((t, i) => (
                <div
                  key={i}
                  className="rounded-xl p-6 text-left"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(109,203,160,0.2)' }}
                >
                  <div style={{ marginBottom: '12px', color: 'var(--color-mint)' }}>{t.icon}</div>
                  <div
                    className="font-bold mb-2"
                    style={{ fontFamily: 'var(--font-display)', color: '#fff', fontSize: 'var(--text-lg)' }}
                  >
                    {t.name}
                  </div>
                  <div style={{ color: 'var(--color-text-muted-dark)', fontSize: 'var(--text-sm)', fontFamily: 'var(--font-body)' }}>
                    {t.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How Bollo helps */}
        <section id="how" className="py-20 px-6" style={{ background: 'var(--color-surface)' }}>
          <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
            <div className="text-center mb-14">
              <span className="section-tag">Bollos tilgang</span>
              <h2 className="section-h2 mt-3">Hvad afgør om AI anbefaler dig?</h2>
              <p className="section-sub mx-auto">
                Vi optimerer de faktorer, AI-modellerne vægter højest, når de afgiver anbefalinger til brugerne.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {factors.map((f, i) => (
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

        <CtaSection />
      </main>
      <Footer />
      <Mascot />
    </>
  )
}
