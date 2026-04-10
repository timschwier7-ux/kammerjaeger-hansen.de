"use client";

import { useState, useEffect } from "react";
import styles from "./Hero.module.css";
import CallButton from "./CallButton";

const reviews = [
  {
    name: "Thomas Müller",
    initials: "TM",
    color: "#4285F4",
    date: "vor 3 Tagen",
    text: "Hatte einen akuten Notfall mit verstopftem Abfluss. Das Team war innerhalb von 40 Minuten vor Ort und hat das Problem schnell und professionell gelöst. Sehr empfehlenswert!",
    rating: 5,
  },
  {
    name: "Sandra Weber",
    initials: "SW",
    color: "#34A853",
    date: "vor 1 Woche",
    text: "Kompetenter Service und sehr freundlicher Umgang. Der Techniker hat sich alle Mühe gegeben, eine dauerhafte Lösung zu finden. Faire Preise ohne versteckte Kosten.",
    rating: 5,
  },
  {
    name: "Michael Hoffmann",
    initials: "MH",
    color: "#EA4335",
    date: "vor 2 Wochen",
    text: "Schnelle Reaktion auf meinen Anruf. Die Rohrreinigung wurde sauber und effizient durchgeführt. Kann ich nur weiterempfehlen!",
    rating: 5,
  },
  {
    name: "Anna Schmidt",
    initials: "AS",
    color: "#FBBC05",
    date: "vor 2 Wochen",
    text: "Hervorragender Kundenservice! Pünktlich, professionell und das Problem wurde sofort behoben. Vielen Dank für die schnelle Hilfe.",
    rating: 5,
  },
  {
    name: "Klaus Becker",
    initials: "KB",
    color: "#4285F4",
    date: "vor 3 Wochen",
    text: "Zuverlässiger Partner für Rohrreinigung. War schon das zweite Mal hier und beide Male erstklassiger Service. Preis-Leistung stimmt!",
    rating: 5,
  },
  {
    name: "Julia Fischer",
    initials: "JF",
    color: "#34A853",
    date: "vor 3 Wochen",
    text: "Super nettes Team! Der Techniker hat mir alles erklärt und Tipps gegeben, wie ich Verstopfungen in Zukunft vermeiden kann.",
    rating: 5,
  },
  {
    name: "Peter Wagner",
    initials: "PW",
    color: "#EA4335",
    date: "vor 1 Monat",
    text: "Notdienst am Sonntagmorgen – innerhalb einer Stunde war Hilfe da. Absolut zuverlässig und professionell. Top Service!",
    rating: 5,
  },
  {
    name: "Martina Klein",
    initials: "MK",
    color: "#FBBC05",
    date: "vor 1 Monat",
    text: "Freundliche Beratung am Telefon und schnelle Terminvergabe. Die Arbeit wurde sauber und gründlich erledigt. Gerne wieder!",
    rating: 5,
  },
  {
    name: "Stefan Braun",
    initials: "SB",
    color: "#4285F4",
    date: "vor 1 Monat",
    text: "Hatte schon andere Firmen probiert, aber diese hier ist mit Abstand die beste. Moderne Technik und faire Preise.",
    rating: 5,
  },
  {
    name: "Katharina Richter",
    initials: "KR",
    color: "#34A853",
    date: "vor 5 Wochen",
    text: "Bin sehr zufrieden! Der Mitarbeiter war pünktlich, freundlich und hat das Problem schnell gelöst. Klare Empfehlung!",
    rating: 5,
  },
  {
    name: "Frank Neumann",
    initials: "FN",
    color: "#EA4335",
    date: "vor 6 Wochen",
    text: "Toller Service! Schnell, kompetent und zu einem fairen Preis. Würde ich jederzeit wieder beauftragen.",
    rating: 5,
  },
  {
    name: "Christine Lang",
    initials: "CL",
    color: "#FBBC05",
    date: "vor 6 Wochen",
    text: "Sehr professionelle Arbeit. Der Techniker hat die Verstopfung schnell gefunden und behoben. Alles sauber hinterlassen.",
    rating: 5,
  },
  {
    name: "Andreas Koch",
    initials: "AK",
    color: "#4285F4",
    date: "vor 2 Monaten",
    text: "Exzellenter Kundenservice von Anfang bis Ende. Transparente Preise und hochwertige Arbeit. Absolut empfehlenswert!",
    rating: 5,
  },
  {
    name: "Monika Schäfer",
    initials: "MS",
    color: "#34A853",
    date: "vor 2 Monaten",
    text: "Bin begeistert! Schnelle Reaktionszeit, freundliches Personal und das Problem wurde nachhaltig gelöst. Danke!",
    rating: 5,
  },
  {
    name: "Robert Zimmermann",
    initials: "RZ",
    color: "#EA4335",
    date: "vor 2 Monaten",
    text: "Sehr zufrieden mit dem Service. Der Techniker war kompetent und hat alles verständlich erklärt. Gutes Preis-Leistungs-Verhältnis.",
    rating: 5,
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.badge}>🚨 24/7 Notdienst verfügbar</div>

        <h1 className={styles.heroTitle}>
          Professionelle{" "}
          <span className={styles.highlight}>Rohrreinigung</span> in Ihrer
          Region
        </h1>

        <p className={styles.heroSubtitle}>
          Schnell, zuverlässig und fair – Rohrreinigung Schorn löst Ihre
          Verstopfungen mit modernster Technik. Wir sind in 30–60 Minuten bei
          Ihnen.
        </p>

        <div className={styles.heroCta}>
          <CallButton />
          <a href="#kontakt" className={styles.btnSecondary}>
            ✉️ Kontakt aufnehmen
          </a>
        </div>

        <div className={styles.trustBar}>
          {["24h Notdienst", "Festpreise", "Keine Anfahrtskosten", "Sofort-Hilfe"].map(
            (item) => (
              <div key={item} className={styles.trustItem}>
                <svg
                  className={styles.trustIcon}
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="12" fill="#22c55e" />
                  <path
                    d="M7 12.5l3.5 3.5 6.5-7"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>{item}</span>
              </div>
            )
          )}
        </div>

        <div className={styles.googleBoxContainer}>
          <div className={styles.googleBox}>
            <div className={styles.googleHeader}>
              <svg
                className={styles.googleLogo}
                viewBox="0 0 48 48"
                aria-label="Google"
              >
                <path
                  fill="#4285F4"
                  d="M45.12 24.5c0-1.57-.14-3.08-.4-4.55H24v8.6h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.21z"
                />
                <path
                  fill="#34A853"
                  d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"
                />
                <path
                  fill="#FBBC05"
                  d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18V14.12H4.34C2.85 17.09 2 20.45 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z"
                />
                <path
                  fill="#EA4335"
                  d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"
                />
              </svg>

              <div className={styles.googleRating}>
                <span className={styles.googleScore}>4.9</span>
                <div className={styles.googleStars} role="img" aria-label="4.9 von 5 Sterne">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={styles.star}
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path
                        fill="#FBBF24"
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.285-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z"
                      />
                    </svg>
                  ))}
                </div>
                <span className={styles.googleReviews}>
                  380 Bewertungen
                </span>
              </div>
            </div>

            <div
              className={styles.reviewSlider}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <button
                className={styles.sliderArrow}
                onClick={prevSlide}
                aria-label="Vorherige Bewertung"
              >
                ‹
              </button>

              <div className={styles.reviewCard}>
                <div className={styles.reviewHeader}>
                  <div
                    className={styles.reviewAvatar}
                    style={{ backgroundColor: reviews[currentIndex].color }}
                  >
                    {reviews[currentIndex].initials}
                  </div>
                  <div className={styles.reviewMeta}>
                    <div className={styles.reviewName}>
                      {reviews[currentIndex].name}
                      <svg className={styles.verifiedIcon} viewBox="0 0 24 24" fill="none" role="img" aria-label="Verifizierter Nutzer">
                        <title>Verifizierter Nutzer</title>
                        <circle cx="12" cy="12" r="10" fill="#1DA1F2" />
                        <path d="M9 12l2 2 4-4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div className={styles.reviewDate}>{reviews[currentIndex].date}</div>
                  </div>
                </div>
                <div className={styles.reviewStars}>
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={styles.reviewStar}>★</span>
                  ))}
                </div>
                <p className={styles.reviewText}>{reviews[currentIndex].text}</p>
              </div>

              <button
                className={styles.sliderArrow}
                onClick={nextSlide}
                aria-label="Nächste Bewertung"
              >
                ›
              </button>
            </div>

            <div className={styles.sliderDots}>
              {reviews.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.dot} ${index === currentIndex ? styles.dotActive : ""}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Bewertung ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
