"use client";

import { IconProps } from "@/types/iconProps";
import clsx from "clsx";
import { Spinner } from "../spinner/spinner";

interface Props {
  size?: "small" | "medium" | "large";
  icon?: IconProps;
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
    icoSize: number = 0;
  switch (variant) {
    case "accent":
      variantStyle = "bg-primary hover:bg-primary-400 text-white rounded";
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
        //Default
        variantStyle =
          "bg-primary hover:bg-primary-400 text-white rounded-full";
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
    case "small": //Default
      sizeStyle = `text-caption3 font-medium ${
        variant === "ico"
          ? "flex justify-center items-center w-[40px] h-[40px]"
          : "px-[14px] py-[12px]"
      } `;
      icoSize = 18;
      break;
    case "medium":
      sizeStyle = `text-caption2 font-medium ${
        variant === "ico"
          ? "flex justify-center items-center w-[50px] h-[50px]"
          : "px-[18px] py-[15px]"
      }`;
      icoSize = 20;

      break;
    case "large":
      sizeStyle = `text-caption1 font-medium ${
        variant === "ico"
          ? "flex justify-center items-center w-[60px] h-[60px]"
          : "px-[22px] py-[18px]"
      }`;
      icoSize = 24;

      break;
  }

  return (
    <button
      type="button"
      className={clsx(
        variantStyle,
        sizeStyle,
        icoSize,
        isLoading && "cursor-wait",
        "relative"
      )}
      onClick={() => alert("click")}
      disabled={disabled}
    >
      {isLoading && (
        <div className=" absolute inset-0 flex items-center justify-center">
          {variant === "accent" || variant === "ico" || iconTheme === "secondary" ? (
            <Spinner size="small" variant="white" />
          ) : (
            <Spinner size="small" />
          )}
        </div>
      )}
      <div className={clsx(isLoading && "invisible")}>
        {icon && variant === "ico" ? (
          <icon.icon size={icoSize} />
        ) : (
          <div className={clsx(icon && " flex items-center gap-1")}>
            {icon && iconPosition === "left" && <icon.icon size={icoSize} />}
            {children}
            {icon && iconPosition === "right" && <icon.icon size={icoSize} />}
          </div>
        )}
      </div>
    </button>
  );
};
