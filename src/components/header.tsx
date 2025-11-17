import type React from "react";
import LocationDropDown from "./dropdowns/location";
import MapTypeDropDown from "./dropdowns/mapType";
import Hamburger from "@/assets/hamburger.svg?react";
import type { SetStateAction } from "react";

type Props = {
  location: string;
  setLocation: React.Dispatch<SetStateAction<string>>;
  mapType: string;
  setMapType: React.Dispatch<SetStateAction<string>>;
  setIsSidePanelOpen: React.Dispatch<SetStateAction<boolean>>;
};

const Header = ({ location, setLocation, mapType, setMapType, setIsSidePanelOpen }: Props) => {
  return (
    <div className="flex justify-between gap-4 md:gap-8">
      <LocationDropDown location={location} setLocation={setLocation} />
      <MapTypeDropDown mapType={mapType} setMapType={setMapType} />
      <button
        className="bg-foreground/10 hover:bg-foreground/20 active:bg-foreground/5 rounded-sm border p-2 lg:hidden"
        onClick={() => setIsSidePanelOpen(true)}
      >
        <Hamburger className="ml-auto size-4 dark:invert" />
      </button>
    </div>
  );
};

export default Header;
