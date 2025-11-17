import { weatherApiKey, apiUrl } from "@/config";
import { ForecastWeatherSchema, type Coords } from "@/schemas/weather.schema";

const getForecastWeather = async ({ lat, lon }: Coords) => {
  const res = await fetch(`${apiUrl}forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${weatherApiKey}`);
  const data = await res.json();
  return ForecastWeatherSchema.parse(data);
};

export default getForecastWeather;
