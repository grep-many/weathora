import { z } from "zod";

export const CurrentWeatherSchema = z.object({
  coord: z.object({
    lon: z.number(),
    lat: z.number(),
  }),

  weather: z.array(
    z.object({
      id: z.number(),
      main: z.string(),
      description: z.string(),
      icon: z.string(),
    }),
  ),

  base: z.string(),

  main: z.object({
    temp: z.number(),
    feels_like: z.number(),
    temp_min: z.number(),
    temp_max: z.number(),
    pressure: z.number(),
    humidity: z.number(),
    sea_level: z.number().optional(),
    grnd_level: z.number().optional(),
  }),

  visibility: z.number(),

  wind: z.object({
    speed: z.number(),
    deg: z.number(),
    gust: z.number().optional(),
  }),

  clouds: z.object({
    all: z.number(),
  }),

  dt: z.number(),

  sys: z.object({
    country: z.string(),
    sunrise: z.number(),
    sunset: z.number(),
  }),

  timezone: z.number(),
  id: z.number(),
  name: z.string(),
  cod: z.number(),
});

const ForecastWeatherItemSchema = z.object({
  dt: z.number(),

  main: z.object({
    temp: z.number(),
    feels_like: z.number(),
    temp_min: z.number(),
    temp_max: z.number(),
    pressure: z.number(),
    sea_level: z.number(),
    grnd_level: z.number(),
    humidity: z.number(),
    temp_kf: z.number(),
  }),

  weather: z.array(
    z.object({
      id: z.number(),
      main: z.string(),
      description: z.string(),
      icon: z.string(),
    }),
  ),

  clouds: z.object({
    all: z.number(),
  }),

  wind: z.object({
    speed: z.number(),
    deg: z.number(),
    gust: z.number(),
  }),

  visibility: z.number(),

  pop: z.number(),

  sys: z.object({
    pod: z.string(), // "d" or "n"
  }),

  dt_txt: z.string(),
});

export const ForecastWeatherSchema = z.object({
  cod: z.string(),
  message: z.number(),
  cnt: z.number(),
  list: z.array(ForecastWeatherItemSchema),

  city: z.object({
    id: z.number(),
    name: z.string(),
    coord: z.object({
      lat: z.number(),
      lon: z.number(),
    }),
    country: z.string(),
    population: z.number(),
    timezone: z.number(),
    sunrise: z.number(),
    sunset: z.number(),
  }),
});

export type CurrentWeather = z.infer<typeof CurrentWeatherSchema>;
export type ForecastWeather = z.infer<typeof ForecastWeatherSchema>;