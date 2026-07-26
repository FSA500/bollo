'use client'

import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

/* ── Review data cycling inside the demo ─────────────────────── */
const demoReviews = [
  {
    platform: 'Google Maps', dot: '#4285F4', stars: 5,
    reviewer: 'Mette J.', initial: 'MJ', initBg: '#1a3a6e',
    category: 'Restaurant',
    text: 'Virkelig god mad og super hyggelig stemning. Vi kommer absolut tilbage!',
    response: 'Tusind tak, Mette! Det varmer vores hjerter. Vi ses snart igen!',
    time: '2 min. siden',
  },
  {
    platform: 'Trustpilot', dot: '#00B67A', stars: 4,
    reviewer: 'Thomas K.', initial: 'TK', initBg: '#0a4a2e',
    category: 'Webshop',
    text: 'Hurtig levering og god kvalitet. Lidt svær hjemmeside men god service.',
    response: 'Tak, Thomas! Vi arbejder på hjemmesiden. Godt du oplevede vores service!',
    time: '8 min. siden',
  },
  {
    platform: 'TripAdvisor', dot: '#34A853', stars: 3,
    reviewer: 'Lars P.', initial: 'LP', initBg: '#1a4a28',
    category: 'Hotel',
    text: 'Fint hotel generelt, men badet havde problemer den første nat.',
    response: 'Beklager, Lars! Vi har løst problemet. Kom gerne igen for en bedre oplevelse.',
    time: '15 min. siden',
  },
  {
    platform: 'Google Maps', dot: '#4285F4', stars: 5,
    reviewer: 'Emma R.', initial: 'ER', initBg: '#1a3a6e',
    category: 'Klinik',
    text: 'Utrolig professionel behandling. Følte mig helt tryg fra start til slut.',
    response: 'Mange tak, Emma! Din tryghed er vores vigtigste prioritet. Velkommen igen!',
    time: '22 min. siden',
  },
]

/* ── Stat pills shown in sidebar ─────────────────────────────── */
const sideStats = [
  { label: 'Gns. rating', value: '4.8★', color: '#FACC15' },
  { label: 'Besvaret i dag', value: '12', color: '#28E7C4' },
  { label: 'Svartid', value: '4 min', color: '#7C5AF8' },
]

