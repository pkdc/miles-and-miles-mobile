import type { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

type ButtonVariant = "primary" | "secondary";
type ButtonSize = "small" | "default" | "medium" | "large";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
}

export function Button({
  variant = "primary",
  size = "default",
  disabled,
  className,
  children,
  "aria-label": ariaLabel,
  ...props
}: ButtonProps) {
  return (
    <button
      type={props.type ?? "button"}
      disabled={disabled}
      aria-disabled={disabled}
      aria-label={ariaLabel}
      className={clsx(
        "flex items-center justify-center rounded-2xl font-normal transition-colors border",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2",
        {
          "px-4 py-2 text-base h-11": size === "small",
          "px-8 py-4 text-button": size === "default",
          "px-8 py-4 text-button w-48": size === "medium",
          "px-8 py-4 text-button w-full": size === "large",
        },
        {
          "bg-primary-400 text-white border-primary-400 hover:cursor-pointer hover:bg-primary-500 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-primary-400":
            variant === "primary",
          "bg-white text-primary-400 border-primary-400 hover:cursor-pointer hover:border-primary-500 hover:text-primary-500 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white":
            variant === "secondary",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
