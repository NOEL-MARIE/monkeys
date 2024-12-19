// Import des composants
import Seo from "./ui/component/seo";
import Typography from "./ui/design_system/typography/typography"; // Change "typography" en "Typography"

export default function Home() {
  return (
    <>
      <Seo title={"monkey coders"} description={"description..."} />
      <Typography variant_style="display"  component_balises="h1" >coders monkeys</Typography>
    </>
  );
}

//  <head>

//   <title> coders monkeys</title>
//   <meta name="description" content="description..."/>
//   <meta
//   name="viewport"
//   content="width=device-width, initial-scale=1"/>
//   <link rel="icon" href="/favicon.ico" />
//  </head>
