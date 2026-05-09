export default function Footer() {
  return (
    <footer className="bg-forest-deep text-white/60 py-12 px-6 md:px-12">
      <div className="max-w-[1100px] mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <rect x="2" y="2" width="28" height="18" rx="2.5" stroke="#FF6B6B" strokeWidth="1.8" strokeLinejoin="round"/>
                <rect x="14" y="20" width="4" height="3.5" fill="#FF6B6B" rx="0.5"/>
                <rect x="10" y="23.5" width="12" height="2" rx="1" fill="#FF6B6B"/>
                <polygon points="9,8.5 9.624,10.141 11.378,10.228 10.01,11.328 10.47,13.023 9,12.06 7.53,13.023 8.01,11.328 6.622,10.228 8.376,10.141" fill="#FF6B6B"/>
                <polygon points="16,8.5 16.624,10.141 18.378,10.228 17.01,11.328 17.47,13.023 16,12.06 14.53,13.023 15.01,11.328 13.622,10.228 15.376,10.141" fill="#FF6B6B"/>
                <polygon points="23,8.5 23.624,10.141 25.378,10.228 24.01,11.328 24.47,13.023 23,12.06 21.53,13.023 22.01,11.328 20.622,10.228 22.376,10.141" fill="#FF6B6B"/>
              </svg>
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
