import styles from "./Services.module.css";

const services = [
  {
    icon: "🚿",
    title: "Rohrreinigung",
    text: "Professionelle Reinigung von verstopften Rohren in Bad, Küche und WC. Wir setzen auf modernste Spiraltechnik und umweltfreundliche Verfahren.",
  },
  {
    icon: "🏠",
    title: "Kanalreinigung",
    text: "Gründliche Reinigung und Wartung Ihrer Kanalisation. Wir entfernen hartnäckige Ablagerungen und beugen zukünftigen Verstopfungen vor.",
  },
  {
    icon: "💧",
    title: "Hochdruckspülung",
    text: "Mit bis zu 200 bar Wasserdruck lösen wir auch die hartnäckigsten Verstopfungen schnell und zuverlässig – schonend für Ihre Rohre.",
  },
  {
    icon: "📹",
    title: "Kamerainspektion",
    text: "Moderne TV-Kamerainspektion zur präzisen Ortung von Rohrschäden, Verstopfungen und Undichtigkeiten – ohne aufwendige Grabungsarbeiten.",
  },
  {
    icon: "🚨",
    title: "24h Notdienst",
    text: "Rund um die Uhr erreichbar, auch an Wochenenden und Feiertagen. Wir sind in kürzester Zeit bei Ihnen und lösen Ihr Problem sofort.",
  },
  {
    icon: "🔧",
    title: "Reparatur & Sanierung",
    text: "Fachgerechte Reparatur und Sanierung beschädigter Rohrleitungen. Wir arbeiten nachhaltig und bieten langfristige Lösungen.",
  },
];

const teamMembers = [
  {
    name: "Mathias",
    role: "Meister & Geschäftsführer",
    initials: "MA",
  },
  {
    name: "Peter",
    role: "Techniker & Spezialist",
    initials: "P",
  },
  {
    name: "Michael",
    role: "Techniker & Berater",
    initials: "MI",
  },
];

export default function Services() {
  return (
    <section id="leistungen" className={styles.services}>
      <div className={styles.servicesInner}>
        <span className={styles.sectionLabel}>Unsere Leistungen</span>
        <h2 className={styles.sectionTitle}>
          Professionelle Rohrreinigung – alles aus einer Hand
        </h2>
        <p className={styles.sectionSubtitle}>
          Von der einfachen Verstopfung bis zur kompletten Kanalsanierung –
          wir bieten Ihnen das volle Programm.
        </p>

        <div className={styles.grid}>
          {services.map((service) => (
            <div key={service.title} className={styles.card}>
              <div className={styles.cardIcon}>{service.icon}</div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardText}>{service.text}</p>
            </div>
          ))}
        </div>

        {/* Team Section with smooth transition */}
        <div className={styles.teamDivider}>
          <div className={styles.dividerLine}></div>
          <span className={styles.dividerIcon}>👥</span>
          <div className={styles.dividerLine}></div>
        </div>

        <div className={styles.teamSection}>
          <span className={styles.teamLabel}>Unser starkes Team</span>
          <h2 className={styles.teamTitle}>Die Profis hinter dem Erfolg</h2>
          <p className={styles.teamSubtitle}>
            Erfahrene Fachkräfte, die mit Leidenschaft und Know-how für Sie im Einsatz sind.
          </p>

          <div className={styles.teamGrid}>
            {teamMembers.map((member, index) => (
              <div 
                key={member.name} 
                className={styles.teamCard}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className={styles.teamImageWrapper}>
                  <div className={styles.teamImageGlow}></div>
                  <div className={styles.teamAvatar}>
                    {member.initials}
                  </div>
                </div>
                <h3 className={styles.teamName}>{member.name}</h3>
                <p className={styles.teamRole}>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
