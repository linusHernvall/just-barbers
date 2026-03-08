"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import styles from "./Kontakt.module.css";

const hours = [
  { day: "Måndag – Lördag", time: "12:00 – 18:00" },
  { day: "Söndag", time: "Stängt" },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (d: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: d, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Kontakt() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="kontakt" className={styles.section} ref={ref}>
      <div className={`container ${styles.inner}`}>

        {/* Left: Info */}
        <div className={styles.info}>
          <motion.p className="label" style={{ color: "#aa9064" }}
            custom={0} initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeUp}>
            Kontakt & Öppettider
          </motion.p>

          <motion.div className={styles.addressBlock}
            custom={0.15} initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeUp}>
            <h2 className={`display-lg ${styles.heading}`}>Just Barbers</h2>
            <p className={styles.addressLine}>Göteborgsvägen 25</p>
            <p className={styles.addressLine}>431 30 Mölndal</p>
          </motion.div>

          <span className="gold-line" />

          <motion.a
            href="tel:+46736009757"
            className={styles.phone}
            custom={0.3} initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeUp}
            aria-label="Ring oss på 073-600 97 57"
          >
            073-600 97 57
          </motion.a>

          <motion.a
            href="mailto:hej@justbarbers.se"
            className={styles.email}
            custom={0.4} initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeUp}
          >
            hej@justbarbers.se
          </motion.a>

          <span className="gold-line" />

          <motion.div
            className={styles.hours}
            custom={0.5} initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeUp}
          >
            {hours.map(({ day, time }) => (
              <div key={day} className={styles.hourRow}>
                <span className={styles.hourDay}>{day}</span>
                <span className={styles.hourTime}>{time}</span>
              </div>
            ))}
          </motion.div>

          <motion.a
            href="#kontakt"
            className="btn-gold"
            style={{ alignSelf: "flex-start" }}
            custom={0.65} initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeUp}
            id="kontakt-cta"
          >
            Boka din tid
          </motion.a>
        </div>

        {/* Right: Map */}
        <motion.div
          className={styles.mapWrap}
          custom={0.2} initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeUp}
        >
          <iframe
            title="Just Barbers karta"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2134.384521728211!2d12.0147398!3d57.65894889999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff233f814ab27%3A0x84bec8d8699c76d!2zR8O2dGVib3Jnc3bDpGdlbiAyNSwgNDMxIDMwIE3DtmxuZGFs!5e0!3m2!1sen!2sse!4v1772972945641!5m2!1sen!2sse"
            width="100%"
            height="100%"
            className={styles.map}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>

      </div>
    </section>
  );
}
