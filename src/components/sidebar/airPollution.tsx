import type { Coords } from "@/schemas/weather.schema";
import { useSuspenseQuery } from "@tanstack/react-query";
import Card from "../cards";
import { Slider } from "../ui/slider";
import {
  airQualityRanges,
  pollutantNameMapping,
  type Pollutant,
} from "@/assets/constants/airQualityRange";
import clsx from "clsx";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import Information from "@/assets/information.svg?react";
import getCurrentAirQuality from "@/api/air-pollution/current";

type Props = {
  coords: Coords;
};

const AirPollutionCard = ({ coords }: Props) => {
  const { data } = useSuspenseQuery({
    queryKey: ["pollution", coords],
    queryFn: () => getCurrentAirQuality(coords),
  });

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-semibold">Air Pollution</h1>
      <h1 className="text-5xl font-semibold">{data.list[0].main.aqi}</h1>
      <div className="flex items-center gap-2">
        <h1 className="text-2xl font-semibold">AQI</h1>
        <Tooltip>
          <TooltipTrigger>
            <Information className="size-4 dark:invert" />
          </TooltipTrigger>
          <TooltipContent className="bg-background/70 text-foreground z-2000 border backdrop-blur-sm">
            <p className="max-w-xs">
              Air Quality Index. Possible values: 1, 2, 3, 4, 5. Where 1 = Good, 2 = Fair, 3 =
              Moderate, 4 = Poor, 5 = Very Poor.
            </p>
          </TooltipContent>
        </Tooltip>
      </div>
      {Object.entries(data.list[0].components).map(([key, value]) => {
        const pollutant = airQualityRanges[key.toUpperCase() as keyof typeof airQualityRanges];
        const max = Math.max(pollutant["Very Poor"].min, value);
        const currentLevel = (() => {
          for (const [level, range] of Object.entries(pollutant)) {
            if (value >= range.min && (range.max === null || value <= range.max)) return level;
          }
          return "Very Poor";
        })();
        const qualityColor = (() => {
          switch (currentLevel) {
            case "Good":
              return "bg-green-500";
            case "Fair":
              return "bg-yellow-500";
            case "Moderate":
              return "bg-orange-500";
            case "Poor":
              return "bg-red-500";
            case "Very Poor":
              return "bg-purple-500";
            default:
              return "bg-zinc-500";
          }
        })();

        return (
          <Card
            key={key}
            className="from-sidebar-accent to-sidebar-accent/60 transition-transform hover:scale-105 motion-safe:duration-300 motion-reduce:duration-[0ms]"
          >
            <div className="flex flex-col gap-3">
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold capitalize">{key}</span>
                  <Tooltip>
                    <TooltipTrigger>
                      <Information className="size-4 dark:invert" />
                    </TooltipTrigger>
                    <TooltipContent className="bg-background/70 text-foreground z-2000 border backdrop-blur-sm">
                      <p className="max-w-xs">
                        Concentration of {pollutantNameMapping[key.toUpperCase() as Pollutant]}
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </div>
                <span className="text-lg font-semibold">{value}</span>
              </div>
              <Slider min={0} max={max} value={[value]} color={qualityColor} disabled />
              <div className="flex justify-between text-xs">
                <p>0</p>
                <p>{max}</p>
              </div>
              <div className="flex justify-between">
                {Object.keys(pollutant).map((quality) => (
                  <span
                    key={quality}
                    className={clsx(
                      "rounded-md px-2 py-1 text-xs font-medium",
                      quality === currentLevel
                        ? `${qualityColor} text-white`
                        : "bg-muted text-muted-foreground",
                    )}
                  >
                    {quality}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default AirPollutionCard;
