import React from "react";
import clsx from "clsx";

interface CardDescProps {
  children: React.ReactNode;
  className?: string;
}

const CardDesc: React.FC<CardDescProps> = ({ children, className }) => (
  <p
    className={clsx(
      "font-body font-normal text-neutral-600 leading-[1.5]",
      className
    )}
  >
    {children}
  </p>
);

export default CardDesc;
