import { Button } from "../ui/Button";
import { VehicleCard } from "../ui/VehicleCard";
import logoImg from "../../assets/logo-desktop-color 2.png";
import rangeroverRed from "../../assets/rangerover_red.png";

const selectedVehicle = {
  id: 1,
  name: "Range Rover Evoque P300e R-Dynamic HSE",
  image: rangeroverRed,
  price: 1200,
};

interface VehicleDetailsPageProps {
  onBack: () => void;
}

export function VehicleDetailsPage({ onBack }: VehicleDetailsPageProps) {
  return (
    <div className="min-h-screen bg-background-200 flex flex-col">
      <header className="flex flex-col items-center py-2">
        <img src={logoImg} alt="Miles & Miles" className="h-14 w-auto" />
        <div className="w-full max-w-md h-px bg-primary-400 mt-2" />
      </header>

      <div className="flex-1 overflow-y-auto px-4">
        <h1 className="text-3xl font-semibold text-black mt-2">
          Vehicle Details
        </h1>

        <div className="mt-4">
          <VehicleCard vehicle={selectedVehicle} size="large" />
        </div>

        <div className="mt-6 text-base text-black">
          <p className="font-medium">Key Details</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Vehicle Type: Luxury Compact SUV (5-door, also convertible in older models).</li>
            <li>Engines: Petrol (P200, P250, P300), Diesel (D165, D200), Plug-in Hybrid (P300e) with Mild-Hybrid (MHEV) tech.</li>
            <li>Performance: 0-60 mph from ~6.8s (PHEV) to 10.8s, with top speeds around 118-140 mph.</li>
            <li>Drivetrain: Intelligent All-Wheel Drive (AWD) standard on most, with Torque Vectoring by Braking.</li>
            <li>Interior: Grained/Windsor leather, heated/cooled seats, premium Meridian sound, Pivi Pro infotainment system, digital driver display.</li>
            <li>Technology: Terrain Response, All-Terrain Progress Control, ClearSight Ground View camera.</li>
            <li>Dimensions: ~4371mm long, ~1649mm high, ~1904mm wide (excluding mirrors).</li>
            <li>Trims: SE, S, HSE, Autobiography (vary by year/market).</li>
          </ul>

          <p className="font-medium mt-4">What to Expect</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Style: Distinctive, sleek design, a hallmark of the Evoque.</li>
            <li>Luxury: High-quality materials, modern tech, comfortable ride.</li>
            <li>Capability: Surprisingly good off-road with Range Rover tech, great for city life.</li>
            <li>Practicality: 472L boot (reduces significantly in PHEV), decent rear space.</li>
          </ul>

          <p className="mt-4">
            In essence, the Evoque blends Range Rover luxury with compact SUV agility, making it a popular choice for style-conscious buyers needing premium features and all-weather capability.
          </p>
        </div>
      </div>

      <main className="px-2 pb-4 pt-4 flex flex-col gap-6">
        <Button variant="primary" size="large">
          Select Vehicle
        </Button>
        <Button variant="secondary" size="large" onClick={onBack}>
          Back
        </Button>
      </main>
    </div>
  );
}
