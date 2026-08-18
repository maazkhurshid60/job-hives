import React from "react";
import Link from "next/link";
import clsx from "clsx";

interface ButtonLgProps {
  url?: string;
  text: string;
  bgColor?: string;
  isPill?: boolean;
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const ButtonLg: React.FC<ButtonLgProps> = ({
  url,
  text,
  bgColor = "bg-primary-500 hover:bg-primary-600 active:bg-primary-700 text-neutral-0 shadow-sm",
  isPill = false,
  icon,
  onClick,
  className,
  type = "button",
  disabled = false,
}) => {
  const baseClasses = clsx(
    "font-body font-semibold text-base cursor-pointer select-none",
    "inline-flex items-center justify-center gap-2",
    "transition duration-150 ease-in-out",
    "px-[30px] py-[15px]", // custom padding for large buttons
    isPill ? "rounded-full" : "rounded-md",
    disabled ? "opacity-50 cursor-not-allowed bg-neutral-200 text-neutral-400 border-none shadow-none transform-none" : bgColor,
    className
  );

  const innerContent = (
    <>
      {icon}
      {text}
    </>
  );

  if (url && !disabled) {
    return (
      <Link href={url} className={baseClasses}>
        {innerContent}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
    >
      {innerContent}
    </button>
  );
};

export default ButtonLg;
