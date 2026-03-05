"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./Hero.module.css";

const fadeVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      delay,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const headlineVariants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.1,
      delay: 0.3,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Hero() {
  return (
    <section id="hero" className={styles.hero} aria-label="Hero">
      {/* Left: Full-bleed barbershop photo */}
      <motion.div
        className={styles.imagePanel}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className={styles.mainImageWrap}>
          <Image
            src="/images/hero-main.png"
            alt="Klassisk barberstol och interiör i Just Barbers"
            fill
            priority
            className={`${styles.mainImage} bw-image`}
            sizes="50vw"
          />
          <div className={styles.imageOverlay} />
        </div>
      </motion.div>

      {/* Right: Off-white panel */}
      <motion.div
        className={styles.contentPanel}
        custom={0.8}
        initial="hidden"
        animate="visible"
        variants={fadeVariants}
      >
        {/* Secondary editorial photo */}
        <div className={styles.secondaryImageWrap}>
          <Image
            src="/images/hero-secondary.png"
            alt="Barbern klipper med precision"
            fill
            className={`${styles.secondaryImage} bw-image`}
            sizes="25vw"
          />
        </div>

        <div className={styles.contentText}>
          <motion.p
            className={styles.tagline}
            custom={1.1}
            initial="hidden"
            animate="visible"
            variants={fadeVariants}
          >
            En ren klippning. Ett ärligt hantverk.
          </motion.p>

          <motion.p
            className={styles.subText}
            custom={1.3}
            initial="hidden"
            animate="visible"
            variants={fadeVariants}
          >
            Mölndals mest hängivna barberare — hantverk som aldrig kompromissar.
          </motion.p>

          <motion.div
            custom={1.5}
            initial="hidden"
            animate="visible"
            variants={fadeVariants}
          >
            <a href="#kontakt" className="btn-gold" id="hero-cta">
              Boka tid
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Overlapping headline — spans both panels */}
      <motion.div
        className={styles.headlineWrap}
        initial="hidden"
        animate="visible"
        variants={headlineVariants}
        aria-hidden="false"
      >
        <h1 className={styles.headline}>Just&nbsp;Barbers</h1>
      </motion.div>
    </section>
  );
}
