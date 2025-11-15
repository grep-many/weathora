import Card from ".";
import { useSuspenseQuery } from "@tanstack/react-query";
import getForecastWeather from "@/api/weather/forecast";
import WeatherIcon from "../weatherIcon";

type Props = {};

const HourlyForcastCard = ({}: Props) => {
  const { data } = useSuspenseQuery({
    queryKey: ["forecast-weather"],
    queryFn: () => getForecastWeather({ lat: 10, lon: 25 }),
  });

  return (
    <Card title="Forecast (36h)">
      <div className="flex gap-6 overflow-x-scroll">
        {data.list.slice(0, 36).map(({ dt, weather, main }) => (
          <div key={dt} className="flex flex-col items-center gap-2 p-2">
            <p className="whitespace-nowrap">
              {new Date(dt * 1000).toLocaleTimeString(undefined, {
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
