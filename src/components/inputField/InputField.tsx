import React, { useId } from "react";
import clsx from "clsx";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  error?: string;
  required?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  hint,
  error,
  required,
  className,
  type = "text",
  ...props
}) => {
  const id = useId();

  return (
    <div className={clsx("flex flex-col gap-1.5 w-full", className)}>
      {label && (
        <label htmlFor={id} className="text-[13px] font-bold text-neutral-700 select-none">
          {label}
          {required && <span className="text-danger-500 ml-0.5">*</span>}
        </label>
      )}
      <input
        id={id}
        type={type}
        className={clsx(
          "font-body text-sm px-1.5 py-3.5 w-full outline-none",
          "rounded-md border-[1.5px] border-solid transition duration-120 ease",
          "bg-neutral-0 text-neutral-900 placeholder:text-neutral-400",
          error
            ? "border-danger-500 focus:border-danger-500 focus:shadow-[0_0_0_4px_rgba(239,68,68,0.15)]"
            : "border-neutral-300 hover:border-neutral-400 focus:border-primary-500 focus:shadow-focus",
          "disabled:bg-neutral-100 disabled:text-neutral-400 disabled:cursor-not-allowed disabled:border-neutral-200"
        )}
        {...props}
      />
      {error && <p className="text-xs text-danger-600 font-semibold mt-0.5">{error}</p>}
      {hint && !error && <p className="text-[12px] text-neutral-500 mt-0.5">{hint}</p>}
    </div>
  );
};

export default InputField;
