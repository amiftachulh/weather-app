import { Icon } from '@iconify/react';
import dayjs from 'dayjs';

export default function WeatherDetails({ data, isMetric }) {
  const sunrise = dayjs((data.sys.sunrise + data.timezone) * 1000)
    .utc()
    .format('HH:mm');
  const sunset = dayjs((data.sys.sunset + data.timezone) * 1000)
    .utc()
    .format('HH:mm');
  const feelsLike = `${data.main.feels_like.toFixed()} °${
    isMetric ? 'C' : 'F'
  }`;
  const humidity = `${data.main.humidity}%`;
  const pressure = `${data.main.pressure} hPa`;
  const cloudiness = `${data.clouds.all}%`;
  const visibility = `${
    isMetric
      ? (data.visibility / 1000).toFixed(1)
      : (data.visibility / 1609).toFixed(1)
  } ${isMetric ? 'km' : 'miles'}`;
  const rainVolume1h = data.rain && `${data.rain['1h']} mm`;
  const rainVolume3h = data.rain && `${data.rain['3h']} mm`;
  const snowVolume1h = data.snow && `${data.snow['1h']} mm`;
  const snowVolume3h = data.snow && `${data.snow['3h']} mm`;
  const wind = {
    speed: `${
      isMetric ? (data.wind.speed * 3.6).toFixed() : data.wind.speed.toFixed()
    } ${isMetric ? 'km/h' : 'miles/h'}`,
    direction: data.wind.deg,
  };

  return (
    <>
      <div className="title py-4 text-xl font-bold">Details</div>
      <div className="details grid gap-4 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7">
        <Detail title="Sunrise" value={sunrise} icon="mingcute:sunrise-fill" />

        <Detail title="Sunset" value={sunset} icon="mingcute:sunset-fill" />

        <Detail title="Feels Like" value={feelsLike} icon="mdi:temperature" />

        <Detail
          title="Humidity"
          value={humidity}
          icon="material-symbols:humidity-percentage"
        />

        <Detail title="Pressure" value={pressure} icon="mdi:barometer" />

        <Detail
          title="Cloudiness"
          value={cloudiness}
          icon="material-symbols:cloud"
        />

        <Detail
          title="Visibility"
          value={visibility}
          icon="material-symbols:visibility"
        />

        {data.rain && data.rain['1h'] && (
          <Detail
            title="Rain Volume (1H)"
            value={rainVolume1h}
            icon="material-symbols:rainy"
          />
        )}

        {data.rain && data.rain['3h'] && (
          <Detail
            title="Rain Volume (3H)"
            value={rainVolume3h}
            icon="material-symbols:rainy"
          />
        )}

        {data.snow && data.snow['1h'] && (
          <Detail
            title="Snow Volume (1H)"
            value={snowVolume1h}
            icon="material-symbols:weather-snowy"
          />
        )}

        {data.snow && data.snow['3h'] && (
          <Detail
            title="Snow Volume (3H)"
            value={snowVolume3h}
            icon="material-symbols:weather-snowy"
          />
        )}

        <Detail
          title="Wind"
          value={wind.speed}
          icon="solar:map-arrow-up-bold"
          rotate={wind.direction}
        />
      </div>
    </>
  );
}

function Detail({ title, value, icon, rotate }) {
  return (
    <div className="detail-container flex justify-between rounded-2xl bg-[#00000050] p-6">
      <div className="text">
        <div className="title text-xs uppercase">{title}</div>
        <div className="value text-lg font-bold">{value}</div>
      </div>
      <div
        className="icon self-end"
        style={rotate ? { transform: `rotate(${rotate}deg)` } : undefined}
      >
        <Icon icon={icon} width="2rem" height="2rem" />
      </div>
    </div>
  );
}
