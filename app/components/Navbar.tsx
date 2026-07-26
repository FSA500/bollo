'use client'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-void/90 backdrop-blur-xl border-b border-white/[0.07]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1100px] mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-[72px]">

        {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            src="/bollo-logo-white.png"
            alt="Bollo"
            className="h-8 w-auto"
          />
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-7 text-sm font-medium text-white/65">
          <a href="/reputation-management" className="hover:text-white transition-colors duration-200">Ydelser</a>
          <a href="/ai-synlighed"          className="hover:text-white transition-colors duration-200">AI-synlighed</a>
          <a href="/brancher"              className="hover:text-white transition-colors duration-200">Brancher</a>
          <a href="/om-bollo"              className="hover:text-white transition-colors duration-200">Om Bollo</a>
          <a href="/kontakt"               className="hover:text-white transition-colors duration-200">Kontakt</a>
        </div>

        {/* CTA */}
        <a
          href="/kontakt"
          className="btn-primary hidden md:inline-flex text-sm py-[10px] px-5 cta-trigger"
        >
          Book en demo
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
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
        <div className="md:hidden bg-void/98 backdrop-blur-xl border-t border-white/[0.07] px-6 py-5 flex flex-col gap-4 text-sm font-medium">
          <a href="/reputation-management" onClick={() => setMenuOpen(false)} className="text-white/65 hover:text-white transition-colors">Ydelser</a>
          <a href="/ai-synlighed"          onClick={() => setMenuOpen(false)} className="text-white/65 hover:text-white transition-colors">AI-synlighed</a>
          <a href="/brancher"              onClick={() => setMenuOpen(false)} className="text-white/65 hover:text-white transition-colors">Brancher</a>
          <a href="/om-bollo"              onClick={() => setMenuOpen(false)} className="text-white/65 hover:text-white transition-colors">Om Bollo</a>
          <a href="/kontakt"               onClick={() => setMenuOpen(false)} className="text-white/65 hover:text-white transition-colors">Kontakt</a>
          <a href="/kontakt"               onClick={() => setMenuOpen(false)} className="btn-primary text-center cta-trigger mt-2">
            Book en demo
          </a>
        </div>
      )}
    </nav>
  )
}
