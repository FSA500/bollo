'use client'

import { useState, useEffect } from 'react'

/* ── Review data ─────────────────────────────────────────────── */
const reviews = [
  {
    platform: 'Google Maps', dot: '#4285F4', stars: 5,
    name: 'Mikkel H.', category: 'Restaurant',
    text: 'Vores Google-rating steg fra 3.8 til 4.7 på bare tre måneder. Bollo leverer!',
    response: 'Tusind tak, Mikkel! Det er præcis det resultat, vi arbejder for — fortsæt endelig det gode arbejde.',
  },
  {
    platform: 'Trustpilot', dot: '#00B67A', stars: 5,
    name: 'Sarah L.', category: 'Hotel',
    text: 'Professionelle og hurtige svar på alle anmeldelser. Vores TrustScore er nu 4.8.',
    response: 'Kære Sarah, din tilfredshed er hele vores motivation. Vi fortsætter det gode arbejde for jer!',
  },
  {
    platform: 'TripAdvisor', dot: '#34D9A0', stars: 3,
    name: 'Lars P.', category: 'Café',
    text: 'God service generelt, men ventetiden var lidt lang til at starte med.',
    response: 'Tak for den ærlige feedback, Lars. Vi har forbedret svartiderne markant — kom gerne igen!',
  },
  {
    platform: 'Google Maps', dot: '#4285F4', stars: 4,
    name: 'Emma K.', category: 'Klinik',
    text: 'Bollo håndterer vores anmeldelser fantastisk og professionelt. Klart anbefalet!',
    response: 'Mange tak, Emma! Jeres tillid driver os fremad — vi er glade for samarbejdet.',
  },
  {
    platform: 'Trustpilot', dot: '#00B67A', stars: 5,
    name: 'Thomas B.', category: 'Webshop',
    text: 'Fra 3.2 til 4.6 i gennemsnit på seks måneder. Imponerende og dokumenteret resultat!',
    response: 'Fantastisk, Thomas! Jeres engagement og vores indsats er en stærk kombination.',
  },
  {
    platform: 'Google Maps', dot: '#4285F4', stars: 5,
    name: 'Anna M.', category: 'Frisør',
    text: 'Nu top 5 på Google Maps i hele vores by. Bollo virker — det er bevist!',
    response: 'Tak, Anna! Det er jeres fremragende service + vores arbejde der skaber resultater.',
  },
]

/* ── Floating badges ─────────────────────────────────────────── */
type FloaterDef = { left: string; bottom: string; delay: string; dur: string; drift: string; stars: boolean; text?: string }

const FLOATERS: FloaterDef[] = [
  { left: '0%',  bottom: '34%', delay: '0s',   dur: '4.0s', drift: '-9px',  stars: true },
  { left: '87%', bottom: '30%', delay: '1.4s', dur: '4.3s', drift: '11px',  stars: false, text: '+1 svar' },
  { left: '10%', bottom: '40%', delay: '2.7s', dur: '3.9s', drift: '-6px',  stars: true },
  { left: '90%', bottom: '43%', delay: '0.9s', dur: '4.6s', drift: '15px',  stars: false, text: '4.8 ★' },
  { left: '46%', bottom: '27%', delay: '3.6s', dur: '4.1s', drift: '-10px', stars: false, text: 'Ny anm.' },
  { left: '76%', bottom: '36%', delay: '1.9s', dur: '4.9s', drift: '9px',   stars: true },
]

/* ── Sub-components ──────────────────────────────────────────── */
function AnimatedStars({ count, phase }: { count: number; phase: number }) {
  return (
    <span style={{ display: 'inline-flex', gap: 2 }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" style={{
          width: 12, height: 12,
          transition: 'transform 0.2s cubic-bezier(0.34,1.56,0.64,1), opacity 0.15s ease',
          transform: i < phase ? 'scale(1)' : 'scale(0.2)',
          opacity:   i < phase ? 1          : 0.1,
          fill: i < count ? '#FACC15' : 'rgba(255,255,255,0.14)',
        }}>
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </span>
  )
}

