import type { Metadata } from "next";
import Link from "next/link";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "Impressum – Rohrexperte",
};

export default function Impressum() {
  return (
    <div className={styles.legal}>
      <Link href="/" className={styles.backLink}>
        ← Zurück zur Startseite
      </Link>

      <h1>Impressum</h1>

      <h2>Angaben gemäß § 5 TMG</h2>
      <p>
        Rohrexperte
        <br />
        [Vorname Nachname]
        <br />
        [Straße und Hausnummer]
        <br />
        [PLZ Ort]
      </p>

      <h2>Kontakt</h2>
      <p>
        Telefon: +49 170 1234 5678
        <br />
        E-Mail: info@rohrexperte.de
      </p>

      <h2>Umsatzsteuer-ID</h2>
      <p>
        Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
        <br />
        [USt-IdNr. einfügen]
      </p>

      <h2>Streitschlichtung</h2>
      <p>
        Die Europäische Kommission stellt eine Plattform zur
        Online-Streitbeilegung (OS) bereit:{" "}
        <a
          href="https://ec.europa.eu/consumers/odr"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://ec.europa.eu/consumers/odr
        </a>
        .
      </p>
      <p>
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
        vor einer Verbraucherschlichtungsstelle teilzunehmen.
      </p>
    </div>
  );
}
