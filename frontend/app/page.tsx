// import Image from "next/image";
import Seo from "./ui/component/seo";


export default function Home() {
  return (
    <>
      <Seo title={"monkey coders"} description={"description..."} />
      <main className="w-full h-full ">
        <h1 className="w-full h-screen flex items-center justify-center">
          le titre de ma page est {" => "}
         
        </h1>
      </main>
    </>
    //  <head>
    //   <title> coders monkeys</title>
    //   <meta name="description" content="description..."/>
    //   <meta
    //   name="viewport"
    //   content="width=device-width, initial-scale=1"/>
    //   <link rel="icon" href="/favicon.ico" />
    //  </head>
  );
}
