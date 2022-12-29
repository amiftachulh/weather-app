import { Icon } from '@iconify/react';

export default function Detail(props) {
  return (
    <div className="detail__item" key={props.title}>
      <div className="detail__title text-xs mb-1">{props.title}</div>
      <div className="detail__content flex items-center gap-2">
        {props.title === 'Wind Direction' ? (
          <span
            className="detail__icon"
            style={{
              transform: `rotate(${props.value}deg)`,
              transition: '0.5s',
            }}
          >
            <Icon icon={props.icon} height="1.5rem" />
          </span>
        ) : (
          <span className="detail__icon">
            <Icon icon={props.icon} height="1.5rem" />
          </span>
        )}
        <span className="detail__value">
          {props.value} {props.unit}
        </span>
      </div>
    </div>
  );
}
