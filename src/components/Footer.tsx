import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div>
          <div className={styles.footerLogo}>
            <Image
              src="/logo.png"
              alt="Rohrexperte Logo"
              width={40}
              height={40}
              className={styles.footerLogoImg}
            />
            Rohrexperte
          </div>
          <p className={styles.footerDesc}>
            Ihr zuverlässiger Partner für professionelle Rohrreinigung,
            Kanalreinigung und 24h-Notdienst in Ihrer Region.
          </p>
        </div>

        <div>
          <h4 className={styles.footerHeading}>Leistungen</h4>
          <div className={styles.footerLinks}>
            <a href="#leistungen" className={styles.footerLink}>
              Rohrreinigung
            </a>
            <a href="#leistungen" className={styles.footerLink}>
              Kanalreinigung
            </a>
            <a href="#leistungen" className={styles.footerLink}>
              Hochdruckspülung
            </a>
            <a href="#leistungen" className={styles.footerLink}>
              Kamerainspektion
            </a>
            <a href="#leistungen" className={styles.footerLink}>
              24h Notdienst
            </a>
            <a href="#faq" className={styles.footerLink}>
              Häufige Fragen
            </a>
          </div>
        </div>

        <div>
          <h4 className={styles.footerHeading}>Kontakt</h4>
          <div className={styles.footerLinks}>
            <a href="tel:+4917012345678" className={styles.footerLink}>
              📞 +49 170 1234 5678
            </a>
            <a
              href="mailto:info@rohrexperte.de"
              className={styles.footerLink}
            >
              ✉️ info@rohrexperte.de
            </a>
            <span className={styles.footerLink}>📍 Ihre Region</span>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <span>
          &copy; {currentYear} Rohrexperte. Alle Rechte vorbehalten.
        </span>
        <div className={styles.footerBottomLinks}>
          <a href="/impressum" className={styles.footerBottomLink}>
            Impressum
          </a>
          <a href="/datenschutz" className={styles.footerBottomLink}>
            Datenschutz
          </a>
        </div>
      </div>
    </footer>
  );
}
