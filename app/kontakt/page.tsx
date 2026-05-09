'use client'

import { useState, FormEvent } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Mascot from '../components/Mascot'

const faqs = [
  {
    q: 'Hvad sker der, efter jeg booker en demo?',
    a: 'Vi kontakter dig inden for 24 timer for at aftale et tidspunkt. Demoen er en uforpligtende 30-minutters gennemgang af din nuværende anmeldelsesstatus og hvad vi konkret kan gøre for dig.',
  },
  {
    q: 'Hvad koster det?',
    a: 'Prisen afhænger af din virksomhedsstørrelse og hvilke ydelser du har brug for. Vi tilbyder fleksible pakker fra enkle til komplette løsninger. Du får en konkret pris under demoen.',
  },
  {
    q: 'Kan I håndtere anmeldelser på alle platforme?',
    a: 'Ja. Vi arbejder primært med Google Maps, Trustpilot og TripAdvisor, men kan tilpasse os til andre platforme efter behov.',
  },
  {
    q: 'Hvor lang tid tager det at se resultater?',
    a: 'De fleste kunder ser de første synlige forbedringer inden for 4–8 uger. Fuld effekt opnås typisk efter 3–6 måneder afhængig af udgangspunktet.',
  },
  {
    q: 'Hvem skriver svarene på anmeldelserne?',
    a: 'Vores dedikerede team af kommunikationsspecialister skriver alle svar. Vi arbejder altid ud fra en godkendt tone of voice guide, der matcher din virksomheds stemme.',
  },
  {
    q: 'Er der binding?',
    a: 'Nej. Vi tilbyder fleksible abonnementer uden bindingsperiode. Vi tror på, at du bliver, fordi du ser resultater — ikke fordi du er låst fast.',
  },
]

