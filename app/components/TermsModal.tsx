'use client'
import { useEffect } from 'react'

interface Props {
  isOpen: boolean
  onClose: () => void
}

export default function TermsModal({ isOpen, onClose }: Props) {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-[1000] transition-opacity"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="fixed bottom-0 left-0 right-0 z-[1001] bg-white rounded-t-3xl shadow-2xl flex flex-col"
        style={{ height: '70vh' }}>

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 flex-shrink-0">
          <div>
            <h2 className="font-display font-black text-forest text-lg tracking-tight">
              Privatlivspolitik & Vilkår
            </h2>
            <p className="text-xs text-gray-400 mt-0.5">bollo.io ApS · CVR DK38531034</p>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
            aria-label="Luk"
          >
            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Scrollable content */}
        <div className="overflow-y-auto flex-1 px-6 py-6 text-sm text-gray-700 leading-relaxed space-y-6">

          {/* Data controller */}
          <section>
            <h3 className="font-bold text-forest text-base mb-2">Dataansvarlig</h3>
            <p>bollo.io ApS<br />CVR DK38531034<br />Asgårdsvej 1, st., 1811 Frederiksberg C, Danmark<br />info@bollo.io</p>
          </section>

          {/* Acceptance */}
          <section>
            <h3 className="font-bold text-forest text-base mb-2">Acceptering af vilkår</h3>
            <p>Ved at tilgå og bruge bollo.io accepterer du disse vilkår for brug, alle gældende love og bestemmelser og accepterer, at du er ansvarlig for overholdelse af eventuelle gældende lokale love.</p>
            <p className="mt-2">Du må kun bruge vores platform til lovlige formål. Du må ikke bruge vores platform:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>På en måde der overtræder gældende lokale eller internationale love eller bestemmelser</li>
              <li>På en måde der er ulovlig eller svigagtig, eller har et ulovligt eller svigagtigt formål eller virkning</li>
              <li>Til at sende, modtage, uploade, downloade, bruge eller genanvende materiale, der ikke overholder vores indholdsstandarder</li>
              <li>Til bevidst at overføre data, sende eller uploade materiale, der indeholder vira, trojanske heste, orme, tidsbomber, keyloggere, spyware, adware eller andre skadelige programmer</li>
            </ul>
            <p className="mt-2">Du accepterer også:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Ikke at reproducere, duplikere, kopiere eller videresælge nogen del af vores platform</li>
              <li>Ikke at få adgang til, forstyrre, beskadige eller afbryde nogen del af vores platform, udstyr, netværk eller software</li>
            </ul>
          </section>

          {/* Subscription */}
          <section>
            <h3 className="font-bold text-forest text-base mb-2">Abonnementsvilkår</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Abonnement:</strong> Brugere abonnerer på en månedlig service, der inkluderer lokationsstyring, indholdsoffentliggørelse, anmeldelseshåndtering og avancerede analyseværktøjer.</li>
              <li><strong>Fornyelse:</strong> Abonnementer fornyes automatisk hver måned. Brugere kan opsige abonnementet når som helst inden næste faktureringscyklus.</li>
              <li><strong>Gebyrer:</strong> Abonnementsgebyret opkræves månedligt og er ikke-refunderbart.</li>
            </ul>
          </section>

          {/* Service availability */}
          <section>
            <h3 className="font-bold text-forest text-base mb-2">Servicetilgængelighed</h3>
            <p>Vi stræber efter at sikre, at tjenesten er tilgængelig til enhver tid, bortset fra vedligeholdelse og nedetid. Kompensation for platformsnedetid ydes med ekstra abonnementsdage svarende til nedetidsvarigheden.</p>
          </section>

          {/* User obligations */}
          <section>
            <h3 className="font-bold text-forest text-base mb-2">Brugerforpligtelser og kontosikkerhed</h3>
            <p>Du er ansvarlig for at opretholde fortroligheden af dine kontooplysninger og for alle aktiviteter under din konto. Overholdelse af databeskyttelsesbestemmelser, herunder GDPR, er påkrævet. Du skal indhente eksplicit samtykke fra kunder, inden du anmoder om anmeldelser via vores service.</p>
          </section>

          {/* Service description */}
          <section>
            <h3 className="font-bold text-forest text-base mb-2">Servicebeskrivelse</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Lokationsstyring:</strong> Administrer profil og publicer indhold på tværs af flere platforme.</li>
              <li><strong>Anmeldelseshåndtering:</strong> Se og administrer kundeanmeldelser. Anmod om anmeldelser efter at have indhentet eksplicit samtykke.</li>
              <li><strong>Analyse og AI-rapporter:</strong> Modtag månedlige AI-drevne rapporter med anbefalinger til forbedring af forretningen.</li>
              <li><strong>Markedsføringsværktøjer:</strong> Brug unikke QR-koder og NFC-kort, der leder til anmeldelsessider.</li>
            </ul>
          </section>

          {/* Intellectual property */}
          <section>
            <h3 className="font-bold text-forest text-base mb-2">Immaterielle rettigheder</h3>
            <p>Alt indhold på bollo.io er bollo.io's eller dets licensgiveres intellektuelle ejendom. Brugere må ikke bruge dette indhold bortset fra det, der er angivet i disse vilkår. Du anerkender, at alle immaterielle rettigheder i vores platform tilhører os, og at du ikke har andre rettigheder end retten til at bruge dem i overensstemmelse med disse vilkår.</p>
          </section>

          {/* Disclaimer */}
          <section>
            <h3 className="font-bold text-forest text-base mb-2">Ansvarsfraskrivelse</h3>
            <p>Tjenesterne på bollo.io leveres "som de er". bollo.io giver ingen garantier, hverken udtrykkelige eller underforståede, og fraskriver sig alle andre garantier.</p>
          </section>

          {/* Limitation of liability */}
          <section>
            <h3 className="font-bold text-forest text-base mb-2">Ansvarsbegrænsning</h3>
            <p>bollo.io er ikke ansvarlig for skader, der opstår som følge af brug eller manglende evne til at bruge materialer på bollo.io's hjemmeside. Vi er ikke ansvarlige for:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Tab af fortjeneste, salg, forretning eller omsætning</li>
              <li>Forretningsafbrydelse</li>
              <li>Tab af forventede besparelser</li>
              <li>Tab eller beskadigelse af data eller oplysninger</li>
              <li>Tab af forretningsmulighed, goodwill eller omdømme</li>
              <li>Ethvert andet indirekte eller følgeskade</li>
            </ul>
          </section>

          {/* Privacy & data */}
          <section>
            <h3 className="font-bold text-forest text-base mb-2">Oplysninger vi indsamler</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Personlige identifikatorer fra din Google-konto via Google OAuth 2.0, når du integrerer Google Business Profile</li>
              <li>Data genereret via vores AWS-hostede tjenester, såsom serviceforbrugsdata</li>
              <li>Oplysninger fra tilsluttede tredjepartstjenester som Facebook, TripAdvisor og Trustpilot via deres API'er</li>
              <li>Enhver anden personlig information, du giver os via din interaktion med vores tjenester</li>
            </ul>
          </section>

          {/* GDPR rights */}
          <section>
            <h3 className="font-bold text-forest text-base mb-2">Dine rettigheder – GDPR</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Adgang:</strong> Du kan anmode om en kopi af de personoplysninger, vi har om dig.</li>
              <li><strong>Berigtigelse:</strong> Du har ret til at få unøjagtige eller ufuldstændige data korrigeret.</li>
              <li><strong>Sletning:</strong> Du kan anmode om, at vi sletter dine personoplysninger under visse betingelser.</li>
              <li><strong>Begrænsning:</strong> Du kan anmode om begrænsning af behandlingen af dine personoplysninger.</li>
              <li><strong>Indsigelse:</strong> Du har ret til at gøre indsigelse mod behandlingen af dine personoplysninger.</li>
              <li><strong>Portabilitet:</strong> Du kan anmode om, at vi overfører dine data til en anden enhed eller direkte til dig.</li>
            </ul>
          </section>

          {/* Data retention */}
          <section>
            <h3 className="font-bold text-forest text-base mb-2">Dataopbevaring og sletning</h3>
            <p>Vi opbevarer personoplysninger kun, så længe det er nødvendigt i henhold til GDPR. Hvis du sletter din konto, forpligter vi os til at slette alle tilknyttede ikke-lovpligtige oplysninger inden for 5 arbejdsdage.</p>
          </section>

          {/* Third parties */}
          <section>
            <h3 className="font-bold text-forest text-base mb-2">Tredjeparts-API'er og datadeling</h3>
            <p>bollo.io integrerer med flere tredjepartstjenester, herunder TripAdvisor, Facebook, Instagram, Google Business Profile, Stripe, Twilio og Amazon SES. Vi deler kun de oplysninger, der er nødvendige for at udføre de opgaver, de er bestilt til, og vi sikrer, at data behandles i overensstemmelse med GDPR.</p>
          </section>

          {/* Amendments */}
          <section>
            <h3 className="font-bold text-forest text-base mb-2">Ændringer</h3>
            <p>bollo.io forbeholder sig ret til at ændre disse vilkår til enhver tid. Din fortsatte brug af tjenesten udgør accept af de nye vilkår.</p>
          </section>

          {/* Governing law */}
          <section>
            <h3 className="font-bold text-forest text-base mb-2">Gældende lov</h3>
            <p>Disse vilkår er underlagt og fortolkes i overensstemmelse med Danmarks love, og du underkaster dig uigenkaldeligt de danske domstoles eksklusive jurisdiktion.</p>
            <p className="mt-2">Kontakt: <a href="mailto:info@bollo.io" className="text-forest underline">info@bollo.io</a></p>
          </section>

        </div>
      </div>
    </>
  )
}
