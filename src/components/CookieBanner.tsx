"use client";

import { useState, useEffect } from "react";
import styles from "./CookieBanner.module.css";

const COOKIE_KEY = "rohrexperte-cookies-accepted";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem(COOKIE_KEY);
    if (!accepted) {
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(COOKIE_KEY, "all");
    setVisible(false);
  };

  const acceptEssential = () => {
    localStorage.setItem(COOKIE_KEY, "essential");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.banner}>
        <div className={styles.icon}>🍪</div>
        <div className={styles.content}>
          <h3 className={styles.title}>Cookie-Einstellungen</h3>
          <p className={styles.text}>
            Wir verwenden Cookies, um Ihnen die beste Erfahrung auf unserer
            Website zu bieten. Essentielle Cookies sind für die Funktionalität
            der Seite notwendig. Weitere Informationen finden Sie in unserer{" "}
            <a href="/datenschutz" className={styles.link}>
              Datenschutzerklärung
            </a>
            .
          </p>
        </div>
        <div className={styles.actions}>
          <button onClick={accept} className={styles.acceptAll}>
            Alle akzeptieren
          </button>
          <button onClick={acceptEssential} className={styles.acceptEssential}>
            Nur essenzielle
          </button>
        </div>
      </div>
    </div>
  );
}
