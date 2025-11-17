import Sunrise from "@/assets/sunrise.svg?react";
import Sunset from "@/assets/sunset.svg?react";
import Cloud from "@/assets/cloud.svg?react";
import Wind from "@/assets/wind.svg?react";
import Pressure from "@/assets/pressure.svg?react";
import Humidity from "@/assets/humidity.svg?react";
import UpArrow from "@/assets/uparrow.svg?react";

export const additionalWeatherRows = [
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
      <UpArrow
        className="size-8 dark:invert"
        style={{ transform: `rotate(${data.wind.deg}deg)` }}
      />
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
      new Intl.DateTimeFormat(undefined, {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "UTC",
      }).format(new Date((data.sys.sunrise + data.timezone) * 1000)),
    Icon: Sunrise,
  },
  {
    label: "Sunset",
    get: (data: CurrentWeather) =>
      new Intl.DateTimeFormat(undefined, {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "UTC",
      }).format(new Date((data.sys.sunset + data.timezone) * 1000)),
    Icon: Sunset,
  },
] as const;
