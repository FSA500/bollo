'use client'

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
      style={{
        background: 'linear-gradient(135deg, var(--color-forest-deep) 0%, var(--color-forest) 60%, #1f5045 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
      className="pt-32 pb-20 px-6"
    >
      {/* Dot pattern overlay */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle, rgba(109,203,160,0.10) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          pointerEvents: 'none',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <span className="section-tag-dark">{tag}</span>

        <h1
          className="font-display font-extrabold text-white mt-4 mb-6 leading-tight"
          style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}
        >
          {renderTitle()}
        </h1>

        <p
          className="mx-auto mb-10 leading-relaxed"
          style={{
            color: 'var(--color-text-muted-dark)',
            fontSize: 'var(--text-md)',
            maxWidth: 'var(--max-width-text)',
          }}
        >
          {subtitle}
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <a href={ctaHref} className="btn-primary cta-trigger">
            {ctaText}
          </a>
          {secondaryCta && (
            <a href={secondaryCta.href} className="btn-secondary">
              {secondaryCta.text}
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
