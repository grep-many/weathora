import { apiKey, apiUrl } from "@/config";
import { CurrentWeatherSchema } from "@/schemas/weather.schema";

const getCurrentWeather = async ({ lat, lon }: { lat: number; lon: number }) => {
  const res = await fetch(`${apiUrl}weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`);
  const data = await res.json();
  return CurrentWeatherSchema.parse(data);
};

export default getCurrentWeather;
