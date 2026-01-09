import { useState } from "react";
import { Button } from "../Button";
import logoImg from "../../assets/logo-desktop-color 2.png";
import heroImg from "../../assets/MM-Home-3 1.png";

export function LandingPage() {
  const [postcode, setPostcode] = useState("");

  return (
    <div className="min-h-screen bg-background-200 flex flex-col">
      <header className="flex flex-col items-center py-2">
        <img src={logoImg} alt="Miles & Miles" className="h-[60px] w-auto" />
        <div className="w-full max-w-[450px] h-[1px] bg-primary-400 mt-2" />
      </header>

      <div className="w-full">
        <div className="w-full h-[1px] bg-primary-400" />
        <img
          src={heroImg}
          alt="Range Rover"
          className="w-full h-[532px] object-cover object-center"
        />
        <div className="w-full h-[1px] bg-primary-400" />
      </div>

      <main className="flex-1 px-4 py-4">
        <p className="text-[20px] leading-[24px] text-black mb-4">
          Rent a high-end vehicle from London's oldest independent car rental
          company
        </p>

        <div className="flex flex-col gap-3">
          <label
            htmlFor="postcode"
            className="text-[26px] text-black font-normal"
          >
            Type in Your Postcode:
          </label>
          <input
            id="postcode"
            type="text"
            value={postcode}
            onChange={(e) => setPostcode(e.target.value)}
            placeholder="SW1A 2AB"
            className="border border-[#aeaeae] p-3 text-[22px] text-[#2d2a2a] bg-white focus:outline-none focus:border-primary-400"
            aria-label="Enter your postcode"
          />
          <Button variant="primary" size="large">
            Check Address
          </Button>
        </div>
      </main>
    </div>
  );
}
