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
      className="relative w-full h-svh min-h-[600px] grid grid-cols-2 overflow-hidden max-md:grid-cols-1 max-md:h-svh"
      aria-label="Hero"
    >
      {/* Left: Full-bleed barbershop photo (desktop) / Full-screen image (mobile) */}
      <motion.div
        className="relative overflow-hidden max-md:absolute max-md:inset-0"
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
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Desktop gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(33,43,57,0.15)] to-[rgba(33,43,57,0)] md:block hidden" />
          {/* Mobile dark overlay — bottom-heavy for text legibility */}
          <div className="absolute inset-0 md:hidden bg-gradient-to-t from-[rgba(10,10,10,0.92)] via-[rgba(10,10,10,0.55)] to-[rgba(10,10,10,0.15)]" />
        </div>
      </motion.div>

      {/* Right: Off-white panel — desktop only */}
      <motion.div
        className="bg-bg flex flex-col justify-end pt-[clamp(100px,10vh,140px)] px-[clamp(28px,5vw,72px)] pb-[clamp(48px,6vh,80px)] gap-[clamp(24px,3vw,40px)] relative overflow-hidden max-md:hidden"
        custom={0.8}
        initial="hidden"
        animate="visible"
        variants={fadeVariants}
      >
        {/* Secondary editorial photo */}
        <div className="relative w-full aspect-[4/3] overflow-hidden">
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

      {/* Overlapping headline — desktop: spans both panels */}
      <motion.div
        className="absolute top-1/2 left-0 right-0 -translate-y-1/2 z-10 pointer-events-none text-center px-[clamp(8px,2vw,24px)] max-md:hidden"
        initial="hidden"
        animate="visible"
        variants={headlineVariants}
        aria-hidden="false"
      >
        <h1
          className="font-display text-display-hero uppercase text-gold hero-text-pop"
          style={{ lineHeight: 0.85 }}
        >
          Just Barbers
        </h1>
      </motion.div>

      {/* Mobile-only: bottom-anchored content overlay */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 z-10 md:hidden flex flex-col items-start px-8 pb-14 gap-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* H1 — large, gold, dramatic */}
        <motion.h1
          className="font-display text-display-hero uppercase text-gold leading-[0.85] tracking-[0.04em]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          Just<br />Barbers
        </motion.h1>

        {/* Gold rule separator */}
        <motion.div
          className="h-px w-10 bg-gold opacity-70"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 0.7 }}
          style={{ transformOrigin: "left" }}
          transition={{ duration: 0.6, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* Tagline */}
        <motion.p
          className="font-body text-[15px] font-light italic text-white/85 leading-[1.5] tracking-[0.01em]"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
        >
          En ren klippning. Ett ärligt hantverk.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <a
            href="#kontakt"
            id="hero-cta-mobile"
            className="inline-block font-body text-[11px] font-medium tracking-[0.2em] uppercase text-bg bg-gold px-9 py-4 cursor-pointer transition-[background-color,transform] duration-fast ease will-change-transform active:translate-y-0.5"
          >
            Boka tid
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
