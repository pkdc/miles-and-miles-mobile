import { Button } from "../Button";
import logoImg from "../../assets/logo-desktop-color 2.png";
import rangeroverRed from "../../assets/rangerover_red.png";
import rangeroverGrey from "../../assets/rangerover_grey.png";
import jaguarSilver from "../../assets/jaguar_silver.png";

interface AvailableVehiclesPageProps {
  onBack: () => void;
}

interface Vehicle {
  id: number;
  name: string;
  image: string;
  price: number;
}

const vehicles: Vehicle[] = [
  { id: 1, name: "Range Rover Evoque P300e R-Dynamic HSE", image: rangeroverRed, price: 1200 },
  { id: 2, name: "Range Rover Evoque P300e R-Dynamic HSE", image: rangeroverGrey, price: 1100 },
  { id: 3, name: "Jaguar F-Pace R Dynamic HSE", image: jaguarSilver, price: 1000 },
  { id: 4, name: "Range Rover Evoque P300e R-Dynamic HSE", image: rangeroverRed, price: 1200 },
  { id: 5, name: "Range Rover Evoque P300e R-Dynamic HSE", image: rangeroverRed, price: 1200 },
  { id: 6, name: "Range Rover Evoque P300e R-Dynamic HSE", image: rangeroverGrey, price: 1100 },
  { id: 7, name: "Jaguar F-Pace R Dynamic HSE", image: jaguarSilver, price: 1000 },
  { id: 8, name: "Range Rover Evoque P300e R-Dynamic HSE", image: rangeroverRed, price: 1200 },
  { id: 9, name: "Range Rover Evoque P300e R-Dynamic HSE", image: rangeroverRed, price: 1200 },
  { id: 10, name: "Range Rover Evoque P300e R-Dynamic HSE", image: rangeroverGrey, price: 1100 },
  { id: 11, name: "Jaguar F-Pace R Dynamic HSE", image: jaguarSilver, price: 1000 },
  { id: 12, name: "Range Rover Evoque P300e R-Dynamic HSE", image: rangeroverRed, price: 1200 },
  { id: 13, name: "Range Rover Evoque P300e R-Dynamic HSE", image: rangeroverGrey, price: 1100 },
  { id: 14, name: "Jaguar F-Pace R Dynamic HSE", image: jaguarSilver, price: 1000 },
  { id: 15, name: "Range Rover Evoque P300e R-Dynamic HSE", image: rangeroverRed, price: 1200 },
];

function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  return (
    <div className="bg-white/25 rounded-3xl p-2 flex flex-col items-center gap-2">
      <img
        src={vehicle.image}
        alt={vehicle.name}
        className="w-full h-20 object-contain"
      />
      <p className="text-xs text-black text-center">{vehicle.name}</p>
      <p className="text-xs text-black">£{vehicle.price} per day</p>
    </div>
  );
}

export function AvailableVehiclesPage({ onBack }: AvailableVehiclesPageProps) {
  return (
    <div className="min-h-screen bg-background-200 flex flex-col">
      <header className="flex flex-col items-center py-2">
        <img src={logoImg} alt="Miles & Miles" className="h-14 w-auto" />
        <div className="w-full max-w-md h-px bg-primary-400 mt-2" />
      </header>

      <div className="px-4 mt-2">
        <h1 className="text-3xl font-semibold text-black">
          List of Available Vehicles
        </h1>
        <div className="flex justify-end items-center mt-2">
          <span className="text-base text-black mr-2">Sort by</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
            fill="#000"
          >
            <path d="M120-240v-80h240v80H120Zm0-200v-80h480v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
        </div>
      </div>

      <div className="h-[540px] overflow-y-auto px-2 py-4">
        <div className="grid grid-cols-2 gap-4">
          {vehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      </div>

      <main className="mt-auto px-2 pb-4 flex flex-col gap-6">
        <Button variant="primary" size="large">
          View Vehicle Details
        </Button>
        <Button variant="secondary" size="large" onClick={onBack}>
          Back
        </Button>
      </main>
    </div>
  );
}
