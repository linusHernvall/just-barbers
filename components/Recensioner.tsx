"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./Recensioner.module.css";

const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d="M8 1l1.796 4.763H15l-4.102 2.474 1.796 4.763L8 10.526l-4.694 2.474 1.796-4.763L1 5.763h5.204L8 1z"
      fill="#aa9064"
    />
  </svg>
);

export default function Recensioner() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section id="recensioner" className={styles.section} ref={ref}>
      <div className={`container ${styles.inner}`}>
        <motion.div
          className={styles.quoteWrap}
          initial={{ opacity: 0, y: 48 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className={styles.openMark} aria-hidden="true">&ldquo;</span>

          <blockquote className={styles.quote}>
            <p className={styles.quoteText}>
              Bästa barberaren jag har besökt. De tar sig tid, lyssnar på vad 
              du vill ha och levererar varje gång. Inget snabbfix — ren kvalitet 
              från start till slut.
            </p>
          </blockquote>

          <div className={styles.footer}>
            <div className={styles.stars} role="img" aria-label="5 av 5 stjärnor">
              {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
            </div>
            <p className={styles.reviewer}>— Marcus L., Mölndal</p>
            <p className="label">Via Google</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
