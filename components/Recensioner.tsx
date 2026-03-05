"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Recensioner.module.css";

const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d="M8 1l1.796 4.763H15l-4.102 2.474 1.796 4.763L8 10.526l-4.694 2.474 1.796-4.763L1 5.763h5.204L8 1z"
      fill="#aa9064"
    />
  </svg>
);

const ChevronLeft = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ChevronRight = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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
    text: "Fantastisk service och otroligt skickliga händer. Min skägg har aldrig sett bättre ut. Går tillbaka varje månad utan tvekan.",
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

const DESKTOP_PER_PAGE = 3;

function ReviewCard({ review }: { review: Review }) {
  return (
    <article className={styles.card}>
      <div className={styles.cardHeader}>
        <div className={styles.stars} role="img" aria-label={`${review.rating} av 5 stjärnor`}>
          {[...Array(review.rating)].map((_, i) => <StarIcon key={i} />)}
        </div>
        <div className={styles.googleBadge}>
          <GoogleIcon />
          <span className={styles.googleLabel}>Google</span>
        </div>
      </div>
      <blockquote className={styles.cardQuote}>
        <p className={styles.cardText}>&ldquo;{review.text}&rdquo;</p>
      </blockquote>
      <footer className={styles.cardFooter}>
        <p className={styles.cardAuthor}>{review.author}</p>
        <p className={styles.cardMeta}>{review.location} · {review.date}</p>
      </footer>
    </article>
  );
}

export default function Recensioner() {
  const [isPaused, setIsPaused] = useState(false);

  // Triple the reviews to ensure plenty of room for dragging in both directions
  const marqueeReviews = [...reviews, ...reviews, ...reviews];

  return (
    <section id="recensioner" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.sectionHeader}>
          <p className="label" style={{ color: "#aa9064" }}>Vad våra kunder säger</p>
          <h2 className={`display-xl ${styles.heading}`}>Recensioner</h2>
          <p className={styles.subHeading}>Läs vad Mölndals bästa kunder har att säga om oss på Google.</p>
        </div>

        <div 
          className={styles.carouselArea}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div
            className={`${styles.track} ${isPaused ? styles.paused : ""}`}
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
