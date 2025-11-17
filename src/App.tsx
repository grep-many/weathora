import React from "react";
import DailyForecastCard from "@/components/cards/dailyForecast";
import HourlyForcastCard from "@/components/cards/hourlyForecast";
import CurrentWeatherCard from "@/components/cards/currentWeather";
import AdditionalWeatherInfoCard from "@/components/cards/additionalWeatherInfo";
import Map from "@/components/map";
import LocationDropDown from "@/components/dropdowns/location";
import { useSuspenseQuery } from "@tanstack/react-query";
import getGeoCode from "./api/geoCode";
import MapTypeDropDown from "./components/dropdowns/mapType";
import MapLegend from "./components/map/legend";

const App = () => {
  const [location, setLocation] = React.useState("Toronto, Canada");
  const [mapType, setMapType] = React.useState("clouds_new");
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

  const coordinates = location === "custom" ? coords : { lat: data[0].lat, lon: data[0].lon };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex gap-8">
        <LocationDropDown location={location} setLocation={setLocation} />
        <MapTypeDropDown mapType={mapType} setMapType={setMapType} />
      </div>
      <div className="relative">
        <Map coords={coordinates} onMapClick={onMapClick} layer={mapType} />
        <MapLegend mapType={mapType} />
      </div>
      <CurrentWeatherCard coords={coords} />
      <AdditionalWeatherInfoCard coords={coords} />
      <HourlyForcastCard coords={coords} />
      <DailyForecastCard coords={coords} />
    </div>
  );
};

export default App;
