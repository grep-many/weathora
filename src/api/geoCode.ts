import { weatherApiKey, geoUrl } from "@/config";
import { GeocodeSchema } from "@/schemas/geo.schema";

const getGeoCode = async (query:string) => {
  const res = await fetch(`${geoUrl+query}&limit=1&appid=${weatherApiKey}`);
  const data = await res.json();
  return GeocodeSchema.parse(data);
};

export default getGeoCode;
