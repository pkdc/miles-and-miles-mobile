import { Button } from "../ui/Button";
import logoImg from "../../assets/logo-desktop-color 2.png";
import iconsChecked from "../../assets/icons_checked.png";

interface ConfirmationPageProps {
  onHome: () => void;
}

export function ConfirmationPage({ onHome }: ConfirmationPageProps) {
  return (
    <div className="min-h-screen bg-background-200 flex flex-col">
      <header className="flex flex-col items-center py-2">
        <img src={logoImg} alt="Miles & Miles" className="h-14 w-auto" />
        <div className="w-full max-w-md h-px bg-primary-400 mt-2" />
      </header>

      <div className="flex-1 flex items-center justify-center px-4 py-4">
        <div className="bg-success/60 rounded-lg px-5 py-8 flex flex-col items-center gap-20 w-full max-w-sm">
          <div className="flex flex-col items-center gap-16">
            <img
              src={iconsChecked}
              alt="Order confirmed"
              className="w-56 h-56"
            />
            <div className="text-xl text-white text-center">
              <p>Your order for</p>
              <p className="font-bold">Range Rover Evoque P300e R-Dynamic HSE</p>
              <p>will be delivered to</p>
              <p className="font-bold">10 Downing Street</p>
              <p className="font-bold">SW1A 2AA</p>
              <p>
                On <span className="font-bold">29 February 2025</span>
              </p>
              <p>
                at <span className="font-bold">12:00pm</span>
              </p>
            </div>
          </div>

          <Button variant="primary" size="medium" onClick={onHome}>
            Home
          </Button>
        </div>
      </div>
    </div>
  );
}
