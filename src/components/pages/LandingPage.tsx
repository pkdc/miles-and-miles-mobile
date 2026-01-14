import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/Button";
import { Header } from "../ui/Header";
import { Input } from "../ui/Input";
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
      <Header />

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
          <Input
            id="postcode"
            label="Type in Your Postcode:"
            value={postcode}
            onChange={(e) => setPostcode(e.target.value)}
            placeholder="SW1A 2AB"
            error={postcode && !isPostcodeValid ? "Invalid Postcode" : undefined}
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
