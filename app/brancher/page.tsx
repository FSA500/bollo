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

const industries = [
  {
    icon: '🔧',
    name: 'Lokale servicevirksomheder',
    examples: 'VVS, el-installatør, murer, tømrer, rengøring',
    pain: 'Du lever af lokale mund-til-mund anbefalinger — nu sker det digitalt',
    gain: 'Bliv den første anmeldelse nye kunder ser, når de søger lokalt',
  },
  {
    icon: '🍽️',
    name: 'Restauranter & hoteller',
    examples: 'Restauranter, cafeer, hoteller, bed & breakfast',
    pain: 'En enkelt dårlig anmeldelse kan ødelægge et helt weekendforretning',
    gain: 'Stærk TripAdvisor og Google-profil fylder bordene og rummene',
  },
  {
    icon: '🏥',
    name: 'Klinikker & sundhed',
    examples: 'Tandlæger, fysioterapeuter, psykologer, klinikker',
    pain: 'Patienter søger og vælger baseret på anmeldelser og troværdighed',
    gain: 'Professionel online profil der afspejler den kvalitet du leverer',
  },
  {
    icon: '🏢',
    name: 'Kæder med flere lokationer',
    examples: 'Franchise, kædebutikker, landsdækkende servicevirksomheder',
    pain: 'Svært at holde styr på anmeldelser på tværs af mange lokationer',
    gain: 'Centraliseret styring og ensartet kommunikation overalt',
  },
  {
    icon: '🛒',
    name: 'E-commerce',
    examples: 'Online butikker, D2C brands, abonnementsservices',
    pain: 'Trustpilot-score vises i Google Shopping — dårlig score koster konverteringer',
    gain: 'Høj TrustScore der øger konverteringer og sænker returnerings-raten',
  },
  {
    icon: '💼',
    name: 'B2B virksomheder',
    examples: 'Konsulenter, bureauer, IT-selskaber, rådgivere',
    pain: 'Potentielle kunder googler dig, inden de ringer — hvad finder de?',
    gain: 'Online omdømme der understøtter dit salgsteam og lukker aftaler',
  },
  {
    icon: '🏠',
    name: 'Ejendomsmæglere',
    examples: 'Boligmæglere, ejendomsadministrationen, udlejere',
    pain: 'Konkurrencen er hård — tillid og anmeldelser afgør hvem sælger vælger',
    gain: 'Stærk profil der skiller dig ud fra konkurrenterne i lokalområdet',
  },
  {
    icon: '🎓',
    name: 'Uddannelse & kurser',
    examples: 'Uddannelsesinstitutioner, sprogcentre, kursusvirksomheder',
    pain: 'Studerende og deltagere undersøger omhyggeligt, inden de tilmelder sig',
    gain: 'Positiv online tilstedeværelse der øger tilmeldinger og fastholdelse',
  },
  {
    icon: '🚗',
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
