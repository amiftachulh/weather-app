import { useRef, useState } from 'react';
import dayjs from 'dayjs';
import getIcon from '../utils/getIcon';

export default function Forecasts({ data }) {
  const scrollableRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  function handleMouseDown(event) {
    setIsDragging(true);
    setStartPosition(event.pageX - scrollableRef.current.offsetLeft);
    setScrollLeft(scrollableRef.current.scrollLeft);
  }

  function handleMouseLeave() {
    setIsDragging(false);
  }

  function handleMouseUp() {
    setIsDragging(false);
  }

  function handleMouseMove(event) {
    if (!isDragging) return;
    event.preventDefault();
    const distance =
      event.pageX - scrollableRef.current.offsetLeft - startPosition;
    scrollableRef.current.scrollLeft = scrollLeft - distance;
  }

  const forecastItems = data.list.map((forecast, index) => {
    const time = (forecast.dt + data.city.timezone) * 1000;
    const icon = forecast.weather[0].icon;

    return (
      <div
        key={index}
        className="forecast-item flex-shrink-0 flex-grow-0 basis-24 p-2 text-center"
      >
        <div className="date mb-1 text-xs">
          {dayjs(time).utc().format('DD-MM-YYYY')}
        </div>
        <div className="time text-xs">{dayjs(time).utc().format('HH:mm')}</div>
        <div className="icon grid place-items-center">
          {getIcon(forecast.weather[0].id, '3.75rem', icon.includes('d'))}
        </div>
        <div className="temperature text-lg">
          {`${forecast.main.temp.toFixed()}°`}
        </div>
      </div>
    );
  });

  return (
    <div className="forecasts-wrapper">
      <div className="title py-4 text-xl font-bold">Forecast</div>
      <div
        className="forecasts flex cursor-grab gap-4 overflow-x-scroll pb-2 active:cursor-grabbing"
        ref={scrollableRef}
        onMouseDown={(event) => handleMouseDown(event)}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={(event) => handleMouseMove(event)}
      >
        {forecastItems}
      </div>
    </div>
  );
}
