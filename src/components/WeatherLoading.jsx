import { Icon } from '@iconify/react';
import Skeleton from './Skeleton';

export default function WeatherLoading() {
  return (
    <div className="cursor-wait">
      <div className="loading grid h-[18.75rem] place-items-center">
        <Icon
          icon="mingcute:loading-fill"
          width="3rem"
          height="3rem"
          className="animate-spin"
        />
      </div>
      <div className="title place-self-start py-4 text-xl font-bold">
        Details
      </div>
      <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7">
        {[...Array(6)].map((_, index) => (
          <Skeleton
            key={index}
            style={{
              backgroundColor: '#00000050',
              borderRadius: '1rem',
              height: '5.75rem',
            }}
          />
        ))}
      </div>
    </div>
  );
}
