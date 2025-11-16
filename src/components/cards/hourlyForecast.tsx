import Card from ".";
import { useSuspenseQuery } from "@tanstack/react-query";
import getForecastWeather from "@/api/weather/forecast";
import WeatherIcon from "@/components/weatherIcon";
import type { Coords } from "@/schemas/weather.schema";

type Props = {
  coords: Coords;
};

const HourlyForcastCard = ({ coords }: Props) => {
  const { data } = useSuspenseQuery({
    queryKey: ["forecast-weather", coords],
    queryFn: () => getForecastWeather({ lat: coords.lat, lon: coords.lon }),
  });

  return (
    <Card title="Forecast (36h)">
      <div className="flex gap-6 overflow-x-scroll">
        {data.list.slice(0, 36).map(({dt,dt_txt ,weather, main, }) => (
          <div key={dt} className="flex flex-col items-center gap-2 p-2">
            <p className="whitespace-nowrap">
              {new Date(dt_txt).toLocaleTimeString(undefined, {
                hour: "numeric",
                minute: "2-digit",
                hour12: true,
              })}
            </p>
            <WeatherIcon icon={weather[0].icon} />
            <p>{Math.round(main.temp)}°F</p>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default HourlyForcastCard;
