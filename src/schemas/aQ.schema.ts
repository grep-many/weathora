import { z } from "zod";

const AirPollutionItemSchema = z.object({
  main: z.object({
    aqi: z.number(), // Air Quality Index
  }),
  components: z.object({
    co: z.number(),
    no: z.number(),
    no2: z.number(),
    o3: z.number(),
    so2: z.number(),
    pm2_5: z.number(),
    pm10: z.number(),
    nh3: z.number(),
  }),
  dt: z.number(), // timestamp
});

export const AirPollutionSchema = z.object({
  coord: z.object({
    lon: z.number(),
    lat: z.number(),
  }),
  list: z.array(AirPollutionItemSchema),
});
