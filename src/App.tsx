import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LandingPage } from "./components/pages/LandingPage";
import { AddressPage } from "./components/pages/AddressPage";
import { LocationInsideCLondonPage } from "./components/pages/LocationInsideCLondonPage";
import { ChooseDateTimePage } from "./components/pages/ChooseDateTimePage";
import { AvailableVehiclesPage } from "./components/pages/AvailableVehiclesPage";
import { VehicleDetailsPage } from "./components/pages/VehicleDetailsPage";
import { ConfirmDeliveryDetailsPage } from "./components/pages/ConfirmDeliveryDetailsPage";
import { ConfirmationPage } from "./components/pages/ConfirmationPage";
import { PreviewPage } from "./components/pages/PreviewPage";

const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "/address", element: <AddressPage /> },
  { path: "/location-inside", element: <LocationInsideCLondonPage /> },
  { path: "/choose-date-time", element: <ChooseDateTimePage /> },
  { path: "/available-vehicles", element: <AvailableVehiclesPage /> },
  { path: "/vehicle-details", element: <VehicleDetailsPage /> },
  { path: "/confirm-delivery", element: <ConfirmDeliveryDetailsPage /> },
  { path: "/confirmation", element: <ConfirmationPage /> },
  { path: "/preview", element: <PreviewPage /> },
]);

function App() {
  return (
    <>
      {/* <div className="w-full bg-yellow-50 border-b border-yellow-200 p-2 text-center text-xs font-medium text-yellow-800 fixed top-0 left-0 right-0 z-50">
        ⚠️ Please use mobile to view this prototype.
      </div> */}
      <div className="min-h-screen bg-black-800 flex items-center justify-center md:p-8">
        <div className="w-full md:w-[390px] min-h-screen md:h-[min(844px,calc(100vh-4rem))] bg-background-100 md:rounded-[2.5rem] md:shadow-2xl overflow-hidden md:overflow-y-auto no-scrollbar">
          <RouterProvider router={router} />
        </div>
      </div>
    </>
  );
}

export default App;
