"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Header.module.css";

const navItems = [
  { label: "Startseite", href: "#hero" },
  { label: "Leistungen", href: "#leistungen" },
  { label: "Über uns", href: "#ueber-uns" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}
    >
      <div className={styles.headerInner}>
        <a href="#hero" className={styles.logo}>
          <Image
            src="/logo.png"
            alt="Rohrexperte Logo"
            width={40}
            height={40}
            className={styles.logoIcon}
          />
          Rohrexperte
        </a>

        <button
          className={styles.menuButton}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menü öffnen"
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={styles.navLink}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a href="tel:+4917012345678" className={styles.phoneButton}>
            📞 Jetzt anrufen
          </a>
        </nav>
      </div>
    </header>
  );
}
