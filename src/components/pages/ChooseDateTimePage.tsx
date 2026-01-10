import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/Button";
import { DatePickerModal } from "../ui/DatePickerModal";
import { TimePickerModal } from "../ui/TimePickerModal";
import logoImg from "../../assets/logo-desktop-color 2.png";
import openDoorImg from "../../assets/open_door.png";

interface SelectedTime {
  hour: number;
  minute: number;
  period: "AM" | "PM";
}

export function ChooseDateTimePage() {
  const navigate = useNavigate();
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [isTimePickerOpen, setIsTimePickerOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedTime, setSelectedTime] = useState<SelectedTime | undefined>();

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const formatTime = (time: SelectedTime) => {
    return `${time.hour}:${time.minute.toString().padStart(2, "0")} ${time.period}`;
  };

  const handleTimeSelect = (hour: number, minute: number, period: "AM" | "PM") => {
    setSelectedTime({ hour, minute, period });
  };

  return (
    <div className="min-h-screen bg-background-200 flex flex-col">
      <header className="flex flex-col items-center py-2">
        <img src={logoImg} alt="Miles & Miles" className="h-14 w-auto" />
        <div className="w-full max-w-md h-px bg-primary-400 mt-2" />
      </header>

      <div className="px-4 mt-4">
        <h1 className="text-3xl font-semibold text-black">
          Choose Delivery Date and Time
        </h1>
        <p className="text-xl text-black mt-2">
          Choose the date and time you want the vehicle to be delivered to your door
        </p>

        <div className="flex flex-col gap-4 mt-4">
          <div className="flex gap-2">
            <button
              className="flex-1 h-11 px-3 text-left text-xl border border-neutral-400 rounded bg-white hover:cursor-pointer hover:border-primary-500 hover:text-primary-500"
              style={{ color: selectedDate ? "#1a1a1a" : "#737373" }}
              onClick={() => setIsDatePickerOpen(true)}
            >
              {selectedDate ? formatDate(selectedDate) : "Pick a date for the delivery"}
            </button>
            {selectedDate && (
              <Button
                variant="secondary"
                size="small"
                onClick={() => setSelectedDate(undefined)}
              >
                Clear
              </Button>
            )}
          </div>
          <div className="flex gap-2">
            <button
              className="flex-1 h-11 px-3 text-left text-xl border border-neutral-400 rounded bg-white hover:cursor-pointer hover:border-primary-500 hover:text-primary-500"
              style={{ color: selectedTime ? "#1a1a1a" : "#737373" }}
              onClick={() => setIsTimePickerOpen(true)}
            >
              {selectedTime ? formatTime(selectedTime) : "Pick a time for the delivery"}
            </button>
            {selectedTime && (
              <Button
                variant="secondary"
                size="small"
                onClick={() => setSelectedTime(undefined)}
              >
                Clear
              </Button>
            )}
          </div>
        </div>

        <DatePickerModal
          isOpen={isDatePickerOpen}
          onClose={() => setIsDatePickerOpen(false)}
          onSelect={setSelectedDate}
          selectedDate={selectedDate}
        />

        <TimePickerModal
          isOpen={isTimePickerOpen}
          onClose={() => setIsTimePickerOpen(false)}
          onSelect={handleTimeSelect}
          initialHour={selectedTime?.hour}
          initialMinute={selectedTime?.minute}
          initialPeriod={selectedTime?.period}
        />
      </div>

      <div className="flex-1 flex items-center justify-center px-2 py-4">
        <img
          src={openDoorImg}
          alt="Opening car door"
          className="w-full max-w-md object-cover rounded"
        />
      </div>

      <main className="px-2 pb-4 flex flex-col gap-6">
        <Button variant="primary"
        size="large"
        disabled={!selectedDate || !selectedTime}
        onClick={() => navigate("/available-vehicles")}>
          Confirm Date and Time
        </Button>
        <Button variant="secondary" size="large" onClick={() => navigate("/location-inside")}>
          Back
        </Button>
      </main>
    </div>
  );
}
