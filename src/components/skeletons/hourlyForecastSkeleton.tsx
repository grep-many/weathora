import Card from "../cards";
import { Skeleton } from "../ui/skeleton";

const HourlyForecastSkeletonCard = () => (
  <Card title="Hourly Forecast (36 Hours)">
    <div className="flex gap-6 overflow-x-scroll">
      {Array.from({ length: 36 }).map((_, index) => (
        <div key={index} className="flex flex-col items-center gap-2 p-2 2xl:justify-between">
          <Skeleton className="h-6 w-15 2xl:scale-110" />
          <Skeleton className="size-8 rounded-full 2xl:size-10" />
          <Skeleton className="h-6 w-8 2xl:scale-110" />
        </div>
      ))}
    </div>
  </Card>
);

export default HourlyForecastSkeletonCard;
