import React from "react";
import clsx from "clsx";
import { Spinner } from "../spinner/spinner";
import { Logo } from "../Logo/logo";
import { Avatar } from "../Avatar/Avatar";

interface Props {
  variant_style?:
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

  component_balises?: "h1" | "h2" | "h3" | "h4" | "h5" | "div" | "p" | "span";

  theme_couleur?: "black" | "white" | "gray" | "primary" | "secondary";

  weight?: "regular" | "medium";

  className?: string;

  children: React.ReactNode;
}

export default function Typography({
  variant_style = "h3",
  component_balises = "div",
  theme_couleur = "black",
  weight = "regular",
  className = "",
  children,
}: Props) {
  const Element = component_balises;

  let baseStyle = "";

  switch (variant_style) {
    case "display":
      baseStyle = "text-6xl";
      break;
    case "h1":
      baseStyle = "text-5xl";
      break;
    case "h2":
      baseStyle = "text-4xl";
      break;
    case "h3":
      baseStyle = "text-3xl";
      break;
    case "h4":
      baseStyle = "text-2xl";
      break;
    case "h5":
      baseStyle = "text-xl";
      break;
    case "lead":
      baseStyle = "text-lg";
      break;
    case "body-lg":
      baseStyle = "text-base";
      break;
    case "body-base":
      baseStyle = "text-sm";
      break;
    case "body-sm":
      baseStyle = "text-xs";
      break;
    case "caption1":
      baseStyle = "text-xxs";
      break;
    case "caption2":
      baseStyle = "text-xxs";
      break;
    case "caption3":
      baseStyle = "text-xs";
      break;
    case "caption4":
      baseStyle = "text-sm";
      break;
    default:
      baseStyle = "text-3xl";
  }

  let themeStyle = "";
  switch (theme_couleur) {
    case "black":
      themeStyle = "text-black";
      break;
    case "white":
      themeStyle = "text-white";
      break;
    case "gray":
      themeStyle = "text-gray";
      break;
    case "primary":
      themeStyle = "text-primary";
      break;
    case "secondary":
      themeStyle = "text-secondary";
      break;
    default:
      themeStyle = "text-5xl";
  }

  return (
    <>
      <div className="flex items-start gap-7">
        <div className="space-y-2">
          <Element
            className={clsx(
              baseStyle,
              themeStyle,
              weight === "medium" && "font-semibold",
              className
            )}
          >
            {children}
          </Element>
        </div>

        <div className="space-y-2">
          <Typography variant_style="display" weight="medium">
            Spinner
          </Typography>
          <div className="flex items-center gap-2 p-2 border border-gray-400 rounded max-w-6xl mx-auto space-y-5">
            <Spinner size="small" />
            <Spinner />
            <Spinner size="large" />
          </div>
        </div>

        <div className="space-y-2">
          <Typography variant_style="caption1" weight="medium">
            Logo
          </Typography>
          <div className="flex items-center gap-2 p-2 border border-gray-400 rounded">
            <Logo size="very-small" />
            <Logo size="small" />
            <Logo />
            <Logo size="large" />
          </div>
        </div>

        <div className="space-y-2">
          <Typography variant_style="caption3" weight="medium">
            Avatar
          </Typography>
          <div className="flex items-center gap-2 p-2 border border-gray-400 rounded">
            <Avatar size="small" src="/asset/jesus.jpg" alt="jesus avatar" />
            <Avatar src="/asset/jesus.jpg" alt="jesus avatar" />
            <Avatar size="large" src="/asset/jesus.jpg" alt="jesus avatar" />
          </div>
        </div>
      </div>
    </>
  );
}
