"use client";

import { motion } from "framer-motion";
import styles from "./Navigation.module.css";

export default function Navigation() {
  return (
    <motion.nav
      className={styles.nav}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <a href="#hero" className={styles.logo} aria-label="Just Barbers hem">
        <span className={styles.logoText}>Just Barbers</span>
      </a>

      <div className={styles.links}>
        <a href="#om-oss" className={styles.link}>Om oss</a>
        <a href="#tjanster" className={styles.link}>Tjänster</a>
        <a href="#kontakt" className={styles.link}>Kontakt</a>
        <a href="#kontakt" className={styles.bookLink}>Boka</a>
      </div>
    </motion.nav>
  );
}
