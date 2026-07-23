'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function GlobalAnimations() {
  const pathname = usePathname()

  useEffect(() => {
    // Homepage has its own per-section GSAP animations — skip it
    if (pathname === '/') return

    const ctx = gsap.context(() => {
      // Section tags (exclude PageHero's .ph-tag and explicitly marked .no-global-anim)
      gsap.utils.toArray<HTMLElement>(
        '.section-tag:not(.ph-tag):not(.no-global-anim), .section-tag-dark:not(.ph-tag):not(.no-global-anim)'
      ).forEach((el) => {
        gsap.from(el, {
          opacity: 0, x: -14, duration: 0.55,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        })
      })

      // Section h2s
      gsap.utils.toArray<HTMLElement>('.section-h2, .section-h2-dark').forEach((el) => {
        gsap.from(el, {
          opacity: 0, y: 26, duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        })
      })

      // Section subtitle paragraphs
      gsap.utils.toArray<HTMLElement>('.section-sub').forEach((el) => {
        gsap.from(el, {
          opacity: 0, y: 16, duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        })
      })

      // bollo-cards — stagger per grid parent so each grid staggers together
      const cardParents = new Set<HTMLElement>()
      document.querySelectorAll<HTMLElement>('.bollo-card').forEach((card) => {
        if (card.parentElement) cardParents.add(card.parentElement)
      })
      cardParents.forEach((parent) => {
        const cards = parent.querySelectorAll<HTMLElement>('.bollo-card')
        gsap.from(cards, {
          opacity: 0, y: 32, duration: 0.65,
          ease: 'power2.out', stagger: 0.09,
          scrollTrigger: { trigger: parent, start: 'top 80%', once: true },
        })
      })

      // CTA buttons that scroll into view — exclude PageHero's .ph-cta
      gsap.utils.toArray<HTMLElement>('.cta-trigger:not(.ph-cta)').forEach((btn) => {
        gsap.from(btn, {
          opacity: 0, y: 14, duration: 0.5,
          ease: 'power2.out',
          scrollTrigger: { trigger: btn, start: 'top 90%', once: true },
        })
      })

      // Dark section feature boxes (data-anim-box) — stagger per grid parent
      const boxParents = new Set<HTMLElement>()
      document.querySelectorAll<HTMLElement>('[data-anim-box]').forEach((box) => {
        if (box.parentElement) boxParents.add(box.parentElement)
      })
      boxParents.forEach((parent) => {
        gsap.from(parent.querySelectorAll<HTMLElement>('[data-anim-box]'), {
          opacity: 0, y: 28, duration: 0.65,
          ease: 'power2.out', stagger: 0.1,
          scrollTrigger: { trigger: parent, start: 'top 82%', once: true },
        })
      })
    })

    return () => ctx.revert()
  }, [pathname])

  return null
}
