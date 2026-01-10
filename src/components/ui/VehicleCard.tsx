import clsx from "clsx";

export interface Vehicle {
  id: number;
  name: string;
  image: string;
  price: number;
}

interface VehicleCardProps {
  vehicle: Vehicle;
  size?: "small" | "large";
}

export function VehicleCard({ vehicle, size = "small" }: VehicleCardProps) {
  const isLarge = size === "large";

  return (
    <div
      className={clsx(
        "flex flex-col items-center",
        isLarge ? "gap-4" : "bg-white/25 rounded-3xl p-2 gap-2"
      )}
    >
      <img
        src={vehicle.image}
        alt={vehicle.name}
        className={clsx(
          "object-contain",
          isLarge ? "w-72 h-32" : "w-full h-20"
        )}
      />
      <p
        className={clsx(
          "text-black text-center",
          isLarge ? "text-xl" : "text-xs"
        )}
      >
        {vehicle.name}
      </p>
      <p className={clsx("text-black", isLarge ? "text-xl" : "text-xs")}>
        £{vehicle.price} per day
      </p>
    </div>
  );
}
