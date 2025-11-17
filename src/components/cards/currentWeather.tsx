import getCurrentWeather from "@/api/weather/current";
import { useSuspenseQuery } from "@tanstack/react-query";
import Card from ".";
import WeatherIcon from "@/components/weatherIcon";

type Props = {
  coords: Coords;
};

const CurrentWeatherCard = ({ coords }: Props) => {
  const { data } = useSuspenseQuery({
    queryKey: ["current-weather", coords],
    queryFn: () => getCurrentWeather({ lat: coords.lat, lon: coords.lon }),
  });

  return (
    <Card title="Current Weather">
      <div className="flex flex-col items-center gap-6">
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-center text-6xl font-semibold">{Math.round(data.main.temp)}°F</h2>
          <WeatherIcon icon={data.weather[0].icon} className="size-16" />
          <h3 className="text-xl capitalize">{data.weather[0].description}</h3>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-center text-xl">Local Time:</p>
          <h3 className="text-4xl font-semibold">
            {new Intl.DateTimeFormat(undefined, {
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
              timeZone: "UTC",
            }).format(new Date((data.dt + data.timezone) * 1000))}
          </h3>
        </div>
        <div className="flex w-full justify-between">
          <div className="flex flex-col items-center gap-2">
            <p className="text-gray-500">Feels Like</p>
            <p>{Math.round(data.main.feels_like)}°F</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-gray-500">Humidity</p>
            <p>{data.main.humidity}%</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-gray-500">Wind</p>
            <p>{data.wind.speed} mph</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CurrentWeatherCard;
