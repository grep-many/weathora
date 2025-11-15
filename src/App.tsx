import DailyForecastCard from "./components/cards/dailyForecast";
import HourlyForcastCard from "./components/cards/hourlyForecast";
import CurrentWeatherCard from "./components/cards/currentWeather";
import AdditionalWeatherInfoCard from "./components/cards/additionalWeatherInfo";

const App = () => {
  return (
    <div className="flex flex-col gap-8">
      <CurrentWeatherCard />
      <AdditionalWeatherInfoCard/>
      <HourlyForcastCard />
      <DailyForecastCard />
    </div>
  );
};

export default App;
