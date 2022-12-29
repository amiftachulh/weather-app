import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

export default function Forecast(props) {
  return (
    <div className="forecast-item flex-shrink-0 flex-grow-0 basis-24 rounded-md bg-slate-900 bg-opacity-25 p-2 text-center">
      <div className="forecast-item__date mb-1 text-xs">{props.date}</div>
      <div className="forecast-item__time text-xs">{props.time}</div>
      <Tippy content={props.description}>
        <div className="forecast-item__icon grid place-items-center">
          <img
            src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`}
            width="60px"
          />
        </div>
      </Tippy>
      <div className="forecast-item__temperature text-lg">
        {props.temperature}
      </div>
    </div>
  );
}
