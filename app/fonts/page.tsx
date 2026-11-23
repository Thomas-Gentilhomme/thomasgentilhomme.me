// PAGE DE TEST TEMPORAIRE : http://localhost:3000/fonts
// À SUPPRIMER avant la mise en ligne (supprimer tout le dossier app/fonts/).
//
// Pour itérer :
//  1. Ajoute une police : une ligne d'import + une ligne `const xxx = Police({...})`.
//  2. Ajoute une entrée dans la liste `candidates` en bas (titre + corps du texte).
//  3. Enregistre : la page se recharge toute seule.

import type { Metadata } from "next";
import {
  Caveat,
  Cormorant_Garamond,
  DM_Sans,
  Fraunces,
  Geist,
  IBM_Plex_Mono,
  Instrument_Serif,
  Inter,
  JetBrains_Mono,
  Manrope,
  Playfair_Display,
  Plus_Jakarta_Sans,
  Space_Grotesk,
} from "next/font/google";
import { content } from "@/content/site";

export const metadata: Metadata = {
  title: "Test des polices",
  robots: { index: false },
};

// next/font doit être appelé au niveau du module, avec des options littérales.
// Police variable : pas besoin de `weight`. Sinon, il faut le préciser.
const geist = Geist({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });
const dmSans = DM_Sans({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });
const manrope = Manrope({ subsets: ["latin"] });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });
const instrumentSerif = Instrument_Serif({ subsets: ["latin"], weight: "400" });
const fraunces = Fraunces({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });
const cormorant = Cormorant_Garamond({ subsets: ["latin"] });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] });
const plexMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500", "600"] });
const caveat = Caveat({ subsets: ["latin"] });

type FontLike = { className: string };

type Candidate = {
  label: string;
  heading: FontLike; // police du nom
  headingWeight: string; // classe Tailwind : font-normal, font-medium, font-semibold…
  body: FontLike; // police du reste (liens, texte)
};

function Sample({ candidate }: { candidate: Candidate }) {
  const en = content.en;
  const fr = content.fr;

  return (
    <section className="border-b border-foreground/15 py-8">
      <p className="mb-5 font-mono text-xs text-foreground/50">{candidate.label}</p>

      <div className={`grid gap-8 md:grid-cols-[auto_24rem] md:gap-16 ${candidate.body.className}`}>
        {/* Nom + liens, comme la colonne centrale */}
        <div>
          <h2
            className={`text-xl tracking-tight ${candidate.heading.className} ${candidate.headingWeight}`}
          >
            Thomas Gentilhomme
          </h2>
          <h2
            className={`mt-3 text-4xl tracking-tight ${candidate.heading.className} ${candidate.headingWeight}`}
          >
            Thomas Gentilhomme
          </h2>
          <nav className="mt-5 flex flex-col gap-2 text-sm text-foreground/70">
            <span>{en.nav.about}</span>
            <span>{en.nav.education}</span>
            <span>{en.nav.experience}</span>
            <span>{en.nav.projects}</span>
          </nav>
        </div>

        {/* Description + une entrée, comme la colonne de droite */}
        <div>
          <p className="whitespace-pre-line text-sm leading-6">
            {en.description.split("\n\n")[0]}
          </p>
          <div className="mt-4">
            <p className="text-sm font-medium">{en.experience[0].title}</p>
            <p className="text-xs text-foreground/70">{en.experience[0].subtitle}</p>
            <p className="text-xs text-foreground/50">{en.experience[0].period}</p>
          </div>
          <p className="mt-4 text-xs text-foreground/70">
            {fr.nav.about} · {fr.nav.education} · {fr.nav.experience} · {fr.nav.projects} : Télécom
            Paris, École Polytechnique, Ubisoft (alternance)
          </p>
        </div>
      </div>
    </section>
  );
}

const candidates: Candidate[] = [
  // --- Sans-serif modernes
  { label: "1. Geist (la police prévue à l'origine, mais NON appliquée : le CSS force Arial)", heading: geist, headingWeight: "font-semibold", body: geist },
  { label: "2. Inter", heading: inter, headingWeight: "font-semibold", body: inter },
  { label: "3. DM Sans", heading: dmSans, headingWeight: "font-semibold", body: dmSans },
  { label: "4. Manrope", heading: manrope, headingWeight: "font-semibold", body: manrope },
  { label: "5. Plus Jakarta Sans", heading: jakarta, headingWeight: "font-semibold", body: jakarta },
  { label: "6. Space Grotesk (titre) + Inter (texte) : ambiance tech", heading: spaceGrotesk, headingWeight: "font-medium", body: inter },
  // --- Serif élégantes pour le nom
  { label: "7. Instrument Serif (titre) + Inter (texte)", heading: instrumentSerif, headingWeight: "font-normal", body: inter },
  { label: "8. Fraunces (titre) + DM Sans (texte)", heading: fraunces, headingWeight: "font-medium", body: dmSans },
  { label: "9. Playfair Display (titre) + Inter (texte)", heading: playfair, headingWeight: "font-semibold", body: inter },
  { label: "10. Cormorant Garamond (titre) + Manrope (texte)", heading: cormorant, headingWeight: "font-semibold", body: manrope },
  // --- Monospace, côté développeur
  { label: "11. JetBrains Mono partout", heading: jetbrainsMono, headingWeight: "font-semibold", body: jetbrainsMono },
  { label: "12. IBM Plex Mono partout", heading: plexMono, headingWeight: "font-medium", body: plexMono },
  // --- Écriture manuscrite, en écho au portrait « dessiné au feutre »
  { label: "13. Caveat (titre manuscrit) + Inter (texte)", heading: caveat, headingWeight: "font-semibold", body: inter },
];

export default function FontsPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-10">
      <h1 className="font-mono text-sm text-foreground/70">
        Test des polices : page temporaire, à supprimer avant la mise en ligne
      </h1>
      {candidates.map((candidate) => (
        <Sample key={candidate.label} candidate={candidate} />
      ))}
    </main>
  );
}
