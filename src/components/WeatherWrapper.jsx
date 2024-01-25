import Weather from './Weather';
import useWeather from '../hooks/useWeather';
import { Icon } from '@iconify/react';

export default function WeatherWrapper() {
  const { weather, weatherError } = useWeather();

  if (weatherError) {
    return (
      <div className="flex flex-col justify-center items-center w-full h-[30.75rem] p-4 bg-white rounded-md drop-shadow-md motion-safe:animate-zoom-in">
        <Icon icon="material-symbols-light:error-outline" width="5rem" className="mx-auto" />
        <h1 className="font-bold text-xl">{weatherError.status}</h1>
        <p>{weatherError.message}</p>
      </div>
    );
  }

  if (!weather) {
    return (
      <div className="grid place-items-center h-[30.75rem] py-10">
        <Icon icon="gis:map-search" width="5rem" />
      </div>
    );
  }

  return <Weather data={weather} />;
}
