import React from "react";

interface Props {
  variant?:
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
  children: React.ReactNode;
}

export default function Typography({ variant = "body-base", children }: Props) {
  // Détermine la balise HTML à utiliser selon le variant
  const Element = (() => {
    switch (variant) {
      case "h1":
        return "h1";
      case "h2":
        return "h2";
      case "h3":
        return "h3";
      case "h4":
        return "h4";
      case "h5":
        return "h5";
      case "display":
      case "lead":
        return "p";
      default:
        return "span";
    }
  })();

  // Ajoute une classe CSS pour le style conditionnel
  const className = `typography-${variant}`;

  return <Element className={className}>{children}</Element>;
}
