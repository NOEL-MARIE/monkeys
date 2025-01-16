import { RiUser6Fill } from "react-icons/ri";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Seo from "./ui/component/seo"; // Composant pour gérer le SEO (titre et description des pages)
import { Button } from "./ui/design_system/Button/button";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Typography from "./ui/design_system/typography/typography"; // Composant de typographie pour le design système

// Composant principal de la page d'accueil
export default function Home() {
  return (
    <>
      <Seo title="Monkey Coders" description="Description..." />

      <div className=" flex items-center gap-x-3 p-9">
        <Button size="small" variant="accent">
          accent
        </Button>
        <Button size="small" variant="secondary">
          accent
        </Button>
        <Button size="small" variant="outline">
          accent
        </Button>
        <Button size="small" variant="disable" disabled>
          accent
        </Button>
      </div>
      <div className=" flex items-center gap-x-3 p-9">
        <Button variant="accent"> accent </Button>
        <Button variant="secondary"> accent </Button>
        <Button variant="outline"> accent </Button>
        <Button variant="disable" disabled>
          accent
        </Button>
        <Button variant="ico" size="small" icon={{ icon: function RiUser6Fill }} />
      </div>
      <div className=" flex items-center gap-x-3 p-9">
        <Button size="large" variant="accent">
          accent
        </Button>
        <Button size="large" variant="secondary">
          accent
        </Button>
        <Button size="large" variant="outline">
          accent
        </Button>
        <Button size="large" variant="disable" disabled>
          accent
        </Button>
      </div>
      {/* Composant SEO : Définit le titre et la description de la page
      

      {/* Conteneur principal avec un espacement vertical entre les éléments */}
      {/* <div className="space-y-5"> */}
      {/* Exemple d'utilisation du composant Typography avec différentes variantes */}
      {/* Texte avec un style "display" (souvent utilisé pour des titres très grands) */}
      {/* <Typography
          variant_style="body-lg" // Style spécifique pour les grandes tailles de texte
          component_balises="h1" // Balise HTML utilisée pour encapsuler ce texte
          theme_couleur="primary" // Couleur définie par le thème (par exemple, couleur principale)
        >
          Coders Monkeys
        </Typography> */}
      {/* Texte avec un style de titre H1 */}
      {/* <Typography
          variant_style="body-base" // Style correspondant à un titre de niveau 1
          component_balises="h1" // Balise utilisée ici est un <div>, mais pourrait être un <h1>
          theme_couleur="secondary" // Couleur principale du thème
        >
          Coders Monkeys
        </Typography> */}
      {/* Texte avec un style "lead" (souvent pour des sous-titres ou des introductions) */}
      {/* <Typography
          variant_style="lead" // Style pour du texte introductif
          component_balises="div" // Utilise un <div>, mais pourrait être une balise de paragraphe <p>
          theme_couleur="gray" // Couleur principale
        >
          Coders Monkeys
        </Typography>

        {/* Texte avec un style "body-sm" (texte principal en petite taille) */}
      {/* <Typography
          variant_style="body-lg" // Style de texte principal en version petite
          component_balises="div" // Encapsulé dans un <div>
          theme_couleur="primary" // Couleur principale du thème */}
      {/* > */}
      {/* Coders Monkeys */}
      {/* </Typography> */}
      {/* Texte avec un style "caption4" (texte pour des légendes ou des annotations) */}
      {/* <Typography
          variant_style="caption4" // Style correspondant à une légende ou un petit texte
          weight="medium" // Poids de la police défini comme "moyen"
          component_balises="div" // Utilisation d'un <div> pour ce texte
          theme_couleur="primary" // Couleur principale
        >
          Coders Monkeys
        </Typography> */}
      {/* </div> */}
    </>
  );
}
