import React from "react";
import DailyForecastCard from "@/components/cards/dailyForecast";
import HourlyForcastCard from "@/components/cards/hourlyForecast";
import CurrentWeatherCard from "@/components/cards/currentWeather";
import AdditionalWeatherInfoCard from "@/components/cards/additionalWeatherInfo";
import Map from "@/components/map";
import LocationDropDown from "@/components/dropdowns/location";

const App = () => {
  const [coords, setCoords] = React.useState({
    lat: 10,
    lon: 25,
  });

  const onMapClick = (lat: number, lon: number) => {
    setCoords({lat,lon})
  }

  return (
    <div className="flex flex-col gap-8">
      <LocationDropDown/>
      <Map coords={coords} onMapClick={ onMapClick} />
      <CurrentWeatherCard coords={coords} />
      <AdditionalWeatherInfoCard coords={coords} />
      <HourlyForcastCard coords={coords} />
      <DailyForecastCard coords={coords} />
    </div>
  );
};

export default App;
