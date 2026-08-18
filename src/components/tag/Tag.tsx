import React from "react";
import clsx from "clsx";

interface TagProps {
  children: React.ReactNode;
  variant?: "primary" | "neutral" | "success" | "warning" | "danger" | "verified";
  className?: string;
}

const Tag: React.FC<TagProps> = ({ children, variant = "neutral", className }) => {
  const baseClasses = "font-body font-bold text-[11.5px] px-2.5 py-1 rounded-full inline-flex items-center gap-1.5";
  
  const variantClasses = {
    primary: "bg-primary-50 text-primary-700",
    neutral: "bg-neutral-100 text-neutral-700",
    success: "bg-success-50 text-success-600",
    warning: "bg-warning-50 text-warning-600",
    danger: "bg-danger-50 text-danger-600",
    verified: "bg-primary-500 text-neutral-0",
  };

  return (
    <span className={clsx(baseClasses, variantClasses[variant], className)}>
      {children}
    </span>
  );
};

export default Tag;
