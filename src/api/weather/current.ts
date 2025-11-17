import { weatherApiKey, apiUrl } from "@/config";
import { CurrentWeatherSchema, type Coords } from "@/schemas/weather.schema";

const getCurrentWeather = async ({ lat, lon }: Coords) => {
  const res = await fetch(`${apiUrl}weather?lat=${lat}&lon=${lon}&units=imperial&appid=${weatherApiKey}`);
  const data = await res.json();
  return CurrentWeatherSchema.parse(data);
};

export default getCurrentWeather;
