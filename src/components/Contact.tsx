"use client";

import styles from "./Contact.module.css";

const contactInfo = [
  {
    icon: "📞",
    label: "Telefon (24/7)",
    value: "+49 170 1234 5678",
    href: "tel:+4917012345678",
  },
  {
    icon: "✉️",
    label: "E-Mail",
    value: "info@rohrexperte.de",
    href: "mailto:info@rohrexperte.de",
  },
  {
    icon: "📍",
    label: "Standort",
    value: "Ihre Region",
  },
  {
    icon: "🕐",
    label: "Erreichbarkeit",
    value: "24 Stunden / 7 Tage",
  },
];

export default function Contact() {
  return (
    <section id="kontakt" className={styles.contact}>
      <div className={styles.contactInner}>
        <div>
          <span className={styles.sectionLabel}>Kontakt</span>
          <h2 className={styles.sectionTitle}>
            Wir sind für Sie da – jederzeit
          </h2>
          <p className={styles.contactDesc}>
            Haben Sie eine Verstopfung oder brauchen professionelle
            Rohrreinigung? Kontaktieren Sie uns – wir sind rund um die Uhr
            erreichbar und helfen Ihnen schnell und zuverlässig.
          </p>

          <div className={styles.infoList}>
            {contactInfo.map((item) => (
              <div key={item.label} className={styles.infoItem}>
                <div className={styles.infoIcon}>{item.icon}</div>
                <div>
                  <div className={styles.infoLabel}>{item.label}</div>
                  {item.href ? (
                    <a href={item.href} className={styles.infoValue}>
                      {item.value}
                    </a>
                  ) : (
                    <div className={styles.infoValue}>{item.value}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <h3 className={styles.formTitle}>Schnellanfrage senden</h3>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.formLabel}>
                Name *
              </label>
              <input
                id="name"
                type="text"
                className={styles.formInput}
                placeholder="Ihr Name"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="phone" className={styles.formLabel}>
                Telefon *
              </label>
              <input
                id="phone"
                type="tel"
                className={styles.formInput}
                placeholder="Ihre Telefonnummer"
                required
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.formLabel}>
              E-Mail
            </label>
            <input
              id="email"
              type="email"
              className={styles.formInput}
              placeholder="Ihre E-Mail-Adresse"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.formLabel}>
              Ihr Anliegen *
            </label>
            <textarea
              id="message"
              className={styles.formTextarea}
              placeholder="Beschreiben Sie kurz Ihr Problem..."
              required
            />
          </div>

          <button type="submit" className={styles.submitBtn}>
            Anfrage senden
          </button>
        </form>
      </div>
    </section>
  );
}
