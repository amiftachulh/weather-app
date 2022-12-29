import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

export default function Weather(props) {
  return (
    <div className="weather grid place-items-center">
      <div className="weather__location text-lg font-semibold">
        {props.name}, {new Intl.DisplayNames(['en'], { type: 'region' }).of(props.country)}
      </div>
      <div className="weather__temperature relative w-fit py-4 text-8xl font-light">
        <Tippy content={`Updated at ${props.updatedAt}`}>
          <div className="weather__temperature__value">{props.temperature}</div>
        </Tippy>
        <div className="weather__temperature__degree absolute top-7 -right-4 text-4xl">°</div>
        <div className="weather__temperature__symbol absolute top-7 -right-7 text-xl font-bold">
          {props.units}
        </div>
      </div>
      <div className="weather__condition rounded-md px-8 py-2 text-center">
        <div className="weather__condition__main">{props.main}</div>
        <div className="weather__condition__icon grid place-items-center">
          <img src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`} />
        </div>
        <div className="weather__condition__detail text-xs">{props.description}</div>
      </div>
    </div>
  );
}
