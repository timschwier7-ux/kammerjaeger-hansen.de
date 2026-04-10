import React from "react";
import styles from "./About.module.css";
import CallButton from "./CallButton";

const features = [
  {
    icon: "🎯",
    label: "Präzise Arbeit",
    desc: "Modernste Technik",
  },
  {
    icon: "💰",
    label: "Faire Preise",
    desc: "Transparent & ehrlich",
  },
  {
    icon: "⏱️",
    label: "Schnell vor Ort",
    desc: "In 30-60 Minuten",
  },
  {
    icon: "🛡️",
    label: "Garantie",
    desc: "Auf alle Arbeiten",
  },
];

const stats = [
  { number: "10+", label: "Jahre Erfahrung" },
  { number: "5.000+", label: "Zufriedene Kunden" },
  { number: "24/7", label: "Notdienst" },
  { number: "100%", label: "Kundenzufriedenheit" },
];

export default function About() {
  return (
    <section id="ueber-uns" className={styles.about}>
      <div className={styles.aboutInner}>
        <div>
          <span className={styles.sectionLabel}>Über uns</span>
          <h2 className={styles.sectionTitle}>
            Ihr zuverlässiger Partner für Rohrreinigung
          </h2>
          <p className={styles.aboutText}>
            Rohrreinigung Schorn steht seit über 10 Jahren für professionelle
            und zuverlässige Rohrreinigung. Unser erfahrenes Team setzt auf
            modernste Technik und faire Preise. Ob Notdienst am Wochenende oder
            geplante Kanalreinigung – wir sind immer für Sie da.
          </p>

          <div className={styles.features}>
            {features.map((f) => (
              <div key={f.label} className={styles.feature}>
                <div className={styles.featureIcon}>{f.icon}</div>
                <div>
                  <div className={styles.featureLabel}>{f.label}</div>
                  <div className={styles.featureDesc}>{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.ctaRow}>
            <CallButton />
          </div>
        </div>

        <div className={styles.statsPanel}>
          <div className={styles.statsGrid}>
            {stats.map((stat, i) => (
              <React.Fragment key={stat.label}>
                {i === 2 && <div className={styles.statsDivider} />}
                <div className={styles.stat}>
                  <div className={styles.statNumber}>{stat.number}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
