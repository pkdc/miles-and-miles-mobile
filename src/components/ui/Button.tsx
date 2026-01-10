import type { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

type ButtonVariant = "primary" | "secondary";
type ButtonSize = "default" | "large";

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
        "flex items-center justify-center px-8 py-4 rounded-2xl text-button font-normal transition-colors border",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2",
        {
          "w-full": size === "large",
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
