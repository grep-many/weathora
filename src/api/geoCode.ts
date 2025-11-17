import { geoUrl } from "@/config";
import { GeocodeSchema } from "@/schemas/geo.schema";

const getGeoCode = async (query: string) => {
  const res = await fetch(geoUrl(query));
  const data = await res.json();
  return GeocodeSchema.parse(data);
};

export default getGeoCode;
