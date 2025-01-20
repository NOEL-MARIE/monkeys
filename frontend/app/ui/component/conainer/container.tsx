import React from "react";
import clsx from "clsx"; // Assurez-vous d'avoir l'importation de  clsx

interface Props {
  children?: React.ReactNode;
  className?: string;
}

export const Container = ({ children, className }: Props) => {
  return (
    <div className={clsx(className, "max-w-7xl mx-auto px-5 lg:px-10 w-full")}>
      {children}
    </div>
  );
};
