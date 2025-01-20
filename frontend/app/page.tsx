"use client";
import { RiUser6Fill } from "react-icons/ri";
import Seo from "./ui/component/seo/seo"; // Composant pour gérer le SEO (titre et description des pages)
import { Button } from "./ui/design_system/Button/button";
import Typography from "./ui/design_system/typography/typography"; // Composant de typographie pour le design système
import { Spinner } from "./ui/design_system/spinner/spinner"; // Composant Spinner
import { Container } from "./ui/component/conainer/container"; // Import correct du Container

// Composant principal de la page d'accueil
export default function Home() {
  return (
    <>
      <Container>
        <Seo title="Monkey Coders" description="Description..." />

        <div className="max-w-6xl mx-auto space-y-5">
          {/* Section des Spinners */}
          <div className="flex items-center gap-5">
            <Spinner size="small" />
            <Spinner />
            <Spinner size="large" />
          </div>

          {/* Section des boutons de taille small */}
          <div className="flex items-center gap-x-3 p-9">
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

          {/* Section des boutons de taille medium */}
          <div className="flex items-center gap-x-3 p-9">
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

          {/* Section des boutons de taille large */}
          <div className="flex items-center gap-x-3 p-9">
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

          {/* Section des boutons en état de chargement (loading) */}
          <div className="flex items-center gap-x-3 p-9">
            <Button
              isLoading
              size="small"
              icon={{ icon: RiUser6Fill }}
              iconPosition="left"
              variant="accent"
            >
              accent
            </Button>
            <Button isLoading size="small" variant="secondary">
              secondary
            </Button>
            <Button isLoading size="small" variant="outline">
              outline
            </Button>
            <Button isLoading size="small" variant="disable" disabled>
              disable
            </Button>
            <Button
              isLoading
              variant="ico"
              iconTheme="accent"
              size="small"
              icon={{ icon: RiUser6Fill }}
            />
            <Button
              isLoading
              variant="ico"
              size="medium"
              iconTheme="gray"
              icon={{ icon: RiUser6Fill }}
            />
            <Button
              isLoading
              variant="ico"
              size="large"
              iconTheme="secondary"
              icon={{ icon: RiUser6Fill }}
            />
          </div>

          {/* Section des typographies */}
          <div className="space-y-5">
            <Typography
              variant_style="body-lg"
              component_balises="h1"
              theme_couleur="primary"
            >
              Coders Monkeys
            </Typography>
            <Typography
              variant_style="body-base"
              component_balises="h1"
              theme_couleur="secondary"
            >
              Coders Monkeys
            </Typography>
            <Typography
              variant_style="lead"
              component_balises="div"
              theme_couleur="gray"
            >
              Coders Monkeys
            </Typography>
            <Typography
              variant_style="caption4"
              component_balises="div"
              theme_couleur="primary"
            >
              Coders Monkeys
            </Typography>
          </div>
        </div>
      </Container>
    </>
  );
}
