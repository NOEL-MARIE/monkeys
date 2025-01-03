interface Props {
  title: string;
  description: string;
}

export default function Seo({ title, description }: Props) {
  return (
    <>
      <head>
        <title> {title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
     
    </>
  );
}
 