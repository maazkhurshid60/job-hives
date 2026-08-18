import React from "react";
import clsx from "clsx";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

const Container: React.FC<ContainerProps> = ({
  children,
  className,
  as: Component = "div",
}) => {
  return (
    <Component className={clsx("wrapper", className)}>
      {children}
    </Component>
  );
};

export default Container;
