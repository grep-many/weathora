const apiUrl = "https://api.openweathermap.org/data/2.5/";
const geoUrl = "https://api.openweathermap.org/geo/1.0/direct?q=";
const weatherApiKey = import.meta.env.VITE_WEATHER_API_KEY;
const tilerApiKey = import.meta.env.VITE_TILER_API_KEY;
const weatherMap = (layer: string) =>
  `https://tile.openweathermap.org/map/${layer}/{z}/{x}/{y}.png?appid=${weatherApiKey}`;

export { weatherApiKey,tilerApiKey, apiUrl, geoUrl, weatherMap };
