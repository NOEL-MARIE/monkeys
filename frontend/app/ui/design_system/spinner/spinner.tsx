import clsx from "clsx";

interface Props {
  size?: "small" | "medium" | "large";
  variant?: "primary" | "white";
}

export const Spinner = ({ size = "medium", variant = "primary" }: Props) => {
  let variant_style: string = "",
    size_Style: string = "";

  switch (size) {
    case "small":
      size_Style = "w-5 h-5";
      break;
    case "medium":
      size_Style = "w-10 h-10"; // Modifier pour que la taille medium soit plus visible
      break;
    case "large": // Default
      size_Style = "w-12 h-12";
      break;
    default:
      break;
  }

  switch (variant) {
    case "primary": // Default
      variant_style = "text-blue-500"; // Exemple de style pour primary
      break;
    case "white":
      variant_style = "text-white"; // Exemple de style pour white
      break;
    default:
      break;
  }

  return (
    <>
      <svg
        role="spinner"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className={clsx("animate-spin", variant_style, size_Style)} // Correction ici
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938-2.647z"
        />
      </svg>
    </>
  );
};