/* ── Helper: filled star SVG ─────────────────────────────────── */
function Star({ filled }: { filled: boolean }) {
  return (
    <svg viewBox="0 0 24 24" style={{ width: 11, height: 11, flexShrink: 0 }} fill={filled ? '#FACC15' : 'rgba(255,255,255,0.12)'} stroke="none">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

/* ── The animated demo screen ────────────────────────────────── */
function DemoScreen() {
  const [idx,        setIdx]       = useState(0)
  const [phase,      setPhase]     = useState<'reading' | 'typing' | 'done'>('reading')
  const [typed,      setTyped]     = useState('')
  const [showCursor, setShowCursor]= useState(false)
  const [notif,      setNotif]     = useState(3)

  const r = demoReviews[idx]

  /* Main cycle: read → typing dots → typewriter → pause → next */
  useEffect(() => {
    let t1: ReturnType<typeof setTimeout>
    let t2: ReturnType<typeof setTimeout>
    let t3: ReturnType<typeof setTimeout>
    let iv: ReturnType<typeof setInterval> | null = null

    setTyped('')
    setPhase('reading')
    setShowCursor(false)

    t1 = setTimeout(() => {
      setPhase('typing')
      setShowCursor(true)
      let i = 0
      const resp = r.response
      iv = setInterval(() => {
        setTyped(resp.slice(0, ++i))
        if (i >= resp.length) {
          clearInterval(iv!)
          setPhase('done')
          setShowCursor(false)
          t2 = setTimeout(() => {
            setNotif(n => n + 1)
            t3 = setTimeout(() => {
              setIdx(x => (x + 1) % demoReviews.length)
            }, 800)
          }, 2200)
        }
      }, 28)
    }, 1800)

    return () => {
      clearTimeout(t1); clearTimeout(t2); clearTimeout(t3)
      if (iv) clearInterval(iv)
    }
  }, [idx])

  return (
    <div style={{ display: 'flex', height: '100%', background: '#04080F', fontFamily: 'var(--font-body)' }}>

      {/* ── Sidebar ── */}
      <div style={{
        width: 200, flexShrink: 0,
        borderRight: '1px solid rgba(255,255,255,0.06)',
        display: 'flex', flexDirection: 'column',
        padding: '16px 0',
      }}>
        {/* Logo row */}
        <div style={{ padding: '0 14px 14px', borderBottom: '1px solid rgba(255,255,255,0.06)', marginBottom: 14 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 24, height: 24, borderRadius: 6, background: 'linear-gradient(135deg,#7C5AF8,#28E7C4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg viewBox="0 0 24 24" style={{ width: 13, height: 13 }} fill="white" stroke="none">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
            </div>
            <span style={{ fontSize: 12, fontWeight: 700, color: 'white' }}>Bollo</span>
            <div style={{
              marginLeft: 'auto', background: '#06FF89', color: '#030518',
              fontSize: 9, fontWeight: 800, borderRadius: 99,
              padding: '1px 6px', minWidth: 18, textAlign: 'center',
              transition: 'transform 0.35s cubic-bezier(0.34,1.56,0.64,1)',
              transform: 'scale(1)',
            }}>
              {notif}
            </div>
          </div>
        </div>

        {/* Nav items */}
        {[
          { icon: '▤', label: 'Dashboard' },
          { icon: '★', label: 'Anmeldelser', active: true },
          { icon: '✉', label: 'Svar' },
          { icon: '↗', label: 'Synlighed' },
          { icon: '◈', label: 'Rapport' },
        ].map((item, i) => (
          <div key={i} style={{
            padding: '8px 14px',
            display: 'flex', alignItems: 'center', gap: 9,
            background: item.active ? 'rgba(40,231,196,0.08)' : 'transparent',
            borderLeft: item.active ? '2px solid #28E7C4' : '2px solid transparent',
            cursor: 'default',
          }}>
            <span style={{ fontSize: 11, color: item.active ? '#28E7C4' : 'rgba(255,255,255,0.30)' }}>{item.icon}</span>
            <span style={{ fontSize: 11, fontWeight: item.active ? 600 : 400, color: item.active ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.38)' }}>
              {item.label}
            </span>
          </div>
        ))}

        {/* Divider */}
        <div style={{ height: 1, background: 'rgba(255,255,255,0.05)', margin: '10px 14px' }} />

        {/* Stat pills */}
        {sideStats.map((s, i) => (
          <div key={i} style={{ padding: '5px 14px' }}>
            <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.32)', marginBottom: 2, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{s.label}</div>
            <div style={{ fontSize: 13, fontWeight: 700, color: s.color, fontFamily: 'var(--font-display)' }}>{s.value}</div>
          </div>
        ))}

        {/* Live dot */}
        <div style={{ marginTop: 'auto', padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 7 }}>
          <div style={{
            width: 7, height: 7, borderRadius: '50%', background: '#06FF89',
            boxShadow: '0 0 8px rgba(6,255,137,0.6)',
            animation: 'blink 2s ease-in-out infinite',
          }} />
          <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.35)', fontFamily: 'var(--font-body)' }}>Overvåger live</span>
        </div>
      </div>

      {/* ── Main pane ── */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>

        {/* Top bar */}
        <div style={{
          height: 44, flexShrink: 0,
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          display: 'flex', alignItems: 'center', padding: '0 20px', gap: 12,
        }}>
          <span style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.70)' }}>Indgående anmeldelser</span>
          <div style={{
            marginLeft: 'auto',
            background: 'rgba(124,90,248,0.15)', border: '1px solid rgba(124,90,248,0.30)',
            borderRadius: 99, padding: '3px 10px', fontSize: 10, color: '#A68EFF', fontWeight: 600,
          }}>
            {demoReviews.length} nye i dag
          </div>
        </div>

        {/* Content area */}
        <div style={{ flex: 1, display: 'flex', gap: 0, overflow: 'hidden' }}>

          {/* Review list column */}
          <div style={{
            width: '42%', borderRight: '1px solid rgba(255,255,255,0.05)',
            padding: '12px 10px', display: 'flex', flexDirection: 'column', gap: 6, overflowY: 'auto',
          }}>
            {demoReviews.map((rev, i) => (
              <div key={i} style={{
                padding: '10px 12px', borderRadius: 10,
                background: i === idx ? 'rgba(40,231,196,0.07)' : 'transparent',
                border: `1px solid ${i === idx ? 'rgba(40,231,196,0.22)' : 'rgba(255,255,255,0.05)'}`,
                cursor: 'default',
                transition: 'all 0.3s ease',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 5 }}>
                  <div style={{
                    width: 22, height: 22, borderRadius: '50%',
                    background: rev.initBg, display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 8, fontWeight: 700, color: 'white', flexShrink: 0,
                  }}>
                    {rev.initial}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 10, fontWeight: 600, color: 'rgba(255,255,255,0.80)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {rev.reviewer}
                    </div>
                    <div style={{ display: 'flex', gap: 1, marginTop: 1 }}>
                      {Array.from({length: 5}).map((_, j) => <Star key={j} filled={j < rev.stars} />)}
                    </div>
                  </div>
                  <div style={{ width: 7, height: 7, borderRadius: '50%', background: rev.dot, flexShrink: 0 }} />
                </div>
                <p style={{ fontSize: 9.5, color: 'rgba(255,255,255,0.45)', lineHeight: 1.5, overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                  {rev.text}
                </p>
                <div style={{ fontSize: 8.5, color: 'rgba(255,255,255,0.22)', marginTop: 4 }}>{rev.time}</div>
              </div>
            ))}
          </div>

          {/* Active review + response column */}
          <div style={{ flex: 1, padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: 14, overflow: 'hidden' }}>

            {/* Platform badge */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: r.dot }} />
              <span style={{ fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,0.55)', letterSpacing: '0.06em' }}>
                {r.platform.toUpperCase()}
              </span>
              <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.25)' }}>· {r.category}</span>
              <div style={{ marginLeft: 'auto', fontSize: 9, color: 'rgba(255,255,255,0.22)' }}>{r.time}</div>
            </div>

            {/* Reviewer info */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{
                width: 34, height: 34, borderRadius: '50%',
                background: r.initBg, display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 12, fontWeight: 700, color: 'white', flexShrink: 0,
              }}>
                {r.initial}
              </div>
              <div>
                <div style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.85)' }}>{r.reviewer}</div>
                <div style={{ display: 'flex', gap: 2, marginTop: 3 }}>
                  {Array.from({length: 5}).map((_, j) => <Star key={j} filled={j < r.stars} />)}
                </div>
              </div>
            </div>

            {/* Review text */}
            <div style={{
              background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: 10, padding: '12px 14px',
            }}>
              <p style={{ fontSize: 11, lineHeight: 1.65, color: 'rgba(255,255,255,0.70)' }}>
                "{r.text}"
              </p>
            </div>

            {/* Divider */}
            <div style={{ height: 1, background: 'rgba(40,231,196,0.12)' }} />

            {/* Response area */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#28E7C4', boxShadow: '0 0 6px rgba(40,231,196,0.7)', animation: phase === 'typing' ? 'blink 0.6s step-end infinite' : 'none' }} />
                <span style={{ fontSize: 9.5, fontWeight: 700, color: '#28E7C4', letterSpacing: '0.10em', textTransform: 'uppercase' }}>
                  {phase === 'reading' ? 'Analyserer anmeldelse...' : phase === 'typing' ? 'Bollo skriver svar...' : 'Svar sendt ✓'}
                </span>
              </div>

              <div style={{
                flex: 1,
                background: 'rgba(40,231,196,0.05)',
                border: '1px solid rgba(40,231,196,0.18)',
                borderRadius: 10, padding: '12px 14px',
                minHeight: 80,
              }}>
                {phase === 'reading' && (
                  <div style={{ display: 'flex', gap: 5, alignItems: 'center', paddingTop: 4 }}>
                    {[0,1,2].map(i => (
                      <div key={i} style={{
                        width: 7, height: 7, borderRadius: '50%',
                        background: 'rgba(40,231,196,0.45)',
                        animation: `typingDot 0.9s ease-in-out ${i * 0.18}s infinite`,
                      }} />
                    ))}
                  </div>
                )}
                {(phase === 'typing' || phase === 'done') && (
                  <p style={{ fontSize: 11, lineHeight: 1.65, color: 'rgba(255,255,255,0.68)' }}>
                    {typed}
                    {showCursor && (
                      <span style={{
                        display: 'inline-block', width: 1.5, height: 11,
                        background: '#28E7C4', marginLeft: 2, verticalAlign: 'middle',
                        animation: 'blink 0.8s step-end infinite',
                      }} />
                    )}
                  </p>
                )}
              </div>

              {phase === 'done' && (
                <div style={{
                  display: 'flex', justifyContent: 'flex-end', gap: 8,
                  animation: 'fadeUp 0.4s ease forwards',
                }}>
                  <div style={{
                    background: '#06FF89', color: '#030518',
                    fontSize: 10, fontWeight: 700, borderRadius: 99, padding: '5px 14px',
                    cursor: 'default',
                  }}>
                    Publiceret ✓
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ── Exported section ────────────────────────────────────────── */
export default function VideoDemo() {
  const container = useRef<HTMLElement>(null)

  useGSAP(() => {
    gsap.from('.vd-heading', {
      opacity: 0, y: 28, duration: 0.7, ease: 'power2.out',
      scrollTrigger: { trigger: '.vd-heading', start: 'top 85%' },
    })
    gsap.from('.vd-frame', {
      opacity: 0, y: 50, scale: 0.97, duration: 1.0, ease: 'power2.out',
      scrollTrigger: { trigger: '.vd-frame', start: 'top 85%' },
    })
  }, { scope: container })

  return (
    <section
      ref={container}
      id="demo"
      className="relative bg-void py-24 px-6 md:px-12 overflow-hidden"
    >
      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.022) 1px, transparent 1px)', backgroundSize: '36px 36px' }} />

      {/* Glow */}
      <div className="absolute pointer-events-none" style={{
        bottom: '-10%', left: '50%', transform: 'translateX(-50%)',
        width: 1000, height: 500, borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(40,231,196,0.07) 0%, rgba(124,90,248,0.05) 40%, transparent 70%)',
      }} />

      <div className="relative z-10 max-w-[1100px] mx-auto">

        {/* Heading */}
        <div className="vd-heading text-center mb-14">
          <div className="section-tag-dark mx-auto mb-5 justify-center">Sådan ser det ud i praksis</div>
          <h2
            className="font-display font-black text-white tracking-tight leading-tight mb-4"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.6rem)' }}
          >
            En ekspert bag hvert eneste svar —
            <br />
            <span className="gradient-text">mens du fokuserer på din forretning</span>
          </h2>
          <p className="text-white/55 text-base max-w-[560px] mx-auto leading-relaxed">
            Vores team overvåger dine anmeldelser live, analyserer tonen og sender
            professionelle, personaliserede svar inden for minutter.
          </p>
        </div>

        {/* Demo frame — styled like a video player / product screenshot */}
        <div
          className="vd-frame relative mx-auto"
          style={{
            maxWidth: 980,
            borderRadius: 20,
            overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.10)',
            boxShadow: '0 0 0 1px rgba(255,255,255,0.04), 0 40px 100px rgba(0,0,0,0.60), 0 0 80px rgba(40,231,196,0.06)',
          }}
        >
          {/* "Browser chrome" top bar */}
          <div style={{
            height: 40, background: '#0A0D1E',
            borderBottom: '1px solid rgba(255,255,255,0.07)',
            display: 'flex', alignItems: 'center', padding: '0 16px', gap: 6, flexShrink: 0,
          }}>
            {['#FF5F57','#FEBC2E','#28C840'].map((c, i) => (
              <div key={i} style={{ width: 10, height: 10, borderRadius: '50%', background: c, flexShrink: 0 }} />
            ))}
            <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
              <div style={{
                background: 'rgba(255,255,255,0.06)', borderRadius: 6,
                padding: '4px 16px', fontSize: 11,
                color: 'rgba(255,255,255,0.32)', fontFamily: 'var(--font-body)', letterSpacing: '0.03em',
              }}>
                app.bollo.dk/anmeldelser
              </div>
            </div>
            <div style={{
              fontSize: 10, fontFamily: 'var(--font-body)',
              background: 'rgba(6,255,137,0.10)', border: '1px solid rgba(6,255,137,0.20)',
              borderRadius: 99, padding: '2px 10px', color: '#06FF89', fontWeight: 600,
            }}>
              Live
            </div>
          </div>

          {/* Demo content */}
          <div style={{ height: 520 }}>
            <DemoScreen />
          </div>
        </div>

        {/* Feature bullets below demo */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10 max-w-[980px] mx-auto">
          {[
            { icon: '⚡', title: 'Svar inden for minutter', text: 'Aldrig mere en ubevaret anmeldelse. Vi reagerer lynhurtigt.' },
            { icon: '🎯', title: 'Tilpasset din tone of voice', text: 'Hvert svar afspejler dit brand — ikke en generisk skabelon.' },
            { icon: '📊', title: 'Månedlige rapporter', text: 'Se udviklingen i rating, svartider og kundernes sentiment.' },
          ].map((item, i) => (
            <div key={i} className="glass-card p-5">
              <div style={{ fontSize: 22, marginBottom: 10 }}>{item.icon}</div>
              <h3 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'rgba(255,255,255,0.88)', marginBottom: 6 }}>{item.title}</h3>
              <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.48)', lineHeight: 1.6 }}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
