import Card from "../cards";
import { Skeleton } from "../ui/skeleton";

const AdditionalWeatherInfoSkeletonCard = () => (
  <Card title="Additional Weather Info">
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className="flex justify-between">
          <div className="flex gap-4">
            <Skeleton className="h-8 w-20" />
            <Skeleton className="size-8 rounded-full" />
          </div>
          <Skeleton className="size-8" />
        </div>
      ))}
    </div>
  </Card>
);

export default AdditionalWeatherInfoSkeletonCard;
