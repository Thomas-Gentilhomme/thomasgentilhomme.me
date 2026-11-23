#!/usr/bin/env python3
"""Convertit une photo en grille de caractères (version « ### » de ton visage).

Usage :
    python tools/face_to_ascii.py photo.jpg
    python tools/face_to_ascii.py photo.jpg --width 50 --threshold 110
    python tools/face_to_ascii.py photo.jpg --invert -o visage.txt

Dépendance : Pillow  (pip install pillow, ou uv add pillow)
"""

import argparse
from pathlib import Path

from PIL import Image, ImageChops, ImageFilter, ImageOps


def photo_to_text(
    path: Path,
    width: int = 60,
    threshold: int = 128,
    invert: bool = False,
    char: str = "#",
    edges: bool = False,
    crop: tuple[int, int, int, int] | None = None,
    mix: bool = False,
) -> str:
    """Retourne une chaîne multi-lignes où les zones sombres deviennent `char`.

    Avec `edges=True`, on ne garde que les contours (utile sur fond clair) :
    les traits du visage deviennent sombres, le reste devient blanc.
    """
    img = Image.open(path).convert("L")  # niveaux de gris
    if crop:
        img = img.crop(crop)  # (gauche, haut, droite, bas) en pixels
    img = ImageOps.autocontrast(img)  # étire les contrastes

    # Un caractère est environ deux fois plus haut que large :
    # on réduit la hauteur de moitié pour garder les proportions.
    height = max(1, round(width * img.height / img.width * 0.5))
    img = img.resize((width, height))

    if edges or mix:
        # Contours calculés à la taille finale, sinon les traits fins s'estompent.
        contours = ImageOps.invert(ImageOps.autocontrast(img.filter(ImageFilter.FIND_EDGES)))
        # mix : on garde les zones sombres de la silhouette OU les contours.
        img = ImageChops.darker(img, contours) if mix else contours

    lines = []
    for y in range(height):
        row = []
        for x in range(width):
            is_dark = img.getpixel((x, y)) < threshold
            if invert:
                is_dark = not is_dark
            row.append(char if is_dark else " ")
        lines.append("".join(row).rstrip())
    return "\n".join(lines)


def main() -> None:
    parser = argparse.ArgumentParser(description="Photo -> texte en '#'")
    parser.add_argument("image", type=Path, help="chemin de la photo")
    parser.add_argument("--width", type=int, default=60, help="nombre de colonnes (défaut 60)")
    parser.add_argument(
        "--threshold",
        type=int,
        default=128,
        help="seuil de luminosité 0-255 : plus bas = moins de '#' (défaut 128)",
    )
    parser.add_argument("--invert", action="store_true", help="inverse clair/sombre")
    parser.add_argument("--char", default="#", help="caractère utilisé (défaut '#')")
    parser.add_argument("--edges", action="store_true", help="ne garde que les contours")
    parser.add_argument("--mix", action="store_true", help="silhouette + contours combinés")
    parser.add_argument(
        "--crop",
        type=int,
        nargs=4,
        metavar=("GAUCHE", "HAUT", "DROITE", "BAS"),
        help="recadre la photo en pixels avant conversion",
    )
    parser.add_argument("-o", "--output", type=Path, help="fichier de sortie (sinon affichage)")
    args = parser.parse_args()

    text = photo_to_text(
        args.image,
        width=args.width,
        threshold=args.threshold,
        invert=args.invert,
        char=args.char,
        edges=args.edges,
        mix=args.mix,
        crop=tuple(args.crop) if args.crop else None,
    )

    if args.output:
        args.output.write_text(text + "\n", encoding="utf-8")
        print(f"Écrit dans {args.output}")
    else:
        print(text)


if __name__ == "__main__":
    main()