/* ── Main component ──────────────────────────────────────────── */
export default function LaptopShowcase() {
  const [idx,        setIdx]       = useState(0)
  const [out,        setOut]       = useState(false)
  const [starPhase,  setStarPhase] = useState(0)
  const [wordPhase,  setWordPhase] = useState(0)
  const [typed,      setTyped]     = useState('')
  const [showDots,   setShowDots]  = useState(false)
  const [notifCount, setNotifCount]= useState(4)

  /* Review cycle every 6 s */
  useEffect(() => {
    let tid: ReturnType<typeof setTimeout>
    const iv = setInterval(() => {
      setOut(true)
      tid = setTimeout(() => { setIdx(i => (i + 1) % reviews.length); setOut(false) }, 430)
    }, 6000)
    return () => { clearInterval(iv); clearTimeout(tid) }
  }, [])

  /* Stars pop in one by one */
  useEffect(() => {
    if (out) { setStarPhase(0); return }
    let p = 0
    const iv = setInterval(() => { setStarPhase(++p); if (p >= reviews[idx].stars) clearInterval(iv) }, 90)
    return () => clearInterval(iv)
  }, [idx, out])

  /* Review text: word-by-word reveal */
  useEffect(() => {
    if (out) { setWordPhase(0); return }
    const words = reviews[idx].text.split(' ')
    let p = 0
    const iv = setInterval(() => { setWordPhase(++p); if (p >= words.length) clearInterval(iv) }, 60)
    return () => clearInterval(iv)
  }, [idx, out])

  /* Response: typing dots → typewriter */
  useEffect(() => {
    if (out) { setTyped(''); setShowDots(false); return }
    let typingIv: ReturnType<typeof setInterval> | null = null
    const t1 = setTimeout(() => setShowDots(true), 550)
    const t2 = setTimeout(() => {
      setShowDots(false)
      let i = 0
      const resp = reviews[idx].response
      typingIv = setInterval(() => {
        setTyped(resp.slice(0, ++i))
        if (i >= resp.length) clearInterval(typingIv!)
      }, 22)
    }, 1100)
    return () => {
      clearTimeout(t1); clearTimeout(t2)
      if (typingIv) clearInterval(typingIv)
      setTyped(''); setShowDots(false)
    }
  }, [idx, out])

  /* Notification badge ticks up */
  useEffect(() => {
    const iv = setInterval(() => setNotifCount(c => Math.min(c + 1, 12)), 9500)
    return () => clearInterval(iv)
  }, [])

  const r     = reviews[idx]
  const words = r.text.split(' ')

  return (
    <div style={{ position: 'relative', width: '100%', height: '520px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

      {/* ── Floating badges ── */}
      {FLOATERS.map((f, i) => (
        <div key={i} style={{
          position: 'absolute', left: f.left, bottom: f.bottom, zIndex: 20,
          animation: `floatStar ${f.dur} ${f.delay} ease-in-out infinite`,
          '--drift': f.drift, pointerEvents: 'none',
        } as React.CSSProperties}>
          <div style={{
            background: 'rgba(3,6,14,0.92)',
            border: `1px solid rgba(40,231,196,${f.stars ? '0.35' : '0.22'})`,
            borderRadius: 99, padding: '4px 9px',
            display: 'flex', alignItems: 'center', gap: 3,
            backdropFilter: 'blur(8px)',
          }}>
            {f.stars ? (
              Array.from({ length: 5 }).map((_, j) => (
                <svg key={j} viewBox="0 0 24 24" style={{ width: 9, height: 9 }} fill="#FACC15">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))
            ) : (
              <span style={{ fontSize: 9, color: '#28E7C4', fontFamily: 'var(--font-body)', fontWeight: 700 }}>
                {f.text}
              </span>
            )}
          </div>
        </div>
      ))}

      {/* ── Ambient glow ── */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 58% 32% at 50% 52%, rgba(40,231,196,0.09) 0%, transparent 70%)',
      }} />

      {/* ── Laptop ── */}
      <div style={{
        transform: 'perspective(1600px) rotateX(6deg) rotateY(-4deg)',
        transformStyle: 'preserve-3d',
        filter: 'drop-shadow(0 36px 70px rgba(0,0,0,0.68)) drop-shadow(0 0 50px rgba(40,231,196,0.07))',
        position: 'relative', zIndex: 5,
      }}>

        {/* ── Screen lid ── */}
        <div style={{
          width: 422, height: 272,
          background: '#070d1e',
          borderRadius: '13px 13px 0 0',
          border: '1.5px solid rgba(255,255,255,0.10)',
          borderBottom: 'none',
          overflow: 'hidden',
          position: 'relative',
        }}>
          {/* Camera */}
          <div style={{
            position: 'absolute', top: 6, left: '50%', transform: 'translateX(-50%)',
            width: 5, height: 5, borderRadius: '50%',
            background: '#1a1e30', border: '1px solid rgba(255,255,255,0.12)',
          }} />

          {/* Inner screen (inset bezel) */}
          <div style={{
            margin: '16px 7px 7px', height: 'calc(100% - 23px)',
            background: '#04080f', borderRadius: 6, overflow: 'hidden',
            display: 'flex', flexDirection: 'column',
          }}>

            {/* Menu bar */}
            <div style={{
              height: 26, flexShrink: 0,
              background: 'rgba(255,255,255,0.03)',
              borderBottom: '1px solid rgba(255,255,255,0.055)',
              display: 'flex', alignItems: 'center', padding: '0 10px', gap: 5,
            }}>
              {['#FF5F57','#FEBC2E','#28C840'].map((c, i) => (
                <div key={i} style={{ width: 7, height: 7, borderRadius: '50%', background: c }} />
              ))}
              <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                <div style={{
                  background: 'rgba(255,255,255,0.05)', borderRadius: 4,
                  padding: '1px 12px', fontSize: 8,
                  color: 'rgba(255,255,255,0.30)', fontFamily: 'var(--font-body)', letterSpacing: '0.04em',
                }}>
                  bollo.dk/dashboard
                </div>
              </div>
              <div style={{
                background: '#28E7C4', color: '#04080f',
                fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 7.5,
                borderRadius: 99, padding: '1px 6px', minWidth: 16, textAlign: 'center',
                transition: 'transform 0.35s cubic-bezier(0.34,1.56,0.64,1)',
              }}>
                {notifCount}
              </div>
            </div>

            {/* Tab bar */}
            <div style={{
              height: 23, flexShrink: 0,
              background: 'rgba(255,255,255,0.018)',
              borderBottom: '1px solid rgba(255,255,255,0.04)',
              display: 'flex', alignItems: 'center', padding: '0 8px',
            }}>
              {[
                { label: 'Dashboard', active: true },
                { label: 'Anmeld.',   active: false },
                { label: 'Svar',      active: false },
                { label: 'Rapport',   active: false },
              ].map((tab, i) => (
                <div key={i} style={{
                  padding: '0 10px', height: '100%',
                  display: 'flex', alignItems: 'center',
                  fontSize: 8, fontFamily: 'var(--font-body)',
                  fontWeight: tab.active ? 700 : 400,
                  color: tab.active ? '#28E7C4' : 'rgba(255,255,255,0.28)',
                  borderBottom: tab.active ? '1.5px solid #28E7C4' : '1.5px solid transparent',
                  cursor: 'default', userSelect: 'none',
                }}>
                  {tab.label}
                </div>
              ))}
            </div>

            {/* Main content: sidebar + review pane */}
            <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>

              {/* Sidebar */}
              <div style={{
                width: 68, flexShrink: 0,
                borderRight: '1px solid rgba(255,255,255,0.05)',
                padding: '8px 0', display: 'flex', flexDirection: 'column',
              }}>
                {[
                  { icon: '●', label: 'Indgående', count: notifCount, hi: true },
                  { icon: '○', label: 'Afventer',  count: 2,          hi: false },
                  { icon: '✓', label: 'Besvaret',  count: 127,        hi: false },
                ].map((item, i) => (
                  <div key={i} style={{
                    padding: '5px 8px',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    background: i === 0 ? 'rgba(40,231,196,0.07)' : 'transparent',
                    borderLeft: i === 0 ? '2px solid #28E7C4' : '2px solid transparent',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <span style={{ fontSize: 7, color: item.hi ? '#28E7C4' : 'rgba(255,255,255,0.22)' }}>
                        {item.icon}
                      </span>
                      <span style={{ fontSize: 7.5, color: 'rgba(255,255,255,0.40)', fontFamily: 'var(--font-body)' }}>
                        {item.label}
                      </span>
                    </div>
                    <span style={{
                      fontSize: 7.5, fontWeight: 700, fontFamily: 'var(--font-display)',
                      color: item.hi ? '#28E7C4' : 'rgba(255,255,255,0.28)',
                    }}>
                      {item.count}
                    </span>
                  </div>
                ))}

                <div style={{ height: 1, background: 'rgba(255,255,255,0.04)', margin: '6px 8px' }} />

                {/* Live dot */}
                <div style={{ padding: '0 8px', display: 'flex', alignItems: 'center', gap: 5 }}>
                  <div style={{
                    width: 5, height: 5, borderRadius: '50%', background: '#06FF89',
                    boxShadow: '0 0 6px rgba(6,255,137,0.55)',
                    animation: 'blink 2.2s ease-in-out infinite',
                  }} />
                  <span style={{ fontSize: 7, color: 'rgba(255,255,255,0.28)', fontFamily: 'var(--font-body)' }}>
                    Live
                  </span>
                </div>
              </div>

              {/* Review pane */}
              <div style={{
                flex: 1, padding: '9px 11px', overflow: 'hidden',
                display: 'flex', flexDirection: 'column', gap: 0,
              }}>

                {/* Platform + category badge */}
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: 5,
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.09)',
                  borderRadius: 99, padding: '2px 9px', marginBottom: 7,
                  alignSelf: 'flex-start',
                  transition: 'opacity 0.4s ease, transform 0.4s ease',
                  opacity: out ? 0 : 1,
                  transform: out ? 'translateX(-10px)' : 'translateX(0)',
                }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: r.dot }} />
                  <span style={{ fontSize: 8.5, color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-body)', fontWeight: 600 }}>
                    {r.platform}
                  </span>
                  <span style={{ fontSize: 7.5, color: 'rgba(255,255,255,0.22)', fontFamily: 'var(--font-body)' }}>
                    · {r.category}
                  </span>
                </div>

                {/* Stars (pop in) + reviewer name */}
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6,
                  transition: 'opacity 0.38s ease',
                  opacity: out ? 0 : 1,
                }}>
                  <AnimatedStars count={r.stars} phase={starPhase} />
                  <span style={{ fontSize: 8.5, color: 'rgba(255,255,255,0.36)', fontFamily: 'var(--font-body)' }}>
                    {r.name}
                  </span>
                </div>

                {/* Review quote — word by word */}
                <p style={{
                  fontSize: 9, lineHeight: 1.6,
                  color: 'rgba(255,255,255,0.74)',
                  fontFamily: 'var(--font-body)', marginBottom: 8,
                  transition: 'opacity 0.38s ease',
                  opacity: out ? 0 : 1,
                }}>
                  "
                  {words.map((word, wi) => (
                    <span key={wi} style={{
                      opacity: wi < wordPhase ? 1 : 0,
                      transition: 'opacity 0.22s ease',
                      marginRight: '3px',
                    }}>
                      {word}
                    </span>
                  ))}
                  "
                </p>

                {/* Divider */}
                <div style={{ height: 1, background: 'rgba(40,231,196,0.12)', marginBottom: 8 }} />

                {/* Response block */}
                <div style={{
                  background: 'rgba(40,231,196,0.055)',
                  borderLeft: '2px solid rgba(40,231,196,0.36)',
                  borderRadius: '0 5px 5px 0',
                  padding: '5px 9px', flex: 1,
                  transition: 'opacity 0.45s ease 0.1s',
                  opacity: out ? 0 : 1,
                }}>
                  <div style={{
                    fontSize: 7.5, color: '#28E7C4',
                    fontFamily: 'var(--font-body)', fontWeight: 700,
                    letterSpacing: '0.09em', marginBottom: 4,
                  }}>
                    BOLLO SVAREDE
                  </div>

                  {/* Typing indicator dots */}
                  {showDots && (
                    <div style={{ display: 'flex', gap: 4, padding: '4px 0' }}>
                      {[0, 1, 2].map(di => (
                        <div key={di} style={{
                          width: 5, height: 5, borderRadius: '50%',
                          background: 'rgba(40,231,196,0.5)',
                          animation: `typingDot 0.8s ease-in-out ${di * 0.16}s infinite`,
                        }} />
                      ))}
                    </div>
                  )}

                  {/* Typewriter text */}
                  {!showDots && (
                    <p style={{
                      fontSize: 8.5, lineHeight: 1.5,
                      color: 'rgba(255,255,255,0.60)',
                      fontFamily: 'var(--font-body)',
                    }}>
                      {typed}
                      {typed.length < r.response.length && (
                        <span style={{
                          display: 'inline-block', width: 1.5, height: 9,
                          background: '#28E7C4', marginLeft: 2,
                          verticalAlign: 'middle',
                          animation: 'blink 0.9s step-end infinite',
                        }} />
                      )}
                    </p>
                  )}
                </div>

                {/* Stats pills */}
                <div style={{ display: 'flex', gap: 5, marginTop: 8, flexShrink: 0 }}>
                  {[
                    { v: '4.8★', l: 'Snit' },
                    { v: '127',  l: 'Besvaret' },
                    { v: 'Top 5', l: 'Google' },
                  ].map((s, i) => (
                    <div key={i} style={{
                      flex: 1, background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.07)',
                      borderRadius: 5, padding: '3px 0', textAlign: 'center',
                    }}>
                      <div style={{ fontSize: 9.5, fontWeight: 700, color: '#28E7C4', fontFamily: 'var(--font-display)' }}>
                        {s.v}
                      </div>
                      <div style={{ fontSize: 7, color: 'rgba(255,255,255,0.28)', fontFamily: 'var(--font-body)' }}>
                        {s.l}
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>

          {/* Screen corner reflection */}
          <div style={{
            position: 'absolute', top: 16, right: 12,
            width: 70, height: 45, pointerEvents: 'none',
            background: 'radial-gradient(ellipse, rgba(255,255,255,0.04) 0%, transparent 70%)',
            borderRadius: '50%',
          }} />
        </div>

        {/* ── Hinge ── */}
        <div style={{
          width: 422, height: 4,
          background: 'linear-gradient(180deg, rgba(255,255,255,0.07), rgba(0,0,0,0.45))',
          borderLeft:  '1.5px solid rgba(255,255,255,0.07)',
          borderRight: '1.5px solid rgba(255,255,255,0.07)',
        }} />

        {/* ── Keyboard base ── */}
        <div style={{
          width: 444, marginLeft: -11,
          height: 16, background: 'linear-gradient(180deg, #111620, #0a0d16)',
          borderRadius: '0 0 9px 9px',
          border: '1.5px solid rgba(255,255,255,0.07)', borderTop: 'none',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <div style={{
            width: 56, height: 7,
            background: 'rgba(255,255,255,0.04)',
            borderRadius: 3, border: '1px solid rgba(255,255,255,0.06)',
          }} />
        </div>

        {/* Keyboard backlight glow */}
        <div style={{
          position: 'absolute', bottom: -2, left: '12%', right: '12%', height: 8,
          background: 'radial-gradient(ellipse, rgba(40,231,196,0.05) 0%, transparent 70%)',
          filter: 'blur(5px)', pointerEvents: 'none',
        }} />

      </div>
    </div>
  )
}
