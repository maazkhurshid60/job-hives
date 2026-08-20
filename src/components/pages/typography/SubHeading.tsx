import React from "react";
import clsx from "clsx";

interface SubHeadingProps {
  children: React.ReactNode;
  className?: string;
}

const SubHeading: React.FC<SubHeadingProps> = ({ children, className }) => (
  <h2
    className={clsx(
      "font-heading font-bold text-neutral-900",
      "text-[clamp(26px,4vw,38px)] leading-[1.2]",
      className
    )}
  >
    {children}
  </h2>
);

export default SubHeading;
