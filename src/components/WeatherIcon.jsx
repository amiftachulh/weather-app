import ClearDay from './icons/ClearDay';
import ClearNight from './icons/ClearNight';
import Cloud from './icons/Cloud';
import Drizzle from './icons/Drizzle';
import Dust from './icons/Dust';
import ExtremeRain from './icons/ExtremeRain';
import FewCloudsDay from './icons/FewCloudsDay';
import FewCloudsNight from './icons/FewCloudsNight';
import Fog from './icons/Fog';
import Haze from './icons/Haze';
import Mist from './icons/Mist';
import OvercastClouds from './icons/OvercastClouds';
import PartlyCloudyDaySnow from './icons/PartlyCloudyDaySnow';
import PartlyCloudyNightSnow from './icons/PartlyCloudyNightSnow';
import Rain from './icons/Rain';
import RainDay from './icons/RainDay';
import RainNight from './icons/RainNight';
import Sleet from './icons/Sleet';
import Smoke from './icons/Smoke';
import Snow from './icons/Snow';
import Thunderstorm from './icons/Thunderstorm';
import ThunderstormRain from './icons/ThunderstormRain';
import Tornado from './icons/Tornado';

export default function WeatherIcon({ id, width, daytime }) {
  if (id >= 200 && id <= 202) {
    return <ThunderstormRain width={width} />;
  }

  if (id >= 210 && id <= 232) {
    return <Thunderstorm width={width} />;
  }

  if (id >= 300 && id <= 321) {
    return <Drizzle width={width} />;
  }

  if (id >= 500 && id <= 503) {
    if (daytime) {
      return <RainDay width={width} />;
    }
    return <RainNight width={width} />;
  }

  if (id === 504) {
    return <ExtremeRain width={width} />;
  }

  if (id === 511) {
    if (daytime) {
      return <PartlyCloudyDaySnow width={width} />;
    }
    return <PartlyCloudyNightSnow width={width} />;
  }

  if (id >= 520 && id <= 531) {
    return <Rain width={width} />;
  }

  if ((id >= 600 && id <= 602) || (id >= 615 && id <= 622)) {
    return <Snow width={width} />;
  }

  if (id >= 611 && id <= 613) {
    return <Sleet width={width} />;
  }

  if (id === 701 || id === 771) {
    return <Mist width={width} />;
  }

  if (id === 711 || id === 762) {
    return <Smoke width={width} />;
  }

  if (id === 721) {
    return <Haze width={width} />;
  }

  if ([731, 751, 761].includes(id)) {
    return <Dust width={width} />;
  }

  if (id === 741) {
    return <Fog width={width} />;
  }

  if (id === 781) {
    return <Tornado width={width} />;
  }

  if (id === 800) {
    if (daytime) {
      return <ClearDay width={width} />;
    }
    return <ClearNight width={width} />;
  }

  if (id === 801) {
    if (daytime) {
      return <FewCloudsDay width={width} />;
    }
    return <FewCloudsNight width={width} />;
  }

  if (id === 802 || id === 803) {
    return <Cloud width={width} />;
  }

  if (id === 804) {
    return <OvercastClouds width={width} />;
  }
}
