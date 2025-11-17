import Card from ".";
import { useSuspenseQuery } from "@tanstack/react-query";
import getForecastWeather from "@/api/weather/forecast";
import WeatherIcon from "@/components/weatherIcon";
import image from "@/assets/daily-img.png";

type Props = {
  coords: Coords;
};

const DailyForecastCard = ({ coords }: Props) => {
  const { data } = useSuspenseQuery({
    queryKey: ["forecast-weather", coords],
    queryFn: () => getForecastWeather({ lat: coords.lat, lon: coords.lon }),
  });

  return (
    <Card title="Daily Forecast">
      <div className="flex flex-col justify-between 2xl:gap-4">
        {data.list
          .filter((item) => item.dt_txt.includes("12:00:00"))
          .map(({ dt, weather, main, dt_txt }) => (
            <div key={dt} className="flex justify-between">
              <p className="w-9">
                {new Date(dt_txt).toLocaleDateString(undefined, {
                  weekday: "short",
                })}
              </p>
              <WeatherIcon icon={weather[0].icon} />
              <p>{Math.round(main.temp)}°F</p>
              <p className="text-gray-500/75">{Math.round(main.temp_min)}°F</p>
              <p className="text-gray-500/75">{Math.round(main.temp_max)}°F</p>
            </div>
          ))}
        <img src={image} alt="daily-image" className="h-47 drop-shadow-2xl" />
      </div>
    </Card>
  );
};

export default DailyForecastCard;
