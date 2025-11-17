import { airQualityUrl } from "@/config";
import { AirPollutionSchema } from "@/schemas/aQ.schema";

const getAirQuality = async (coords: Coords) => {
  const res = await fetch(airQualityUrl(coords));
  const data = await res.json();
  return AirPollutionSchema.parse(data);
};

export default getAirQuality;
