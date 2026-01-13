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
  ...props
}: InputProps) {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={inputId} className="text-2xl text-black font-normal">
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={clsx(
          "w-full h-11 px-3 text-xl bg-white focus:outline-none",
          error
            ? "border-2 border-danger-400 text-neutral-800"
            : "border border-neutral-400 text-neutral-800 focus:border-primary-400",
          className
        )}
        aria-invalid={!!error}
        aria-describedby={error ? `${inputId}-error` : undefined}
        {...props}
      />
      {error && (
        <div className="flex items-center gap-1 mt-1">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            className="text-danger-400"
          >
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
            <line x1="12" y1="8" x2="12" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <circle cx="12" cy="17" r="1" fill="currentColor" />
          </svg>
          <span id={`${inputId}-error`} className="text-base text-danger-400">
            {error}
          </span>
        </div>
      )}
    </div>
  );
}
