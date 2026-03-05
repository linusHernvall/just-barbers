"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./Tjanster.module.css";

const services = [
  { name: "Herrklippning", desc: "Klassisk klippning med sax eller maskin", price: "350 kr" },
  { name: "Skäggform", desc: "Konturering och formgivning av skägg", price: "250 kr" },
  { name: "Rakning", desc: "Traditionell rakning med kniv och varm handduk", price: "300 kr" },
  { name: "Klipp & Skägg", desc: "Komplett paket — klippning och skäggvård", price: "550 kr" },
  { name: "Barnklippning", desc: "Upp till 12 år", price: "250 kr" },
  { name: "Fade & Design", desc: "Gradient fade med vald design", price: "400 kr" },
];

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function Tjanster() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="tjanster" className={styles.section} ref={ref}>
      <div className={`container ${styles.inner}`}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="label" style={{ color: "#aa9064" }}>Tjänster & priser</p>
          <h2 className={`display-xl ${styles.heading}`}>Vad vi<br />erbjuder</h2>
        </motion.div>

        <motion.div
          className={styles.list}
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <span className="gold-line" />
          {services.map((service) => (
            <motion.div key={service.name} variants={itemVariant} className={styles.item}>
              <div className={styles.itemLeft}>
                <h3 className={`display-md ${styles.serviceName}`}>{service.name}</h3>
                <p className="body-light">{service.desc}</p>
              </div>
              <div className={styles.itemRight}>
                <span className={styles.price}>{service.price}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
