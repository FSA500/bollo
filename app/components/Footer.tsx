export default function Footer() {
  return (
    <footer className="bg-forest-deep text-white/60 py-12 px-6 md:px-12">
      <div className="max-w-[1100px] mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-3">
              <svg width="80" height="55" viewBox="0 0 320 220" fill="none" aria-hidden="true">
                <defs>
                  <linearGradient id="f-sg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#0f2d26"/><stop offset="100%" stopColor="#1a3d35"/></linearGradient>
                  <linearGradient id="f-lg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#3a7a65"/><stop offset="100%" stopColor="#1a3d35"/></linearGradient>
                  <linearGradient id="f-bt" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4aaa80"/><stop offset="100%" stopColor="#2d7a5a"/></linearGradient>
                  <radialGradient id="f-sh" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="rgba(0,0,0,0.18)"/><stop offset="100%" stopColor="rgba(0,0,0,0)"/></radialGradient>
                  <linearGradient id="f-shine" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="rgba(255,255,255,0.08)"/><stop offset="100%" stopColor="rgba(255,255,255,0)"/></linearGradient>
                  <filter id="f-glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="1.5" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
                </defs>
                <ellipse cx="160" cy="205" rx="100" ry="10" fill="url(#f-sh)"/>
                <path d="M 62 148 L 258 148 L 270 162 L 50 162 Z" fill="url(#f-bt)"/>
                <path d="M 50 162 L 270 162 L 270 172 L 50 172 Z" fill="#2a6a50"/>
                <path d="M 50 162 L 62 148 L 62 158 L 50 172 Z" fill="#1a5040"/>
                <path d="M 270 162 L 258 148 L 258 158 L 270 172 Z" fill="#1a4a32"/>
                <rect x="138" y="150" width="44" height="6" rx="3" fill="rgba(0,0,0,0.2)"/>
                <rect x="82" y="152" width="156" height="2" rx="1" fill="rgba(0,0,0,0.15)"/>
                <path d="M 68 48 L 252 48 L 258 54 L 62 54 Z" fill="#0f2820"/>
                <path d="M 62 54 L 258 54 L 258 148 L 62 148 Z" fill="url(#f-lg)"/>
                <path d="M 62 54 L 68 48 L 68 142 L 62 148 Z" fill="#0a2018"/>
                <path d="M 258 54 L 252 48 L 252 142 L 258 148 Z" fill="#0a2018"/>
                <rect x="72" y="58" width="176" height="84" rx="4" fill="url(#f-sg)"/>
                <rect x="72" y="58" width="176" height="40" rx="4" fill="url(#f-shine)"/>
                <rect x="72" y="58" width="176" height="84" rx="4" fill="none" stroke="rgba(109,203,160,0.3)" strokeWidth="1"/>
                <circle cx="160" cy="55" r="2" fill="#0a2018"/>
                <circle cx="160" cy="55" r="1" fill="#6DCBA0" opacity="0.6"/>
                <text x="160" y="103" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="32" fontWeight="900" fill="#ffffff" textAnchor="middle" letterSpacing="-1">Boll<tspan fill="#6DCBA0">o</tspan></text>
                <g filter="url(#f-glow)" transform="translate(34,32)"><polygon points="0,-13 3,-5 12,-5 5,1 8,10 0,4 -8,10 -5,1 -12,-5 -3,-5" fill="#F5C518"/></g>
                <g filter="url(#f-glow)" transform="translate(286,28)"><polygon points="0,-14 3.5,-5.5 13,-5.5 5.5,1 8.5,11 0,5 -8.5,11 -5.5,1 -13,-5.5 -3.5,-5.5" fill="#F5C518"/></g>
                <g filter="url(#f-glow)" transform="translate(20,90) scale(0.7)"><polygon points="0,-13 3,-5 12,-5 5,1 8,10 0,4 -8,10 -5,1 -12,-5 -3,-5" fill="#F5C518"/></g>
                <g filter="url(#f-glow)" transform="translate(300,85) scale(0.65)"><polygon points="0,-13 3,-5 12,-5 5,1 8,10 0,4 -8,10 -5,1 -12,-5 -3,-5" fill="#F5C518"/></g>
                <circle cx="52" cy="22" r="2.5" fill="#FFD700" opacity="0.7"/>
                <circle cx="270" cy="12" r="2" fill="#FFD700" opacity="0.6"/>
              </svg>
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
