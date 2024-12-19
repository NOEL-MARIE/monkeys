// Import des composants nécessaires
import Seo from "./ui/component/seo"; // Composant pour gérer le SEO (titre et description des pages)
import Typography from "./ui/design_system/typography/typography"; // Composant de typographie pour le design système

// Composant principal de la page d'accueil
export default function Home() {
  return (
    <>
      {/* Composant SEO : Définit le titre et la description de la page */}
      <Seo title="Monkey Coders" description="Description..." />

      {/* Conteneur principal avec un espacement vertical entre les éléments */}
      <div className="space-y-5">
        {/* Exemple d'utilisation du composant Typography avec différentes variantes */}
        
        {/* Texte avec un style "display" (souvent utilisé pour des titres très grands) */}
        <Typography
          variant_style="display" // Style spécifique pour les grandes tailles de texte
          component_balises="div" // Balise HTML utilisée pour encapsuler ce texte
          theme_couleur="primary" // Couleur définie par le thème (par exemple, couleur principale)
        >
          Coders Monkeys
        </Typography>

        {/* Texte avec un style de titre H1 */}
        <Typography
          variant_style="h1" // Style correspondant à un titre de niveau 1
          component_balises="div" // Balise utilisée ici est un <div>, mais pourrait être un <h1>
          theme_couleur="primary" // Couleur principale du thème
        >
          Coders Monkeys
        </Typography>

        {/* Texte avec un style "lead" (souvent pour des sous-titres ou des introductions) */}
        <Typography
          variant_style="lead" // Style pour du texte introductif
          component_balises="div" // Utilise un <div>, mais pourrait être une balise de paragraphe <p>
          theme_couleur="primary" // Couleur principale
        >
          Coders Monkeys
        </Typography>

        {/* Texte avec un style "body-sm" (texte principal en petite taille) */}
        <Typography
          variant_style="body-sm" // Style de texte principal en version petite
          component_balises="div" // Encapsulé dans un <div>
          theme_couleur="primary" // Couleur principale du thème
        >
          Coders Monkeys
        </Typography>

        {/* Texte avec un style "caption4" (texte pour des légendes ou des annotations) */}
        <Typography
          variant_style="caption4" // Style correspondant à une légende ou un petit texte
          weight="medium" // Poids de la police défini comme "moyen"
          component_balises="div" // Utilisation d'un <div> pour ce texte
          theme_couleur="primary" // Couleur principale
        >
          Coders Monkeys
        </Typography>
      </div>
    </>
  );
}