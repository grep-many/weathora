import { apiKey, apiUrl } from "@/config";

const getForecastAirQuality = async ({ lat, lon }: { lat: number; lon: number }) => {
  const res = await fetch(
    `${apiUrl}air_pollution/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`
  );
  const data = await res.json();
  return data;
};

export default getForecastAirQuality;
