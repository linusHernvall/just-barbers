import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--ff-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--ff-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Just Barbers — Barberare i Mölndal",
  description:
    "Just Barbers erbjuder professionell klippning och rakservice i hjärtat av Mölndal. Boka din tid idag.",
  keywords: "barberare, klippning, Mölndal, herrfrisör, rakning, Just Barbers",
  openGraph: {
    title: "Just Barbers — Barberare i Mölndal",
    description: "En ren klippning. Ett ärligt hantverk.",
    locale: "sv_SE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" className={`${bebasNeue.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
