import { useState, useEffect, useRef } from "react";
import clsx from "clsx";

interface TimePickerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (hour: number, minute: number, period: "AM" | "PM") => void;
  initialHour?: number;
  initialMinute?: number;
  initialPeriod?: "AM" | "PM";
}

export function TimePickerModal({
  isOpen,
  onClose,
  onSelect,
  initialHour = 12,
  initialMinute = 0,
  initialPeriod = "AM",
}: TimePickerModalProps) {
  const [hour, setHour] = useState(initialHour);
  const [minute, setMinute] = useState(initialMinute);
  const [period, setPeriod] = useState<"AM" | "PM">(initialPeriod);
  const dialogRef = useRef<HTMLDivElement>(null);

  // Focus management and escape key handler
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    dialogRef.current?.focus();

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleOk = () => {
    onSelect(hour, minute, period);
    onClose();
  };

  const incrementHour = () => setHour((h) => (h === 12 ? 1 : h + 1));
  const decrementHour = () => setHour((h) => (h === 1 ? 12 : h - 1));
  const incrementMinute = () => setMinute((m) => (m === 59 ? 0 : m + 1));
  const decrementMinute = () => setMinute((m) => (m === 0 ? 59 : m - 1));

  const timeString = `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")} ${period}`;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={onClose}
      role="presentation"
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label="Choose a time"
        tabIndex={-1}
        className="bg-primary-100 rounded-lg px-4 py-6 flex items-center justify-between w-80 focus:outline-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Time display */}
        <div className="flex items-center" role="group" aria-label="Time selection">
          <div className="sr-only" aria-live="polite" aria-atomic="true">
            Selected time: {timeString}
          </div>
          <button
            type="button"
            className="text-white text-4xl font-light rounded px-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            onClick={incrementHour}
            onKeyDown={(e) => {
              if (e.key === "ArrowUp") { e.preventDefault(); incrementHour(); }
              if (e.key === "ArrowDown") { e.preventDefault(); decrementHour(); }
            }}
            aria-label={`Hour: ${hour}. Use arrow keys to adjust`}
            aria-valuemin={1}
            aria-valuemax={12}
            aria-valuenow={hour}
            role="spinbutton"
          >
            {hour.toString().padStart(2, "0")}
          </button>
          <span className="text-white/50 text-4xl font-light" aria-hidden="true">:</span>
          <button
            type="button"
            className="text-white text-4xl font-light rounded px-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            onClick={incrementMinute}
            onKeyDown={(e) => {
              if (e.key === "ArrowUp") { e.preventDefault(); incrementMinute(); }
              if (e.key === "ArrowDown") { e.preventDefault(); decrementMinute(); }
            }}
            aria-label={`Minute: ${minute}. Use arrow keys to adjust`}
            aria-valuemin={0}
            aria-valuemax={59}
            aria-valuenow={minute}
            role="spinbutton"
          >
            {minute.toString().padStart(2, "0")}
          </button>
        </div>

        {/* AM/PM toggle */}
        <div className="flex gap-2 items-center" role="radiogroup" aria-label="AM or PM">
          <button
            type="button"
            role="radio"
            aria-checked={period === "AM"}
            className={clsx(
              "text-lg rounded px-2 py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-white",
              period === "AM" ? "text-white" : "text-white/50"
            )}
            onClick={() => setPeriod("AM")}
          >
            AM
          </button>
          <button
            type="button"
            role="radio"
            aria-checked={period === "PM"}
            className={clsx(
              "text-lg rounded px-2 py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-white",
              period === "PM" ? "text-white" : "text-white/50"
            )}
            onClick={() => setPeriod("PM")}
          >
            PM
          </button>
        </div>

        {/* OK button */}
        <button
          type="button"
          className="bg-primary-400 text-white w-12 h-12 rounded-full text-xs font-medium hover:bg-primary-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-100"
          onClick={handleOk}
          aria-label={`Confirm time: ${timeString}`}
        >
          OK
        </button>
      </div>
    </div>
  );
}
