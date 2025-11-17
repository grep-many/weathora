import type z from "zod";
import type { AirPollutionSchema } from "./schemas/aQ.schema";
import type { CurrentWeatherSchema, ForecastWeatherSchema } from "./schemas/weather.schema";

declare global {
  type AirPollution = z.infer<typeof AirPollutionSchema>;
  type Coords = { lat: number; lon: number };
  type CurrentWeather = z.infer<typeof CurrentWeatherSchema>;
  type ForecastWeather = z.infer<typeof ForecastWeatherSchema>;
}

export {};
