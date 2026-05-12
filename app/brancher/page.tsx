import { Metadata } from 'next'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Mascot from '../components/Mascot'
import PageHero from '../components/PageHero'
import CtaSection from '../sections/CtaSection'

export const metadata: Metadata = {
  title: 'Brancher | Bollo',
  description: 'Bollo hjælper virksomheder på tværs af alle brancher med professionel reputation management. Se om din branche er med.',
}

const WrenchIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
  </svg>
)
const UtensilsIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/>
    <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>
  </svg>
)
const CrossIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="18" x="3" y="3" rx="2"/><path d="M12 8v8M8 12h8"/>
  </svg>
)
const BuildingIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="16" height="20" x="4" y="2" rx="2" ry="2"/>
    <path d="M9 22V12h6v10"/><path d="M8 7h.01M12 7h.01M16 7h.01M8 11h.01M12 11h.01M16 11h.01"/>
  </svg>
)
const CartIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/>
    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
  </svg>
)
const BriefcaseIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="14" x="2" y="7" rx="2" ry="2"/>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
  </svg>
)
const HomeIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
)
const GraduationIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
  </svg>
)
const CarIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="8" x="3" y="11" rx="2"/>
    <path d="M7 11V7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4"/>
    <circle cx="7.5" cy="15.5" r="1.5"/><circle cx="16.5" cy="15.5" r="1.5"/>
  </svg>
)

const industries = [
  {
    icon: <WrenchIcon />,
    name: 'Lokale servicevirksomheder',
    examples: 'VVS, el-installatør, murer, tømrer, rengøring',
    pain: 'Du lever af lokale mund-til-mund anbefalinger — nu sker det digitalt',
    gain: 'Bliv den første anmeldelse nye kunder ser, når de søger lokalt',
  },
  {
    icon: <UtensilsIcon />,
    name: 'Restauranter & hoteller',
    examples: 'Restauranter, cafeer, hoteller, bed & breakfast',
    pain: 'En enkelt dårlig anmeldelse kan ødelægge et helt weekendforretning',
    gain: 'Stærk TripAdvisor og Google-profil fylder bordene og rummene',
  },
  {
    icon: <CrossIcon />,
    name: 'Klinikker & sundhed',
    examples: 'Tandlæger, fysioterapeuter, psykologer, klinikker',
    pain: 'Patienter søger og vælger baseret på anmeldelser og troværdighed',
    gain: 'Professionel online profil der afspejler den kvalitet du leverer',
  },
  {
    icon: <BuildingIcon />,
    name: 'Kæder med flere lokationer',
    examples: 'Franchise, kædebutikker, landsdækkende servicevirksomheder',
    pain: 'Svært at holde styr på anmeldelser på tværs af mange lokationer',
    gain: 'Centraliseret styring og ensartet kommunikation overalt',
  },
  {
    icon: <CartIcon />,
    name: 'E-commerce',
    examples: 'Online butikker, D2C brands, abonnementsservices',
    pain: 'Trustpilot-score vises i Google Shopping — dårlig score koster konverteringer',
    gain: 'Høj TrustScore der øger konverteringer og sænker returnerings-raten',
  },
  {
    icon: <BriefcaseIcon />,
    name: 'B2B virksomheder',
    examples: 'Konsulenter, bureauer, IT-selskaber, rådgivere',
    pain: 'Potentielle kunder googler dig, inden de ringer — hvad finder de?',
    gain: 'Online omdømme der understøtter dit salgsteam og lukker aftaler',
  },
  {
    icon: <HomeIcon />,
    name: 'Ejendomsmæglere',
    examples: 'Boligmæglere, ejendomsadministrationen, udlejere',
    pain: 'Konkurrencen er hård — tillid og anmeldelser afgør hvem sælger vælger',
    gain: 'Stærk profil der skiller dig ud fra konkurrenterne i lokalområdet',
  },
  {
    icon: <GraduationIcon />,
    name: 'Uddannelse & kurser',
    examples: 'Uddannelsesinstitutioner, sprogcentre, kursusvirksomheder',
    pain: 'Studerende og deltagere undersøger omhyggeligt, inden de tilmelder sig',
    gain: 'Positiv online tilstedeværelse der øger tilmeldinger og fastholdelse',
  },
  {
    icon: <CarIcon />,
    name: 'Bilbranchen',
    examples: 'Autoforhandlere, bilværksteder, bilrengøring',
    pain: 'Kunder misbruger anmeldelser som forhandlingsværktøj',
    gain: 'Proaktiv håndtering der beskytter dit omdømme og besvarer kritik konstruktivt',
  },
]

