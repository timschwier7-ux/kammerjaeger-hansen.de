import styles from "./Testimonials.module.css";

const testimonials = [
  {
    name: "Marco S.",
    location: "München",
    rating: 5,
    text: "Super schneller Service! Um 22 Uhr angerufen, um 22:40 war der Techniker da. Verstopfung im Bad wurde professionell und sauber behoben. Klare Empfehlung!",
    date: "vor 2 Wochen",
  },
  {
    name: "Sabine K.",
    location: "Starnberg",
    rating: 5,
    text: "Endlich ein Rohrreiniger, der faire Preise hat! Keine versteckten Kosten, super freundlich und die Arbeit war einwandfrei. Komme wieder, hoffentlich nicht bald 😄",
    date: "vor 1 Monat",
  },
  {
    name: "Thomas W.",
    location: "Fürstenfeldbruck",
    rating: 5,
    text: "Kanalreinigung mit Kamerainspektion – alles top erklärt und transparent. Das Team war pünktlich, professionell und hat alles sauber hinterlassen.",
    date: "vor 3 Wochen",
  },
  {
    name: "Elena M.",
    location: "Germering",
    rating: 5,
    text: "Notfall am Sonntagmorgen – Küche stand unter Wasser. Innerhalb von 30 Minuten war Hilfe da. Absolut zuverlässig und professionell. Vielen Dank!",
    date: "vor 1 Woche",
  },
  {
    name: "Andreas B.",
    location: "Gauting",
    rating: 5,
    text: "Hatte schon andere Firmen hier – keine kam an Rohrreinigung Schorn ran. Modernste Technik, ehrliche Beratung und der beste Preis in der Region.",
    date: "vor 2 Monaten",
  },
  {
    name: "Lisa F.",
    location: "Gilching",
    rating: 5,
    text: "Von der telefonischen Beratung bis zur Ausführung – alles 5 Sterne! Sehr kompetent und super nett. Kann ich nur weiterempfehlen.",
    date: "vor 3 Wochen",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className={styles.stars} aria-label={`${count} von 5 Sternen`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < count ? styles.starFilled : styles.star}>
          ★
        </span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.sectionLabel}>Kundenstimmen</span>
          <h2 className={styles.sectionTitle}>
            Was unsere Kunden über uns sagen
          </h2>
          <p className={styles.sectionSubtitle}>
            Über 5.000 zufriedene Kunden vertrauen auf unseren Service.
            Lesen Sie, was sie erlebt haben.
          </p>

          <div className={styles.ratingOverview}>
            <div className={styles.bigRating}>4.9</div>
            <div>
              <Stars count={5} />
              <div className={styles.ratingCount}>
                basierend auf 380+ Bewertungen
              </div>
            </div>
          </div>
        </div>

        <div className={styles.grid}>
          {testimonials.map((t) => (
            <div key={t.name} className={styles.card}>
              <Stars count={t.rating} />
              <p className={styles.cardText}>&ldquo;{t.text}&rdquo;</p>
              <div className={styles.cardFooter}>
                <div className={styles.avatar}>
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className={styles.cardName}>{t.name}</div>
                  <div className={styles.cardMeta}>
                    {t.location} · {t.date}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
