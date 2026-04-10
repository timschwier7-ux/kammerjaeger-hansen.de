"use client";

import { useState, useEffect } from "react";
import styles from "./FloatingCTA.module.css";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`${styles.bar} ${visible ? styles.barVisible : ""}`} aria-hidden={!visible}>
      <div className={styles.inner}>
        <div className={styles.info}>
          <span className={styles.dot} aria-hidden="true" />
          <div className={styles.textGroup}>
            <span className={styles.availability}>Jetzt verfügbar · 24/7</span>
            <span className={styles.phone}>+49 170 1234 5678</span>
          </div>
        </div>
        <a
          href="tel:+4917012345678"
          className={styles.callBtn}
          aria-label="Jetzt anrufen"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            width="20"
            height="20"
            aria-hidden="true"
          >
            <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V21a1 1 0 01-1 1A17 17 0 013 5a1 1 0 011-1h3.5a1 1 0 011 1 11.47 11.47 0 00.57 3.58 1 1 0 01-.25 1.01l-2.2 2.2z" />
          </svg>
          Anrufen
        </a>
      </div>
    </div>
  );
}
