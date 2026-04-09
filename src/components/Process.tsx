import styles from "./Process.module.css";

const steps = [
  {
    number: "01",
    icon: "📞",
    title: "Anruf & Beratung",
    text: "Rufen Sie uns an – 24/7 erreichbar. Wir beraten Sie kostenlos am Telefon und geben Ihnen sofort eine transparente Preisauskunft.",
  },
  {
    number: "02",
    icon: "🚗",
    title: "Schnelle Anfahrt",
    text: "Unser Techniker ist in 30–60 Minuten bei Ihnen vor Ort. Wir kommen mit allem nötigen Equipment direkt zu Ihnen.",
  },
  {
    number: "03",
    icon: "🔍",
    title: "Diagnose & Analyse",
    text: "Wir analysieren das Problem mit modernster Kameratechnik und besprechen die beste Lösung mit Ihnen – transparent und verständlich.",
  },
  {
    number: "04",
    icon: "✅",
    title: "Problem gelöst",
    text: "Professionelle Beseitigung der Verstopfung zum vereinbarten Festpreis. Sauber, schnell und mit Zufriedenheitsgarantie.",
  },
];

export default function Process() {
  return (
    <section className={styles.process}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.sectionLabel}>So funktioniert&apos;s</span>
          <h2 className={styles.sectionTitle}>
            In 4 Schritten zur freien Leitung
          </h2>
          <p className={styles.sectionSubtitle}>
            Unkompliziert, schnell und transparent – so arbeiten wir.
          </p>
        </div>

        <div className={styles.timeline}>
          {steps.map((step, i) => (
            <div key={step.number} className={styles.step}>
              <div className={styles.stepLeft}>
                <div className={styles.stepNumber}>{step.number}</div>
                {i < steps.length - 1 && <div className={styles.connector} />}
              </div>
              <div className={styles.stepCard}>
                <div className={styles.stepIcon}>{step.icon}</div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepText}>{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
