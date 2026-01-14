import { useNavigate } from "react-router-dom";
import { Button } from "../ui/Button";
import { Header } from "../ui/Header";
import iconGood from "../../assets/icon-good.svg";

export function LocationInsideCLondonPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background-200 flex flex-col">
      <Header />

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
        <Button variant="primary" size="large" onClick={() => navigate("/choose-date-time")}>
          Next
        </Button>
        <Button variant="secondary" size="large" onClick={() => navigate("/address")}>
          Back
        </Button>
      </main>
    </div>
  );
}
