import { useState } from "react";
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

  if (!isOpen) return null;

  const handleOk = () => {
    onSelect(hour, minute, period);
    onClose();
  };

  const incrementHour = () => setHour((h) => (h === 12 ? 1 : h + 1));
  const decrementHour = () => setHour((h) => (h === 1 ? 12 : h - 1));
  const incrementMinute = () => setMinute((m) => (m === 59 ? 0 : m + 1));
  const decrementMinute = () => setMinute((m) => (m === 0 ? 59 : m - 1));

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-primary-100 rounded-lg px-4 py-6 flex items-center justify-between w-80"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Time display */}
        <div className="flex items-center">
          <button
            className="text-white text-4xl font-light"
            onClick={incrementHour}
            onContextMenu={(e) => { e.preventDefault(); decrementHour(); }}
          >
            {hour.toString().padStart(2, "0")}
          </button>
          <span className="text-white/50 text-4xl font-light">:</span>
          <button
            className="text-white text-4xl font-light"
            onClick={incrementMinute}
            onContextMenu={(e) => { e.preventDefault(); decrementMinute(); }}
          >
            {minute.toString().padStart(2, "0")}
          </button>
        </div>

        {/* AM/PM toggle */}
        <div className="flex gap-2 items-center">
          <button
            className={clsx(
              "text-lg",
              period === "AM" ? "text-white" : "text-white/50"
            )}
            onClick={() => setPeriod("AM")}
          >
            AM
          </button>
          <button
            className={clsx(
              "text-lg",
              period === "PM" ? "text-white" : "text-white/50"
            )}
            onClick={() => setPeriod("PM")}
          >
            PM
          </button>
        </div>

        {/* OK button */}
        <button
          className="bg-primary-400 text-white w-12 h-12 rounded-full text-xs font-medium hover:bg-primary-500"
          onClick={handleOk}
        >
          OK
        </button>
      </div>
    </div>
  );
}
