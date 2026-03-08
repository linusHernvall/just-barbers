"use client";

const links = [
  { label: "Om oss", href: "#om-oss" },
  { label: "Tjänster", href: "#tjanster" },
  { label: "Recensioner", href: "#recensioner" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy pb-[clamp(32px,4vw,56px)]">
      {/* Gold top line */}
      <div className="h-px bg-gold mb-[clamp(40px,5vw,72px)]" />

      {/* Main grid */}
      <div className="w-full max-w-container mx-auto px-[clamp(20px,5vw,80px)] grid grid-cols-3 gap-[clamp(24px,4vw,60px)] items-start pb-[clamp(32px,4vw,56px)] border-b border-[rgba(170,144,100,0.15)] mb-[clamp(24px,3vw,40px)] max-md:grid-cols-2 max-[480px]:grid-cols-1">

        {/* Brand */}
        <div className="flex flex-col gap-2">
          <a
            href="#hero"
            className="font-display text-logo-footer tracking-[0.12em] uppercase text-bg cursor-pointer transition-colors duration-fast ease hover:text-gold"
            aria-label="Just Barbers — tillbaka till toppen"
          >
            Just Barbers
          </a>
          <p className="font-body text-[11px] font-normal tracking-[0.14em] uppercase text-muted">
            Mölndal · Sverige
          </p>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col gap-3" aria-label="Sidfotslänkar">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="footer-link font-body text-[11px] font-medium tracking-[0.14em] uppercase text-muted cursor-pointer transition-colors duration-fast ease w-fit hover:text-bg"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Contact */}
        <div className="flex flex-col gap-[10px] items-end max-md:items-start max-md:col-span-2 max-[480px]:col-span-1">
          <a
            href="tel:+46736009757"
            className="font-body text-[12px] font-light tracking-[0.08em] text-muted transition-colors duration-fast ease cursor-pointer hover:text-gold"
          >
            073-600 97 57
          </a>
          <a
            href="mailto:hej@justbarbers.se"
            className="font-body text-[12px] font-light tracking-[0.08em] text-muted transition-colors duration-fast ease cursor-pointer hover:text-gold"
          >
            hej@justbarbers.se
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="w-full max-w-container mx-auto px-[clamp(20px,5vw,80px)] flex justify-between items-center flex-wrap gap-3 max-[480px]:flex-col max-[480px]:items-start">
        <p className="font-body text-[11px] font-light tracking-[0.06em] text-muted-faded">
          &copy; {year} Just Barbers. Alla rättigheter förbehållna.
        </p>
        <p className="font-body text-[11px] font-light tracking-[0.06em] text-muted-faded">
          Göteborgsvägen 25, Mölndal
        </p>
      </div>
    </footer>
  );
}
