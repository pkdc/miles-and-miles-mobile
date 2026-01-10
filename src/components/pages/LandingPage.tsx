import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/Button";
import logoImg from "../../assets/logo-desktop-color 2.png";
import heroImg from "../../assets/MM-Home-3 1.png";

const UK_POSTCODE_REGEX = /^[A-Z]{1,2}\d[A-Z\d]? ?\d[A-Z]{2}$/i;

function isValidUKPostcode(postcode: string): boolean {
  return UK_POSTCODE_REGEX.test(postcode.trim());
}

export function LandingPage() {
  const navigate = useNavigate();
  const [postcode, setPostcode] = useState("SW1A 2AB");
  const isPostcodeValid = isValidUKPostcode(postcode);

  return (
    <div className="min-h-screen bg-background-200 flex flex-col">
      <header className="flex flex-col items-center py-2">
        <img src={logoImg} alt="Miles & Miles" className="h-14 w-auto" />
        <div className="w-full max-w-md h-px bg-primary-400 mt-2" />
      </header>

      <div className="w-full">
        <div className="w-full h-px bg-primary-400" />
        <img
          src={heroImg}
          alt="Range Rover"
          className="w-full aspect-square object-cover object-center"
        />
        <div className="w-full h-px bg-primary-400" />
      </div>

      <main className="flex-1 px-4 py-4">
        <p className="text-xl leading-normal text-black mb-4">
          Rent a high-end vehicle from London's oldest independent car rental
          company
        </p>

        <div className="flex flex-col gap-3">
          <label htmlFor="postcode" className="text-2xl text-black font-normal">
            Type in Your Postcode:
          </label>
          <input
            id="postcode"
            type="text"
            value={postcode}
            onChange={(e) => setPostcode(e.target.value)}
            placeholder="SW1A 2AB"
            className="border border-neutral-400 p-3 text-lg text-neutral-800 bg-white focus:outline-none focus:border-primary-400"
            aria-label="Enter your postcode"
          />
          <Button
            variant="primary"
            size="large"
            disabled={!isPostcodeValid}
            onClick={() => navigate("/address")}
          >
            Check Address
          </Button>
        </div>
      </main>
    </div>
  );
}
