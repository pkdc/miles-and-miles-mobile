import { Button } from "../ui/Button";
import logoImg from "../../assets/logo-desktop-color 2.png";
import rangeroverRed from "../../assets/rangerover_red.png";

interface ConfirmDeliveryDetailsPageProps {
  onBack: () => void;
}

export function ConfirmDeliveryDetailsPage({ onBack }: ConfirmDeliveryDetailsPageProps) {
  return (
    <div className="min-h-screen bg-background-200 flex flex-col">
      <header className="flex flex-col items-center py-2">
        <img src={logoImg} alt="Miles & Miles" className="h-14 w-auto" />
        <div className="w-full max-w-md h-px bg-primary-400 mt-2" />
      </header>

      <div className="flex-1 px-4">
        <h1 className="text-3xl font-semibold text-black mt-2">
          Confirm Delivery Details
        </h1>

        <div className="bg-white/25 rounded-3xl p-4 mt-4 flex items-center justify-center">
          <img
            src={rangeroverRed}
            alt="Range Rover Evoque"
            className="w-72 h-32 object-contain"
          />
        </div>

        <div className="mt-6 text-xl text-black space-y-1">
          <p>Vehicle: Range Rover Evoque P300e R-Dynamic HSE</p>
          <p>Address: 10 Downing Street, SW1A 2AA</p>
          <p>Date: 29 February 2025</p>
          <p>Time: 12:00pm</p>
          <p>Price: £1200 per day</p>
          <p>Estimate Number of Days: 3</p>
          <p>Amount to Pay: £3600</p>
        </div>
      </div>

      <main className="px-2 pb-4 pt-4 flex flex-col gap-6">
        <Button variant="primary" size="large">
          Confirm Order
        </Button>
        <Button variant="secondary" size="large" onClick={onBack}>
          Back
        </Button>
      </main>
    </div>
  );
}
