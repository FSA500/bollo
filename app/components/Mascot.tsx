'use client'
import { useState, useEffect, useRef } from 'react'

const cheerMessages = ['Godt valg!', 'Vi klarer det!', 'Fantastisk!', 'Lad os gå!', 'Top valg!']
const idleMessages  = ['Hej! Jeg er Bollo', 'Vi styrker dit omdømme!', 'Top 5 på Google Maps', 'Prøv en gratis demo', 'Lad mig hjælpe dig!']

export default function Mascot() {
  const [bubble, setBubble]     = useState('')
  const [showBubble, setShow]   = useState(false)
  const [cheering, setCheering] = useState(false)
  const idleRef  = useRef<ReturnType<typeof setInterval> | null>(null)
  const idleIdx  = useRef(0)
  const isActive = useRef(false)

  function triggerBubble(msg: string, duration = 2800) {
    setBubble(msg)
    setShow(true)
    setTimeout(() => setShow(false), duration)
  }

  function triggerCheer() {
    if (isActive.current) return
    isActive.current = true
    setCheering(true)
    triggerBubble(cheerMessages[Math.floor(Math.random() * cheerMessages.length)], 2200)
    setTimeout(() => {
      setCheering(false)
      isActive.current = false
    }, 750)
  }

  useEffect(() => {
    // Attach to all CTA buttons via delegation
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('.cta-trigger')) triggerCheer()
    }
    document.addEventListener('mouseover', handler)

    // Idle messages
    idleRef.current = setInterval(() => {
      if (!isActive.current && !showBubble) {
        triggerBubble(idleMessages[idleIdx.current % idleMessages.length], 3200)
        idleIdx.current++
      }
    }, 9000)

    return () => {
      document.removeEventListener('mouseover', handler)
      if (idleRef.current) clearInterval(idleRef.current)
    }
  }, [])

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end pointer-events-none select-none">

      {/* Idle / cheer speech bubble */}
      <div
        className={`relative bg-forest text-white rounded-[14px_14px_4px_14px] px-3 py-2 text-xs font-semibold shadow-lg mb-2 max-w-[150px] text-center leading-snug border border-mint/20 transition-all duration-300 ${
          showBubble ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-2 scale-95 pointer-events-none'
        }`}
      >
        {bubble}
        <span className="absolute -bottom-[7px] right-3 border-l-[7px] border-r-[7px] border-t-[7px] border-l-transparent border-r-transparent border-t-forest" />
      </div>

      {/* Permanent CTA label — hidden on mobile to avoid blocking content */}
      <a
        href="/kontakt"
        className={`relative pointer-events-auto bg-neon text-forest font-bold rounded-[14px_14px_4px_14px] px-3 py-2 text-xs shadow-lg mb-2 max-w-[160px] text-center leading-snug transition-all duration-300 hidden sm:block ${
          showBubble ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
        }`}
      >
        Book en uforpligtende snak
        <span className="absolute -bottom-[7px] right-3 border-l-[7px] border-r-[7px] border-t-[7px] border-l-transparent border-r-transparent border-t-neon" />
      </a>

      {/* Mascot container */}
      <a
        href="/kontakt"
        className={`w-20 h-20 sm:w-28 sm:h-28 rounded-full overflow-hidden drop-shadow-xl pointer-events-auto cursor-pointer ${
          cheering ? 'animate-cheer' : 'animate-float'
        }`}
        aria-label="Gå til kontakt"
      >
        {/*
          ⚠️  MASCOT IMAGE — ACTION REQUIRED
          Replace the src below with the path to the clean transparent mascot PNG.
          The designer needs to provide the original file with transparent background.
          Placeholder path: /assets/mascot/bollo-mascot.png
        */}
        <img
          src="/assets/mascot/bollo-mascot.png"
          alt="Bollo maskot"
          className="w-full h-full object-cover object-center"
        />
      </a>
    </div>
  )
}
