import { useSuspenseQuery } from "@tanstack/react-query";
import Card from ".";
import getCurrentWeather from "@/api/weather/current";
import type { Coords } from "@/schemas/weather.schema";
import { additionalWeatherRows } from "@/assets/constants/additionalWeahterRows";


type Props = {
  coords: Coords;
};

const AdditionalWeatherInfoCard = ({ coords }: Props) => {
  const { data } = useSuspenseQuery({
    queryKey: ["current-weather", coords],
    queryFn: () => getCurrentWeather({ lat: coords.lat, lon: coords.lon }),
  });

  return (
    <Card title="Additional Weather Info">
      <div className="flex flex-col gap-8">
        {additionalWeatherRows.map(({ label, get, Icon }, i) => (
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
