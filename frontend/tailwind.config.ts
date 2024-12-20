import type { Config } from "tailwindcss";

// Définition de la configuration Tailwind CSS
const config: Config = {
  // Spécifie les chemins des fichiers où les classes CSS sont utilisées
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // Tous les fichiers dans le dossier "pages"
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // Tous les composants réutilisables
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Fichiers du dossier principal "app"
  ],
  theme: {
    // Configuration des couleurs personnalisées

    colors: {
      green: {
        "lightest": "#D1FAE5",  // Ton vert très clair
        "lighter": "#86EFAC",   // Ton vert clair
        "default": "#22C55E",   // Ton vert moyen
        "darker": "#16A34A",    // Ton vert foncé
        "darkest": "#064E3B",   // Ton vert très foncé
      },
      blue: {
        "lightest": "#DBEAFE",  // Ton bleu très clair
        "lighter": "#60A5FA",   // Ton bleu clair
        "default": "#3B82F6",   // Ton bleu moyen
        "darker": "#2563EB",    // Ton bleu foncé
        "darkest": "#1E3A8A",   // Ton bleu très foncé
      },
      gray: {
        "lightest": "#F3F4F6",  // Ton gris très clair
        "lighter": "#D1D5DB",   // Ton gris clair
        "default": "#6B7280",   // Ton gris moyen
        "darker": "#374151",    // Ton gris foncé
        "darkest": "#111827",   // Ton gris très foncé
      },
      red: {
        "lightest": "#FEE2E2",  // Ton rouge très clair
        "lighter": "#FCA5A5",   // Ton rouge clair
        "default": "#F87171",   // Ton rouge moyen
        "darker": "#DC2626",    // Ton rouge foncé
        "darkest": "#7F1D1D",   // Ton rouge très foncé
      },
      violet: {
        "lightest": "#EDE9FE",  // Ton violet très clair
        "lighter": "#C4B5FD",   // Ton violet clair
        "default": "#8B5CF6",   // Ton violet moyen
        "darker": "#6D28D9",    // Ton violet foncé
        "darkest": "#4C1D95",   // Ton violet très foncé
      },
    },

    // Configuration des tailles de polices personnalisées
    fontSize: {
      // Taille très grande pour un texte principal ou affichage en vedette
      "8xl": [
        "120px", // Taille de la police
        { lineHeight: "120px", letterSpacing: "-6px", fontWeight: "500" }, // Propriétés supplémentaires
      ],
      // Taille pour des titres ou sous-titres importants
      "7xl": [
        "72px",
        { lineHeight: "80px", letterSpacing: "-4.5px", fontWeight: "600" },
      ],
      // Taille utilisée pour des sous-titres
      "6xl": [
        "55px",
        { lineHeight: "60px", letterSpacing: "-1px", fontWeight: "600" },
      ],
      // Définitions supplémentaires pour d'autres tailles de texte
      "5xl": [
        "48px",
        { lineHeight: "54px", letterSpacing: "-1px", fontWeight: "600" },
      ],
      "4xl": [
        "55px",
        { lineHeight: "44px", letterSpacing: "-1px", fontWeight: "500" },
      ],
      "3xl": [
        "55px",
        { lineHeight: "34px", letterSpacing: "-1px", fontWeight: "500" },
      ],
      "2xl": [
        "55px",
        { lineHeight: "30px", letterSpacing: "-1px", fontWeight: "400" },
      ],
      xl: [
        "24px",
        { lineHeight: "30px", letterSpacing: "-1px", fontWeight: "500" },
      ],
      lg: [
        "21px",
        { lineHeight: "30px", letterSpacing: "-1px", fontWeight: "400" },
      ],
      base: [
        "17px",
        { lineHeight: "25px", letterSpacing: "-1px", fontWeight: "400" },
      ],
      sm: [
        "15px",
        { lineHeight: "23px", letterSpacing: "-1px", fontWeight: "400" },
      ],
      // Tailles spécifiques pour des légendes et annotations
      caption1: [
        "20px",
        { lineHeight: "24px", letterSpacing: "-1px", fontWeight: "400" },
      ],
      caption2: [
        "18px",
        { lineHeight: "20px", letterSpacing: "-1px", fontWeight: "400" },
      ],
      caption3: [
        "16px",
        { lineHeight: "18px", letterSpacing: "-0.3px", fontWeight: "400" },
      ],
      caption4: [
        "13px",
        { lineHeight: "15px", letterSpacing: "-1px", fontWeight: "400" },
      ],
    },
    extend: {
      // Ajout de couleurs personnalisées au thème Tailwind
      colors: {
        vert: "#606C38", // Une couleur verte personnalisée
        vertClair: "#E9EDC9", // Une variante plus claire de la couleur verte
      },
      // Définition de familles de polices personnalisées
      fontFamily: {
        TekoMedium: ["var(--font-Teko-Medium)", "sans-serif"], // Police Teko avec poids Medium
        TekoSemiBold: ["var(--font-Teko-SemiBold)", "sans-serif"], // Police Teko SemiBold
        TekoLight: ["var(--font-Teko-Light)", "sans-serif"], // Police Teko Light
        TekoBold: ["var(--font-Teko-Bold)", "sans-serif"], // Police Teko Bold
        MerriweatherLight: ["var(--font-MerriweatherLight)", "sans-serif"], // Police Merriweather en Light
        WorkSans: ["var(--font-WorkSans)", "sans-serif"], // Police Work Sans
      },
    },
  },
  plugins: [], // Ajoutez ici des plugins Tailwind si nécessaires (par exemple, forms, typography)
};

export default config;
