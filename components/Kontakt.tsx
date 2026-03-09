"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

const hours = [
  { day: "Måndag – Lördag", time: "12:00 – 18:00" },
  { day: "Söndag", time: "Stängt" },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (d: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: d, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Kontakt() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="kontakt" className="bg-navy py-section" ref={ref}>
      <div className="w-full max-w-container mx-auto px-[clamp(20px,5vw,80px)] grid grid-cols-2 gap-[clamp(40px,6vw,100px)] items-start max-md:grid-cols-1">

        {/* Left: Info */}
        <div className="flex flex-col gap-[clamp(20px,2.5vw,32px)]">
          <motion.p
            className="font-body text-label font-medium tracking-[0.15em] uppercase text-gold"
            custom={0}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
          >
            Kontakt &amp; Öppettider
          </motion.p>

          <motion.div
            className="flex flex-col gap-1"
            custom={0.15}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
          >
            <h2 className="font-display text-display-lg uppercase text-bg">Just Barbers</h2>
            <p className="font-body text-address-text font-light text-muted-on-navy leading-[1.7]">Göteborgsvägen 25</p>
            <p className="font-body text-address-text font-light text-muted-on-navy leading-[1.7]">431 30 Mölndal</p>
          </motion.div>

          <span className="block w-full h-px bg-gold" />

          <motion.a
            href="tel:+46736009757"
            className="font-display text-contact-phone tracking-[0.05em] text-bg block leading-none transition-colors duration-fast ease hover:text-gold"
            custom={0.3}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            aria-label="Ring oss på 073-600 97 57"
          >
            073-600 97 57
          </motion.a>

          <motion.a
            href="mailto:hej@justbarbers.se"
            className="font-body text-[clamp(13px,1.3vw,16px)] font-light tracking-[0.06em] text-muted-on-navy transition-colors duration-fast ease hover:text-gold"
            custom={0.4}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
          >
            hej@justbarbers.se
          </motion.a>

          <span className="block w-full h-px bg-gold" />

          <motion.div
            className="flex flex-col gap-2"
            custom={0.5}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
          >
            {hours.map(({ day, time }) => (
              <div
                key={day}
                className="flex justify-between items-baseline gap-4 py-[10px] border-b border-[rgba(170,144,100,0.2)]"
              >
                <span className="font-body text-[13px] font-normal tracking-[0.08em] uppercase text-muted-on-navy">
                  {day}
                </span>
                <span className="font-display text-hour-time tracking-[0.06em] text-bg">
                  {time}
                </span>
              </div>
            ))}
          </motion.div>

          <motion.a
            href="#kontakt"
            className="inline-block self-start font-body text-[12px] font-medium tracking-[0.18em] uppercase text-bg bg-gold px-10 py-4 cursor-pointer transition-[background-color,transform,letter-spacing] duration-fast ease will-change-transform hover:bg-gold-light hover:-translate-y-0.5 hover:tracking-[0.22em] active:translate-y-0"
            custom={0.65}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            id="kontakt-cta"
          >
            Boka din tid
          </motion.a>
        </div>

        {/* Right: Map */}
        <motion.div
          className="h-[clamp(300px,40vw,560px)] overflow-hidden border border-[rgba(170,144,100,0.25)] group max-md:h-[280px]"
          custom={0.2}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
        >
          <iframe
            title="Just Barbers karta"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2134.384521728211!2d12.0147398!3d57.65894889999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff233f814ab27%3A0x84bec8d8699c76d!2zR8O2dGVib3Jnc3bDpGdlbiAyNSwgNDMxIDMwIE3DtmxuZGFs!5e0!3m2!1sen!2sse!4v1772972945641!5m2!1sen!2sse"
            width="100%"
            height="100%"
            className="border-0 grayscale contrast-110 transition-[filter] duration-500 ease group-hover:grayscale-0 group-hover:contrast-100"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>

      </div>
    </section>
  );
}
