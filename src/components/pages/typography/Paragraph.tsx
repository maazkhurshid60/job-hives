import React from "react";
import clsx from "clsx";

interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ children, className }) => (
  <p
    className={clsx(
      "font-body font-normal text-neutral-700 leading-[1.6]",
      className
    )}
  >
    {children}
  </p>
);

export default Paragraph;
