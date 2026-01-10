import { useState } from "react";
import clsx from "clsx";

interface DatePickerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (date: Date) => void;
  selectedDate?: Date;
}

const DAYS = ["M", "T", "W", "T", "F", "S", "S"];

function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number): number {
  const day = new Date(year, month, 1).getDay();
  return day === 0 ? 6 : day - 1; // Convert Sunday=0 to Monday-based (0=Mon, 6=Sun)
}

export function DatePickerModal({
  isOpen,
  onClose,
  onSelect,
  selectedDate,
}: DatePickerModalProps) {
  const today = new Date();
  const [viewYear, setViewYear] = useState(selectedDate?.getFullYear() ?? today.getFullYear());
  const [viewMonth, setViewMonth] = useState(selectedDate?.getMonth() ?? today.getMonth());
  const [tempSelectedDate, setTempSelectedDate] = useState<Date | undefined>(selectedDate);

  if (!isOpen) return null;

  const daysInMonth = getDaysInMonth(viewYear, viewMonth);
  const firstDay = getFirstDayOfMonth(viewYear, viewMonth);
  const monthName = new Date(viewYear, viewMonth).toLocaleDateString("en-US", { month: "long", year: "numeric" });

  const handlePrevMonth = () => {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear(viewYear - 1);
    } else {
      setViewMonth(viewMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear(viewYear + 1);
    } else {
      setViewMonth(viewMonth + 1);
    }
  };

  const handleDateClick = (day: number) => {
    setTempSelectedDate(new Date(viewYear, viewMonth, day));
  };

  const handlePick = () => {
    if (tempSelectedDate) {
      onSelect(tempSelectedDate);
      onClose();
    }
  };

  const isSelected = (day: number) => {
    if (!tempSelectedDate) return false;
    return (
      tempSelectedDate.getDate() === day &&
      tempSelectedDate.getMonth() === viewMonth &&
      tempSelectedDate.getFullYear() === viewYear
    );
  };

  // Generate calendar grid
  const calendarDays: (number | null)[] = [];
  for (let i = 0; i < firstDay; i++) {
    calendarDays.push(null);
  }
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day);
  }

  // Pad to complete the last week
  while (calendarDays.length % 7 !== 0) {
    calendarDays.push(null);
  }

  // Split into weeks
  const weeks: (number | null)[][] = [];
  for (let i = 0; i < calendarDays.length; i += 7) {
    weeks.push(calendarDays.slice(i, i + 7));
  }

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-primary-100 rounded-2xl p-6 flex flex-col items-center gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-white rounded-lg shadow-lg w-80 overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-3 py-2">
            <button
              className="bg-primary-100 text-white text-sm font-medium px-3 py-2 rounded-2xl flex items-center gap-1"
              onClick={() => {}}
            >
              {monthName}
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M2 4L5 7L8 4" stroke="white" strokeWidth="1.5" />
              </svg>
            </button>
            <div className="flex gap-6">
              <button
                className="w-10 h-10 flex items-center justify-center"
                onClick={handlePrevMonth}
                aria-label="Previous month"
              >
                <div className="w-2.5 h-2.5 border-l-2 border-t-2 border-neutral-700 rotate-[-45deg]" />
              </button>
              <button
                className="w-10 h-10 flex items-center justify-center"
                onClick={handleNextMonth}
                aria-label="Next month"
              >
                <div className="w-2.5 h-2.5 border-r-2 border-b-2 border-neutral-700 rotate-[-45deg]" />
              </button>
            </div>
          </div>

          {/* Calendar */}
          <div className="px-3 pb-3">
            {/* Day headers */}
            <div className="grid grid-cols-7 gap-0">
              {DAYS.map((day, i) => (
                <div
                  key={i}
                  className="w-10 h-10 flex items-center justify-center text-xs font-medium text-neutral-600"
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Weeks */}
            {weeks.map((week, weekIdx) => (
              <div key={weekIdx} className="grid grid-cols-7 gap-0">
                {week.map((day, dayIdx) => (
                  <button
                    key={dayIdx}
                    disabled={day === null}
                    onClick={() => day && handleDateClick(day)}
                    className={clsx(
                      "w-10 h-10 flex items-center justify-center text-xs font-medium rounded-full",
                      day === null && "invisible",
                      day !== null && !isSelected(day) && "text-neutral-600 hover:bg-neutral-100",
                      day !== null && isSelected(day) && "bg-background-200 text-neutral-900"
                    )}
                  >
                    {day}
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Pick button */}
        <button
          className="bg-primary-400 text-white px-8 py-2 rounded-2xl text-base font-normal hover:bg-primary-500"
          onClick={handlePick}
        >
          Pick
        </button>
      </div>
    </div>
  );
}
