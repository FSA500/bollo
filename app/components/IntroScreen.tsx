'use client'
import { useState, useEffect } from 'react'

export default function IntroScreen() {
  const [phase, setPhase] = useState<'show' | 'exit' | 'done'>('show')

  useEffect(() => {
    if (sessionStorage.getItem('bollo-intro')) {
      setPhase('done')
      return
    }
    sessionStorage.setItem('bollo-intro', '1')

    const t1 = setTimeout(() => setPhase('exit'), 2500)
    const t2 = setTimeout(() => setPhase('done'), 3300)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  if (phase === 'done') return null

  return (
    <>
      <style>{`
        @keyframes intro-flip {
          0%   { transform: perspective(900px) rotateY(-90deg) scale(0.5); opacity: 0; }
          55%  { transform: perspective(900px) rotateY(12deg)  scale(1.1); opacity: 1; }
          75%  { transform: perspective(900px) rotateY(-4deg)  scale(1);   opacity: 1; }
          100% { transform: perspective(900px) rotateY(0deg)   scale(1);   opacity: 1; }
        }
        @keyframes intro-idle {
          0%, 100% { transform: perspective(900px) rotateY(0deg)  rotateZ(0deg)  scale(1);    }
          33%       { transform: perspective(900px) rotateY(8deg)  rotateZ(3deg)  scale(1.03); }
          66%       { transform: perspective(900px) rotateY(-5deg) rotateZ(-2deg) scale(0.98); }
        }
        @keyframes intro-rise {
          0%   { transform: perspective(600px) translateY(32px) translateZ(-40px); opacity: 0; }
          100% { transform: perspective(600px) translateY(0)    translateZ(0);     opacity: 1; }
        }
        @keyframes intro-tag {
          0%   { opacity: 0; letter-spacing: 0.4em; }
          100% { opacity: 1; letter-spacing: 0.22em; }
        }
        @keyframes intro-dot {
          0%, 80%, 100% { transform: scale(0.5); opacity: 0.25; }
          40%            { transform: scale(1);   opacity: 1; }
        }
        @keyframes intro-particle {
          0%   { transform: translateY(0)     scale(0);   opacity: 0; }
          15%  { opacity: 0.7; }
          100% { transform: translateY(-240px) scale(1.3); opacity: 0; }
        }
        @keyframes intro-exit {
          0%   { transform: translateY(0)   opacity: 1; }
          100% { transform: translateY(-70px); opacity: 0; }
        }
        @keyframes intro-ring {
          0%   { transform: scale(0.6); opacity: 0; }
          60%  { transform: scale(1.3); opacity: 0.2; }
          100% { transform: scale(1.7); opacity: 0; }
        }
      `}</style>

      {/* Backdrop */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          background: 'linear-gradient(135deg, #0a2019 0%, var(--color-forest-deep) 50%, #0f2d26 100%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          animation: phase === 'exit' ? 'intro-exit 1.8s cubic-bezier(0.4, 0, 1, 1) forwards' : 'none',
        }}
      >
        {/* Dot grid */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: 'radial-gradient(circle, rgba(109,203,160,0.10) 1px, transparent 1px)',
          backgroundSize: '38px 38px',
        }} />

        {/* Radial glow behind icon */}
        <div style={{
          position: 'absolute',
          width: '500px', height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(74,170,128,0.10) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        {/* Floating particles */}
        {[...Array(10)].map((_, i) => (
          <div key={i} style={{
            position: 'absolute',
            bottom: '8%',
            left: `${6 + i * 9}%`,
            width:  i % 3 === 0 ? '7px' : '4px',
            height: i % 3 === 0 ? '7px' : '4px',
            borderRadius: '50%',
            background: i % 2 === 0 ? '#F5C518' : 'var(--color-mint)',
            opacity: 0,
            animation: `intro-particle ${5 + i * 0.5}s ease-out ${0.6 + i * 0.35}s forwards`,
          }} />
        ))}

        {/* Main content */}
        <div style={{ position: 'relative', textAlign: 'center', zIndex: 10 }}>

          {/* Pulse ring behind icon */}
          <div style={{
            position: 'absolute',
            top: '50%', left: '50%',
            transform: 'translate(-50%, -60%)',
            width: '300px', height: '200px',
            borderRadius: '50%',
            border: '2px solid rgba(109,203,160,0.25)',
            animation: 'intro-ring 3s ease-out 0.6s infinite',
            pointerEvents: 'none',
          }} />

          {/* 3D Laptop Icon */}
          <div style={{
            width: '280px', height: '193px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 16px',
            filter: 'drop-shadow(0 20px 50px rgba(74,170,128,0.35))',
            animation: 'intro-flip 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s both, intro-idle 4s ease-in-out 1s infinite',
          }}>
            <svg width="280" height="193" viewBox="0 0 320 220" fill="none" aria-hidden="true">
              <defs>
                <linearGradient id="i-sg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#0f2d26"/><stop offset="100%" stopColor="#1a3d35"/></linearGradient>
                <linearGradient id="i-lg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#3a7a65"/><stop offset="100%" stopColor="#1a3d35"/></linearGradient>
                <linearGradient id="i-bt" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4aaa80"/><stop offset="100%" stopColor="#2d7a5a"/></linearGradient>
                <linearGradient id="i-bf" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#3a8a6a"/><stop offset="100%" stopColor="#1a5a40"/></linearGradient>
                <radialGradient id="i-sh" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="rgba(0,0,0,0.18)"/><stop offset="100%" stopColor="rgba(0,0,0,0)"/></radialGradient>
                <linearGradient id="i-shine" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="rgba(255,255,255,0.08)"/><stop offset="100%" stopColor="rgba(255,255,255,0)"/></linearGradient>
                <filter id="i-glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="2" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
                <filter id="i-shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="rgba(0,0,0,0.18)"/></filter>
              </defs>
              <ellipse cx="160" cy="205" rx="100" ry="10" fill="url(#i-sh)"/>
              <path d="M 62 148 L 258 148 L 270 162 L 50 162 Z" fill="url(#i-bt)"/>
              <path d="M 50 162 L 270 162 L 270 172 L 50 172 Z" fill="url(#i-bf)"/>
              <path d="M 50 162 L 62 148 L 62 158 L 50 172 Z" fill="#1a5a40"/>
              <path d="M 270 162 L 258 148 L 258 158 L 270 172 Z" fill="#1a4a32"/>
              <rect x="82" y="152" width="156" height="2" rx="1" fill="rgba(0,0,0,0.15)"/>
              <rect x="88" y="156" width="144" height="2" rx="1" fill="rgba(0,0,0,0.12)"/>
              <rect x="138" y="150" width="44" height="6" rx="3" fill="rgba(0,0,0,0.2)"/>
              <path d="M 68 48 L 252 48 L 258 54 L 62 54 Z" fill="#0f2820"/>
              <path d="M 62 54 L 258 54 L 258 148 L 62 148 Z" fill="url(#i-lg)" filter="url(#i-shadow)"/>
              <path d="M 62 54 L 68 48 L 68 142 L 62 148 Z" fill="#0a2018"/>
              <path d="M 258 54 L 252 48 L 252 142 L 258 148 Z" fill="#0a2018"/>
              <rect x="72" y="58" width="176" height="84" rx="4" fill="url(#i-sg)"/>
              <rect x="72" y="58" width="176" height="40" rx="4" fill="url(#i-shine)"/>
              <rect x="72" y="58" width="176" height="84" rx="4" fill="none" stroke="rgba(109,203,160,0.3)" strokeWidth="1"/>
              <circle cx="160" cy="55" r="2" fill="#0a2018"/>
              <circle cx="160" cy="55" r="1" fill="#6DCBA0" opacity="0.6"/>
              <text x="160" y="95" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="28" fontWeight="900" fill="#ffffff" textAnchor="middle" letterSpacing="-1">Boll<tspan fill="#6DCBA0">o</tspan></text>
              <text x="160" y="112" fontFamily="'DM Sans', sans-serif" fontSize="7" fontWeight="600" fill="rgba(109,203,160,0.8)" textAnchor="middle" letterSpacing="1.5">REPUTATION MANAGEMENT</text>
              <rect x="176" y="85" width="2" height="14" rx="1" fill="#6DCBA0" opacity="0.7"/>
              <g filter="url(#i-glow)" transform="translate(34,32)"><polygon points="0,-13 3,-5 12,-5 5,1 8,10 0,4 -8,10 -5,1 -12,-5 -3,-5" fill="#F5C518"/><polygon points="0,-9 2,-3 8,-3 3,1 5,7 0,3 -5,7 -3,1 -8,-3 -2,-3" fill="#FFD700" opacity="0.6"/></g>
              <g filter="url(#i-glow)" transform="translate(286,28)"><polygon points="0,-14 3.5,-5.5 13,-5.5 5.5,1 8.5,11 0,5 -8.5,11 -5.5,1 -13,-5.5 -3.5,-5.5" fill="#F5C518"/><polygon points="0,-9 2,-3 8,-3 3,1 5,7 0,3 -5,7 -3,1 -8,-3 -2,-3" fill="#FFD700" opacity="0.6"/></g>
              <g filter="url(#i-glow)" transform="translate(20,90) scale(0.7)"><polygon points="0,-13 3,-5 12,-5 5,1 8,10 0,4 -8,10 -5,1 -12,-5 -3,-5" fill="#F5C518"/></g>
              <g filter="url(#i-glow)" transform="translate(300,85) scale(0.65)"><polygon points="0,-13 3,-5 12,-5 5,1 8,10 0,4 -8,10 -5,1 -12,-5 -3,-5" fill="#F5C518"/></g>
              <g filter="url(#i-glow)" transform="translate(90,18) scale(0.5)"><polygon points="0,-13 3,-5 12,-5 5,1 8,10 0,4 -8,10 -5,1 -12,-5 -3,-5" fill="#FFD700"/></g>
              <g filter="url(#i-glow)" transform="translate(230,15) scale(0.5)"><polygon points="0,-13 3,-5 12,-5 5,1 8,10 0,4 -8,10 -5,1 -12,-5 -3,-5" fill="#FFD700"/></g>
              <g filter="url(#i-glow)" transform="translate(160,10) scale(0.4)"><polygon points="0,-13 3,-5 12,-5 5,1 8,10 0,4 -8,10 -5,1 -12,-5 -3,-5" fill="#F5C518" opacity="0.8"/></g>
              <circle cx="52" cy="22" r="2.5" fill="#FFD700" opacity="0.7" filter="url(#i-glow)"/>
              <circle cx="270" cy="12" r="2" fill="#FFD700" opacity="0.6" filter="url(#i-glow)"/>
              <circle cx="14" cy="58" r="1.5" fill="#F5C518" opacity="0.5"/>
              <circle cx="306" cy="55" r="2" fill="#FFD700" opacity="0.55" filter="url(#i-glow)"/>
              <circle cx="130" cy="8" r="1.5" fill="#FFD700" opacity="0.5"/>
              <circle cx="192" cy="6" r="1.8" fill="#F5C518" opacity="0.55"/>
            </svg>
          </div>

          {/* Loading dots */}
          <div style={{
            display: 'flex', gap: '9px',
            justifyContent: 'center',
            marginTop: '40px',
          }}>
            {[0, 1, 2].map(i => (
              <div key={i} style={{
                width: '7px', height: '7px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.35)',
                animation: `intro-dot 0.8s ease-in-out ${1.6 + i * 0.15}s infinite`,
              }} />
            ))}
          </div>

        </div>
      </div>
    </>
  )
}
