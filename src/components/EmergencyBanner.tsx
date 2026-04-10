import styles from "./EmergencyBanner.module.css";
import CallButton from "./CallButton";

export default function EmergencyBanner() {
  return (
    <section className={styles.emergency}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <div className={styles.badge}>🚨 Notfall?</div>
          <h2 className={styles.title}>
            Verstopfung? Wir sind <span className={styles.highlight}>sofort</span> für Sie da!
          </h2>
          <p className={styles.subtitle}>
            24 Stunden am Tag, 7 Tage die Woche, 365 Tage im Jahr – auch an
            Feiertagen. Rufen Sie jetzt an und wir sind innerhalb von 30–60
            Minuten bei Ihnen.
          </p>
          <div className={styles.ctas}>
            <CallButton />
            <div className={styles.freeNote}>
              ✅ Kostenlose Erstberatung am Telefon
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
