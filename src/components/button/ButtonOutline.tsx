import React from "react";
import Link from "next/link";
import clsx from "clsx";

interface ButtonOutlineProps {
  url?: string;
  text: string;
  borderColor?: string;
  textColor?: string;
  isPill?: boolean;
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const ButtonOutline: React.FC<ButtonOutlineProps> = ({
  url,
  text,
  borderColor = "border-primary-500 hover:border-primary-600 hover:bg-primary-50",
  textColor = "text-primary-600 hover:text-primary-700",
  isPill = false,
  icon,
  onClick,
  className,
  disabled = false,
}) => {
  const baseClasses = clsx(
    "font-body font-semibold text-sm cursor-pointer select-none",
    "inline-flex items-center justify-center gap-2",
    "transition duration-150 ease-in-out",
    "px-[22px] py-[11px]", // standard secondary button padding
    "border-[1.5px] border-solid",
    isPill ? "rounded-full" : "rounded-md",
    disabled
      ? "opacity-50 cursor-not-allowed bg-neutral-0 border-neutral-200 text-neutral-400 transform-none"
      : `${borderColor} ${textColor}`,
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
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
    >
      {innerContent}
    </button>
  );
};

export default ButtonOutline;
