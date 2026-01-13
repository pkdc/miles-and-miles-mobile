import type { InputHTMLAttributes } from "react";
import clsx from "clsx";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string;
}

export function Input({
  error,
  label,
  className,
  id,
  disabled,
  required,
  "aria-label": ariaLabel,
  ...props
}: InputProps) {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");
  const errorId = `${inputId}-error`;

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label
          htmlFor={inputId}
          className={clsx(
            "text-2xl font-normal",
            disabled ? "text-neutral-400" : "text-black"
          )}
        >
          {label}
          {required && <span className="text-danger-400 ml-1" aria-hidden="true">*</span>}
        </label>
      )}
      <input
        id={inputId}
        disabled={disabled}
        required={required}
        aria-label={ariaLabel}
        aria-invalid={!!error}
        aria-required={required}
        aria-describedby={error ? errorId : undefined}
        className={clsx(
          "w-full h-11 px-3 text-xl bg-white transition-colors",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2",
          error
            ? "border-2 border-danger-400 text-neutral-800"
            : "border border-neutral-400 text-neutral-800 focus:border-primary-400",
          disabled && "bg-neutral-100 text-neutral-400 cursor-not-allowed",
          className
        )}
        {...props}
      />
      {error && (
        <div
          id={errorId}
          role="alert"
          aria-live="polite"
          className="flex items-center gap-1 mt-1"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            className="text-danger-400 flex-shrink-0"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
            <line x1="12" y1="8" x2="12" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <circle cx="12" cy="17" r="1" fill="currentColor" />
          </svg>
          <span className="text-base text-danger-400">
            {error}
          </span>
        </div>
      )}
    </div>
  );
}
