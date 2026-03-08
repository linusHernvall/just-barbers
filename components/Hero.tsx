"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

const fadeVariants: Variants = {
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

const headlineVariants: Variants = {
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
    <section
      id="hero"
      className="relative w-full h-svh min-h-[600px] grid grid-cols-2 overflow-hidden max-md:grid-cols-1 max-md:grid-rows-[55vh_1fr] max-md:h-auto max-md:min-h-svh"
      aria-label="Hero"
    >
      {/* Left: Full-bleed barbershop photo */}
      <motion.div
        className="relative overflow-hidden max-md:row-start-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="absolute inset-0">
          <Image
            src="/images/hero-main.png"
            alt="Klassisk barberstol och interiör i Just Barbers"
            fill
            priority
            className="object-cover object-center grayscale contrast-110"
            sizes="50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(33,43,57,0.15)] to-[rgba(33,43,57,0)]" />
        </div>
      </motion.div>

      {/* Right: Off-white panel */}
      <motion.div
        className="bg-bg flex flex-col justify-end pt-[clamp(100px,10vh,140px)] px-[clamp(28px,5vw,72px)] pb-[clamp(48px,6vh,80px)] gap-[clamp(24px,3vw,40px)] relative overflow-hidden max-md:row-start-2 max-md:pt-[clamp(80px,12vw,120px)] max-md:px-[clamp(20px,5vw,40px)] max-md:pb-12"
        custom={0.8}
        initial="hidden"
        animate="visible"
        variants={fadeVariants}
      >
        {/* Secondary editorial photo */}
        <div className="relative w-full aspect-[4/3] overflow-hidden max-md:hidden">
          <Image
            src="/images/hero-secondary.png"
            alt="Barbern klipper med precision"
            fill
            className="object-cover object-top grayscale contrast-110"
            sizes="25vw"
          />
        </div>

        <div className="flex flex-col gap-[clamp(16px,2vw,28px)]">
          <motion.p
            className="font-body text-hero-tagline font-light italic text-navy leading-[1.4]"
            custom={1.1}
            initial="hidden"
            animate="visible"
            variants={fadeVariants}
          >
            En ren klippning. Ett ärligt hantverk.
          </motion.p>

          <motion.p
            className="font-body text-hero-subtext font-light text-muted leading-[1.7] tracking-[0.02em]"
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
            <a
              href="#kontakt"
              id="hero-cta"
              className="inline-block font-body text-[12px] font-medium tracking-[0.18em] uppercase text-bg bg-gold px-10 py-4 cursor-pointer transition-[background-color,transform,letter-spacing] duration-fast ease will-change-transform hover:bg-gold-light hover:-translate-y-0.5 hover:tracking-[0.22em] active:translate-y-0"
            >
              Boka tid
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Overlapping headline — spans both panels */}
      <motion.div
        className="absolute top-1/2 left-0 right-0 -translate-y-1/2 z-10 pointer-events-none text-center px-[clamp(8px,2vw,24px)] max-md:top-[45%]"
        initial="hidden"
        animate="visible"
        variants={headlineVariants}
        aria-hidden="false"
      >
        <h1
          className="font-display text-display-hero uppercase text-gold hero-text-pop flex flex-col md:block"
          style={{ lineHeight: 0.85 }}
        >
          <motion.span 
            className="block md:inline"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            Just
          </motion.span>
          <span className="hidden md:inline">&nbsp;</span>
          <motion.span 
            className="block md:inline"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            Barbers
          </motion.span>
        </h1>
      </motion.div>
    </section>
  );
}
