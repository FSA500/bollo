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
          33%       { transform: perspective(900px) rotateY(10deg) rotateZ(6deg)  scale(1.05); }
          66%       { transform: perspective(900px) rotateY(-6deg) rotateZ(-4deg) scale(0.97); }
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
          60%  { transform: scale(1.3); opacity: 0.25; }
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
          width: '400px', height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,107,107,0.12) 0%, transparent 70%)',
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
            background: i % 2 === 0 ? 'var(--color-coral)' : 'var(--color-mint)',
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
            transform: 'translate(-50%, -80%)',
            width: '130px', height: '130px',
            borderRadius: '50%',
            border: '2px solid rgba(255,107,107,0.35)',
            animation: 'intro-ring 3s ease-out 0.6s infinite',
            pointerEvents: 'none',
          }} />

          {/* 3D Icon */}
          <div style={{
            width: '100px', height: '100px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 32px',
            filter: 'drop-shadow(0 16px 40px rgba(255,107,107,0.5))',
            animation: 'intro-flip 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s both, intro-idle 4s ease-in-out 1s infinite',
          }}>
            <svg width="80" height="80" viewBox="0 0 32 32" fill="none" aria-hidden="true">
              <rect x="2" y="2" width="28" height="18" rx="2.5" stroke="#FF6B6B" strokeWidth="1.8" strokeLinejoin="round"/>
              <rect x="14" y="20" width="4" height="3.5" fill="#FF6B6B" rx="0.5"/>
              <rect x="10" y="23.5" width="12" height="2" rx="1" fill="#FF6B6B"/>
              <polygon points="9,8.5 9.624,10.141 11.378,10.228 10.01,11.328 10.47,13.023 9,12.06 7.53,13.023 8.01,11.328 6.622,10.228 8.376,10.141" fill="#FF6B6B"/>
              <polygon points="16,8.5 16.624,10.141 18.378,10.228 17.01,11.328 17.47,13.023 16,12.06 14.53,13.023 15.01,11.328 13.622,10.228 15.376,10.141" fill="#FF6B6B"/>
              <polygon points="23,8.5 23.624,10.141 25.378,10.228 24.01,11.328 24.47,13.023 23,12.06 21.53,13.023 22.01,11.328 20.622,10.228 22.376,10.141" fill="#FF6B6B"/>
            </svg>
          </div>

          {/* Wordmark */}
          <div style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: 'clamp(2.8rem, 9vw, 4.5rem)',
            color: '#fff',
            letterSpacing: '-0.03em',
            lineHeight: 1,
            animation: 'intro-rise 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.7s both',
          }}>
            Bollo
          </div>

          {/* Tagline */}
          <div style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 500,
            fontSize: '0.72rem',
            color: 'var(--color-mint)',
            textTransform: 'uppercase',
            letterSpacing: '0.22em',
            marginTop: '16px',
            animation: 'intro-tag 0.6s ease-out 1.2s both',
          }}>
            Reputation Management
          </div>

          {/* Loading dots */}
          <div style={{
            display: 'flex', gap: '9px',
            justifyContent: 'center',
            marginTop: '52px',
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
