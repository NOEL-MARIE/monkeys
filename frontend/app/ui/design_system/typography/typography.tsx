/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import clsx from "clsx";

interface Props {
  /**
   * Détermine le style à appliquer (taille de texte, etc.).
   */
  variant_style?:
    | "display"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "lead"
    | "body-lg"
    | "body-base"
    | "body-sm"
    | "caption1"
    | "caption2"
    | "caption3"
    | "caption4";


  /**
   * Balise HTML utilisée pour le rendu.
   */
  component_balises?: "h1" | "h2" | "h3" | "h4" | "h5" | "div" | "p" | "span";

  /**
   * Détermine la couleur du texte.
   */
  theme_couleur?: "black" | "white" | "gray" | "primary" | "secondary";

  /**
   * Définit le poids de la police.
   */
  weight?: "regular" | "medium";

  /**
   * Ajoute des classes CSS personnalisées.
   */
  className?: string;

  /**
   * Contenu enfant à afficher.
   */
  children: React.ReactNode;
}

export default function Typography({
  variant_style = "h3", // Valeur par défaut pour le style
  component_balises = "div", // Balise HTML par défaut
  theme_couleur = "black", // Couleur par défaut
  weight = "regular", // Poids par défaut
  className = "", // Classes CSS supplémentaires par défaut
  children,
}: Props) {
  const Element = component_balises; // Balise HTML dynamique

  // Détermine les styles de base en fonction de `variant_style`
   switch (variant_style) {
    case "display":
      baseStyle = "text-6xl";
      break;
    case "h1":
      baseStyle = "text-5xl";
      break;
    case "h2":
      baseStyle = "text-4xl";
      break;
    case "h3":
      baseStyle = "text-3xl";
      break;
    case "h4":
      baseStyle = "text-2xl";
      break;
    case "h5":
      baseStyle = "text-xl";
      break;
    case "lead":
      baseStyle = "text-lg";
      break;
    case "body-lg":
      baseStyle = "text-base";
      break;
    case "body-base":
      baseStyle = "text-sm";
      break;
    case "body-sm":
      baseStyle = "text-xs";
      break;
    case "caption1":
      baseStyle = "text-xxs";
      break;
    case "caption2":
      baseStyle = "text-xxs";
      break;
    case "caption3":
      baseStyle = "text-xs";
      break;
    case "caption4":
      baseStyle = "text-sm";
      break;
    default:
      baseStyle = "text-3xl"; // Fallback en cas de valeur inattendue
  }

  // Détermine les styles de couleur en fonction de `theme_couleur`
  let themeStyle = "";
  switch (theme_couleur) {
    case "black":
      themeStyle = "text-black";
      break;
    case "white":
      themeStyle = "bg-white text-black";
      break;
    case "gray":
      themeStyle = "text-gray-700";
      break;
    case "primary":
      themeStyle = "text-blue-500";
      break;
    case "secondary":
      themeStyle = "text-purple-500";
      break;
    default:
      themeStyle = "text-black"; // Fallback
  }

  // Détermine le style de poids en fonction de `weight`
  const weightStyle = weight === "medium" ? "font-medium" : "";

  // Combine toutes les classes en une seule chaîne
  const mon_style = clsx(baseStyle, themeStyle, weightStyle, className);

  // Rendu final
  return <Element className={mon_style}>{children}</Element>;
}
