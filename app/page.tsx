import Navbar         from './components/Navbar'
import Footer         from './components/Footer'
import Mascot         from './components/Mascot'
import Hero           from './sections/Hero'
import VideoDemo      from './sections/VideoDemo'
import WhyReviews     from './sections/WhyReviews'
import HowItWorks     from './sections/HowItWorks'
import AiSection      from './sections/AiSection'
import ReviewHandling from './sections/ReviewHandling'
import Industries     from './sections/Industries'
import CtaSection     from './sections/CtaSection'

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* 1 — Hero (centered, StackAI-style) */}
        <Hero />

        {/* 2 — Animated product demo (man checking reviews) */}
        <VideoDemo />

        {/* 3 — Why reviews matter */}
        <WhyReviews />

        {/* 4 — How Bollo helps */}
        <HowItWorks />

        {/* 5 — AI search & visibility */}
        <AiSection />

        {/* 6 — We answer reviews for you */}
        <ReviewHandling />

        {/* 7 — Industries */}
        <Industries />

        {/* 8 — CTA / Contact */}
        <CtaSection />
      </main>

      <Footer />
      <Mascot />
    </>
  )
}
