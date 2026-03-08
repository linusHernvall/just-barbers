"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d="M8 1l1.796 4.763H15l-4.102 2.474 1.796 4.763L8 10.526l-4.694 2.474 1.796-4.763L1 5.763h5.204L8 1z"
      fill="#aa9064"
    />
  </svg>
);

const GoogleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

interface Review {
  author: string;
  location: string;
  rating: number;
  text: string;
  date: string;
}

const reviews: Review[] = [
  {
    author: "Marcus L.",
    location: "Mölndal",
    rating: 5,
    text: "Bästa barberaren jag har besökt. De tar sig tid, lyssnar på vad du vill ha och levererar varje gång. Inget snabbfix — ren kvalitet från start till slut.",
    date: "November 2024",
  },
  {
    author: "Johan K.",
    location: "Göteborg",
    rating: 5,
    text: "Fantastisk service och otroligt skickliga händer. Mitt skägg har aldrig sett bättre ut. Går tillbaka varje månad utan tvekan.",
    date: "Oktober 2024",
  },
  {
    author: "Erik S.",
    location: "Mölndal",
    rating: 5,
    text: "Klassisk barbershop-känsla med modern precision. Personalen är proffsig och resultatet talar för sig självt. Rekommenderar varmt.",
    date: "September 2024",
  },
  {
    author: "David R.",
    location: "Kungsbacka",
    rating: 5,
    text: "Värt varenda krona. Har testat många barberare i regionen men Just Barbers håller en helt annan nivå. Atmosfären är perfekt.",
    date: "Augusti 2024",
  },
  {
    author: "Patrik W.",
    location: "Härryda",
    rating: 5,
    text: "Klippte mig inför mitt bröllop och resultatet var perfekt. Lugn miljö, skicklig personal och riktigt bra kaffemaskin — vad mer kan man önska?",
    date: "Juli 2024",
  },
];

function ReviewCard({ review }: { review: Review }) {
  return (
    <article
      className="flex flex-col gap-5 p-[clamp(24px,3vw,36px)] bg-white border-l-2 border-gold flex-[0_0_calc((100vw-clamp(24px,10vw,160px)-(2*clamp(16px,2.5vw,32px)))/3)] min-w-[320px] max-[1024px]:flex-[0_0_400px] max-md:flex-[0_0_calc(100vw-40px)] max-md:min-w-0"
    >
      <div className="flex items-center justify-between">
        <div className="flex gap-[3px]" role="img" aria-label={`${review.rating} av 5 stjärnor`}>
          {[...Array(review.rating)].map((_, i) => <StarIcon key={i} />)}
        </div>
        <div className="flex items-center gap-[5px]">
          <GoogleIcon />
          <span className="font-body text-[10px] font-medium tracking-[0.1em] uppercase text-muted">Google</span>
        </div>
      </div>

      <blockquote className="flex-1 m-0 p-0 border-none">
        <p className="font-body text-review-text font-light italic text-navy leading-[1.65]">
          &ldquo;{review.text}&rdquo;
        </p>
      </blockquote>

      <footer className="pt-4 border-t border-[rgba(170,144,100,0.25)] flex flex-col gap-[3px]">
        <p className="font-body text-[12px] font-medium tracking-[0.1em] uppercase text-navy">{review.author}</p>
        <p className="font-body text-[11px] font-light tracking-[0.06em] text-muted">{review.location} · {review.date}</p>
      </footer>
    </article>
  );
}

export default function Recensioner() {
  const [isPaused, setIsPaused] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Triple the reviews to ensure plenty of room for the marquee
  const marqueeReviews = [...reviews, ...reviews, ...reviews];

  // Click-outside handler: resumes the carousel on mobile when tapping outside
  useEffect(() => {
    if (!isPaused) return;

    function handleClickOutside(e: MouseEvent | TouchEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setIsPaused(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isPaused]);

  // Mobile tap: toggle pause (only on touch-primary devices)
  function handleTap(e: React.MouseEvent | React.TouchEvent) {
    if (window.matchMedia("(hover: none)").matches) {
      e.stopPropagation();
      setIsPaused((prev) => !prev);
    }
  }

  return (
    <section id="recensioner" className="bg-bg py-section">
      <div className="w-full max-w-container mx-auto px-[clamp(20px,5vw,80px)] flex flex-col gap-[clamp(40px,5vw,72px)]">

        {/* Header */}
        <div className="flex flex-col gap-4">
          <p className="font-body text-label font-medium tracking-[0.15em] uppercase text-gold">
            Vad våra kunder säger
          </p>
          <h2 className="font-display text-display-xl uppercase text-navy">Recensioner</h2>
          <p className="font-body text-[clamp(14px,1.4vw,16px)] font-light text-muted leading-[1.7] max-w-[480px]">
            Läs vad Mölndals bästa kunder har att säga om oss på Google.
          </p>
        </div>

        {/* Marquee carousel */}
        <div
          ref={wrapperRef}
          className="relative overflow-hidden -mx-5 px-5"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onClick={handleTap}
        >
          <motion.div
            className="flex flex-nowrap gap-[clamp(16px,2.5vw,32px)] w-max animate-marquee"
            style={{ animationPlayState: isPaused ? "paused" : "running" }}
            initial={false}
          >
            {marqueeReviews.map((review, idx) => (
              <ReviewCard key={`${review.author}-${idx}`} review={review} />
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
}
