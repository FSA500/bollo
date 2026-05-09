'use client'
import { useEffect } from 'react'

interface Props {
  isOpen: boolean
  onClose: () => void
}

export default function CookieModal({ isOpen, onClose }: Props) {
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
              Cookiepolitik & Privatlivspolitik
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

          <section>
            <h3 className="font-bold text-forest text-base mb-2">Dataansvarlig</h3>
            <p>bollo.io ApS<br />CVR DK38531034<br />Asgårdsvej 1, st., 1811 Frederiksberg C, Danmark<br />info@bollo.io</p>
          </section>

          <section>
            <h3 className="font-bold text-forest text-base mb-2">Introduktion</h3>
            <p>Denne cookiepolitik forklarer brugen af cookies og lignende teknologier (f.eks. web beacons) på vores platform, bollo.io, som er nødvendige for dens funktion. Denne politik er beregnet til at hjælpe dig med at forstå, hvordan vi bruger cookies i vores App (SaaS). Læs venligst denne cookiepolitik omhyggeligt.</p>
          </section>

          <section>
            <h3 className="font-bold text-forest text-base mb-2">Forståelse af cookies</h3>
            <p>Cookies er små tekstfiler, der gemmes på din enhed (computer eller mobilenhed), som hjælper os med at forbedre vores apps funktionalitet og din oplevelse. Cookies kan være "Vedvarende" eller "Session"-cookies: Vedvarende cookies forbliver på din personlige computer eller mobilenhed, når du går offline, mens session-cookies slettes, så snart du lukker din webbrowser.</p>
          </section>

          <section>
            <h3 className="font-bold text-forest text-base mb-2">Typer af cookies vi bruger</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Essentielle cookies:</strong> Disse er nødvendige for driften af vores app og inkluderer cookies, der muliggør grundlæggende funktioner som sidenavigation og adgang til sikre områder. Appen kan ikke fungere korrekt uden disse cookies.</li>
              <li><strong>Funktionelle cookies:</strong> Disse cookies hjælper med at huske dine præferencer og forskellige indstillinger.</li>
              <li><strong>Ydelses-cookies:</strong> Disse cookies indsamler oplysninger om, hvordan du bruger appen, f.eks. hvilke sider du besøgte, og hvilke links du klikkede på. Ingen af disse oplysninger kan bruges til at identificere dig.</li>
            </ul>
          </section>

          <section>
            <h3 className="font-bold text-forest text-base mb-2">Samtykke til cookies</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Essentielle cookies:</strong> Vi behøver ikke dit samtykke til at gemme essentielle cookies, da de er kritiske for driften af vores app.</li>
              <li><strong>Ikke-essentielle cookies:</strong> For alle ikke-essentielle cookies kræves dit samtykke. Du kan give samtykke eller framelde disse cookies via vores cookiehåndteringsværktøjer i appindstillingerne.</li>
            </ul>
          </section>

          <section>
            <h3 className="font-bold text-forest text-base mb-2">Håndtering af cookies</h3>
            <p>Du kan administrere dine præferencer og tilbagekalde dit samtykke til enhver tid via vores appindstillinger. Derudover giver de fleste browsere dig mulighed for at blokere og slette cookies. Hvis du blokerer eller sletter cookies, især essentielle cookies, kan det påvirke appens funktionalitet.</p>
          </section>

          <section>
            <h3 className="font-bold text-forest text-base mb-2">Tredjeparts cookies</h3>
            <p>Vores app kan bruge tredjepartstjenester, der kan placere cookies på din enhed, når du bruger vores app for at forbedre dens ydeevne og brugervenlighed. Disse tredjeparter har deres egne privatlivspolitikker, der beskriver, hvordan de bruger sådanne oplysninger.</p>
          </section>

          <section>
            <h3 className="font-bold text-forest text-base mb-2">Oplysninger vi indsamler</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Personlige identifikatorer fra din Google-konto via Google OAuth 2.0, når du integrerer Google Business Profile</li>
              <li>Data genereret via vores AWS-hostede tjenester, såsom serviceforbrugsdata</li>
              <li>Oplysninger fra tilsluttede tredjepartstjenester som Facebook, TripAdvisor og Trustpilot via deres API'er</li>
              <li>Enhver anden personlig information, du giver os via din interaktion med vores tjenester</li>
            </ul>
          </section>

          <section>
            <h3 className="font-bold text-forest text-base mb-2">Hvad er persondata?</h3>
            <p>Persondata er enhver information om personlige eller faktiske omstændigheder, der vedrører en person. Dette kan omfatte navn, fødselsdato, e-mailadresse, postadresse eller telefonnummer, men også online-identifikatorer såsom IP-adresser eller enheds-ID'er.</p>
          </section>

          <section>
            <h3 className="font-bold text-forest text-base mb-2">Data vi indsamler direkte</h3>
            <p>Behandlingen af persondata afhænger af arten af din kontakt. Ud over dit navn og din e-mailadresse, IP-adresse eller telefonnummer indsamler vi normalt konteksten af din besked. De persondata, der indsamles, når du kontakter os, bruges til at behandle din anmodning, og det juridiske grundlag er dit samtykke.</p>
          </section>

          <section>
            <h3 className="font-bold text-forest text-base mb-2">Registrering</h3>
            <p>Som en del af registreringsprocessen angiver brugerne: a) Fulde navn; b) Brugernavn; c) E-mailadresse; d) Adgangskode. Dataene vil blive brugt til at oprette og bruge kontoen samt til at levere vores tjenester. Det juridiske grundlag er opfyldelsen af vores kontraktlige forpligtelser og i individuelle tilfælde vores juridiske forpligtelser samt samtykke.</p>
          </section>

          <section>
            <h3 className="font-bold text-forest text-base mb-2">Brug af dine oplysninger</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>At levere, vedligeholde og forbedre bollo.io's tjenester</li>
              <li>At personliggøre din oplevelse med vores tilbud</li>
              <li>Til kommunikation om serviceopdateringer og support</li>
              <li>At overholde vores juridiske forpligtelser og beskytte vores brugeres rettigheder</li>
            </ul>
          </section>

          <section>
            <h3 className="font-bold text-forest text-base mb-2">Datasikkerhed</h3>
            <p>Vores hjemmeside bruger SSL- eller TLS-kryptering for at sikre sikkerheden ved databehandling. Vi har derudover implementeret talrige sikkerhedsforanstaltninger på vores AWS-infrastruktur for at beskytte dine personoplysninger mod uautoriseret adgang, ændring og ødelæggelse.</p>
          </section>

          <section>
            <h3 className="font-bold text-forest text-base mb-2">Dine rettigheder – GDPR</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Adgang:</strong> Anmod om en kopi af de data, vi har om dig.</li>
              <li><strong>Berigtigelse:</strong> Ret data, der er unøjagtige eller ufuldstændige.</li>
              <li><strong>Sletning:</strong> Anmod om sletning af dine data under visse betingelser.</li>
              <li><strong>Begrænsning:</strong> Begræns, hvordan vi behandler dine data.</li>
              <li><strong>Indsigelse:</strong> Gør indsigelse mod behandlingen af dine data.</li>
              <li><strong>Portabilitet:</strong> Overfør dine data til en anden tjeneste.</li>
              <li><strong>Tilbagekaldelse af samtykke:</strong> Tilbagekald tidligere givet samtykke.</li>
            </ul>
            <p className="mt-2">Kontakt os på <a href="mailto:info@bollo.io" className="text-forest underline">info@bollo.io</a> for at udøve disse rettigheder.</p>
          </section>

          <section>
            <h3 className="font-bold text-forest text-base mb-2">Tredjeparts-API'er og datadeling</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>TripAdvisor API:</strong> Adgang til og visning af ratings, anmeldelser og relaterede data.</li>
              <li><strong>Facebook API:</strong> Forbindelse til din Facebook-virksomhedsprofil til styring af interaktioner og dataanalyse.</li>
              <li><strong>Instagram API:</strong> Integration med din Instagram-virksomhedskonto til social media-styring og analyse.</li>
              <li><strong>Google Business Profile API:</strong> Interaktion med din Google-virksomhedsfortegnelse og anmeldelsesstyring.</li>
              <li><strong>Stripe:</strong> Sikker håndtering af kreditkorttransaktioner og abonnementsstyring (PCI Level 1).</li>
              <li><strong>Twilio:</strong> Afsendelse af SMS-notifikationer relateret til vores service.</li>
              <li><strong>Amazon SES:</strong> Afsendelse af transaktionelle og marketing-e-mails til vores brugere.</li>
            </ul>
          </section>

          <section>
            <h3 className="font-bold text-forest text-base mb-2">Dataopbevaring og sletning</h3>
            <p>Vi opbevarer personoplysninger kun, så længe det er nødvendigt i henhold til GDPR. Hvis du sletter din konto, forpligter vi os til at slette alle tilknyttede ikke-lovpligtige oplysninger inden for 5 arbejdsdage. Opbevaringsperioder under skat- og handelslovgivning er typisk to til seks år.</p>
          </section>

          <section>
            <h3 className="font-bold text-forest text-base mb-2">Ændringer til denne politik</h3>
            <p>Vi kan opdatere denne cookiepolitik for at afspejle ændringer i vores praksis. Eventuelle ændringer vil blive offentliggjort på denne side med den opdaterede revisionsdato.</p>
            <p className="mt-2">Spørgsmål? Kontakt os på <a href="mailto:info@bollo.io" className="text-forest underline">info@bollo.io</a>.</p>
          </section>

        </div>
      </div>
    </>
  )
}
