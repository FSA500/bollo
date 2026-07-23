'use client'
import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

interface PageHeroProps {
  tag: string
  title: string
  titleAccentWord?: string
  subtitle: string
  ctaText?: string
  ctaHref?: string
  secondaryCta?: { text: string; href: string }
}

export default function PageHero({
  tag,
  title,
  titleAccentWord,
  subtitle,
  ctaText = 'Book en gratis demo',
  ctaHref = '#kontakt',
  secondaryCta,
}: PageHeroProps) {
  const container = useRef<HTMLElement>(null)

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    tl.from('.ph-tag',   { opacity: 0, x: -16, duration: 0.5,  delay: 0.25 })
      .from('.ph-title', { opacity: 0, y: 32,  duration: 0.75 }, '-=0.15')
      .from('.ph-sub',   { opacity: 0, y: 18,  duration: 0.6  }, '-=0.45')
      .from('.ph-cta',   { opacity: 0, y: 14,  duration: 0.45, stagger: 0.1 }, '-=0.4')
  }, { scope: container })

  const renderTitle = () => {
    if (!titleAccentWord) return title
    const parts = title.split(titleAccentWord)
    return (
      <>
        {parts[0]}
        <span style={{ color: 'var(--color-mint)' }}>{titleAccentWord}</span>
        {parts[1]}
      </>
    )
  }

  return (
    <section
      ref={container}
      style={{
        background: 'linear-gradient(135deg, var(--color-forest-deep) 0%, var(--color-forest) 60%, #1a0d5e 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
      className="pt-32 pb-20 px-6"
    >
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle, rgba(40,231,196,0.10) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          pointerEvents: 'none',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <span className="ph-tag section-tag-dark">{tag}</span>

        <h1
          className="ph-title font-display font-extrabold text-white mt-4 mb-6 leading-tight"
          style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}
        >
          {renderTitle()}
        </h1>

        <p
          className="ph-sub mx-auto mb-10 leading-relaxed"
          style={{
            color: 'var(--color-text-muted-dark)',
            fontSize: 'var(--text-md)',
            maxWidth: 'var(--max-width-text)',
          }}
        >
          {subtitle}
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <a href={ctaHref} className="ph-cta btn-primary cta-trigger">
            {ctaText}
          </a>
          {secondaryCta && (
            <a href={secondaryCta.href} className="ph-cta btn-secondary">
              {secondaryCta.text}
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
