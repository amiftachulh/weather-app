import { useRef, useState } from 'react';
import { Icon } from '@iconify/react';
import useWeather from '../hooks/useWeather';
import useDelayUnmount from '../hooks/useDelayUnmount';
import { clsx } from 'clsx';

export default function Navbar() {
  const { weatherLoading, setQuery, isMetric, swapUnits } = useWeather();
  const [showTooltip, setShowTooltip] = useState(false);
  const renderTooltip = useDelayUnmount(showTooltip, 250);
  const inputRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    const input = inputRef.current.value;
    if (input === '') return;
    setQuery(input);
    localStorage.setItem('query', input);
    inputRef.current.value = '';
  }

  return (
    <nav className="relative flex w-full h-16 px-3 justify-center items-center gap-2">
      <div className="relative overflow-hidden flex w-full bg-white border-2 border-slate-200 rounded-md duration-200 focus-within:border-slate-300">
        <form
          className="flex items-center gap-2 flex-1 p-2"
          onSubmit={handleSubmit}
        >
          <button type="submit" aria-label="Search">
            {weatherLoading ?
              <Icon icon="line-md:loading-loop" width="1.5rem" /> :
              <Icon icon="material-symbols-light:search" width="1.5rem" />
            }
          </button>

          <input
            ref={inputRef}
            type="text"
            className="w-full bg-inherit outline-none"
            placeholder="Search location here..."
          />

          <button
            type="button"
            aria-label="Help"
            aria-describedby="show-tooltip"
            onClick={() => setShowTooltip(prev => !prev)}
          >
            <Icon icon="material-symbols-light:help-outline" width="1.75rem" />
          </button>
        </form>

        <button
          className="w-10 bg-slate-100"
          onClick={swapUnits}
        >
          &deg;{isMetric ? 'C' : 'F'}
        </button>
      </div>

      {renderTooltip && (
        <div
          id="search-tooltip"
          className={clsx(
            "absolute top-14 left-0 mx-3 p-2 bg-neutral-50 border-2 border-slate-200 rounded-md z-20 origin-top-right",
            {
              "motion-safe:animate-slide-in": showTooltip,
              "motion-safe:animate-slide-out": !showTooltip,
            }
          )}
        >
          <p>You can search just by city name or followed by country code separated by comma.</p>
          <div className="mt-2">Examples:</div>
          <ul className="space-y-1">
            <li><pre className="inline p-1 bg-slate-200 rounded">greenwich</pre></li>
            <li><pre className="inline p-1 bg-slate-200 rounded">greenwich,uk</pre></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
