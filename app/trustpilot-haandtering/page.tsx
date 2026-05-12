import { Metadata } from 'next'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Mascot from '../components/Mascot'
import PageHero from '../components/PageHero'
import CtaSection from '../sections/CtaSection'

export const metadata: Metadata = {
  title: 'Trustpilot Håndtering | Bollo',
  description: 'Professionel håndtering af din Trustpilot-profil. Bollo hjælper dig med at samle flere anmeldelser, svare professionelt og opbygge en stærk Trustpilot-score.',
}

const InboxIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/>
    <path d="M5.45 5.11 2 12v3a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>
  </svg>
)
const EditIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/>
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
const LinkIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
  </svg>
)
const TrendingUpIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
  </svg>
)

const services = [
  {
    icon: <InboxIcon />,
    title: 'Automatiseret invitationsflow',
    desc: 'Vi sætter automatiserede invitationer op, der sender anmeldelseslinks til dine kunder på det rette tidspunkt.',
  },
  {
    icon: <EditIcon />,
    title: 'Professionelle svar',
    desc: 'Alle offentlige anmeldelser besvares hurtigt og i din tone of voice — fra de 5-stjernede til de kritiske.',
  },
  {
    icon: <ShieldIcon />,
    title: 'Håndtering af falske anmeldelser',
    desc: 'Vi hjælper med at identificere og rapportere anmeldelser, der ikke overholder Trustpilots retningslinjer.',
  },
  {
    icon: <BarChartIcon />,
    title: 'Score-optimering',
    desc: 'Systematisk arbejde med at hæve din TrustScore og Trustpilot-rating over tid.',
  },
  {
    icon: <LinkIcon />,
    title: 'Widget-integration',
    desc: 'Vi hjælper med at vise dine Trustpilot-anmeldelser smukt på din hjemmeside og i dine mails.',
  },
  {
    icon: <TrendingUpIcon />,
    title: 'Månedlig rapportering',
    desc: 'Du modtager en klar oversigt over din Trustpilot-performance og anbefalinger til næste måned.',
  },
]

const trustpilotFacts = [
  { stat: '530K+', label: 'virksomheder bruger Trustpilot aktivt' },
  { stat: '1 mia.', label: 'anmeldelser er skrevet på platformen' },
  { stat: '67%', label: 'af kunder søger aktivt på Trustpilot før køb' },
]

export default function TrustpilotHaandteringPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          tag="Trustpilot Håndtering"
          title="En stærk Trustpilot-profil bygger du ikke ved et tilfælde"
          titleAccentWord="Trustpilot"
          subtitle="Trustpilot er en af de mest troværdige anmeldelsesplatforme i Norden. Bollo sikrer, at din profil arbejder for dig — ikke imod dig."
          ctaText="Få en gratis gennemgang"
          secondaryCta={{ text: 'Se hvad vi gør →', href: '#services' }}
        />

        {/* Why Trustpilot */}
        <section className="py-20 px-6" style={{ background: 'var(--color-bg)' }}>
          <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="section-tag">Trustpilots betydning</span>
                <h2 className="section-h2 mt-3 mb-6">Trustpilot er B2C-tillid i sin reneste form</h2>
                <p style={{ color: 'var(--color-text)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', lineHeight: 1.8, marginBottom: '16px' }}>
                  Trustpilot er en uafhængig platform, der giver kunder mulighed for at dele ærlige erfaringer. Netop derfor tillægger forbrugere anmeldelserne stor vægt — de er ikke skrevet af virksomheden selv.
                </p>
                <p style={{ color: 'var(--color-text)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', lineHeight: 1.8 }}>
                  En høj TrustScore vises i Google-søgninger med stjerner direkte i søgeresultatet — det øger din klikrate dramatisk.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                {trustpilotFacts.map((f, i) => (
                  <div key={i} className="bollo-card flex items-center gap-6">
                    <div
                      className="font-extrabold flex-shrink-0"
                      style={{ fontFamily: 'var(--font-display)', color: 'var(--color-mint-dark)', fontSize: '2rem', minWidth: '80px' }}
                    >
                      {f.stat}
                    </div>
                    <div style={{ color: 'var(--color-text)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)' }}>
                      {f.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-20 px-6" style={{ background: 'var(--color-surface)' }}>
          <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
            <div className="text-center mb-14">
              <span className="section-tag">Vores ydelser</span>
              <h2 className="section-h2 mt-3">Alt vi gør for din Trustpilot-profil</h2>
              <p className="section-sub mx-auto">
                En komplet forvaltning af din Trustpilot-tilstedeværelse, så du kan fokusere på din forretning.
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

        {/* TrustScore visual */}
        <section className="py-20 px-6 section-dark">
          <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }} className="text-center">
            <span className="section-tag-dark">TrustScore</span>
            <h2 className="section-h2-dark mt-3 mb-4">Hvad siger din nuværende score om dig?</h2>
            <p className="mb-12 mx-auto" style={{ color: 'var(--color-text-muted-dark)', fontSize: 'var(--text-md)', maxWidth: '560px', fontFamily: 'var(--font-body)' }}>
              TrustScore er baseret på anmeldelsernes score og aktualitet. Bollo arbejder systematisk med begge faktorer.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              {[
                { range: '3,0–3,9 ★', label: 'Svag', color: '#ff6b6b', desc: 'Kunder er skeptiske. Konkurrenter vinder' },
                { range: '4,0–4,4 ★', label: 'Okay', color: '#f5a623', desc: 'Acceptabelt, men langt fra optimalt' },
                { range: '4,5–5,0 ★', label: 'Stærk', color: 'var(--color-mint)', desc: 'Vises i Google-stjerner, bygger tillid' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl p-6 text-center"
                  style={{ background: 'rgba(255,255,255,0.06)', border: `1px solid ${item.color}40` }}
                >
                  <div
                    className="font-extrabold mb-1"
                    style={{ fontFamily: 'var(--font-display)', color: item.color, fontSize: 'var(--text-xl)' }}
                  >
                    {item.range}
                  </div>
                  <div
                    className="font-bold mb-2"
                    style={{ fontFamily: 'var(--font-body)', color: '#fff', fontSize: 'var(--text-md)' }}
                  >
                    {item.label}
                  </div>
                  <div style={{ color: 'var(--color-text-muted-dark)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)' }}>
                    {item.desc}
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
