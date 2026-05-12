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
          background: 'linear-gradient(135deg, #06071A 0%, var(--color-forest-deep) 50%, #0D1127 100%)',
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
          backgroundImage: 'radial-gradient(circle, rgba(40,231,196,0.08) 1px, transparent 1px)',
          backgroundSize: '38px 38px',
        }} />

        {/* Radial glow behind icon */}
        <div style={{
          position: 'absolute',
          width: '500px', height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(40,231,196,0.12) 0%, transparent 70%)',
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
            background: i % 2 === 0 ? '#06FF89' : 'var(--color-mint)',
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
            border: '2px solid rgba(40,231,196,0.25)',
            animation: 'intro-ring 3s ease-out 0.6s infinite',
            pointerEvents: 'none',
          }} />

          {/* Logo */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 16px',
            filter: 'drop-shadow(0 20px 50px rgba(40,231,196,0.30))',
            animation: 'intro-flip 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s both, intro-idle 4s ease-in-out 1s infinite',
          }}>
            <img
              src="/bollo-logo-white.png"
              alt="Bollo"
              style={{ width: '200px', height: 'auto' }}
            />
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
