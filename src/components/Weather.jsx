import { Icon } from '@iconify/react';
import { clsx } from 'clsx';
import dayjs from 'dayjs';
import useAnimatedValue from '../hooks/useAnimatedValue';
import useWeather from '../hooks/useWeather';
import { capitalizeEachWords, getCountryNameByCode } from '../utils';
import WeatherIcon from './WeatherIcon';
import ForecastWrapper from './ForecastWrapper';

export default function Weather({ data }) {
  const { getWeather, getForecast, isMetric } = useWeather();
  const temperature = useAnimatedValue(0, parseInt(data?.main.temp.toFixed()) || 0);
  const windSpeed = useAnimatedValue(0, parseInt(data?.wind.speed.toFixed()) || 0);
  const humidity = useAnimatedValue(0, data?.main.humidity || 0);
  const clouds = useAnimatedValue(0, data?.clouds.all || 0);

  const country = getCountryNameByCode(data.sys.country);
  const location = data.name + (country ? `, ${country}` : '');
  const description = capitalizeEachWords(data.weather[0].description);
  const cfg = dayjs((data.dt + data.timezone) * 1000).utc();
  const date = cfg.format('dddd, D MMMM YYYY');
  const time = cfg.format('HH:mm');
  const weatherColor = {
    "bg-sky-700 text-white": data.weather[0].icon.includes('d'),
    "bg-sky-950 text-white": data.weather[0].icon.includes('n'),
  };

  return (
    <div className="overflow-hidden w-full rounded-md drop-shadow-md motion-safe:animate-zoom-in">
      <div className={clsx("relative p-4 duration-500", weatherColor)}>
        <div className="flex">
          <div className="grid place-items-center flex-1 text-6xl">
            <div>
              {temperature}
              <span className="text-base align-top">&deg;{isMetric ? 'C' : 'F'}</span>
            </div>
          </div>
          <div className="grid place-items-center flex-1">
            <WeatherIcon id={data.weather[0].id} width="6.5rem" daytime={data.weather[0].icon.includes('d')} />
            <div className="text-center">{description}</div>
          </div>
        </div>

        <button
          className="absolute top-2 right-2"
          aria-label="Refresh"
          onClick={() => {
            getWeather();
            getForecast();
          }}
        >
          <Icon icon="material-symbols:refresh" width="1.5rem" />
        </button>
      </div>

      <div className="bg-white p-3">
        <h1 className="text-lg font-bold">{location}</h1>
        <div className="text-sm">{date}</div>
        <div className="text-sm">{time}</div>

        <div className="flex pt-4 divide-x-2">
          <div className="flex-1 flex flex-col items-center">
            <div className="text-sm font-bold uppercase">Wind</div>
            <Icon icon="ph:wind-light" width="2rem" />
            <div className="text-sm">{windSpeed} {isMetric ? 'm/s' : 'mph'}</div>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <div className="text-sm font-bold uppercase">Humidity</div>
            <Icon icon="material-symbols-light:humidity-percentage-outline" width="2rem" />
            <div className="text-sm">{humidity} %</div>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <div className="text-sm font-bold uppercase">Clouds</div>
            <Icon icon="material-symbols-light:cloud-outline" width="2rem" />
            <div className="text-sm">{clouds} %</div>
          </div>
        </div>

      </div>
      <ForecastWrapper color={weatherColor} />
    </div>
  );
}
