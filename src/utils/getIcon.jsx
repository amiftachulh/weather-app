import ClearDay from '../components/icons/ClearDay';
import ClearNight from '../components/icons/ClearNight';
import Cloud from '../components/icons/Cloud';
import Drizzle from '../components/icons/Drizzle';
import Dust from '../components/icons/Dust';
import ExtremeRain from '../components/icons/ExtremeRain';
import FewCloudsDay from '../components/icons/FewCloudsDay';
import FewCloudsNight from '../components/icons/FewCloudsNight';
import Fog from '../components/icons/Fog';
import Haze from '../components/icons/Haze';
import Mist from '../components/icons/Mist';
import OvercastClouds from '../components/icons/OvercastClouds';
import PartlyCloudyDaySnow from '../components/icons/PartlyCloudyDaySnow';
import PartlyCloudyNightSnow from '../components/icons/PartlyCloudyNightSnow';
import Rain from '../components/icons/Rain';
import RainDay from '../components/icons/RainDay';
import RainNight from '../components/icons/RainNight';
import Sleet from '../components/icons/Sleet';
import Smoke from '../components/icons/Smoke';
import Snow from '../components/icons/Snow';
import Thunderstorm from '../components/icons/Thunderstorm';
import ThunderstormRain from '../components/icons/ThunderstormRain';
import Tornado from '../components/icons/Tornado';

export default function getIcon(id, width, daytime) {
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
