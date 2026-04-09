"use client";

import { useState, useEffect } from "react";
import styles from "./FloatingCTA.module.css";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className={styles.floating}>
      <a
        href="tel:+4917012345678"
        className={styles.phoneBtn}
        aria-label="Jetzt anrufen"
      >
        <span className={styles.pulse} />
        <span className={styles.icon}>📞</span>
      </a>
    </div>
  );
}
