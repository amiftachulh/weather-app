import useWeather from '../hooks/useWeather';
import dayjs from 'dayjs';
import WeatherIcon from './WeatherIcon';

export default function Forecast() {
  const { forecast: data, isMetric } = useWeather();

  const indexes = [10, 18, 26, 32];
  const list = indexes.map(i => data.list[i]);

  const forecasts = list.map(l => {
    const day = dayjs(l.dt_txt).format('ddd');

    return (
      <div key={l.dt} className="flex-1 flex flex-col items-center">
        <div>{day}</div>
        <WeatherIcon
          id={l.weather[0].id}
          daytime={true}
          width="3rem"
        />
        <div className="text-sm">
          {l.main.temp.toFixed()} &deg;{isMetric ? 'C' : 'F'}
        </div>
      </div>
    );
  });

  return (
    <div className="flex mt-3">
      {forecasts}
    </div>
  );
}
