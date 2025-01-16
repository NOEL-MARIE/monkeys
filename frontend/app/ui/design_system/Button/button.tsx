"use client";

import clsx from "clsx";

interface Props {
  size?: "small" | "medium" | "large";
  icon?: unknown;
  iconTheme?: "accent" | "secondary" | "gray";
  iconPosition?: "left" | "right";
  disabled?: boolean;
  isLoading?: boolean;
  variant?: "accent" | "secondary" | "outline" | "disable" | "ico";
  children?: React.ReactNode;
}

export const Button = ({
  size = "medium",
  variant = "accent",
  icon,
  iconTheme = "accent",
  iconPosition = "right",
  disabled,
  isLoading,
  children,
}: Props) => {
  let variantStyle: string = "",
    sizeStyle: string = "",
    // eslint-disable-next-line prefer-const
    icoSize: number = 0;
  switch (variant) {
    case "accent":
      variantStyle = "bg-primary hover:bg-primary-400 rounded";
      break;
    case "secondary":
      variantStyle =
        "bg-primary-200 hover:bg-primary-300/50 text-primary rounded";
      break;
    case "outline":
      variantStyle =
        "bg-white hover:bg-gray-400/50 border border-gray-500 text-gray-900 rounded";
      break;
    case "disable":
      variantStyle =
        "bg-gray-400 border border-gray-500 text-gray-600 rounded cursor-not-allowed";
      break;
    case "ico":
      if (iconTheme === "accent") {
        variantStyle = "bg-primary hover:bg-primary-400 rounded-full";
      }
      if (iconTheme === "secondary") {
        variantStyle =
          "bg-primary-200 hover:bg-primary-300/50 text-primary rounded-full";
      }
      if (iconTheme === "gray") {
        variantStyle = "bg-gray-700 hover:bg-gray-600 text-white rounded-full";
      }
      break;
  }

  switch (size) {
    case "small":
      sizeStyle = "text-caption3 font-medium px-[14px] py-[12px]";
      break;
    case "medium":
      sizeStyle = "text-caption2 font-medium px-[18px] py-[15px]";
      break;
    case "large":
      sizeStyle = "text-caption1 font-medium px-[22px] py-[18px]";
      break;
  }
  console.log(icon);
  return (
    <button
      type="button"
      className={clsx(variantStyle, sizeStyle, icoSize)}
      onClick={() => alert("click")}
      disabled={disabled}
    >
      {icon && variant === "ico" ? (
        <>
          <icon.icon Size={icoSize} />
        </>
      ) : (
        <>{children}</>
      )}
    </button>
  );
};
