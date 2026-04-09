import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import EmergencyBanner from "@/components/EmergencyBanner";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import CookieBanner from "@/components/CookieBanner";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Rohrreinigung Schorn",
    description:
      "Professionelle Rohrreinigung, Kanalreinigung und 24h Notdienst in Schorn und Umgebung.",
    url: "https://rohrreinigung-schorn.de",
    telephone: "+4917012345678",
    email: "info@rohrreinigung-schorn.de",
    priceRange: "€€",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "380",
      bestRating: "5",
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 48.0,
        longitude: 11.35,
      },
      geoRadius: "50000",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Rohrreinigung Dienstleistungen",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Rohrreinigung",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Kanalreinigung",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "24h Notdienst",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Hochdruckspülung",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Kamerainspektion",
          },
        },
      ],
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Was kostet eine Rohrreinigung?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Unsere Rohrreinigung beginnt ab einem Festpreis, den wir Ihnen vorab am Telefon nennen. Es gibt keine versteckten Kosten oder Aufschläge.",
        },
      },
      {
        "@type": "Question",
        name: "Wie schnell sind Sie vor Ort?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In der Regel sind wir innerhalb von 30–60 Minuten nach Ihrem Anruf bei Ihnen.",
        },
      },
      {
        "@type": "Question",
        name: "Arbeiten Sie auch am Wochenende und an Feiertagen?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja! Unser 24/7-Notdienst ist an 365 Tagen im Jahr erreichbar – auch an Wochenenden, Feiertagen und nachts.",
        },
      },
      {
        "@type": "Question",
        name: "Welche Methoden verwenden Sie?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Wir setzen auf modernste Technik: Elektrische Spiralen, Hochdruckspülung mit bis zu 200 bar, TV-Kamerainspektion und umweltfreundliche Reinigungsverfahren.",
        },
      },
      {
        "@type": "Question",
        name: "Geben Sie eine Garantie auf Ihre Arbeit?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja, auf alle unsere Arbeiten geben wir eine Zufriedenheitsgarantie.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <About />
        <Testimonials />
        <EmergencyBanner />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
      <CookieBanner />
    </>
  );
}
