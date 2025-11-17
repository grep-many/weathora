import { weatherApiKey, apiUrl } from "@/config";
import { AirPollutionSchema } from "@/schemas/aQ.schema";
import type { Coords } from "@/schemas/weather.schema";

const getCurrentAirQuality = async ({ lat, lon }: Coords) => {
  const res = await fetch(
    `${apiUrl}air_pollution?lat=${lat}&lon=${lon}&units=imperial&appid=${weatherApiKey}`
  );
  const data = await res.json();
  return AirPollutionSchema.parse(data);
};

export default getCurrentAirQuality;
