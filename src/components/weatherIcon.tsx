import clsx from "clsx";

type Props = {
  icon: string;
  className?: string;
};

const WeatherIcon = ({ icon, className }: Props) => {
  return (
    <img
      src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
      alt="weather-icon"
      className={clsx("size-8", className)}
    />
  );
};

export default WeatherIcon;
