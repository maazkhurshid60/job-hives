import React from "react";
import Link from "next/link";
import clsx from "clsx";

interface ButtonSmProps {
  url?: string;
  text: string;
  bgColor?: string; // custom color overrides e.g. "bg-success-500" or raw styling
  textColor?: string;
  isBorder?: boolean;
  isPill?: boolean;
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const ButtonSm: React.FC<ButtonSmProps> = ({
  url,
  text,
  bgColor = "bg-primary-500 hover:bg-primary-600 active:bg-primary-700 text-neutral-0 shadow-sm",
  isBorder = false,
  isPill = false,
  icon,
  onClick,
  className,
  type = "button",
  disabled = false,
}) => {
  const baseClasses = clsx(
    "font-body font-semibold text-sm cursor-pointer select-none",
    "inline-flex items-center justify-center gap-2",
    "transition duration-150 ease-in-out",
    "px-[16px] py-[8px]", // space-4 px, space-2 py
    isPill ? "rounded-full" : "rounded-md",
    isBorder ? "border-[1.5px] border-solid" : "border-none",
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

export default ButtonSm;
