import { Icon } from '@iconify/react';
import useWeather from '../hooks/useWeather';
import Forecast from './Forecast';
import { clsx } from 'clsx';

export default function ForecastWrapper({ color }) {
  const { forecastError, forecastLoading } = useWeather();

  return (
    <div className={clsx("p-3 duration-500", color)}>
      <h2 className="font-bold">Forecast</h2>
      {forecastLoading ? (
        <div className="grid place-items-center w-[22.5rem] h-[6.5rem]">
          <Icon icon="gg:spinner-two-alt" width="2rem" className="animate-spin" />
        </div>
      ) : (
        forecastError ? (
          <div className="grid place-items-center w-[22.5rem] h-[6.5rem]">
            {forecastError}
          </div>) : <Forecast />
      )}
    </div>
  );
}
