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
  const Element = component_balises; // Associe la balise à utiliser dynamiquement

  // Styles de base en fonction du style choisi
  const baseStyles = {
    display: "text-6xl",
    h1: "text-5xl",
    h2: "text-4xl",
    h3: "text-3xl",
    h4: "text-2xl",
    h5: "text-xl",
    lead: "text-lg",
    "body-lg": "text-base",
    "body-base": "text-sm",
    "body-sm": "text-xs",
    caption1: "text-xxs",
    caption2: "text-xxs",
    caption3: "text-xs",
    caption4: "text-sm",
  };

  // Styles de thème en fonction de la couleur choisie
  const themeStyles = {
    black: "text-black",
    white: "bg-white text-black",
    gray: "text-gray-700",
    primary: "text-blue-500",
    secondary: "text-purple-500",
  };

  // Gestion du poids de la police
  const weightStyles = weight === "medium" ? "font-medium" : "";

  // Génère les classes CSS combinées dynamiquement
  const mon_style = clsx(
    baseStyles[variant_style], // Taille et style de texte
    themeStyles[theme_couleur], // Couleur
    weightStyles, // Poids de la police
    className // Classes personnalisées ajoutées par l'utilisateur
  );

  // Rendu final avec les styles et la balise choisis
  return <Element className={mon_style}>{children}</Element>;
}
