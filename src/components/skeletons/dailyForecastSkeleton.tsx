import Card from "../cards";
import { Skeleton } from "../ui/skeleton";

const DailyForecastSkeletonCard = () => (
  <Card title="Daily Forecast">
    <div className="flex flex-col gap-4 2xl:justify-between">
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className="flex justify-between">
          <Skeleton className="h-8 w-9" />
          <Skeleton className="size-8 rounded-full" />
          <Skeleton className="size-8" />
          <Skeleton className="size-8" />
          <Skeleton className="size-8" />
        </div>
      ))}
    </div>
  </Card>
);

export default DailyForecastSkeletonCard;
