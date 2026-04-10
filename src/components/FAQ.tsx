"use client";

import { useState } from "react";
import styles from "./FAQ.module.css";
import CallButton from "./CallButton";

const faqs = [
  {
    question: "Was kostet eine Rohrreinigung?",
    answer:
      "Unsere Rohrreinigung beginnt ab einem Festpreis, den wir Ihnen vorab am Telefon nennen. Es gibt keine versteckten Kosten oder Aufschläge – was wir Ihnen sagen, das gilt. Die genauen Kosten hängen von Art und Umfang der Verstopfung ab.",
  },
  {
    question: "Wie schnell sind Sie vor Ort?",
    answer:
      "In der Regel sind wir innerhalb von 30–60 Minuten nach Ihrem Anruf bei Ihnen. Im Notfall priorisieren wir Ihren Einsatz und kommen so schnell wie möglich.",
  },
  {
    question: "Arbeiten Sie auch am Wochenende und an Feiertagen?",
    answer:
      "Ja! Unser 24/7-Notdienst ist an 365 Tagen im Jahr erreichbar – auch an Wochenenden, Feiertagen und nachts. Verstopfungen richten sich nicht nach Öffnungszeiten, und wir auch nicht.",
  },
  {
    question: "Welche Bereiche decken Sie ab?",
    answer:
      "Wir sind in der Region Schorn und Umgebung tätig, einschließlich München, Starnberg, Fürstenfeldbruck, Germering, Gauting, Gilching und vielen weiteren Orten in Oberbayern.",
  },
  {
    question: "Welche Methoden verwenden Sie?",
    answer:
      "Wir setzen auf modernste Technik: Elektrische Spiralen, Hochdruckspülung mit bis zu 200 bar, TV-Kamerainspektion und umweltfreundliche Reinigungsverfahren. Die Methode wird individuell auf Ihr Problem abgestimmt.",
  },
  {
    question: "Muss ich bei einer Kamerainspektion Wände aufreißen?",
    answer:
      "Nein! Unsere TV-Kamerainspektion ist minimalinvasiv. Wir führen eine spezielle Kamera durch die bestehenden Rohre und können so Schäden und Verstopfungen genau orten – ganz ohne Grabungs- oder Abrissarbeiten.",
  },
  {
    question: "Geben Sie eine Garantie auf Ihre Arbeit?",
    answer:
      "Ja, auf alle unsere Arbeiten geben wir eine Zufriedenheitsgarantie. Sollte die Verstopfung innerhalb kurzer Zeit erneut auftreten, kommen wir kostenlos zurück und beheben das Problem erneut.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpen(open === index ? null : index);
  };

  return (
    <section id="faq" className={styles.faq}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.sectionLabel}>Häufige Fragen</span>
          <h2 className={styles.sectionTitle}>
            Fragen & Antworten
          </h2>
          <p className={styles.sectionSubtitle}>
            Die wichtigsten Fragen unserer Kunden – auf einen Blick beantwortet.
          </p>
        </div>

        <div className={styles.list}>
          {faqs.map((faq, i) => (
            <div
              key={faq.question}
              className={`${styles.item} ${open === i ? styles.itemOpen : ""}`}
            >
              <button
                className={styles.question}
                onClick={() => toggle(i)}
                aria-expanded={open === i}
              >
                <span>{faq.question}</span>
                <span className={styles.chevron}>
                  {open === i ? "−" : "+"}
                </span>
              </button>
              <div
                className={styles.answer}
                style={{
                  maxHeight: open === i ? "500px" : "0",
                }}
              >
                <p className={styles.answerText}>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.ctaRow}>
          <CallButton />
        </div>
      </div>
    </section>
  );
}
