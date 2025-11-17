import { weatherApiKey, apiUrl } from "@/config";

const getCurrentAirQuality = async ({ lat, lon }: { lat: number; lon: number }) => {
  const res = await fetch(
    `${apiUrl}air_pollution?lat=${lat}&lon=${lon}&units=imperial&appid=${weatherApiKey}`
  );
  const data = await res.json();
  return data;
};

export default getCurrentAirQuality;
