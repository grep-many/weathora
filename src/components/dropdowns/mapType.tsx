import { mapTypes } from "@/assets/constants/mapTypes";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type React from "react";

type Props = {
  mapType: string;
  setMapType: React.Dispatch<React.SetStateAction<string>>;
};

const MapTypeDropDown = ({ mapType, setMapType }: Props) => {
  return (
    <Select value={mapType} onValueChange={(value) => setMapType(value)}>
      <SelectTrigger className="w-[180px] capitalize">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent className="z-1001">
        {mapTypes.map((type) => (
          <SelectItem key={type} value={type} className="capitalize">
            {type.split("_")[0]}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default MapTypeDropDown;
