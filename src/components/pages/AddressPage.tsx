import { Button } from "../Button";
import logoImg from "../../assets/logo-desktop-color 2.png";
import mapImg from "../../assets/10_Downing_street_google_map.png";

interface AddressPageProps {
  postcode: string;
  onBack: () => void;
  onConfirm: () => void;
}

export function AddressPage({ postcode: _postcode, onBack, onConfirm }: AddressPageProps) {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col"
      style={{ backgroundImage: `url(${mapImg})` }}
    >
      <header className="flex flex-col items-center py-2">
        <img src={logoImg} alt="Miles & Miles" className="h-14 w-auto" />
        <div className="w-full max-w-md h-px bg-primary-400 mt-2" />
      </header>

      <h1 className="text-3xl text-black font-bold px-4 mt-2">
        Check Your Address
      </h1>

      <div className="flex-1" />

      <main className="px-2 pb-4">
        <div className="flex flex-col gap-6">
          <Button variant="primary" size="large" onClick={onConfirm}>
            Confirm Address
          </Button>
          <Button variant="secondary" size="large" onClick={onBack}>
            Back
          </Button>
        </div>
      </main>
    </div>
  );
}
