import React from "react";
import clsx from "clsx";

interface CardHeadingProps {
  children: React.ReactNode;
  className?: string;
}

const CardHeading: React.FC<CardHeadingProps> = ({ children, className }) => (
  <h3
    className={clsx(
      "font-heading font-bold text-neutral-900 leading-normal",
      className
    )}
  >
    {children}
  </h3>
);

export default CardHeading;
