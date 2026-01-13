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
  isSelected?: boolean;
  onClick?: () => void;
}

export function VehicleCard({ vehicle, size = "small", isSelected = false, onClick }: VehicleCardProps) {
  const isLarge = size === "large";
  const isInteractive = !!onClick;

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (onClick && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      onClick();
    }
  };

  const cardLabel = `${vehicle.name}, £${vehicle.price} per day${isSelected ? ", selected" : ""}`;

  return (
    <div
      role={isInteractive ? "button" : undefined}
      tabIndex={isInteractive ? 0 : undefined}
      aria-pressed={isInteractive ? isSelected : undefined}
      aria-label={isInteractive ? cardLabel : undefined}
      className={clsx(
        "flex flex-col items-center",
        isLarge ? "gap-4" : "rounded-3xl p-2 gap-2",
        !isLarge && (isSelected ? "bg-primary-400/20" : "bg-white/25"),
        isInteractive && "cursor-pointer",
        isInteractive && "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
      )}
      onClick={(e) => {
        e.stopPropagation();
        onClick?.();
      }}
      onKeyDown={handleKeyDown}
    >
      <img
        src={vehicle.image}
        alt=""
        aria-hidden="true"
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
        aria-hidden={isInteractive}
      >
        {vehicle.name}
      </p>
      <p
        className={clsx("text-black", isLarge ? "text-xl" : "text-xs")}
        aria-hidden={isInteractive}
      >
        £{vehicle.price} per day
      </p>
    </div>
  );
}
