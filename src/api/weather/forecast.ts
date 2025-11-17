import { forecastWeatherUrl } from "@/config";
import { ForecastWeatherSchema } from "@/schemas/weather.schema";

const getForecastWeather = async (coords: Coords) => {
  const res = await fetch(forecastWeatherUrl(coords));
  const data = await res.json();
  return ForecastWeatherSchema.parse(data);
};

export default getForecastWeather;
