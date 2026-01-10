import { Button } from "../Button";
import logoImg from "../../assets/logo-desktop-color 2.png";
import iconGood from "../../assets/icon-good.svg";

interface LocationInsideCLondonPageProps {
  onBack: () => void;
}

export function LocationInsideCLondonPage({ onBack }: LocationInsideCLondonPageProps) {
  return (
    <div className="min-h-screen bg-background-200 flex flex-col">
      <header className="flex flex-col items-center py-2">
        <img src={logoImg} alt="Miles & Miles" className="h-14 w-auto" />
        <div className="w-full max-w-md h-px bg-primary-400 mt-2" />
      </header>

      <div className="flex-1 flex flex-col items-center justify-center px-4">
        <img src={iconGood} alt="Success" className="w-56 h-56 mb-14" />
        <p className="text-xl text-black text-center leading-normal">
          Congratulations!
          <br />
          The Entered Location is inside
          <br />
          our service area
        </p>
      </div>

      <main className="px-2 pb-4 flex flex-col gap-6">
        <Button variant="primary" size="large">
          Next
        </Button>
        <Button variant="secondary" size="large" onClick={onBack}>
          Back
        </Button>
      </main>
    </div>
  );
}
