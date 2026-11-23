import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Geist_Mono,
  JetBrains_Mono,
  Manrope,
  Plus_Jakarta_Sans,
} from "next/font/google";
import "./globals.css";

// Texte courant
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

// Titres (le nom)
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
});

// Le nom de la variable doit être identique à celui utilisé dans globals.css
// (--font-sans: var(--font-jetbrainsMono)).
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrainsMono",
  subsets: ["latin"],
});

// Pour l'utiliser : --font-sans: var(--font-jakarta) dans globals.css
const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Thomas Gentilhomme",
  description: "Site personnel de Thomas Gentilhomme : présentation, parcours et projets.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${cormorant.variable} ${jetbrainsMono.variable} ${jakarta.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
