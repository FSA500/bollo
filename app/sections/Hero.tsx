export default function Hero() {
  return (
    <section className="section-dark min-h-screen flex items-center pt-20 pb-16 px-6 md:px-12">
      <div className="relative z-10 max-w-[1100px] mx-auto w-full">

        <div className="max-w-2xl">
          {/* Tag */}
          <div className="section-tag-dark mb-6">
            ⭐ Reputation Management
          </div>

          {/* Headline */}
          <h1
            className="font-display font-black text-white leading-[1.1] tracking-tight mb-6"
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}
          >
            Få flere anmeldelser,<br />
            bedre omdømme og<br />
            synlighed i{' '}
            <em className="not-italic text-mint">AI-søgninger</em>
          </h1>

          {/* Subtext */}
          <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-xl">
            Bollo hjælper virksomheder med professionel Reputation Management på
            Trustpilot, Google Maps og TripAdvisor — så du kan fokusere på din drift,
            mens vi sikrer et stærkere omdømme.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 items-center mb-14">
            <a href="#kontakt" className="btn-primary cta-trigger">
              Book en demo
            </a>
            <a href="#hvordan" className="btn-secondary">
              Se hvordan det virker →
            </a>
          </div>

          {/* Stats bar */}
          <div className="grid grid-cols-3 divide-x divide-mint/20 border border-mint/20 rounded-2xl overflow-hidden bg-white/5 max-w-lg">
            <div className="px-6 py-5 text-center">
              <div className="font-display font-black text-mint text-2xl">Top 5</div>
              <div className="text-white/50 text-xs mt-1 leading-tight">Google Maps<br />efter 6 mdr.</div>
            </div>
            <div className="px-6 py-5 text-center">
              <div className="font-display font-black text-mint text-2xl">3x</div>
              <div className="text-white/50 text-xs mt-1 leading-tight">Flere<br />anmeldelser</div>
            </div>
            <div className="px-6 py-5 text-center">
              <div className="font-display font-black text-mint text-2xl">24/7</div>
              <div className="text-white/50 text-xs mt-1 leading-tight">Professionelle<br />svar</div>
            </div>
          </div>

          {/* Platform logos text */}
          <p className="text-white/40 text-xs mt-6 tracking-wide uppercase">
            Vi arbejder på · Google Maps · Trustpilot · TripAdvisor
          </p>
        </div>
      </div>
    </section>
  )
}
