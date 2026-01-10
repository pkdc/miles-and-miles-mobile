import { Button } from "../Button";
import logoImg from "../../assets/logo-desktop-color 2.png";
import openDoorImg from "../../assets/open_door.png";

interface ChooseDateTimePageProps {
  onBack: () => void;
  onConfirm: () => void;
}

export function ChooseDateTimePage({ onBack, onConfirm }: ChooseDateTimePageProps) {
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
          <button className="w-full h-11 px-3 text-left text-xl text-neutral-500 border border-neutral-400 rounded bg-white hover:cursor-pointer hover:border-primary-500 hover:text-primary-500">
            Pick a date for the delivery
          </button>
          <button className="w-full h-11 px-3 text-left text-xl text-neutral-500 border border-neutral-400 rounded bg-white hover:cursor-pointer hover:border-primary-500 hover:text-primary-500">
            Pick a time for the delivery
          </button>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center px-2 py-4">
        <img
          src={openDoorImg}
          alt="Opening car door"
          className="w-full max-w-md object-cover rounded"
        />
      </div>

      <main className="px-2 pb-4 flex flex-col gap-6">
        <Button variant="primary" size="large" onClick={onConfirm}>
          Confirm Date and Time
        </Button>
        <Button variant="secondary" size="large" onClick={onBack}>
          Back
        </Button>
      </main>
    </div>
  );
}
