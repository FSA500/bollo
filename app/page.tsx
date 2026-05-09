import Navbar         from './components/Navbar'
import Footer         from './components/Footer'
import Mascot         from './components/Mascot'
import Hero           from './sections/Hero'
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
        {/* 1 — Hero */}
        <Hero />

        {/* 2 — Why reviews matter */}
        <WhyReviews />
        <hr className="section-divider" />

        {/* 3 — How Bollo helps (5 steps) */}
        <HowItWorks />

        {/* 4 — AI search & visibility (dark section) */}
        <AiSection />
        <hr className="section-divider" />

        {/* 5 — We answer reviews for you */}
        <ReviewHandling />
        <hr className="section-divider" />

        {/* 6 — Industries */}
        <Industries />

        {/* 7 — CTA / Contact */}
        <CtaSection />
      </main>

      <Footer />

      {/* Mascot — fixed bottom right */}
      <Mascot />
    </>
  )
}
