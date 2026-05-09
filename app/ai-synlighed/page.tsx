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

const aiTools = [
  { icon: '🤖', name: 'ChatGPT', desc: 'Millioner af brugere spørger dagligt om lokale anbefalinger' },
  { icon: '🔍', name: 'Google AI Overview', desc: 'Googles AI-svar vises øverst og dominerer søgeresultater' },
  { icon: '💜', name: 'Perplexity', desc: 'Den hurtigst voksende AI-søgemaskine prioriterer troværdige kilder' },
  { icon: '🔷', name: 'Microsoft Copilot', desc: 'Integreret i Windows og Edge — enorm brugerbase' },
]

const factors = [
  {
    icon: '⭐',
    title: 'Antal og kvalitet af anmeldelser',
    desc: 'AI-modeller læser tusindvis af anmeldelser og bruger dem til at vurdere troværdighed. Flere gode anmeldelser = bedre anbefalinger.',
  },
  {
    icon: '💬',
    title: 'Aktive og professionelle svar',
    desc: 'Virksomheder der aktivt engagerer sig med anmeldelserne signalerer troværdighed og god kundepleje.',
  },
  {
    icon: '📋',
    title: 'Konsistent online tilstedeværelse',
    desc: 'Sammenhængende information på tværs af platforme giver AI-modeller et klart og troværdigt billede.',
  },
  {
    icon: '📍',
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
                  { icon: '📈', stat: '40%', label: 'af søgninger i 2026 sker via AI-assistenter' },
                  { icon: '⭐', stat: '4,5+', label: 'stjerner kræves for at blive anbefalet af AI' },
                  { icon: '💬', stat: '50+', label: 'anmeldelser er minimumsstandarden' },
                  { icon: '⚡', stat: '3 sek', label: 'er alt hvad en AI bruger på at værtssætte din profil' },
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
                  <div style={{ fontSize: '2rem', marginBottom: '12px' }}>{t.icon}</div>
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
