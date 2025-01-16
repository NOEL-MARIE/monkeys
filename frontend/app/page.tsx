"use client";
import { RiUser6Fill } from "react-icons/ri";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Seo from "./ui/component/seo"; // Composant pour gérer le SEO (titre et description des pages)
import { Button } from "./ui/design_system/Button/button";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Typography from "./ui/design_system/typography/typography"; // Composant de typographie pour le design système
import { Spinner } from "./ui/design_system/spinner/spinner";

// Composant principal de la page d'accueil
export default function Home() {
  return (
    <>
      <Seo title="Monkey Coders" description="Description..." />
      <Spinner size="small" />
      <Spinner />
      <Spinner size="large" />
      <div className=" flex items-center gap-x-3 p-9">
        <Button
          size="small"
          icon={{ icon: RiUser6Fill }}
          iconPosition="left"
          variant="accent"
        >
          accent
        </Button>
        <Button size="small" variant="secondary">
          secondary
        </Button>
        <Button size="small" variant="outline">
          outline
        </Button>
        <Button size="small" variant="disable" disabled>
          disable
        </Button>
        <Button variant="ico" size="small" icon={{ icon: RiUser6Fill }} />
      </div>
      <div className=" flex items-center gap-x-3 p-9">
        <Button size="medium" variant="accent">
          accent
        </Button>
        <Button size="medium" variant="secondary">
          secondary
        </Button>
        <Button size="medium" variant="outline">
          outline
        </Button>
        <Button size="medium" variant="disable" disabled>
          disable
        </Button>
        <Button variant="ico" size="medium" icon={{ icon: RiUser6Fill }} />
      </div>
      <div className=" flex items-center gap-x-3 p-9">
        <Button size="large" variant="accent" icon={{ icon: RiUser6Fill }}>
          accent
        </Button>
        <Button size="large" variant="secondary">
          secondary
        </Button>
        <Button size="large" variant="outline">
          outline
        </Button>
        <Button size="large" variant="disable" disabled>
          disable
        </Button>
        <Button
          variant="ico"
          size="large"
          iconTheme="secondary"
          icon={{ icon: RiUser6Fill }}
        />
        <Button
          variant="ico"
          iconTheme="gray"
          size="large"
          icon={{ icon: RiUser6Fill }}
        />
        <Button variant="ico" size="large" icon={{ icon: RiUser6Fill }} />
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
