import dayjs from 'dayjs';
import { capitalizeEachWords } from '../utils';
import getIcon from '../utils/getIcon';

export default function Weather({ data, isMetric }) {
  let country;
  try {
    country = new Intl.DisplayNames(['en'], { type: 'region' }).of(
      data.sys.country
    );
  } catch (error) {
    // do nothing
  }

  const icon = data.weather[0].icon;

  return (
    <div className="weather grid place-items-center">
      <div className="location text-center text-xl">
        {data.name}
        {country && `, ${country}`}
      </div>

      <div className="temperature relative w-fit pt-4 text-8xl font-light">
        <div className="flex flex-col">
          <div className="value grid place-items-center">
            {data.main.temp.toFixed()}
          </div>
          <div className="condition-icon grid place-items-center">
            {getIcon(data.weather[0].id, '6.5rem', icon.includes('d'))}
          </div>
          <div className="degree absolute top-7 -right-4 text-4xl">°</div>
          <div className="symbol absolute top-7 -right-7 text-xl font-bold">
            {isMetric ? 'C' : 'F'}
          </div>
        </div>
      </div>

      <div className="detail text-center text-lg">
        {capitalizeEachWords(data.weather[0].description)}
      </div>

      <div className="updated-at mt-2 text-center text-sm">
        {`Updated at ${dayjs((data.dt + data.timezone) * 1000)
          .utc()
          .format('HH:mm')}`}
      </div>
    </div>
  );
}
