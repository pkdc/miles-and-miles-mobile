import { useState } from "react";
import { Button } from "../ui/Button";
import { DatePickerModal } from "../ui/DatePickerModal";
import { Header } from "../ui/Header";
import { Input } from "../ui/Input";
import { TimePickerModal } from "../ui/TimePickerModal";
import { VehicleCard, type Vehicle } from "../ui/VehicleCard";
import rangeroverRed from "../../assets/rangerover_red.png";

const sampleVehicle: Vehicle = {
  id: 1,
  name: "Range Rover Evoque P300e R-Dynamic HSE",
  image: rangeroverRed,
  price: 1200,
};

export function PreviewPage() {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [isTimePickerOpen, setIsTimePickerOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedVehicleId, setSelectedVehicleId] = useState<number | null>(1);

  return (
    <div className="p-8 bg-background-200 min-h-screen">
      <h1 className="text-2xl font-bold mb-8">UI Components Preview</h1>

      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Primary Buttons</h2>
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <Button variant="primary">Default</Button>
          <Button variant="primary" disabled>
            Disabled
          </Button>
        </div>
        <div className="flex flex-col gap-4">
          <Button variant="primary" size="large">
            Large
          </Button>
          <Button variant="primary" size="large" disabled>
            Large Disabled
          </Button>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Secondary Buttons</h2>
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <Button variant="secondary">Default</Button>
          <Button variant="secondary" disabled>
            Disabled
          </Button>
        </div>
        <div className="flex flex-col gap-4">
          <Button variant="secondary" size="large">
            Large
          </Button>
          <Button variant="secondary" size="large" disabled>
            Large Disabled
          </Button>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Vehicle Cards</h2>
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="w-40">
            <p className="text-sm mb-2">Small (default)</p>
            <VehicleCard vehicle={sampleVehicle} />
          </div>
          <div className="w-40">
            <p className="text-sm mb-2">Small (selected)</p>
            <VehicleCard
              vehicle={sampleVehicle}
              isSelected={selectedVehicleId === sampleVehicle.id}
              onClick={() => setSelectedVehicleId(selectedVehicleId === 1 ? null : 1)}
            />
          </div>
        </div>
        <div>
          <p className="text-sm mb-2">Large</p>
          <VehicleCard vehicle={sampleVehicle} size="large" />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Date Picker Modal</h2>
        <Button variant="primary" onClick={() => setIsDatePickerOpen(true)}>
          Open Date Picker
        </Button>
        {selectedDate && (
          <p className="mt-2 text-sm">
            Selected: {selectedDate.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
          </p>
        )}
        <DatePickerModal
          isOpen={isDatePickerOpen}
          onClose={() => setIsDatePickerOpen(false)}
          onSelect={setSelectedDate}
          selectedDate={selectedDate}
        />
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Time Picker Modal</h2>
        <Button variant="primary" onClick={() => setIsTimePickerOpen(true)}>
          Open Time Picker
        </Button>
        <TimePickerModal
          isOpen={isTimePickerOpen}
          onClose={() => setIsTimePickerOpen(false)}
          onSelect={() => {}}
        />
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Input Fields</h2>
        <div className="flex flex-col gap-6 max-w-md">
          <div>
            <p className="text-sm mb-2">Default</p>
            <Input placeholder="SW1A 2AB" />
          </div>
          <div>
            <p className="text-sm mb-2">With Label</p>
            <Input label="Postcode" placeholder="SW1A 2AB" />
          </div>
          <div>
            <p className="text-sm mb-2">Error State</p>
            <Input
              placeholder="07736 459 459"
              defaultValue="07736 459 459"
              error="Invalid Postcode"
            />
          </div>
          <div>
            <p className="text-sm mb-2">Disabled</p>
            <Input placeholder="SW1A 2AB" disabled />
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Header</h2>
        <div className="bg-background-100 rounded-lg">
          <Header />
        </div>
      </section>
    </div>
  );
}
