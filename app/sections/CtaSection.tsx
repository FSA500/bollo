export default function CtaSection() {
  return (
    <section id="kontakt" className="section-dark py-24 px-6 md:px-12 text-center">
      <div className="relative z-10 max-w-2xl mx-auto">

        <div className="section-tag-dark mx-auto mb-6" style={{ display: 'inline-block' }}>
          Kom i gang i dag
        </div>

        <h2
          className="font-display font-black text-white leading-tight tracking-tight mb-5"
          style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)' }}
        >
          Klar til et stærkere omdømme?
        </h2>

        <p className="text-white/88 text-lg leading-relaxed mb-10">
          Book en uforpligtende demo og se præcis, hvad Bollo kan gøre for din virksomhed.
          Ingen binding, ingen skjulte omkostninger.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a href="mailto:hej@bollo.dk" className="btn-primary cta-trigger text-base py-4 px-8">
            Book en gratis demo
          </a>
          <a href="tel:+4500000000" className="btn-secondary text-base py-4 px-8">
            Ring til os
          </a>
        </div>

        <p className="text-white/62 text-xs mt-8">
          Typisk svar inden for 24 timer · Ingen bindingsperiode
        </p>
      </div>
    </section>
  )
}
