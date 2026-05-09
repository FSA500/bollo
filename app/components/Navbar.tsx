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
        <a href="/" className="flex items-center gap-2">
          <svg width="30" height="30" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <rect x="2" y="2" width="28" height="18" rx="2.5" stroke="#FF6B6B" strokeWidth="1.8" strokeLinejoin="round"/>
            <rect x="14" y="20" width="4" height="3.5" fill="#FF6B6B" rx="0.5"/>
            <rect x="10" y="23.5" width="12" height="2" rx="1" fill="#FF6B6B"/>
            <polygon points="9,8.5 9.624,10.141 11.378,10.228 10.01,11.328 10.47,13.023 9,12.06 7.53,13.023 8.01,11.328 6.622,10.228 8.376,10.141" fill="#FF6B6B"/>
            <polygon points="16,8.5 16.624,10.141 18.378,10.228 17.01,11.328 17.47,13.023 16,12.06 14.53,13.023 15.01,11.328 13.622,10.228 15.376,10.141" fill="#FF6B6B"/>
            <polygon points="23,8.5 23.624,10.141 25.378,10.228 24.01,11.328 24.47,13.023 23,12.06 21.53,13.023 22.01,11.328 20.622,10.228 22.376,10.141" fill="#FF6B6B"/>
          </svg>
          <span
            className={`font-display font-black text-xl tracking-tight transition-colors duration-300 ${
              scrolled ? 'text-forest' : 'text-white'
            }`}
          >
            Bollo
          </span>
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
