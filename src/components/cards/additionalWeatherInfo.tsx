import { useSuspenseQuery } from "@tanstack/react-query";
import Card from ".";
import getCurrentWeather from "@/api/weather/current";
import type { CurrentWeather } from "@/schemas/weather.schema";
import Sunrise from "@/assets/sunrise.svg?react";
import Sunset from "@/assets/sunset.svg?react";
import Cloud from "@/assets/cloud.svg?react";
import Wind from "@/assets/wind.svg?react";
import Pressure from "@/assets/pressure.svg?react";
import Humidity from "@/assets/humidity.svg?react";
import UpArrow from "@/assets/uparrow.svg?react";

type Props = {};

const AdditionalWeatherInfoCard = ({}: Props) => {
  const { data } = useSuspenseQuery({
    queryKey: ["current-weather"],
    queryFn: () => getCurrentWeather({ lat: 10, lon: 25 }),
  });

  return (
    <Card title="Additional Weather Info">
      <div className="flex flex-col gap-8">
        {rows.map(({ label, get, Icon }, i) => (
          <div key={i} className="flex justify-between">
            <div className="flex gap-4">
              <span className="text-gray-500">{label}</span>
              <Icon className="size-8 invert" />
            </div>
            <span>{get(data)}</span>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default AdditionalWeatherInfoCard;

const rows = [
  {
    label: "Cloudiness (%)",
    get: (data: CurrentWeather) => `${data.clouds.all}%`,
    Icon: Cloud,
  },
  {
    label: "Humidity (%)",
    get: (data: CurrentWeather) => `${data.main.humidity}%`,
    Icon: Humidity,
  },
  {
    label: "Wind Direction",
    get: (data: CurrentWeather) => (
      <UpArrow className="size-8 invert" style={{ transform: `rotate(${data.wind.deg}deg)` }} />
    ),
    Icon: Wind,
  },
  {
    label: "Pressure (hPa)",
    get: (data: CurrentWeather) => `${data.main.pressure} hPa`,
    Icon: Pressure,
  },
  {
    label: "Sunrise",
    get: (data: CurrentWeather) =>
      new Intl.DateTimeFormat("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "UTC",
      }).format(new Date((data.sys.sunrise + data.timezone) * 1000)),
    Icon: Sunrise,
  },
  {
    label: "Sunset",
    get: (data: CurrentWeather) =>
      new Intl.DateTimeFormat("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "UTC",
      }).format(new Date((data.sys.sunset + data.timezone) * 1000)),
    Icon: Sunset,
  },
] as const;