export default function KontaktPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
    type: 'demo',
  })
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section
          style={{
            background: 'linear-gradient(135deg, var(--color-forest-deep) 0%, var(--color-forest) 60%, #1f5045 100%)',
            position: 'relative',
            overflow: 'hidden',
          }}
          className="pt-32 pb-20 px-6"
        >
          <div
            aria-hidden
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'radial-gradient(circle, rgba(109,203,160,0.10) 1px, transparent 1px)',
              backgroundSize: '32px 32px',
              pointerEvents: 'none',
            }}
          />
          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <span className="section-tag-dark">Kontakt</span>
            <h1
              className="font-display font-extrabold text-white mt-4 mb-6"
              style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', lineHeight: 1.2 }}
            >
              Lad os tage en snak
            </h1>
            <p style={{ color: 'var(--color-text-muted-dark)', fontSize: 'var(--text-md)', fontFamily: 'var(--font-body)', lineHeight: 1.7 }}>
              Book en gratis og uforpligtende demo, og se hvad Bollo konkret kan gøre for din virksomhed.
            </p>
          </div>
        </section>

        {/* Contact grid */}
        <section className="py-20 px-6" style={{ background: 'var(--color-bg)' }}>
          <div
            className="grid grid-cols-1 lg:grid-cols-5 gap-12"
            style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}
          >
            {/* Form — 3/5 */}
            <div className="lg:col-span-3">
              <div className="bollo-card p-8">
                <h2
                  className="font-bold mb-6"
                  style={{ fontFamily: 'var(--font-display)', color: 'var(--color-forest)', fontSize: 'var(--text-2xl)' }}
                >
                  {submitted ? '🎉 Tak for din henvendelse!' : 'Book en gratis demo'}
                </h2>

                {submitted ? (
                  <div>
                    <p style={{ color: 'var(--color-text)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', lineHeight: 1.8, marginBottom: '16px' }}>
                      Vi har modtaget din besked og vender tilbage inden for 24 timer.
                    </p>
                    <p style={{ color: 'var(--color-text-soft)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)' }}>
                      Du er altid velkommen til at ringe direkte på <strong>+45 00 00 00 00</strong> eller skrive til <strong>hej@bollo.dk</strong>.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    {/* Type selector */}
                    <div className="flex gap-3">
                      {[
                        { value: 'demo', label: 'Book en demo' },
                        { value: 'question', label: 'Stil et spørgsmål' },
                      ].map((opt) => (
                        <button
                          key={opt.value}
                          type="button"
                          onClick={() => setForm({ ...form, type: opt.value })}
                          className="flex-1 py-3 rounded-full font-semibold transition-all"
                          style={{
                            fontFamily: 'var(--font-body)',
                            fontSize: 'var(--text-sm)',
                            border: form.type === opt.value ? '2px solid var(--color-mint)' : '2px solid var(--color-border)',
                            background: form.type === opt.value ? 'var(--color-mint-light)' : 'transparent',
                            color: form.type === opt.value ? 'var(--color-mint-dark)' : 'var(--color-text-soft)',
                            cursor: 'pointer',
                          }}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="name"
                          style={{ display: 'block', fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)', fontWeight: 600, color: 'var(--color-text)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.06em' }}
                        >
                          Navn *
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="Dit fulde navn"
                          style={{
                            width: '100%',
                            padding: '12px 16px',
                            borderRadius: 'var(--radius-md)',
                            border: '1.5px solid var(--color-border)',
                            fontFamily: 'var(--font-body)',
                            fontSize: 'var(--text-base)',
                            color: 'var(--color-text)',
                            background: '#fff',
                            outline: 'none',
                            boxSizing: 'border-box',
                          }}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="company"
                          style={{ display: 'block', fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)', fontWeight: 600, color: 'var(--color-text)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.06em' }}
                        >
                          Virksomhed
                        </label>
                        <input
                          id="company"
                          type="text"
                          value={form.company}
                          onChange={(e) => setForm({ ...form, company: e.target.value })}
                          placeholder="Virksomhedens navn"
                          style={{
                            width: '100%',
                            padding: '12px 16px',
                            borderRadius: 'var(--radius-md)',
                            border: '1.5px solid var(--color-border)',
                            fontFamily: 'var(--font-body)',
                            fontSize: 'var(--text-base)',
                            color: 'var(--color-text)',
                            background: '#fff',
                            outline: 'none',
                            boxSizing: 'border-box',
                          }}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="email"
                          style={{ display: 'block', fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)', fontWeight: 600, color: 'var(--color-text)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.06em' }}
                        >
                          Email *
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="din@email.dk"
                          style={{
                            width: '100%',
                            padding: '12px 16px',
                            borderRadius: 'var(--radius-md)',
                            border: '1.5px solid var(--color-border)',
                            fontFamily: 'var(--font-body)',
                            fontSize: 'var(--text-base)',
                            color: 'var(--color-text)',
                            background: '#fff',
                            outline: 'none',
                            boxSizing: 'border-box',
                          }}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          style={{ display: 'block', fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)', fontWeight: 600, color: 'var(--color-text)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.06em' }}
                        >
                          Telefon
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          placeholder="+45 00 00 00 00"
                          style={{
                            width: '100%',
                            padding: '12px 16px',
                            borderRadius: 'var(--radius-md)',
                            border: '1.5px solid var(--color-border)',
                            fontFamily: 'var(--font-body)',
                            fontSize: 'var(--text-base)',
                            color: 'var(--color-text)',
                            background: '#fff',
                            outline: 'none',
                            boxSizing: 'border-box',
                          }}
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        style={{ display: 'block', fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)', fontWeight: 600, color: 'var(--color-text)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.06em' }}
                      >
                        Besked
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Fortæl os gerne kort om din virksomhed og hvad du ønsker hjælp til..."
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          borderRadius: 'var(--radius-md)',
                          border: '1.5px solid var(--color-border)',
                          fontFamily: 'var(--font-body)',
                          fontSize: 'var(--text-base)',
                          color: 'var(--color-text)',
                          background: '#fff',
                          outline: 'none',
                          resize: 'vertical',
                          boxSizing: 'border-box',
                        }}
                      />
                    </div>

                    <button type="submit" className="btn-primary cta-trigger w-full" style={{ textAlign: 'center' }}>
                      {form.type === 'demo' ? 'Book gratis demo →' : 'Send besked →'}
                    </button>
                    <p style={{ color: 'var(--color-text-soft)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)', textAlign: 'center' }}>
                      Typisk svar inden for 24 timer · Ingen bindingsperiode
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* Contact info — 2/5 */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <div>
                <h3
                  className="font-bold mb-4"
                  style={{ fontFamily: 'var(--font-display)', color: 'var(--color-forest)', fontSize: 'var(--text-xl)' }}
                >
                  Kontaktoplysninger
                </h3>
                <div className="flex flex-col gap-4">
                  {[
                    { icon: '📧', label: 'Email', value: 'hej@bollo.dk', href: 'mailto:hej@bollo.dk' },
                    { icon: '📞', label: 'Telefon', value: '+45 00 00 00 00', href: 'tel:+4500000000' },
                    { icon: '⏰', label: 'Svartid', value: 'Inden for 24 timer på hverdage', href: null },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="card-icon flex-shrink-0">{item.icon}</div>
                      <div>
                        <div style={{ color: 'var(--color-text-soft)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600 }}>
                          {item.label}
                        </div>
                        {item.href ? (
                          <a
                            href={item.href}
                            style={{ color: 'var(--color-forest)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', fontWeight: 500, textDecoration: 'none' }}
                          >
                            {item.value}
                          </a>
                        ) : (
                          <span style={{ color: 'var(--color-text)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)' }}>
                            {item.value}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="rounded-xl p-6"
                style={{ background: 'var(--color-mint-light)', border: '1px solid rgba(109,203,160,0.3)' }}
              >
                <div style={{ fontSize: '2rem', marginBottom: '12px' }}>🎁</div>
                <h4
                  className="font-bold mb-2"
                  style={{ fontFamily: 'var(--font-body)', color: 'var(--color-forest)', fontSize: 'var(--text-md)' }}
                >
                  Gratis gennemgang
                </h4>
                <p style={{ color: 'var(--color-text-soft)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', lineHeight: 1.7 }}>
                  Alle nye kunder får en gratis analyse af deres nuværende anmeldelsesstatus — inkl. konkurrentsammenligning.
                </p>
              </div>

              <div
                className="rounded-xl p-6"
                style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border-mint)' }}
              >
                <div style={{ fontSize: '2rem', marginBottom: '12px' }}>🚀</div>
                <h4
                  className="font-bold mb-2"
                  style={{ fontFamily: 'var(--font-body)', color: 'var(--color-forest)', fontSize: 'var(--text-md)' }}
                >
                  Hurtig opstart
                </h4>
                <p style={{ color: 'var(--color-text-soft)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', lineHeight: 1.7 }}>
                  De fleste kunder er i gang inden for 48 timer efter første møde. Vi gør processen så nem som muligt.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-6" style={{ background: 'var(--color-surface)' }}>
          <div style={{ maxWidth: '760px', margin: '0 auto' }}>
            <div className="text-center mb-14">
              <span className="section-tag">FAQ</span>
              <h2 className="section-h2 mt-3">Ofte stillede spørgsmål</h2>
            </div>
            <div className="flex flex-col gap-3">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="rounded-xl overflow-hidden"
                  style={{ border: '1px solid var(--color-border-mint)' }}
                >
                  <button
                    className="w-full text-left px-6 py-5 flex items-center justify-between"
                    style={{
                      background: openFaq === i ? 'var(--color-mint-light)' : 'var(--color-surface)',
                      cursor: 'pointer',
                      fontFamily: 'var(--font-body)',
                      fontSize: 'var(--text-base)',
                      fontWeight: 600,
                      color: 'var(--color-forest)',
                      border: 'none',
                      borderRadius: 0,
                    }}
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    {faq.q}
                    <span
                      style={{
                        color: 'var(--color-mint)',
                        fontSize: '1.4rem',
                        lineHeight: 1,
                        transform: openFaq === i ? 'rotate(45deg)' : 'none',
                        transition: 'transform 0.2s ease',
                        flexShrink: 0,
                        marginLeft: '12px',
                      }}
                    >
                      +
                    </span>
                  </button>
                  {openFaq === i && (
                    <div
                      className="px-6 pb-5"
                      style={{ background: 'var(--color-mint-light)', borderTop: '1px solid rgba(109,203,160,0.2)' }}
                    >
                      <p style={{ color: 'var(--color-text)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', lineHeight: 1.8, paddingTop: '12px' }}>
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Mascot />
    </>
  )
}
