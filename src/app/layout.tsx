import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rohrreinigung Schorn – Professionelle Rohrreinigung & 24h Notdienst",
  description:
    "Rohrreinigung Schorn: Ihr zuverlässiger Partner für professionelle Rohrreinigung, Kanalreinigung & 24h Notdienst. Schnell, fair & kompetent. ✓ Festpreisgarantie ✓ 30-60 Min. vor Ort ✓ Keine versteckten Kosten. Jetzt anrufen!",
  keywords:
    "Rohrreinigung, Kanalreinigung, Notdienst, Abflussreinigung, Hochdruckspülung, Kamerainspektion, Schorn, Rohrverstopfung, Abfluss verstopft, Rohr verstopft, Klempner Notdienst, Sanitär Notdienst",
  authors: [{ name: "Rohrreinigung Schorn" }],
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
    title: "Rohrreinigung Schorn – 24h Notdienst & Rohrreinigung",
    description:
      "Schnell, zuverlässig und fair – Rohrreinigung Schorn löst Ihre Verstopfungen mit modernster Technik. 24/7 Notdienst verfügbar.",
    type: "website",
    locale: "de_DE",
    siteName: "Rohrreinigung Schorn",
    url: "https://rohrreinigung-schorn.de",
  },
  alternates: {
    canonical: "https://rohrreinigung-schorn.de",
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
