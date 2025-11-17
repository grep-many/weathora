import React from "react";
import DailyForecastCard from "@/components/cards/dailyForecast";
import HourlyForcastCard from "@/components/cards/hourlyForecast";
import CurrentWeatherCard from "@/components/cards/currentWeather";
import AdditionalWeatherInfoCard from "@/components/cards/additionalWeatherInfo";
import Map from "@/components/map";
import LocationDropDown from "@/components/dropdowns/location";
import { useSuspenseQuery } from "@tanstack/react-query";
import getGeoCode from "@/api/geoCode";
import MapTypeDropDown from "@/components/dropdowns/mapType";
import MapLegend from "@/components/map/legend";
import CurrentWeatherSkeletonCard from "@/components/skeletons/currentWeatherSkeleton";
import Suspense from "@/components/skeletons";
import AdditionalWeatherInfoSkeletonCard from "@/components/skeletons/additionalWeatherInfoSkeleton";
import HourlyForecastSkeletonCard from "@/components/skeletons/hourlyForecastSkeleton";
import DailyForecastSkeletonCard from "@/components/skeletons/dailyForecastSkeleton";
import SidePanel from "@/components/sidebar";
import Hamburger from "@/assets/hamburger.svg?react";

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

  const coordinates = React.useMemo(
    () => (location === "custom" ? coords : { lat: data[0].lat, lon: data[0].lon }),
    [location, coords],
  );

  return (
    <>
      <div className="flex h-fit w-full flex-col gap-8 p-8 lg:w-[calc(100dvw-var(--sidebar-width))] min-h-[max(1140px,100vh)]">
        <div className="flex justify-between gap-4 md:gap-8">
          <LocationDropDown location={location} setLocation={setLocation} />
          <MapTypeDropDown mapType={mapType} setMapType={setMapType} />
          <button className="lg:hidden" onClick={() => setIsSidePanelOpen(true)}>
            <Hamburger className="ml-auto size-6 invert" />
          </button>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 2xl:grid-cols-4 2xl:grid-rows-4">
          <section className="relative order-1 col-span-1 h-[50vh] md:h-[70vh] md:col-span-2 2xl:col-span-4 2xl:row-span-2 2xl:h-auto">
            <Map coords={coordinates} onMapClick={onMapClick} layer={mapType} />
            <MapLegend mapType={mapType} />
          </section>
          <Suspense
            fallback={<CurrentWeatherSkeletonCard />}
            component={<CurrentWeatherCard coords={coords} />}
            className="cols-span-1 order-2 2xl:row-span-2"
          />
          <Suspense
            fallback={<DailyForecastSkeletonCard />}
            component={<DailyForecastCard coords={coords} />}
            className="cols-span-1 order-3 2xl:order-4 2xl:row-span-2"
          />
          <Suspense
            fallback={<HourlyForecastSkeletonCard />}
            component={<HourlyForcastCard coords={coords} />}
            className="cols-span-1 order-4 md:col-span-2 2xl:order-3 2xl:row-span-1"
          />
          <Suspense
            fallback={<AdditionalWeatherInfoSkeletonCard />}
            component={<AdditionalWeatherInfoCard coords={coords} />}
            className="cols-span-1 order-5 md:col-span-2 2xl:row-span-1"
          />
        </div>
      </div>
      <SidePanel
        coords={coords}
        isSidePanelOpen={isSidePanelOpen}
        setIsSidePanelOpen={setIsSidePanelOpen}
      />
    </>
  );
};

export default App;
