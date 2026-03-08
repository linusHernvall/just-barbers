import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // ────────────────────────────────────────────────────────
      // COLORS — all brand tokens
      // ────────────────────────────────────────────────────────
      colors: {
        bg: "#f5f3f0",
        navy: "#212b39",
        gold: "#aa9064",
        "gold-light": "#c4a87a",
        muted: "#6b7280",
        white: "#ffffff",
        // Semi-transparent variants used inline
        "gold-border": "rgba(170, 144, 100, 0.15)",
        "gold-border-md": "rgba(170, 144, 100, 0.25)",
        "gold-border-lg": "rgba(170, 144, 100, 0.35)",
        "navy-overlay-light": "rgba(33, 43, 57, 0.15)",
        "navy-overlay-fade": "rgba(33, 43, 57, 0)",
        "muted-faded": "rgba(107, 114, 128, 0.5)",
      },

      // ────────────────────────────────────────────────────────
      // FONTS
      // ────────────────────────────────────────────────────────
      fontFamily: {
        display: ["var(--ff-display)", "Bebas Neue", "Anton", "sans-serif"],
        body: ["var(--ff-body)", "Inter", "DM Sans", "system-ui", "sans-serif"],
      },

      // ────────────────────────────────────────────────────────
      // FONT SIZES — fluid clamp() values as named tokens
      // ────────────────────────────────────────────────────────
      fontSize: {
        // Typography scale
        "display-hero": ["clamp(80px, 14vw, 200px)", { lineHeight: "0.85", letterSpacing: "0.04em" }],
        "display-xl": ["clamp(48px, 8vw, 120px)", { lineHeight: "0.95", letterSpacing: "0.05em" }],
        "display-lg": ["clamp(36px, 5vw, 80px)", { lineHeight: "1", letterSpacing: "0.06em" }],
        "display-md": ["clamp(28px, 4vw, 56px)", { lineHeight: "1", letterSpacing: "0.08em" }],
        "display-sm": ["clamp(20px, 2.5vw, 36px)", { lineHeight: "1.1", letterSpacing: "0.1em" }],
        // Body
        label: ["clamp(11px, 1.2vw, 13px)", { lineHeight: "1", letterSpacing: "0.15em" }],
        "body-text": ["clamp(15px, 1.5vw, 18px)", { lineHeight: "1.75" }],
        "body-light": ["clamp(14px, 1.3vw, 16px)", { lineHeight: "1.7" }],
        // Component-specific fluid sizes
        "logo-nav": ["clamp(18px, 2vw, 24px)", { lineHeight: "1" }],
        "logo-footer": ["clamp(20px, 2.5vw, 32px)", { lineHeight: "1" }],
        "hero-tagline": ["clamp(15px, 1.8vw, 22px)", { lineHeight: "1.4" }],
        "hero-subtext": ["clamp(13px, 1.2vw, 15px)", { lineHeight: "1.7" }],
        "service-price": ["clamp(24px, 3vw, 40px)", { lineHeight: "1" }],
        "contact-phone": ["clamp(32px, 5vw, 64px)", { lineHeight: "1" }],
        "hour-time": ["clamp(18px, 2vw, 28px)", { lineHeight: "1" }],
        "quote-text": ["clamp(40px, 6vw, 80px)", { lineHeight: "0.9" }],
        "review-text": ["clamp(14px, 1.3vw, 16px)", { lineHeight: "1.65" }],
        "address-text": ["clamp(15px, 1.5vw, 18px)", { lineHeight: "1.7" }],
      },

      // ────────────────────────────────────────────────────────
      // SPACING — section padding tokens
      // ────────────────────────────────────────────────────────
      spacing: {
        "section": "clamp(80px, 12vw, 160px)",
        "section-half": "clamp(40px, 6vw, 80px)",
      },

      // ────────────────────────────────────────────────────────
      // MAX WIDTH
      // ────────────────────────────────────────────────────────
      maxWidth: {
        container: "1440px",
      },

      // ────────────────────────────────────────────────────────
      // PADDING — container fluid padding
      // ────────────────────────────────────────────────────────
      padding: {
        "container-x": "clamp(20px, 5vw, 80px)",
      },

      // ────────────────────────────────────────────────────────
      // TRANSITION TIMING
      // ────────────────────────────────────────────────────────
      transitionTimingFunction: {
        spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
        "ease-out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },

      transitionDuration: {
        fast: "200ms",
        medium: "400ms",
        slow: "700ms",
      },

      // ────────────────────────────────────────────────────────
      // KEYFRAMES — marquee + preserved animations
      // ────────────────────────────────────────────────────────
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-33.333%)" },
        },
      },

      animation: {
        marquee: "marquee 120s linear infinite",
      },

      // ────────────────────────────────────────────────────────
      // BOX SHADOW
      // ────────────────────────────────────────────────────────
      boxShadow: {
        "image": "0 40px 80px -20px rgba(0, 0, 0, 0.5)",
        "hero-text": "0 2px 40px rgba(33, 43, 57, 0.35), 0 0 80px rgba(33, 43, 57, 0.1)",
      },

      // ────────────────────────────────────────────────────────
      // BACKDROP BLUR
      // ────────────────────────────────────────────────────────
      backdropBlur: {
        nav: "12px",
      },

      // ────────────────────────────────────────────────────────
      // Z-INDEX
      // ────────────────────────────────────────────────────────
      zIndex: {
        nav: "100",
      },
    },
  },
  plugins: [],
};

export default config;