export default function BrancherPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          tag="Brancher"
          title="Uanset branche — dit omdømme er din forretning"
          titleAccentWord="omdømme"
          subtitle="Bollo arbejder med virksomheder i alle størrelser og brancher. Fælles for dem alle: kunder søger online, og anmeldelser afgør valget."
          ctaText="Find din løsning"
          secondaryCta={{ text: 'Se alle brancher →', href: '#industries' }}
        />

        {/* Intro */}
        <section className="py-20 px-6" style={{ background: 'var(--color-bg)' }}>
          <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto', textAlign: 'center' }}>
            <span className="section-tag">Hvad vi har lært</span>
            <h2 className="section-h2 mt-3 mb-6">Anmeldelser påvirker alle brancher — men udfordringen er forskellig</h2>
            <p className="section-sub mx-auto">
              Vi tilpasser vores tilgang til din branche. En tandlæge har andre behov end en e-commerce virksomhed — men begge har brug for et stærkt omdømme.
            </p>
          </div>
        </section>

        {/* Industry cards */}
        <section id="industries" className="py-20 px-6" style={{ background: 'var(--color-surface)' }}>
          <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {industries.map((ind, i) => (
                <div key={i} className="bollo-card">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="card-icon flex-shrink-0">{ind.icon}</div>
                    <div>
                      <h3
                        className="font-bold"
                        style={{ fontFamily: 'var(--font-body)', color: 'var(--color-forest)', fontSize: 'var(--text-lg)' }}
                      >
                        {ind.name}
                      </h3>
                      <p style={{ color: 'var(--color-text-soft)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)' }}>
                        {ind.examples}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div
                      className="rounded-lg px-4 py-3 flex gap-3 items-start"
                      style={{ background: '#fff3f3', border: '1px solid rgba(255,107,107,0.15)' }}
                    >
                      <span style={{ color: '#ff6b6b', fontWeight: 700, fontSize: 'var(--text-xs)', fontFamily: 'var(--font-body)', whiteSpace: 'nowrap' }}>
                        UDFORDRING
                      </span>
                      <span style={{ color: 'var(--color-text)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)' }}>
                        {ind.pain}
                      </span>
                    </div>
                    <div
                      className="rounded-lg px-4 py-3 flex gap-3 items-start"
                      style={{ background: 'var(--color-mint-light)', border: '1px solid rgba(109,203,160,0.2)' }}
                    >
                      <span style={{ color: 'var(--color-mint-dark)', fontWeight: 700, fontSize: 'var(--text-xs)', fontFamily: 'var(--font-body)', whiteSpace: 'nowrap' }}>
                        LØSNING
                      </span>
                      <span style={{ color: 'var(--color-forest)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)' }}>
                        {ind.gain}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Universal truth */}
        <section className="py-20 px-6 section-dark">
          <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}>
            <span className="section-tag-dark">Det universelle</span>
            <h2 className="section-h2-dark mt-3 mb-6">Uanset branche gælder det samme</h2>
            <p style={{ color: 'var(--color-text-muted-dark)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-md)', lineHeight: 1.8, marginBottom: '16px' }}>
              &ldquo;De fleste virksomheder ved godt, at anmeldelser er vigtige — men det er tidskrævende, besværligt og irriterende at håndtere løbende.&rdquo;
            </p>
            <p style={{ color: 'var(--color-text-muted-dark)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', lineHeight: 1.8 }}>
              Det er præcis det problem Bollo løser. Vi tager hele opgaven, så du kan fokusere på det, du er god til.
            </p>
            <div className="mt-10">
              <a href="/kontakt" className="btn-primary cta-trigger">
                Book en gratis demo
              </a>
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
