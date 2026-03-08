"use client";

import { motion } from "framer-motion";

export default function Navigation() {
  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between py-5 px-[clamp(20px,5vw,80px)] bg-bg/[0.92] backdrop-blur-[12px] [-webkit-backdrop-filter:blur(12px)] border-b border-[rgba(170,144,100,0.15)]"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <a href="#hero" className="flex items-center cursor-pointer group" aria-label="Just Barbers hem">
        <span className="font-display text-[clamp(18px,2vw,24px)] tracking-[0.12em] uppercase text-navy transition-colors duration-fast ease group-hover:text-gold">
          Just Barbers
        </span>
      </a>

      <div className="flex items-center gap-[clamp(16px,3vw,40px)]">
        <a href="#om-oss" className="nav-link font-body text-[11px] font-medium tracking-[0.16em] uppercase text-muted cursor-pointer transition-colors duration-fast ease hover:text-navy hidden sm:block">Om oss</a>
        <a href="#tjanster" className="nav-link font-body text-[11px] font-medium tracking-[0.16em] uppercase text-muted cursor-pointer transition-colors duration-fast ease hover:text-navy hidden sm:block">Tjänster</a>
        <a href="#kontakt" className="nav-link font-body text-[11px] font-medium tracking-[0.16em] uppercase text-muted cursor-pointer transition-colors duration-fast ease hover:text-navy hidden sm:block">Kontakt</a>
        <a
          href="#kontakt"
          className="inline-block font-body text-[11px] font-medium tracking-[0.18em] uppercase text-bg bg-gold px-6 py-[10px] cursor-pointer transition-[background-color,transform] duration-fast ease-spring hover:bg-gold-light hover:-translate-y-0.5"
        >
          Boka
        </a>
      </div>
    </motion.nav>
  );
}
