import type { Metadata } from 'next'
import '../styles/globals.css'
import IntroScreen from './components/IntroScreen'

export const metadata: Metadata = {
  title: 'Bollo — Reputation Management',
  description: 'Få flere anmeldelser, bedre omdømme og større synlighed i AI-søgninger. Bollo hjælper virksomheder med professionel håndtering på Trustpilot, Google Maps og TripAdvisor.',
  keywords: 'reputation management, anmeldelser, Google Maps, Trustpilot, TripAdvisor, AI-søgninger, omdømme',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="da">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@600;700;800&family=DM+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body bg-bollo-bg text-bollo-text antialiased">
        <IntroScreen />
        {children}
      </body>
    </html>
  )
}
