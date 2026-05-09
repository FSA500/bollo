export default function Footer() {
  return (
    <footer className="bg-forest-deep text-white/60 py-12 px-6 md:px-12">
      <div className="max-w-[1100px] mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-3">
              <div
                className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'var(--color-coral)' }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M12 2L13.8 10.2L22 12L13.8 13.8L12 22L10.2 13.8L2 12L10.2 10.2Z"
                    fill="white"
                  />
                </svg>
              </div>
              <span className="font-display font-black text-xl text-white tracking-tight">
                Bollo
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Professionel Reputation Management på Trustpilot, Google Maps og TripAdvisor
              — så du kan fokusere på din drift.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white text-sm font-bold mb-4">Ydelser</h4>
            <ul className="flex flex-col gap-2 text-sm">
              <li><a href="/reputation-management"     className="hover:text-white transition-colors">Reputation Management</a></li>
              <li><a href="/ai-synlighed"              className="hover:text-white transition-colors">AI-synlighed</a></li>
              <li><a href="/anmeldelseshaandtering"    className="hover:text-white transition-colors">Anmeldelseshåndtering</a></li>
              <li><a href="/google-maps-optimering"    className="hover:text-white transition-colors">Google Maps optimering</a></li>
              <li><a href="/trustpilot-haandtering"    className="hover:text-white transition-colors">Trustpilot håndtering</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-sm font-bold mb-4">Kontakt</h4>
            <ul className="flex flex-col gap-2 text-sm">
              <li><a href="mailto:hej@bollo.dk"  className="hover:text-white transition-colors">hej@bollo.dk</a></li>
              <li><a href="tel:+4500000000"       className="hover:text-white transition-colors">+45 00 00 00 00</a></li>
              <li><a href="/kontakt"              className="hover:text-white transition-colors">Book en demo</a></li>
              <li><a href="/om-bollo"             className="hover:text-white transition-colors">Om Bollo</a></li>
              <li><a href="/cases"                className="hover:text-white transition-colors">Cases</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs">
          <span>© {new Date().getFullYear()} Bollo. Alle rettigheder forbeholdes.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privatlivspolitik</a>
            <a href="#" className="hover:text-white transition-colors">Cookiepolitik</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
