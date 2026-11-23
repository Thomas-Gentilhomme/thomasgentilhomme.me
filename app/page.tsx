import FaceSvg from "@/components/FaceSvgBis"; // pour revenir à l'ancienne version : "@/components/FaceSvg"
import { LanguageProvider } from "@/components/LanguageProvider";
import LanguageSwitch from "@/components/LanguageSwitch";
import IntroColumn from "@/components/IntroColumn";
import DetailsColumn from "@/components/DetailsColumn";

export default function Home() {
  return (
    <LanguageProvider>
      <main className="relative grid min-h-dvh w-full grid-cols-1 gap-8 py-8 md:grid-cols-[auto_auto_minmax(0,24rem)] md:justify-start md:items-center md:gap-12 md:py-0">
        {/* Coin supérieur droit (hors grille grâce à `absolute`) */}
        <LanguageSwitch className="absolute right-6 top-6 z-10" />

        {/* Colonne 1 : portrait (composant serveur, aucun JS envoyé) */}
        <FaceSvg className="mr-auto h-[40vh] w-auto md:h-[85vh]" />

        {/* Colonne 2 : nom + liens */}
        <IntroColumn />

        {/* Colonne 3 : description, sections dépliables, contact */}
        <DetailsColumn />
      </main>
    </LanguageProvider>
  );
}
