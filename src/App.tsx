import React from "react";
import DailyForecastCard from "@/components/cards/dailyForecast";
import HourlyForcastCard from "@/components/cards/hourlyForecast";
import CurrentWeatherCard from "@/components/cards/currentWeather";
import AdditionalWeatherInfoCard from "@/components/cards/additionalWeatherInfo";
import Map from "@/components/map";
import { useSuspenseQuery } from "@tanstack/react-query";
import getGeoCode from "@/api/geoCode";
import CurrentWeatherSkeletonCard from "@/components/skeletons/currentWeatherSkeleton";
import Suspense from "@/components/skeletons";
import AdditionalWeatherInfoSkeletonCard from "@/components/skeletons/additionalWeatherInfoSkeleton";
import HourlyForecastSkeletonCard from "@/components/skeletons/hourlyForecastSkeleton";
import DailyForecastSkeletonCard from "@/components/skeletons/dailyForecastSkeleton";
import SidePanel from "@/components/sidebar";
import Header from "./components/header";

const App = () => {
  const [location, setLocation] = React.useState("Toronto, Canada");
  const [mapType, setMapType] = React.useState("clouds_new");
  const [isSidePanelOpen, setIsSidePanelOpen] = React.useState(false);
  const [coords, setCoords] = React.useState({
    lat: 10,
    lon: 25,
  });

  const { data } = useSuspenseQuery({
    queryKey: ["location", location],
    queryFn: () => getGeoCode(location),
  });

  const onMapClick = (lat: number, lon: number) => {
    setCoords({ lat, lon });
    setLocation("custom");
  };

  React.useEffect(() => {
    if (!("geolocation" in navigator)) return;

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCoords({ lat: latitude, lon: longitude });
        setLocation("custom");
      },
      (error) => {
        console.error(error);
        setLocation("Toronto, Canada");
      },
    );
  }, []);

  const coordinates = location === "custom" ? coords : { lat: data[0].lat, lon: data[0].lon };

  return (
    <>
      <div className="flex h-fit min-h-[max(1140px,100vh)] w-full flex-col gap-8 p-4 md:p-8 lg:w-[calc(100dvw-var(--sidebar-width))]">
        <Header
          location={location}
          setLocation={setLocation}
          mapType={mapType}
          setMapType={setMapType}
          setIsSidePanelOpen={setIsSidePanelOpen}
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 2xl:grid-cols-4 2xl:grid-rows-4">
          <Map coords={coordinates} onMapClick={onMapClick} layer={mapType} />
          <Suspense
            fallback={<CurrentWeatherSkeletonCard />}
            component={<CurrentWeatherCard coords={coordinates} />}
            className="cols-span-1 order-2 2xl:row-span-2"
          />
          <Suspense
            fallback={<DailyForecastSkeletonCard />}
            component={<DailyForecastCard coords={coordinates} />}
            className="cols-span-1 order-3 2xl:order-4 2xl:row-span-2"
          />
          <Suspense
            fallback={<HourlyForecastSkeletonCard />}
            component={<HourlyForcastCard coords={coordinates} />}
            className="cols-span-1 order-4 md:col-span-2 2xl:order-3 2xl:row-span-1"
          />
          <Suspense
            fallback={<AdditionalWeatherInfoSkeletonCard />}
            component={<AdditionalWeatherInfoCard coords={coordinates} />}
            className="cols-span-1 order-5 md:col-span-2 2xl:row-span-1"
          />
        </div>
      </div>
      <SidePanel
        coords={coordinates}
        isSidePanelOpen={isSidePanelOpen}
        setIsSidePanelOpen={setIsSidePanelOpen}
      />
    </>
  );
};

export default App;
