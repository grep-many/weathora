import { locations } from "@/assets/constants/locations";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type React from "react";

type Props = {
  location: string;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
};

const LocationDropDown = ({ location, setLocation }: Props) => {
  return (
    <Select value={location} onValueChange={(value) => setLocation(value)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="custom" />
      </SelectTrigger>
      <SelectContent className="z-1001">
                <SelectItem value="custom">Custom</SelectItem>
        {locations.map((city) => (
          <SelectItem key={city} value={city}>
            {city}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default LocationDropDown;
