import { currentWeatherUrl } from "@/config";
import { CurrentWeatherSchema } from "@/schemas/weather.schema";

const getCurrentWeather = async (coords: Coords) => {
  const res = await fetch(currentWeatherUrl(coords));
  const data = await res.json();
  return CurrentWeatherSchema.parse(data);
};

export default getCurrentWeather;
