"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./OmOss.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function OmOss() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section id="om-oss" className={styles.section} ref={ref}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.left}>
          <motion.p
            className="label"
            custom={0}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
          >
            Om oss
          </motion.p>

          <motion.h2
            className={`display-xl ${styles.heading}`}
            custom={0.15}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
          >
            Hantverket<br />är allt vi<br />bryr oss om.
          </motion.h2>

          <motion.div
            className={styles.goldLine}
            custom={0.3}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
          >
            <span className="gold-line" />
          </motion.div>

          <motion.p
            className={`body-text ${styles.bodyText}`}
            custom={0.45}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
          >
            Just Barbers grundades ur en enkel övertygelse: en riktigt bra 
            klippning förändrar hur du känner dig. Vi är inte en snabbklippning 
            — vi är ett hantverk.
          </motion.p>

          <motion.p
            className={`body-text ${styles.bodyText}`}
            custom={0.6}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
          >
            Varje klipp är genomtänkt, varje besök är personligt. Välkommen 
            in till Mölndals mest dedikerade barberstuga.
          </motion.p>
        </div>

        <motion.div
          className={styles.right}
          custom={0.2}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
        >
          <div className={styles.pullQuote}>
            <p className={styles.quoteText}>
              &ldquo;Vi klipper inte hår. Vi skapar uttryck.&rdquo;
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
