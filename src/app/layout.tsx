import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rohrreinigung Schorn – Professionelle Rohrreinigung & 24h Notdienst",
  description:
    "Rohrreinigung Schorn: Ihr zuverlässiger Partner für professionelle Rohrreinigung, Kanalreinigung & 24h Notdienst. Schnell, fair & kompetent. Jetzt anrufen!",
  keywords:
    "Rohrreinigung, Kanalreinigung, Notdienst, Abflussreinigung, Hochdruckspülung, Kamerainspektion, Schorn, Rohrverstopfung",
  openGraph: {
    title: "Rohrreinigung Schorn – 24h Notdienst & Rohrreinigung",
    description:
      "Schnell, zuverlässig und fair – Rohrreinigung Schorn löst Ihre Verstopfungen mit modernster Technik.",
    type: "website",
    locale: "de_DE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
