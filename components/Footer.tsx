"use client";

import styles from "./Footer.module.css";

const links = [
  { label: "Om oss", href: "#om-oss" },
  { label: "Tjänster", href: "#tjanster" },
  { label: "Recensioner", href: "#recensioner" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.topLine} />
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <a href="#hero" className={styles.logo} aria-label="Just Barbers — tillbaka till toppen">
            Just Barbers
          </a>
          <p className={styles.tagline}>Mölndal · Sverige</p>
        </div>

        <nav className={styles.nav} aria-label="Sidfotslänkar">
          {links.map((link) => (
            <a key={link.label} href={link.href} className={styles.link}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.contact}>
          <a href="tel:+46736009757" className={styles.contactLink}>073-600 97 57</a>
          <a href="mailto:hej@justbarbers.se" className={styles.contactLink}>hej@justbarbers.se</a>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p className={styles.copyright}>
          &copy; {year} Just Barbers. Alla rättigheter förbehållna.
        </p>
        <p className={styles.credit}>
          Göteborgsvägen 25, Mölndal
        </p>
      </div>
    </footer>
  );
}
