import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rohrexperte – Professionelle Rohrreinigung & 24h Notdienst",
  description:
    "Rohrexperte: Ihr zuverlässiger Partner für professionelle Rohrreinigung, Kanalreinigung & 24h Notdienst. Schnell, fair & kompetent. ✓ Festpreisgarantie ✓ 30-60 Min. vor Ort ✓ Keine versteckten Kosten. Jetzt anrufen!",
  keywords:
    "Rohrreinigung, Kanalreinigung, Notdienst, Abflussreinigung, Hochdruckspülung, Kamerainspektion, Rohrverstopfung, Abfluss verstopft, Rohr verstopft, Klempner Notdienst, Sanitär Notdienst",
  authors: [{ name: "Rohrexperte" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Rohrexperte – 24h Notdienst & Rohrreinigung",
    description:
      "Schnell, zuverlässig und fair – Rohrexperte löst Ihre Verstopfungen mit modernster Technik. 24/7 Notdienst verfügbar.",
    type: "website",
    locale: "de_DE",
    siteName: "Rohrexperte",
    url: "https://rohrexperte.de",
  },
  alternates: {
    canonical: "https://rohrexperte.de",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <meta name="theme-color" content="#0066cc" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}
