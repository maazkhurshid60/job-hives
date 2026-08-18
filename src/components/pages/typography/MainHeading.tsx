import React from "react";
import clsx from "clsx";

interface MainHeadingProps {
  children: React.ReactNode;
  className?: string;
}

const MainHeading: React.FC<MainHeadingProps> = ({ children, className }) => (
  <h2
    className={clsx(
      "font-heading font-extrabold text-neutral-900",
      "text-[32px] md:text-[40px] lg:text-[48px] xl:text-[58px]",
      "leading-[1.1] tracking-tight",
      className
    )}
  >
    {children}
  </h2>
);

export default MainHeading;
