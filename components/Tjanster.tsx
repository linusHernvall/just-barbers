"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

const services = [
  { name: "Herrklippning", desc: "Klassisk klippning med sax eller maskin", price: "350 kr" },
  { name: "Skäggform", desc: "Konturering och formgivning av skägg", price: "250 kr" },
  { name: "Rakning", desc: "Traditionell rakning med kniv och varm handduk", price: "300 kr" },
  { name: "Klipp & Skägg", desc: "Komplett paket — klippning och skäggvård", price: "550 kr" },
  { name: "Barnklippning", desc: "Upp till 12 år", price: "250 kr" },
  { name: "Fade & Design", desc: "Gradient fade med vald design", price: "400 kr" },
];

const stagger: Variants = {
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariant: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Tjanster() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="tjanster" className="bg-navy py-section" ref={ref}>
      <div className="w-full max-w-container mx-auto px-[clamp(20px,5vw,80px)] flex flex-col gap-[clamp(40px,5vw,72px)]">

        {/* Header */}
        <motion.div
          className="flex flex-col gap-4"
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-body text-label font-medium tracking-[0.15em] uppercase text-gold">
            Tjänster &amp; priser
          </p>
          <h2 className="font-display text-display-xl uppercase text-bg">
            Vad vi<br />erbjuder
          </h2>
        </motion.div>

        {/* Services list */}
        <motion.div
          className="flex flex-col gap-0"
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <span className="block w-full h-px bg-gold" />

          {services.map((service) => (
            <motion.div
              key={service.name}
              variants={itemVariant}
              className="flex items-end justify-between gap-6 py-[clamp(20px,3vw,36px)] border-b border-[rgba(170,144,100,0.35)] max-[480px]:flex-col max-[480px]:items-start max-[480px]:gap-2"
            >
              <div className="flex flex-col gap-1.5">
                <h3 className="font-display text-display-md uppercase text-bg">{service.name}</h3>
                <p className="font-body text-body-light font-light text-muted leading-[1.7]">{service.desc}</p>
              </div>
              <div className="flex-shrink-0">
                <span className="font-display text-service-price tracking-[0.06em] text-gold whitespace-nowrap">
                  {service.price}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="flex justify-center mt-[clamp(24px,4vw,40px)]"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <a
            href="#kontakt"
            className="inline-block font-body text-[12px] font-medium tracking-[0.18em] uppercase text-bg bg-gold px-10 py-4 cursor-pointer transition-[background-color,transform,letter-spacing] duration-fast ease will-change-transform hover:bg-gold-light hover:-translate-y-0.5 hover:tracking-[0.22em] active:translate-y-0"
          >
            Boka tid
          </a>
        </motion.div>

      </div>
    </section>
  );
}
