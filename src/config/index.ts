const weatherApiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
const tilerApiKey = import.meta.env.VITE_MAPTILER_KEY;
const airQualityUrl = ({ lat, lon }: Coords) =>
  `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&units=imperial&appid=${weatherApiKey}`;
const currentWeatherUrl = ({ lat, lon }: Coords) =>
  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${weatherApiKey}`;
const forecastWeatherUrl = ({ lat, lon }: Coords) =>
  `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${weatherApiKey}`;
const geoUrl = (query: string) =>
  `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=1&appid=${weatherApiKey}`;
const weatherMap = (layer: string) =>
  `https://tile.openweathermap.org/map/${layer}/{z}/{x}/{y}.png?appid=${weatherApiKey}`;

export {
  weatherApiKey,
  tilerApiKey,
  currentWeatherUrl,
  forecastWeatherUrl,
  geoUrl,
  weatherMap,
  airQualityUrl,
};
