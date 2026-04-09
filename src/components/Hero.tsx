import styles from "./Hero.module.css";

export default function Hero() {
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
          <a href="tel:+4917012345678" className={styles.btnPrimary}>
            📞 Sofort anrufen
          </a>
          <a href="#kontakt" className={styles.btnSecondary}>
            ✉️ Kontakt aufnehmen
          </a>
        </div>

        <div className={styles.trustBar}>
          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>✅</span>
            Festpreisgarantie
          </div>
          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>⚡</span>
            30-60 Min. vor Ort
          </div>
          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>🏆</span>
            Über 10 Jahre Erfahrung
          </div>
          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>💯</span>
            Keine versteckten Kosten
          </div>
        </div>
      </div>
    </section>
  );
}
