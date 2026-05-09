'use client'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bollo-bg/90 backdrop-blur-md border-b border-mint/20 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1100px] mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">

        {/* Logo */}
        <a href="/" className="flex items-center">
          <svg width="96" height="66" viewBox="0 0 320 220" fill="none" aria-hidden="true">
            <defs>
              <linearGradient id="n-sg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#0f2d26"/><stop offset="100%" stopColor="#1a3d35"/></linearGradient>
              <linearGradient id="n-lg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#3a7a65"/><stop offset="100%" stopColor="#1a3d35"/></linearGradient>
              <linearGradient id="n-bt" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4aaa80"/><stop offset="100%" stopColor="#2d7a5a"/></linearGradient>
              <radialGradient id="n-sh" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="rgba(0,0,0,0.18)"/><stop offset="100%" stopColor="rgba(0,0,0,0)"/></radialGradient>
              <linearGradient id="n-shine" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="rgba(255,255,255,0.08)"/><stop offset="100%" stopColor="rgba(255,255,255,0)"/></linearGradient>
              <filter id="n-glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="1.5" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
            </defs>
            <ellipse cx="160" cy="205" rx="100" ry="10" fill="url(#n-sh)"/>
            <path d="M 62 148 L 258 148 L 270 162 L 50 162 Z" fill="url(#n-bt)"/>
            <path d="M 50 162 L 270 162 L 270 172 L 50 172 Z" fill="#2a6a50"/>
            <path d="M 50 162 L 62 148 L 62 158 L 50 172 Z" fill="#1a5040"/>
            <path d="M 270 162 L 258 148 L 258 158 L 270 172 Z" fill="#1a4a32"/>
            <rect x="138" y="150" width="44" height="6" rx="3" fill="rgba(0,0,0,0.2)"/>
            <rect x="82" y="152" width="156" height="2" rx="1" fill="rgba(0,0,0,0.15)"/>
            <path d="M 68 48 L 252 48 L 258 54 L 62 54 Z" fill="#0f2820"/>
            <path d="M 62 54 L 258 54 L 258 148 L 62 148 Z" fill="url(#n-lg)"/>
            <path d="M 62 54 L 68 48 L 68 142 L 62 148 Z" fill="#0a2018"/>
            <path d="M 258 54 L 252 48 L 252 142 L 258 148 Z" fill="#0a2018"/>
            <rect x="72" y="58" width="176" height="84" rx="4" fill="url(#n-sg)"/>
            <rect x="72" y="58" width="176" height="40" rx="4" fill="url(#n-shine)"/>
            <rect x="72" y="58" width="176" height="84" rx="4" fill="none" stroke="rgba(109,203,160,0.3)" strokeWidth="1"/>
            <circle cx="160" cy="55" r="2" fill="#0a2018"/>
            <circle cx="160" cy="55" r="1" fill="#6DCBA0" opacity="0.6"/>
            <text x="160" y="103" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="32" fontWeight="900" fill="#ffffff" textAnchor="middle" letterSpacing="-1">Boll<tspan fill="#6DCBA0">o</tspan></text>
            <g filter="url(#n-glow)" transform="translate(34,32)"><polygon points="0,-13 3,-5 12,-5 5,1 8,10 0,4 -8,10 -5,1 -12,-5 -3,-5" fill="#F5C518"/></g>
            <g filter="url(#n-glow)" transform="translate(286,28)"><polygon points="0,-14 3.5,-5.5 13,-5.5 5.5,1 8.5,11 0,5 -8.5,11 -5.5,1 -13,-5.5 -3.5,-5.5" fill="#F5C518"/></g>
            <g filter="url(#n-glow)" transform="translate(20,90) scale(0.7)"><polygon points="0,-13 3,-5 12,-5 5,1 8,10 0,4 -8,10 -5,1 -12,-5 -3,-5" fill="#F5C518"/></g>
            <g filter="url(#n-glow)" transform="translate(300,85) scale(0.65)"><polygon points="0,-13 3,-5 12,-5 5,1 8,10 0,4 -8,10 -5,1 -12,-5 -3,-5" fill="#F5C518"/></g>
            <circle cx="52" cy="22" r="2.5" fill="#FFD700" opacity="0.7"/>
            <circle cx="270" cy="12" r="2" fill="#FFD700" opacity="0.6"/>
          </svg>
        </a>

        {/* Desktop nav links */}
        <div className={`hidden md:flex items-center gap-8 text-sm font-medium transition-colors duration-300 ${
          scrolled ? 'text-bollo-text-soft' : 'text-white/80'
        }`}>
          <a href="/reputation-management" className={`transition-colors ${scrolled ? 'hover:text-forest' : 'hover:text-white'}`}>Ydelser</a>
          <a href="/ai-synlighed"          className={`transition-colors ${scrolled ? 'hover:text-forest' : 'hover:text-white'}`}>AI-synlighed</a>
          <a href="/brancher"              className={`transition-colors ${scrolled ? 'hover:text-forest' : 'hover:text-white'}`}>Brancher</a>
          <a href="/om-bollo"              className={`transition-colors ${scrolled ? 'hover:text-forest' : 'hover:text-white'}`}>Om Bollo</a>
          <a href="/kontakt"               className={`transition-colors ${scrolled ? 'hover:text-forest' : 'hover:text-white'}`}>Kontakt</a>
        </div>

        {/* CTA */}
        <a href="/kontakt" className="btn-primary hidden md:inline-flex text-sm py-3 px-6 cta-trigger">
          Book en demo
        </a>

        {/* Mobile menu button */}
        <button
          className={`md:hidden p-2 transition-colors duration-300 ${scrolled ? 'text-forest' : 'text-white'}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-bollo-bg border-t border-mint/20 px-6 py-4 flex flex-col gap-4 text-sm font-medium text-bollo-text-soft">
          <a href="/reputation-management" onClick={() => setMenuOpen(false)} className="hover:text-forest">Ydelser</a>
          <a href="/ai-synlighed"          onClick={() => setMenuOpen(false)} className="hover:text-forest">AI-synlighed</a>
          <a href="/brancher"              onClick={() => setMenuOpen(false)} className="hover:text-forest">Brancher</a>
          <a href="/om-bollo"              onClick={() => setMenuOpen(false)} className="hover:text-forest">Om Bollo</a>
          <a href="/kontakt"               onClick={() => setMenuOpen(false)} className="hover:text-forest">Kontakt</a>
          <a href="/kontakt"               onClick={() => setMenuOpen(false)} className="btn-primary text-center cta-trigger">
            Book en demo
          </a>
        </div>
      )}
    </nav>
  )
}
