import { apiKey, apiUrl } from "@/config";
import { ForecastWeatherSchema } from "@/schemas/weather.schema";

const getForecastWeather = async ({ lat, lon }: { lat: number; lon: number }) => {
  const res = await fetch(`${apiUrl}forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`);
  const data = await res.json();
  return ForecastWeatherSchema.parse(data);
};

export default getForecastWeather;
