/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

interface Props {
  /**
   * Détermine le style à appliquer.
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
   * Contenu à afficher dans le composant.
   */
  children: React.ReactNode;
}

export default function Typography({
  variant_style = "h3",
  component_balises = "div",
  children,
}: Props) {
  // Définir dynamiquement la balise HTML
  const Element = component_balises;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
let mon_style : string;

switch (variant_style){
  case  "display":
    mon_style ="text-red-500"
    break;
   
  case "h1":
    mon_style ="text-green-500"
    break;


}


  // Rendu du composant avec classe et enfants
  return <Element className={`clsx(mon_style)`}>{children}</Element>;
}
